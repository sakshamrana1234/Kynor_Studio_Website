# Kynor Studio — final developer handoff

## Direction

Kynor is positioned as a **creative intelligence studio for paid social**.

Core promise: **Find more angles worth testing.**

The website presents a three-step founding offer ladder. AI is presented as a production advantage, not the product or headline.

## Final founding pricing

| Offer | Price | Role |
|---|---:|---|
| Creative Opportunity Audit | $350 | Low-risk strategic entry; credited toward a pilot booked within 14 days |
| Founding Creative Pilot | $1,250 | Recommended first production engagement; 6–8 finished ads |
| Monthly Creative Partnership | $2,500/month | Ongoing work after the pilot; 12–16 finished ads |

Founding pricing is limited to the first three pilot partners. The website does not publicly promise a 30–40-ad package.

## Design system

- Near-black: `#111214`
- Midnight: `#101526`
- Deep cobalt: `#173893`
- Electric cobalt: `#275DFF`
- Porcelain: `#F1EFE9`
- Steel: `#8B9098`
- Display voice: Libre Caslon Display
- Primary sans: Instrument Sans
- Technical labels: DM Mono

The visual structure is editorial, asymmetric, and image-led. The large statements and section pacing are influenced by the supplied references, but the palette, mark, positioning, work system, and gradient language remain Kynor-specific.

## Complete routes

- `/` — positioning-led homepage
- `/work` — work archive
- `/work/penrose-skin`
- `/work/notion-second-brain`
- `/work/memzero-launch`
- `/start-a-project` — sprint application form

Vercel rewrites in `vercel.json` support direct access to every client-side route.

## Homepage order

1. Direct positioning hero
2. Creative-fatigue problem
3. Three operating principles
4. Asymmetric selected-work section
5. Three-offer pricing ladder
6. Founding Creative Pilot
7. Four-stage process and scope
8. Founder rationale
9. Application and Calendly call to action

## Links and contact flow

- Application: `/start-a-project`
- Calendly: `https://calendly.com/d/d3qh-cgv-m29/introduction-meeting`
- Email: `contact@kynorstudio.com`
- Instagram: `https://www.instagram.com/kynorstudio`
- LinkedIn: `https://www.linkedin.com/company/kynor-studio/`

The application form posts to `/api/contact`. The Vercel function validates the new fields, rejects oversized requests, uses a honeypot, escapes submitted values, and sends the application through Resend.

## Required deployment variables

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL` (defaults to `contact@kynorstudio.com`)

## Content ownership

- `src/siteData.js` — project copy, classifications, sprint stages, principles
- `src/mediaConfig.js` — video embeds and posters
- `src/main.jsx` — page structure, routes, links, form
- `src/styles.css` — visual system and responsive layout
- `api/contact.js` — form delivery
- `index.html` — default metadata and social fields

## Media still required

| Media key | Project | Status |
|---|---|---|
| `penrose-claymation` | Penrose Skin | Add final Cloudflare Stream embed and WebP poster |
| `notion-second-brain` | Notion | Add final Cloudflare Stream embed and WebP poster |
| `memzero-launch` | MemZero | Confirm publication status, then add embed and poster |

Do not add large master videos to Git.

## Publication rules

- Keep Penrose Skin and MemZero labelled **Selected prior work** until attribution is formally cleared.
- Keep Notion labelled **Independent creative study**.
- Do not publish ROAS, CPA, spend, client logos, or endorsements without evidence and permission.
- Replace the designed media placeholders only with approved assets.

## Final launch checklist

- [ ] Add the three approved video embeds and posters.
- [ ] Confirm selected-prior-work permissions.
- [ ] Configure the three Resend environment variables.
- [ ] Submit a real application and confirm delivery and reply-to behavior.
- [ ] Confirm Calendly availability and calendar creation.
- [ ] Confirm Instagram, LinkedIn, email, application, and all Work routes.
- [ ] Review homepage and application form on a real iPhone and Android device.
- [ ] Confirm `public/og.png` matches the new cobalt positioning.
- [ ] Confirm `public/sitemap.xml` and production domain.
- [ ] Run `pnpm build` before deployment.

## Build and deployment

- Package manager: pnpm
- Development: `pnpm dev`
- Production build: `pnpm build`
- Output: `dist`
- Hosting target: Vercel

The source is ready for developer handoff. Media permissions, hosted video URLs, Resend credentials, and a live submission test remain launch-owner responsibilities.
