import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/ui-custom/ServiceDetailPage";
import { locales } from "@/lib/i18n/locales";
import { en } from "@/lib/i18n/translations/en";
import { de } from "@/lib/i18n/translations/de";

const SLUGS = ["web-development", "software-development", "geospatial-intelligence", "digital-growth"];

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  locales.forEach((locale) => {
    SLUGS.forEach((slug) => {
      params.push({ locale, slug });
    });
  });
  return params;
}

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const isDe = locale === "de";
  const t = isDe ? de : en;
  const service = t.servicesData[slug];
  if (!service) return {};

  return {
    title: `${service.title} | Ravian Matrix Systems`,
    description: service.description,
    alternates: {
      canonical: `https://ravian-matrix.de/${locale}/services/${slug}`,
      languages: {
        en: `https://ravian-matrix.de/en/services/${slug}`,
        de: `https://ravian-matrix.de/de/services/${slug}`,
        "x-default": `https://ravian-matrix.de/en/services/${slug}`,
      }
    }
  };
}

export default function ServiceDetailRoute({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const isDe = locale === "de";
  const t = isDe ? de : en;
  const service = t.servicesData[slug];

  if (!service) notFound();

  return <ServiceDetailPage service={service as any} />;
}
