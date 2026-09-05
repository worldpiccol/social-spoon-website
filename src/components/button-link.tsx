import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "cn"
import { buttonVariants } from "@/components/ui/button"

type ButtonLinkProps = {
  href: string
  children: ReactNode
  className?: string
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "inverse"
    | "outline-inverse"
  size?: "default" | "xs" | "sm" | "lg" | "xl" | "icon"
  external?: boolean
  onClick?: () => void
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "default",
  size = "xl",
  external = false,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size }), className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </Link>
  )
}
