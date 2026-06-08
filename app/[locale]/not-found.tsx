"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { Link } from "@/lib/i18n/Link";

export default function NotFound() {
  const { t } = useTranslation();

  // Localized headline ("Signal Lost" / "Verbindung unterbrochen") with the
  // brand two-tone styling: first word emphasised, remainder muted.
  const headline = t("common.signalLost");
  const [headlineFirst, ...headlineRest] = headline.split(" ");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 sm:px-8 text-center">
      <div className="font-mono text-gold text-[12.5px] tracking-widest uppercase mb-4">
        {t("common.error404")}
      </div>
      <h1 className="text-[clamp(36px,5.5vw,56px)] font-display font-semibold leading-none mb-6 text-primary tracking-tight">
        {headlineFirst}
        {headlineRest.length > 0 && (
          <span className="text-white/20"> {headlineRest.join(" ")}</span>
        )}
      </h1>
      <p className="text-muted mb-8 max-w-[400px] text-[15px] leading-relaxed">
        {t("common.notFoundDesc")}
      </p>
      <Link 
        href="/" 
        className="btn bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 text-primary transition-all text-sm px-6 py-3 rounded-lg"
      >
        {t("common.returnToGlobalView")}
      </Link>
    </div>
  );
}
