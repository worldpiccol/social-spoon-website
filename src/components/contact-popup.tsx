"use client"

import type { ComponentProps } from "react"
import Image from "next/image"
import { Popover } from "@base-ui/react/popover"
import type { VariantProps } from "class-variance-authority"
import {
  EmailIcon,
  FacebookIcon,
  socialIcons,
} from "@/components/social-icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { socialLinks, SUPPORT_EMAIL } from "@/content/site"

type SpoonItem = {
  name: string
  href?: string
  icon: typeof EmailIcon
  top: string
  left: string
  external?: boolean
}

const spoonItems: SpoonItem[] = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    top: "30.7%",
    left: "12%",
  },
  {
    name: "WhatsApp",
    href: socialLinks.find((link) => link.name === "WhatsApp")!.href,
    icon: socialIcons.WhatsApp,
    top: "21.1%",
    left: "22%",
    external: true,
  },
  {
    name: "Instagram",
    href: socialLinks.find((link) => link.name === "Instagram")!.href,
    icon: socialIcons.Instagram,
    top: "17.3%",
    left: "38%",
    external: true,
  },
  {
    name: "TikTok",
    href: socialLinks.find((link) => link.name === "TikTok")!.href,
    icon: socialIcons.TikTok,
    top: "17.3%",
    left: "62%",
    external: true,
  },
  {
    name: "Snapchat",
    href: socialLinks.find((link) => link.name === "Snapchat")!.href,
    icon: socialIcons.Snapchat,
    top: "23.1%",
    left: "72.4%",
    external: true,
  },
  {
    name: "Email",
    href: `mailto:${SUPPORT_EMAIL}`,
    icon: EmailIcon,
    top: "30.7%",
    left: "80.5%",
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
            <Popover.Title className="sr-only">
              Contact Social Spoon
            </Popover.Title>
            <Popover.Description className="sr-only">
              Reach Social Spoon on WhatsApp, Instagram, TikTok, Snapchat, or
              email.
            </Popover.Description>
            <SpoonContact />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

function SpoonContact() {
  return (
    <div className="animate-spoon-pop relative w-52 drop-shadow-[0_12px_28px_rgba(0,1,32,0.22)]">
      <Image
        src="/brand/contact-spoon.png"
        alt=""
        width={258}
        height={452}
        className="h-auto w-full"
      />
      <nav aria-label="Contact Social Spoon">
        {spoonItems.map((item) => {
          const Icon = item.icon
          const className =
            "absolute flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-black"
          if (!item.href) {
            return (
              <span
                key={item.name}
                style={{ top: item.top, left: item.left }}
                className={className}
                aria-hidden="true"
              >
                <Icon className="size-5" />
              </span>
            )
          }
          return (
            <a
              key={item.name}
              href={item.href}
              style={{ top: item.top, left: item.left }}
              className={`${className} transition hover:scale-110 focus-visible:scale-110`}
              aria-label={
                item.external
                  ? `${item.name} (opens in a new tab)`
                  : `Email ${SUPPORT_EMAIL}`
              }
              {...(item.external
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
