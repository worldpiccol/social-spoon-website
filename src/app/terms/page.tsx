import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Social Spoon Terms & Conditions will be published here once supplied by the company.",
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
      <div className="mt-10 max-w-3xl rounded-2xl border border-dashed border-border bg-muted/40 p-6 sm:p-8">
        <p className="text-lg font-medium text-foreground">
          Terms & Conditions content to be supplied by Social Spoon.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          This must be replaced before production launch. This page is a
          development placeholder and does not contain legal terms.
        </p>
      </div>
    </Section>
  )
}
