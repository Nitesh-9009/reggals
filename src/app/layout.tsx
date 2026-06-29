import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/commerce/CartDrawer';
import '@/styles/globals.css';

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'Reggals — Premium gifting, quietly extraordinary.',
    template: '%s · Reggals'
  },
  description:
    'Reggals is a boutique online destination for premium gifting — jewelry, perfumes, beauty, self care, candles, flowers and curated gift boxes. Beautifully wrapped, delivered with care.',
  metadataBase: new URL('https://reggals.in'),
  openGraph: {
    title: 'Reggals — Premium gifting, quietly extraordinary.',
    description:
      'A boutique of curated, premium gifts — beautifully wrapped, delivered with care.',
    type: 'website',
    siteName: 'Reggals'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reggals — Premium gifting, quietly extraordinary.'
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-offwhite text-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-charcoal focus:text-ivory focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
