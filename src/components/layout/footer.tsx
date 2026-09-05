import Link from "next/link"
import { Logo } from "@/components/logo"
import { SocialLinks } from "@/components/social-links"
import {
  legalLinks,
  navLinks,
  SITE_NAME,
  SITE_SHORT_DESCRIPTION,
  SITE_TAGLINE,
} from "@/content/site"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-foreground/10 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
        <div className="lg:col-span-5">
          <Logo invert />
          <p className="mt-4 text-sm tracking-wide text-gold">{SITE_TAGLINE}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            {SITE_SHORT_DESCRIPTION}
          </p>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-xs font-medium tracking-[0.18em] text-ink-foreground/55 uppercase">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-foreground/80 transition-colors hover:text-ink-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-xs font-medium tracking-[0.18em] text-ink-foreground/55 uppercase">
            Legal
          </h2>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-foreground/80 transition-colors hover:text-ink-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-xs font-medium tracking-[0.18em] text-ink-foreground/55 uppercase">
            Social
          </h2>
          <SocialLinks invert className="mt-4" />
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p>Digital solutions for individuals, creators, and businesses.</p>
        </div>
      </div>
    </footer>
  )
}
