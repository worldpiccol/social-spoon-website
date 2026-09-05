import { cn } from "cn"

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  invert = false,
  headingAs: HeadingTag = "h2",
}: {
  eyebrow?: string
  heading: string
  description?: string
  align?: "left" | "center"
  invert?: boolean
  headingAs?: "h1" | "h2" | "h3"
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs font-medium tracking-[0.22em] uppercase",
            invert ? "text-gold" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={cn(
          "text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
          invert ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {heading}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            invert ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
