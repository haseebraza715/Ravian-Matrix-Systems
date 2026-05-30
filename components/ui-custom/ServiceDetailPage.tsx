"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card } from "@/components/ui-custom/Card";
import type { ServiceData } from "@/data/services";

function ServiceHeroVisual({ id }: { id: string }) {
  const visualMap: Record<string, { src: string; alt: string }> = {
    "web-development": { src: "/service-web.png", alt: "Web solutions interface preview" },
    "software-development": { src: "/service-software.png", alt: "Software development workflow preview" },
    "geospatial-intelligence": { src: "/service-geospatial.png", alt: "Geospatial intelligence map preview" },
    "digital-growth": { src: "/service-growth.png", alt: "Digital growth dashboard preview" },
  };
  const visual = visualMap[id] || visualMap["web-development"];

  return (
    <div className="relative w-full max-w-[460px]">
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-gold/15 via-signal/10 to-gold/15 blur-2xl" />
      <div className="relative rounded-2xl border border-line bg-bg-surface p-2.5 shadow-[0_18px_45px_rgba(5,8,15,0.65)]">
        <Image
          src={visual.src}
          alt={visual.alt}
          width={960}
          height={720}
          className="w-full aspect-[4/3] object-cover rounded-xl border border-line/50"
          priority
        />
      </div>
    </div>
  );
}

export default function ServiceDetailPage({ service }: { service: ServiceData }) {
  const ref = useScrollReveal();

  return (
    <div className="bg-bg-base min-h-screen text-primary" ref={ref}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "Organization",
              name: "Ravian Matrix Systems",
              url: "https://ravianmatrixsystems.de",
            },
          }),
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 pt-32 pb-4 relative z-20">
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm tracking-[0.06em] uppercase text-muted">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 opacity-50" />
          <Link href="/services" className="hover:text-gold transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3 h-3 opacity-50" />
          <span className="text-gold font-semibold">{service.title}</span>
        </nav>
      </div>

      <section className="pb-16 pt-6 relative overflow-hidden bg-bg-base border-b border-line">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/[0.015] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start text-left">
              <div className="reveal eyebrow mb-6">{service.eyebrow}</div>
              <h1 className="reveal reveal-delay-1 text-[clamp(28px,4.5vw,56px)] leading-[1.2] font-bold mb-6 text-balance text-primary">
                {service.subtitle}
              </h1>
              <p className="reveal reveal-delay-2 text-[16px] sm:text-[17px] leading-[1.65] max-w-[700px] text-muted mb-4">
                {service.description}
              </p>
              <p className="reveal reveal-delay-3 text-[15px] sm:text-[16px] leading-[1.65] max-w-[700px] text-muted mb-10">
                {service.introParagraphs[0]}
              </p>
              <div className="reveal reveal-delay-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
                <Link href="/request-quote" className="btn btn-primary group w-full sm:w-auto">
                  Request a Non-Binding Quote
                  <ArrowRight className="w-4 h-4 arrow" />
                </Link>
                <Link href="/contact" className="btn btn-ghost w-full sm:w-auto">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="reveal reveal-delay-2 w-full flex items-center justify-center">
              <ServiceHeroVisual id={service.id} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-16 items-start">
            <div>
              <div className="reveal eyebrow text-gold/80 before:bg-gold">Built Around Your Requirements</div>
              <h2 className="reveal reveal-delay-1 text-[28px] sm:text-[34px] tracking-tight font-bold leading-tight mt-4">
                {service.introTitle}
              </h2>
            </div>
            <div className="reveal reveal-delay-2 flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.65] text-muted">
              {service.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="mb-14">
            <div className="reveal eyebrow mb-4">What We Provide</div>
            <h2 className="reveal reveal-delay-1 text-[32px] sm:text-[42px] font-bold tracking-tight">
              {service.providesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.providesItems.map((item, idx) => (
              <div key={item.title} className="flex">
                <Card className={`p-6 sm:p-8 bg-bg-surface border-line flex flex-col justify-between h-full w-full ${idx % 2 === 0 ? "reveal" : "reveal reveal-delay-1"}`} glow>
                  <div>
                    <h3 className="text-[20px] font-semibold text-primary mb-3">{item.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-muted mb-5">{item.description}</p>
                    <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-gold mb-3">Includes</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.includes.map((include) => (
                        <li key={include} className="flex items-start gap-2 text-[14px] text-muted">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span>{include}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <div className="reveal eyebrow mb-4">Approach</div>
            <h2 className="reveal reveal-delay-1 text-[32px] sm:text-[42px] font-bold tracking-tight">
              {service.approachTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {service.approachItems.map((item, index) => (
              <Card key={item.title} className={`p-6 bg-bg-base border-line ${index % 2 === 0 ? "reveal" : "reveal reveal-delay-1"}`} hoverEffect={false}>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-gold mb-3">0{index + 1}</div>
                <h3 className="text-[18px] font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <div className="reveal eyebrow mb-4">Suitable For</div>
            <h2 className="reveal reveal-delay-1 text-[32px] sm:text-[42px] font-bold tracking-tight">
              {service.suitableTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.suitableItems.map((item, index) => (
              <div key={item} className={`flex items-center gap-3 rounded-xl border border-line bg-bg-surface px-5 py-4 ${index % 2 === 0 ? "reveal" : "reveal reveal-delay-1"}`}>
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-[15px] text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <div className="reveal eyebrow mb-4">How We Work</div>
            <h2 className="reveal reveal-delay-1 text-[32px] sm:text-[42px] font-bold tracking-tight">
              {service.howWeWorkTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1180px]:grid-cols-5 gap-5">
            {service.howWeWorkSteps.map((step, index) => (
              <Card key={step.number} className={`p-6 bg-bg-base border-line flex flex-col ${index === 0 ? "reveal" : "reveal reveal-delay-1"}`} hoverEffect={false}>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-gold mb-4">
                  Step {step.number}
                </div>
                <h3 className="text-[18px] font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 md:py-32 bg-bg-base text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/[0.01] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[750px] mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
          <div className="reveal eyebrow mb-6">Request a Non-Binding Quote</div>
          <h2 className="reveal reveal-delay-1 text-[32px] sm:text-[44px] tracking-tight font-bold mb-6 leading-tight">
            {service.ctaTitle}
          </h2>
          <p className="reveal reveal-delay-2 text-[16px] sm:text-[17px] leading-relaxed text-muted max-w-[550px] mb-8">
            {service.ctaDescription}
          </p>
          <div className="reveal reveal-delay-3 flex flex-col items-center gap-4">
            <Link href="/request-quote" className="btn btn-primary group">
              Request a Non-Binding Quote
              <ArrowRight className="w-4 h-4 arrow" />
            </Link>
            <div className="font-mono text-gold text-[10px] tracking-[0.2em] uppercase mt-2">
              {service.slogan}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
