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
        <div className="absolute inset-y-0 left-0 z-10 flex w-[min(32rem,58%)] flex-col items-center justify-center px-5 text-center sm:w-[min(36rem,46%)] sm:px-8 lg:w-[min(38rem,42%)] lg:px-14">
          <Image
            src="/faq.png"
            alt=""
            width={889}
            height={425}
            priority
            className="h-auto w-[78%] max-w-[16rem] drop-shadow-[0_10px_28px_rgba(0,1,32,0.14)] sm:max-w-[18rem]"
          />
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-[#000120] text-balance sm:text-3xl lg:text-[2.1rem]">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-[22rem] text-[0.95rem] leading-snug font-medium text-[#4A4A68] sm:text-lg">
            Everything you need to know about growing your brand on social
          </p>
        </div>
      </div>
    </section>
  )
}
