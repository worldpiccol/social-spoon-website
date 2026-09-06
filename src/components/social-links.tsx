import { cn } from "cn"
import { socialIcons } from "@/components/social-icons"
import { socialLinks } from "@/content/site"

export function SocialLinks({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socialLinks.map((link) => {
        const Icon = socialIcons[link.name]
        return (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-full border transition-colors",
                invert
                  ? "border-ink-foreground/15 text-ink-foreground hover:bg-ink-foreground/10"
                  : "border-border bg-card text-foreground hover:bg-muted",
              )}
              aria-label={`${link.name} (opens in a new tab)`}
            >
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
