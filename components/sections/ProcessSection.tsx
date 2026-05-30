"use client";

import { processSteps } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Lightbulb, Code, TestTube, Rocket } from "lucide-react";

const stepIcons = [Search, Lightbulb, Code, TestTube, Rocket];

export default function ProcessSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-bg-surface text-primary relative overflow-hidden" id="process" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      {/* Ambient gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 sm:mb-20">
          <div className="reveal eyebrow mb-4">How We Work</div>
          <h2 className="reveal reveal-delay-1 text-[32px] sm:text-[46px] leading-[1.2] font-bold">
            Our Proven Process to Deliver <span className="text-gold">IT &amp; GIS Projects</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 relative">
          
          {/* Connecting dashed line (Desktop & Tablet) */}
          <div className="hidden md:block absolute top-[52px] left-[40px] right-[40px] h-[1px] border-t border-dashed border-line pointer-events-none"></div>

          {/* Connecting dashed line (Mobile stacked) */}
          <div className="block md:hidden absolute top-[48px] bottom-[48px] left-[48px] w-[1px] border-l border-dashed border-line pointer-events-none"></div>

          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] || Lightbulb;
            const isSolutionPlanning = step.title === "Solution Planning";
            return (
              <div 
                key={index} 
                className={`reveal reveal-delay-${Math.min(index + 1, 5)} group relative p-6 border hover:border-line hover:bg-bg-base/30 active:scale-[0.99] active:bg-bg-base/40 active:border-line rounded-2xl transition-all duration-300 ${
                  isSolutionPlanning ? "border-gold/25 bg-bg-base/20 shadow-[0_0_24px_rgba(245,197,107,0.08)]" : "border-transparent"
                }`}
              >
                {/* Step icon wrapper */}
                <div className={`w-12 h-12 rounded-lg bg-bg-base border flex items-center justify-center mb-8 relative z-10 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(225,184,74,0.15)] transition-all ${
                  isSolutionPlanning ? "border-gold/70 shadow-[0_0_20px_rgba(245,197,107,0.18)]" : "border-line"
                }`}>
                  <Icon className="w-5 h-5 text-gold/80 group-hover:text-gold transition-colors" />
                  {/* Active node glow */}
                  <div className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-status-green transition-opacity ${
                    isSolutionPlanning ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"
                  }`}></div>
                </div>
                
                {/* Step index and label */}
                <div className="font-mono text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                   <span className="text-gold font-bold text-xs">0{index + 1}</span>
                   <span className="terminal-label text-muted">STEP_PROC</span>
                </div>
                
                <h3 className="text-[18px] font-semibold tracking-tight mb-3 text-primary group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-muted mb-6">
                  {step.desc}
                </p>

                {/* Technical Micro-labels */}
                <div className="mt-auto pt-4 border-t border-line opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                   <div className="terminal-label text-[8px]">LOG_SEQ: 0x{index}A9F</div>
                   <div className="terminal-label text-[8px] mt-1">STATUS: STABLE</div>
                </div>

                {/* Dotted Node Point on the line */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[48px] -right-[5px] z-20">
                     <div className="w-[8px] h-[8px] rounded-full bg-bg-surface border border-line group-hover:border-gold group-hover:scale-125 transition-all"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
