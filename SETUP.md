# Development Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Customization Guide

### Updating Portfolio Content

All portfolio content is stored in `/src/data/portfolio.ts`. Update the following sections:

#### Hero Section
- Update `name`, `headline`, `summary`
- Modify `stats` (Years Experience, Campaigns, etc.)
- Add your profile image to `/public/images/profile.jpg`

#### Work/Campaigns
Add new campaigns to the `work` array:
```typescript
{
  id: 5,
  title: 'Your Campaign Title',
  goal: 'Campaign goal',
  role: 'Your role',
  actions: ['Action 1', 'Action 2'],
  outcome: 'Campaign outcome',
  image: '/images/work/campaign.jpg',
}
```

#### Experience
Update the `experience` array with your work history.

#### Skills
- Update `primary` skills (main 9 skills)
- Update `secondary` skills (additional tools and platforms)

### Adding Images

1. **Profile Photo**: Add to `/public/images/profile.jpg` (recommended: 500x500px)
2. **Work/Campaign Images**: Add to `/public/images/work/` (recommended: 800x600px)
3. **Optimize Images**: Use tools like TinyPNG or ImageOptim before uploading

### Resume

1. Replace the PDF in `/public/`
2. Update file path in:
   - `/src/components/sections/hero.tsx`
   - `/src/components/sections/resume.tsx`

### Colors and Theme

Edit `/src/app/globals.css` to customize colors:

```css
:root {
  --primary: 262.1 80% 50.4%;    /* Purple */
  --secondary: 160 84.1% 39.7%;  /* Teal */
  --accent: 262.1 80% 50.4%;     /* Same as primary */
}
```

### Contact Information

Update contact details in `/src/data/portfolio.ts`:
```typescript
contact: {
  email: 'your@email.com',
  phone: '+91 XXXXXXXXXX',
  linkedin: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com/yourhandle',
}
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy

### Building Locally

```bash
npm run build
npm start
```

### Environment Variables

Copy `.env.example` to `.env.local` and update:
```bash
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance Optimization

The site is optimized for performance:
- Image lazy loading
- Code splitting
- CSS optimization
- Minimal animations
- Target: 90+ Lighthouse score

Check performance:
1. Build the project: `npm run build`
2. Run production: `npm start`
3. Use Lighthouse in Chrome DevTools

## Adding Google Analytics

1. Get your Google Analytics ID
2. Add to `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. Update `/src/components/analytics.tsx` to integrate GA

## SEO Checklist

- ✅ Meta tags configured in `/src/app/layout.tsx`
- ✅ robots.txt in `/public/`
- ✅ Open Graph tags for social sharing
- ✅ Structured data (JSON-LD) included
- ✅ Mobile-friendly responsive design
- ✅ Fast page load times

## Troubleshooting

### Port Already in Use
```bash
kill -9 $(lsof -t -i:3000)
npm run dev
```

### Images Not Loading
- Check image paths in component files
- Verify images are in `/public/images/`
- Use absolute paths starting with `/`

### Theme Not Switching
- Clear browser cache
- Check that `next-themes` is installed
- Verify `ThemeProvider` is in root layout

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## Support

For issues or questions, refer to the component files in `/src/components/sections/` for examples of how to add new sections or modify existing ones.
