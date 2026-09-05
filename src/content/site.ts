/**
 * Central site configuration.
 * Replace placeholders here when the client supplies missing details.
 */
export const SITE_NAME = "Social Spoon";

export const SITE_TAGLINE =
  "Digital Solutions. Account Recovery. Digital Growth.";

export const SITE_SHORT_DESCRIPTION =
  "Professional digital solutions for account recovery, social media management, advertising, content creation, and online growth.";

export const SITE_DESCRIPTION =
  "Social Spoon provides professional digital solutions for account recovery assistance, social media management, advertising, content creation and online growth.";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:43123"
).replace(/\/$/, "");

/** Incomplete until the client supplies the full address. Do not invent a domain. */
export const SUPPORT_EMAIL = (
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? ""
).trim();

export const isSupportEmailConfigured = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
  SUPPORT_EMAIL,
);

export const SUPPORT_EMAIL_PLACEHOLDER = "Support email to be provided";

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/social_._spoon?igsi=czE3YTIydzNpeW5m",
    handle: "@social_._spoon",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/message/RMOXLGERYJ5RF1",
    handle: "Message us on WhatsApp",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@social_.spoon?_r=1&_t=ZS-99O3Ftk2wzg",
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
  { name: "Contact", href: "/contact" },
] as const;

export const legalLinks = [
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Terms & Conditions", href: "/terms" },
] as const;

export const primaryCta = {
  label: "Get Started",
  href: "/contact",
} as const;
