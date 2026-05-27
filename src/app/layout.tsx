import type { Metadata } from 'next';
import { Poppins, Sora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';
import { SectionProvider } from '@/context/section-context';
import { SectionObserver } from '@/components/effects/section-observer';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Megha R K | Marketing Communication Professional',
  description:
    'Marketing Communication Professional specializing in content strategy, brand storytelling, campaign execution, and digital communication. View my portfolio of successful campaigns and projects.',
  keywords: [
    'Marketing',
    'Communication',
    'Brand Strategy',
    'Campaign Management',
    'Content Strategy',
    'Digital Marketing',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Megha R K',
      url: 'https://megha-portfolio.com',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://megha-portfolio.com',
    siteName: 'Megha R K Portfolio',
    title: 'Megha R K | Marketing Communication Professional',
    description:
      'Marketing Communication Professional specializing in content strategy, brand storytelling, campaign execution, and digital communication.',
    images: [
      {
        url: 'https://megha-portfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Megha R K Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Megha R K | Marketing Communication Professional',
    description:
      'Marketing Communication Professional specializing in content strategy, brand storytelling, campaign execution, and digital communication.',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://megha-portfolio.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#262f56" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Megha R K Portfolio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Megha R K',
              url: 'https://megha-portfolio.com',
              jobTitle: 'Marketing Communication Professional',
              description:
                'Creative and data-driven marketing communication professional with experience in digital campaigns, creator collaborations, content strategy, and brand storytelling.',
              sameAs: [
                'https://linkedin.com/in/megha-rk',
                'https://twitter.com/megha',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${poppins.variable} bg-background text-foreground`}
      >
        <SectionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
<SectionObserver />
            <div className="flex min-h-screen flex-col relative z-10">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Analytics />
          </ThemeProvider>
        </SectionProvider>
      </body>
    </html>
  );
}
