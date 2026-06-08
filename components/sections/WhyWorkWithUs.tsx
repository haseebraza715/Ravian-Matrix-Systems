"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card } from "@/components/ui-custom/Card";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { en } from "@/lib/i18n/translations/en";
import { de } from "@/lib/i18n/translations/de";

export default function WhyWorkWithUs() {
  const ref = useScrollReveal();
  const { t, locale } = useTranslation();

  const isDe = locale === "de";
  const translations = isDe ? de : en;
  const reasons = translations.whyWorkWithUs.reasons;

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-bg-base text-primary relative overflow-hidden" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-16">
          <h2 
            className="reveal text-[32px] sm:text-[46px] leading-[1.2] font-bold"
            dangerouslySetInnerHTML={{ __html: t("whyWorkWithUs.titleHtml") }}
          />
          <p className="reveal reveal-delay-1 text-muted text-[16px] leading-[1.6] max-w-[540px] mt-4">
            {t("whyWorkWithUs.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {reasons.map((reason, idx) => (
            <div key={idx} className={`reveal reveal-delay-${Math.min(idx + 1, 5)} flex`}>
              <Card className="p-6 bg-bg-surface flex flex-col w-full h-full" glow>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-gold mb-4">0{idx + 1}</div>
                <h3 className="text-[18px] font-semibold tracking-tight text-primary mb-3">{reason.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted">{reason.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
