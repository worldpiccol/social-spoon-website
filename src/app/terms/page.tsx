import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { LEGAL_UPDATED, SITE_NAME, SUPPORT_EMAIL } from "@/content/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Website terms for using Social Spoon, including services, payments, third-party platforms, and acceptable use.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <SectionHeading
        eyebrow="Legal"
        heading="Terms & Conditions"
        headingAs="h1"
      />
      <div className="mt-10 max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
        <p>
          These terms govern use of the {SITE_NAME} website and enquiries made
          through it. By using this site or paying for a service, you agree to
          these terms and to the Refund Policy that applies to the service you
          buy.
        </p>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Who we are
          </h2>
          <p>
            Social Spoon provides digital solutions including account recovery
            assistance, advertising support, page management, content, and
            related digital services. We operate online and work with clients
            locally and internationally.
          </p>
          <p>
            Questions about these terms can be sent to{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Using this website
          </h2>
          <p>
            You may use this website to learn about our services and to contact
            us. You must not misuse the site, attempt to interrupt it, or use
            it to send unlawful, harmful, or misleading content.
          </p>
          <p>
            Information on this website is general. A service only starts after
            we confirm scope, price, and any service-specific terms with you.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Services
          </h2>
          <p>
            We assess each request before confirming whether we can help and
            what the work will cost. Quoted prices, timeframes, and historical
            success figures are estimates unless we state otherwise in writing.
          </p>
          <p>
            Social Spoon does not guarantee account reinstatement, sales,
            conversions, leads, advertising results, or any particular platform
            decision.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Passwords and account access
          </h2>
          <p>
            We never ask for passwords, one-time codes, two-factor
            authentication codes, or recovery codes. Do not send those through
            this website, email, or social messages.
          </p>
          <p>
            We work within each platform’s policies and processes. We do not
            bypass platform security or override platform decisions.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Third-party platforms
          </h2>
          <p>
            Many services involve Instagram, Facebook, WhatsApp, TikTok, X,
            Snapchat, Google, or other third-party platforms. Those platforms
            have their own terms. Delays, refusals, or account actions by a
            platform are outside Social Spoon’s control.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Payments and refunds
          </h2>
          <p>
            Payment terms are confirmed before you pay. Refunds are handled
            under the Refund Policy and any terms that apply to the specific
            service purchased.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Intellectual property
          </h2>
          <p>
            The Social Spoon name, logo, and website content belong to Social
            Spoon unless stated otherwise. You may not copy or reuse them for
            commercial purposes without permission.
          </p>
          <p>
            Materials you supply for a project remain yours. Work we create for
            you is licensed for your use once it has been paid for, unless we
            agree something different in writing.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, Social Spoon is not liable
            for loss of profits, data, goodwill, or account access arising from
            platform decisions, delays, or events outside our reasonable
            control. Our liability for a paid service is limited to the amount
            you paid for that service.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Changes
          </h2>
          <p>
            We may update these terms from time to time. The date below shows
            when they were last revised. Continued use of the website after an
            update means you accept the revised terms.
          </p>
        </section>
        <p className="text-sm">Last Updated: {LEGAL_UPDATED}</p>
      </div>
    </Section>
  )
}
