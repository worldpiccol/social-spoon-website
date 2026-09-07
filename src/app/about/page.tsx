import Image from "next/image"
import { CtaSection } from "@/components/cta-section"
import { FadeIn } from "@/components/fade-in"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { AboutHero } from "@/components/sections/about-hero"
import { founder } from "@/content/founder"
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
      <AboutHero />
      <Section>
        <SectionHeading
          eyebrow="Our story"
          heading="Helping you navigate the digital world"
        />
        <div className="mt-10 grid items-start gap-8 xl:grid-cols-12 xl:gap-14">
          <FadeIn className="order-1 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg xl:order-2 xl:col-span-7">
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
          <figure className="order-2 xl:order-1 xl:col-span-5">
            <Image
              src="/images/about-team.jpg"
              alt="The Social Spoon team in the studio, wearing branded shirts in front of the company sign"
              width={1086}
              height={1105}
              sizes="(min-width: 1280px) 420px, 100vw"
              className="h-auto w-full rounded-2xl object-cover shadow-[0_16px_40px_rgba(0,1,32,0.08)]"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              The Social Spoon team.
            </figcaption>
          </figure>
        </div>
      </Section>
      <Section tone="muted">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
          <figure className="lg:col-span-5">
            <Image
              src={founder.image.src}
              alt={founder.image.alt}
              width={founder.image.width}
              height={founder.image.height}
              sizes="(min-width: 1024px) 420px, 100vw"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_82%] shadow-[0_16px_40px_rgba(0,1,32,0.08)]"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              {founder.name}, {founder.role}.
            </figcaption>
          </figure>
          <FadeIn className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
              {founder.role}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {founder.name}
            </h2>
            {founder.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeIn>
        </div>
      </Section>
      <Section>
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

