import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import SolutionsPreview from "@/components/sections/SolutionsPreview";
import ApplicationScope from "@/components/sections/ApplicationScope";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Solutions | Ravian Matrix Systems",
  description: "Solutions built around real project needs.",
};

export default function SolutionsPage() {
  return (
    <div>
      <PageHero 
        eyebrow="Solutions"
        title="Solutions built around real project needs."
        description="We package our services into practical business solutions for environmental, hydrological, and business domains."
      />
      
      <ApplicationScope />
      <SolutionsPreview />
      <CTASection />
    </div>
  );
}
