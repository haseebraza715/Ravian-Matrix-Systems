"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

// Renders `children` (the App Router RSC tree) directly so hydration always matches
// the server output. The gold/dark overlay panels are animated purely via refs on
// route change — we never snapshot `children` into state, which previously caused
// React reconciliation crashes (removeChild/appendChild HierarchyRequestError) during
// hydration and SPA navigation.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const overlayRef = useRef<HTMLDivElement>(null);
  const goldPanelRef = useRef<HTMLDivElement>(null);
  const darkPanelRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the animation on the very first mount (initial page load).
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const overlay = overlayRef.current;
    const gold = goldPanelRef.current;
    const dark = darkPanelRef.current;
    if (!overlay || !gold || !dark) return;

    overlay.style.pointerEvents = "auto";
    gsap.set([gold, dark], { y: "100%" });

    const tl = gsap.timeline({
      onComplete: () => {
        overlay.style.pointerEvents = "none";
      },
    });

    // Panels sweep up to cover the screen, then sweep away to reveal the new route.
    tl.to(gold, { y: "0%", duration: 0.4, ease: "power2.inOut" })
      .to(dark, { y: "0%", duration: 0.4, ease: "power2.inOut" }, "-=0.3")
      .to(dark, { y: "-100%", duration: 0.45, ease: "power2.inOut" }, "+=0.05")
      .to(gold, { y: "-100%", duration: 0.45, ease: "power2.inOut" }, "-=0.35");

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <>
      {children}

      {/* GSAP Transition Overlay Panels */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="fixed inset-0 z-[9999] pointer-events-none w-screen h-screen overflow-hidden"
      >
        <div
          ref={goldPanelRef}
          className="absolute inset-0 bg-gold w-full h-full transform translate-y-full"
        />
        <div
          ref={darkPanelRef}
          className="absolute inset-0 bg-brand-dark w-full h-full transform translate-y-full flex flex-col items-center justify-center border-t border-line"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-gold border-t-transparent animate-spin" />
            <span className="font-mono text-[10px] text-gold tracking-[0.2em] uppercase">RMS_TRANSIT // CONNECTING</span>
          </div>
        </div>
      </div>
    </>
  );
}
