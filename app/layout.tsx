import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Ravian Matrix Systems",
  description: "Geospatial Intelligence & Digital Solutions for Global Enterprises. Reliable GIS, web platforms, and custom software — from mapping to automation.",
  metadataBase: new URL('https://ravianmatrixsystems.de'),
  openGraph: {
    title: 'Ravian Matrix Systems',
    description: 'Geospatial Intelligence & Digital Solutions for Global Enterprises.',
    url: 'https://ravianmatrixsystems.de',
    siteName: 'Ravian Matrix Systems',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravian Matrix Systems',
    description: 'Geospatial Intelligence & Digital Solutions for Global Enterprises.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans antialiased bg-bg text-ink min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
