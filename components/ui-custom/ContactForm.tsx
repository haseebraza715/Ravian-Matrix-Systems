"use client";

import { useState } from "react";
import { Card } from "@/components/ui-custom/Card";

const CONTACT_ENDPOINT = "/api/contact.php";
const fieldClass =
  "border border-line rounded-lg px-4 py-3 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("formType", "contact");

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string; error?: string }
        | null;

      if (res.ok && data?.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data?.error ?? "Failed to send. Please try again or email us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send. Please check your connection and try again.");
    }

    setTimeout(() => {
      setStatus("idle");
      setErrorMessage(null);
    }, 6000);
  };

  return (
    <Card
      className="p-6 sm:p-8 max-w-[600px] w-full bg-bg-surface border-line"
      glow
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" encType="multipart/form-data">
        <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="font-mono text-xs tracking-widest uppercase text-gold">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              maxLength={100}
              className={fieldClass}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="font-mono text-xs tracking-widest uppercase text-gold">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              maxLength={100}
              className={fieldClass}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs tracking-widest uppercase text-gold">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={100}
            className={fieldClass}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-mono text-xs tracking-widest uppercase text-gold">Phone Number <span className="text-muted">(optional)</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={60}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="font-mono text-xs tracking-widest uppercase text-gold">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            maxLength={160}
            className={fieldClass}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="inquiryType" className="font-mono text-xs tracking-widest uppercase text-gold">Inquiry Type</label>
          <div className="relative">
            <select
              id="inquiryType"
              name="inquiryType"
              required
              className={`${fieldClass} w-full appearance-none cursor-pointer`}
            >
              <option className="bg-bg-base text-primary">General Inquiry</option>
              <option className="bg-bg-base text-primary">Service Information</option>
              <option className="bg-bg-base text-primary">Business Partnership</option>
              <option className="bg-bg-base text-primary">Existing Project</option>
              <option className="bg-bg-base text-primary">Support Request</option>
              <option className="bg-bg-base text-primary">Other</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold/60">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-mono text-xs tracking-widest uppercase text-gold">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            minLength={10}
            maxLength={1000}
            className={`${fieldClass} resize-y`}
            placeholder="Tell us how we can help you..."
            required
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="attachment" className="font-mono text-xs tracking-widest uppercase text-gold">
            Attachment <span className="text-muted">(optional)</span>
          </label>
          <input
            id="attachment"
            name="attachment"
            type="file"
            className={`${fieldClass} file:mr-4 file:rounded-md file:border-0 file:bg-gold file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-black hover:file:bg-gold-soft`}
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          />
          <span className="text-[12px] leading-relaxed text-muted">PDF, DOC, DOCX, PNG, or JPG — max 10 MB.</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary w-full sm:w-auto py-3 px-8 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"} <span className="arrow">→</span>
          </button>

          {status === "success" && (
            <span className="text-status-green font-mono text-[11px] uppercase tracking-wider">{"// Message sent successfully!"}</span>
          )}
          {status === "error" && (
            <span className="text-red-400 font-mono text-[11px] uppercase tracking-wider">
              {"// "}{errorMessage ?? "Failed to send. Please retry."}
            </span>
          )}
        </div>
        <p className="text-[12px] leading-relaxed text-muted">
          We usually respond within 24 hours on business days.
        </p>
      </form>
    </Card>
  );
}
