"use client";

import { processSteps } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRotatingHighlight } from "@/hooks/useRotatingHighlight";
import {
  rotatingStepCardClass,
  rotatingStepTitleClass,
} from "@/lib/rotatingHighlightStyles";
import { Search, Lightbulb, Code, TestTube, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const stepIcons = [Search, Lightbulb, Code, TestTube, Rocket];

export default function ProcessSection() {
  const ref = useScrollReveal();
  const { isFeatured, setActiveIndex } = useRotatingHighlight(processSteps.length);

  return (
    <section
      className="py-12 sm:py-20 md:py-32 bg-bg-surface text-primary relative overflow-hidden"
      id="process"
      ref={ref}
      style={{ borderBottom: "1px solid var(--line-soft)" }}
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-16 sm:mb-20">
          <div className="reveal eyebrow mb-4">How We Work</div>
          <h2 className="reveal reveal-delay-1 text-[32px] sm:text-[46px] leading-[1.2] font-bold">
            Our Proven Process to Deliver <span className="text-gold">IT &amp; GIS Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative">
          <div className="hidden md:block absolute top-[52px] left-[24px] right-[24px] h-[1px] border-t border-dashed border-line pointer-events-none" />
          <div className="block md:hidden absolute top-[48px] bottom-[48px] left-[48px] w-[1px] border-l border-dashed border-line pointer-events-none" />

          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] || Lightbulb;
            const featured = isFeatured(index);
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={featured}
                aria-label={`${step.title}: ${step.desc}`}
                className={cn(
                  "process-step-card group relative w-full cursor-pointer p-6 text-left",
                  rotatingStepCardClass(featured)
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg bg-bg-base border flex items-center justify-center mb-8 relative z-10 transition-all duration-300",
                    featured
                      ? "border-gold/40 shadow-[0_0_14px_-5px_rgba(245,197,107,0.28)]"
                      : "border-line group-hover:border-gold/50"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-colors duration-300",
                      featured ? "text-gold" : "text-gold/80 group-hover:text-gold"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-status-green transition-opacity duration-300",
                      featured ? "opacity-100" : "opacity-50 group-hover:opacity-100"
                    )}
                  />
                </div>

                <div className="font-mono text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="text-gold font-bold text-xs">0{index + 1}</span>
                  <span className="terminal-label text-muted">STEP_PROC</span>
                </div>

                <h3
                  className={cn(
                    "text-[18px] font-semibold tracking-tight mb-3 text-primary",
                    rotatingStepTitleClass(featured)
                  )}
                >
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-muted mb-6">{step.desc}</p>

                <div
                  className={cn(
                    "mt-auto pt-4 border-t border-line transition-opacity duration-300",
                    featured ? "opacity-50" : "opacity-30 group-hover:opacity-50"
                  )}
                >
                  <div className="terminal-label text-[8px]">LOG_SEQ: 0x{index}A9F</div>
                  <div className="terminal-label text-[8px] mt-1">STATUS: STABLE</div>
                </div>

                {index !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[48px] -right-[2px] z-20 pointer-events-none">
                    <div
                      className={cn(
                        "w-[8px] h-[8px] rounded-full bg-bg-surface border transition-all duration-300",
                        featured
                          ? "border-gold scale-125 shadow-[0_0_8px_rgba(245,197,107,0.35)]"
                          : "border-line group-hover:border-gold/60"
                      )}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
