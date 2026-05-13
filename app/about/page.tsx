import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About | Ravian Matrix Systems",
  description: "Professional GIS, remote sensing, and IT solutions for complex spatial work.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero 
        eyebrow="About Us"
        title="Professional GIS, remote sensing, and IT solutions for complex spatial work."
        description="We bridge the gap between complex geospatial data and practical operational systems."
      />
      
      <section className="py-24 border-b border-white/5 bg-brand-black">
        <div className="max-w-[800px] mx-auto px-8">
          <div className="prose prose-lg text-white/80">
            <h2 className="text-3xl font-medium text-brand-cream tracking-tight mb-6">Our positioning</h2>
            <p className="mb-6">
              Ravian Matrix Systems provides professional GIS, Remote Sensing, Geospatial Analytics, WebGIS, IT, web development, data automation, and spatial decision-support solutions. We are a team of geospatial specialists and software engineers based in Munich, Germany, serving clients worldwide.
            </p>
            
            <h2 className="text-3xl font-medium text-brand-cream tracking-tight mb-6 mt-12">How we think about geospatial systems</h2>
            <p className="mb-6">
              Most teams do not have a data problem; they have a connected systems problem. The &quot;single source of truth&quot; is often scattered across shapefiles on laptops, unorganized drone imagery folders, and disconnected spreadsheets. We believe that spatial data is only as valuable as its accessibility to the people making operational decisions.
            </p>
            <p className="mb-6">
              By pairing GIS experts directly with full-stack engineers, we ensure that the spatial model, the database architecture, and the end-user dashboard all ship from the same coherent pipeline. 
            </p>

            <h2 className="text-3xl font-medium text-brand-cream tracking-tight mb-6 mt-12">Why structured outputs matter</h2>
            <p className="mb-6">
              We focus on delivering geospatial outputs that can be directly used in planning, reporting, and operational workflows. Depending on the project, our outputs include structured geospatial datasets, spatial analysis reports, mapping products, WebGIS dashboards, remote sensing assessments, and custom decision-support tools.
            </p>

            <h2 className="text-3xl font-medium text-brand-cream tracking-tight mb-6 mt-12">Serving clients worldwide</h2>
            <p>
              While we are headquartered in Munich, Germany, our systems monitor assets, manage infrastructure, and support decisions across multiple countries globally.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
