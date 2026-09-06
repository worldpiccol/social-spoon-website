export type ServiceGroupId = "recovery" | "advertising" | "growth"

export type ServicePlan = {
  name: string
  items: string[]
}

export type Service = {
  id: string
  number: string
  group: ServiceGroupId
  title: string
  summary: string
  details: string[]
  plans?: ServicePlan[]
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
      "Assistance with Instagram, Facebook, WhatsApp, and other social account issues.",
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
    summary:
      "We assist with the recovery and reinstatement of Instagram accounts that have been suspended, disabled, or restricted.",
    details: [
      "We assist with the recovery and reinstatement of Instagram accounts that have been suspended, disabled, or restricted. Our team works to restore access to your account. We have two recovery options:",
    ],
    plans: [
      {
        name: "Standard Recovery",
        items: [
          "Starting from $65 (₦90,000)",
          "Estimated timeframe: 1–3 months",
          "Success rate: 87–90%",
        ],
      },
      {
        name: "Express Recovery",
        items: [
          "Starting from $2,500",
          "Estimated timeframe: 72 working hours",
          "Success rate: 99.9%",
        ],
      },
    ],
    youtubeId: "RfKwcSzKslc",
  },
  {
    id: "facebook-account-recovery",
    number: "02",
    group: "recovery",
    title: "Facebook Account Recovery",
    summary:
      "We help clients recover Facebook accounts that have been suspended, disabled, or restricted.",
    details: [
      "We help clients recover Facebook accounts that have been suspended, disabled, or restricted.",
    ],
  },
  {
    id: "whatsapp-account-issue-resolution",
    number: "03",
    group: "recovery",
    title: "WhatsApp Ban Resolution",
    summary:
      "We assist with WhatsApp accounts that have been banned or restricted and guide clients.",
    details: [
      "We assist with WhatsApp accounts that have been banned or restricted and guide clients.",
    ],
  },
  {
    id: "social-media-issue-resolution",
    number: "04",
    group: "recovery",
    title: "Digital & Social Media Issues",
    summary:
      "Assistance with digital marketing and social media issues that may affect your business or online presence.",
    details: [
      "We provide assistance with various digital marketing and social media-related issues that may affect your business or online presence. Contact us with your specific issue so we can assess how we can help.",
    ],
  },
  {
    id: "prepaid-advertising-accounts",
    number: "05",
    group: "advertising",
    title: "Prepaid Ads Account Setup",
    summary:
      "We help businesses set up prepaid ad accounts so they can pay for Instagram ads by debit card or bank transfer.",
    details: [
      "We help businesses set up prepaid ad accounts, making it easier to pay for ads on Instagram using their debit card or transfer from their bank account.",
    ],
  },
  {
    id: "instagram-target-audience-setup",
    number: "06",
    group: "advertising",
    title: "Instagram Target Audience Setup",
    summary:
      "We help you set up the right Instagram audience so your ads can reach people who are more likely to convert.",
    details: [
      "We help you identify and set up the right audience for your Instagram campaigns based on factors such as location, interests, behaviours, demographics, and your business goals, so your ads can reach your target audience and convert into sales.",
    ],
  },
  {
    id: "targeted-sponsored-advertising",
    number: "07",
    group: "advertising",
    title: "Targeted Sponsored Ads On Other SM Platforms",
    summary:
      "Targeted advertising campaigns across Instagram, Facebook, X, Snapchat, TikTok, and Google.",
    details: [
      "We create and manage targeted advertising campaigns across Instagram, Facebook, X (Twitter), Snapchat, TikTok, and Google to help businesses reach the right audience and generate better results.",
    ],
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
    title: "Instagram Ads Issues",
    summary:
      "Help with rejected ads, restrictions, disabled ads, payment problems, and other Instagram advertising issues.",
    details: [
      "Having problems running Instagram ads? We help diagnose and resolve common advertising issues, including rejected ads, ads restrictions, disabled ads, payment-related problems, etc.",
    ],
  },
  {
    id: "social-media-page-management",
    number: "09",
    group: "growth",
    title: "Monthly Page Management",
    summary:
      "We handle your social media presence so you can focus on your business.",
    details: [
      "Let us handle your social media presence while you focus on your business. Our management service covers running of sponsored ads, content planning, posting, and overall page maintenance, etc.",
    ],
  },
  {
    id: "content-creation-voice-over",
    number: "10",
    group: "growth",
    title: "Content Creation & Voice Over",
    summary:
      "Engaging content and professional voice-over materials to promote your products or services.",
    details: [
      "We create engaging content and professional voice-over materials designed to help businesses promote their products or services, and maintain a strong online presence.",
    ],
  },
  {
    id: "online-courses",
    number: "11",
    group: "growth",
    title: "Online Courses",
    summary:
      "Learn practical digital marketing skills through our online courses.",
    details: [
      "Learn practical digital marketing skills through our online courses. We have the following course available:",
    ],
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
