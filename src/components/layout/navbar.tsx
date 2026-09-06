"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "cn"
import { ButtonLink } from "@/components/button-link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks, primaryCta, SITE_TAGLINE } from "@/content/site"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 text-foreground backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const current =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm tracking-wide transition-colors",
                  current
                    ? "text-foreground after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-current={current ? "page" : undefined}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href={primaryCta.href} size="lg">
            {primaryCta.label}
          </ButtonLink>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-muted lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Social Spoon</SheetTitle>
              <SheetDescription>{SITE_TAGLINE}</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {navLinks.map((link) => {
                const current =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base transition-colors",
                      current
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                    aria-current={current ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <ButtonLink
                href={primaryCta.href}
                className="mt-4 w-full"
                size="xl"
                onClick={() => setOpen(false)}
              >
                {primaryCta.label}
              </ButtonLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
