import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import ContactForm from "@/components/ui-custom/ContactForm";
import { Card } from "@/components/ui-custom/Card";
import { Link } from "@/lib/i18n/Link";
import { Mail, MapPin, Send, PhoneCall } from "lucide-react";
import { locales } from "@/lib/i18n/locales";
import { en } from "@/lib/i18n/translations/en";
import { de } from "@/lib/i18n/translations/de";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isDe = locale === "de";
  const translations = isDe ? de : en;
  return {
    title: translations.seo.contact.title,
    description: translations.seo.contact.description,
    alternates: {
      canonical: `https://ravian-matrix.de/${locale}/contact`,
      languages: {
        en: "https://ravian-matrix.de/en/contact",
        de: "https://ravian-matrix.de/de/contact",
        "x-default": "https://ravian-matrix.de/en/contact",
      }
    }
  };
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const isDe = locale === "de";
  const t = isDe ? de : en;

  const nextStepIcons = [Send, Mail, PhoneCall];
  const nextSteps = t.contact.processSteps.map((step, idx) => ({
    ...step,
    icon: nextStepIcons[idx],
  }));

  return (
    <div className="bg-bg-base min-h-screen text-primary">
      <PageHero 
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />
      
      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            
            {/* Left Block: Contact Details */}
            <div>
              <div className="eyebrow mb-6">{t.contact.infoTitle}</div>
              <h2 className="text-[32px] font-bold tracking-tight mb-6 leading-tight">
                {t.contact.infoTitle}
              </h2>
              <p className="mb-12 leading-relaxed text-muted">
                {t.contact.infoDesc}
              </p>

              <div className="flex flex-col gap-6">
                <div className="border-b border-line pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-4 h-4 text-gold" />
                    <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted">{t.common.location}</h4>
                  </div>
                  <p className="text-[16px] font-semibold text-primary leading-snug">
                    Pfeilschifterstraße 27<br />
                    80997 Munich, Germany
                  </p>
                  <p className="text-[14px] mt-1.5 text-muted">
                    {isDe ? "Betreuung von Kunden in Deutschland, Europa und weltweit." : "Serving clients in Germany, Europe, and worldwide."}
                  </p>
                </div>
                
                <div className="border-b border-line pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Mail className="w-4 h-4 text-gold" />
                    <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted">{t.common.contact}</h4>
                  </div>
                  <a href="mailto:info@ravian-matrix.de" className="text-[16px] font-semibold text-primary hover:text-gold transition-colors">
                    info@ravian-matrix.de
                  </a>
                </div>
              </div>
            </div>

            {/* Right Block: Form */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="w-full">
                <div className="mb-6">
                  <div className="eyebrow mb-4">{t.contact.formEyebrow}</div>
                  <p className="text-muted text-[15px] leading-relaxed max-w-[600px]">
                    {t.contact.formDesc}
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="mb-16 text-center">
            <div className="eyebrow mx-auto mb-4">{t.contact.processEyebrow}</div>
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight" dangerouslySetInnerHTML={{ __html: t.contact.processTitle }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex">
                  <Card className="p-6 bg-bg-base border-line flex flex-col h-full w-full" glow>
                    <div className="w-10 h-10 rounded-lg bg-bg-surface border border-line flex items-center justify-center text-gold mb-6 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-primary mb-3">{step.title}</h3>
                    <p className="text-[14px] leading-relaxed text-muted">{step.desc}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-bg-base border-b border-line">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 text-center">
          <div className="eyebrow mb-4">{t.contact.estimateEyebrow}</div>
          <h2 className="text-[30px] sm:text-[40px] font-bold tracking-tight mb-4">
            {t.contact.estimateTitle}
          </h2>
          <Link href="/request-quote" className="btn btn-primary mt-4">
            {t.common.requestQuote} <span className="arrow">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
