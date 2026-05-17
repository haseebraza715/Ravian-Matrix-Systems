"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    
    // Reset status after a few seconds
    setTimeout(() => {
      if (status !== 'idle') setStatus('idle');
    }, 5000);
  };

  return (
    <form 
      className="border rounded-2xl p-6 sm:p-8 max-w-[600px] w-full shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_60px_rgba(0,0,0,0.8)] transition-all duration-500" 
      style={{ background: '#050605', borderColor: 'rgba(255,255,255,0.1)' }}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="font-mono text-[10px] tracking-widest uppercase text-gold/80">First Name</label>
            <input 
              id="firstName"
              name="firstName"
              type="text" 
              maxLength={100}
              className="border rounded-lg px-3 sm:px-4 py-2.5 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all shadow-sm"
              style={{ background: '#0E0E0C', borderColor: 'rgba(255,255,255,0.1)' }}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="font-mono text-[10px] tracking-widest uppercase text-gold/80">Last Name</label>
            <input 
              id="lastName"
              name="lastName"
              type="text" 
              maxLength={100}
              className="border rounded-lg px-3 sm:px-4 py-2.5 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all shadow-sm"
              style={{ background: '#0E0E0C', borderColor: 'rgba(255,255,255,0.1)' }}
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-[10px] tracking-widest uppercase text-gold/80">Email Address</label>
          <input 
            id="email"
            name="email"
            type="email" 
            maxLength={100}
            className="border rounded-full px-3 sm:px-4 py-2.5 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all shadow-sm"
            style={{ background: '#0E0E0C', borderColor: 'rgba(255,255,255,0.1)' }}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className="font-mono text-[10px] tracking-widest uppercase text-gold/80">Project Type</label>
          <div className="relative">
            <select 
              id="projectType"
              name="projectType"
              className="w-full border rounded-full px-3 sm:px-4 py-2.5 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all shadow-sm appearance-none cursor-pointer"
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
          <label htmlFor="projectDetails" className="font-mono text-[10px] tracking-widest uppercase text-gold/80">Project Details</label>
          <textarea 
            id="projectDetails"
            name="projectDetails"
            rows={4}
            maxLength={1000}
            className="border rounded-2xl px-3 sm:px-4 py-3 text-[14px] text-brand-cream focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all shadow-sm resize-y"
            style={{ background: '#0E0E0C', borderColor: 'rgba(255,255,255,0.1)' }}
            placeholder="Tell us about your requirements..."
            required
          ></textarea>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <button type="submit" disabled={status === 'loading'} className="btn bg-gold text-brand-black hover:bg-gold-soft justify-center py-3.5 transition-all shadow-[0_0_20px_rgba(201,162,77,0.2)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)] font-semibold px-8 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-[#050605] disabled:opacity-70 disabled:cursor-not-allowed">
            {status === 'loading' ? 'Sending...' : 'Submit Request'} <span className="arrow">→</span>
          </button>
          {status === 'success' && <span className="text-status-green text-sm font-medium">Message sent successfully!</span>}
          {status === 'error' && <span className="text-red-400 text-sm font-medium">Failed to send message. Please try again.</span>}
        </div>
      </div>
    </form>
  );
}
