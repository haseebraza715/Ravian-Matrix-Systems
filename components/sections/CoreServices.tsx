"use client";

import Link from "next/link";
import { coreServices } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Globe, Code, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui-custom/Card";

const iconMap: Record<string, React.ReactNode> = {
  "Web Solutions": <Globe className="w-5 h-5" />,
  "Software Development": <Code className="w-5 h-5" />,
  "Geospatial Intelligence": <MapPin className="w-5 h-5" />,
  "Digital Growth": <TrendingUp className="w-5 h-5" />,
};

export default function CoreServices() {
  const ref = useScrollReveal();

  const buttonMap: Record<string, string> = {
    "Web Solutions": "View Web Solutions",
    "Software Development": "View Software Development",
    "Geospatial Intelligence": "View Geospatial Intelligence",
    "Digital Growth": "View Digital Growth",
  };

  return (
    <section className="py-20 bg-bg-base" id="services" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 items-end mb-16 sm:mb-20">
          <div>
            <h2 className="reveal text-[32px] sm:text-[48px] leading-[1.08] font-bold text-primary max-w-[600px]">
              Our <span className="text-gold">Core Services</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-muted text-[16px] leading-[1.6] max-w-[480px]">
            Web solutions, software development, geospatial intelligence, and digital growth, each mapped to its own detailed service page.
          </p>
        </div>

        {/* Custom Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 items-start">
          {coreServices.map((svc, index) => {
            const isGeospatial = svc.id === "geospatial-intelligence";
            // Stagger Software Development slightly down
            const isStaggered = svc.id === "software-development";

            return (
              <div
                key={svc.id}
                className={`reveal reveal-delay-${Math.min(index % 3 + 1, 5)} ${isStaggered ? "md:translate-y-6" : ""}`}
              >
                <Link href={`/services/${svc.id}`} className="block h-full group">
                  <Card
                    premiumBorder={isGeospatial}
                    className={`p-6 sm:p-8 min-h-[280px] flex flex-col justify-between transition-all duration-300 ${
                      isGeospatial ? "bg-bg-surface border-transparent" : "bg-bg-surface"
                    }`}
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-[42px] h-[42px] rounded-lg flex items-center justify-center mb-5 border border-line bg-bg-base text-gold group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(225,184,74,0.2)] group-hover:bg-gold/5 transition-all duration-300">
                        {iconMap[svc.title] || <Globe className="w-5 h-5" />}
                      </div>

                      {/* Card index label */}
                      <div className="font-mono text-[11px] text-muted tracking-[0.08em] mb-3">
                        <span>{(index + 1).toString().padStart(2, '0')} / {svc.title.split(' ')[0]}</span>
                      </div>

                      <h3 className="text-[22px] font-semibold tracking-tight mb-3 text-primary group-hover:text-gold transition-colors">
                        {svc.title}
                      </h3>

                      <p className="text-muted text-[14.5px] leading-[1.6] mb-6 max-w-[540px]">
                        {svc.description}
                      </p>

                      {/* Action link */}
                      <div className="font-mono text-[11px] tracking-[0.05em] uppercase text-gold group-hover:text-gold-soft flex items-center gap-1.5 transition-colors duration-300">
                        <span>{buttonMap[svc.title] || "Learn More"}</span>
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                      </div>
                    </div>

                    {/* Bottom Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line mt-6">
                      {svc.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="font-mono text-[10.5px] text-muted px-2.5 py-1 border border-line rounded-full bg-bg-base transition-colors group-hover:border-gold/30 group-hover:text-gold/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
