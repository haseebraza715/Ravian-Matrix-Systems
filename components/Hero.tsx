"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { siteConfig } from "@/data/content";
import AnimatedMapVisual from "./AnimatedMapVisual";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      const tl = gsap.timeline();
      
      tl.from(".hero-element", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 overflow-hidden">
      <div className="bg-grid"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="eyebrow hero-element mb-7">{siteConfig.tagline}</div>
            
            <h1 className="hero-element font-sans text-[clamp(40px,5.4vw,76px)] leading-[0.98] tracking-[-0.035em] font-medium m-0 mb-6 text-balance text-ink">
              Digital systems for businesses that depend on <em className="not-italic text-mustard-ink relative whitespace-nowrap z-10">
                data
                <span className="absolute left-0 right-0 bottom-[0.06em] h-[0.18em] bg-mustard opacity-35 -z-10"></span>
              </em>, <em className="not-italic text-mustard-ink relative whitespace-nowrap z-10">
                maps
                <span className="absolute left-0 right-0 bottom-[0.06em] h-[0.18em] bg-mustard opacity-35 -z-10"></span>
              </em>, and <em className="not-italic text-mustard-ink relative whitespace-nowrap z-10">
                automation
                <span className="absolute left-0 right-0 bottom-[0.06em] h-[0.18em] bg-mustard opacity-35 -z-10"></span>
              </em>.
            </h1>
            
            <p className="hero-element text-[18px] leading-[1.5] color-ink2 max-w-[560px] m-0 mb-9 text-muted">
              {siteConfig.description}
            </p>
            
            <div className="hero-element flex flex-wrap gap-3 items-center mb-12">
              <Link href="#contact" className="btn btn-primary group">
                Start a project <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
              <Link href="#work" className="btn btn-ghost">
                Explore services
              </Link>
            </div>
            
            <div className="hero-element flex flex-wrap gap-10 mt-auto pt-7 border-t border-line max-w-[520px]">
              {siteConfig.metrics.map((metric, idx) => (
                <div key={idx} className="flex-1 min-w-[120px]">
                  <div className="font-ibm text-[11px] tracking-[0.12em] uppercase text-muted mb-1.5">{metric.label}</div>
                  <div className="text-[15px] text-ink font-medium">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Visual) */}
          <div className="hero-element">
            <AnimatedMapVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
