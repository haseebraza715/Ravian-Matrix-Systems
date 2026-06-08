"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function KpiStrip() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  const kpis = [
    { value: "4", label: t("kpi.coreServices.label"), detail: t("kpi.coreServices.detail") },
    { value: "2", label: t("kpi.languages.label"), detail: t("kpi.languages.detail") },
    { value: "24h", label: t("kpi.responseTime.label"), detail: t("kpi.responseTime.detail") }
  ];

  return (
    <section 
      ref={ref} 
      className="py-8 sm:py-10 bg-bg-surface border-y border-line overflow-hidden relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-line/60">
          {kpis.map((kpi, idx) => (
            <div 
              key={idx} 
              className={`reveal reveal-delay-${idx + 1} flex flex-col items-center text-center px-4 ${
                idx > 0 ? "sm:pl-8" : ""
              } ${idx > 0 ? "pt-6 sm:pt-0" : ""}`}
            >
              <span className="text-[36px] sm:text-[42px] font-bold text-gold font-display leading-none tracking-tight">
                {kpi.value}
              </span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary font-semibold mt-2.5">
                {kpi.label}
              </span>
              <span className="text-[12px] text-muted mt-1 font-sans">
                {kpi.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
