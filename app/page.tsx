import Hero from "@/components/sections/Hero";
import ServiceStrip from "@/components/sections/ServiceStrip";
import CoreServices from "@/components/sections/CoreServices";
import ApplicationScope from "@/components/sections/ApplicationScope";
import ValueDeliver from "@/components/sections/ValueDeliver";
import SolutionsPreview from "@/components/sections/SolutionsPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import InsightsSignup from "@/components/sections/InsightsSignup";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceStrip />
      <CoreServices />
      <ApplicationScope />
      <ValueDeliver />
      <SolutionsPreview />
      <ProcessSection />
      <CTASection />
      <InsightsSignup />
    </div>
  );
}
