import Image from "next/image"
import { ButtonLink } from "@/components/button-link"
import { ContactButton } from "@/components/contact-popup"
import { Container } from "@/components/container"
import { SITE_TAGLINE } from "@/content/site"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-digital-network.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[86%_36%] sm:object-[80%_34%] lg:object-[74%_32%]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-r from-black from-0% via-black/92 via-[46%] to-transparent to-[76%] sm:via-[42%] lg:via-black/88 lg:via-[36%] lg:to-[68%]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/30 sm:from-black/45" />
      </div>
      <Container className="relative z-10">
        <div className="relative max-w-xl py-16 sm:py-20 lg:max-w-[34rem] lg:py-24">
          <p className="animate-fade-up text-xs font-medium tracking-[0.28em] text-primary uppercase drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)]">
            Social Spoon
          </p>
          <h1
            className="animate-fade-up mt-5 text-4xl font-semibold tracking-tight text-balance text-[#ffffff] [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_4px_28px_rgba(0,0,0,0.85)] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
            style={{ animationDelay: "80ms" }}
          >
            {SITE_TAGLINE}
          </h1>
          <div
            className="animate-fade-up mt-6 space-y-4 text-base leading-relaxed font-medium text-[#ffffff] [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_4px_22px_rgba(0,0,0,0.8)] sm:text-lg"
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
            <ContactButton
              variant="outline-inverse"
              className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
            >
              Contact Us
            </ContactButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
