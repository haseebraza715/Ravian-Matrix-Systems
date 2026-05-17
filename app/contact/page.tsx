import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import ContactForm from "@/components/ui-custom/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ravian Matrix Systems",
  description: "Request a GIS solution. Share your project requirements and we will provide a structured approach.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero 
        eyebrow="Contact"
        title="Start a project with us."
        description="Share your project requirements and we will provide a structured approach and tailored quotation."
      />
      
      <section className="py-16 sm:py-24 bg-brand-black">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
            <div>
              <div className="eyebrow mb-6 text-gold/80 before:bg-gold">Get in touch</div>
              <h2 className="text-[32px] font-medium tracking-tight mb-6 text-brand-cream">
                Let&apos;s discuss your spatial data needs.
              </h2>
              <p className="mb-12 leading-relaxed text-white/80">
                Whether you need a full WebGIS platform, automated remote sensing pipelines, or a structured spatial database, our team is ready to deliver.
              </p>

              <div className="flex flex-col gap-6">
                <div className="border-b pb-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5 text-white/50">Location</h4>
                  <p className="text-[16px] font-medium text-brand-cream">Munich, Germany</p>
                  <p className="text-[14px] mt-0.5 text-white/80">Serving clients worldwide</p>
                </div>
                <div className="border-b pb-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5 text-white/50">Contact</h4>
                  <a href="mailto:info@ravianmatrixsystems.de" className="text-[16px] font-medium text-brand-cream hover:text-gold transition-colors">
                    info@ravianmatrixsystems.de
                  </a>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5 text-white/30">Business Hours</h4>
                  <p className="text-[16px] font-medium text-brand-cream">Mon–Fri, 9am–6pm (CET)</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
