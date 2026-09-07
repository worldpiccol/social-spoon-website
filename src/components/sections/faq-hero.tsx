import Image from "next/image"
import { Container } from "@/components/container"

export function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7d9c8]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/faq-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[18%_center] sm:object-[center_center] lg:object-[right_center]"
        />
      </div>
      <Container className="relative z-10">
        <div className="relative max-w-xl py-16 sm:py-20 lg:max-w-[34rem] lg:py-24">
          <p className="animate-fade-up text-xs font-medium tracking-[0.28em] text-primary uppercase">
            FAQ
          </p>
          <h1
            className="animate-fade-up mt-4 text-4xl font-semibold tracking-tight text-balance text-[#000120] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
            style={{ animationDelay: "80ms" }}
          >
            Frequently asked questions
          </h1>
        </div>
      </Container>
    </section>
  )
}
