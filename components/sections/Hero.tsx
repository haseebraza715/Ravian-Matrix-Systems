"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import dynamic from "next/dynamic";

const InteractiveGlobe = dynamic(() => import("@/components/ui-custom/InteractiveGlobe"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-bg-base min-h-[88vh] flex items-center justify-center pt-20 pb-16 sm:pb-20" ref={ref}>
      {/* 3D Interactive Canvas Globe in Background - Centered, hidden on mobile */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden lg:block mask-radial-center opacity-50">
        <InteractiveGlobe />
      </div>

      {/* Ambient champagne radial glow top-left behind H1 */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Grid ambient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(30,42,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,64,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10 w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-[860px] flex flex-col items-center">

          <div className="reveal eyebrow mb-6">Ravian Matrix Systems</div>

          {/* Punch headline — sized to feel confident but not eat the page */}
          <h1 className="reveal reveal-delay-1 font-display font-semibold text-balance text-primary tracking-[-0.03em] leading-[1.0] mb-7 text-[clamp(44px,7vw,88px)]">
            You name <span className="italic text-gold">IT.</span> <br className="sm:hidden" />
            We make <span className="italic text-gold">IT.</span>
          </h1>

          <p className="reveal reveal-delay-2 text-[15px] sm:text-[17px] leading-[1.65] max-w-[700px] mb-8 text-muted">
            We design and deliver reliable digital solutions for businesses that need professional web systems, custom software, geospatial intelligence, and digital growth support.
            From websites and business applications to GIS-based analysis, automation, branding, and digital visibility, we help turn requirements into practical and scalable solutions.
          </p>

          <div className="reveal reveal-delay-3 flex flex-row items-center justify-center gap-6 flex-wrap">
            <Link href="/contact" className="btn btn-primary">
              Request Non-Binding Quote <span className="arrow">→</span>
            </Link>
            <Link href="/services" className="group text-[14px] font-semibold text-muted hover:text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
              Explore Services <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll cue — separated from content stack so positioning is clean */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none select-none animate-bounce z-10">
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted/60 uppercase">Scroll</span>
        <svg className="w-4 h-4 text-gold/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
