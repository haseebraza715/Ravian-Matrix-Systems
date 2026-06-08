"use client";

import { useState } from "react";
import Link from "@/lib/i18n/Link";
import { Card } from "@/components/ui-custom/Card";
import { useTranslation } from "@/lib/i18n/useTranslation";

const CONTACT_ENDPOINT = "/api/contact.php";
const fieldClass = "border border-line rounded-lg px-4 py-3 text-base bg-bg-base text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all";

function localizeError(msg: string | null, locale: string): string | null {
  if (!msg) return null;
  if (locale !== "de") return msg;
  
  const lower = msg.toLowerCase();
  if (lower.includes("fill") || lower.includes("required")) {
    return "Bitte füllen Sie alle Pflichtfelder aus.";
  }
  if (lower.includes("email")) {
    return "Ungültige E-Mail-Adresse.";
  }
  if (lower.includes("file") && lower.includes("large")) {
    return "Die Datei ist zu groß (maximal 10 MB).";
  }
  if (lower.includes("file") && lower.includes("type")) {
    return "Ungültiges Dateiformat. Bitte verwenden Sie PDF, DOC, DOCX, PNG oder JPG.";
  }
  if (lower.includes("connection") || lower.includes("network") || lower.includes("fetch")) {
    return "Verbindung fehlgeschlagen. Bitte überprüfen Sie Ihre Internetverbindung.";
  }
  if (lower.includes("submit") || lower.includes("send")) {
    return "Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.";
  }
  
  return "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.";
}

export default function QuoteForm() {
  const { translations, locale } = useTranslation();
  const { common, form: fTrans } = translations;

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("formType", "quote");

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
        const rawErr = data?.error ?? "Failed to submit. Please try again or email us directly.";
        setErrorMessage(localizeError(rawErr, locale));
      }
    } catch {
      setStatus("error");
      setErrorMessage(localizeError("Failed to submit. Please check your connection and try again.", locale));
    }

    setTimeout(() => {
      setStatus("idle");
      setErrorMessage(null);
    }, 6000);
  };

  const services = [
    { value: "Web Solutions", label: fTrans.servicesList[0] || "Web Solutions" },
    { value: "Software Development", label: fTrans.servicesList[1] || "Software Development" },
    { value: "Geospatial Intelligence", label: fTrans.servicesList[2] || "Geospatial Intelligence" },
    { value: "Digital Growth", label: fTrans.servicesList[3] || "Digital Growth" },
    { value: "Multiple Services", label: fTrans.servicesList[4] || "Multiple Services" },
    { value: "Not Sure Yet", label: fTrans.servicesList[5] || "Not Sure Yet" }
  ];

  const projectTypes = [
    { value: "New Project", label: fTrans.projectTypeList[0] || "New Project" },
    { value: "Existing Project Improvement", label: fTrans.projectTypeList[1] || "Existing Project Improvement" },
    { value: "Website / Web Platform", label: fTrans.projectTypeList[2] || "Website / Web Platform" },
    { value: "Application Development", label: fTrans.projectTypeList[3] || "Application Development" },
    { value: "GIS / Mapping / Remote Sensing", label: fTrans.projectTypeList[4] || "GIS / Mapping / Remote Sensing" },
    { value: "Dashboard / Portal", label: fTrans.projectTypeList[5] || "Dashboard / Portal" },
    { value: "Digital Marketing / Design", label: fTrans.projectTypeList[6] || "Digital Marketing / Design" },
    { value: "Technical Consultation", label: fTrans.projectTypeList[7] || "Technical Consultation" },
    { value: "Other", label: fTrans.projectTypeList[8] || "Other" }
  ];

  const timelines = [
    { value: "As soon as possible", label: fTrans.timelineList[0] || "As soon as possible" },
    { value: "Within 2-4 weeks", label: fTrans.timelineList[1] || "Within 2-4 weeks" },
    { value: "Within 1-3 months", label: fTrans.timelineList[2] || "Within 1-3 months" },
    { value: "Flexible timeline", label: fTrans.timelineList[3] || "Flexible timeline" },
    { value: "Not sure yet", label: fTrans.timelineList[4] || "Not sure yet" }
  ];

  const budgets = [
    { value: "Under EUR 1,000", label: fTrans.budgetList[0] || "Under EUR 1,000" },
    { value: "EUR 1,000 - EUR 2,500", label: fTrans.budgetList[1] || "EUR 1,000 - EUR 2,500" },
    { value: "EUR 2,500 - EUR 5,000", label: fTrans.budgetList[2] || "EUR 2,500 - EUR 5,000" },
    { value: "EUR 5,000 - EUR 10,000", label: fTrans.budgetList[3] || "EUR 5,000 - EUR 10,000" },
    { value: "EUR 10,000+", label: fTrans.budgetList[4] || "EUR 10,000+" },
    { value: "Not sure yet", label: fTrans.budgetList[5] || "Not sure yet" }
  ];

  return (
    <Card className="p-6 sm:p-8 max-w-[760px] w-full bg-bg-surface border-line" glow>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8" encType="multipart/form-data">
        <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor="quote-website">Website</label>
          <input id="quote-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">
            {locale === "de" ? "Persönliche Angaben" : "Personal Information"}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.firstName}</span>
              <input name="firstName" type="text" maxLength={100} className={fieldClass} required />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.lastName}</span>
              <input name="lastName" type="text" maxLength={100} className={fieldClass} required />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.email}</span>
              <input name="email" type="email" maxLength={100} className={fieldClass} required />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.phoneOptional}</span>
              <input name="phone" type="tel" maxLength={60} className={fieldClass} />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.company}</span>
              <input name="company" type="text" maxLength={160} className={fieldClass} required />
            </label>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">
            {locale === "de" ? "Projekt-Informationen" : "Project Information"}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.serviceRequired}</span>
              <select name="serviceRequired" className={`${fieldClass} appearance-none cursor-pointer`} required>
                {services.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.projectType}</span>
              <select name="projectType" className={`${fieldClass} appearance-none cursor-pointer`} required>
                {projectTypes.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.projectDetails}</span>
              <textarea
                name="projectDetails"
                rows={6}
                minLength={10}
                maxLength={2000}
                className={`${fieldClass} resize-y`}
                placeholder={fTrans.projectDetailsPlaceholder}
                required
              />
            </label>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">
            {locale === "de" ? "Zeitrahmen & Budget" : "Timeline & Budget"}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.expectedTimeline}</span>
              <select name="expectedTimeline" className={`${fieldClass} appearance-none cursor-pointer`} required>
                {timelines.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">{fTrans.estimatedBudget}</span>
              <select name="estimatedBudget" className={`${fieldClass} appearance-none cursor-pointer`} required>
                {budgets.map((b) => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="font-mono text-xs tracking-widest uppercase text-gold">
                {locale === "de" ? "Datei-Upload (optional)" : "File Upload (optional)"}
              </span>
              <input
                name="attachment"
                type="file"
                className={`${fieldClass} file:mr-4 file:rounded-md file:border-0 file:bg-gold file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-black hover:file:bg-gold-soft`}
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              />
              <input name="attachmentNote" type="text" maxLength={300} className={fieldClass} placeholder={fTrans.attachmentNotePlaceholder} />
              <span className="text-[12px] leading-relaxed text-muted">
                {fTrans.attachmentLimit} {locale === "de" ? "Sie können die Materialien auch im obigen Notizfeld beschreiben." : "You may also describe materials in the note field above."}
              </span>
            </label>
          </div>
        </div>

        <label className="flex items-start gap-3 text-[13px] leading-relaxed text-muted">
          <input type="checkbox" name="consent" value="yes" className="mt-1 h-4 w-4 accent-gold" required />
          <span>
            {fTrans.consentPrefix}
            <Link href="/privacy-policy" className="text-gold hover:underline">{fTrans.consentLink}</Link>
            {fTrans.consentSuffix}
          </span>
        </label>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full sm:w-auto py-3 px-8 text-sm disabled:opacity-50 disabled:cursor-not-allowed">
            {status === "loading" ? common.submitting : common.submitQuoteRequest} <span className="arrow">→</span>
          </button>
          {status === "success" && <span className="text-status-green font-mono text-[11px] uppercase tracking-wider">{"// "}{fTrans.successQuote}</span>}
          {status === "error" && (
            <span className="text-red-400 font-mono text-[11px] uppercase tracking-wider">
              {"// "}{errorMessage ?? (locale === "de" ? "Fehler beim Übermitteln. Bitte versuchen Sie es erneut." : "Failed to submit. Please retry.")}
            </span>
          )}
        </div>
        <p className="text-[12px] leading-relaxed text-muted">{common.responseNote}</p>
      </form>
    </Card>
  );
}
