"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";

export default function ServiceStrip() {
  const { t, locale, translations } = useTranslation();

  const logos = [
    { name: translations.coreServices.services[0].title, label: "WEB" },
    { name: translations.coreServices.services[1].title, label: "SOFTWARE" },
    { name: translations.coreServices.services[2].title, label: "GEO" },
    { name: translations.coreServices.services[3].title, label: "GROWTH" },
    { name: translations.footer.languagesSupported, label: "LANG" },
    { name: translations.footer.quoteDesc, label: "QUOTE" }
  ];

  return (
    <section className="py-6 bg-bg-surface border-y border-line overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 md:gap-x-12 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted select-none w-full lg:w-auto text-center lg:text-left mb-2 lg:mb-0">
            {locale === "de" ? "KERNBEREICHE" : "CORE SERVICE AREAS"}
          </span>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-8 md:gap-x-12 w-full lg:w-auto flex-grow">
            {logos.map((logo, index) => (
              <span 
                key={index}
                className="font-mono text-xs sm:text-[13px] tracking-widest text-primary font-bold hover:text-gold transition-colors cursor-default"
                title={logo.name}
              >
                {"//" + logo.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
