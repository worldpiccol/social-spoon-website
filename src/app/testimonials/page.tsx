import { CtaSection } from "@/components/cta-section"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { WorkProofGrid } from "@/components/work-proof-grid"
import { serviceWorkProof } from "@/content/work-proof"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Testimonials",
  description:
    "Proof of Social Spoon client work, including account recovery, ads, and page management. Images and videos are added here as they come in.",
  path: "/testimonials",
})

export default function TestimonialsPage() {
  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="Testimonials"
          heading="Proof of work"
          description="Examples of Social Spoon client work. More images and YouTube videos will be added here as they come in."
          headingAs="h1"
        />
        <div className="mt-12">
          <WorkProofGrid items={serviceWorkProof} />
        </div>
      </Section>
      <CtaSection showServicesCta showTestimonialsCta={false} />
    </>
  )
}
