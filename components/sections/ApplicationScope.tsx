"use client";

import { applicationScope } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Trees, Building2, Plane, Droplets, Globe, BarChart3 } from "lucide-react";

const scopeIcons = [Trees, Building2, Plane, Droplets, Globe, BarChart3];

export default function ApplicationScope() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-[120px] bg-brand-black" ref={ref} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="max-w-[700px] mb-16 relative">
          <div className="reveal eyebrow text-gold/80 before:bg-gold">Domains</div>
          <h2 className="reveal reveal-delay-1 text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.03em] font-medium mt-[14px] mb-6 text-brand-cream">
            Where our services are <span className="text-gold">applied</span>.
          </h2>
          <p className="reveal reveal-delay-2 text-white/80 text-[16px] leading-[1.55]">
            Combined experience in geospatial system development, land use studies, hydrological modeling, environmental monitoring, aviation spatial systems, and operational decision-support projects.
          </p>
          <div className="absolute -top-4 -right-4 terminal-label opacity-40">AREA_SCOPE_v2</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationScope.map((app, index) => {
            const Icon = scopeIcons[index] || Globe;
            return (
              <div 
                key={index} 
                className={`reveal reveal-delay-${Math.min(index % 3 + 1, 5)} group rounded-2xl p-6 sm:p-7 transition-all border hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-gold/20 hover:-translate-y-1`}
                style={{ background: '#050605', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-black flex items-center justify-center mb-5 group-hover:bg-brand-black group-hover:shadow-[0_0_15px_rgba(201,162,77,0.15)] transition-all border border-white/5">
                  <Icon className="w-5 h-5 text-gold/80 group-hover:text-gold transition-colors" />
                </div>
                <div className="flex justify-between items-start mb-3">
                   <h3 className="text-[18px] font-medium tracking-[-0.01em] group-hover:text-gold transition-colors text-brand-cream">{app.title}</h3>
                   <span className="terminal-label opacity-40 group-hover:opacity-60 transition-opacity">0x{index}</span>
                </div>
                <p className="text-white/80 text-[14.5px] leading-[1.6]">
                  {app.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
