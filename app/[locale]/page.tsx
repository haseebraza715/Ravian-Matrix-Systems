import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import KpiStrip from "@/components/sections/KpiStrip";
import ServiceStrip from "@/components/sections/ServiceStrip";
import IntroSection from "@/components/sections/IntroSection";
import CoreServices from "@/components/sections/CoreServices";
import WhyWorkWithUs from "@/components/sections/WhyWorkWithUs";
import ValueDeliver from "@/components/sections/ValueDeliver";
import ServiceHighlights from "@/components/sections/ServiceHighlights";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import { locales } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isDe = locale === "de";
  return {
    title: isDe 
      ? "Individuelle Software, GIS & Web-Lösungen in München | Ravian Matrix Systems"
      : "Custom Software, GIS & Web Solutions in Munich | Ravian Matrix Systems",
    description: isDe
      ? "Wir entwickeln professionelle Websysteme, maßgeschneiderte Software, GIS-Lösungen und digitale Wachstumsstrategien für Unternehmen weltweit."
      : "We build professional web systems, custom software, GIS solutions, and digital growth strategies for businesses worldwide.",
    alternates: {
      canonical: `https://ravian-matrix.de/${locale}`,
      languages: {
        en: "https://ravian-matrix.de/en",
        de: "https://ravian-matrix.de/de",
        "x-default": "https://ravian-matrix.de/en",
      }
    }
  };
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <KpiStrip />
      <ServiceStrip />
      <IntroSection />
      <CoreServices />
      <WhyWorkWithUs />
      <ValueDeliver />
      <ServiceHighlights />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
