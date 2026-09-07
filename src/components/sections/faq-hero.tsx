import Image from "next/image"

export function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#b7d4d8]">
      <h1 className="sr-only">Frequently asked questions</h1>
      <div className="grid items-center lg:grid-cols-2">
        <div className="relative min-h-[18rem] sm:min-h-[24rem] lg:min-h-[30rem]">
          <Image
            src="/images/faq-hero.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[72%_center]"
          />
        </div>
        <div className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-10 lg:py-0">
          <Image
            src="/images/faq-wordmark.png"
            alt=""
            width={889}
            height={425}
            priority
            className="h-auto w-full max-w-[22rem] drop-shadow-[0_8px_24px_rgba(0,1,32,0.12)] sm:max-w-[26rem] lg:max-w-none lg:w-[90%]"
          />
        </div>
      </div>
    </section>
  )
}
