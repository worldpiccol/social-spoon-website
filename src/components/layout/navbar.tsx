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
    <header className="sticky top-0 z-40 border-b border-ink-foreground/10 bg-ink text-ink-foreground">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo invert />
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
                    ? "text-ink-foreground after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-gold"
                    : "text-ink-foreground/70 hover:text-ink-foreground",
                )}
                aria-current={current ? "page" : undefined}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href={primaryCta.href} size="lg" variant="inverse">
            {primaryCta.label}
          </ButtonLink>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-ink-foreground hover:bg-ink-foreground/10 lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-ink text-ink-foreground border-ink-foreground/10"
          >
            <SheetHeader>
              <SheetTitle className="text-ink-foreground">
                Social Spoon
              </SheetTitle>
              <SheetDescription className="text-ink-foreground/65">
                {SITE_TAGLINE}
              </SheetDescription>
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
                        ? "bg-ink-foreground/10 text-ink-foreground"
                        : "text-ink-foreground/80 hover:bg-ink-foreground/10",
                    )}
                    aria-current={current ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <ButtonLink
                href={primaryCta.href}
                variant="inverse"
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
