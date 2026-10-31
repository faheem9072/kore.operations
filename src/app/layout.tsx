import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const viewport: Viewport = {
  themeColor: '#060913',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'KORE — Operations, Simplified. | Business & Digital Solutions Kerala',
  description: "One Partner. Multiple Solutions. Kerala's premier creative and digital partner for branding, web design, UI/UX, social media campaigns, packaging, and automation based in Chelembra, Malappuram.",
  keywords: [
    'KORE',
    'KORE Chelembra',
    'KORE Malappuram',
    'Digital Agency Kerala',
    'Web Design Kerala',
    'Branding Chelembra',
    'Logo Design Malappuram',
    'Packaging Design Kerala',
    'Social Media Marketing Calicut',
    'Business Solutions Kerala',
    'ERP Systems Kerala',
  ],
  authors: [{ name: 'KORE Operations' }],
  creator: 'KORE',
  publisher: 'KORE',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://koresolutions.in',
    title: 'KORE — Operations, Simplified. | One Partner. Multiple Solutions.',
    description: "Kerala's creative and digital solutions partner for branding, web design, social media, packaging and automation.",
    siteName: 'KORE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KORE — Operations, Simplified.',
    description: "Kerala's creative and digital solutions partner based in Chelembra, Malappuram.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manjari:wght@400;700&family=Noto+Sans+Malayalam:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#060913] text-slate-100 selection:bg-[#2F8FFF]/30 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
