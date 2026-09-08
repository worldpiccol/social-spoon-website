import Image from "next/image"

export function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#001a6e]">
      <div className="relative">
        <Image
          src="/images/faq-hero.jpg"
          alt=""
          width={1792}
          height={1008}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
        <h1 className="sr-only">Frequently asked questions</h1>
      </div>
    </section>
  )
}
