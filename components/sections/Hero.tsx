"use client";

import Link from "next/link";
import GeoDashboardVisual from "@/components/ui-custom/GeoDashboardVisual";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-brand-dark" ref={ref}>
      {/* Matrix Scanline */}
      <div className="scanline opacity-[0.05]"></div>

      {/* Grid background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 pt-[60px] sm:pt-[72px] pb-[80px] sm:pb-[96px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-stretch">
          <div>
            <div className="reveal eyebrow mb-6 sm:mb-7 text-white/80 flex items-center gap-3">
              <span className="terminal-label !opacity-100 text-gold-soft">COORD_SYS_v2.1</span>
              GIS · Remote Sensing · Geospatial Intelligence · IT
            </div>
            <h1 className="reveal reveal-delay-1 text-[clamp(36px,5.4vw,76px)] leading-[0.98] tracking-[-0.035em] font-medium mb-5 sm:mb-6 text-balance text-brand-cream">
              Advanced geospatial and IT systems for{" "}
              <em className="not-italic relative whitespace-nowrap text-gold">
                smarter decisions
                <span className="absolute left-0 right-0 bottom-[0.06em] h-[1px] -z-10" style={{ background: '#C9A24D', opacity: 0.5 }} />
              </em>.
            </h1>
            <p className="reveal reveal-delay-2 text-[17px] sm:text-[18px] leading-[1.5] max-w-[560px] mb-8 sm:mb-9 text-white/80">
              We build structured GIS, remote sensing, WebGIS, and data-driven solutions for planning, monitoring, analysis, and operational workflows.
            </p>
            <div className="reveal reveal-delay-3 flex gap-3 items-center flex-wrap">
              <Link href="/contact" className="btn bg-gold text-brand-black hover:bg-gold-soft hover:shadow-[0_0_20px_rgba(201,162,77,0.2)] transition-all">
                Request a Quote <span className="arrow">→</span>
              </Link>
              <Link href="/services" className="btn border border-white/20 bg-transparent text-brand-cream hover:border-gold/50 hover:text-gold transition-all">
                View Services
              </Link>
            </div>
            
            {/* Stats bar */}
            <div className="reveal reveal-delay-4 flex gap-6 sm:gap-10 mt-10 sm:mt-12 pt-6 sm:pt-7 border-t max-w-[520px]" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className="flex-1">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-1.5 flex justify-between text-white/60">
                  Projects <span className="terminal-label">GEOSPATIAL_STAT</span>
                </div>
                <div className="text-[15px] font-medium text-brand-cream">62 across 14 countries</div>
              </div>
              <div className="flex-1">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-1.5 text-white/60">Disciplines</div>
                <div className="text-[15px] font-medium text-brand-cream">GIS · RS · IT</div>
              </div>
              <div className="flex-1 hidden sm:block">
                <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-1.5 text-white/60">Avg. delivery</div>
                <div className="text-[15px] font-medium text-brand-cream">8 weeks</div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2 w-full">
            <div 
              className="rounded-[14px] overflow-hidden group" 
              style={{ 
                border: '1px solid rgba(255,255,255,0.1)', 
                background: '#050605', 
                boxShadow: '0 0 30px rgba(0,0,0,0.5)',
                animation: 'float 8s ease-in-out infinite',
              }}
            >
              <GeoDashboardVisual />
            </div>
            
            {/* Floating terminal coordinates near the visual */}
            <div className="mt-4 flex justify-between px-2">
               <span className="terminal-label !opacity-30">SCAN_AREA: [48.13, 11.58]</span>
               <span className="terminal-label !opacity-30">SPATIAL_LOCK: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
