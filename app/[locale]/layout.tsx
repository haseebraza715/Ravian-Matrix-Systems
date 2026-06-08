import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import PageTransition from "@/components/ui-custom/PageTransition";
import { locales } from "@/lib/i18n/locales";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isDe = locale === "de";
  const title = isDe 
    ? "Individuelle Software, GIS & Web-Lösungen in München | Ravian Matrix Systems"
    : "Ravian Matrix Systems | Custom Software, GIS & Web Solutions in Munich";
  
  const description = isDe
    ? "Wir entwickeln professionelle Websysteme, maßgeschneiderte Software, GIS-Lösungen und digitale Wachstumsstrategien für Unternehmen weltweit."
    : "Professional web systems, custom software, GIS solutions, and digital growth strategies for businesses worldwide.";

  return {
    title,
    description,
    metadataBase: new URL('https://ravian-matrix.de'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
        "x-default": "/en",
      }
    },
    openGraph: {
      title,
      description,
      url: `https://ravian-matrix.de/${locale}`,
      siteName: 'Ravian Matrix Systems',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Ravian Matrix Systems',
        },
      ],
      locale: isDe ? 'de_DE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
}

export default function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const isDe = locale === "de";

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${outfit.variable} ${ibmPlexMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ravian-matrix.de/#organization",
                  "name": "Ravian Matrix Systems",
                  "url": `https://ravian-matrix.de/${locale}`,
                  "logo": "https://ravian-matrix.de/r-logo.png",
                  "sameAs": [
                    "https://linkedin.com/company/ravian-matrix-systems"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://ravian-matrix.de/#localbusiness",
                  "name": "Ravian Matrix Systems",
                  "image": "https://ravian-matrix.de/og-image.png",
                  "url": `https://ravian-matrix.de/${locale}`,
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
                  "@id": "https://ravian-matrix.de/#website",
                  "url": `https://ravian-matrix.de/${locale}`,
                  "name": "Ravian Matrix Systems",
                  "publisher": {
                    "@id": "https://ravian-matrix.de/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#05080F] text-[#F2F4F8]">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#F5C56B] focus:text-[#05080F] focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          {isDe ? "Direkt zum Inhalt springen" : "Skip to main content"}
        </a>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main id="main-content" className="flex-grow w-full min-w-0 pt-[72px]">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
