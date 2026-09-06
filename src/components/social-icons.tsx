import { cn } from "cn"

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4 fill-none stroke-current stroke-[1.8]", className)}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.85" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4 fill-current", className)}
    >
      <path d="M12.04 3.1c-4.9 0-8.88 3.97-8.88 8.86 0 1.56.41 3.08 1.2 4.42L3.1 20.9l4.66-1.22a8.9 8.9 0 0 0 4.28 1.1h.01c4.9 0 8.88-3.97 8.88-8.86 0-2.37-1.02-4.6-2.72-6.27a8.84 8.84 0 0 0-6.17-2.55Zm0 1.62c1.9 0 3.69.74 5.03 2.08a7.2 7.2 0 0 1 2.2 5.16c0 4.02-3.27 7.28-7.29 7.28a7.3 7.3 0 0 1-3.51-.9l-.25-.14-2.76.72.74-2.7-.16-.27a7.25 7.25 0 0 1-1.12-3.99c0-4.02 3.27-7.24 7.12-7.24Zm-2.4 4.3c-.15-.33-.3-.34-.44-.34h-.38c-.13 0-.34.05-.52.25-.18.2-.68.66-.68 1.62s.7 1.88.8 2.01c.1.13 1.36 2.17 3.36 2.96 1.66.65 2 .72 2.28.64.28-.08.9-.37 1.03-.72.13-.36.13-.66.09-.72-.04-.07-.17-.11-.35-.2-.18-.08-1.07-.53-1.23-.59-.17-.06-.29-.09-.4.1-.12.18-.45.58-.55.7-.1.12-.2.13-.38.05-.17-.08-.73-.27-1.4-.86-.52-.46-.87-1.03-.97-1.2-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.17.18-.29.06-.12.03-.22-.01-.3-.05-.08-.4-1-.56-1.36Z" />
    </svg>
  )
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4 fill-current", className)}
    >
      <path d="M19.59 6.69A4.83 4.83 0 0 1 15.82 2.4V2h-3.4v13.67a2.89 2.89 0 1 1-2.88-2.88c.27 0 .54.04.8.1v-3.47a6.34 6.34 0 0 0-.8-.05 6.35 6.35 0 1 0 6.35 6.34V8.7a8.16 8.16 0 0 0 4.7 1.5V6.79a4.86 4.86 0 0 1-1-.1Z" />
    </svg>
  )
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4 fill-current", className)}
    >
      <path d="M14 8.5h3.2l-.5 3.2H14V22h-3.6v-10.3H8V8.5h2.4V6.6C10.4 4.2 11.8 2.5 14.6 2.5H17.2v3.2h-1.6c-.7 0-1.2.3-1.2 1.2v1.6Z" />
    </svg>
  )
}

export function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4 fill-current", className)}
    >
      <path d="M12 3.4c2.9 0 5.3 2.3 5.3 6.1 0 1.3.2 2.1.7 2.5.3.2.7.2 1.1.3.3 0 .6.1.6.4 0 .4-.6.7-1.1.9-.2.08-.4.2-.4.38 0 .7.9 1.5 2.5 1.86.2.04.3.18.28.36-.04.4-.62.7-1.3.86-.18.04-.3.2-.28.38.16 1.34-.7 2.14-1.7 2.5-1.18.42-2.18.18-2.96-.1-.5-.18-1-.18-1.5 0-.86.32-1.86.62-3.04.3-1.16-.32-2.12-1.2-1.96-2.7.02-.18-.1-.34-.28-.38-.68-.16-1.26-.46-1.3-.86-.02-.18.08-.32.28-.36 1.6-.36 2.5-1.16 2.5-1.86 0-.18-.18-.3-.4-.38-.5-.18-1.1-.46-1.1-.9 0-.3.3-.4.6-.4.4-.08.8-.1 1.1-.3.5-.4.7-1.2.7-2.5 0-3.8 2.4-6.1 5.3-6.1Z" />
    </svg>
  )
}

export function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-4 fill-none stroke-current stroke-[1.8]", className)}
    >
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.2" />
      <path d="M4.2 7.2 12 12.4 19.8 7.2" />
    </svg>
  )
}

export const socialIcons = {
  Instagram: InstagramIcon,
  WhatsApp: WhatsAppIcon,
  TikTok: TikTokIcon,
  Snapchat: SnapchatIcon,
}
