import { ButtonLink } from "@/components/button-link"
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
        description="Examples of Social Spoon client work. More images and videos are added on the Testimonials page as they come in."
      />
      <div className="mt-10">
        <WorkProofSlider items={serviceWorkProof} />
      </div>
      <div className="mt-8">
        <ButtonLink href="/testimonials" className="w-full sm:w-auto">
          Testimonials
        </ButtonLink>
      </div>
    </Section>
  )
}
