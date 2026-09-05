import { CtaSection } from "@/components/cta-section"
import { FaqAccordion } from "@/components/faq-accordion"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { faqItems } from "@/content/faq"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about Social Spoon services, including account recovery timelines, eligibility, and how to get started.",
  path: "/faq",
})

export default function FaqPage() {
  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="FAQ"
          heading="Frequently asked questions"
          description="Clear answers about how Social Spoon works, what recovery assistance involves, and what to expect before you get started."
          headingAs="h1"
        />
        <div className="mt-10 max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </Section>
      <CtaSection />
    </>
  )
}
