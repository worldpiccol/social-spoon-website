import type { Metadata } from "next"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/content/site"

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
}: {
  title: string | { absolute: string }
  description: string
  path: string
  ogTitle?: string
}): Metadata {
  const url = `${SITE_URL}${path}`
  const resolvedTitle =
    ogTitle ?? (typeof title === "string" ? title : title.absolute)

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  }
}

export const defaultDescription = SITE_DESCRIPTION
