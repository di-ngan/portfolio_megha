# Design System

## Typography

### Font Stack
- **Headings**: Sora (Clean, modern)
- **Body**: Poppins (Friendly, professional)

### Type Scale
```
H1: 4rem (64px) - Page titles
H2: 2rem (32px) - Section titles
H3: 1.5rem (24px) - Card titles
H4: 1.25rem (20px) - Subsections
Body: 1rem (16px) - Default text
Small: 0.875rem (14px) - Captions, labels
```

### Line Height
- Headings: 1.2
- Body: 1.7
- Captions: 1.5

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

---

## Color Palette

### Primary Color
- **Main**: HSL(262.1° 80% 50.4%) - Purple
- **Light**: HSL(262 80% 65%)
- **Dark**: HSL(262 80% 35%)
- **Muted**: HSL(262 40% 80%)

### Secondary Color
- **Main**: HSL(160° 84% 39.7%) - Teal
- **Light**: HSL(160 84% 55%)
- **Dark**: HSL(160 84% 25%)
- **Muted**: HSL(160 84% 75%)

### Accent Color
- Same as primary (HSL 262.1° 80% 50.4%)

### Neutral Colors
```
Light Mode:
- Background: #ffffff (0 0% 100%)
- Foreground: #0a0e27 (0 0% 3.6%)
- Muted: #f5f5f5 (210 40% 96%)
- Muted Foreground: #64748b (215 13.8% 46.9%)

Dark Mode:
- Background: #0f172a (222.2 84% 4.9%)
- Foreground: #f8fafc (210 40% 98%)
- Muted: #1e293b (217.2 32.6% 17.5%)
- Muted Foreground: #cbd5e1 (215 20.3% 65.1%)
```

### Usage
```typescript
// Button backgrounds
bg-primary, bg-secondary

// Text colors
text-foreground, text-muted-foreground

// Backgrounds
bg-background, bg-card

// Borders
border-white/10, dark:border-slate-700/30
```

---

## Spacing

### Scale (8px base unit)
```
0:   0px
1:   4px
2:   8px
3:  12px
4:  16px
6:  24px
8:  32px
12: 48px
16: 64px
20: 80px
24: 96px
```

### Usage
```tsx
<div className="p-6">     {/* 24px padding */}
<div className="gap-4">   {/* 16px gap */}
<div className="mb-12">   {/* 48px margin-bottom */}
```

---

## Shadows & Depth

### Shadow Layers
```css
/* Light mode */
shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* Dark mode - glass effect */
shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
```

### Glass Effect
```tsx
className="glass"  // Preset in globals.css
// Applies: backdrop-blur-md bg-white/10 border border-white/20
```

---

## Border & Radius

### Border Radius
```
sm:  0.375rem (6px)   - Small UI
md:  0.5rem (8px)     - Buttons, inputs
lg:  0.75rem (12px)   - Cards
xl:  1rem (16px)      - Larger cards
2xl: 1.5rem (24px)    - Hero sections
full: 9999px          - Badges, avatars
```

### Border Width
```
1px  - Default borders
2px  - Focus states
```

### Usage
```tsx
// Cards
className="rounded-2xl"

// Buttons
className="rounded-md"

// Badges
className="rounded-full"
```

---

## Animation & Motion

### Timing Functions
```
ease-out:  cubic-bezier(0, 0, 0.2, 1)  - Exits
ease-in:   cubic-bezier(0.4, 0, 1, 1)  - Entrances
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)  - Both
```

### Durations
```
Fast:   0.3s  - Hover, focus effects
Normal: 0.6s  - Standard animations
Slow:   1s    - Page transitions
```

### Preset Animations
```css
@keyframes fade-in {
  from: opacity: 0
  to:   opacity: 1
}

@keyframes slide-up {
  from: translate(0, 20px), opacity: 0
  to:   translate(0, 0), opacity: 1
}

@keyframes float {
  0%, 100%: translateY(0px)
  50%: translateY(-10px)
}

@keyframes glow {
  0%, 100%: opacity: 0.5
  50%: opacity: 1
}
```

### Framer Motion
```tsx
// Fade in on scroll
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 0.6 }}

// Hover effects
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Stagger children
variants={containerVariants}
transition={{
  staggerChildren: 0.2,
  delayChildren: 0.1,
}}
```

---

## Components

### Button Variants
```tsx
// Primary (Call-to-Action)
<Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
  Primary Action
</Button>

// Outline (Secondary)
<Button variant="outline">
  Secondary Action
</Button>

// Ghost (Tertiary)
<Button variant="ghost">
  Tertiary Action
</Button>
```

### Card Styles
```tsx
// Glass Card (Premium)
<div className="glass rounded-2xl p-6">
  Content
</div>

// Hover Glass Card
<div className="glass-hover rounded-2xl p-6">
  Content
</div>

// Subtle Card
<div className="rounded-xl p-4 bg-white/5 dark:bg-slate-950/30 border border-white/10">
  Content
</div>
```

### Badges
```tsx
// Primary badge
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
  Badge
</span>

// Secondary badge
<span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary">
  Badge
</span>
```

---

## Layout Patterns

### Container
```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Section
```tsx
<section id="section-name" className="py-20 sm:py-28 relative overflow-hidden">
  {/* Background effects */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
  
  {/* Content */}
  <div className="container relative z-10">
    {/* Your content */}
  </div>
</section>
```

### Grid Layouts
```tsx
// 2-column on desktop, 1-column on mobile
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Items */}
</div>

// Skill cards
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
  {/* Skill cards */}
</div>
```

---

## Responsive Breakpoints

```
Default (Mobile):  0px
sm:               640px
md:               768px
lg:              1024px
xl:              1280px
2xl:             1536px
```

### Usage
```tsx
// Mobile first
<div className="text-lg md:text-2xl lg:text-4xl">
  Text that scales based on screen size
</div>

// Hidden on mobile
<div className="hidden lg:block">
  Desktop only content
</div>
```

---

## Accessibility

### Color Contrast Ratios
- **Normal Text**: 4.5:1 minimum (AA standard)
- **Large Text**: 3:1 minimum (AA standard)
- **AAA Standard**: 7:1 (enhanced)

Current palette meets WCAG AA standards.

### Focus States
```css
:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}
```

### Dark Mode Contrast
Tested to ensure sufficient contrast in both light and dark modes.

---

## Performance Considerations

### CSS
- Minimal custom CSS
- Tailwind for styling
- CSS variables for theming
- No heavy animations on large elements

### Animation Performance
- Use `transform` and `opacity` for animations
- Avoid animating `width` and `height`
- Use `will-change: transform` sparingly
- Test on low-end devices

### Image Optimization
```tsx
// Use Next.js Image component
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={75}
  sizes="(max-width: 640px) 100vw, 50vw"
/>
```

---

## Dark Mode Implementation

### CSS Variables
```css
/* Light mode (default) */
:root {
  --primary: 262.1 80% 50.4%;
  --background: 0 0% 100%;
}

/* Dark mode */
.dark {
  --primary: 262.1 80% 50.4%;
  --background: 222.2 84% 4.9%;
}
```

### Tailwind Classes
```tsx
// Automatically switches in dark mode
<div className="bg-white dark:bg-slate-900">
  Content
</div>

<div className="text-slate-900 dark:text-slate-100">
  Text that adapts to theme
</div>
```

---

## Design Principles

1. **Minimalism** - Remove unnecessary elements
2. **Clarity** - Make content easy to understand
3. **Accessibility** - Inclusive design for all users
4. **Performance** - Fast, responsive experiences
5. **Consistency** - Predictable patterns throughout
6. **Elegance** - Premium, polished appearance
7. **Usability** - Intuitive, easy to navigate

---

## Maintenance

### Updating Colors
1. Edit `/src/app/globals.css` CSS variables
2. Test in both light and dark modes
3. Verify WCAG contrast ratios
4. Test on multiple devices

### Adding New Sections
1. Follow layout patterns above
2. Use existing component styles
3. Ensure responsive design
4. Add proper accessibility attributes
5. Test on mobile and desktop

### Testing Changes
```bash
npm run dev              # Visual testing
npm run build           # Performance check
npm run analyze         # Bundle analysis
```

---

## Resources

- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [HSL Color Tool](https://www.hsluv.org/)
- [Spacing Calculator](https://spacing.css-tricks.com/)
