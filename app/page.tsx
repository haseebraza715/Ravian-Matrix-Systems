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
  title: "Custom Software, GIS & Web Solutions in Munich | Ravian Matrix Systems",
  description: "We build professional web systems, custom software, GIS solutions, and digital growth strategies for businesses worldwide.",
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
