"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui-custom/Card";

const fieldClass = "border border-line rounded-lg px-4 py-3 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "quote" }),
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <Card className="p-6 sm:p-8 max-w-[760px] w-full bg-bg-surface border-line" glow>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div>
          <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Personal Information</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">First Name</span>
              <input name="firstName" type="text" maxLength={100} className={fieldClass} required />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Last Name</span>
              <input name="lastName" type="text" maxLength={100} className={fieldClass} required />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Email Address</span>
              <input name="email" type="email" maxLength={100} className={fieldClass} required />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Phone Number <span className="text-muted">(optional)</span></span>
              <input name="phone" type="tel" maxLength={60} className={fieldClass} />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Company / Organization <span className="text-muted">(optional)</span></span>
              <input name="company" type="text" maxLength={160} className={fieldClass} />
            </label>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Project Information</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Service Required</span>
              <select name="serviceRequired" className={`${fieldClass} appearance-none cursor-pointer`} required>
                <option>Web Solutions</option>
                <option>Software Development</option>
                <option>Geospatial Intelligence</option>
                <option>Digital Growth</option>
                <option>Multiple Services</option>
                <option>Not Sure Yet</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Project Type</span>
              <select name="projectType" className={`${fieldClass} appearance-none cursor-pointer`} required>
                <option>New Project</option>
                <option>Existing Project Improvement</option>
                <option>Website / Web Platform</option>
                <option>Application Development</option>
                <option>GIS / Mapping / Remote Sensing</option>
                <option>Dashboard / Portal</option>
                <option>Digital Marketing / Design</option>
                <option>Technical Consultation</option>
                <option>Other</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Project Details</span>
              <textarea
                name="projectDetails"
                rows={6}
                maxLength={2000}
                className={`${fieldClass} resize-y`}
                placeholder="Tell us about your project, goals, required features, target users, data, technical needs, or any specific requirements."
                required
              />
            </label>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Timeline &amp; Budget</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Expected Timeline</span>
              <select name="expectedTimeline" className={`${fieldClass} appearance-none cursor-pointer`} required>
                <option>As soon as possible</option>
                <option>Within 2-4 weeks</option>
                <option>Within 1-3 months</option>
                <option>Flexible timeline</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Estimated Budget</span>
              <select name="estimatedBudget" className={`${fieldClass} appearance-none cursor-pointer`} required>
                <option>Under EUR 1,000</option>
                <option>EUR 1,000 - EUR 2,500</option>
                <option>EUR 2,500 - EUR 5,000</option>
                <option>EUR 5,000 - EUR 10,000</option>
                <option>EUR 10,000+</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">File Upload <span className="text-muted">(optional)</span></span>
              <input name="attachmentNote" type="text" maxLength={300} className={fieldClass} placeholder="Add a link or note about project briefs, screenshots, documents, maps, references, or technical materials if available." />
              <span className="text-[12px] leading-relaxed text-muted">
                You may upload project briefs, screenshots, documents, maps, references, or technical materials if available.
              </span>
            </label>
          </div>
        </div>

        <label className="flex items-start gap-3 text-[13px] leading-relaxed text-muted">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-gold" required />
          <span>
            I agree that my submitted data will be processed for the purpose of reviewing my request and preparing a non-binding quote. Further information can be found in the{" "}
            <Link href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
          </span>
        </label>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full sm:w-auto py-3 px-8 text-sm disabled:opacity-50 disabled:cursor-not-allowed">
            {status === "loading" ? "Submitting..." : "Submit Quote Request"} <span className="arrow">→</span>
          </button>
          {status === "success" && <span className="text-status-green font-mono text-[11px] uppercase tracking-wider">{"// Quote request submitted"}</span>}
          {status === "error" && <span className="text-red-400 font-mono text-[11px] uppercase tracking-wider">{"// Failed to submit. Please retry."}</span>}
        </div>
        <p className="text-[12px] leading-relaxed text-muted">We usually respond within 24 hours on business days.</p>
      </form>
    </Card>
  );
}
