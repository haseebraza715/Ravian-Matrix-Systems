"use client";

import { Link } from "@/lib/i18n/Link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import dynamic from "next/dynamic";
import { useTranslation } from "@/lib/i18n/useTranslation";

const InteractiveGlobe = dynamic(() => import("@/components/ui-custom/InteractiveGlobe"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

export default function Hero() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-bg-base min-h-[80vh] lg:min-h-[92vh] flex items-center justify-center pt-24 pb-16 sm:pb-20" ref={ref}>
      {/* 3D Interactive Canvas Globe in Background - Centered, hidden on mobile */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden lg:block mask-radial-center opacity-30">
        <InteractiveGlobe />
      </div>

      {/* Ambient gold background glow for mobile/tablet instead of 3D globe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gold/[0.03] rounded-full blur-[80px] pointer-events-none z-0 lg:hidden" />

      {/* Ambient champagne radial glow top-left behind H1 */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Grid ambient overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(30,42,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,64,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start max-w-[860px] mx-auto lg:mx-0">
          <div className="reveal eyebrow mb-6">{t("hero.eyebrow")}</div>

          {/* Punch headline — sized to feel confident but not eat the page */}
          <h1 
            className="reveal reveal-delay-1 font-display font-semibold text-balance text-primary tracking-[-0.03em] leading-[1.18] mb-7 text-[clamp(40px,5.5vw,72px)]"
            dangerouslySetInnerHTML={{ __html: t("hero.titleHtml") }}
          />

          <p className="reveal reveal-delay-2 text-[15px] sm:text-[16px] leading-[1.65] max-w-[650px] mb-8 text-muted">
            {t("hero.description")}
          </p>

          <div className="reveal reveal-delay-3 flex flex-row items-center justify-center lg:justify-start gap-6 flex-wrap">
            <Link href="/request-quote" className="btn btn-primary">
               {t("common.requestQuote")} <span className="arrow">→</span>
            </Link>
            <Link href="/services" className="group text-[14px] font-semibold text-muted hover:text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
              {t("common.exploreServices")} <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Image Showcase */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative group max-w-[480px] w-full">
            {/* Golden/blue neon aura backdrop glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 via-signal/15 to-gold/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-85 transition duration-1000 group-hover:duration-200 pointer-events-none" />

            {/* Border frame */}
            <div className="relative rounded-2xl overflow-hidden border border-line bg-brand-dark/40 p-2.5 backdrop-blur-sm shadow-[0_20px_50px_rgba(5,8,15,0.8)]">
              <Image
                src="/hero-geospatial.jpg"
                alt="Geospatial Intelligence & IT Dashboard"
                width={600}
                height={600}
                className="w-full aspect-[4/3] xs:aspect-square lg:aspect-square object-cover rounded-xl border border-line/40 transition-all duration-700 group-hover:scale-[1.01]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue — separated from content stack so positioning is clean */}
      <div className="flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none select-none animate-bounce z-10">
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted/60 uppercase">{t("common.scroll")}</span>
        <svg className="w-4 h-4 text-gold/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
