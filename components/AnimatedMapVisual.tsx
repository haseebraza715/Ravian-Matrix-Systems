"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedMapVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating elements animation
      gsap.to(".vis-overlay", {
        y: -10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.5
      });
      
      // Ping map markers
      gsap.to(".map-ping", {
        scale: 1.8,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out"
      });
    }, visualRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={visualRef} className="relative border border-line bg-paper rounded-[14px] overflow-hidden shadow-[0_1px_0_rgba(14,14,12,0.04),0_30px_60px_-30px_rgba(14,14,12,0.20)] h-full min-h-[520px] flex flex-col">
      {/* Chrome header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-line bg-[#EEE8D8]">
        <div className="flex gap-1.5">
          <span className="w-[9px] h-[9px] rounded-full bg-ink/20"></span>
          <span className="w-[9px] h-[9px] rounded-full bg-ink/20"></span>
          <span className="w-[9px] h-[9px] rounded-full bg-ink/20"></span>
        </div>
        <div className="font-ibm text-[11px] text-muted">app.signalgrid.studio / atlas / region-04</div>
        <div className="font-ibm text-[10px] text-muted flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4A8F4A] shadow-[0_0_0_3px_rgba(74,143,74,0.15)] block"></span>
          Live
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-[200px_1fr]">
        {/* Sidebar */}
        <aside className="border-r border-line p-4 bg-[#F2ECDC] flex flex-col gap-5 hidden sm:flex">
          <div>
            <h4 className="font-ibm text-[10px] tracking-[0.14em] uppercase text-muted font-medium mb-2.5">Layers</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-ink2">
                <span className="w-2.5 h-2.5 rounded-[2px] shrink-0 bg-mustard"></span> Parcels <span className="ml-auto font-ibm text-[10px] text-muted">●</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ink2">
                <span className="w-2.5 h-2.5 rounded-[2px] shrink-0 bg-ink2"></span> Roads <span className="ml-auto font-ibm text-[10px] text-muted">●</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ink2">
                <span className="w-2.5 h-2.5 rounded-[2px] shrink-0 bg-muted"></span> Hydrology <span className="ml-auto font-ibm text-[10px] text-muted">●</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ink2">
                <span className="w-2.5 h-2.5 rounded-[2px] shrink-0 bg-mustard2"></span> NDVI 2024 <span className="ml-auto font-ibm text-[10px] text-muted">●</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ink2 opacity-50">
                <span className="w-2.5 h-2.5 rounded-[2px] shrink-0 bg-bg2 border border-line"></span> Contours <span className="ml-auto font-ibm text-[10px] text-muted">○</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-ibm text-[10px] tracking-[0.14em] uppercase text-muted font-medium mb-2.5">KPIs</h4>
            <div className="flex flex-col gap-2">
              <div className="border border-line bg-paper p-2.5 rounded-lg">
                <div className="font-ibm text-[9px] tracking-[0.1em] uppercase text-muted">Vegetated area</div>
                <div className="text-xl font-semibold tracking-[-0.02em] mt-0.5">14.2 km²</div>
                <div className="font-ibm text-[10px] text-mustard-ink mt-1">+2.4% vs 2023</div>
              </div>
              <div className="border border-line bg-paper p-2.5 rounded-lg">
                <div className="font-ibm text-[9px] tracking-[0.1em] uppercase text-muted">Active parcels</div>
                <div className="text-xl font-semibold tracking-[-0.02em] mt-0.5">1,284</div>
                <div className="font-ibm text-[10px] text-mustard-ink mt-1">+38 this week</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Map Area */}
        <div className="relative bg-[#EFE9D9] overflow-hidden min-h-[400px]">
          <div className="absolute top-2.5 left-2.5 font-ibm text-[10px] text-muted bg-[#F6F2E7]/90 px-1.5 py-1 border border-line rounded z-10 backdrop-blur-sm">37.7849° N, 122.4294° W</div>
          <div className="absolute bottom-2.5 right-2.5 font-ibm text-[10px] text-muted bg-[#F6F2E7]/90 px-1.5 py-1 border border-line rounded z-10 backdrop-blur-sm">37.7649° N, 122.4094° W</div>
          
          <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" className="w-full h-full block absolute inset-0">
            <defs>
              <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(14,14,12,0.07)" strokeWidth="1"/>
              </pattern>
              <pattern id="mapDots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.6" fill="rgba(14,14,12,0.15)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapDots)"/>
            <rect width="100%" height="100%" fill="url(#mapGrid)"/>

            {/* Contour lines */}
            <g fill="none" stroke="rgba(14,14,12,0.18)" strokeWidth="0.8">
              <path d="M 0 380 Q 120 340 220 360 T 440 320 T 600 340"/>
              <path d="M 0 340 Q 130 290 240 310 T 460 270 T 600 290"/>
              <path d="M 0 300 Q 140 250 260 270 T 470 220 T 600 240"/>
              <path d="M 40 260 Q 160 220 280 230 T 480 180 T 600 200"/>
              <path d="M 100 220 Q 200 190 320 200 T 500 150 T 600 170"/>
              <path d="M 160 180 Q 240 160 350 170 T 520 130 T 600 140"/>
              <path d="M 220 150 Q 290 130 380 140 T 540 110 T 600 115"/>
            </g>

            {/* Hydrology */}
            <path d="M 0 460 Q 100 440 180 450 Q 260 460 340 430 Q 420 400 520 410 L 600 405" fill="none" stroke="rgba(80,110,140,0.5)" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M 180 450 Q 220 480 260 500" fill="none" stroke="rgba(80,110,140,0.4)" strokeWidth="1.4" strokeLinecap="round"/>

            {/* Roads */}
            <path d="M 0 250 L 240 230 L 360 280 L 600 260" fill="none" stroke="#2A2823" strokeWidth="1.8"/>
            <path d="M 120 0 L 140 180 L 160 380 L 200 520" fill="none" stroke="#2A2823" strokeWidth="1.4"/>
            <path d="M 440 0 L 420 180 L 450 320 L 480 520" fill="none" stroke="#2A2823" strokeWidth="1.4"/>

            {/* Parcels */}
            <g fill="rgba(216,167,42,0.30)" stroke="#D8A72A" strokeWidth="1">
              <polygon points="160,200 220,210 215,275 155,265"/>
              <polygon points="230,215 300,225 295,290 225,278"/>
              <polygon points="320,235 400,245 395,310 315,300"/>
              <polygon points="160,290 215,300 210,360 155,350"/>
              <polygon points="230,305 305,315 300,380 225,370"/>
            </g>
            <g fill="rgba(216,167,42,0.55)" stroke="#6E5618" strokeWidth="1.2">
              <polygon points="320,325 400,335 395,400 315,390"/>
            </g>

            {/* NDVI patch */}
            <g fill="rgba(246,227,161,0.35)" stroke="rgba(110,86,24,0.5)" strokeWidth="0.8" strokeDasharray="3 3">
              <polygon points="420,180 530,170 540,260 430,270"/>
            </g>

            {/* Map pins */}
            <g>
              <circle cx="358" cy="362" r="6" fill="#D8A72A" stroke="#101010" strokeWidth="1.2"/>
              <circle className="map-ping origin-[358px_362px]" cx="358" cy="362" r="12" fill="none" stroke="#D8A72A" strokeWidth="1" opacity="0.5"/>
            </g>
            <circle cx="478" cy="220" r="4" fill="#101010"/>
            <circle cx="185" cy="240" r="4" fill="#101010"/>

            {/* Crosshair selection */}
            <g stroke="#101010" strokeWidth="0.8" fill="none">
              <rect x="318" y="322" width="80" height="80" strokeDasharray="4 4"/>
              <line x1="358" y1="312" x2="358" y2="332"/>
              <line x1="358" y1="392" x2="358" y2="412"/>
              <line x1="308" y1="362" x2="328" y2="362"/>
              <line x1="388" y1="362" x2="408" y2="362"/>
            </g>
          </svg>

          {/* Floating Overlays */}
          <div className="vis-overlay absolute top-3.5 right-3.5 w-[170px] bg-[#F6F2E7]/95 border border-line rounded-lg p-2.5 backdrop-blur-md">
            <div className="font-ibm text-[9px] tracking-[0.1em] uppercase text-muted">Selected parcel</div>
            <div className="text-[13px] font-semibold tracking-[-0.01em] mt-0.5">P-04 · 2.7 ha</div>
            <div className="flex justify-between mt-2 font-ibm text-[11px] text-ink2">
              <span>NDVI</span><span>0.62</span>
            </div>
            <div className="flex justify-between font-ibm text-[11px] text-ink2">
              <span>Slope</span><span>3.4°</span>
            </div>
            <div className="flex justify-between font-ibm text-[11px] text-ink2">
              <span>Updated</span><span>2h ago</span>
            </div>
          </div>

          <div className="vis-overlay absolute bottom-3.5 left-3.5 w-[200px] bg-[#F6F2E7]/95 border border-line rounded-lg p-2.5 backdrop-blur-md">
            <div className="font-ibm text-[9px] tracking-[0.1em] uppercase text-muted">NDVI · last 12 months</div>
            <div className="flex items-end gap-[2px] h-[34px] mt-1.5">
              {[30, 42, 48, 55, 68, 72, 85, 78, 64, 58, 50, 62].map((h, i) => (
                <span key={i} className="flex-1 bg-mustard rounded-[1px] opacity-85" style={{ height: `${h}%` }}></span>
              ))}
            </div>
            <div className="flex justify-between mt-2 font-ibm text-[10px] text-muted">
              <span>JAN</span><span>JUL</span><span>DEC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
