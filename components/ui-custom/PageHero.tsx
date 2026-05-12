"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PageHero({ eyebrow, title, description }: { eyebrow: string, title: string, description?: string }) {
  const ref = useScrollReveal();

  return (
    <section className="pt-28 pb-20 relative overflow-hidden" style={{ background: '#F1ECDF', borderBottom: '1px solid rgba(14,14,12,0.14)' }} ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(14,14,12,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,14,12,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#B8902A]/[0.03] rounded-full blur-[100px]"></div>
      
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="reveal eyebrow mb-6 !text-[#6B655B]">{eyebrow}</div>
        <h1 className="reveal reveal-delay-1 text-[clamp(36px,4.5vw,56px)] leading-[1.05] tracking-[-0.03em] font-medium mb-6 text-balance" style={{ color: '#0E0E0C' }}>
          {title}
        </h1>
        {description && (
          <p className="reveal reveal-delay-2 text-[17px] sm:text-[18px] leading-[1.6] max-w-[600px]" style={{ color: '#2A2823' }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
