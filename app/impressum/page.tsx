import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";

export const metadata: Metadata = {
  title: "Impressum | Ravian Matrix Systems",
  description: "Legal Notice (Impressum) for Ravian Matrix Systems pursuant to German DDG.",
};

const tocItems = [
  { id: "info-5-ddg", label: "Section 5 DDG Info" },
  { id: "contact", label: "Contact Details" },
  { id: "legal-form", label: "Legal Form" },
  { id: "business-owner", label: "Business Owner" },
  { id: "business-reg", label: "Business Registration" },
  { id: "comm-register", label: "Commercial Register" },
  { id: "activity", label: "Business Activity" },
  { id: "vat-id", label: "VAT ID" },
  { id: "responsible", label: "Content Responsibility" },
  { id: "dispute", label: "Dispute Resolution" },
  { id: "liability", label: "Liability Notice" },
  { id: "copyright", label: "Copyright Statement" },
  { id: "credits", label: "Media Credits" }
];

export default function ImpressumPage() {
  return (
    <div className="bg-bg-base text-primary min-h-screen">
      <PageHero 
        eyebrow="Legal"
        title="Impressum"
        description="Legal Notice"
      />
      
      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 lg:gap-20 items-start">
            
            {/* Sticky Table of Contents Sidebar */}
            <aside className="sticky top-28 hidden md:block border-r border-line pr-8">
              <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted mb-4">{"// Table of Contents"}</h4>
              <nav className="flex flex-col gap-2.5">
                {tocItems.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    className="text-xs text-muted hover:text-gold transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Impressum Content Block */}
            <div className="space-y-12 max-w-[800px] text-muted">
              
              <div id="info-5-ddg" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">Information pursuant to Section 5 DDG</h2>
                <div className="not-italic text-primary bg-bg-base p-6 rounded-xl border border-line font-mono text-[13px] leading-relaxed shadow-inner">
                  <strong>Ravian Matrix Systems</strong><br />
                  Arslan Saleem<br />
                  Pfeilschifterstraße 27<br />
                  c/o Amjad<br />
                  80997 Munich<br />
                  Germany
                </div>
              </div>

              <div id="contact" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">Contact</h2>
                <div className="space-y-1.5 font-mono text-[13px] text-primary">
                  <div>Email: <a href="mailto:info@ravian-matrix.de" className="text-gold hover:underline">info@ravian-matrix.de</a></div>
                  <div>Phone: +49 1522 3834292</div>
                </div>
              </div>

              <div id="legal-form" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Legal Form</h2>
                <p className="leading-relaxed text-[15px]">Sole proprietorship / Einzelunternehmen</p>
              </div>

              <div id="business-owner" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Business Owner</h2>
                <p className="leading-relaxed text-[15px]">Arslan Saleem</p>
              </div>

              <div id="business-reg" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Business Registration</h2>
                <p className="leading-relaxed text-[15px]">The business is registered with the Gewerbeamt München.</p>
              </div>

              <div id="comm-register" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Commercial Register</h2>
                <p className="leading-relaxed text-[15px]">The business is not entered in the Commercial Register / Handelsregister.</p>
              </div>

              <div id="activity" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Business Activity</h2>
                <p className="leading-relaxed text-[15px]">
                  IT services, web solutions, software development, geospatial intelligence, data processing, digital growth, and related digital services.
                </p>
              </div>

              <div id="vat-id" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">VAT Identification Number</h2>
                <p className="leading-relaxed mb-2 text-[15px]">VAT Identification Number pursuant to Section 27a of the German VAT Act:</p>
                <p className="text-gold font-mono text-[13px]">DE462413103</p>
              </div>

              <div id="responsible" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">Responsible for Content</h2>
                <p className="leading-relaxed mb-4 text-[15px]">Responsible for content according to Section 18(2) MStV:</p>
                <div className="not-italic text-primary bg-bg-base p-6 rounded-xl border border-line font-mono text-[13px] leading-relaxed shadow-inner">
                  Arslan Saleem<br />
                  Pfeilschifterstraße 27<br />
                  c/o Amjad<br />
                  80997 Munich<br />
                  Germany
                </div>
              </div>

              <div id="dispute" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Online Dispute Resolution</h2>
                <p className="leading-relaxed text-[15px]">
                  The European Commission provides a platform for online dispute resolution. We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </div>

              <div id="liability" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Liability for Own Content</h2>
                <p className="leading-relaxed text-[15px]">
                  As a service provider, we are responsible for our own content on this website in accordance with general laws. We make reasonable efforts to keep the information on this website accurate and up to date. However, we do not guarantee that all content is complete, accurate, or current at all times.
                </p>
              </div>

              <div className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Liability for External Links</h2>
                <p className="leading-relaxed text-[15px] mb-4">
                  This website may contain links to external third-party websites. We have no influence over the current or future content of those external websites.
                </p>
                <p className="leading-relaxed text-[15px]">
                  The respective provider or operator of the linked pages is responsible for their content. At the time of linking, no legal violations were recognizable. If we become aware of any legal violations, we will remove such links without delay.
                </p>
              </div>

              <div id="copyright" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Copyright</h2>
                <p className="leading-relaxed text-[15px]">
                  The content, texts, graphics, images, layouts, and other materials created for this website are protected by copyright. Any reproduction, editing, distribution, or use beyond the limits of copyright law requires prior written permission from the respective rights holder. Downloads and copies of this website are permitted only for private, non-commercial use unless otherwise stated.
                </p>
              </div>

              <div id="credits" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-3">Image and Media Credits</h2>
                <p className="leading-relaxed text-[15px]">
                  Images, icons, graphics, and media used on this website are either created by us, licensed, or used from legally permitted sources. If you believe that any content on this website violates your rights, please contact us. We will review the matter and remove or correct the content where necessary.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
