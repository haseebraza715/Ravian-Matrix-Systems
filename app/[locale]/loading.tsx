"use client";

import { usePathname } from "next/navigation";

// Lives inside the [locale] segment so its <div> is rendered within the layout's
// <html><body>. A root-level app/loading.tsx would render directly under #document
// (the root is split into the (root) and [locale] route groups, each with its own
// <html>), which produced a hydration error: "<div> cannot be a child of <#document>".
export default function Loading() {
  const pathname = usePathname();
  const isDe = pathname?.startsWith("/de");
  const label = isDe ? "Daten werden geladen…" : "Loading data…";

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-white/10 border-t-gold rounded-full animate-spin"></div>
        <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">{label}</div>
      </div>
    </div>
  );
}
