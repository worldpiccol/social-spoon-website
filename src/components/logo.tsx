import Link from "next/link"
import { cn } from "cn"
import { SITE_NAME } from "@/content/site"

export function Logo({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md focus-visible:outline-offset-4",
        className,
      )}
      aria-label={`${SITE_NAME} home`}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex size-8 items-center justify-center rounded-md text-[0.7rem] font-semibold tracking-wide",
          invert
            ? "bg-ink-foreground/10 text-ink-foreground"
            : "bg-primary text-primary-foreground",
        )}
      >
        SS
      </span>
      <span
        className={cn(
          "text-[0.78rem] font-medium tracking-[0.2em] sm:text-[0.82rem]",
          invert ? "text-ink-foreground" : "text-foreground",
        )}
      >
        SOCIAL SPOON
      </span>
    </Link>
  )
}
