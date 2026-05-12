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
      
      <section className="py-16 sm:py-24" style={{ background: '#FAF6EA' }}>
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
            <div>
              <div className="eyebrow mb-6 !text-[#6B655B]">Get in touch</div>
              <h2 className="text-[32px] font-medium tracking-tight mb-6" style={{ color: '#0E0E0C' }}>
                Let&apos;s discuss your spatial data needs.
              </h2>
              <p className="mb-12 leading-relaxed" style={{ color: '#2A2823' }}>
                Whether you need a full WebGIS platform, automated remote sensing pipelines, or a structured spatial database, our team is ready to deliver.
              </p>

              <div className="flex flex-col gap-6">
                <div className="border-b pb-4" style={{ borderColor: 'rgba(14,14,12,0.1)' }}>
                  <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5" style={{ color: '#6B655B' }}>Location</h4>
                  <p className="text-[16px] font-medium" style={{ color: '#0E0E0C' }}>Munich, Germany</p>
                  <p className="text-[14px] mt-0.5" style={{ color: '#2A2823' }}>Serving clients worldwide</p>
                </div>
                <div className="border-b pb-4" style={{ borderColor: 'rgba(14,14,12,0.1)' }}>
                  <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5" style={{ color: '#6B655B' }}>Contact</h4>
                  <a href="mailto:info@raviannmatrixsystems.de" className="text-[16px] font-medium hover:text-[#B8902A] transition-colors" style={{ color: '#0E0E0C' }}>
                    info@raviannmatrixsystems.de
                  </a>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase mb-1.5" style={{ color: '#6B655B' }}>Business Hours</h4>
                  <p className="text-[16px] font-medium" style={{ color: '#0E0E0C' }}>Mon–Fri, 9am–6pm (CET)</p>
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
