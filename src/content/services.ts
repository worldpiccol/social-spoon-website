export type Service = {
  id: string
  number: string
  title: string
  description: string
  notes?: string[]
  platforms?: string[]
}

export const services: Service[] = [
  {
    id: "instagram-account-recovery",
    number: "01",
    title: "Instagram Account Recovery",
    description:
      "We assist with the process of recovering suspended or disabled Instagram accounts and resolving account-related issues.",
    notes: [
      "Recovery depends on eligibility and Instagram's policies and decisions.",
    ],
  },
  {
    id: "facebook-account-recovery",
    number: "02",
    title: "Facebook Account Recovery",
    description:
      "Get assistance with suspended, disabled, or restricted Facebook accounts and related access issues.",
    notes: [
      "Recovery depends on eligibility and Facebook's policies and decisions.",
    ],
  },
  {
    id: "social-media-page-management",
    number: "03",
    title: "Monthly Social Media Page Management",
    description:
      "Let our team manage your social media presence with consistent content, audience engagement, page optimization, and ongoing account support.",
  },
  {
    id: "prepaid-advertising-accounts",
    number: "04",
    title: "Prepaid Advertising Accounts",
    description:
      "We provide prepaid advertising account solutions to help businesses run and manage their digital advertising campaigns.",
  },
  {
    id: "instagram-target-audience-setup",
    number: "05",
    title: "Instagram Target Audience Setup",
    description:
      "We help you identify and configure relevant target audiences for your Instagram campaigns to reach people who are more likely to be interested in your products or services.",
  },
  {
    id: "targeted-sponsored-advertising",
    number: "06",
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
    number: "07",
    title: "Instagram Ads Issue Resolution",
    description:
      "Having problems with Instagram advertising? We help troubleshoot common advertising, campaign, account, and ad-delivery issues.",
  },
  {
    id: "online-courses",
    number: "08",
    title: "Online Courses",
    description:
      "Learn practical digital and social media skills through our online courses, designed for individuals, entrepreneurs, creators, and businesses.",
  },
  {
    id: "whatsapp-account-issue-resolution",
    number: "09",
    title: "WhatsApp Account Issue Resolution",
    description:
      "We provide assistance with eligible WhatsApp account restrictions, bans, and other account-related issues.",
    notes: [
      "Assistance is limited to eligible cases and depends on WhatsApp's policies and decisions.",
    ],
  },
  {
    id: "content-creation-voice-over",
    number: "10",
    title: "Content Creation & Voice-Over",
    description:
      "Give your brand a stronger online presence with professional content creation and voice-over services tailored to your audience and platform.",
  },
  {
    id: "social-media-issue-resolution",
    number: "11",
    title: "Social Media Issue Resolution",
    description:
      "Having a problem with your social media account, page, advertising, or platform features? Our team can help identify the issue and guide you toward an appropriate solution.",
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
