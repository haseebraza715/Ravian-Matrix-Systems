"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { serviceTags } from "@/data/content";

export default function ServiceStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite marquee animation
      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  // Double the tags to ensure seamless looping
  const repeatedTags = [...serviceTags, ...serviceTags, ...serviceTags, ...serviceTags];

  return (
    <section ref={containerRef} className="border-y border-line bg-bg2 overflow-hidden flex whitespace-nowrap py-4.5">
      <div ref={trackRef} className="flex items-center gap-0 w-max">
        {repeatedTags.map((tag, i) => (
          <div key={i} className="px-7 border-r border-line-soft font-ibm text-xs tracking-[0.06em] uppercase text-ink2 flex items-center gap-2.5">
            <span className="text-[8px] text-mustard">◆</span>
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}
