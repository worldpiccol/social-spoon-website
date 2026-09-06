export type ServiceGroupId = "recovery" | "advertising" | "growth"

export type Service = {
  id: string
  number: string
  group: ServiceGroupId
  title: string
  description: string
  notes?: string[]
  platforms?: string[]
  youtubeId?: string
}

export const serviceGroups: {
  id: ServiceGroupId
  eyebrow: string
  heading: string
  description: string
}[] = [
  {
    id: "recovery",
    eyebrow: "Account recovery",
    heading: "Get help when access is at risk",
    description:
      "Assistance with eligible Instagram, Facebook, WhatsApp, and other social account issues. Outcomes depend on each platform’s policies and decisions.",
  },
  {
    id: "advertising",
    eyebrow: "Advertising",
    heading: "Reach the right audience",
    description:
      "Prepaid accounts, targeting, campaign management, and help with advertising issues across major platforms.",
  },
  {
    id: "growth",
    eyebrow: "Presence and growth",
    heading: "Build a stronger online presence",
    description:
      "Ongoing page management, content, and practical digital education for individuals, creators, and businesses.",
  },
]

export const services: Service[] = [
  {
    id: "instagram-account-recovery",
    number: "01",
    group: "recovery",
    title: "Instagram Account Recovery",
    description:
      "We assist with the process of recovering suspended or disabled Instagram accounts and resolving account-related issues.",
    notes: [
      "Recovery depends on eligibility and Instagram's policies and decisions.",
    ],
    youtubeId: "RfKwcSzKslc",
  },
  {
    id: "facebook-account-recovery",
    number: "02",
    group: "recovery",
    title: "Facebook Account Recovery",
    description:
      "Get assistance with suspended, disabled, or restricted Facebook accounts and related access issues.",
    notes: [
      "Recovery depends on eligibility and Facebook's policies and decisions.",
    ],
  },
  {
    id: "whatsapp-account-issue-resolution",
    number: "03",
    group: "recovery",
    title: "WhatsApp Account Issue Resolution",
    description:
      "We provide assistance with eligible WhatsApp account restrictions, bans, and other account-related issues.",
    notes: [
      "Assistance is limited to eligible cases and depends on WhatsApp's policies and decisions.",
    ],
  },
  {
    id: "social-media-issue-resolution",
    number: "04",
    group: "recovery",
    title: "Social Media Issue Resolution",
    description:
      "Having a problem with your social media account, page, advertising, or platform features? Our team can help identify the issue and guide you toward an appropriate solution.",
  },
  {
    id: "prepaid-advertising-accounts",
    number: "05",
    group: "advertising",
    title: "Prepaid Advertising Accounts",
    description:
      "We provide prepaid advertising account solutions to help businesses run and manage their digital advertising campaigns.",
  },
  {
    id: "instagram-target-audience-setup",
    number: "06",
    group: "advertising",
    title: "Instagram Target Audience Setup",
    description:
      "We help you identify and configure relevant target audiences for your Instagram campaigns to reach people who are more likely to be interested in your products or services.",
  },
  {
    id: "targeted-sponsored-advertising",
    number: "07",
    group: "advertising",
    title: "Targeted & Sponsored Advertising",
    description:
      "We create and manage targeted advertising campaigns to help you reach the right audience and make your advertising campaigns more effective.",
    platforms: [
      "Instagram",
      "Facebook",
      "X (Twitter)",
      "Snapchat",
      "TikTok",
      "Google",
    ],
  },
  {
    id: "instagram-ads-issue-resolution",
    number: "08",
    group: "advertising",
    title: "Instagram Ads Issue Resolution",
    description:
      "Having problems with Instagram advertising? We help troubleshoot common advertising, campaign, account, and ad-delivery issues.",
  },
  {
    id: "social-media-page-management",
    number: "09",
    group: "growth",
    title: "Monthly Social Media Page Management",
    description:
      "Let our team manage your social media presence with consistent content, audience engagement, page optimization, and ongoing account support.",
  },
  {
    id: "content-creation-voice-over",
    number: "10",
    group: "growth",
    title: "Content Creation & Voice-Over",
    description:
      "Give your brand a stronger online presence with professional content creation and voice-over services tailored to your audience and platform.",
  },
  {
    id: "online-courses",
    number: "11",
    group: "growth",
    title: "Online Courses",
    description:
      "Learn practical digital and social media skills through our online courses, designed for individuals, entrepreneurs, creators, and businesses.",
  },
]

export const contactReasons = [
  { value: "general", label: "General enquiry" },
  ...services.map((service) => ({
    value: service.id,
    label: service.title,
  })),
  { value: "other", label: "Other" },
] as const
