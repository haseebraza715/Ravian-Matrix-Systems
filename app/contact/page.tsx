import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import ContactForm from "@/components/ui-custom/ContactForm";
import { Card } from "@/components/ui-custom/Card";
import { Mail, Clock, MapPin, Send, PhoneCall, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Ravian Matrix Systems",
  description: "Request a GIS solution. Share your project requirements and we will provide a structured approach.",
};

const nextSteps = [
  {
    icon: Send,
    title: "1. Submission Review",
    desc: "We analyze your project details and spatial data parameters. You receive an initial response within 24 business hours."
  },
  {
    icon: PhoneCall,
    title: "2. Technical Alignment",
    desc: "We schedule a brief 15-minute virtual meeting to align on database structures, user flows, and delivery goals."
  },
  {
    icon: FileText,
    title: "3. Milestone Quote",
    desc: "We provide a structured, fixed-price, non-binding quote divided into clear project milestones before contract signing."
  }
];

export default function ContactPage() {
  return (
    <div className="bg-bg-base min-h-screen text-primary">
      <PageHero 
        eyebrow="Contact"
        title="Start a project with us."
        description="Share your project requirements and we will provide a structured approach and tailored quotation."
      />
      
      <section className="py-20 bg-bg-base border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            
            {/* Left Block: Contact Details */}
            <div>
              <div className="eyebrow mb-6">Get in touch</div>
              <h2 className="text-[32px] font-bold tracking-tight mb-6 leading-tight">
                Let&apos;s discuss your spatial data and application needs.
              </h2>
              <p className="mb-12 leading-relaxed text-muted">
                Whether you need a full WebGIS platform, automated remote sensing pipelines, or a structured spatial database, our team is ready to deliver.
              </p>

              <div className="flex flex-col gap-6">
                <div className="border-b border-line pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-4 h-4 text-gold" />
                    <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted">Location</h4>
                  </div>
                  <p className="text-[16px] font-semibold text-primary">Munich, Germany</p>
                  <p className="text-[14px] mt-0.5 text-muted">Serving clients worldwide</p>
                </div>
                
                <div className="border-b border-line pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Mail className="w-4 h-4 text-gold" />
                    <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted">Contact</h4>
                  </div>
                  <a href="mailto:info@ravianmatrixsystems.de" className="text-[16px] font-semibold text-primary hover:text-gold transition-colors">
                    info@ravianmatrixsystems.de
                  </a>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Clock className="w-4 h-4 text-gold" />
                    <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted">Business Hours</h4>
                  </div>
                  <p className="text-[16px] font-semibold text-primary">Mon–Fri, 9am–6pm (CET)</p>
                </div>
              </div>
            </div>

            {/* Right Block: Form */}
            <div className="flex justify-center lg:justify-end w-full">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="mb-16 text-center">
            <div className="eyebrow mx-auto mb-4">Process</div>
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight">
              What happens <span className="text-gold">next?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Card key={idx} className="p-6 bg-bg-base border-line flex flex-col h-full" glow>
                  <div className="w-10 h-10 rounded-lg bg-bg-surface border border-line flex items-center justify-center text-gold mb-6 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-[14px] leading-relaxed text-muted">{step.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
