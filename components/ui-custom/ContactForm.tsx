"use client";

import { useState } from "react";
import { Card } from "@/components/ui-custom/Card";

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
    }, 6000);
  };

  return (
    <Card 
      className="p-6 sm:p-8 max-w-[600px] w-full bg-bg-surface border-line" 
      glow
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="font-mono text-[10px] tracking-widest uppercase text-gold">First Name</label>
            <input 
              id="firstName"
              name="firstName"
              type="text" 
              maxLength={100}
              className="border border-line rounded-lg px-4 py-2.5 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="font-mono text-[10px] tracking-widest uppercase text-gold">Last Name</label>
            <input 
              id="lastName"
              name="lastName"
              type="text" 
              maxLength={100}
              className="border border-line rounded-lg px-4 py-2.5 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-[10px] tracking-widest uppercase text-gold">Email Address</label>
          <input 
            id="email"
            name="email"
            type="email" 
            maxLength={100}
            className="border border-line rounded-lg px-4 py-2.5 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className="font-mono text-[10px] tracking-widest uppercase text-gold">Project Type</label>
          <div className="relative">
            <select 
              id="projectType"
              name="projectType"
              className="w-full border border-line rounded-lg px-4 py-2.5 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all appearance-none cursor-pointer"
            >
              <option className="bg-bg-base text-primary">WebGIS Platform</option>
              <option className="bg-bg-base text-primary">GIS Analysis &amp; Processing</option>
              <option className="bg-bg-base text-primary">Remote Sensing &amp; Satellite</option>
              <option className="bg-bg-base text-primary">Custom Web / IT Platform</option>
              <option className="bg-bg-base text-primary">Workflow Data Automation</option>
              <option className="bg-bg-base text-primary">Other Business Systems</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold/60">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="projectDetails" className="font-mono text-[10px] tracking-widest uppercase text-gold">Project Details</label>
          <textarea 
            id="projectDetails"
            name="projectDetails"
            rows={4}
            maxLength={1000}
            className="border border-line rounded-lg px-4 py-3 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-y"
            placeholder="Tell us about your requirements..."
            required
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
          <button 
            type="submit" 
            disabled={status === 'loading'} 
            className="btn btn-primary w-full sm:w-auto py-3 px-8 text-sm"
          >
            {status === 'loading' ? 'Sending...' : 'Submit Request'} <span className="arrow">→</span>
          </button>
          
          {status === 'success' && (
            <span className="text-status-green font-mono text-[11px] uppercase tracking-wider">{"// Message sent successfully!"}</span>
          )}
          {status === 'error' && (
            <span className="text-red-400 font-mono text-[11px] uppercase tracking-wider">{"// Failed to send. Please retry."}</span>
          )}
        </div>
      </form>
    </Card>
  );
}
