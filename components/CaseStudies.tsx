"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".case-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="py-[120px] border-b border-line">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-end mb-16">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2 className="font-space text-[clamp(36px,4.2vw,56px)] leading-[1] tracking-[-0.03em] font-medium mt-3.5 max-w-[600px] text-ink">
              Solutions in production, not in slides.
            </h2>
          </div>
          <p className="text-muted text-[16px] leading-[1.55] max-w-[440px] m-0">
            A small sample of systems we&apos;ve delivered for agriculture, utilities, public sector, and resource teams.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className={`case-card grid grid-cols-1 lg:grid-cols-2 gap-0 border border-line rounded-[14px] bg-paper overflow-hidden ${idx % 2 !== 0 ? 'lg:grid-cols-[1.2fr_1fr]' : 'lg:grid-cols-[1fr_1.2fr]'}`}>
              
              <div className={`p-8 lg:p-11 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-wrap gap-3 items-center mb-5">
                  <span className="font-ibm text-[10px] tracking-[0.1em] uppercase px-2.5 py-1.5 border border-mustard bg-mustard text-[#1A1305] rounded-full">
                    {cs.category}
                  </span>
                  <span className="font-ibm text-[10px] tracking-[0.1em] uppercase px-2.5 py-1.5 border border-line text-ink2 rounded-full">
                    {cs.sector}
                  </span>
                </div>
                
                <h3 className="text-[28px] font-medium tracking-[-0.02em] leading-[1.1] mb-3.5 text-ink text-balance">{cs.title}</h3>
                <p className="text-ink2 text-[15px] leading-[1.55] m-0 mb-6 max-w-[480px] text-muted">{cs.desc}</p>
                
                <div className="flex flex-wrap gap-6 lg:gap-9 pt-5 border-t border-line">
                  {cs.stats.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <div className="font-ibm text-[10px] tracking-[0.1em] uppercase text-muted">{stat.label}</div>
                      <div className="text-[22px] font-medium tracking-[-0.02em] mt-1 text-ink">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual rendering based on type */}
              <div className={`relative bg-bg2 min-h-[340px] flex overflow-hidden border-t lg:border-t-0 ${idx % 2 !== 0 ? 'lg:order-0 lg:border-r border-line' : 'lg:border-l border-line'}`}>
                {cs.visualType === "map" ? (
                  <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid slice" className="w-full h-full block absolute inset-0">
                    <rect width="480" height="340" fill="#E8E1CF"/>
                    <defs>
                      <pattern id={`caseGrid${idx}`} width="32" height="32" patternUnits="userSpaceOnUse">
                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(14,14,12,0.07)" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="480" height="340" fill={`url(#caseGrid${idx})`}/>
                    <g stroke="#8C6E1F" strokeWidth="0.8">
                      <rect x="30" y="30" width="80" height="60" fill="rgba(212,178,84,0.5)"/>
                      <rect x="115" y="30" width="60" height="60" fill="rgba(184,144,42,0.45)"/>
                      <rect x="180" y="30" width="100" height="60" fill="rgba(140,110,31,0.4)"/>
                      <rect x="285" y="30" width="70" height="60" fill="rgba(212,178,84,0.3)"/>
                      <rect x="360" y="30" width="90" height="60" fill="rgba(184,144,42,0.6)"/>
                      <rect x="30" y="95" width="100" height="80" fill="rgba(184,144,42,0.55)"/>
                      <rect x="135" y="95" width="80" height="80" fill="rgba(212,178,84,0.4)"/>
                      <rect x="220" y="95" width="70" height="80" fill="rgba(140,110,31,0.5)"/>
                      <rect x="295" y="95" width="90" height="80" fill="rgba(212,178,84,0.45)"/>
                      <rect x="390" y="95" width="60" height="80" fill="rgba(184,144,42,0.35)"/>
                      <rect x="30" y="180" width="70" height="70" fill="rgba(212,178,84,0.6)"/>
                      <rect x="105" y="180" width="90" height="70" fill="rgba(184,144,42,0.4)"/>
                      <rect x="200" y="180" width="80" height="70" fill="rgba(140,110,31,0.45)"/>
                      <rect x="285" y="180" width="60" height="70" fill="rgba(212,178,84,0.5)"/>
                      <rect x="350" y="180" width="100" height="70" fill="rgba(184,144,42,0.5)"/>
                    </g>
                    <path d="M 0 90 Q 240 100 480 95" fill="none" stroke="#0E0E0C" strokeWidth="2"/>
                    <path d="M 0 255 Q 240 260 480 250" fill="none" stroke="#0E0E0C" strokeWidth="1.6"/>
                    <path d="M 160 0 L 175 340" fill="none" stroke="#0E0E0C" strokeWidth="1.2"/>
                    <rect x="220" y="95" width="70" height="80" fill="none" stroke="#0E0E0C" strokeWidth="2" strokeDasharray="4 3"/>
                    <g transform="translate(20,310)">
                      <rect width="160" height="22" rx="3" fill="rgba(246,242,231,0.9)" stroke="rgba(14,14,12,0.14)"/>
                      <text x="10" y="15" fontFamily="var(--font-ibm-plex-mono)" fontSize="10" fill="#6B655B">−14.236, 28.847 · ZOOM 11</text>
                    </g>
                    <g transform="translate(345,15)">
                      <rect width="115" height="44" rx="6" fill="rgba(246,242,231,0.95)" stroke="rgba(14,14,12,0.14)"/>
                      <text x="10" y="16" fontFamily="var(--font-ibm-plex-mono)" fontSize="9" fill="#6B655B">NDVI · 06 MAY 2026</text>
                      <text x="10" y="34" fontFamily="var(--font-geist-sans), sans-serif" fontSize="15" fontWeight="600" fill="#0E0E0C">0.71 ▲</text>
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 480 340" preserveAspectRatio="xMidYMid slice" className="w-full h-full block absolute inset-0">
                    <rect width="480" height="340" fill="#F6F2E7"/>
                    <g>
                      <rect x="20" y="20" width="135" height="78" rx="8" fill="#FFF" stroke="rgba(14,14,12,0.14)"/>
                      <text x="32" y="42" fontFamily="var(--font-ibm-plex-mono)" fontSize="9" fill="#6B655B">FLOW · L/S</text>
                      <text x="32" y="72" fontFamily="var(--font-geist-sans), sans-serif" fontSize="24" fontWeight="600" fill="#0E0E0C">428.4</text>
                      <text x="32" y="90" fontFamily="var(--font-ibm-plex-mono)" fontSize="9" fill="#6E5618">▲ 2.1%</text>

                      <rect x="170" y="20" width="135" height="78" rx="8" fill="#FFF" stroke="rgba(14,14,12,0.14)"/>
                      <text x="182" y="42" fontFamily="var(--font-ibm-plex-mono)" fontSize="9" fill="#6B655B">PRESSURE · BAR</text>
                      <text x="182" y="72" fontFamily="var(--font-geist-sans), sans-serif" fontSize="24" fontWeight="600" fill="#0E0E0C">4.2</text>
                      <text x="182" y="90" fontFamily="var(--font-ibm-plex-mono)" fontSize="9" fill="#6B655B">NORMAL</text>

                      <rect x="320" y="20" width="135" height="78" rx="8" fill="#FFF" stroke="rgba(14,14,12,0.14)"/>
                      <text x="332" y="42" fontFamily="var(--font-ibm-plex-mono)" fontSize="9" fill="#6B655B">ACTIVE ALERTS</text>
                      <text x="332" y="72" fontFamily="var(--font-geist-sans), sans-serif" fontSize="24" fontWeight="600" fill="#B23B3B">3</text>
                      
                      <rect x="20" y="115" width="435" height="205" rx="8" fill="#FFF" stroke="rgba(14,14,12,0.14)"/>
                      <path d="M 20 150 L 455 150" fill="none" stroke="rgba(14,14,12,0.07)" strokeWidth="1"/>
                      <path d="M 20 185 L 455 185" fill="none" stroke="rgba(14,14,12,0.07)" strokeWidth="1"/>
                      <path d="M 20 220 L 455 220" fill="none" stroke="rgba(14,14,12,0.07)" strokeWidth="1"/>
                      <path d="M 20 255 L 455 255" fill="none" stroke="rgba(14,14,12,0.07)" strokeWidth="1"/>
                      <path d="M 20 290 L 455 290" fill="none" stroke="rgba(14,14,12,0.07)" strokeWidth="1"/>
                      
                      <path d="M 20 260 Q 100 240 180 200 T 320 250 T 455 180" fill="none" stroke="#D8A72A" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M 20 280 Q 120 260 200 280 T 350 200 T 455 220" fill="none" stroke="#2A2823" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                      
                      <circle cx="280" cy="225" r="4" fill="#B23B3B"/>
                      <circle cx="280" cy="225" r="10" fill="none" stroke="#B23B3B" opacity="0.5"/>
                    </g>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
