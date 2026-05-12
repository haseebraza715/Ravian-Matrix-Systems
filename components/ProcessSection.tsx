"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proc-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-[120px] bg-bg2 border-b border-line">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-line pt-8 lg:pt-0 lg:border-t-0">
          {processSteps.map((step, idx) => (
            <div key={idx} className="proc-item p-0 py-8 lg:py-8 lg:px-7 border-b lg:border-b-0 lg:border-r border-line last:border-0 lg:first:pl-0 lg:last:pr-0 relative">
              <div className="font-ibm text-[11px] text-mustard-ink tracking-[0.1em] flex items-center gap-2.5 mb-6">
                <span>{step.num}</span>
                <div className="flex-1 h-[1px] bg-line"></div>
              </div>
              <h4 className="text-[22px] font-medium tracking-[-0.02em] m-0 mb-3 leading-[1.1] text-ink">{step.title}</h4>
              <p className="text-[14px] text-muted leading-[1.55] m-0 mb-4.5 min-h-[66px]">{step.desc}</p>
              <div className="font-ibm text-[11px] text-ink2 px-2.5 py-1.5 border border-line rounded-full inline-block bg-paper">
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
