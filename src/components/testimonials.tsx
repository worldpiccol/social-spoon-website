import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { TestimonialCard } from "@/components/testimonial-card"
import type { Testimonial } from "@/content/testimonials"

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) {
    return null
  }

  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Client stories"
        heading="What clients say"
        description="Experiences shared by people who have worked with Social Spoon."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <TestimonialCard key={`${item.name}-${item.service ?? "general"}`} testimonial={item} />
        ))}
      </div>
    </Section>
  )
}
