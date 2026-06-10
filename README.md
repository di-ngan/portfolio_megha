# Megha R K — Portfolio

Personal portfolio website for Megha R K, Marketing Communication Professional.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve production build
npm run lint       # lint check
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout & SEO meta
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles & CSS variables
├── components/
│   ├── sections/         # Page sections (Hero, About, Work, Experience…)
│   ├── effects/          # Visual effect components
│   ├── ui/               # Base UI primitives
│   ├── MagicBento.tsx    # Bento grid card component
│   ├── ProfileCard.tsx   # Tilt profile card
│   └── ScrollStack.tsx   # Stacked scroll cards
├── data/
│   └── portfolio.ts      # All content — edit this to update the site
└── lib/
    └── constants.ts
public/
├── images/               # Work images (organised by project folder)
│   ├── profile.jpeg
│   ├── aura flyer/
│   ├── MERMAN FLYER 002/
│   ├── Mudra malar dance school/
│   ├── samudhra flyer/
│   ├── amrita alumni relations/
│   └── labour day/
└── Megha R K resume_*.pdf
```

---

## Updating Content

All site content lives in `src/data/portfolio.ts`. Edit that file to change:

- Name, headline, stats, CTA links
- About summary, philosophy, strengths
- Work/campaign case cards
- Experience timeline
- Achievements & certifications
- Contact details

### Adding work images

Drop images into a subfolder under `public/images/`, then reference them in `src/components/sections/work.tsx` as `/images/<folder-name>/<file>` (URL-encode spaces as `%20`).

### Changing colours

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 262.1 80% 50.4%;
  --secondary: 160 84.1% 39.7%;
}
```

---

## Deployment

Recommended: **Vercel**

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com) → New Project
3. Framework preset: Next.js — deploy

The `vercel.json` at the root is already configured with the correct build settings.

---

## Contact

megharamkumar2801@gmail.com · [LinkedIn](https://www.linkedin.com/in/megha-r-k-06a29024b/)
