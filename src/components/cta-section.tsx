import { ButtonLink } from "@/components/button-link"
import { ContactButton } from "@/components/contact-popup"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"

export function CtaSection({
  invert = false,
  showServicesCta = true,
  showTestimonialsCta = true,
}: {
  invert?: boolean
  showServicesCta?: boolean
  showTestimonialsCta?: boolean
}) {
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
          Whether you&apos;re trying to recover/reinstate Meta accounts*,
          resolve a digital issue, reach a targeted audience online, or take
          your online presence to the next level, Social Spoon is here to help.
        </p>
        {showServicesCta ? (
          <p
            className={
              invert
                ? "mt-4 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
                : "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            }
          >
            Explore our services and find the solution that&apos;s right
            for you.
          </p>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {showServicesCta ? (
            <ButtonLink
              href="/services"
              variant={invert ? "inverse" : "default"}
              className="w-full sm:w-auto"
            >
              See Our Services
            </ButtonLink>
          ) : null}
          {showTestimonialsCta ? (
            <ButtonLink
              href="/testimonials"
              variant={
                invert
                  ? "outline-inverse"
                  : showServicesCta
                    ? "outline"
                    : "default"
              }
              className="w-full sm:w-auto"
            >
              Testimonials
            </ButtonLink>
          ) : null}
          <ContactButton
            variant={
              invert
                ? "outline-inverse"
                : "outline"
            }
            className="w-full sm:w-auto"
          >
            Contact Us
          </ContactButton>
        </div>
      </div>
    </Section>
  )
}
