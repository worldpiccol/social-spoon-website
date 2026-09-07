import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { serviceWorkProof } from "@/content/work-proof"

export function ServiceTestimonials() {
  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Testimonials"
        heading="Proof of work"
        description="A few examples of Social Spoon client work — page revamps, ads account recovery, and reinstatement."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {serviceWorkProof.map((item, index) => (
          <FadeIn key={item.src} delay={index * 80}>
            <figure className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,1,32,0.06)] ring-1 ring-border">
              <Image
                src={item.src}
                alt={item.title}
                width={item.width}
                height={item.height}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
              <figcaption className="space-y-1.5 px-5 py-4">
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
