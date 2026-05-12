"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function InsightsSignup() {
  const ref = useScrollReveal();
  
  return (
    <section className="py-12 sm:py-24 relative overflow-hidden" style={{ borderTop: '1px solid rgba(14,14,12,0.14)', background: '#FAF6EA' }} ref={ref}>
      <div className="absolute inset-0 bg-spatial-grid bg-grid-sm mask-radial opacity-20 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="reveal border rounded-2xl p-8 sm:p-12 md:p-16 text-center max-w-[900px] mx-auto shadow-card hover:shadow-card-hover transition-shadow duration-500 gradient-border" style={{ background: '#F6F2E7', borderColor: 'rgba(14,14,12,0.14)' }}>
          <div className="reveal reveal-delay-1 inline-flex items-center justify-center w-12 h-12 rounded-full mb-6" style={{ background: 'rgba(184,144,42,0.12)', color: '#B8902A' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-3 0v2a3 3 0 0 1-6 0v-2" /><circle cx="12" cy="9" r="1" fill="currentColor"/></svg>
          </div>
          <h3 className="reveal reveal-delay-1 text-[32px] font-medium tracking-[-0.02em] text-ink mb-4">Get geospatial updates.</h3>
          <p className="reveal reveal-delay-2 text-muted text-[16px] leading-relaxed mb-10 max-w-[500px] mx-auto">
            Stay informed with the latest updates on GIS methods, remote sensing technology, and geospatial project insights.
          </p>
          <form className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 max-w-[450px] mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 border rounded-full px-5 py-3 text-[14px] text-ink focus:outline-none focus:border-[#0E0E0C] focus:ring-2 focus:ring-[#0E0E0C]/10 transition-all shadow-sm"
              style={{ background: '#F1ECDF', borderColor: 'rgba(14,14,12,0.14)' }}
              required
            />
            <button type="submit" className="btn bg-[#0E0E0C] text-[#F6F2E7] hover:bg-black whitespace-nowrap px-6 py-3 transition-all">
              Subscribe
            </button>
          </form>
          <p className="reveal reveal-delay-4 text-[11px] font-mono mt-4 uppercase tracking-wider" style={{ color: '#6B655B' }}>No spam. Only technical insights.</p>
        </div>
      </div>
    </section>
  );
}
