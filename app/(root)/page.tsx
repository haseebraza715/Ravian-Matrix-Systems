"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Root `/` is intentionally `noindex, follow` (see app/(root)/layout.tsx) so it does
// not compete with /en and /de in search results. It client-redirects to the visitor's
// preferred locale, but must stay usable without JavaScript — hence the visible
// fallback links below and the <noscript> message.
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Look up persistent language setting
    const preferredLang = localStorage.getItem("preferred-language");
    if (preferredLang === "de" || preferredLang === "en") {
      router.replace(`/${preferredLang}`);
      return;
    }

    // Fall back to browser preferred locale
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "de") {
      router.replace("/de");
    } else {
      router.replace("/en");
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center gap-6 px-6 text-center">
      {/* Sleek branded loader */}
      <div className="w-10 h-10 rounded-full border-2 border-[#1E2A40] border-t-[#F5C56B] animate-spin" />
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9AA6B8]">
        Routing…
      </span>

      {/* Fallback shown when JS is disabled / before redirect completes */}
      <noscript>
        <p className="text-[13px] text-[#9AA6B8] mb-1">
          Please choose your language / Bitte wählen Sie Ihre Sprache:
        </p>
      </noscript>

      {/* Accessible language links — always rendered so crawlers and no-JS users can proceed */}
      <nav aria-label="Choose language" className="flex items-center gap-3">
        <a
          href="/en"
          className="font-mono text-[11px] uppercase tracking-wider px-4 py-2 rounded-md border border-[#1E2A40] text-[#F2F4F8] hover:border-[#F5C56B] hover:text-[#F5C56B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5C56B]/50"
        >
          English site
        </a>
        <a
          href="/de"
          className="font-mono text-[11px] uppercase tracking-wider px-4 py-2 rounded-md border border-[#1E2A40] text-[#F2F4F8] hover:border-[#F5C56B] hover:text-[#F5C56B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5C56B]/50"
        >
          Deutsche Website
        </a>
      </nav>
    </div>
  );
}
