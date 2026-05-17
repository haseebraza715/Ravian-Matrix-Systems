"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 sm:py-[140px] relative overflow-hidden bg-brand-dark" ref={ref}>
      {/* Matrix elements */}
      <div className="absolute inset-0 spatial-grid-overlay opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-spatial-grid-dark bg-grid-lg pointer-events-none opacity-10"></div>
      
      {/* Scanning effect */}
      <div className="scanline opacity-[0.05]"></div>

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-light/[0.05] rounded-full blur-[100px]"></div>

      <div className="max-w-[800px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="reveal eyebrow text-white/60 before:bg-gold mb-6">
             <span className="mr-2 terminal-label !opacity-100 text-gold/60">INIT_COLLAB</span> 
             Let&apos;s Build Your Solution
          </div>
          <h2 className="reveal reveal-delay-1 text-[clamp(36px,4.6vw,56px)] leading-[1.05] tracking-[-0.03em] font-medium mb-6 text-balance text-white max-w-[700px]">
            You name IT, <span className="text-gold">We make IT.</span>
          </h2>
          <p className="reveal reveal-delay-2 text-[17.5px] text-white/90 leading-[1.6] mb-10 max-w-[500px]">
            Tell us what you need, and we will help define the right approach. We respond within 24 hours with a non-binding quote.
          </p>
          <Link href="/contact" className="reveal reveal-delay-3 btn bg-gold text-brand-black hover:bg-gold-soft hover:shadow-[0_0_30px_rgba(201,162,77,0.3)] text-base px-8 py-4 font-semibold transition-all">
            Request Non-Binding Quote <span className="arrow">→</span>
          </Link>
          
          <div className="reveal reveal-delay-4 mt-8 flex gap-4">
             <span className="terminal-label !text-white/80">EPSG:4326</span>
             <span className="terminal-label !text-white/80">RAVIAN_NODE_01</span>
             <span className="terminal-label !text-white/80">GEO_INTELLIGENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
