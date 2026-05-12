"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { problems } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".prob-item", {
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
    <section ref={sectionRef} className="py-[120px] border-b border-line relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          
          <div>
            <div className="eyebrow">The problem</div>
            <h2 className="font-space text-[clamp(34px,4vw,52px)] leading-[1.02] tracking-[-0.03em] font-medium mt-4 mb-0 text-ink">
              Your data is everywhere. Your <s className="text-muted decoration-mustard decoration-2">spreadsheets</s> decisions are nowhere.
            </h2>
            <p className="text-muted text-[16px] leading-[1.55] mt-6 max-w-[420px]">
              Most teams don&apos;t have a data problem. They have a <em className="not-italic text-ink font-medium">connected systems</em> problem — fragments of truth scattered across files, drives, drones, and inboxes.
            </p>
          </div>

          <div className="flex flex-col">
            {problems.map((prob, idx) => (
              <div key={idx} className="prob-item grid grid-cols-[60px_1fr_auto] gap-5 py-5 border-b border-line items-start last:border-b-0">
                <div className="font-ibm text-xs text-muted pt-1">{prob.num}</div>
                <div>
                  <h4 className="text-lg m-0 mb-1.5 font-medium tracking-[-0.01em] text-ink">{prob.title}</h4>
                  <p className="m-0 text-muted text-[14.5px] leading-[1.55]">{prob.desc}</p>
                </div>
                <div className="font-ibm text-[10px] text-mustard-ink bg-mustard/10 px-2 py-1 rounded self-start whitespace-nowrap">
                  {prob.tag}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
