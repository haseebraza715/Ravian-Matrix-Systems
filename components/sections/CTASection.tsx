"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-[140px] relative overflow-hidden bg-gradient-to-br from-navy via-navy-2 to-dark" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-[10%] w-[300px] h-[300px] bg-mustard/[0.06] rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 right-[10%] w-[250px] h-[250px] bg-mustard/[0.04] rounded-full blur-[80px]"></div>
      <div className="absolute inset-0 bg-spatial-grid-dark bg-grid-sm pointer-events-none opacity-15"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-[20%] right-[15%] w-16 h-16 border border-mustard/20 rotate-45 animate-float opacity-30"></div>
      <div className="absolute bottom-[25%] left-[12%] w-10 h-10 border border-mustard/15 rounded-full animate-float-slow opacity-25"></div>
      <div className="absolute top-[40%] left-[30%] w-4 h-4 bg-mustard/20 rotate-45 animate-float opacity-20" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[800px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="reveal eyebrow text-white/40 before:bg-mustard-2 mb-6">Let&apos;s build together</div>
          <h2 className="reveal reveal-delay-1 text-[clamp(36px,4.6vw,56px)] leading-[1.05] tracking-[-0.03em] font-medium mb-6 text-balance text-white max-w-[700px]">
            Ready to structure your <span className="gold-text">spatial data?</span>
          </h2>
          <p className="reveal reveal-delay-2 text-[17px] text-white/60 leading-[1.6] mb-10 max-w-[500px]">
            Share your project requirements and we will provide a structured approach and tailored quotation.
          </p>
          <Link href="/contact" className="reveal reveal-delay-3 btn btn-gold text-base px-8 py-4">
            Request a Quote <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
