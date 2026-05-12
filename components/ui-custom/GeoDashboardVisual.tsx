"use client";

export default function GeoDashboardVisual() {
  return (
    <div className="relative border border-line bg-paper rounded-[14px] overflow-hidden shadow-[0_1px_0_rgba(10,23,51,0.04),_0_30px_60px_-30px_rgba(10,23,51,0.20)] w-full">
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-line bg-bg-2">
        <div className="flex gap-1.5">
          <span className="w-[9px] h-[9px] rounded-full bg-ink/10"></span>
          <span className="w-[9px] h-[9px] rounded-full bg-ink/10"></span>
          <span className="w-[9px] h-[9px] rounded-full bg-ink/10"></span>
        </div>
        <div className="font-mono text-[11px] text-muted">app.ravianmatrix.de / regional / workspace</div>
        <div className="font-mono text-[10px] text-muted flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4A8F4A] shadow-[0_0_0_3px_rgba(74,143,74,0.15)]"></span>
          Live
        </div>
      </div>
      <div className="grid grid-cols-[200px_1fr] min-h-[520px] max-md:grid-cols-1">
        <aside className="border-r border-line p-3.5 flex flex-col gap-4 bg-bg-2 max-md:hidden">
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted m-0 font-medium">Layers</h4>
            <div className="flex flex-col gap-1.5 mt-2.5">
              <div className="flex items-center gap-2 text-[12px] text-ink-2"><span className="w-2.5 h-2.5 rounded-sm bg-mustard shrink-0"></span> Parcels <span className="ml-auto font-mono text-[10px] text-muted">●</span></div>
              <div className="flex items-center gap-2 text-[12px] text-ink-2"><span className="w-2.5 h-2.5 rounded-sm bg-ink-2 shrink-0"></span> Roads <span className="ml-auto font-mono text-[10px] text-muted">●</span></div>
              <div className="flex items-center gap-2 text-[12px] text-ink-2"><span className="w-2.5 h-2.5 rounded-sm bg-muted shrink-0"></span> Hydrology <span className="ml-auto font-mono text-[10px] text-muted">●</span></div>
              <div className="flex items-center gap-2 text-[12px] text-ink-2"><span className="w-2.5 h-2.5 rounded-sm bg-mustard-2 shrink-0"></span> NDVI 2026 <span className="ml-auto font-mono text-[10px] text-muted">●</span></div>
              <div className="flex items-center gap-2 text-[12px] text-ink-2 opacity-50"><span className="w-2.5 h-2.5 rounded-sm bg-bg-2 border border-line shrink-0"></span> Contours <span className="ml-auto font-mono text-[10px] text-muted">○</span></div>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted m-0 font-medium">KPIs</h4>
            <div className="flex flex-col gap-2 mt-2.5">
              <div className="border border-line bg-paper px-3 py-2.5 rounded-lg">
                <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">Analyzed area</div>
                <div className="text-[20px] font-semibold tracking-[-0.02em] mt-0.5">14.2 km²</div>
                <div className="font-mono text-[10px] text-mustard-ink">+2.4% vs 2025</div>
              </div>
              <div className="border border-line bg-paper px-3 py-2.5 rounded-lg">
                <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">Active zones</div>
                <div className="text-[20px] font-semibold tracking-[-0.02em] mt-0.5">1,284</div>
                <div className="font-mono text-[10px] text-mustard-ink">+38 this week</div>
              </div>
            </div>
          </div>
        </aside>

        <div className="relative bg-bg overflow-hidden min-h-[400px]">
          <div className="absolute top-2.5 left-2.5 font-mono text-[10px] text-muted bg-paper/90 px-1.5 py-1 border border-line rounded-md z-10 backdrop-blur-sm">48.1351° N, 11.5820° E</div>
          <div className="absolute bottom-2.5 right-2.5 font-mono text-[10px] text-muted bg-paper/90 px-1.5 py-1 border border-line rounded-md z-10 backdrop-blur-sm">48.1151° N, 11.5620° E</div>
          
          <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" className="w-full h-full block min-h-[520px]">
            <defs>
              <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(10,23,51,0.05)" strokeWidth="1"/>
              </pattern>
              <pattern id="mapDots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.6" fill="rgba(10,23,51,0.15)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#F8F9FA"/>
            <rect width="100%" height="100%" fill="url(#mapDots)"/>
            <rect width="100%" height="100%" fill="url(#mapGrid)"/>

            <g fill="none" stroke="rgba(10,23,51,0.1)" strokeWidth="0.8">
              <path d="M 0 380 Q 120 340 220 360 T 440 320 T 600 340"/>
              <path d="M 0 340 Q 130 290 240 310 T 460 270 T 600 290"/>
              <path d="M 0 300 Q 140 250 260 270 T 470 220 T 600 240"/>
              <path d="M 40 260 Q 160 220 280 230 T 480 180 T 600 200"/>
              <path d="M 100 220 Q 200 190 320 200 T 500 150 T 600 170"/>
              <path d="M 160 180 Q 240 160 350 170 T 520 130 T 600 140"/>
              <path d="M 220 150 Q 290 130 380 140 T 540 110 T 600 115"/>
            </g>

            <path d="M 0 460 Q 100 440 180 450 Q 260 460 340 430 Q 420 400 520 410 L 600 405" fill="none" stroke="rgba(80,110,140,0.5)" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M 180 450 Q 220 480 260 500" fill="none" stroke="rgba(80,110,140,0.4)" strokeWidth="1.4" strokeLinecap="round"/>

            <path d="M 0 250 L 240 230 L 360 280 L 600 260" fill="none" stroke="#1E2D4A" strokeWidth="1.8"/>
            <path d="M 120 0 L 140 180 L 160 380 L 200 520" fill="none" stroke="#1E2D4A" strokeWidth="1.4"/>
            <path d="M 440 0 L 420 180 L 450 320 L 480 520" fill="none" stroke="#1E2D4A" strokeWidth="1.4"/>

            <g fill="rgba(197,157,69,0.30)" stroke="#C59D45" strokeWidth="1">
              <polygon points="160,200 220,210 215,275 155,265"/>
              <polygon points="230,215 300,225 295,290 225,278"/>
              <polygon points="320,235 400,245 395,310 315,300"/>
              <polygon points="160,290 215,300 210,360 155,350"/>
              <polygon points="230,305 305,315 300,380 225,370"/>
            </g>
            <g fill="rgba(197,157,69,0.55)" stroke="#C59D45" strokeWidth="1.2">
              <polygon points="320,325 400,335 395,400 315,390"/>
            </g>

            <g fill="rgba(216,181,100,0.35)" stroke="rgba(197,157,69,0.5)" strokeWidth="0.8" strokeDasharray="3 3">
              <polygon points="420,180 530,170 540,260 430,270"/>
            </g>

            <g>
              <circle cx="358" cy="362" r="6" fill="#C59D45" stroke="#0A1733" strokeWidth="1.2"/>
              <circle cx="358" cy="362" r="12" fill="none" stroke="#C59D45" strokeWidth="1" opacity="0.5"/>
            </g>
            <g>
              <circle cx="478" cy="220" r="4" fill="#0A1733"/>
            </g>
            <g>
              <circle cx="185" cy="240" r="4" fill="#0A1733"/>
            </g>

            <g stroke="#0A1733" strokeWidth="0.8" fill="none">
              <rect x="318" y="322" width="80" height="80" strokeDasharray="4 4"/>
              <line x1="358" y1="312" x2="358" y2="332"/>
              <line x1="358" y1="392" x2="358" y2="412"/>
              <line x1="308" y1="362" x2="328" y2="362"/>
              <line x1="388" y1="362" x2="408" y2="362"/>
            </g>
          </svg>

          <div className="absolute top-3.5 right-3.5 w-[170px] bg-paper/95 border border-line rounded-lg p-3 backdrop-blur-md">
            <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">Selected Area</div>
            <div className="text-[13px] font-semibold tracking-[-0.01em] mt-0.5">RM-04 · 2.7 ha</div>
            <div className="flex justify-between mt-2 font-mono text-[11px] text-ink-2">
              <span>NDVI</span><span>0.62</span>
            </div>
            <div className="flex justify-between font-mono text-[11px] text-ink-2">
              <span>Elevation</span><span>520m</span>
            </div>
            <div className="flex justify-between font-mono text-[11px] text-ink-2">
              <span>Updated</span><span>2h ago</span>
            </div>
          </div>

          <div className="absolute bottom-3.5 left-3.5 w-[200px] bg-paper/95 border border-line rounded-lg p-3 backdrop-blur-md hidden sm:block">
            <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">NDVI · last 12 months</div>
            <div className="flex items-end gap-0.5 h-[34px] mt-1.5">
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[30%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[42%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[48%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[55%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[68%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[72%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[85%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[78%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[64%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[58%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[50%]"></span>
              <span className="flex-1 bg-mustard rounded-sm opacity-85 h-[62%]"></span>
            </div>
            <div className="flex justify-between mt-2 font-mono text-[10px] text-muted">
              <span>JAN</span><span>JUL</span><span>DEC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
