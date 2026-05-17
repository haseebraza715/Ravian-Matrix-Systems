"use client";

import { useEffect, useState } from "react";

export default function GeoDashboardVisual() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative border border-white/10 bg-[#080A0C] rounded-[14px] overflow-hidden shadow-2xl w-full group">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 relative z-10 backdrop-blur-md">
        <div className="flex gap-1.5">
          <span className="w-[8px] h-[8px] rounded-full bg-white/20"></span>
          <span className="w-[8px] h-[8px] rounded-full bg-white/20"></span>
          <span className="w-[8px] h-[8px] rounded-full bg-white/20"></span>
        </div>
        <div className="font-mono text-[10px] text-white/60 flex items-center gap-3">
          <span className="terminal-label !opacity-100 text-gold/80">CONSOLE_v4.0</span>
          <span className="hidden sm:inline">ravian.ai / intelligence / global_view</span>
        </div>
        <div className="font-mono text-[10px] text-white/80 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-status-green shadow-[0_0_8px_#4CD982] animate-pulse"></span>
          SYS_ACTIVE
        </div>
      </div>
      
      <div className="grid grid-cols-[220px_1fr] min-h-[520px] max-md:grid-cols-1 relative">
        {/* Left Sidebar: Layers & KPIs */}
        <aside className="border-r border-white/10 p-4 flex flex-col gap-6 bg-white/2 max-md:hidden relative z-10">
          <div>
            <h4 className="font-mono text-[9px] tracking-[0.14em] uppercase text-white/60 m-0 font-medium flex justify-between">
              Layers <span className="text-gold/60">SPATIAL_DB</span>
            </h4>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex items-center gap-2.5 text-[11px] text-white/70">
                <span className="w-2 h-2 rounded-sm bg-gold shrink-0 shadow-[0_0_5px_rgba(201,162,77,0.4)]"></span> 
                Parcel Inventory
                <span className="ml-auto font-mono text-[9px] text-white/20">ACTIVE</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-white/70">
                <span className="w-2 h-2 rounded-sm bg-blue-light shrink-0"></span> 
                Hydrology Flow
                <span className="ml-auto font-mono text-[9px] text-white/20">VISIBLE</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-white/70">
                <span className="w-2 h-2 rounded-sm bg-white/10 shrink-0"></span> 
                Vector Grid
                <span className="ml-auto font-mono text-[9px] text-white/20">HIDDEN</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-white/70">
                <span className="w-2 h-2 rounded-sm bg-status-green/60 shrink-0"></span> 
                NDVI Index
                <span className="ml-auto font-mono text-[9px] text-white/20">LIVE</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[9px] tracking-[0.14em] uppercase text-white/60 m-0 font-medium">Metrics</h4>
            <div className="flex flex-col gap-3 mt-3">
              <div className="border border-white/10 bg-white/5 px-3 py-2.5 rounded-lg">
                <div className="font-mono text-[8px] tracking-[0.1em] uppercase text-white/50">Total Area</div>
                <div className="text-[18px] font-medium tracking-tight text-white/90 mt-0.5">84,290 Ha</div>
                <div className="w-full bg-white/5 h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gold h-full w-[65%]"></div>
                </div>
              </div>
              
              <div className="border border-white/10 bg-white/5 px-3 py-2.5 rounded-lg">
                <div className="font-mono text-[8px] tracking-[0.1em] uppercase text-white/50">Signal Strength</div>
                <div className="flex items-end gap-1 mt-1">
                  <div className="w-1 bg-status-green h-2"></div>
                  <div className="w-1 bg-status-green h-3"></div>
                  <div className="w-1 bg-status-green h-4"></div>
                  <div className="w-1 bg-white/10 h-5"></div>
                  <span className="ml-2 text-[14px] font-mono text-white/90">98.2%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto space-y-1">
             <div className="terminal-label !opacity-60">EPSG:4326 / WGS 84</div>
             <div className="terminal-label !opacity-60">REF: RAVIAN_X_01</div>
          </div>
        </aside>

        {/* Main Map Canvas */}
        <div className="relative overflow-hidden min-h-[400px] bg-[#050605]">
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 spatial-grid-overlay opacity-20 pointer-events-none"></div>

          {/* Coordinate Readout */}
          <div className="absolute top-4 left-4 font-mono text-[9px] text-white/70 bg-black/60 px-2 py-1.5 border border-white/10 rounded backdrop-blur-md z-10 flex items-center gap-3">
            <span className="text-gold/80">SCAN_POS</span> 48.1351° N, 11.5820° E
          </div>
          
          <svg viewBox="0 0 600 520" preserveAspectRatio="xMidYMid slice" width="600" height="520" className="w-full h-full block min-h-[520px] relative z-[1]" aria-hidden="true">
            <defs>
              <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#8FBEDC" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#080A0C" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Background Glow */}
            <rect width="100%" height="100%" fill="url(#mapGlow)" />

            {/* Subtle Topography/Hydrology lines in Light Blue */}
            <g fill="none" stroke="#8FBEDC" strokeWidth="0.5" strokeOpacity="0.2">
              <path d="M 0 420 Q 150 380 250 400 T 500 360 T 600 380" />
              <path d="M 0 380 Q 160 330 280 350 T 520 310 T 600 330" />
              <path d="M 0 340 Q 170 290 310 310 T 540 260 T 600 280" />
              <path d="M 100 0 L 120 150 L 80 300 L 150 520" strokeOpacity="0.1" />
              <path d="M 400 0 L 380 200 L 450 400 L 420 520" strokeOpacity="0.1" />
            </g>

            {/* Spatial Network Lines */}
            <g stroke="#8FBEDC" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="2 4">
               <line x1="150" y1="100" x2="350" y2="250" />
               <line x1="350" y1="250" x2="500" y2="150" />
               <line x1="350" y1="250" x2="320" y2="400" />
            </g>

            {/* Gold Highlighted Land Parcels */}
            <g fill="rgba(201, 162, 77, 0.15)" stroke="#C9A24D" strokeWidth="1">
              <polygon points="180,180 260,195 250,280 170,265" className="hover:fill-gold/30 transition-colors cursor-pointer" />
              <polygon points="275,200 360,215 350,300 265,285" className="hover:fill-gold/30 transition-colors cursor-pointer" />
              <polygon points="120,320 180,330 170,390 110,380" className="opacity-40" />
            </g>
            
            {/* Selected Area Indicator */}
            <g>
              <polygon points="380,320 480,335 470,420 370,405" fill="rgba(201, 162, 77, 0.25)" stroke="#E3C76D" strokeWidth="1.5" />
              <circle cx="425" cy="362" r="4" fill="#E3C76D" filter="url(#glow)" />
              <circle cx="425" cy="362" r="10" fill="none" stroke="#E3C76D" strokeWidth="1" opacity="0.4">
                <animate attributeName="r" from="4" to="14" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Data Nodes */}
            <circle cx="150" cy="100" r="2" fill="#8FBEDC" />
            <circle cx="500" cy="150" r="2" fill="#8FBEDC" />
            <circle cx="320" cy="400" r="2" fill="#8FBEDC" />

            {/* Decorative Grid Labels */}
            <text x="20" y="500" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,0.2)">EPSG:4326</text>
            <text x="540" y="40" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,0.2)">UTM_Z32</text>
          </svg>

          {/* Floating HUD Elements */}
          
          {/* Selected Area Card */}
          <div className="absolute top-4 right-4 w-[180px] bg-black/60 border border-white/10 rounded-lg p-3 backdrop-blur-md z-10">
            <div className="font-mono text-[8px] tracking-[0.1em] uppercase text-white/60 flex justify-between">
              Selected Parcel <span className="text-gold">ACTIVE</span>
            </div>
            <div className="text-[14px] font-medium text-white/90 mt-1">ZONE_DELTA_09</div>
            <div className="grid grid-cols-2 gap-2 mt-2">
               <div>
                 <div className="text-[8px] text-white/50 uppercase font-mono">Area</div>
                 <div className="text-[11px] text-white/80 font-mono">2.48 Ha</div>
               </div>
               <div>
                 <div className="text-[8px] text-white/50 uppercase font-mono">Status</div>
                 <div className="text-[11px] text-status-green font-mono">OPTIMAL</div>
               </div>
            </div>
          </div>

          {/* Remote Sensing Chart Mini */}
          <div className="absolute bottom-4 left-4 w-[160px] bg-black/60 border border-white/10 rounded-lg p-3 backdrop-blur-md z-10">
             <div className="font-mono text-[8px] tracking-[0.1em] uppercase text-white/60 mb-2">NDVI_INDEX_2026</div>
             <div className="flex items-end gap-[2px] h-10">
                <div className="flex-1 bg-status-green/40 h-[40%] rounded-t-sm"></div>
                <div className="flex-1 bg-status-green/40 h-[55%] rounded-t-sm"></div>
                <div className="flex-1 bg-status-green/60 h-[75%] rounded-t-sm"></div>
                <div className="flex-1 bg-status-green/40 h-[60%] rounded-t-sm"></div>
                <div className="flex-1 bg-gold h-[90%] rounded-t-sm"></div>
                <div className="flex-1 bg-status-green/40 h-[65%] rounded-t-sm"></div>
                <div className="flex-1 bg-status-green/40 h-[50%] rounded-t-sm"></div>
             </div>
             <div className="flex justify-between mt-1 text-[8px] font-mono text-white/50">
                <span>JAN</span><span>JUN</span><span>DEC</span>
             </div>
          </div>

          {/* Background Decorative Labels */}
          <div className="absolute top-[25%] left-[15%] terminal-label pointer-events-none !opacity-10">ANALYSIS_READY</div>
          <div className="absolute top-[65%] right-[20%] terminal-label pointer-events-none !opacity-10">PARCEL_LAYER</div>
          <div className="absolute bottom-[35%] left-[45%] terminal-label pointer-events-none !opacity-10">HYDRO_FLOW</div>
          <div className="absolute top-[40%] right-[35%] terminal-label pointer-events-none !opacity-10">VECTOR_GRID</div>

          {/* Signal Indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/40 px-2 py-1 rounded border border-white/5 backdrop-blur-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-status-green animate-pulse"></span>
             <span className="font-mono text-[8px] text-white/60 tracking-wider">SYNC_READY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
