import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Ravian Matrix Systems",
  description: "Datenschutzerklärung and privacy information for Ravian Matrix Systems.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero 
        eyebrow="Legal Information"
        title="Privacy Policy"
        description="Datenschutzerklärung"
      />
      
      <section className="py-16 sm:py-24 bg-brand-black" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-[800px] mx-auto px-6 sm:px-8 text-white/80 space-y-12">
          
          <div>
            <h2 className="text-[24px] text-brand-cream font-medium mb-4">1. General Information</h2>
            <p className="leading-relaxed mb-4">
              We take the protection of personal data seriously. This Privacy Policy explains how personal data is processed when you visit this website, contact us, or request a non-binding quote. Personal data means any information that can identify a person directly or indirectly.
            </p>
            <p className="leading-relaxed">
              This website is operated in accordance with the General Data Protection Regulation (GDPR) and applicable German data protection requirements.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-brand-cream font-medium mb-4">2. Controller</h2>
            <p className="leading-relaxed mb-2">The controller responsible for data processing on this website is:</p>
            <address className="not-italic text-white/70 bg-white/5 p-4 rounded-lg border border-white/10 font-mono text-[13px] leading-loose">
              Ravian Matrix Systems<br />
              Arslan Saleem<br />
              Pfeilschifterstraße 27<br />
              c/o Amjad<br />
              80997 Munich<br />
              Germany<br />
              Email: info@ravianmatrixsystems.de
            </address>
          </div>

          <div>
            <h2 className="text-[24px] text-brand-cream font-medium mb-4">3. Website Hosting and Server Log Files</h2>
            <p className="leading-relaxed mb-4">
              When you visit this website, technical data may be processed automatically by the hosting provider to ensure the secure, stable, and reliable operation of the website.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-white/70 mb-4">
              <li>IP address</li>
              <li>Date and time of access</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Requested pages or files</li>
            </ul>
            <p className="leading-relaxed">Legal basis: Art. 6(1)(f) GDPR. The legitimate interest is the secure and functional operation of this website.</p>
          </div>

          <div>
            <h2 className="text-[24px] text-brand-cream font-medium mb-4">4. Contact Form and Quote Requests</h2>
            <p className="leading-relaxed mb-4">
              If you contact us through the contact form or request a non-binding quote, we process the information you provide (such as full name, email address, company, and project description). We use this data only to review your inquiry, communicate with you, and prepare a non-binding quote.
            </p>
            <p className="leading-relaxed">
              Legal basis: Art. 6(1)(b) GDPR for pre-contractual communication, and Art. 6(1)(f) GDPR for general business communication.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-brand-cream font-medium mb-4">5. Data Sharing and External Contractors</h2>
            <p className="leading-relaxed mb-4">
              We do not sell personal data. Personal data may be shared only where necessary for website hosting, email communication, or technical maintenance. Some technical or project-related work may be supported by external contractors; in this case, data will be minimized and limited to technical project requirements.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-brand-cream font-medium mb-4">6. Cookies and Analytics</h2>
            <p className="leading-relaxed mb-4">
              This website does not currently use cookies, analytics tools (like Google Analytics), or marketing tracking pixels. If cookies or similar technologies are introduced in the future, this Privacy Policy will be updated and a consent mechanism will be implemented where required.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] text-brand-cream font-medium mb-4">7. Your Rights</h2>
            <p className="leading-relaxed mb-4">
              Under the GDPR, you have rights regarding your personal data. These include the right of access, right to rectification, right to erasure, right to restriction of processing, right to data portability, and the right to object to processing. To exercise your rights, contact us at info@ravianmatrixsystems.de.
            </p>
            <p className="leading-relaxed">
              You also have the right to lodge a complaint with a data protection supervisory authority. For private-sector businesses in Bavaria, the competent authority is the Bayerisches Landesamt für Datenschutzaufsicht (BayLDA).
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 text-[13px] text-white/50">
            Last Updated: May 2026
          </div>

        </div>
      </section>
    </div>
  );
}
