import type { Metadata } from "next";
import { Link } from "@/lib/i18n/Link";
import PageHero from "@/components/ui-custom/PageHero";
import QuoteForm from "@/components/ui-custom/QuoteForm";
import { Card } from "@/components/ui-custom/Card";
import { ClipboardList, MessagesSquare, FileText, Rocket } from "lucide-react";
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
    title: translations.seo.requestQuote.title,
    description: translations.seo.requestQuote.description,
    alternates: {
      canonical: `https://ravian-matrix.de/${locale}/request-quote`,
      languages: {
        en: "https://ravian-matrix.de/en/request-quote",
        de: "https://ravian-matrix.de/de/request-quote",
        "x-default": "https://ravian-matrix.de/en/request-quote",
      }
    }
  };
}

export default function RequestQuotePage({ params: { locale } }: { params: { locale: string } }) {
  const isDe = locale === "de";
  const t = isDe ? de : en;

  const nextStepIcons = [ClipboardList, MessagesSquare, FileText, Rocket];
  const nextSteps = t.quote.processSteps.map((step, idx) => ({
    ...step,
    icon: nextStepIcons[idx],
  }));

  return (
    <div className="bg-bg-base min-h-screen text-primary">
      <PageHero
        eyebrow={t.quote.eyebrow}
        title={t.quote.title}
        description={t.quote.description}
      />

      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <div className="eyebrow mb-6">{t.quote.formEyebrow}</div>
              <h2 className="text-[32px] font-bold tracking-tight mb-6 leading-tight">{t.quote.formTitle}</h2>
              <p className="text-muted leading-relaxed">
                {t.quote.formDesc}
              </p>
            </div>

            <div className="flex justify-center lg:justify-end w-full">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="mb-16 text-center">
            <div className="eyebrow mx-auto mb-4">{t.quote.processEyebrow}</div>
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight" dangerouslySetInnerHTML={{ __html: t.quote.processTitle }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex">
                  <Card className="p-6 bg-bg-base border-line flex flex-col h-full w-full">
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

      <section className="py-12 sm:py-20 bg-bg-base">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 text-center">
          <div className="eyebrow mb-4">{t.quote.generalEyebrow}</div>
          <h2 className="text-[30px] sm:text-[40px] font-bold tracking-tight mb-4">
            {t.quote.generalTitle}
          </h2>
          <Link href="/contact" className="btn btn-primary mt-4">
            {t.common.contactUs} <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
