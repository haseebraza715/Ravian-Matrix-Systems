import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui-custom/PageHero";
import QuoteForm from "@/components/ui-custom/QuoteForm";
import { Card } from "@/components/ui-custom/Card";
import { ClipboardList, MessagesSquare, FileText, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Quote | Ravian Matrix Systems",
  description: "Tell Ravian Matrix Systems about your web, software, GIS, or digital growth project and request a structured non-binding quote.",
};

const nextSteps = [
  {
    icon: ClipboardList,
    title: "1. Requirement Review",
    desc: "We review your submitted project information, service needs, timeline, and available materials.",
  },
  {
    icon: MessagesSquare,
    title: "2. Technical Alignment",
    desc: "If required, we contact you for clarification or arrange a short meeting to better understand your project requirements.",
  },
  {
    icon: FileText,
    title: "3. Non-Binding Quote",
    desc: "We prepare a structured, non-binding quote with proposed scope, timeline, deliverables, and estimated cost.",
  },
  {
    icon: Rocket,
    title: "4. Project Start",
    desc: "Once the scope is agreed, we define the next steps and begin the project according to the agreed milestones.",
  },
];

export default function RequestQuotePage() {
  return (
    <div className="bg-bg-base min-h-screen text-primary">
      <PageHero
        eyebrow="Request a Quote"
        title="Tell Us About Your Project"
        description="Share your project requirements with Ravian Matrix Systems and we will review your request carefully. Whether you need a professional website, custom application, geospatial solution, digital marketing support, or a complete digital system, we will prepare a structured, non-binding quote based on your project scope, timeline, and technical requirements."
      />

      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <div className="eyebrow mb-6">Request a Non-Binding Quote</div>
              <h2 className="text-[32px] font-bold tracking-tight mb-6 leading-tight">Use this form to describe your project needs.</h2>
              <p className="text-muted leading-relaxed">
                The more details you provide, the better we can understand your requirements and prepare a suitable proposal.
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
            <div className="eyebrow mx-auto mb-4">What Happens Next?</div>
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight">
              Quote request <span className="text-gold">process</span>
            </h2>
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
          <div className="eyebrow mb-4">Need General Information?</div>
          <h2 className="text-[30px] sm:text-[40px] font-bold tracking-tight mb-4">
            For general questions, business inquiries, partnerships, or non-project communication, please use the Contact Us page.
          </h2>
          <Link href="/contact" className="btn btn-primary mt-4">
            Contact Us <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
