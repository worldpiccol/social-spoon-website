export type ServiceGroupId = "recovery" | "advertising" | "growth"

export type ServicePlan = {
  name: string
  items: string[]
}

export type Service = {
  id: string
  group: ServiceGroupId
  title: string
  summary: string
  details: string[]
  plans?: ServicePlan[]
  platforms?: string[]
  youtubeId?: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
  }
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
    group: "recovery",
    title: "Instagram Account Recovery",
    summary:
      "Assistance with Instagram accounts that have been suspended, disabled, or restricted.",
    details: [
      "We work within Instagram’s policies to help restore access where the account is eligible. Two recovery options are available after we assess the case.",
      "We never ask for passwords, 2FA codes, or recovery codes. Outcomes are not guaranteed and depend on Instagram’s review.",
    ],
    plans: [
      {
        name: "Standard Recovery",
        items: [
          "Starting from $65 (₦90,000)",
          "Estimated timeframe: 1–3 months",
          "Historical success rate: 87–90% (not a guarantee)",
        ],
      },
      {
        name: "Express Recovery",
        items: [
          "Starting from $2,500",
          "Estimated timeframe: about 72 working hours",
          "Historical success rate: 99.9% (not a guarantee)",
        ],
      },
    ],
    youtubeId: "RfKwcSzKslc",
  },
  {
    id: "facebook-account-recovery",
    group: "recovery",
    title: "Facebook Account Recovery",
    summary:
      "Help with suspended, disabled, or restricted Facebook profiles and Pages.",
    details: [
      "We help with Facebook profiles and Pages that have been suspended, disabled, or restricted, working within Meta’s policies and processes.",
      "We never ask for passwords, 2FA codes, or recovery codes. Outcomes depend on Meta’s review and are not guaranteed.",
    ],
    plans: [
      {
        name: "Pricing & timeframe",
        items: [
          "Price: quoted after assessment",
          "Timeframe: depends on Meta review",
        ],
      },
    ],
    image: {
      src: "/images/facebook-account-recovery.png",
      alt: "Facebook logo with a restore symbol, representing account recovery",
      width: 1024,
      height: 1024,
    },
  },
  {
    id: "whatsapp-account-issue-resolution",
    group: "recovery",
    title: "WhatsApp Ban Resolution",
    summary:
      "Help with banned or restricted WhatsApp numbers, including WhatsApp Business.",
    details: [
      "We assist when a WhatsApp or WhatsApp Business number has been banned or restricted, and we guide you through the available review options.",
      "We never ask for passwords or authentication codes. Outcomes depend on WhatsApp’s review and are not guaranteed.",
    ],
    plans: [
      {
        name: "Pricing & timeframe",
        items: [
          "Price: quoted after assessment",
          "Timeframe: varies with WhatsApp review",
        ],
      },
    ],
    image: {
      src: "/images/whatsapp-ban-resolution.jpg",
      alt: "WhatsApp logo with a red prohibition mark, representing a banned or restricted account",
      width: 784,
      height: 1168,
    },
  },
  {
    id: "social-media-issue-resolution",
    group: "recovery",
    title: "Digital & Social Media Issues",
    summary:
      "Triage for login problems, Ads Manager access, Page roles, and similar digital issues.",
    details: [
      "We assess login problems, Ads Manager access, Page role issues, and similar problems that affect your accounts or business presence.",
      "We never ask for passwords or authentication codes. After we understand the issue, we explain the options and next steps.",
    ],
    plans: [
      {
        name: "Pricing & timeframe",
        items: [
          "Price: quoted after we understand the issue",
          "Timeframe: depends on the platform and the issue",
        ],
      },
    ],
    image: {
      src: "/images/digital-social-issues.png",
      alt: "Wrench and gear around a social app icon, representing digital account troubleshooting",
      width: 1024,
      height: 1024,
    },
  },
  {
    id: "prepaid-advertising-accounts",
    group: "advertising",
    title: "Prepaid Ads Account Setup",
    summary:
      "Help setting up prepaid ad accounts so spend can be funded by card or transfer.",
    details: [
      "We help set up prepaid advertising accounts so campaign spend can be funded by debit card or bank transfer, rather than being blocked by payment method limits.",
    ],
    plans: [
      {
        name: "Pricing & timeframe",
        items: [
          "Price: ₦15,000",
          "Timeframe: 10 working days max",
        ],
      },
    ],
    image: {
      src: "/images/prepaid-ads-account.png",
      alt: "Credit card and megaphone, representing prepaid ads account setup",
      width: 1024,
      height: 1024,
    },
  },
  {
    id: "instagram-target-audience-setup",
    group: "advertising",
    title: "Instagram Target Audience Setup",
    summary:
      "Location, interests, behaviour, and demographics set up so Instagram ads can reach the right people.",
    details: [
      "We set up Instagram audiences using location, interests, behaviour, demographics, and your campaign goal, so ads are pointed at people more likely to respond.",
      "A short brief is enough to start. We do not guarantee sales, leads, or conversions.",
    ],
    plans: [
      {
        name: "Pricing & timeframe",
        items: [
          "Price: quoted after a short brief",
          "Timeframe: confirmed after the brief",
        ],
      },
    ],
    image: {
      src: "/images/instagram-target-audience.jpg",
      alt: "Instagram target audience: a bullseye around the Instagram logo, with people around it",
      width: 1024,
      height: 1024,
    },
  },
  {
    id: "targeted-sponsored-advertising",
    group: "advertising",
    title: "Targeted Sponsored Ads On Other SM Platforms",
    summary:
      "Targeted advertising campaigns across Instagram, Facebook, X, Snapchat, TikTok, and Google.",
    details: [
      "We create and manage sponsored campaigns on the platforms below, with targeting and placement matched to the brief.",
      "Campaigns are quoted individually. Results such as sales, leads, or conversions are not guaranteed.",
    ],
    plans: [
      {
        name: "Pricing & timeframe",
        items: [
          "Management fee plus ad spend, quoted per campaign",
          "Timeframe: set with you before the campaign starts",
        ],
      },
    ],
    platforms: [
      "Instagram",
      "Facebook",
      "X (Twitter)",
      "Snapchat",
      "TikTok",
      "Google",
    ],
    image: {
      src: "/images/targeted-sponsored-ads.png",
      alt: "Megaphone surrounded by social platform marks for multi-platform ads",
      width: 1024,
      height: 1024,
    },
  },
  {
    id: "instagram-ads-issue-resolution",
    group: "advertising",
    title: "Instagram Ads Issues",
    summary:
      "Help with rejected ads, restrictions, disabled ads accounts, and payment problems.",
    details: [
      "We help diagnose rejected ads, advertising restrictions, disabled ads accounts, payment problems, and similar Instagram ads errors.",
      "Send the error or account status when you get in touch so we can see what Instagram is blocking.",
    ],
    plans: [
      {
        name: "Pricing & timeframe",
        items: [
          "Price: quoted after seeing the error",
          "Timeframe: depends on Instagram’s review of the issue",
        ],
      },
    ],
    image: {
      src: "/images/instagram-ads-issues.png",
      alt: "Instagram logo with a warning mark, representing ads account problems",
      width: 1024,
      height: 1024,
    },
  },
  {
    id: "social-media-page-management",
    group: "growth",
    title: "Monthly Page Management",
    summary:
      "A monthly retainer for content planning, posting, basic inbox handling, and optional ads.",
    details: [
      "We handle day-to-day presence on your pages: a content plan, posting, basic inbox handling, and optional ads if you want them included.",
      "The scope is confirmed after we review the pages.",
    ],
    plans: [
      {
        name: "Pricing & timeframe",
        items: [
          "Monthly retainer, quoted after reviewing the pages",
          "Ongoing monthly service once the plan is agreed",
        ],
      },
    ],
    image: {
      src: "/images/monthly-page-management.png",
      alt: "Calendar with a like and message, representing monthly page management",
      width: 1024,
      height: 1024,
    },
  },
  {
    id: "content-creation-voice-over",
    group: "growth",
    title: "Content Creation & Voice Over",
    summary:
      "Brief, script, and finished assets, including voice-over, to promote your products or services.",
    details: [
      "We take a brief, write or refine the script, and deliver finished content and voice-over assets for your pages or campaigns.",
      "Packages are scoped around the brief, so formats and quantity are confirmed before production starts.",
    ],
    plans: [
      {
        name: "Pricing & timeframe",
        items: [
          "Priced per package after the brief",
          "Delivery timeline confirmed with the package",
        ],
      },
    ],
    image: {
      src: "/images/content-creation-voiceover.png",
      alt: "Microphone and clapperboard, representing content creation and voice-over",
      width: 1024,
      height: 1024,
    },
  },
  {
    id: "online-courses",
    group: "growth",
    title: "Online Courses",
    summary:
      "Practical digital courses for ads, page management, and protecting your accounts. Enrolment is by enquiry.",
    details: [
      "We currently have the following courses available. Enrolment is by enquiry — use Contact us to ask about availability, pricing, and how to join. There is no self-serve course portal.",
    ],
    plans: [
      {
        name: "Courses available",
        items: [
          "Instagram Ads Essentials",
          "Social Page Management for Small Businesses",
          "Protecting Your Digital Presence",
        ],
      },
      {
        name: "Pricing & timeframe",
        items: [
          "Quoted after enquiry",
          "Schedule confirmed when you enrol",
        ],
      },
    ],
    image: {
      src: "/images/online-courses.png",
      alt: "Open book with a play button, representing online digital courses",
      width: 1024,
      height: 1024,
    },
  },
]
