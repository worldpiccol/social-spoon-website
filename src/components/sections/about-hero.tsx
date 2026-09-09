import Image from "next/image"
import { ButtonLink } from "@/components/button-link"
import { ContactButton } from "@/components/contact-popup"
import { Container } from "@/components/container"

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/about-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-top sm:object-right"
        />
        <div className="absolute inset-0 bg-black/15 sm:bg-black/25" />
        <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/20 to-black/70 sm:bg-linear-to-r sm:from-black sm:from-0% sm:via-black/88 sm:via-[38%] sm:to-transparent sm:to-[74%] lg:via-black/80 lg:via-[34%] lg:to-[64%]" />
        <div className="absolute inset-0 hidden bg-linear-to-b from-black/35 via-transparent to-black/35 sm:block" />
      </div>
      <Container className="relative z-10">
        <div className="relative max-w-xl py-16 sm:py-20 lg:max-w-[34rem] lg:py-24">
          <p className="animate-fade-up text-xs font-medium tracking-[0.28em] text-primary uppercase drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)]">
            About
          </p>
          <h1
            className="animate-fade-up mt-5 text-lg leading-relaxed font-medium text-balance text-[#ffffff] [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_4px_22px_rgba(0,0,0,0.8)] sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            Practical Digital Solutions. Built Around Your Needs.
          </h1>
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
              href="/testimonials"
              variant="outline-inverse"
              className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
            >
              Testimonials
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
