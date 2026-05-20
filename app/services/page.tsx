"use client";

import PageHero from "@/components/ui-custom/PageHero";
import CoreServices from "@/components/sections/CoreServices";
import CTASection from "@/components/sections/CTASection";
import { Card } from "@/components/ui-custom/Card";

const suitability = [
  "Small and medium-sized businesses",
  "Startups",
  "Service providers",
  "Consulting companies",
  "Technical companies",
  "Digital platforms",
  "Research and project teams",
  "Organizations working with spatial or operational data",
  "Businesses improving their digital presence",
];

export default function ServicesPage() {
  return (
    <div className="bg-bg-base text-primary min-h-screen">
      <PageHero
        eyebrow="Services"
        title="IT, Web, Geospatial & Digital Solutions"
        description="We offer structured services across web solutions, software development, geospatial intelligence, and digital growth. Explore our specific capabilities below."
      />

      <section className="py-20 bg-bg-surface border-b border-line">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16 items-start">
            <div>
              <h2 className="text-[28px] sm:text-[34px] tracking-tight font-bold leading-tight">
                Structured service categories
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.65] text-muted">
              <p>
                Our work combines software development, web solutions, geospatial intelligence, data handling, automation, and creative digital communication.
              </p>
              <p>
                We focus on building solutions that are clear, functional, reliable, and aligned with real business needs.
              </p>
              <p>
                Each service page below follows the corresponding source PDF so you can review the scope, what we provide, how we work, and where each service fits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CoreServices />

      <section className="py-20 bg-bg-surface border-b border-line">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <div className="max-w-[740px] mb-12">
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight">Suitable For</h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-muted mt-4">
              The home PDF lists the kinds of businesses, teams, and organizations these service lines are built to support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suitability.map((item) => (
              <Card key={item} className="p-5 bg-bg-base border-line" hoverEffect={false}>
                <span className="text-[15px] text-primary font-medium">{item}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
