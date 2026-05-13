"use client";

export default function ContactForm() {
  return (
    <form 
      className="border rounded-2xl p-6 sm:p-8 max-w-[600px] w-full shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_60px_rgba(0,0,0,0.8)] transition-all duration-500" 
      style={{ background: '#050605', borderColor: 'rgba(255,255,255,0.1)' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] tracking-widest uppercase text-gold/80">First Name</label>
            <input 
              type="text" 
              className="border rounded-lg px-4 py-2.5 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all shadow-sm"
              style={{ background: '#0E0E0C', borderColor: 'rgba(255,255,255,0.1)' }}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] tracking-widest uppercase text-gold/80">Last Name</label>
            <input 
              type="text" 
              className="border rounded-lg px-4 py-2.5 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all shadow-sm"
              style={{ background: '#0E0E0C', borderColor: 'rgba(255,255,255,0.1)' }}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] tracking-widest uppercase text-gold/80">Email Address</label>
          <input 
            type="email" 
            className="border rounded-full px-4 py-2.5 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all shadow-sm"
            style={{ background: '#0E0E0C', borderColor: 'rgba(255,255,255,0.1)' }}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] tracking-widest uppercase text-gold/80">Project Type</label>
          <div className="relative">
            <select 
              className="w-full border rounded-full px-4 py-2.5 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all shadow-sm appearance-none cursor-pointer"
              style={{ background: '#0E0E0C', borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <option className="bg-[#0E0E0C]">GIS Analysis</option>
              <option className="bg-[#0E0E0C]">Remote Sensing</option>
              <option className="bg-[#0E0E0C]">WebGIS Platform</option>
              <option className="bg-[#0E0E0C]">Hydrological Modeling</option>
              <option className="bg-[#0E0E0C]">Environmental Monitoring</option>
              <option className="bg-[#0E0E0C]">IT / Web Development</option>
              <option className="bg-[#0E0E0C]">Data Automation</option>
              <option className="bg-[#0E0E0C]">Other</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold/60">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] tracking-widest uppercase text-gold/80">Project Details</label>
          <textarea 
            rows={4}
            className="border rounded-2xl px-4 py-3 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all shadow-sm resize-y"
            style={{ background: '#0E0E0C', borderColor: 'rgba(255,255,255,0.1)' }}
            placeholder="Tell us about your requirements..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn bg-gold text-brand-black hover:bg-gold-soft mt-2 justify-center py-3.5 transition-all shadow-[0_0_20px_rgba(201,162,77,0.2)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)] font-semibold px-8 self-start">
          Submit Request <span className="arrow">→</span>
        </button>
      </div>
    </form>
  );
}
