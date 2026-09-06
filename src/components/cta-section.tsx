import { ButtonLink } from "@/components/button-link"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"

export function CtaSection({ invert = false }: { invert?: boolean }) {
  return (
    <Section tone={invert ? "ink" : "muted"}>
      <div className="max-w-3xl">
        <SectionHeading
          heading="READY TO GET STARTED?"
          invert={invert}
          headingAs="h2"
        />
        <p
          className={
            invert
              ? "mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
              : "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          }
        >
          Whether you’re trying to regain access to an important account,
          resolve a digital issue, reach a targeted audience, or take your
          online presence to the next level, Social Spoon is ready to help.
        </p>
        <p
          className={
            invert
              ? "mt-4 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
              : "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          }
        >
          Explore our services and find the solution that&apos;s right for you.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href="/services"
            variant={invert ? "inverse" : "default"}
            className="w-full sm:w-auto"
          >
            See Our Services
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant={invert ? "outline-inverse" : "outline"}
            className="w-full sm:w-auto"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
