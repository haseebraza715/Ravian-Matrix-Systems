"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function IntroSection() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-bg-surface relative overflow-hidden" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="reveal eyebrow mb-6">{t("intro.eyebrow")}</div>
            <h2 
              className="reveal reveal-delay-1 text-[32px] sm:text-[46px] leading-[1.2] font-bold text-primary mb-6 animate-fadeIn"
              dangerouslySetInnerHTML={{ __html: t("intro.titleHtml") }}
            />
            <p className="reveal reveal-delay-2 text-[16px] sm:text-[17px] leading-[1.6] text-muted max-w-[520px]">
              {t("intro.desc")}
            </p>
          </div>

          <div className="reveal reveal-delay-1 flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.65] text-muted">
            <p>{t("intro.p1")}</p>
            <p>{t("intro.p2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
