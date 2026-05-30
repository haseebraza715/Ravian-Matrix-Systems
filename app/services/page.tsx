"use client";

import PageHero from "@/components/ui-custom/PageHero";
import CoreServices from "@/components/sections/CoreServices";
import CTASection from "@/components/sections/CTASection";
import { useRouter } from "next/navigation";

const serviceOptions = [
  { label: "Web Solutions", value: "/services/web-development" },
  { label: "Software Development", value: "/services/software-development" },
  { label: "Geospatial Intelligence", value: "/services/geospatial-intelligence" },
  { label: "Digital Growth", value: "/services/digital-growth" },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="bg-bg-base text-primary min-h-screen">
      <PageHero
        eyebrow="Services"
        title="IT, Web, Geospatial & Digital Solutions"
        description="We offer structured services across web solutions, software development, geospatial intelligence, and digital growth."
      />

      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
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
              <label className="max-w-[420px] flex flex-col gap-2">
                <span className="font-mono text-xs tracking-widest uppercase text-gold">Choose a Service</span>
                <select
                  className="border border-line rounded-lg px-4 py-3 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all cursor-pointer"
                  defaultValue=""
                  onChange={(event) => {
                    if (event.target.value) router.push(event.target.value);
                  }}
                >
                  <option value="" disabled>View service page</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
      </section>

      <CoreServices />
      <CTASection />
    </div>
  );
}
