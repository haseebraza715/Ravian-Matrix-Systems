"use client";

import { applicationScope } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Trees, Building2, Plane, Droplets, Globe, BarChart3 } from "lucide-react";

const scopeIcons = [Trees, Building2, Plane, Droplets, Globe, BarChart3];

export default function ApplicationScope() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-[120px]" ref={ref} style={{ borderBottom: '1px solid rgba(14,14,12,0.14)', background: '#E8E1CF' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="max-w-[700px] mb-16">
          <div className="reveal eyebrow">Domains</div>
          <h2 className="reveal reveal-delay-1 text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.03em] font-medium mt-[14px] mb-6">
            Where our services are applied.
          </h2>
          <p className="reveal reveal-delay-2 text-muted text-[16px] leading-[1.55]">
            Combined experience in geospatial system development, land use studies, hydrological modeling, environmental monitoring, aviation spatial systems, and operational decision-support projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationScope.map((app, index) => {
            const Icon = scopeIcons[index] || Globe;
            return (
              <div 
                key={index} 
                className={`reveal reveal-delay-${Math.min(index % 3 + 1, 5)} card-glow group rounded-2xl p-6 sm:p-7 transition-all border hover:bg-[#FAF6EA]`}
                style={{ background: '#F6F2E7', borderColor: 'rgba(14,14,12,0.14)' }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 group-hover:bg-navy-2 transition-colors shadow-sm">
                  <Icon className="w-5 h-5 text-mustard-2" />
                </div>
                <h3 className="text-[18px] font-medium tracking-[-0.01em] mb-3 group-hover:text-navy transition-colors">{app.title}</h3>
                <p className="text-muted text-[14.5px] leading-[1.55]">
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
