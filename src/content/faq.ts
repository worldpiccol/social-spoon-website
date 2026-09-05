export type FaqItem = {
  id: string
  question: string
  paragraphs: string[]
  bullets?: string[]
  note?: string
}

export const faqItems: FaqItem[] = [
  {
    id: "account-types",
    question: "What types of accounts do you help recover?",
    paragraphs: [
      "We provide professional recovery assistance for eligible suspended or disabled Instagram and Facebook accounts. The appropriate service depends on the specific status, circumstances, and requirements of the account.",
      "Before proceeding, we assess the situation to determine which recovery service may be appropriate.",
    ],
  },
  {
    id: "recovery-time",
    question: "How long does account recovery take?",
    paragraphs: [
      "Recovery timelines vary depending on the service selected and the circumstances of the account.",
      "General guide:",
    ],
    bullets: [
      "Suspended Instagram accounts: typically 48 hours to 2 weeks.",
      "Standard disabled-account recovery: generally 1–2 months.",
      "Express recovery: usually within 72 hours, but may take up to 7 working days due to unforeseen circumstances.",
    ],
    note: "These are estimates, not guarantees. Delays may occur due to platform reviews, verification requirements, technical issues, or other factors outside our control.",
  },
  {
    id: "guaranteed",
    question: "Is account recovery guaranteed?",
    paragraphs: [
      "No.",
      "Account recovery ultimately depends on the policies, systems, and decisions of the relevant third-party platform.",
      "Social Spoon provides professional assistance and follows an established recovery process, but cannot guarantee that an account will be reinstated or that a particular outcome will be achieved.",
      "Published success rates, if used, represent stated historical/service performance figures and do not constitute a guarantee for an individual case.",
    ],
  },
  {
    id: "other-providers",
    question:
      "Can I use another recovery service while my case is being handled?",
    paragraphs: [
      "We recommend that clients do not engage another recovery provider while their Social Spoon case is within its agreed service timeframe.",
      "Using multiple recovery providers or taking independent actions during the recovery process may interfere with the case.",
      "Where applicable, this may also affect refund eligibility under the Refund Policy and applicable service terms.",
    ],
  },
  {
    id: "timeframe-guarantee",
    question: "Do you guarantee a specific recovery timeframe?",
    paragraphs: [
      "No.",
      "The timeframes provided by Social Spoon are estimated service timelines rather than guarantees.",
      "Third-party platforms may require additional reviews, verification, or processing time.",
    ],
  },
  {
    id: "information-needed",
    question: "What information do I need to provide?",
    paragraphs: [
      "The information required depends on the service and circumstances of the account.",
      "Social Spoon will explain what information or documentation is required.",
      "Never send passwords, 2FA codes, recovery codes, or other authentication secrets through this website or a contact form.",
    ],
  },
  {
    id: "cannot-recover",
    question: "What happens if my account cannot be recovered?",
    paragraphs: [
      "If the relevant platform does not approve the recovery or the account cannot be reinstated through the available process, the outcome depends on the specific service terms.",
      "Payment does not automatically guarantee account reinstatement.",
    ],
  },
  {
    id: "every-account",
    question: "Can you recover every suspended or disabled account?",
    paragraphs: [
      "No.",
      "Some accounts may be ineligible due to the nature of the restriction, platform policies, account history, or other circumstances.",
      "Each case should be assessed individually.",
    ],
  },
  {
    id: "get-started",
    question: "How do I get started?",
    paragraphs: [
      "Choose the service that best matches your situation or contact Social Spoon directly.",
      "Our team can help you understand the available options and requirements.",
    ],
  },
]
