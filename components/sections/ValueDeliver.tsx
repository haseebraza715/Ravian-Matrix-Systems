"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
  Globe, Laptop, AppWindow, Layout, UserCheck, Briefcase, 
  MapPin, Map, BarChart3, Shield, FileText, Settings
} from "lucide-react";
import { Card } from "@/components/ui-custom/Card";
import { useTranslation } from "@/lib/i18n/useTranslation";

const buildItems = [
  { icon: Globe },
  { icon: Laptop },
  { icon: AppWindow },
  { icon: Layout },
  { icon: UserCheck },
  { icon: Briefcase },
  { icon: BarChart3 },
  { icon: Map },
  { icon: MapPin },
  { icon: Shield },
  { icon: FileText },
  { icon: Settings }
];

export default function ValueDeliver() {
  const ref = useScrollReveal();
  const { translations } = useTranslation();
  const { eyebrow, titleHtml, description, items } = translations.valueDeliver;

  return (
    <section className="py-12 sm:py-20 md:py-32 bg-bg-base" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Block */}
          <div>
            <div className="reveal eyebrow mb-4">{eyebrow}</div>
            <h2 
              className="reveal reveal-delay-1 text-[32px] sm:text-[46px] leading-[1.2] font-bold text-primary"
              dangerouslySetInnerHTML={{ __html: titleHtml }}
            />
            <p className="reveal reveal-delay-2 text-muted text-[16px] leading-[1.6] mt-6 max-w-[420px]">
              {description}
            </p>
          </div>

          {/* Right Block - 2 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {buildItems.map((item, index) => {
              const Icon = item.icon;
              const name = items[index] || "";
              return (
                <div 
                  key={index} 
                  className={`reveal reveal-delay-${Math.min(Math.floor(index / 2) + 1, 5)}`}
                >
                  <Card 
                    hoverEffect
                    glow
                    className="flex gap-4 p-5 items-center bg-bg-surface border-line"
                  >
                    <div className="w-10 h-10 rounded-lg bg-bg-base border border-line flex items-center justify-center text-gold group-hover:bg-gold/10 transition-all duration-300 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[15.5px] font-semibold tracking-tight text-primary transition-colors duration-300">
                      {name}
                    </h3>
                  </Card>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
