import { useParams } from "next/navigation";
import { en } from "./translations/en";
import { de } from "./translations/de";
import { Locale, defaultLocale, locales } from "./locales";

export function useTranslation() {
  const params = useParams();
  
  // Under static export / next build, useParams might return null or undefined initially.
  // In that case, we fallback to defaultLocale.
  const locale = (params?.locale as Locale) || defaultLocale;

  const translations = locale === "de" ? de : en;

  const t = (key: string, variables?: Record<string, string | number>): string => {
    const keys = key.split(".");
    let current: any = translations;

    for (const k of keys) {
      if (current === undefined || current === null) {
        break;
      }
      current = current[k];
    }

    if (typeof current !== "string") {
      // Fallback to English translation
      let englishFallback: any = en;
      for (const k of keys) {
        if (englishFallback === undefined || englishFallback === null) {
          break;
        }
        englishFallback = englishFallback[k];
      }
      if (typeof englishFallback === "string") {
        current = englishFallback;
      } else {
        if (process.env.NODE_ENV === "development") {
          console.warn(`Translation key missing: ${key}`);
        }
        return key;
      }
    }

    let result = current;
    if (variables) {
      Object.entries(variables).forEach(([name, val]) => {
        result = result.replace(new RegExp(`{${name}}`, "g"), String(val));
      });
    }

    return result;
  };

  return { t, locale, locales, translations };
}
export type UseTranslationResponse = ReturnType<typeof useTranslation>;
