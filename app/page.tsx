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

export const metadata: Metadata = {
  title: "Ravian Matrix Systems | IT, Web, Geospatial & Digital Solutions",
  description: "Reliable digital solutions for businesses that need professional web systems, custom software, geospatial intelligence, and digital growth support.",
  alternates: { canonical: "/" },
};

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
