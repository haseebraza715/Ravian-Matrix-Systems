import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import CTASection from "@/components/sections/CTASection";
import { Card } from "@/components/ui-custom/Card";
import { TeamMemberCard } from "@/components/ui-custom/TeamMemberCard";
import { locales } from "@/lib/i18n/locales";
import { en } from "@/lib/i18n/translations/en";
import { de } from "@/lib/i18n/translations/de";
import { Link } from "@/lib/i18n/Link";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isDe = locale === "de";
  const translations = isDe ? de : en;
  return {
    title: translations.seo.about.title,
    description: translations.seo.about.description,
    alternates: {
      canonical: `https://ravian-matrix.de/${locale}/about`,
      languages: {
        en: "https://ravian-matrix.de/en/about",
        de: "https://ravian-matrix.de/de/about",
        "x-default": "https://ravian-matrix.de/en/about",
      }
    }
  };
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const isDe = locale === "de";
  const t = isDe ? de : en;

  const teamMemberMeta = [
    {
      image: "/team-arslan.png",
      imageWidth: 1089,
      imageHeight: 1444,
    },
    {
      image: "/team-manisha.png",
      imageWidth: 1200,
      imageHeight: 1600,
    },
    {
      image: "/team-haseeb.png",
      imageWidth: 1110,
      imageHeight: 1197,
    },
    {
      image: undefined,
    },
    {
      image: undefined,
    },
    {
      image: undefined,
    },
  ];

  const teamMembers = t.about.teamMembers.map((member, idx) => ({
    ...member,
    ...teamMemberMeta[idx],
  }));

  return (
    <div className="bg-bg-base min-h-screen w-full text-primary">
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
      />

      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16 items-start">
            <div>
              <h2 className="text-[28px] sm:text-[34px] tracking-tight font-bold leading-tight">
                {t.about.whoWeAreTitle}
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.65] text-muted">
              <p className="font-semibold text-gold">
                {t.about.whoWeAreSubhead}
              </p>
              {t.about.whoWeAreParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="max-w-[760px] mb-12">
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight">{t.about.foundationTitle}</h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-muted mt-4">
              {t.about.foundationDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.foundationCards.map((card) => (
              <div key={card.title} className="flex">
                <Card className="p-6 sm:p-8 bg-bg-surface border-line flex flex-col h-full w-full" glow>
                  <div className="font-mono text-xs tracking-[0.12em] uppercase text-gold mb-4">{card.title}</div>
                  <p className="text-[14.5px] leading-relaxed text-muted">{card.body}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="team"
        className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line scroll-mt-28"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="max-w-[820px] mb-12">
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight">{t.about.teamTitle}</h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-muted mt-4">
              {t.about.teamDesc}
            </p>
            <p className="text-[14px] leading-[1.6] text-muted/80 mt-3">
              {t.about.teamCoordinationNote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex min-h-0 min-w-0">
                <TeamMemberCard member={member} className="min-w-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-[22px] font-bold text-primary mb-4">{t.about.coordinationTitle}</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">
                  {t.about.coordinationDesc}
                </p>
              </div>

              <div>
                <h3 className="text-[22px] font-bold text-primary mb-4">{t.about.whyWorkWithUsTitle}</h3>
                <p className="text-[14.5px] leading-relaxed text-gold font-semibold mb-2">
                  {t.about.whyWorkWithUsSubhead}
                </p>
                {t.about.whyWorkWithUsParagraphs.map((para, idx) => (
                  <p key={idx} className={`text-[14.5px] leading-relaxed text-muted ${idx > 0 ? "mt-4" : ""}`}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <Card className="p-8 sm:p-10 bg-bg-surface border-line flex flex-col justify-between" glow>
              <div>
                <h3 className="text-[22px] font-bold text-primary mb-4">{t.about.communicationTitle}</h3>
                <p className="text-[14.5px] leading-relaxed text-gold font-semibold mb-2">
                  {t.about.communicationSubhead}
                </p>
                <p className="text-[14.5px] leading-relaxed text-muted">
                  {t.about.communicationDesc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-line">
                <Link href="/request-quote" className="btn btn-primary w-full justify-center">
                  {t.common.requestQuote} <span className="arrow">→</span>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
