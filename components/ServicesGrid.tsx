"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-card", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-[120px] border-b border-line">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-end mb-16">
          <div>
            <div className="eyebrow">What we build</div>
            <h2 className="font-space text-[clamp(36px,4.2vw,56px)] leading-[1] tracking-[-0.03em] font-medium mt-3.5 max-w-[600px] text-ink">
              Seven disciplines, one delivery team.
            </h2>
          </div>
          <p className="text-muted text-[16px] leading-[1.55] max-w-[440px] m-0">
            We pair GIS specialists with full-stack engineers, so the map, the database, the dashboard, and the deploy pipeline all ship from the same room.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-line rounded-[14px] overflow-hidden bg-paper">
          {services.map((svc, idx) => (
            <div key={idx} className="svc-card p-8 lg:p-9 border-r border-b border-line min-h-[280px] flex flex-col relative transition-colors duration-200 hover:bg-[#FAF6EA] md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0">
              <div className="font-ibm text-[11px] text-muted tracking-[0.08em]">{svc.num}</div>
              
              <div className="my-5 lg:mb-6 w-10 h-10 flex items-center justify-center border border-line rounded-lg bg-bg text-ink">
                <svc.icon size={20} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-medium tracking-[-0.015em] m-0 mb-2.5 text-ink">{svc.title}</h3>
              <p className="text-muted text-[14.5px] leading-[1.55] m-0 mb-4">{svc.desc}</p>
              
              <div className="mt-auto flex flex-wrap gap-1.5">
                {svc.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="font-ibm text-[10px] text-ink2 px-2 py-0.5 border border-line rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
