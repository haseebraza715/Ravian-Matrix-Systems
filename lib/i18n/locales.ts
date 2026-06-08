export type Locale = "en" | "de";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "de"];

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}
