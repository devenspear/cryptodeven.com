import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Viewport export for theme colors
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export const metadata: Metadata = {
  title: 'CryptoDeven – Crypto Clarity for Absolute Beginners',
  description: 'From zero clue to crypto-confident. Plain-English guides, expert picks, and one weekly email that keeps you ahead.',
  keywords: ['crypto', 'bitcoin', 'blockchain', 'cryptocurrency', 'beginner', 'education', 'learning'],
  openGraph: {
    title: 'CryptoDeven – Crypto Clarity for Absolute Beginners',
    description: 'From zero clue to crypto-confident. Plain-English guides, expert picks, and one weekly email that keeps you ahead.',
    url: 'https://cryptodeven.com',
    siteName: 'CryptoDeven',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoDeven – Crypto Clarity for Absolute Beginners',
    description: 'From zero clue to crypto-confident. Plain-English guides, expert picks, and one weekly email that keeps you ahead.',
    creator: '@CryptoDeven',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head />
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
