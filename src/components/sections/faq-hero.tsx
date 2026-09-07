import Image from "next/image"

export function FaqHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7d9c8]">
      <div className="relative min-h-[17rem] sm:min-h-[22rem] lg:min-h-[28rem] xl:min-h-[32rem]">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[18%_center] sm:object-[center_center] lg:object-[right_center]"
        />
        <div className="absolute inset-y-0 left-0 z-10 w-[min(32rem,58%)] sm:w-[min(36rem,46%)] lg:w-[min(38rem,42%)]">
          <Image
            src="/faq.png"
            alt=""
            width={889}
            height={425}
            priority
            className="absolute top-1/2 left-1/2 h-auto w-[78%] max-w-[16rem] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_10px_28px_rgba(0,1,32,0.14)] sm:max-w-[18rem]"
          />
          <div className="absolute inset-x-0 bottom-[8%] px-5 text-center sm:bottom-[10%] lg:bottom-[12%]">
            <h1 className="text-2xl font-bold tracking-tight text-[#000120] text-balance sm:text-3xl lg:text-[2.1rem]">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-3 max-w-[22rem] text-[0.95rem] leading-snug font-medium text-[#4A4A68] sm:text-lg">
              Everything you need to know about Social Spoon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
