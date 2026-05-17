"use client";

import { useEffect, useState } from "react";
import { processSteps } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Compass, Code, TestTube, Rocket } from "lucide-react";

const stepIcons = [Search, Compass, Code, TestTube, Rocket];

export default function ProcessSection() {
  const ref = useScrollReveal();
  const [rainLines, setRainLines] = useState<string[]>([]);
  
  useEffect(() => {
    const chars = "010101アイウエオカキクケコサシスセソ";
    const newRain = Array.from({ length: 20 }).map(() => {
      return Array.from({ length: 15 }).map(() => chars[Math.floor(Math.random() * chars.length)]).join("");
    });
    setRainLines(newRain);
  }, []);

  return (
    <section className="py-16 sm:py-[120px] bg-brand-dark text-white relative overflow-hidden" id="process" ref={ref}>
      {/* Matrix Elements */}
      <div className="absolute inset-0 scanline opacity-[0.05]"></div>
      
      <div className="absolute inset-0 bg-spatial-grid-dark bg-grid-md pointer-events-none opacity-[0.07]"></div>

      <div className="absolute inset-0 bg-spatial-grid-dark bg-grid-md pointer-events-none opacity-10"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-16">
          <div className="reveal eyebrow text-gold/80 before:bg-gold">Methodology</div>
          <h2 className="reveal reveal-delay-1 text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.03em] font-medium mt-4">
            A <span className="text-gold">structured</span> way to deliver.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-0 relative">
          {/* Connecting Data Stream Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[50px] right-[50px] h-[1px] bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent w-20 animate-dash-flow opacity-30" style={{ animation: 'marquee 4s linear infinite' }}></div>
          </div>

          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] || Compass;
            return (
              <div 
                key={index} 
                className={`reveal reveal-delay-${Math.min(index + 1, 5)} group relative py-6 sm:py-8 px-5 sm:px-6 transition-all duration-500 hover:bg-gold/[0.02]`}
              >
                {/* Step number circle */}
                <div className="w-12 h-12 rounded-lg bg-brand-black border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(201,162,77,0.2)] transition-all">
                  <Icon className="w-5 h-5 text-gold/80 group-hover:text-gold transition-colors" />
                  
                  {/* Status Indicator */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-status-green opacity-0 group-hover:opacity-100 animate-pulse"></div>
                </div>
                
                {/* Step number label */}
                <div className="font-mono text-[10px] tracking-[0.2em] mb-4 flex items-center gap-2">
                   <span className="text-gold">0{index + 1}</span>
                   <span className="terminal-label">STEP_PROC</span>
                </div>
                
                <h4 className="text-[19px] font-medium tracking-[-0.02em] leading-[1.2] mb-3 text-white group-hover:text-gold transition-colors">{step.title}</h4>
                <p className="text-[14.5px] text-white/80 leading-[1.6] mb-6">{step.desc}</p>

                {/* Technical Micro-labels */}
                <div className="mt-auto pt-4 border-t border-white/5 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                   <div className="terminal-label text-[8px]">LOG_SEQ: 0x{index}A9F</div>
                   <div className="terminal-label text-[8px] mt-1">STATUS: RUNNING</div>
                </div>

                {/* Animated Node Circle (Desktop divider) */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[48px] -right-[5px] z-20">
                     <div className="w-[10px] h-[10px] rounded-full bg-brand-dark border border-gold/40 group-hover:border-gold group-hover:scale-125 transition-all"></div>
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
