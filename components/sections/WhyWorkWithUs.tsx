"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card } from "@/components/ui-custom/Card";

const reasons = [
  {
    title: "Requirement-Based Approach",
    desc: "We do not force one fixed solution or technology. We first understand your business needs, project goals, users, and expected outcomes.",
  },
  {
    title: "Practical Delivery",
    desc: "Our focus is on solutions that can be used in real business environments, not just visually attractive designs or incomplete concepts.",
  },
  {
    title: "Integrated Expertise",
    desc: "We combine IT, web development, geospatial analysis, data systems, automation, and digital communication under one structured service model.",
  },
  {
    title: "Clear Communication",
    desc: "We keep the process transparent from the first inquiry to final delivery, with clear scope, timeline, and deliverables.",
  },
  {
    title: "Scalable Solutions",
    desc: "Our solutions are designed so they can grow later with new features, integrations, modules, pages, or business functions.",
  },
];

export default function WhyWorkWithUs() {
  const ref = useScrollReveal();

  return (
    <section className="py-20 bg-bg-base text-primary relative overflow-hidden" ref={ref} style={{ borderBottom: '1px solid var(--line-soft)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="reveal text-[32px] sm:text-[46px] leading-[1.08] font-bold">
            Why work with <span className="text-gold">us.</span>
          </h2>
          <p className="reveal reveal-delay-1 text-muted text-[16px] leading-[1.6] max-w-[540px] mt-4">
            The home PDF outlines five reasons clients choose Ravian Matrix Systems for structured digital and technical delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {reasons.map((reason, idx) => (
            <div key={reason.title} className={`reveal reveal-delay-${Math.min(idx + 1, 5)} flex`}>
              <Card className="p-6 bg-bg-surface flex flex-col w-full h-full" glow>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-gold mb-4">0{idx + 1}</div>
                <h3 className="text-[18px] font-semibold tracking-tight text-primary mb-3">{reason.title}</h3>
                <p className="text-[14px] leading-relaxed text-muted">{reason.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
