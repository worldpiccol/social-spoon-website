import { CtaSection } from "@/components/cta-section"
import { FaqAccordion } from "@/components/faq-accordion"
import { Section } from "@/components/section"
import { FaqHero } from "@/components/sections/faq-hero"
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
      <FaqHero />
      <Section>
        <div className="max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </Section>
      <CtaSection />
    </>
  )
}
