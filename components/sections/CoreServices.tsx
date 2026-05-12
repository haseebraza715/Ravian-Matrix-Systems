"use client";

import { coreServices } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Satellite, Droplets, Leaf, Plane, Database, Globe, Code, Cog } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "GIS Analysis": <MapPin className="w-5 h-5" />,
  "Remote Sensing": <Satellite className="w-5 h-5" />,
  "Hydrological Modeling": <Droplets className="w-5 h-5" />,
  "Environmental Monitoring": <Leaf className="w-5 h-5" />,
  "Aviation Spatial Systems": <Plane className="w-5 h-5" />,
  "Spatial Database Structuring": <Database className="w-5 h-5" />,
  "WebGIS Solutions": <Globe className="w-5 h-5" />,
  "IT & Web Development": <Code className="w-5 h-5" />,
  "Data & Automation": <Cog className="w-5 h-5" />,
};

export default function CoreServices() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-[120px]" id="services" ref={ref} style={{ borderBottom: '1px solid rgba(14,14,12,0.14)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-end mb-10 md:mb-[64px]">
          <div>
            <div className="reveal eyebrow">Our capabilities</div>
            <h2 className="reveal reveal-delay-1 text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.03em] font-medium mt-[14px] max-w-[600px]">
              Structured geospatial services.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-muted text-[16px] leading-[1.55] max-w-[440px]">
            Professional GIS and remote sensing capabilities designed for practical use across planning, analysis, and decision-making workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreServices.map((svc, index) => (
            <div 
              key={svc.id} 
              className={`reveal reveal-delay-${Math.min(index % 3 + 1, 5)} card-glow card-gold-top group p-6 sm:p-8 min-h-[280px] flex flex-col relative border rounded-2xl transition-colors hover:bg-[#FAF6EA]`}
              style={{ background: '#F6F2E7', borderColor: 'rgba(14,14,12,0.14)' }}
            >
              {/* Icon */}
              <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center mb-5 border transition-colors" style={{ borderColor: 'rgba(14,14,12,0.14)', background: '#F1ECDF', color: '#B8902A' }}>
                {iconMap[svc.title] || <MapPin className="w-5 h-5" />}
              </div>

              <div className="font-mono text-[11px] text-muted tracking-[0.08em] mb-3">
                {(index + 1).toString().padStart(2, '0')} / {svc.title.split(' ')[0]}
              </div>
              <h3 className="text-[20px] font-medium tracking-[-0.015em] mb-2.5 group-hover:text-navy transition-colors">{svc.title}</h3>
              <p className="text-muted text-[14.5px] leading-[1.55] mb-5">
                {svc.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {svc.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] text-ink-2 px-2.5 py-1 border border-line rounded-full bg-bg-2/50">
                    {tag}
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
