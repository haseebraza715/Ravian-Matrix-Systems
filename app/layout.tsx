import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import PageTransition from "@/components/ui-custom/PageTransition";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravian Matrix Systems | Custom Software, GIS & Web Solutions in Munich",
  description: "Professional web systems, custom software, GIS solutions, and digital growth strategies for businesses worldwide.",
  metadataBase: new URL('https://ravianmatrixsystems.de'),
  openGraph: {
    title: 'Ravian Matrix Systems | Custom Software, GIS & Web Solutions in Munich',
    description: 'Professional web systems, custom software, GIS solutions, and digital growth strategies for businesses worldwide.',
    url: 'https://ravianmatrixsystems.de',
    siteName: 'Ravian Matrix Systems',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ravian Matrix Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravian Matrix Systems | Custom Software, GIS & Web Solutions in Munich',
    description: 'Professional web systems, custom software, GIS solutions, and digital growth strategies for businesses worldwide.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} ${ibmPlexMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ravianmatrixsystems.de/#organization",
                  "name": "Ravian Matrix Systems",
                  "url": "https://ravianmatrixsystems.de",
                  "logo": "https://ravianmatrixsystems.de/r-logo.png",
                  "sameAs": [
                    "https://linkedin.com/company/ravian-matrix-systems"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://ravianmatrixsystems.de/#localbusiness",
                  "name": "Ravian Matrix Systems",
                  "image": "https://ravianmatrixsystems.de/og-image.png",
                  "url": "https://ravianmatrixsystems.de",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Munich",
                    "addressCountry": "DE"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 48.1351,
                    "longitude": 11.5820
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ravianmatrixsystems.de/#website",
                  "url": "https://ravianmatrixsystems.de",
                  "name": "Ravian Matrix Systems",
                  "publisher": {
                    "@id": "https://ravianmatrixsystems.de/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-ink">
        {/* Accessibility Skip-to-Content Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-gold focus:text-brand-black focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main id="main-content" className="flex-grow pt-[72px]">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
