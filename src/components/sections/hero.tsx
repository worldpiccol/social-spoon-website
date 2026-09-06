import Image from "next/image"
import { ButtonLink } from "@/components/button-link"
import { Container } from "@/components/container"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground lg:min-h-[36rem]">
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <Image
          src="/images/hero-digital-network.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink from-10% via-ink/80 via-38% to-transparent" />
      </div>
      <Container className="relative">
        <div className="grid lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:items-center">
          <div className="py-16 sm:py-20 lg:py-28">
            <p className="animate-fade-up text-xs font-medium tracking-[0.28em] text-gold uppercase">
              Social Spoon
            </p>
            <h1
              className="animate-fade-up mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
              style={{ animationDelay: "80ms" }}
            >
              Digital Solutions. Account Recovery. Digital Growth.
            </h1>
            <div
              className="animate-fade-up mt-8 space-y-5 text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
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
              className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row"
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
          <div className="relative -mx-5 aspect-[16/10] sm:-mx-6 sm:aspect-[2/1] lg:hidden">
            <Image
              src="/images/hero-digital-network.jpg"
              alt="Connected social platforms, advertising, and analytics across a digital network."
              fill
              priority
              sizes="100vw"
              className="object-cover object-[72%_center]"
            />
            <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-ink to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  )
}
