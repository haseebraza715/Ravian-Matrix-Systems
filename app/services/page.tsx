import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import CoreServices from "@/components/sections/CoreServices";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services | Ravian Matrix Systems",
  description: "Detailed explanation of our geospatial and IT services.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero 
        eyebrow="Services"
        title="Disciplines built for delivery."
        description="We combine spatial science with modern software engineering to build systems that scale."
      />
      
      <CoreServices />
      <CTASection />
    </div>
  );
}
