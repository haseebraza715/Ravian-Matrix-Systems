"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PageHero({ eyebrow, title, description }: { eyebrow: string, title: string, description?: string }) {
  const ref = useScrollReveal();

  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-bg-base border-b border-line" ref={ref}>
      {/* Background grid */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/[0.015] rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="reveal eyebrow mb-6">{eyebrow}</div>
        <h1 className="reveal reveal-delay-1 text-[clamp(36px,4.5vw,56px)] leading-[1.08] font-bold mb-6 text-balance text-primary">
          {title}
        </h1>
        {description && (
          <p className="reveal reveal-delay-2 text-[17px] sm:text-[18px] leading-[1.65] max-w-[620px] text-muted">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
