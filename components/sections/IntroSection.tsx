"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function IntroSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-bg-surface relative overflow-hidden" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="reveal eyebrow mb-6">Who We Are</div>
            <h2 className="reveal reveal-delay-1 text-[32px] sm:text-[46px] leading-[1.2] font-bold text-primary mb-6">
              Scalable Solutions for <span className="text-gold">Global Digital Business Needs</span>
            </h2>
            <p className="reveal reveal-delay-2 text-[16px] sm:text-[17px] leading-[1.6] text-muted max-w-[520px]">
              At Ravian Matrix Systems, we provide integrated technical and digital services for businesses, startups, organizations, and project teams.
            </p>
          </div>

          <div className="reveal reveal-delay-1 flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.65] text-muted">
            <p>
              Our work combines software development, web solutions, geospatial intelligence, data handling, automation, and creative digital communication. We focus on building solutions that are clear, functional, reliable, and aligned with real business needs.
            </p>
            <p>
              Whether you need a professional website, a custom application, spatial analysis, digital branding, or process automation, we help define the right solution and deliver it with a structured approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
