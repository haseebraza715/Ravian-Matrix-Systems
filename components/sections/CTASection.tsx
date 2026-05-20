"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <section className="py-20 relative overflow-hidden bg-bg-surface" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold/[0.02] rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-[800px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="reveal eyebrow mb-6">
            Let&apos;s Build Your Solution
          </div>
          
          <h2 className="reveal reveal-delay-1 text-[36px] sm:text-[56px] leading-[1.05] font-bold mb-6 text-balance text-primary max-w-[700px]">
            You name IT. <span className="text-gold">We make IT.</span>
          </h2>
          
          <p className="reveal reveal-delay-2 text-[17px] sm:text-[18px] text-muted leading-relaxed mb-10 max-w-[520px]">
            Tell us what you need, and we will help define the right approach. We respond within 24 hours with a non-binding quote.
          </p>
          
          <div className="reveal reveal-delay-3">
            <Link href="/contact" className="btn btn-primary text-base px-8 py-4">
              Request Non-Binding Quote <span className="arrow">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
