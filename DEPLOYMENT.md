# Deployment Guide

## Platform Options

### 1. Vercel (Recommended - Best for Next.js)

#### Step 1: Prepare Repository
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
```

#### Step 2: Push to GitHub
```bash
git remote add origin https://github.com/yourusername/megha-portfolio.git
git push -u origin main
```

#### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add environment variables if needed
6. Click "Deploy"

#### Custom Domain
1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records with Vercel's nameservers

---

### 2. Netlify

#### Step 1: Build Project Locally
```bash
npm run build
```

#### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

#### netlify.toml Configuration
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

---

### 3. AWS Amplify

#### Step 1: Install Amplify CLI
```bash
npm install -g @aws-amplify/cli
```

#### Step 2: Initialize Amplify
```bash
amplify init
```

#### Step 3: Deploy
```bash
amplify publish
```

---

### 4. Firebase Hosting

#### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

#### Step 2: Initialize Firebase
```bash
firebase init
firebase deploy
```

---

### 5. Self-Hosted Deployment

#### Option A: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/.next ./. next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t megha-portfolio .
docker run -p 3000:3000 megha-portfolio
```

#### Option B: Linux Server (Ubuntu/Debian)

```bash
# 1. SSH into server
ssh user@your-server.com

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Clone repository
git clone https://github.com/yourusername/megha-portfolio.git
cd megha-portfolio

# 4. Install dependencies
npm install

# 5. Build project
npm run build

# 6. Install PM2 (process manager)
sudo npm install -g pm2

# 7. Start application
pm2 start "npm start" --name "megha-portfolio"
pm2 save
pm2 startup

# 8. Setup Nginx reverse proxy
sudo apt-get install nginx
```

Nginx configuration (`/etc/nginx/sites-available/default`):
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Environment Variables

### For All Platforms

1. Copy `.env.example` to `.env.local`
2. Update with your values:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourhandle
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Performance Optimization

### Before Deployment

1. **Build Analysis**
   ```bash
   npm run analyze
   ```

2. **Lighthouse Check**
   - Run production build: `npm run build && npm start`
   - Open DevTools → Lighthouse
   - Target: 90+ scores

3. **Image Optimization**
   - Compress all images
   - Use WebP format where possible
   - Optimize for web

### CDN Configuration

Vercel automatically provides CDN.

For self-hosted:
- Use Cloudflare (free tier available)
- Configure caching rules
- Enable gzip compression

---

## SSL/TLS Certificate

### Vercel & Netlify
Automatically provisioned and renewed.

### Self-Hosted
Use Let's Encrypt with Certbot:
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d your-domain.com
sudo systemctl restart nginx
```

---

## Monitoring and Logging

### Vercel
- Dashboard shows build logs
- Analytics built-in
- Error tracking

### Self-Hosted
Use services like:
- **Sentry** - Error tracking
- **Datadog** - Monitoring
- **New Relic** - APM

---

## Database/Backend (if needed)

Current portfolio is fully static, but can extend with:
- **Contact Form**: Connect to Sendgrid or Mailgun
- **Comments**: Use Disqus or Firebase
- **Analytics**: Google Analytics or Plausible

---

## Maintenance

### Regular Updates
```bash
npm update
npm audit fix
```

### Content Updates
1. Edit `/src/data/portfolio.ts`
2. Test locally: `npm run dev`
3. Commit and push to trigger redeploy

### Monitoring
- Check uptime with services like UptimeRobot
- Monitor error rates
- Track performance metrics

---

## Troubleshooting

### Build Fails
- Check Node version: `node --version` (needs 18+)
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for environment variable issues

### Site Slow
- Run `npm run analyze`
- Check image sizes
- Review Lighthouse report
- Consider enabling caching

### 404 Errors
- Verify file paths are correct
- Check public folder contents
- Verify route configuration

---

## Post-Deployment Checklist

- [ ] Domain pointing correctly
- [ ] HTTPS/SSL working
- [ ] Mobile responsive verified
- [ ] Dark/Light mode working
- [ ] Contact form functional
- [ ] Images loading properly
- [ ] Analytics configured
- [ ] SEO tags present
- [ ] Performance optimized (90+ Lighthouse)
- [ ] Accessibility checked
- [ ] Security headers set
- [ ] Backups configured

---

## Support Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [AWS Amplify Guide](https://aws.amazon.com/amplify/getting-started/)
