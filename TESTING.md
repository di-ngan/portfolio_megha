# Testing & Validation Guide

## Checklist Before Launch

### Development Testing

#### 1. Functionality Testing
- [ ] All navigation links work
- [ ] Smooth scrolling between sections
- [ ] Dark/Light mode toggle works
- [ ] Mobile menu opens/closes properly
- [ ] Forms submit correctly
- [ ] Download/View Resume buttons work
- [ ] External links open in new tab
- [ ] No broken images

#### 2. Responsive Design Testing
- [ ] Mobile (375px - small phone)
- [ ] Mobile (414px - large phone)
- [ ] Tablet (768px)
- [ ] Desktop (1024px)
- [ ] Large desktop (1440px)
- [ ] Ultra-wide (1920px+)

Use browser DevTools:
```
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
```

#### 3. Cross-Browser Testing
Test on:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

#### 4. Performance Testing

**Lighthouse Score** (Target: 90+)
```
Chrome DevTools → Lighthouse
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 90+
```

**Page Speed Test**
```bash
npm run build
npm start
# Open Chrome DevTools → Performance tab
```

#### 5. SEO Testing

Verify in source code:
```html
<!-- Title -->
<title>Megha R K | Marketing Communication Professional</title>

<!-- Meta Description -->
<meta name="description" content="...">

<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">

<!-- Structured Data -->
<script type="application/ld+json">...</script>
```

#### 6. Accessibility Testing

Use tools:
- **WAVE**: https://wave.webaim.org/
- **Lighthouse Accessibility**
- **axe DevTools**: Browser extension

Check:
- [ ] Keyboard navigation (Tab through all elements)
- [ ] Focus indicators visible
- [ ] Color contrast ratios (4.5:1 minimum)
- [ ] Alt text on images
- [ ] ARIA labels present
- [ ] Screen reader compatible (NVDA/JAWS)

#### 7. Security Testing

Check for:
```bash
# Check for vulnerabilities
npm audit

# Security headers
curl -I https://your-domain.com
```

Verify:
- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] No sensitive data in client code
- [ ] CORS properly configured
- [ ] No console errors

---

## Testing Commands

### Local Testing
```bash
# Development server
npm run dev

# Build for production
npm run build

# Production preview
npm start

# Analyze bundle
npm run analyze

# Linting
npm run lint
```

### Browser Console Checks
```javascript
// Check for errors
console.log('Check for red errors above');

// Check meta tags
document.querySelectorAll('meta');

// Check performance
performance.getEntriesByType('navigation')[0];

// Check accessibility
document.querySelectorAll('[aria-label]');
```

---

## Performance Optimization Checklist

- [ ] Images compressed and optimized
- [ ] CSS minified and scoped
- [ ] JavaScript code split
- [ ] Unused code removed
- [ ] Caching configured
- [ ] CDN enabled
- [ ] Gzip compression enabled
- [ ] Bundle size under 200KB

---

## SEO Checklist

- [ ] Title tag (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] H1 tag present and unique
- [ ] H2-H6 hierarchy correct
- [ ] Alt text on all images
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Structured data (Schema.org)
- [ ] robots.txt configured
- [ ] Sitemap.xml created
- [ ] Mobile friendly
- [ ] Page speed optimized
- [ ] Internal linking
- [ ] Canonical tags (if needed)

---

## Mobile Testing Checklist

- [ ] Readable text without zoom
- [ ] Touch targets at least 48x48px
- [ ] Forms easy to use on mobile
- [ ] Images responsive
- [ ] No horizontal scrolling
- [ ] Viewport meta tag present
- [ ] Mobile menu functional
- [ ] Fast loading on slow 4G

Test with:
```bash
# Chrome DevTools
Chrome → DevTools → Device Toolbar
Or: Ctrl+Shift+M
```

---

## Browser-Specific Testing

### Chrome/Edge
```javascript
// Check Service Worker
navigator.serviceWorker.getRegistrations();
```

### Firefox
- [ ] CSS Grid/Flexbox display correctly
- [ ] Animations smooth
- [ ] Forms submit properly

### Safari
- [ ] Gradients render correctly
- [ ] Animations perform well
- [ ] Back button works
- [ ] Local storage works

### Mobile Browsers
- [ ] Touch events responsive
- [ ] Viewport scaling correct
- [ ] Keyboard doesn't cover form fields

---

## Before Going Live

### 1. Create Checklist

```bash
# Fix all issues
npm run lint -- --fix

# Build test
npm run build

# No build errors/warnings
```

### 2. Environment Variables

```bash
# Verify .env.local exists with:
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_SITE_URL=your-domain.com
```

### 3. DNS Configuration

- [ ] Domain DNS updated
- [ ] SSL certificate obtained
- [ ] CNAME/A records configured

### 4. Final Verification

- [ ] All links working
- [ ] No 404 errors
- [ ] No console errors
- [ ] Performance good (90+ Lighthouse)
- [ ] Mobile responsive
- [ ] Dark/Light mode working
- [ ] Contact form functional
- [ ] Analytics tracking (if enabled)

---

## Monitoring After Launch

### Daily
- [ ] Website accessible
- [ ] No error spikes
- [ ] Response time normal

### Weekly
- [ ] Check analytics
- [ ] Review user feedback
- [ ] Monitor SEO performance

### Monthly
- [ ] Security scan
- [ ] Performance review
- [ ] Content updates
- [ ] Backup verification

### Tools to Use
- **Uptime Monitoring**: UptimeRobot
- **Error Tracking**: Sentry
- **Analytics**: Google Analytics
- **Performance**: Vercel Analytics
- **SEO Monitoring**: Google Search Console

---

## Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Images Not Loading**
- Check image paths are absolute (`/images/...`)
- Verify images exist in `/public/images/`
- Check image formats and sizes

**Slow Performance**
```bash
npm run analyze  # Check bundle size
npm run build    # Check build time
```

**Dark Mode Not Working**
- Check `ThemeProvider` in layout
- Verify CSS variables defined
- Check next-themes is installed

**Responsive Issues**
- Check media query breakpoints
- Verify viewport meta tag
- Test with DevTools device emulation

---

## Test Results Template

```markdown
# Testing Results - [Date]

## Performance
- Lighthouse Score: [Score]
- Page Load Time: [Time]ms
- Bundle Size: [Size]KB

## Browsers Tested
- [ ] Chrome (v[version])
- [ ] Firefox (v[version])
- [ ] Safari (v[version])
- [ ] Mobile Safari (v[version])
- [ ] Chrome Mobile (v[version])

## Issues Found
1. [Issue]
2. [Issue]

## Status
[ ] Ready for deployment
[ ] Needs fixes
```

---

## Resources

- [WebAIM WCAG Guidelines](https://webaim.org/articles/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [Web.dev](https://web.dev/)
