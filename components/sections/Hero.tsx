"use client";

import Link from "next/link";
import GeoDashboardVisual from "@/components/ui-custom/GeoDashboardVisual";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden" style={{ background: '#F1ECDF' }} ref={ref}>
      {/* Grid background like Signal Grid */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(14,14,12,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(14,14,12,0.07) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 pt-[60px] sm:pt-[72px] pb-[80px] sm:pb-[96px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-stretch">
          <div>
            <div className="reveal eyebrow mb-6 sm:mb-7 !text-[#6B655B]">
              GIS · Remote Sensing · Geospatial Analytics · IT
            </div>
            <h1 className="reveal reveal-delay-1 text-[clamp(36px,5.4vw,76px)] leading-[0.98] tracking-[-0.035em] font-medium mb-5 sm:mb-6 text-balance" style={{ color: '#0E0E0C' }}>
              Advanced geospatial and IT systems for{" "}
              <em className="not-italic relative whitespace-nowrap" style={{ color: '#6E5618' }}>
                smarter decisions
                <span className="absolute left-0 right-0 bottom-[0.06em] h-[0.18em] -z-10" style={{ background: '#D4A84B', opacity: 0.35 }} />
              </em>.
            </h1>
            <p className="reveal reveal-delay-2 text-[17px] sm:text-[18px] leading-[1.5] max-w-[560px] mb-8 sm:mb-9" style={{ color: '#2A2823' }}>
              We build structured GIS, remote sensing, WebGIS, and data-driven solutions for planning, monitoring, analysis, and operational workflows.
            </p>
            <div className="reveal reveal-delay-3 flex gap-3 items-center flex-wrap">
              <Link href="/contact" className="btn bg-[#0E0E0C] text-[#F6F2E7] hover:bg-black hover:-translate-y-[1px] shadow-md hover:shadow-lg transition-all">
                Request a Quote <span className="arrow">→</span>
              </Link>
              <Link href="/services" className="btn border border-[rgba(14,14,12,0.14)] bg-transparent text-[#0E0E0C] hover:border-[#0E0E0C] hover:-translate-y-[1px] transition-all">
                View Services
              </Link>
            </div>
            
            {/* Stats bar — Signal Grid style */}
            <div className="reveal reveal-delay-4 flex gap-6 sm:gap-10 mt-10 sm:mt-12 pt-6 sm:pt-7 border-t max-w-[520px]" style={{ borderColor: 'rgba(14,14,12,0.14)' }}>
              <div className="flex-1">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-1.5" style={{ color: '#6B655B' }}>Projects shipped</div>
                <div className="text-[15px] font-medium" style={{ color: '#0E0E0C' }}>62 across 14 countries</div>
              </div>
              <div className="flex-1">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-1.5" style={{ color: '#6B655B' }}>Disciplines</div>
                <div className="text-[15px] font-medium" style={{ color: '#0E0E0C' }}>GIS · Remote Sensing · IT</div>
              </div>
              <div className="flex-1 hidden sm:block">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-1.5" style={{ color: '#6B655B' }}>Avg. delivery</div>
                <div className="text-[15px] font-medium" style={{ color: '#0E0E0C' }}>8 weeks to production</div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2 w-full">
            <div 
              className="rounded-[14px] overflow-hidden" 
              style={{ 
                border: '1px solid rgba(14,14,12,0.14)', 
                background: '#F6F2E7', 
                boxShadow: '0 1px 0 rgba(14,14,12,0.04), 0 30px 60px -30px rgba(14,14,12,0.20)',
                animation: 'float 8s ease-in-out infinite',
              }}
            >
              <GeoDashboardVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
