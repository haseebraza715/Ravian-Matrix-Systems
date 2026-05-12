"use client";

export default function ContactForm() {
  return (
    <form 
      className="border rounded-2xl p-6 sm:p-8 max-w-[600px] w-full shadow-card hover:shadow-card-hover transition-shadow duration-500" 
      style={{ background: '#F6F2E7', borderColor: 'rgba(14,14,12,0.14)' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] tracking-wide uppercase" style={{ color: '#6B655B' }}>First Name</label>
            <input 
              type="text" 
              className="border rounded-lg px-4 py-2.5 text-[14px] text-ink focus:outline-none focus:border-[#0E0E0C] focus:ring-2 focus:ring-[#0E0E0C]/10 transition-all shadow-sm"
              style={{ background: '#F1ECDF', borderColor: 'rgba(14,14,12,0.14)' }}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] tracking-wide uppercase" style={{ color: '#6B655B' }}>Last Name</label>
            <input 
              type="text" 
              className="border rounded-lg px-4 py-2.5 text-[14px] text-ink focus:outline-none focus:border-[#0E0E0C] focus:ring-2 focus:ring-[#0E0E0C]/10 transition-all shadow-sm"
              style={{ background: '#F1ECDF', borderColor: 'rgba(14,14,12,0.14)' }}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[11px] tracking-wide uppercase" style={{ color: '#6B655B' }}>Email Address</label>
          <input 
            type="email" 
            className="border rounded-full px-4 py-2.5 text-[14px] text-ink focus:outline-none focus:border-[#0E0E0C] focus:ring-2 focus:ring-[#0E0E0C]/10 transition-all shadow-sm"
            style={{ background: '#F1ECDF', borderColor: 'rgba(14,14,12,0.14)' }}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[11px] tracking-wide uppercase" style={{ color: '#6B655B' }}>Project Type</label>
          <div className="relative">
            <select 
              className="w-full border rounded-full px-4 py-2.5 text-[14px] text-ink focus:outline-none focus:border-[#0E0E0C] focus:ring-2 focus:ring-[#0E0E0C]/10 transition-all shadow-sm appearance-none cursor-pointer"
              style={{ background: '#F1ECDF', borderColor: 'rgba(14,14,12,0.14)' }}
            >
              <option>GIS Analysis</option>
              <option>Remote Sensing</option>
              <option>WebGIS Platform</option>
              <option>Hydrological Modeling</option>
              <option>Environmental Monitoring</option>
              <option>IT / Web Development</option>
              <option>Data Automation</option>
              <option>Other</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#6B655B]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[11px] tracking-wide uppercase" style={{ color: '#6B655B' }}>Project Details</label>
          <textarea 
            rows={4}
            className="border rounded-2xl px-4 py-3 text-[14px] text-ink focus:outline-none focus:border-[#0E0E0C] focus:ring-2 focus:ring-[#0E0E0C]/10 transition-all shadow-sm resize-y"
            style={{ background: '#F1ECDF', borderColor: 'rgba(14,14,12,0.14)' }}
            placeholder="Tell us about your requirements..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn bg-[#0E0E0C] text-[#F6F2E7] hover:bg-black mt-2 justify-center py-3.5 transition-all shadow-md hover:shadow-lg font-medium self-start px-8">
          Submit Request <span className="arrow">→</span>
        </button>
      </div>
    </form>
  );
}
