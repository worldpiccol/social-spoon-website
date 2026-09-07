import Image from "next/image"

export function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7d9c8]">
      <h1 className="sr-only">Frequently asked questions</h1>
      <div className="relative min-h-[17rem] sm:min-h-[22rem] lg:min-h-[28rem] xl:min-h-[32rem]">
        <Image
          src="/images/faq-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[18%_center] sm:object-[center_center] lg:object-[right_center]"
        />
        <div className="absolute inset-y-0 left-0 z-10 flex w-[min(34rem,62%)] items-center px-5 sm:w-[min(38rem,50%)] sm:px-8 lg:w-[min(42rem,48%)] lg:px-16">
          <Image
            src="/images/faq-wordmark.png"
            alt=""
            width={889}
            height={425}
            priority
            className="h-auto w-full drop-shadow-[0_10px_28px_rgba(0,1,32,0.14)]"
          />
        </div>
      </div>
    </section>
  )
}
