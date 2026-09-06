"use client"

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react"
import { Dialog } from "@base-ui/react/dialog"
import type { VariantProps } from "class-variance-authority"
import { XIcon } from "lucide-react"
import {
  EmailIcon,
  socialIcons,
} from "@/components/social-icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { socialLinks, SUPPORT_EMAIL } from "@/content/site"

const ContactPopupContext = createContext<{ open: () => void } | null>(null)

export function useContactPopup() {
  const context = useContext(ContactPopupContext)
  if (!context) {
    throw new Error("useContactPopup must be used within ContactPopupProvider")
  }
  return context
}

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const value = useMemo(() => ({ open: () => setOpen(true) }), [])

  return (
    <ContactPopupContext.Provider value={value}>
      {children}
      <SpoonContactDialog open={open} onOpenChange={setOpen} />
    </ContactPopupContext.Provider>
  )
}

export function ContactButton({
  children,
  className,
  variant = "default",
  size = "xl",
  onClick,
  ...props
}: ComponentProps<typeof Button> & VariantProps<typeof buttonVariants>) {
  const popup = useContactPopup()

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) popup.open()
      }}
    >
      {children}
    </Button>
  )
}

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
    top: "42.5%",
    left: "20%",
    external: true,
  },
  {
    name: "Instagram",
    href: socialLinks.find((link) => link.name === "Instagram")!.href,
    icon: socialIcons.Instagram,
    top: "26%",
    left: "24%",
    external: true,
  },
  {
    name: "TikTok",
    href: socialLinks.find((link) => link.name === "TikTok")!.href,
    icon: socialIcons.TikTok,
    top: "18.5%",
    left: "50%",
    external: true,
  },
  {
    name: "Snapchat",
    href: socialLinks.find((link) => link.name === "Snapchat")!.href,
    icon: socialIcons.Snapchat,
    top: "26%",
    left: "76%",
    external: true,
  },
  {
    name: "Email",
    href: `mailto:${SUPPORT_EMAIL}`,
    icon: EmailIcon,
    top: "42.5%",
    left: "80%",
  },
]

function SpoonContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/85 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          className="fixed inset-0 z-50 flex items-center justify-center p-5 outline-none"
          style={{ transform: "none", top: 0, left: 0, maxWidth: "none" }}
        >
          <Dialog.Title className="sr-only">Contact Social Spoon</Dialog.Title>
          <Dialog.Description className="sr-only">
            Reach Social Spoon on WhatsApp, Instagram, TikTok, Snapchat, or
            email.
          </Dialog.Description>
          <Dialog.Close
            render={
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/10"
                aria-label="Close"
              />
            }
          >
            <XIcon className="size-5" />
          </Dialog.Close>
          <div className="animate-spoon-pop relative w-[min(20rem,84vw)]">
            <SpoonMark />
            <nav aria-label="Contact Social Spoon">
              {spoonLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    style={{ top: link.top, left: link.left }}
                    className="absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-black transition hover:scale-110 focus-visible:scale-110 sm:size-12"
                    aria-label={
                      link.external
                        ? `${link.name} (opens in a new tab)`
                        : `Email ${SUPPORT_EMAIL}`
                    }
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : undefined)}
                  >
                    <Icon className="size-6 sm:size-7" />
                  </a>
                )
              })}
            </nav>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function SpoonMark() {
  return (
    <svg
      viewBox="0 0 280 500"
      className="h-auto w-full"
      aria-hidden="true"
    >
      <path
        fill="#5DD4DF"
        d="M135 28C44 40 18 108 18 188 18 268 72 348 135 470 138 478 142 478 145 470 208 348 262 268 262 188 262 108 236 40 145 28L145 94A58 90 0 1 1 135 94Z"
      />
      <path
        d="M176 148c16 22 16 58 0 84"
        fill="none"
        stroke="#E8FBFC"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  )
}
