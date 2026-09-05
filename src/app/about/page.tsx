import { CtaSection } from "@/components/cta-section"
import { FadeIn } from "@/components/fade-in"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "About",
  description:
    "Social Spoon is a digital solutions company founded in 2023 by Miss Prisca Chukwu, working with clients in Ghana, South Africa, and internationally.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="About"
          heading="About Social Spoon"
          description="Practical Digital Solutions. Built Around Your Needs."
          headingAs="h1"
        />
        <FadeIn className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Social Spoon is a digital solutions company helping individuals,
            creators, and businesses navigate the digital world with greater
            confidence.
          </p>
          <p>
            Founded in 2023 by Miss Prisca Chukwu, Social Spoon is based in
            Africa and operates across Ghana and South Africa, working with
            clients both locally and internationally.
          </p>
          <p>
            Because our services are delivered online, distance has never been
            a limitation. We work with clients wherever they are, providing
            accessible digital support and solutions tailored to their
            individual needs.
          </p>
        </FadeIn>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Our goal" heading="To help you move forward" />
        <FadeIn className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>Our goal is simple:</p>
          <p className="text-xl font-medium text-foreground">
            To provide practical digital solutions that help our clients move
            forward.
          </p>
          <p>
            Whether you need assistance with account recovery, social media
            management, advertising, content creation, or other digital
            challenges, we take a structured and solution-focused approach to
            every service we provide.
          </p>
          <p>
            At Social Spoon, we believe that digital challenges shouldn&apos;t
            prevent individuals and businesses from achieving their goals.
          </p>
          <p className="text-foreground">We help you find a way forward.</p>
        </FadeIn>
      </Section>
      <CtaSection />
    </>
  )
}
