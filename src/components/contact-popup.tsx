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
    top: "40%",
    left: "18%",
    external: true,
  },
  {
    name: "Instagram",
    href: socialLinks.find((link) => link.name === "Instagram")!.href,
    icon: socialIcons.Instagram,
    top: "24%",
    left: "22%",
    external: true,
  },
  {
    name: "TikTok",
    href: socialLinks.find((link) => link.name === "TikTok")!.href,
    icon: socialIcons.TikTok,
    top: "16%",
    left: "50%",
    external: true,
  },
  {
    name: "Snapchat",
    href: socialLinks.find((link) => link.name === "Snapchat")!.href,
    icon: socialIcons.Snapchat,
    top: "24%",
    left: "78%",
    external: true,
  },
  {
    name: "Email",
    href: `mailto:${SUPPORT_EMAIL}`,
    icon: EmailIcon,
    top: "40%",
    left: "82%",
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
          onClick={(event) => {
            if (event.target === event.currentTarget) onOpenChange(false)
          }}
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
          <div className="animate-spoon-pop pointer-events-none relative w-[min(22rem,88vw)]">
            <SpoonMark />
            <nav aria-label="Contact Social Spoon">
              {spoonLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    style={{ top: link.top, left: link.left }}
                    className="pointer-events-auto absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-black transition hover:scale-110 focus-visible:scale-110 sm:size-12"
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
      className="pointer-events-none h-auto w-full"
      aria-hidden="true"
    >
      <path
        fill="#5DD4DF"
        className="pointer-events-auto"
        d="M134 22C28 36 8 108 8 188 8 276 78 360 134 474 137 482 143 482 146 474 202 360 272 276 272 188 272 108 252 36 146 22L146 132A32 52 0 1 1 134 132Z"
      />
      <path
        d="M168 154c10 16 10 40 0 58"
        fill="none"
        stroke="#E8FBFC"
        strokeLinecap="round"
        strokeWidth="6"
      />
    </svg>
  )
}
