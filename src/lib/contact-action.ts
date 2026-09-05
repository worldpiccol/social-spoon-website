"use server"

import { headers } from "next/headers"
import { contactReasons } from "@/content/services"
import { isSupportEmailConfigured, SUPPORT_EMAIL } from "@/content/site"
import { rateLimit } from "@/lib/rate-limit"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
  fieldErrors?: Record<string, string>
  attempt?: number
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ALLOWED_SERVICES = new Set(contactReasons.map((reason) => reason.value))

function readString(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function result(
  state: Omit<ContactState, "attempt">,
): ContactState {
  return { ...state, attempt: Date.now() }
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const headerList = await headers()
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown"

  const limited = rateLimit(`contact:${ip}`, {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  })

  if (!limited.success) {
    return result({
      status: "error",
      message:
        "Too many messages were sent from this connection. Please wait a few minutes and try again.",
    })
  }

  const honeypot = readString(formData, "website")
  if (honeypot) {
    return result({
      status: "success",
      message:
        "Thank you. Your message has been received. Our team will review it and respond as soon as possible.",
    })
  }

  const startedAt = Number(readString(formData, "startedAt"))
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 2000) {
    return result({
      status: "error",
      message: "Please take a moment to complete the form before sending.",
    })
  }

  const name = readString(formData, "name")
  const email = readString(formData, "email")
  const service = readString(formData, "service")
  const message = readString(formData, "message")
  const phone = readString(formData, "phone")

  const fieldErrors: Record<string, string> = {}

  if (name.length < 2 || name.length > 100) {
    fieldErrors.name = "Please enter your full name."
  }

  if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Please enter a valid email address."
  }

  if (!ALLOWED_SERVICES.has(service as (typeof contactReasons)[number]["value"])) {
    fieldErrors.service = "Please choose a service or reason for contact."
  }

  if (message.length < 10 || message.length > 5000) {
    fieldErrors.message = "Please enter a message of at least 10 characters."
  }

  if (phone.length > 40) {
    fieldErrors.phone = "Please enter a shorter phone or WhatsApp number."
  }

  const secretPattern =
    /\b(password|passwd|2fa|one[-\s]?time code|otp|recovery code|backup code|authentication code)\b/i
  if (secretPattern.test(message) || secretPattern.test(name)) {
    fieldErrors.message =
      "Please do not include passwords, 2FA codes, recovery codes, or other login details."
  }

  if (Object.keys(fieldErrors).length > 0) {
    return result({
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    })
  }

  const payload = {
    name,
    email,
    service,
    phone: phone || undefined,
    message,
    receivedAt: new Date().toISOString(),
  }

  if (isSupportEmailConfigured) {
    console.info("Contact enquiry for", SUPPORT_EMAIL, {
      name: payload.name,
      email: payload.email,
      service: payload.service,
    })
  } else {
    console.info("Contact enquiry received (support email not configured)", {
      name: payload.name,
      email: payload.email,
      service: payload.service,
    })
  }

  return result({
    status: "success",
    message:
      "Thank you. Your message has been received. Our team will review it and respond as soon as possible. Please do not send passwords or authentication codes.",
  })
}
