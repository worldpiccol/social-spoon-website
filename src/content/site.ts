/**
 * Central site configuration.
 * Replace placeholders here when the client supplies missing details.
 */
export const SITE_NAME = "Social Spoon";

export const SITE_TAGLINE =
  "Digital Solutions. Meta Accounts Recovery*. Digital Growth.";

export const SITE_SHORT_DESCRIPTION =
  "Professional digital solutions for Meta accounts recovery*, social media management, advertising, content creation, and online growth.";

export const SITE_DESCRIPTION =
  "Social Spoon provides professional digital solutions for account recovery assistance, social media management, advertising, content creation and online growth.";

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return `https://${vercelProduction.replace(/^https?:\/\//, "")}`.replace(
      /\/$/,
      "",
    );
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/^https?:\/\//, "")}`.replace(/\/$/, "");
  }

  return "http://127.0.0.1:43123";
}

export const SITE_URL = resolveSiteUrl();

export const SUPPORT_EMAIL = (
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@mysocialspoon.com"
).trim();

export const SUPPORT_PHONE = "+234 704 217 4287";

export const SUPPORT_PHONE_TEL = "tel:+2347042174287";

export const SUPPORT_WHATSAPP = "https://wa.me/2347042174287";

export const LEGAL_UPDATED = "7 September 2026";

export const isSupportEmailConfigured = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
  SUPPORT_EMAIL,
);

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/social_._spoon",
    handle: "@social_._spoon",
  },
  {
    name: "WhatsApp",
    href: SUPPORT_WHATSAPP,
    handle: SUPPORT_PHONE,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@social_.spoon",
    handle: "@social_.spoon",
  },
  {
    name: "Snapchat",
    href: "https://snapchat.com/t/VA2V47bm",
    handle: "Snapchat",
  },
] as const;

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
] as const;

export const legalLinks = [
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Privacy Policy", href: "/privacy" },
] as const;

export const primaryCta = {
  label: "Get Started",
} as const;
