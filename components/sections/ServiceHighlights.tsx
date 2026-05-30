"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, Binary, Compass, Languages, Mail, PhoneCall } from "lucide-react";
import { Card } from "@/components/ui-custom/Card";

export default function ServiceHighlights() {
  const ref = useScrollReveal();

  const highlights = [
    {
      title: "For Businesses",
      description: "We help companies build professional digital systems that improve presentation, communication, and operations.",
      icon: Briefcase
    },
    {
      title: "For Technical Projects",
      description: "We support projects requiring structured development, data handling, geospatial analysis, and system integration.",
      icon: Binary
    },
    {
      title: "For Digital Presence",
      description: "We help businesses improve how they appear online through websites, branding, content structure, and visual communication.",
      icon: Compass
    }
  ];

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-bg-surface text-primary relative overflow-hidden" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      {/* Background patterns */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-gold/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Highlights Grid */}
          <div>
            <h2 className="reveal text-[32px] sm:text-[46px] leading-[1.2] font-bold text-primary mb-10">
              Service Highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((hl, index) => {
                const Icon = hl.icon;
                return (
                  <div key={index} className="reveal reveal-delay-1 flex">
                    <Card 
                      hoverEffect
                      glow
                      className="p-6 bg-bg-base border-line flex flex-col h-full"
                    >
                      <div className="w-10 h-10 rounded-lg bg-bg-surface border border-line flex items-center justify-center text-gold mb-6 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-[17px] font-semibold text-primary mb-3">{hl.title}</h3>
                      <p className="text-[14px] leading-relaxed text-muted">{hl.description}</p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Languages & Communication */}
          <div className="reveal reveal-delay-2 flex">
            <Card className="p-8 bg-bg-base border-line relative overflow-hidden group w-full" glow>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              
              <h3 className="text-[20px] font-semibold text-primary tracking-tight mb-4 flex items-center gap-2.5">
                <Languages className="w-5 h-5 text-gold" />
                Languages &amp; Communication
              </h3>
              
              <div className="text-[14px] text-muted leading-relaxed space-y-4">
                <p className="font-semibold text-primary">
                  We communicate with clients in English and German.
                </p>
                <p>
                  You can contact us through email or the quote form. After reviewing your inquiry, we can arrange a call, virtual meeting, or in-person discussion if required.
                </p>
                <p>
                  We respond within 24 hours with a non-binding quote.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-line flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[13.5px] text-muted hover:text-gold transition-colors">
                  <Mail className="w-6 h-6 text-gold/80" />
                  <span>info@ravianmatrixsystems.de</span>
                </div>
                <div className="flex items-center gap-3 text-[13.5px] text-muted hover:text-gold transition-colors">
                  <PhoneCall className="w-6 h-6 text-gold/80" />
                  <span>Available by appointment</span>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
