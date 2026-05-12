"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Map, Monitor, Database, Satellite, Wrench } from "lucide-react";

const outputIcons = [FileText, Map, Monitor, Database, Satellite, Wrench];

export default function ValueDeliver() {
  const ref = useScrollReveal();
  
  const outputs = [
    "Spatial analysis reports",
    "Mapping products",
    "WebGIS dashboards",
    "Structured geospatial datasets",
    "Remote sensing assessments",
    "Decision-support tools"
  ];

  return (
    <section className="py-16 sm:py-[120px]" ref={ref} style={{ borderBottom: '1px solid rgba(14,14,12,0.14)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20 items-start">
          <div>
            <div className="reveal eyebrow">Outputs</div>
            <h2 className="reveal reveal-delay-1 text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.03em] font-medium mt-[18px]">
              Clear, structured, and reliable outputs.
            </h2>
            <p className="reveal reveal-delay-2 text-muted text-[16px] leading-[1.55] mt-6 max-w-[420px]">
              We focus on delivering geospatial outputs that can be directly used in planning, reporting, and operational workflows.
            </p>
          </div>

          <div className="flex flex-col rounded-2xl overflow-hidden shadow-sm border" style={{ background: '#F6F2E7', borderColor: 'rgba(14,14,12,0.14)' }}>
            {outputs.map((output, index) => {
              const Icon = outputIcons[index] || FileText;
              return (
                <div 
                  key={index} 
                  className={`reveal reveal-delay-${Math.min(index + 1, 5)} group grid grid-cols-[48px_1fr_auto] gap-3 sm:gap-4 py-4 sm:py-5 px-4 sm:px-6 items-center border-l-[3px] border-l-transparent hover:border-l-mustard hover:bg-[#FAF6EA] transition-all duration-300 cursor-default ${index !== outputs.length - 1 ? 'border-b' : ''}`}
                  style={index !== outputs.length - 1 ? { borderBottomColor: 'rgba(14,14,12,0.14)' } : undefined}
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-mustard group-hover:bg-mustard/10 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-[16px] font-medium tracking-[-0.01em] m-0 text-ink">{output}</h4>
                  <div className="font-mono text-[10px] text-mustard-ink bg-mustard/10 px-2.5 py-1 rounded-full whitespace-nowrap hidden sm:block">
                    Deliverable
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
