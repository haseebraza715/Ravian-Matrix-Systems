"use client";

import Link from "next/link";
import { solutions } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SolutionsPreview() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-[120px] border-b border-line bg-navy text-white relative overflow-hidden" id="work" ref={ref}>
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-mustard/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-navy-3/50 rounded-full blur-[100px]"></div>
      </div>
      <div className="absolute inset-0 bg-spatial-grid-dark bg-grid-md mask-radial-center pointer-events-none opacity-40"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16">
          <div className="max-w-[600px]">
            <div className="reveal eyebrow text-white/50 before:bg-mustard-2">Case Examples</div>
            <h2 className="reveal reveal-delay-1 text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.03em] font-medium mt-4">
              Solutions built around real project needs.
            </h2>
          </div>
          <Link href="/solutions" className="reveal reveal-delay-2 btn btn-mustard shrink-0">
            View All Solutions
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, index) => (
            <div 
              key={index} 
              className={`reveal reveal-delay-${Math.min(index + 1, 4)} group border border-white/10 bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 flex flex-col relative transition-all duration-500 hover:bg-white/[0.08] hover:border-mustard/20 hover:shadow-gold-glow-sm`}
            >
              <h3 className="text-[22px] font-medium tracking-[-0.01em] mb-6 group-hover:text-mustard-2 transition-colors">{sol.title}</h3>
              
              <div className="flex flex-col gap-5 mb-8">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-mustard-2 mb-2">Problem</div>
                  <p className="text-[14px] text-white/60 leading-relaxed">{sol.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-mustard-2 mb-2">Approach</div>
                  <p className="text-[14px] text-white/60 leading-relaxed">{sol.solution}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-mustard-2 mb-2">Output</div>
                  <p className="text-[14px] text-white leading-relaxed font-medium">{sol.output}</p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-3">
                {sol.services.map(svc => (
                  <span key={svc} className="font-mono text-[10px] text-white/50 bg-white/[0.06] px-3 py-1.5 rounded-full border border-white/10">
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
