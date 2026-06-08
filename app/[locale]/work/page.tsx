import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import CTASection from "@/components/sections/CTASection";
import WorkShowcase from "@/components/ui-custom/WorkShowcase";
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
    title: translations.seo.work.title,
    description: translations.seo.work.description,
    alternates: {
      canonical: `https://ravian-matrix.de/${locale}/work`,
      languages: {
        en: "https://ravian-matrix.de/en/work",
        de: "https://ravian-matrix.de/de/work",
        "x-default": "https://ravian-matrix.de/en/work",
      }
    }
  };
}

export default function WorkPage({ params: { locale } }: { params: { locale: string } }) {
  const isDe = locale === "de";
  const t = isDe ? de : en;

  const clientLabel = isDe ? "Kunde / Standort" : "Client / Location";
  const roleLabel = isDe ? "Rolle" : "Role";

  return (
    <div className="bg-bg-base min-h-screen text-primary">
      <PageHero 
        eyebrow={t.work.eyebrow}
        title={t.work.title}
        description={t.work.description}
      />

      {/* Portfolio Filter & Showcase */}
      <section className="py-16 sm:py-24 bg-bg-surface" style={{ borderBottom: '1px solid var(--line-soft)' }}>
        <WorkShowcase 
          categories={t.work.categories}
          projects={t.work.projects}
          requestDetailsLabel={t.work.requestDetails}
          clientLabel={clientLabel}
          roleLabel={roleLabel}
        />
      </section>

      <CTASection />
    </div>
  );
}
