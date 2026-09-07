import Image from "next/image"
import styles from "./faq-hero.module.css"

export function FaqHero() {
  return (
    <section className={styles.hero} aria-labelledby="faq-hero-heading">
      <Image
        src="/hero.jpg"
        alt="A professional woman pointing toward social and FAQ icons"
        fill
        priority
        sizes="100vw"
        className={styles.bg}
      />
      <Image
        src="/faq.png"
        alt=""
        width={889}
        height={425}
        priority
        className={styles.mark}
      />
      <div className={styles.copy}>
        <h1 id="faq-hero-heading" className={styles.headline}>
          Frequently Asked Questions
        </h1>
        <p className={styles.sub}>
          Everything you need to know about growing your brand on social
        </p>
      </div>
    </section>
  )
}
