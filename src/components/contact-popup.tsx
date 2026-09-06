"use client"

import type { ComponentProps } from "react"
import { Popover } from "@base-ui/react/popover"
import type { VariantProps } from "class-variance-authority"
import { EmailIcon, socialIcons } from "@/components/social-icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { socialLinks, SUPPORT_EMAIL } from "@/content/site"

type SpoonLink = {
  name: string
  href: string
  icon: typeof EmailIcon
  top: string
  left: string
  external?: boolean
}

const spoonLinks: SpoonLink[] = [
  {
    name: "WhatsApp",
    href: socialLinks.find((link) => link.name === "WhatsApp")!.href,
    icon: socialIcons.WhatsApp,
    top: "46.5%",
    left: "23%",
    external: true,
  },
  {
    name: "Instagram",
    href: socialLinks.find((link) => link.name === "Instagram")!.href,
    icon: socialIcons.Instagram,
    top: "24.5%",
    left: "28%",
    external: true,
  },
  {
    name: "TikTok",
    href: socialLinks.find((link) => link.name === "TikTok")!.href,
    icon: socialIcons.TikTok,
    top: "14.8%",
    left: "50%",
    external: true,
  },
  {
    name: "Snapchat",
    href: socialLinks.find((link) => link.name === "Snapchat")!.href,
    icon: socialIcons.Snapchat,
    top: "24.5%",
    left: "72%",
    external: true,
  },
  {
    name: "Email",
    href: `mailto:${SUPPORT_EMAIL}`,
    icon: EmailIcon,
    top: "46.5%",
    left: "77%",
  },
]

export function ContactButton({
  children,
  className,
  variant = "default",
  size = "xl",
  onClick,
  side = "bottom",
  ...props
}: ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants> & {
    side?: "top" | "bottom" | "left" | "right"
  }) {
  return (
    <Popover.Root>
      <Popover.Trigger
        render={
          <Button
            type="button"
            variant={variant}
            size={size}
            className={className}
            {...props}
          />
        }
        onClick={onClick}
      >
        {children}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          side={side}
          align="center"
          sideOffset={10}
          collisionPadding={16}
          className="z-50"
        >
          <Popover.Popup className="origin-[var(--transform-origin)] outline-none">
            <SpoonContact />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

function SpoonContact() {
  return (
    <div className="animate-spoon-pop relative w-60 drop-shadow-[0_12px_28px_rgba(0,1,32,0.22)]">
      <SpoonMark />
      <nav aria-label="Contact Social Spoon">
        {spoonLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.href}
              style={{ top: link.top, left: link.left }}
              className="absolute flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-black transition hover:scale-110 focus-visible:scale-110"
              aria-label={
                link.external
                  ? `${link.name} (opens in a new tab)`
                  : `Email ${SUPPORT_EMAIL}`
              }
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : undefined)}
            >
              <Icon className="size-5" />
            </a>
          )
        })}
      </nav>
    </div>
  )
}

function SpoonMark() {
  return (
    <svg viewBox="0 0 280 310" className="h-auto w-full" aria-hidden="true">
      <path
        fill="#5DD4DF"
        d="M134 18C36 30 10 96 10 168 10 228 78 268 134 292 137 298 143 298 146 292 202 268 270 228 270 168 270 96 244 30 146 18L146 78A30 46 0 1 1 134 78Z"
      />
      <path
        d="M162 108c8 14 8 36 0 50"
        fill="none"
        stroke="#E8FBFC"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  )
}
