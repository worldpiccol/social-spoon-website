import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { WorkProofSlider } from "@/components/work-proof-slider"
import { serviceWorkProof } from "@/content/work-proof"

export function ServiceTestimonials() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Testimonials"
        heading="Proof of work"
        description="Examples of Social Spoon client work. This slider will hold more images as they are added."
      />
      <div className="mt-10">
        <WorkProofSlider items={serviceWorkProof} />
      </div>
    </Section>
  )
}
