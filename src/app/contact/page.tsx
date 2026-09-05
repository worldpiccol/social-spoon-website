import { ContactForm } from "@/components/contact-form"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { SocialLinks } from "@/components/social-links"
import {
  isSupportEmailConfigured,
  socialLinks,
  SUPPORT_EMAIL,
  SUPPORT_EMAIL_PLACEHOLDER,
} from "@/content/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Social Spoon for questions, support, or help with account recovery, advertising, content creation, and other digital services.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            heading="Get in Touch With Us."
            description="Have a question, need support, or want to learn more about our services? We’re here to help."
            headingAs="h1"
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you need assistance with your social media account,
            advertising, content creation, or any of our digital services,
            feel free to reach out to the Social Spoon team.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
                Email
              </h2>
              {isSupportEmailConfigured ? (
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-3 inline-block text-lg font-medium underline-offset-4 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              ) : (
                <p className="mt-3 rounded-xl border border-dashed border-border bg-muted/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                  {SUPPORT_EMAIL_PLACEHOLDER}. Set{" "}
                  <code className="font-mono text-foreground">
                    NEXT_PUBLIC_SUPPORT_EMAIL
                  </code>{" "}
                  when the full address is available.
                </p>
              )}
            </div>
            <div>
              <h2 className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
                Social
              </h2>
              <SocialLinks className="mt-4" />
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {link.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  )
}
