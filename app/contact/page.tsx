import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import ContactForm from "@/components/ui-custom/ContactForm";
import { Card } from "@/components/ui-custom/Card";
import Link from "next/link";
import { Mail, MapPin, Send, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Ravian Matrix Systems",
  description: "Contact Ravian Matrix Systems for general inquiries, business communication, partnerships, and service questions.",
};

const nextSteps = [
  {
    icon: Send,
    title: "1. Message Review",
    desc: "We review your inquiry and understand the purpose of your message."
  },
  {
    icon: Mail,
    title: "2. Initial Response",
    desc: "You receive a reply within 24 hours on business days with the relevant information or next step."
  },
  {
    icon: PhoneCall,
    title: "3. Follow-Up",
    desc: "If required, we arrange a call, virtual meeting, or further discussion by appointment."
  }
];

export default function ContactPage() {
  return (
    <div className="bg-bg-base min-h-screen text-primary">
      <PageHero 
        eyebrow="Contact Us"
        title="Let’s Start the Conversation"
        description="Have a question, business inquiry, partnership idea, or general message? Get in touch with Ravian Matrix Systems and our team will respond as soon as possible. For detailed project requirements and pricing, please use the Request a Quote page."
      />
      
      <section className="py-12 sm:py-20 md:py-32 bg-bg-base border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            
            {/* Left Block: Contact Details */}
            <div>
              <div className="eyebrow mb-6">Get in touch</div>
              <h2 className="text-[32px] font-bold tracking-tight mb-6 leading-tight">
                Contact Information
              </h2>
              <p className="mb-12 leading-relaxed text-muted">
                Use this page for general inquiries, business communication, partnership discussions, or questions about our services.
              </p>

              <div className="flex flex-col gap-6">
                <div className="border-b border-line pb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-4 h-4 text-gold" />
                    <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted">Location</h4>
                  </div>
                  <p className="text-[16px] font-semibold text-primary leading-snug">
                    Pfeilschifterstraße 27<br />
                    80997 Munich, Germany
                  </p>
                  <p className="text-[14px] mt-1.5 text-muted">Serving clients in Germany, Europe, and worldwide.</p>
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
              </div>
            </div>

            {/* Right Block: Form */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="w-full">
                <div className="mb-6">
                  <div className="eyebrow mb-4">Send Us a Message</div>
                  <p className="text-muted text-[15px] leading-relaxed max-w-[600px]">
                    Use this form for general inquiries, business communication, partnership discussions, or questions about our services.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface">
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
                <div key={idx} className="flex">
                  <Card className="p-6 bg-bg-base border-line flex flex-col h-full w-full" glow>
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

      <section className="py-12 sm:py-20 bg-bg-base border-b border-line">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 text-center">
          <div className="eyebrow mb-4">Need a Project Estimate?</div>
          <h2 className="text-[30px] sm:text-[40px] font-bold tracking-tight mb-4">
            For project scope, pricing, and timelines, please use our Request a Quote page.
          </h2>
          <Link href="/request-quote" className="btn btn-primary mt-4">
            Request a Quote <span className="arrow">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
