import { CtaSection } from "@/components/cta-section"
import { FadeIn } from "@/components/fade-in"
import { FeatureGrid } from "@/components/feature-grid"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Hero } from "@/components/sections/hero"
import { Testimonials } from "@/components/testimonials"
import { presenceRoles } from "@/content/features"
import { testimonials } from "@/content/testimonials"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: {
    absolute: "Social Spoon | Digital Solutions, Account Recovery & Digital Growth",
  },
  description:
    "Social Spoon provides professional digital solutions for account recovery assistance, social media management, advertising, content creation and online growth.",
  path: "/",
  ogTitle: "Social Spoon | Digital Solutions, Account Recovery & Digital Growth",
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Social Spoon"
              heading="More Than a Service. A Digital Solutions Partner."
              description="One company. Multiple digital solutions."
            />
          </div>
          <FadeIn className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-7">
            <p>
              Instead of searching for different providers for every digital
              challenge, Social Spoon brings several essential digital services
              under one roof.
            </p>
            <p>
              At Social Spoon, we understand that digital problems rarely have
              a one-size-fits-all solution.
            </p>
            <p>
              That’s why we take a structured approach to every case —
              understanding the issue, assessing the available options and
              providing the most appropriate solution for your situation.
            </p>
            <p>
              We understand that your digital presence is more than just a
              social media page.
            </p>
            <p>It can be:</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {presenceRoles.map((role) => (
                <li
                  key={role}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-foreground"
                >
                  {role}
                </li>
              ))}
            </ul>
            <p>
              That’s why we approach every project with the level of care and
              professionalism it deserves.
            </p>
          </FadeIn>
        </div>
      </Section>
      <Section tone="muted">
        <SectionHeading
          eyebrow="Company strengths"
          heading="What Sets Us Apart"
        />
        <div className="mt-10">
          <FeatureGrid />
        </div>
      </Section>
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              invert
              heading="When Your Digital Presence Is at Risk"
            />
          </div>
          <FadeIn className="space-y-5 text-base leading-relaxed text-ink-foreground/75 sm:text-lg lg:col-span-7">
            <p>
              Your Instagram or Facebook account can represent years of
              content, customers, connections, revenue and brand equity.
            </p>
            <p>
              So when an account is suddenly suspended or disabled, knowing
              what to do next can be overwhelming.
            </p>
            <p>That’s where Social Spoon comes in.</p>
            <p>
              We help clients understand their digital challenges, identify
              available options, and take the appropriate steps toward
              resolving them.
            </p>
            <p className="text-ink-foreground/90">
              We work within each platform’s policies and processes. Social
              Spoon does not bypass platform security or override platform
              decisions.
            </p>
          </FadeIn>
        </div>
      </Section>
      <Testimonials items={testimonials} />
      <CtaSection />
    </>
  )
}
