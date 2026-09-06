# Social Spoon

Professional website for **Social Spoon**, a digital solutions company helping individuals, creators, and businesses with account recovery assistance, social media management, advertising, content creation, and online growth.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Brand colours

Extracted from the official logo artwork and applied on a light site:

| Token | Hex | Use |
| --- | --- | --- |
| White | `#FFFFFF` | Page, header, cards, footer |
| Cyan | `#5DD4DF` | Pin, buttons, highlights; wordmark on dark surfaces |
| Ice | `#E8FBFC` / `#F4FBFC` | Soft section bands |
| Navy | `#000120` | Headings, body type, wordmark on white |
| Black / navy | `#000000` / `#000120` | Hero artwork wash only |

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
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Public support email. Defaults to `support@mysocialspoon.com` |

Site copy, navigation, and social links live in `src/content/`.

## Missing client details

These are intentionally not invented:

- Testimonials
- Terms & Conditions body copy
- Privacy Policy / Cookie Policy
- Business address, phone number, and registration details
- Course titles (the Online Courses card notes that a course is available, without listing names)

The Terms page is a placeholder. Testimonials stay hidden until real reviews are added to `src/content/testimonials.ts`.

## Contact form

The contact form validates on the server, includes a honeypot, a short time check, and basic rate limiting. It never asks for passwords, 2FA codes, or recovery codes.

Public enquiries can be sent to [support@mysocialspoon.com](mailto:support@mysocialspoon.com). Until a mail provider is wired up, form submissions are accepted and logged on the server rather than emailed.
