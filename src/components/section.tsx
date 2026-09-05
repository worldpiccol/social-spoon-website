import type { ReactNode } from "react"
import { cn } from "cn"
import { Container } from "@/components/container"

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode
  className?: string
  id?: string
  tone?: "default" | "muted" | "ink"
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-28",
        tone === "muted" && "bg-muted",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  )
}
