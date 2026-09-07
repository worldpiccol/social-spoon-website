import { ContactButton } from "@/components/contact-popup"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { SocialLinks } from "@/components/social-links"
import {
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  SUPPORT_PHONE_TEL,
  SUPPORT_WHATSAPP,
} from "@/content/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Social Spoon on WhatsApp, Instagram, TikTok, Snapchat, or email for account recovery, advertising, and digital growth support.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <SectionHeading
        eyebrow="Contact"
        heading="Get in touch"
        description="Use Contact Us to open the Social Spoon popup, or reach us directly on WhatsApp, Instagram, TikTok, Snapchat, or email."
        headingAs="h1"
      />
      <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Phone / WhatsApp:{" "}
          <a
            href={SUPPORT_WHATSAPP}
            className="font-medium text-foreground underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {SUPPORT_PHONE}
          </a>
          <span className="sr-only"> (opens WhatsApp in a new tab)</span>
          {" · "}
          <a
            href={SUPPORT_PHONE_TEL}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Call
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <SocialLinks />
        <div className="pt-2">
          <ContactButton>Contact Us</ContactButton>
        </div>
      </div>
    </Section>
  )
}
