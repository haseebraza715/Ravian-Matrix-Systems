"use client";

import { useRouter } from "next/navigation";
import { Locale } from "@/lib/i18n/locales";

interface ServiceSelectProps {
  locale: Locale;
  options: { label: string; value: string }[];
  chooseLabel: string;
  placeholder: string;
}

export default function ServiceSelect({ locale, options, chooseLabel, placeholder }: ServiceSelectProps) {
  const router = useRouter();

  return (
    <label className="max-w-[420px] flex flex-col gap-2">
      <span className="font-mono text-xs tracking-widest uppercase text-gold">{chooseLabel}</span>
      <select
        className="border border-line rounded-lg px-4 py-3 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all cursor-pointer"
        defaultValue=""
        onChange={(event) => {
          if (event.target.value) {
            router.push(`/${locale}${event.target.value}`);
          }
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-bg-base text-primary">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
