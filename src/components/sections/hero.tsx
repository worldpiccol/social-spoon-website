import { ButtonLink } from "@/components/button-link"
import { Container } from "@/components/container"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        className="hero-grid pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent"
        aria-hidden="true"
      />
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <p className="animate-fade-up text-xs font-medium tracking-[0.28em] text-gold uppercase">
          Social Spoon
        </p>
        <h1 className="animate-fade-up mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.08]" style={{ animationDelay: "80ms" }}>
          Digital Solutions. Account Recovery. Digital Growth.
        </h1>
        <div className="animate-fade-up mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-foreground/75 sm:text-lg" style={{ animationDelay: "160ms" }}>
          <p>
            Professional digital services designed to help individuals and
            businesses navigate challenges, protect their digital presence and
            grow online.
          </p>
          <p>
            We provide structured digital solutions for account recovery,
            advertising, social media management and online growth — helping
            our clients navigate digital challenges with a professional,
            solution-focused approach.
          </p>
        </div>
        <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
          <ButtonLink href="/services" variant="inverse" className="w-full sm:w-auto">
            See Our Services
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="outline-inverse"
            className="w-full sm:w-auto"
          >
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
