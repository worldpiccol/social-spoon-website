import Image from "next/image"
import { ButtonLink } from "@/components/button-link"
import { Container } from "@/components/container"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] md:block"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-digital-network.jpg"
          alt=""
          fill
          priority
          sizes="54vw"
          className="object-cover object-[80%_28%]"
        />
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-ink to-transparent" />
      </div>
      <Container className="relative">
        <div className="max-w-xl py-12 sm:py-14 lg:max-w-[32rem] lg:py-16">
          <p className="animate-fade-up text-xs font-medium tracking-[0.28em] text-gold uppercase">
            Social Spoon
          </p>
          <h1
            className="animate-fade-up mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
            style={{ animationDelay: "80ms" }}
          >
            Digital Solutions. Account Recovery. Digital Growth.
          </h1>
          <div
            className="animate-fade-up mt-6 space-y-4 text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            <p>
              Professional digital services designed to help individuals and
              businesses navigate challenges, protect their digital presence
              and grow online.
            </p>
            <p>
              We provide structured digital solutions for account recovery,
              advertising, social media management and online growth — helping
              our clients navigate digital challenges with a professional,
              solution-focused approach.
            </p>
          </div>
          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <ButtonLink
              href="/services"
              variant="inverse"
              className="w-full sm:w-auto"
            >
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
        </div>
      </Container>
      <div className="relative aspect-[16/10] md:hidden">
        <Image
          src="/images/hero-digital-network.jpg"
          alt="Connected social platforms, advertising, and analytics across a digital network."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_30%]"
        />
        <div className="absolute inset-x-0 top-0 h-10 bg-linear-to-b from-ink to-transparent" />
      </div>
    </section>
  )
}
