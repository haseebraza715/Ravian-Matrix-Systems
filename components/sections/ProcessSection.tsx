"use client";

import { processSteps } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Compass, Code, TestTube, Rocket } from "lucide-react";

const stepIcons = [Search, Compass, Code, TestTube, Rocket];

export default function ProcessSection() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-[120px] border-b border-line bg-navy text-white relative overflow-hidden" id="process" ref={ref}>
      <div className="absolute inset-0 bg-spatial-grid-dark bg-grid-md pointer-events-none opacity-20"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-16">
          <div className="reveal eyebrow text-white/50 before:bg-mustard-2">Methodology</div>
          <h2 className="reveal reveal-delay-1 text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.03em] font-medium mt-4">
            A structured way to deliver.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] || Compass;
            return (
              <div 
                key={index} 
                className={`reveal reveal-delay-${Math.min(index + 1, 5)} group relative pt-8 pb-10 px-6 ${index !== processSteps.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
              >
                {/* Step number circle */}
                <div className="w-10 h-10 rounded-full bg-mustard/15 border border-mustard/30 flex items-center justify-center mb-6 group-hover:bg-mustard/25 transition-colors">
                  <Icon className="w-4 h-4 text-mustard-2" />
                </div>
                
                {/* Step number */}
                <div className="font-mono text-[11px] text-mustard tracking-[0.1em] mb-3">
                  {step.num}
                </div>
                
                <h4 className="text-[18px] font-medium tracking-[-0.02em] leading-[1.2] mb-3 text-white">{step.title}</h4>
                <p className="text-[14px] text-white/50 leading-[1.6]">{step.desc}</p>

                {/* Connecting arrow (hidden on last) */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[52px] -right-[14px] z-10">
                    <div className="w-7 h-7 rounded-full bg-navy border border-mustard/30 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M3 1L7 5L3 9" stroke="#C59D45" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
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
