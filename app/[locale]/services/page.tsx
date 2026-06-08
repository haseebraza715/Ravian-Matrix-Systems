import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import CoreServices from "@/components/sections/CoreServices";
import CTASection from "@/components/sections/CTASection";
import ServiceSelect from "@/components/ui-custom/ServiceSelect";
import { locales, Locale } from "@/lib/i18n/locales";
import { en } from "@/lib/i18n/translations/en";
import { de } from "@/lib/i18n/translations/de";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isDe = locale === "de";
  const translations = isDe ? de : en;
  return {
    title: translations.seo.services.title,
    description: translations.seo.services.description,
    alternates: {
      canonical: `https://ravian-matrix.de/${locale}/services`,
      languages: {
        en: "https://ravian-matrix.de/en/services",
        de: "https://ravian-matrix.de/de/services",
        "x-default": "https://ravian-matrix.de/en/services",
      }
    }
  };
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const isDe = locale === "de";
  const t = isDe ? de : en;

  const serviceOptions = [
    { label: t.coreServices.services[0].title, value: "/services/web-development" },
    { label: t.coreServices.services[1].title, value: "/services/software-development" },
    { label: t.coreServices.services[2].title, value: "/services/geospatial-intelligence" },
    { label: t.coreServices.services[3].title, value: "/services/digital-growth" },
  ];

  return (
    <div className="bg-bg-base text-primary min-h-screen">
      <PageHero
        eyebrow={t.servicesOverview.eyebrow}
        title={t.servicesOverview.title}
        description={t.servicesOverview.description}
      />

      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16 items-start">
            <div>
              <h2 className="text-[28px] sm:text-[34px] tracking-tight font-bold leading-tight">
                {t.servicesOverview.sectionTitle}
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.65] text-muted">
              {t.servicesOverview.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              
              <ServiceSelect 
                locale={locale as Locale}
                options={serviceOptions}
                chooseLabel={t.servicesOverview.chooseService}
                placeholder={t.servicesOverview.viewServicePage}
              />
            </div>
          </div>
        </div>
      </section>

      <CoreServices />
      <CTASection />
    </div>
  );
}
