import { parseYouTubeId } from "@/lib/youtube"

export type WorkProof = {
  title: string
  caption: string
  src?: string
  width?: number
  height?: number
  /**
   * YouTube video ID or a full YouTube URL (watch, shorts, or youtu.be).
   * Add new videos here as they arrive.
   */
  youtube?: string
  videoAspect?: "portrait" | "landscape"
}

export function workProofYoutubeId(item: WorkProof) {
  return item.youtube ? parseYouTubeId(item.youtube) : null
}

/** Add further testimonial graphics and YouTube videos here. */

export const serviceWorkProof: WorkProof[] = [
  {
    title: "Express Instagram recovery",
    caption:
      "Express Instagram recovery for disabled accounts needed back within a few days.",
    youtube: "https://youtube.com/shorts/4R7nS9SZ0oo",
    videoAspect: "portrait",
  },
  {
    title: "Disabled Instagram recovery",
    caption: "Help recovering a disabled Instagram account.",
    youtube: "https://youtube.com/shorts/gBwQJfXvrUg",
    videoAspect: "portrait",
  },
  {
    title: "Disabled Facebook recovery",
    caption: "Disabled Facebook account reinstated after appeal.",
    src: "/images/testimonials/disabled-facebook-recovery.jpg",
    width: 1080,
    height: 1350,
  },
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
