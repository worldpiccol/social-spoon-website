import { CtaSection } from "@/components/cta-section"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCatalog } from "@/components/service-catalog"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore Social Spoon services including account recovery assistance, social media management, advertising, content creation, and digital education.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <SectionHeading
          eyebrow="Services"
          heading="Our Services"
          description="At Social Spoon, we help individuals, creators, brands, and businesses build, manage, and grow their presence across digital platforms. From account recovery and advertising to content creation and digital education, our services are designed to help you get the most out of your online presence."
          headingAs="h1"
        />
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Recovery, advertising, and platform outcomes depend on eligibility
          and the policies of the relevant third-party platforms. Social Spoon
          does not guarantee reinstatement, sales, conversions, leads, or
          advertising results.
        </p>
        <div className="mt-14">
          <ServiceCatalog />
        </div>
      </Section>
      <CtaSection showServicesCta={false} />
    </>
  )
}

