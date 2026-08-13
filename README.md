# Emily Chappel — Portfolio

A minimalist, editorial black-and-white personal portfolio built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **next/font** — Playfair Display (serif display) + Inter (sans body/nav)
- **next/image** — all imagery, currently pointing at local SVG placeholders

## Project structure

```
app/
  layout.tsx      # fonts, metadata, root shell
  page.tsx         # assembles the page from components
  globals.css      # Tailwind directives + base styles
components/
  Navbar.tsx        # sticky nav, mobile hamburger menu
  Hero.tsx           # oversized wordmark card, image pair, "Categories +" label
  About.tsx           # bio section
  ImageCard.tsx        # shared image + label + title card
  Experience.tsx        # experience cards (reuses ImageCard)
  Projects.tsx            # project cards (reuses ImageCard)
  Contact.tsx               # email / LinkedIn links
public/images/
  hero-1.svg, hero-2.svg          # hero image placeholders
  card-1.svg … card-4.svg          # experience/project placeholders
```

## Getting started

This environment didn't have Node.js available, so the project was
hand-scaffolded rather than generated with `create-next-app` — install
dependencies before running it for the first time:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Customizing content

- **Images**: swap the files in `public/images/` for real photos (same
  filenames, or update the `src` paths in `Hero.tsx`, `Experience.tsx`, and
  `Projects.tsx`). Once you're using raster images (jpg/png) you can remove
  `dangerouslyAllowSVG` from `next.config.mjs`.
- **Bio / copy**: edit the placeholder text directly in `About.tsx`,
  `Experience.tsx`, `Projects.tsx`.
- **Contact links**: update `EMAIL` and `LINKEDIN_URL` in `Contact.tsx` —
  the LinkedIn URL is a placeholder and needs your real handle.
- **Colors**: the palette (`paper`, `card`, `ink`, `line`) lives in
  `tailwind.config.ts` if you want to adjust the off-white/grayscale tones.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects as Next.js — no extra config needed.
