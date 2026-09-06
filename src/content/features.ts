export const features = [
  {
    number: "01",
    title: "Experience",
    description:
      "Practical experience across social media recovery, advertising and digital growth.",
  },
  {
    number: "02",
    title: "Professional Process",
    description:
      "Every service follows a defined process with clear requirements and expectations.",
  },
  {
    number: "03",
    title: "Confidentiality",
    description:
      "We understand the sensitivity of your accounts and business information.",
  },
  {
    number: "04",
    title: "Client-Focused Support",
    description:
      "From your first enquiry to completion, our focus remains on providing clear and responsive support.",
  },
] as const

export const presenceRoles = [
  "your storefront",
  "your community",
  "your marketing channel",
  "your source of income",
  "your brand identity",
  "your connection to your customers",
] as const

export const presenceRolesCopy = `${presenceRoles.slice(0, -1).join(", ")}, and ${presenceRoles.at(-1)}`
