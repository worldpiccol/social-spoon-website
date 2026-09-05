import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Refund Policy",
  description:
    "Read Social Spoon’s general refund policy, including when refunds are not issued and how third-party platforms can affect outcomes.",
  path: "/refund-policy",
})

export default function RefundPolicyPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <SectionHeading eyebrow="Legal" heading="Refund Policy" headingAs="h1" />
      <div className="mt-10 max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
        <p>
          At Social Spoon, each service is subject to its own specific terms,
          conditions, and refund policy. Clients are encouraged to review the
          applicable terms before making payment.
        </p>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            General Refund Policy
          </h2>
          <p>
            As a general policy, payments made to Social Spoon are
            non-refundable once payment has been confirmed, except where a
            refund is expressly provided for under the specific terms
            applicable to the service purchased.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Circumstances Where Refunds Will Not Be Issued
          </h2>
          <p>A refund will generally not be provided where a client:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Changes their mind after making payment.</li>
            <li>
              Chooses to use another service provider before the agreed
              service timeframe has elapsed.
            </li>
            <li>
              Causes delays by failing to provide required information, access,
              documents, or cooperation.
            </li>
            <li>
              Takes actions that interfere with, disrupt, or otherwise affect
              the service after it has commenced.
            </li>
            <li>
              Fails to meet requirements or provide information necessary for
              the service to proceed.
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Third-Party Platforms
          </h2>
          <p>
            Some Social Spoon services involve third-party platforms, including
            Instagram, Facebook, TikTok, and WhatsApp.
          </p>
          <p>
            Timelines and outcomes may be affected by platform processes,
            policies, systems, security measures, or decisions outside Social
            Spoon&apos;s control.
          </p>
          <p>
            Social Spoon does not guarantee a particular outcome where the
            final decision rests with a third-party platform.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Acceptance of Terms
          </h2>
          <p>
            By making a payment for any Social Spoon service, you confirm that
            you have:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Read and understood the applicable service terms.</li>
            <li>Reviewed the relevant refund conditions.</li>
            <li>Agreed to the terms applicable to the service purchased.</li>
          </ul>
          <p>
            If you have questions about refund terms for a specific service,
            contact Social Spoon before making payment.
          </p>
        </section>
        <p className="text-sm">Last Updated: [Insert Date]</p>
      </div>
    </Section>
  )
}
