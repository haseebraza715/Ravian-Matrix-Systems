"use client";

import { coreServices } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Globe, Code, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Web Solutions": <Globe className="w-5 h-5" />,
  "Software Development": <Code className="w-5 h-5" />,
  "Geospatial Intelligence": <MapPin className="w-5 h-5" />,
  "Digital Growth": <TrendingUp className="w-5 h-5" />,
};

export default function CoreServices() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 sm:py-[120px] bg-brand-black" id="services" ref={ref} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-end mb-10 md:mb-[64px]">
          <div>
            <div className="reveal eyebrow text-gold/80 before:bg-gold">Our capabilities</div>
            <h2 className="reveal reveal-delay-1 text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.03em] font-medium mt-[14px] max-w-[600px] text-brand-cream">
              Structured geospatial services.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-white/80 text-[16px] leading-[1.55] max-w-[440px]">
            Professional GIS and remote sensing capabilities designed for practical use across planning, analysis, and decision-making workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {coreServices.map((svc, index) => (
            <div 
              key={svc.id} 
              className={`reveal reveal-delay-${Math.min(index % 3 + 1, 5)} group p-6 sm:p-8 min-h-[280px] flex flex-col relative border rounded-2xl overflow-hidden card-glow`}
              style={{ background: '#050605', borderColor: 'rgba(255,255,255,0.08)' }}
            >
              {/* Spatial Grid Overlay (visible on hover) */}
              <div className="absolute inset-0 spatial-grid-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 scanline opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center mb-5 border transition-all duration-500 relative z-10 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(201,162,77,0.2)] group-hover:bg-gold/5" 
                   style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#080A0C', color: '#C9A24D' }}>
                <div className="group-hover:text-gold transition-colors">
                  {iconMap[svc.title] || <MapPin className="w-5 h-5" />}
                </div>
              </div>

              <div className="font-mono text-[11px] text-white/60 tracking-[0.08em] mb-3 relative z-10 flex justify-between">
                <span>{(index + 1).toString().padStart(2, '0')} / {svc.title.split(' ')[0]}</span>
                <span className="terminal-label opacity-0 group-hover:opacity-40 transition-opacity duration-500">REF_ID_{svc.id}</span>
              </div>
              
              <h3 className="text-[20px] font-medium tracking-[-0.015em] mb-2.5 relative z-10 group-hover:text-gold transition-colors text-brand-cream">{svc.title}</h3>
              
              <p className="text-white/70 text-[14.5px] leading-[1.55] mb-5 relative z-10">
                {svc.description}
              </p>

              {/* Hover tiny coordinates */}
              <div className="absolute top-4 right-4 terminal-label opacity-0 group-hover:opacity-20 transition-opacity duration-500 font-mono text-[8px]">
                LAT: {48.1351 + index * 0.01} / LON: {11.5820 + index * 0.01}
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5 relative z-10">
                {svc.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] text-white/60 px-2.5 py-1 border rounded-full bg-white/5 transition-colors group-hover:border-gold/30 group-hover:text-gold/80"
                        style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Signal Line */}
              <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-gold via-blue-light to-gold w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
