import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { LEGAL_UPDATED, SITE_NAME, SUPPORT_EMAIL } from "@/content/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Social Spoon collects, uses, and stores information when you use this website or contact us.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <SectionHeading eyebrow="Legal" heading="Privacy Policy" headingAs="h1" />
      <div className="mt-10 max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
        <p>
          This policy explains how {SITE_NAME} handles information when you use
          this website or contact us. We do not invent extra data practices: we
          only describe what this site actually does.
        </p>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Information you send us
          </h2>
          <p>
            This website does not include a contact form. If you email us,
            message us on WhatsApp, or reach us on Instagram, TikTok, or
            Snapchat, we receive whatever you choose to send — typically your
            name, contact details, and a description of your request.
          </p>
          <p>
            Do not send passwords, one-time codes, or recovery codes. We do not
            need them to assess a case.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Information collected automatically
          </h2>
          <p>
            Like most websites, our hosting provider may log technical data such
            as IP address, browser type, and pages visited, to operate and
            secure the site. We do not use that information to build marketing
            profiles on this website.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            How we use information
          </h2>
          <p>We use information you send us to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to enquiries and provide the service you asked for.</li>
            <li>Confirm price, timeframe, and service terms before payment.</li>
            <li>Meet legal, accounting, or security obligations.</li>
          </ul>
          <p>We do not sell your information.</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Sharing
          </h2>
          <p>
            We may share information with the tools we use to run the business
            (for example email or hosting) and when a platform’s process
            requires it to carry out a service you requested. We may also
            disclose information if required by law.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Retention
          </h2>
          <p>
            We keep enquiry and service records only as long as needed to handle
            your request and to meet legal obligations, then delete or
            anonymise them where we can.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Third-party sites
          </h2>
          <p>
            Links to Instagram, WhatsApp, TikTok, Snapchat, YouTube, and similar
            services are governed by those companies’ privacy policies, not
            this one.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Contact
          </h2>
          <p>
            For privacy questions, email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
        <p className="text-sm">Last Updated: {LEGAL_UPDATED}</p>
      </div>
    </Section>
  )
}
