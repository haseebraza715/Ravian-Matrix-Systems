"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { Locale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  compact?: boolean;
  className?: string;
};

export default function LanguageSwitcher({ compact = false, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { t, locale, locales } = useTranslation();

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === locale) return;

    // Split pathname to strip out the current language prefix
    const segments = pathname.split("/");
    let pathWithoutLocale = pathname;
    
    // Check if the current route has en or de prefix
    if (segments[1] === "en" || segments[1] === "de") {
      pathWithoutLocale = "/" + segments.slice(2).join("/");
    }

    // Compile new localized path
    const targetPath = `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
    
    // Persist choice
    localStorage.setItem("preferred-language", newLocale);
    
    router.push(targetPath);
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center bg-[#0B1220]/80 backdrop-blur-md border border-[#1E2A40] rounded-lg p-1",
        compact && "rounded-md p-0.5",
        className
      )}
      role="group" 
      aria-label={t("common.changeLanguage")}
    >
      {locales.map((loc) => {
        const isActive = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => handleLanguageChange(loc)}
            aria-current={isActive ? "true" : undefined}
            aria-label={loc === "en" ? t("common.switchToEnglish") : t("common.switchToGerman")}
            className={`font-mono tracking-wider uppercase rounded-md transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#F5C56B]/50 ${
              compact ? "text-[10px] px-2 py-1" : "text-[10px] sm:text-[11px] px-2.5 py-1"
            } ${
              isActive
                ? "bg-[#F5C56B] text-[#05080F] font-bold shadow-[0_2px_8px_rgba(245,197,107,0.2)]"
                : "text-[#9AA6B8] hover:text-[#F2F4F8] hover:bg-white/5"
            }`}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}
