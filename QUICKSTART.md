# Quick Start Guide

Welcome to your premium portfolio website! This guide will get you up and running in minutes.

## 🚀 Getting Started (5 minutes)

### 1. Install Dependencies
```bash
cd /Users/nidheeshv/Work/megha_portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see your portfolio with all sections!

### 3. Make Your First Change

Edit `/src/data/portfolio.ts`:
```typescript
export const portfolio = {
  hero: {
    name: 'Your Name Here', // Change this
    headline: 'Your Headline',
    // ... rest of config
  },
  // ...
};
```

Save the file - the page updates instantly! 🎉

---

## 📁 Project Structure

```
megha-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Main layout & SEO config
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, About, etc.)
│   │   ├── cards/             # Reusable card components
│   │   ├── effects/           # Animations & effects
│   │   ├── ui/                # Base UI components
│   │   ├── navbar.tsx         # Navigation
│   │   └── footer.tsx         # Footer
│   ├── data/
│   │   └── portfolio.ts       # ⭐ YOUR CONTENT HERE
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── hooks/
│       └── use-scroll-animation.ts
├── public/
│   ├── images/                # Add your images here
│   └── Megha R K resume_*.pdf # Resume file
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── README.md                  # Full documentation
├── SETUP.md                   # Detailed setup guide
├── DEPLOYMENT.md              # Deployment instructions
└── TESTING.md                 # Testing checklist
```

---

## 🎨 Customization in 3 Steps

### Step 1: Update Your Content
Edit `/src/data/portfolio.ts`:

```typescript
export const portfolio = {
  hero: {
    name: 'Your Name',
    headline: 'Your Professional Title',
    summary: 'Your professional summary...',
    stats: [
      { label: 'Years Experience', value: '5+' },
      // Add more stats...
    ],
  },
  
  about: {
    title: 'About Me',
    summary: 'Your professional summary...',
    strengths: ['Skill 1', 'Skill 2', ...],
  },
  
  work: [
    {
      id: 1,
      title: 'Project Title',
      goal: 'Project goal',
      role: 'Your role',
      actions: ['Action 1', 'Action 2'],
      outcome: 'Result achieved',
      image: '/images/work/project.jpg',
    },
    // Add more projects...
  ],
  
  // ... update other sections
};
```

### Step 2: Add Your Images
1. Add profile photo to `/public/images/profile.jpg`
2. Add project images to `/public/images/work/`
3. Compress images first using [tinypng.com](https://tinypng.com)

### Step 3: Update Links
Edit `/src/data/portfolio.ts`:
```typescript
contact: {
  email: 'your@email.com',
  phone: '+91 XXXXXXXXXX',
  linkedin: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com/yourhandle',
}
```

---

## 🎨 Colors & Theme

Change colors in `/src/app/globals.css`:

```css
:root {
  --primary: 262.1 80% 50.4%;    /* Main color (purple) */
  --secondary: 160 84.1% 39.7%;  /* Secondary color (teal) */
  --accent: 262.1 80% 50.4%;     /* Accent color */
}
```

Use HSL format: `hue saturation% lightness%`

[Pick your colors here](https://www.tailwindcss.com/docs/customizing-colors)

---

## 📝 Available Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000

# Production
npm run build           # Build for production
npm start              # Start production server

# Analysis
npm run analyze        # Analyze bundle size
npm run lint          # Check code quality

# Utilities
npm run build && npm start  # Full production test
```

---

## ✨ Features Included

✅ **Responsive Design** - Works on all devices
✅ **Dark/Light Mode** - Automatic theme switching
✅ **Smooth Animations** - Framer Motion animations
✅ **Interactive Effects** - Particle field, hover effects
✅ **SEO Optimized** - Perfect for search engines
✅ **Accessible** - WCAG compliant, keyboard navigation
✅ **Fast** - 90+ Lighthouse score target
✅ **Modular** - Easy to add projects and update content

---

## 🚢 Deploy (1 Minute)

### Option 1: Vercel (Recommended)
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial portfolio"
git push

# 2. Go to vercel.com → New Project → Select repo → Deploy
```

### Option 2: Netlify
```bash
# 1. Connect GitHub in netlify.com
# 2. Auto-deploys on every push
```

See `DEPLOYMENT.md` for detailed instructions.

---

## 🔗 Important Files to Edit

| File | Purpose |
|------|---------|
| `/src/data/portfolio.ts` | **Your content** |
| `/public/images/` | Your images & photos |
| `/src/app/globals.css` | Colors & theme |
| `/src/app/layout.tsx` | SEO & meta tags |
| `.env.local` | Environment variables |

---

## 🆘 Common Issues

### Port 3000 already in use?
```bash
lsof -t -i:3000 | xargs kill -9
npm run dev
```

### Images not showing?
- Check image path starts with `/`
- Verify file is in `/public/images/`
- Check file format (jpg, png, webp)

### Styling looks wrong?
```bash
# Clear cache
rm -rf .next
npm run dev
```

### Theme not switching?
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+F5` (Windows)
- Check browser console for errors

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📋 Checklist Before Launch

- [ ] Updated all portfolio content
- [ ] Added your images to `/public/images/`
- [ ] Changed colors if desired
- [ ] Tested on mobile device
- [ ] Tested dark/light mode
- [ ] Verified all links work
- [ ] Run `npm run build` successfully
- [ ] Checked Lighthouse score (90+)
- [ ] Set up domain & HTTPS
- [ ] Deploy to production

---

## 🎯 Next Steps

1. **Personalize Content** - Edit `/src/data/portfolio.ts`
2. **Add Images** - Upload to `/public/images/`
3. **Test Locally** - Run `npm run dev`
4. **Deploy** - Follow `DEPLOYMENT.md`
5. **Monitor** - Set up analytics in `SETUP.md`

---

## 📞 Support

Need help? Check these files:
- **Setup Questions** → `SETUP.md`
- **Deployment Issues** → `DEPLOYMENT.md`
- **Testing & Validation** → `TESTING.md`
- **General Info** → `README.md`

---

## 🎉 You're All Set!

Your professional portfolio website is ready. Now it's time to:
1. Customize it with your information
2. Add your best images
3. Deploy it live
4. Share it with the world! 🌟

---

**Made with ❤️ for marketing communication professionals**

Last updated: May 27, 2024
