# Social Spoon

Professional website for **Social Spoon**, a digital solutions company helping individuals, creators, and businesses with account recovery assistance, social media management, advertising, content creation, and online growth.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Local development

```bash
npm install
npm run dev
```

The app runs at [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm run start
npm run lint
```

## Configuration

Copy `.env.example` to `.env.local` and fill in values when they are available:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap, and Open Graph |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Public support email. Leave empty until the full address is supplied |

Theme colours, fonts, and spacing live in `src/app/globals.css` as CSS variables so they can be changed in one place.

Site copy, navigation, and social links live in `src/content/`.

## Missing client details

These are intentionally not invented:

- Full support email
- Logo file
- Official brand colours and fonts
- Testimonials
- Terms & Conditions body copy
- Privacy Policy / Cookie Policy
- Business address, phone number, pricing, and registration details

The logo is a replaceable text treatment in `src/components/logo.tsx`. The Terms page is a placeholder. Testimonials stay hidden until real reviews are added to `src/content/testimonials.ts`.

## Contact form

The contact form validates on the server, includes a honeypot, a short time check, and basic rate limiting. It never asks for passwords, 2FA codes, or recovery codes.

Until a mail provider and support email are configured, submissions are accepted and logged on the server rather than emailed.
