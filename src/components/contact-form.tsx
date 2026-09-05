"use client"

import { useActionState, useState, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactReasons } from "@/content/services"
import { submitContact, type ContactState } from "@/lib/contact-action"
import { cn } from "cn"

const initialState: ContactState = {
  status: "idle",
  message: "",
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  )
  const [startedAt] = useState(() => String(Date.now()))

  if (state.status === "success") {
    return (
      <div
        className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        role="status"
      >
        <p className="text-lg font-medium">Message received</p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <input type="hidden" name="startedAt" value={startedAt} />
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Field
        id="name"
        label="Full name"
        error={state.fieldErrors?.name}
        required
      >
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          maxLength={100}
          className="h-11"
          aria-invalid={Boolean(state.fieldErrors?.name)}
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
        />
      </Field>

      <Field
        id="email"
        label="Email address"
        error={state.fieldErrors?.email}
        required
      >
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-11"
          aria-invalid={Boolean(state.fieldErrors?.email)}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
        />
      </Field>

      <Field
        id="phone"
        label="Phone / WhatsApp"
        hint="Optional"
        error={state.fieldErrors?.phone}
      >
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="h-11"
          aria-invalid={Boolean(state.fieldErrors?.phone)}
          aria-describedby={state.fieldErrors?.phone ? "phone-error" : undefined}
        />
      </Field>

      <Field
        id="service"
        label="Service / reason for contact"
        error={state.fieldErrors?.service}
        required
      >
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          aria-invalid={Boolean(state.fieldErrors?.service)}
          aria-describedby={state.fieldErrors?.service ? "service-error" : undefined}
          className={cn(
            "h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-base outline-none transition-colors md:text-sm",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
            "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
          )}
        >
          <option value="" disabled>
            Select a service or reason
          </option>
          {contactReasons.map((reason) => (
            <option key={reason.value} value={reason.value}>
              {reason.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="message"
        label="Message"
        error={state.fieldErrors?.message}
        required
      >
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className="min-h-32"
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
        />
      </Field>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Do not include passwords, login credentials, 2FA codes, recovery codes,
        or other authentication secrets. Submitting this form does not guarantee
        account recovery or a particular outcome.
      </p>

      {state.status === "error" && !state.fieldErrors ? (
        <p className="text-sm text-destructive" role="alert">
          {state.message}
        </p>
      ) : null}

      {state.status === "error" && state.fieldErrors ? (
        <p className="text-sm text-destructive" role="alert">
          {state.message}
        </p>
      ) : null}

      <Button type="submit" size="xl" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  required?: boolean
  children: ReactNode
}) {
  const errorId = `${id}-error`

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={id}>
          {label}
          {required ? (
            <span className="text-destructive" aria-hidden="true">
              *
            </span>
          ) : null}
        </Label>
        {hint ? (
          <span className="text-xs text-muted-foreground">{hint}</span>
        ) : null}
      </div>
      {children}
      {error ? (
        <p id={errorId} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
