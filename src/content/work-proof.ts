export type WorkProof = {
  title: string
  caption: string
  src: string
  width: number
  height: number
}

/** Add further testimonial graphics here. The services slider will pick them up. */

export const serviceWorkProof: WorkProof[] = [
  {
    title: "Page revamp",
    caption: "Instagram profile refreshed with a clearer layout, highlights, and grid.",
    src: "/images/testimonials/page-revamp.jpg",
    width: 1024,
    height: 1280,
  },
  {
    title: "Ads account recovered",
    caption: "Disabled ads account recovered and outstanding debts cleared.",
    src: "/images/testimonials/ads-account-recovered.jpg",
    width: 1024,
    height: 1280,
  },
  {
    title: "Prepaid ads account",
    caption: "Ad account moved from post-paid billing to prepaid.",
    src: "/images/testimonials/prepaid-ads-account.jpg",
    width: 1024,
    height: 1280,
  },
  {
    title: "Account reinstated",
    caption: "Restricted advertising account reviewed and reinstated.",
    src: "/images/testimonials/restricted-account-reinstated.jpg",
    width: 1024,
    height: 1280,
  },
]
