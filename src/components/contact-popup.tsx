"use client"

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import type { VariantProps } from "class-variance-authority"
import { cn } from "cn"
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

const SPOON_WIDTH = 252
const SPOON_HEIGHT = SPOON_WIDTH * (452 / 258)
const SPOON_GAP = 8
const VIEWPORT_MARGIN = 12

type SpoonPlacement = {
  top: number
  left: number
  width: number
  inverted: boolean
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function placeSpoon(
  anchor: HTMLElement,
  preferredSide: "top" | "bottom" | "left" | "right",
): SpoonPlacement {
  const rect = anchor.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const spaceAbove = rect.top - VIEWPORT_MARGIN
  const spaceBelow = viewportHeight - rect.bottom - VIEWPORT_MARGIN
  const preferAbove = preferredSide !== "bottom"
  const aboveFits = spaceAbove >= SPOON_HEIGHT + SPOON_GAP
  const belowFits = spaceBelow >= SPOON_HEIGHT + SPOON_GAP

  let inverted = false
  if (preferAbove) {
    inverted = aboveFits ? false : belowFits || spaceBelow > spaceAbove
  } else {
    inverted = belowFits ? true : !(aboveFits || spaceAbove >= spaceBelow)
  }

  const available = inverted ? spaceBelow : spaceAbove
  const scale = clamp((available - SPOON_GAP) / SPOON_HEIGHT, 0.62, 1)
  const width = SPOON_WIDTH * scale
  const height = SPOON_HEIGHT * scale
  const centerX = rect.left + rect.width / 2
  const left = clamp(
    centerX - width / 2,
    VIEWPORT_MARGIN,
    Math.max(VIEWPORT_MARGIN, viewportWidth - width - VIEWPORT_MARGIN),
  )
  const top = inverted
    ? rect.bottom + SPOON_GAP
    : rect.top - height - SPOON_GAP

  return { top, left, width, inverted }
}

export function ContactButton({
  children,
  className,
  variant = "default",
  size = "xl",
  onClick,
  side = "top",
  ...props
}: ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants> & {
    side?: "top" | "bottom" | "left" | "right"
  }) {
  const titleId = useId()
  const descriptionId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<SpoonPlacement | null>(null)

  const updatePlacement = useCallback(() => {
    const trigger = triggerRef.current
    if (!trigger) return
    setPlacement(placeSpoon(trigger, side))
  }, [side])

  const close = useCallback(() => setOpen(false), [])

  useLayoutEffect(() => {
    if (!open) return
    updatePlacement()
    window.addEventListener("resize", updatePlacement)
    window.addEventListener("scroll", updatePlacement, true)
    return () => {
      window.removeEventListener("resize", updatePlacement)
      window.removeEventListener("scroll", updatePlacement, true)
    }
  }, [open, updatePlacement])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
    }
    window.addEventListener("keydown", onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, close])

  return (
    <>
      <Button
        ref={triggerRef}
        type="button"
        variant={variant}
        size={size}
        className={cn("w-fit max-w-full", className)}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={(event) => {
          onClick?.(event)
          if (event.defaultPrevented) return
          setOpen((current) => !current)
        }}
        {...props}
      >
        {children}
      </Button>
      {open && placement
        ? createPortal(
            <div className="fixed inset-0 z-[80]">
              <button
                type="button"
                aria-label="Close contact menu"
                className="absolute inset-0 bg-[#000120]/30 supports-backdrop-filter:backdrop-blur-sm"
                onClick={close}
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                className="absolute outline-none"
                style={{
                  top: placement.top,
                  left: placement.left,
                  width: placement.width,
                }}
              >
                <h2 id={titleId} className="sr-only">
                  Contact Social Spoon
                </h2>
                <p id={descriptionId} className="sr-only">
                  Reach Social Spoon on WhatsApp, Instagram, TikTok, Snapchat,
                  or email.
                </p>
                <SpoonContact inverted={placement.inverted} />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}

function SpoonContact({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className={cn(inverted && "rotate-180")}>
      <div className="animate-spoon-pop relative drop-shadow-[0_12px_28px_rgba(0,1,32,0.22)]">
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
            const className = cn(
              "absolute flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_2px_8px_rgba(0,1,32,0.2)] ring-1 ring-black/8 touch-manipulation",
              inverted && "rotate-180",
            )
            if (!item.href) {
              return (
                <span
                  key={item.name}
                  style={{ top: item.top, left: item.left }}
                  className={className}
                  aria-hidden="true"
                >
                  <Icon className="size-7" />
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
                <Icon className="size-7" />
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
