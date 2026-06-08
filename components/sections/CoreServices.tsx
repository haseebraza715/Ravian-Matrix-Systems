"use client";

import { Link } from "@/lib/i18n/Link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Globe, Code, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui-custom/Card";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { en } from "@/lib/i18n/translations/en";
import { de } from "@/lib/i18n/translations/de";

const iconMap: Record<string, React.ReactNode> = {
  "web-development": <Globe className="w-5 h-5" />,
  "software-development": <Code className="w-5 h-5" />,
  "geospatial-intelligence": <MapPin className="w-5 h-5" />,
  "digital-growth": <TrendingUp className="w-5 h-5" />,
};

export default function CoreServices() {
  const ref = useScrollReveal();
  const { t, locale } = useTranslation();

  const isDe = locale === "de";
  const translations = isDe ? de : en;
  const services = translations.coreServices.services;

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-bg-base" id="services" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 items-end mb-16 sm:mb-20">
          <div>
            <h2 
              className="reveal text-[32px] sm:text-[48px] leading-[1.2] font-bold text-primary max-w-[600px]"
              dangerouslySetInnerHTML={{ __html: t("coreServices.titleHtml") }}
            />
          </div>
          <p className="reveal reveal-delay-2 text-muted text-[16px] leading-[1.6] max-w-[480px]">
            {t("coreServices.desc")}
          </p>
        </div>

        {/* Custom Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 items-stretch">
          {services.map((svc, index) => {
            const isStaggered = svc.id === "software-development";

            return (
              <div
                key={svc.id}
                className={`reveal reveal-delay-${Math.min(index % 3 + 1, 5)} ${isStaggered ? "md:translate-y-6" : ""} flex`}
              >
                <Link href={`/services/${svc.id}`} className="block w-full h-full group">
                  <Card
                    className="p-6 sm:p-8 min-h-[280px] flex flex-col justify-between h-full w-full bg-bg-surface transition-all duration-300"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-[42px] h-[42px] rounded-lg flex items-center justify-center mb-5 border border-line bg-bg-base text-gold group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                        {iconMap[svc.id] || <Globe className="w-5 h-5" />}
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
                        <span>{t("coreServices.exploreService")}</span>
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
