"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pipelineSteps } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function DataPipeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      tl.from(".pipe-step", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      })
      .from(".pipe-arrow", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.4,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark text-[#F1ECDF] py-[120px] relative overflow-hidden">
      {/* Dark background grid */}
      <div className="absolute inset-0 bg-[image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" style={{ maskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="font-ibm text-[11px] tracking-[0.14em] uppercase text-dark-mute inline-flex items-center gap-[10px]">
              <span className="w-1.5 h-1.5 bg-mustard2 rotate-45 block"></span>
              The Signal Grid method
            </div>
            <h2 className="font-space text-[clamp(36px,4.2vw,56px)] leading-[1] tracking-[-0.03em] font-medium mt-3.5 max-w-[600px] text-[#F1ECDF]">
              From raw data to decision — in one continuous pipeline.
            </h2>
          </div>
          <p className="text-dark-mute text-[16px] leading-[1.55] max-w-[440px] m-0">
            Every project we ship follows the same backbone: collect inputs of every kind, model them in one place, and put the result in front of the people who need to act.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-[18px] mt-8">
          {pipelineSteps.map((step, idx) => (
            <div key={idx} className="pipe-step border border-dark-line bg-white/5 rounded-xl p-5 pb-6 min-h-[220px] flex flex-col relative backdrop-blur-sm">
              <div className="font-ibm text-[10px] text-mustard2 tracking-[0.12em] uppercase">{step.stage}</div>
              <h4 className="text-[17px] font-medium mt-3 mb-2 tracking-[-0.01em] text-white">{step.title}</h4>
              <p className="text-[13px] text-dark-mute leading-[1.5] m-0 mb-3.5">{step.desc}</p>
              
              <div className="mt-auto flex flex-col gap-1.5">
                {step.items.map((item, i) => (
                  <span key={i} className="font-ibm text-[10.5px] text-white/75 flex items-center gap-[7px]">
                    <span className="text-mustard2 leading-none">›</span> {item}
                  </span>
                ))}
              </div>

              {/* Arrow linking to next step (hidden on mobile/tablet) */}
              {idx < pipelineSteps.length - 1 && (
                <div className="pipe-arrow absolute top-1/2 -right-[18px] w-[18px] h-[1px] bg-dark-line -translate-y-1/2 hidden lg:block z-0">
                  <div className="absolute right-0 top-1/2 w-[5px] h-[5px] border-r border-t border-mustard2 -translate-y-1/2 rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-dark-line pt-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="font-ibm text-4xl font-medium tracking-[-0.02em] text-[#F1ECDF]"><em className="not-italic text-mustard2">62</em></div>
            <div className="text-[13px] text-dark-mute mt-1.5">production systems shipped</div>
          </div>
          <div className="flex flex-col">
            <div className="font-ibm text-4xl font-medium tracking-[-0.02em] text-[#F1ECDF]"><em className="not-italic text-mustard2">14</em></div>
            <div className="text-[13px] text-dark-mute mt-1.5">countries with deployments</div>
          </div>
          <div className="flex flex-col">
            <div className="font-ibm text-4xl font-medium tracking-[-0.02em] text-[#F1ECDF]"><em className="not-italic text-mustard2">8wks</em></div>
            <div className="text-[13px] text-dark-mute mt-1.5">median time to production</div>
          </div>
          <div className="flex flex-col">
            <div className="font-ibm text-4xl font-medium tracking-[-0.02em] text-[#F1ECDF]"><em className="not-italic text-mustard2">99.95<small className="text-[0.5em]">%</small></em></div>
            <div className="text-[13px] text-dark-mute mt-1.5">uptime across hosted platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
}
