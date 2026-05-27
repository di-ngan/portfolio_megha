# Frequently Asked Questions & Troubleshooting

## Getting Started

### Q: How do I start the development server?
A: Run this command in the project directory:
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Q: Where do I update my portfolio content?
A: Edit `/src/data/portfolio.ts`. This file contains all your portfolio information. Changes are reflected instantly in development mode.

### Q: How do I change the colors?
A: Edit the CSS variables in `/src/app/globals.css`:
```css
:root {
  --primary: 262.1 80% 50.4%;    /* Change this */
  --secondary: 160 84.1% 39.7%;  /* And this */
}
```

---

## Development Issues

### Q: Port 3000 is already in use
A: Kill the process using port 3000:
```bash
# Mac/Linux
lsof -t -i:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```
Then run `npm run dev` again.

### Q: Changes not reflecting in browser
A: 
1. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+F5` (Windows)
2. Clear cache: `rm -rf .next && npm run dev`
3. Check for build errors in terminal

### Q: Styles look broken after update
A:
1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Start dev server: `npm run dev`

### Q: Images not showing
A: Check these common issues:
1. **Path Format** - Must start with `/`: `/images/photo.jpg` ✅ vs `images/photo.jpg` ❌
2. **File Location** - Image must be in `/public/images/`
3. **File Format** - Supported formats: JPG, PNG, WebP, GIF
4. **File Size** - Compress images first at [tinypng.com](https://tinypng.com)

### Q: Dark mode not working
A: 
1. Check browser DevTools → Elements → html element has `class="dark"` attribute
2. Hard refresh browser cache
3. Try incognito window
4. Verify `next-themes` is installed: `npm list next-themes`

### Q: Bundle size is too large
A: Run analysis and optimize:
```bash
npm run analyze
```
This shows which packages are taking up space. Then:
1. Remove unused packages
2. Optimize images
3. Code split large components

---

## Customization Issues

### Q: How do I add more projects to the portfolio?
A: Edit `/src/data/portfolio.ts` and add to the `work` array:
```typescript
work: [
  // Existing projects...
  {
    id: 5,
    title: 'Your New Project',
    goal: 'Project goal',
    role: 'Your role',
    actions: ['Action 1', 'Action 2'],
    outcome: 'Result',
    image: '/images/work/new-project.jpg',
  }
]
```

### Q: How do I add a new section?
A:
1. Create component in `/src/components/sections/new-section.tsx`
2. Import in `/src/app/page.tsx`
3. Add to JSX output
4. Add navigation link in `/src/components/navbar.tsx`

### Q: Can I remove the particle animation?
A: Yes! In `/src/components/sections/hero.tsx`, remove or comment out:
```tsx
<ParticleField />
```

### Q: How do I change the resume file?
A:
1. Add new PDF to `/public/`
2. Update file path in these files:
   - `/src/components/sections/hero.tsx`
   - `/src/components/sections/resume.tsx`

### Q: The form doesn't send emails
A: This uses `mailto:` links (basic). For actual email sending, set up:
1. **Sendgrid** - Free tier available
2. **Mailgun** - Free tier available
3. **AWS SES** - Very affordable

See `SETUP.md` for integration examples.

---

## Performance & Deployment

### Q: How do I check performance?
A: Use Lighthouse:
```bash
npm run build && npm start
# Open Chrome DevTools → Lighthouse tab
# Run audit
```

Target scores: 90+ for all categories

### Q: My Lighthouse score is low
A: Common fixes:
1. **Images** - Optimize and compress
2. **JavaScript** - Remove unused code
3. **CSS** - Use PurgeCSS (already enabled)
4. **Fonts** - Use system fonts or limit web fonts
5. **Caching** - Configure properly for CDN

### Q: How do I deploy?
A: See `DEPLOYMENT.md` for detailed instructions. Quick options:
- **Vercel** - Easiest for Next.js (recommended)
- **Netlify** - Good alternative
- **GitHub Pages** - Free, limited features
- **Self-hosted** - Full control

### Q: Do I need environment variables?
A: Optional. Copy `.env.example` to `.env.local` for:
- Google Analytics ID
- Contact email
- Social links
- Site configuration

### Q: Can I use my custom domain?
A: Yes! Process depends on hosting:
- **Vercel** - Simple domain pointing in dashboard
- **Netlify** - Similar process in settings
- **Self-hosted** - Update DNS records

---

## SEO & Accessibility

### Q: Is my site SEO friendly?
A: Verify these are configured:
1. ✅ Meta tags in `/src/app/layout.tsx`
2. ✅ robots.txt in `/public/`
3. ✅ Semantic HTML in components
4. ✅ Image alt text
5. ✅ Internal linking

Run Google Search Console for detailed report.

### Q: How do I fix accessibility issues?
A: 
1. Use WAVE browser extension
2. Test keyboard navigation (Tab through site)
3. Check color contrast with WebAIM
4. Use screen reader (NVDA, JAWS, or Mac VoiceOver)

All issues are fixable by updating component ARIA labels.

---

## Mobile & Responsive

### Q: Site doesn't look good on mobile
A: Check these:
1. Viewport meta tag exists (it does by default)
2. Use responsive classes: `md:`, `lg:`, etc.
3. Test with DevTools device emulation
4. Check touch target sizes (48x48px minimum)

### Q: Some elements overlap on tablet
A: Add responsive breakpoint classes:
```tsx
// Before
<div className="absolute left-0">

// After
<div className="hidden lg:absolute left-0">
```

### Q: Font too small on mobile
A: Update typography scale in components:
```tsx
// Before
<h1 className="text-5xl">

// After
<h1 className="text-3xl md:text-5xl">
```

---

## Advanced Customization

### Q: How do I add animations to custom components?
A: Use Framer Motion:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

### Q: Can I add a blog section?
A: Yes, use Next.js App Router:
1. Create `/src/app/blog/page.tsx`
2. Create `/src/app/blog/[slug]/page.tsx`
3. Add blog data/markdown parsing
4. Update navigation

### Q: How do I add a comment system?
A: Popular options:
- **Disqus** - Easiest to integrate
- **Giscus** - GitHub-based
- **Utterances** - Simple GitHub integration

### Q: Can I add a newsletter signup?
A: Yes, integrate with:
- **Mailchimp** - Free tier
- **ConvertKit** - Creator-focused
- **Substack** - Simple and popular

---

## Database & Backend

### Q: Do I need a database?
A: **No**, current portfolio is fully static. Add if you need:
- Form submissions
- User authentication
- Dynamic content
- Comment systems

Options:
- **Firebase** - Easiest for beginners
- **Supabase** - PostgreSQL alternative
- **MongoDB** - Document database

### Q: How do I handle form submissions?
A: Current setup uses `mailto:` links. To store submissions:
1. Use serverless functions (Vercel, AWS Lambda)
2. Connect to Firebase or similar
3. Send to email service (Sendgrid, Mailgun)

---

## Browser Compatibility

### Q: Does this work on older browsers?
A: Polyfills not included by default. If needed:
1. Add to `next.config.js`
2. Use core-js
3. Test with [caniuse.com](https://caniuse.com)

### Q: CSS Grid/Flexbox not working
A: Check browser version:
- **Chrome 57+** ✅
- **Firefox 52+** ✅
- **Safari 10.1+** ✅
- **Edge 16+** ✅

Most older browsers need polyfills.

---

## Debugging

### Q: White screen after deployment
A: Check these:
1. Build logs for errors
2. Browser console for errors
3. Network tab for failed requests
4. Verify environment variables set
5. Check file paths are correct

### Q: 500 Server Error
A: 
1. Check production build locally: `npm run build && npm start`
2. Check for TypeScript errors
3. Verify all imports are correct
4. Check for hardcoded absolute paths

### Q: Console errors
A: Common causes:
1. **Missing dependencies** - Run `npm install`
2. **Incorrect imports** - Check file paths
3. **Undefined variables** - Check data structure
4. **Third-party script issues** - Check analytics code

---

## Getting Help

### Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Debug Process
1. **Read the error** - Error messages are usually helpful
2. **Check console** - Browser DevTools → Console tab
3. **Search error message** - Usually finds Stack Overflow answers
4. **Isolate the issue** - Narrow down to specific component
5. **Create minimal example** - Reproduce in simple code

### Report Issue
Include:
- What you were trying to do
- What happened instead
- Steps to reproduce
- Browser and OS version
- Console error messages

---

## Performance Tips

### Tips for Faster Site
1. **Optimize images** - Compress before uploading
2. **Lazy load** - Already implemented
3. **Code split** - Already implemented
4. **Cache headers** - Set in deployment
5. **CDN** - Use Vercel (automatic) or Cloudflare

### Tips for Better SEO
1. **Fresh content** - Update projects regularly
2. **Internal links** - Link between relevant content
3. **Fast loading** - Keep Lighthouse 90+
4. **Mobile friendly** - Test on devices
5. **Social sharing** - Verify Open Graph tags

### Tips for Better Accessibility
1. **Semantic HTML** - Use proper heading hierarchy
2. **ARIA labels** - Add to custom components
3. **Keyboard nav** - Test Tab through site
4. **Color contrast** - Use color checker
5. **Alt text** - Describe all images

---

## Still Stuck?

1. Check `SETUP.md` for setup issues
2. Check `DEPLOYMENT.md` for deployment issues
3. Check `TESTING.md` for testing checklist
4. Check `DESIGN_SYSTEM.md` for design questions
5. Check `README.md` for general information

**You've got this! 🚀**
