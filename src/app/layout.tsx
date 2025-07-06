import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// Viewport export for mobile responsiveness and theme colors
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export const metadata: Metadata = {
  title: 'Crypto Clarity for Absolute Beginners',
  description: 'From zero clue to crypto-confident. Plain-English guides, expert picks, and one weekly email that keeps you ahead.',
  keywords: ['crypto', 'bitcoin', 'blockchain', 'cryptocurrency', 'beginner', 'education', 'learning'],
  authors: [{ name: 'CryptoDeven' }],
  creator: 'CryptoDeven',
  publisher: 'CryptoDeven',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cryptodeven.com',
  },
  icons: {
    icon: [
      { url: '/favicon.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png?v=3', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png?v=3' },
    ],
    shortcut: '/favicon.png?v=3',
    apple: [
      { url: '/favicon.png?v=3', sizes: '180x180', type: 'image/png' },
      { url: '/favicon.png?v=3' },
    ],
  },
  openGraph: {
    title: 'CryptoDeven – Crypto Clarity for Absolute Beginners',
    description: 'From zero clue to crypto-confident. Plain-English guides, expert picks, and one weekly email that keeps you ahead.',
    url: 'https://cryptodeven.com',
    siteName: 'CryptoDeven',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 800,
        height: 600,
        alt: 'CryptoDeven Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoDeven – Crypto Clarity for Absolute Beginners',
    description: 'From zero clue to crypto-confident. Plain-English guides, expert picks, and one weekly email that keeps you ahead.',
    creator: '@CryptoDeven',
    images: ['/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Favicon Links - Safari prefers explicit links */}
        <link rel="icon" type="image/png" href="/favicon.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png?v=3" />
        <link rel="shortcut icon" href="/favicon.png?v=3" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/cryptodeven_icon.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'CryptoDeven',
              description: 'From zero clue to crypto-confident. Plain-English guides, expert picks, and one weekly email that keeps you ahead.',
              url: 'https://cryptodeven.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://cryptodeven.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              sameAs: [
                'https://twitter.com/CryptoDeven',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CMKL6MH2QV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CMKL6MH2QV');
          `}
        </Script>
        
        <ThemeProvider>
          <div className="min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
