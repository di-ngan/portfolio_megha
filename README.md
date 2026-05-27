# Megha R K - Portfolio Website

A premium, modern portfolio website for Megha R K, a Marketing Communication Professional. Built with cutting-edge web technologies for optimal performance, accessibility, and SEO.

## Features

- 🎨 **Modern Design** - Glassmorphism cards, soft gradients, and elegant typography
- 🌓 **Dark/Light Mode** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **High Performance** - Optimized for speed with lazy loading and code splitting
- 🎯 **SEO Optimized** - Structured data, meta tags, and open graph support
- ♿ **Accessible** - WCAG compliant with keyboard navigation and screen reader support
- ✨ **Smooth Animations** - Subtle Framer Motion animations for enhanced UX
- 🎪 **Interactive Effects** - Particle field and hover interactions
- 📊 **Modular Content** - Easy-to-update data structure for adding projects and campaigns
- 🚀 **Production Ready** - Optimized deployment configuration

## Tech Stack

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Components**: Shadcn UI
- **Effects**: Three.js (minimal use)
- **SEO**: next-seo
- **Language**: TypeScript

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── sections/           # Page sections (Hero, About, Skills, etc.)
│   ├── cards/              # Reusable card components
│   ├── effects/            # Animation and effect components
│   ├── navbar.tsx          # Navigation bar
│   ├── footer.tsx          # Footer
│   ├── theme-provider.tsx  # Theme provider
│   └── analytics.tsx       # Analytics integration
├── data/
│   └── portfolio.ts        # Portfolio content and data
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Image assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

### Analyze Bundle Size

```bash
npm run analyze
```

## Customization

### Update Portfolio Content

Edit `/src/data/portfolio.ts` to update:
- Hero section information
- About me content
- Skills and expertise
- Work/campaign cases
- Experience timeline
- Achievements and certifications
- Contact information

### Modify Colors and Theme

Update CSS variables in `/src/app/globals.css`:

```css
:root {
  --primary: 262.1 80% 50.4%;
  --secondary: 160 84.1% 39.7%;
  --accent: 262.1 80% 50.4%;
  /* ... other variables */
}
```

### Add More Sections

1. Create a new component in `/src/components/sections/`
2. Import and add to `/src/app/page.tsx`
3. Add navigation link in `/src/components/navbar.tsx`

### Update Resume

Replace the PDF file in the public folder and update the file path in:
- `/src/components/sections/hero.tsx`
- `/src/components/sections/resume.tsx`

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ CSS and JS code splitting
- ✅ Lazy loading for images and sections
- ✅ Minimal animation performance impact
- ✅ 90+ Lighthouse score target

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Screen reader friendly
- ✅ Focus indicators

## SEO

- ✅ Meta tags and structured data
- ✅ Open Graph support for social sharing
- ✅ XML sitemap ready
- ✅ robots.txt configuration
- ✅ Mobile-friendly design
- ✅ Fast page load times

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

- AWS Amplify
- Netlify
- Firebase Hosting
- Docker containerization

## License

© 2024 Megha R K. All rights reserved.

## Contact

- **Email**: hello@megha.com
- **LinkedIn**: [linkedin.com/in/megha-rk](https://linkedin.com/in/megha-rk)
- **Portfolio**: [megha-portfolio.com](https://megha-portfolio.com)

---

Built with ❤️ for marketing communication professionals
