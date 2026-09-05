# Social Spoon

Professional website for **Social Spoon**, a digital solutions company helping individuals, creators, and businesses with account recovery assistance, social media management, advertising, content creation, and online growth.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Brand colours

Extracted from the official logo artwork:

| Token | Hex | Use |
| --- | --- | --- |
| Cyan | `#5DD4DF` | Wordmark, pin, buttons, highlights |
| Navy | `#000120` | Page background (colour logo) |
| Deep blue | `#070D3A` | Cards and muted bands |
| Indigo | `#232B5B` | Borders, inputs, secondary surfaces |
| Black | `#000000` | Header, hero, footer (black logo) |

These live in `src/app/globals.css` and `src/content/brand.ts`. Logo files are in `public/brand/`.

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

Site copy, navigation, and social links live in `src/content/`.

## Missing client details

These are intentionally not invented:

- Full support email
- Testimonials
- Terms & Conditions body copy
- Privacy Policy / Cookie Policy
- Business address, phone number, pricing, and registration details

The Terms page is a placeholder. Testimonials stay hidden until real reviews are added to `src/content/testimonials.ts`.

## Contact form

The contact form validates on the server, includes a honeypot, a short time check, and basic rate limiting. It never asks for passwords, 2FA codes, or recovery codes.

Until a mail provider and support email are configured, submissions are accepted and logged on the server rather than emailed.
