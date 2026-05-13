"use client";

import Link from "next/link";
import { solutions } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SolutionsPreview() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-[120px] bg-brand-dark text-white relative overflow-hidden" id="work" ref={ref}>
      {/* Matrix mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-light/5 rounded-full blur-[100px]"></div>
      </div>
      <div className="absolute inset-0 bg-spatial-grid-dark bg-grid-md mask-radial-center pointer-events-none opacity-20"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16">
          <div className="max-w-[600px]">
            <div className="reveal eyebrow text-gold/50 before:bg-gold">Case Examples</div>
            <h2 className="reveal reveal-delay-1 text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.03em] font-medium mt-4 text-brand-cream">
              Solutions built around real project needs.
            </h2>
          </div>
          <Link href="/solutions" className="reveal reveal-delay-2 btn bg-gold text-brand-black hover:bg-gold-soft shrink-0 font-semibold shadow-[0_0_20px_rgba(201,162,77,0.2)]">
            View All Solutions
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, index) => (
            <div 
              key={index} 
              className={`reveal reveal-delay-${Math.min(index + 1, 4)} group border border-white/10 bg-brand-black/40 backdrop-blur-sm rounded-2xl p-8 flex flex-col relative transition-all duration-500 hover:bg-gold/[0.02] hover:border-gold/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
            >
              <h3 className="text-[22px] font-medium tracking-[-0.01em] mb-6 group-hover:text-gold transition-colors text-brand-cream">{sol.title}</h3>
              
              <div className="flex flex-col gap-5 mb-8">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">PROBLEM</div>
                  <p className="text-[14px] text-white/80 leading-relaxed">{sol.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2">APPROACH</div>
                  <p className="text-[14px] text-white/80 leading-relaxed">{sol.solution}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-2">OUTPUT</div>
                  <p className="text-[14.5px] text-brand-cream leading-relaxed font-medium">{sol.output}</p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-3">
                {sol.services.map(svc => (
                  <span key={svc} className="font-mono text-[9px] tracking-wider text-white/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 uppercase group-hover:border-gold/30 group-hover:text-gold/90 transition-colors">
                    {svc}
                  </span>
                ))}
              </div>
              
              <div className="absolute top-4 right-4 terminal-label opacity-0 group-hover:opacity-20 transition-opacity font-mono text-[8px]">CASE_FILE_{index}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
