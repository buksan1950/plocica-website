# Pločica Pula — Website

Single-page marketing site for **Ćevapi Pločica**, Pula Market Hall.
Built per Spiritus Sancti **Spec v1.2** (May 2026) — named menu, two
locations, WhatsApp primary CTA, three locales.

## Stack
- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- next-intl — HR (default) + EN + IT
- next/font: DM Sans (body) + Permanent Marker as **placeholder for Palmer Lake** (client must provide the .woff2 — see spec §7.2)
- Plausible analytics (optional)
- Vercel deployment

## Quick start
```bash
npm install
cp .env.example .env.local
npm run build && PORT=3030 ./node_modules/.bin/next start
# or
npm run dev
```

Routes:
- `/` → script redirect to `/hr/`
- `/hr/` — Croatian (default)
- `/en/` — English
- `/it/` — Italian (REQUIRED per spec §9: 40% Italian tourist demographic, "cevapi Pola" is zero-competition keyword cluster)

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | optional | Plausible domain name. If empty, Plausible is not loaded. |

There is no contact form (spec §8 dropped it in favour of WhatsApp).
`resend` is still installed but unused; remove it if you don't anticipate
adding a form back later.

## Order channels

WhatsApp is the **primary order CTA** per spec v1.2 §6/§7. Phone number
is hardcoded in `lib/whatsapp.ts` (`WHATSAPP_NUMBER = "385981734718"`).
Pre-filled message texts differ per locale:

- HR: `"Zdravo! Želim naručiti za ponijeti: "`
- EN: `"Hi! I'd like to order for takeaway: "`
- IT: `"Buongiorno! Vorrei ordinare da asporto: "`

The WhatsApp link appears in three places: Menu (Pločica za Ponijeti row),
Order section (column 1 primary CTA), and the StickyMobileFooter
(mobile only, hidden while hero is in view).

## Client assets still needed (per spec §7)

**CRITICAL — build cannot be completed without these:**

1. **Logo SVG** — flame-and-grill mark. Drop into `public/logo.svg` and swap into `components/ui/Wordmark.tsx`.
2. **Palmer Lake font file** — `.woff2` preferred. Drop into `public/fonts/palmer-lake.woff2`, then uncomment the `@font-face` block in `app/globals.css` and remove the `Permanent_Marker` import in `app/layout.tsx`. The CSS variable `--font-display` is already wired so no other code changes are needed.
3. **Exact hex codes for the 4-color palette** — forest green, ember orange, black, off-white. Replace the placeholder values in `app/globals.css` `:root`. Current placeholders are educated guesses; the audit calls for "warm, earthy, authentic — Bosnian-Istrian, not Nordic-minimalist."
4. **Location 2 address + hours** — populate `messages/{hr,en,it}.json` keys `order.location2Address1/2` and `order.location2Hours`, and update `components/seo/JsonLd.tsx` location2 placeholders.
5. **Named menu EUR prices** — set `price` fields in `data/menu.json` for each named item (currently `null` → renders as "TBD").

**Needed before launch:**

6. Hero + gallery photographs (documentary register only — spec §1.6). Currently using `.hero-bg` CSS gradient as scaffolding.
7. Wolt URL — `components/sections/Order.tsx`, `components/sections/Validation.tsx`. Currently `#`.
8. Glovo URL — same files. Currently `#`.
9. WhatsApp business number confirmation — currently `+385 98 173 4718` in `lib/whatsapp.ts`.
10. Tripadvisor review count — `components/seo/JsonLd.tsx` (`reviewCount: "100"`).
11. Plava Kamenica exact quote verification — currently `"Školski točna izvedba. Čisto meso. Bez prečaca."` in `messages/{hr,en,it}.json` `validation.plavaQuote`. Client to confirm wording per spec §7.13.
12. Glas Istre + Ribafish article URLs — currently `#` in `components/sections/Validation.tsx`.
13. Domain — `plocica.hr` confirmed in `app/layout.tsx` `metadataBase`. Change if different.

## Deploy (Vercel)

```bash
vercel link
vercel deploy --prod
```

Set env vars from `.env.example` in Vercel project settings (only
`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is currently used).

## Project structure
```
app/
  layout.tsx              # root: html/body + DM Sans + Permanent Marker (Palmer Lake placeholder)
  page.tsx                # /  → script redirect to /hr/
  [locale]/
    layout.tsx            # locale provider + per-locale metadata + JSON-LD alternates
    page.tsx              # composes all sections + StickyMobileFooter
  sitemap.ts | robots.ts
  opengraph-image.tsx     # 1200x630 via next/og, ember radial heat on green-deep
components/
  ui/                     # Nav, Footer, Wordmark, LanguageSwitcher (3-way HR|EN|IT),
                          # CharPattern, LangSync, StickyMobileFooter
  sections/               # Hero, TheProduct, Provenance, ThePlace, Validation,
                          # Menu, Order, Contact
  seo/JsonLd.tsx          # TWO Restaurant @type entries (Lokacija 1 + Lokacija 2)
data/menu.json            # Named menu — Klasična / Dupla / Fešta / Ponijeti + sides
messages/{hr,en,it}.json  # All copy, all three locales
i18n/                     # routing (3 locales) + request config + navigation helpers
lib/whatsapp.ts           # waLink(locale) + phone constants
```

## Spec compliance notes

- **Two-font law** (spec §1.3): only `font-display` (Palmer Lake placeholder) and DM Sans are loaded. No Bebas Neue, no Inter, no Space Mono, no DM Serif.
- **Locked palette** (spec §1.2): only the four tokens — `green`, `ember`, `black`, `offwhite` (+ green-dark/green-deep/offwhite-muted derivatives). Hex values are placeholders.
- **Two locations** (spec §7): Lokacija 1 (Tržnica) renders fully; Lokacija 2 renders with a "Adresa uskoro / Address coming soon / Indirizzo in arrivo" placeholder until client provides the address.
- **Photography law** (spec §1.6): CSS gradient hero is build-time scaffolding only. Every gradient must be replaced by documentary photography (Magnum × Chef's Table register).
- **Forbidden modes** (spec §1.5): no cute / apologetic / promotional copy in any locale.
