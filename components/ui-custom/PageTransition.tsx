"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayPathname, setDisplayPathname] = useState(pathname);
  const [tempChildren, setTempChildren] = useState<React.ReactNode>(children);
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const goldPanelRef = useRef<HTMLDivElement>(null);
  const darkPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname !== displayPathname) {
      // Trigger transition
      const tl = gsap.timeline({
        onComplete: () => {
          setDisplayPathname(pathname);
          setTempChildren(children);
          
          // Animate panels out
          gsap.timeline()
            .to(darkPanelRef.current, {
              y: "-100%",
              duration: 0.45,
              ease: "power2.inOut",
            })
            .to(goldPanelRef.current, {
              y: "-100%",
              duration: 0.45,
              ease: "power2.inOut",
            }, "-=0.35")
            .set(overlayRef.current, { pointerEvents: "none" });
        }
      });

      if (overlayRef.current) {
        overlayRef.current.style.pointerEvents = "auto";
      }

      // Reset panels to bottom
      gsap.set([goldPanelRef.current, darkPanelRef.current], { y: "100%" });

      // Animate gold panel up, then dark panel up to cover screen
      tl.to(goldPanelRef.current, {
        y: "0%",
        duration: 0.4,
        ease: "power2.inOut"
      })
      .to(darkPanelRef.current, {
        y: "0%",
        duration: 0.4,
        ease: "power2.inOut"
      }, "-=0.3");
    } else {
      // Keep children synchronized
      setTempChildren(children);
    }
  }, [pathname, children, displayPathname]);

  return (
    <>
      <div key={displayPathname}>
        {tempChildren}
      </div>

      {/* GSAP Transition Overlay Panels */}
      <div 
        ref={overlayRef} 
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
