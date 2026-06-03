import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Ravian Matrix Systems",
  description: "Datenschutzerklärung and privacy policy for Ravian Matrix Systems.",
};

const tocItems = [
  { id: "sec-1", label: "1. General Information" },
  { id: "sec-2", label: "2. Controller" },
  { id: "sec-3", label: "3. Website Hosting" },
  { id: "sec-4", label: "4. Contact Requests" },
  { id: "sec-5", label: "5. File Uploads" },
  { id: "sec-6", label: "6. Email Messages" },
  { id: "sec-7", label: "7. Non-Binding Quotes" },
  { id: "sec-8", label: "8. Data Sharing" },
  { id: "sec-9", label: "9. Contractors" },
  { id: "sec-10", label: "10. Cookies" },
  { id: "sec-11", label: "11. Analytics & Tracking" },
  { id: "sec-12", label: "12. Embedded Content" },
  { id: "sec-13", label: "13. Social Links" },
  { id: "sec-14", label: "14. Data Retention" },
  { id: "sec-15", label: "15. Legal Bases" },
  { id: "sec-16", label: "16. Your Rights" },
  { id: "sec-17", label: "17. Complaint Rights" },
  { id: "sec-18", label: "18. Data Security" },
  { id: "sec-19", label: "19. SSL/TLS Encryption" },
  { id: "sec-20", label: "20. Automated Logic" },
  { id: "sec-21", label: "21. Policy Changes" }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-bg-base text-primary min-h-screen">
      <PageHero 
        eyebrow="Legal"
        title="Privacy Policy"
        description="Datenschutzerklärung"
      />
      
      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 lg:gap-20 items-start">
            
            {/* Sticky Table of Contents Sidebar */}
            <aside className="sticky top-28 hidden md:block border-r border-line pr-8 max-h-[80vh] overflow-y-auto">
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

            {/* Content block */}
            <div className="space-y-12 max-w-[800px] text-muted text-[15px] leading-relaxed">
              
              <div id="sec-1" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">1. General Information</h2>
                <p className="mb-4">
                  We take the protection of personal data seriously. This Privacy Policy explains how personal data is processed when you visit this website, contact us, or request a non-binding quote.
                </p>
                <p className="mb-4">
                  Personal data means any information that can identify a person directly or indirectly. This may include your name, email address, phone number, company name, IP address, project details, or documents submitted through a form.
                </p>
                <p>
                  This website is operated in accordance with the General Data Protection Regulation (GDPR) and applicable German data protection requirements.
                </p>
              </div>

              <div id="sec-2" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">2. Controller</h2>
                <p className="mb-4">The controller responsible for data processing on this website is:</p>
                <div className="not-italic text-primary bg-bg-base p-6 rounded-xl border border-line font-mono text-[13px] leading-relaxed shadow-inner">
                  <strong>Ravian Matrix Systems</strong><br />
                  Arslan Saleem<br />
                  Pfeilschifterstraße 27<br />
                  c/o Amjad<br />
                  80997 Munich<br />
                  Germany<br />
                  Email: info@ravianmatrixsystems.de
                </div>
              </div>

              <div id="sec-3" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">3. Website Hosting and Server Log Files</h2>
                <p className="mb-4">
                  When you visit this website, technical data may be processed automatically by the hosting provider. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-muted">
                  <li>IP address</li>
                  <li>Date and time of access</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Requested pages or files</li>
                  <li>Referrer URL</li>
                  <li>Amount of data transferred</li>
                  <li>Access status or error messages</li>
                </ul>
                <p className="mb-4">
                  This data is processed to ensure the secure, stable, and reliable operation of the website, to identify technical issues, and to protect the website from misuse or attacks.
                </p>
                <p className="mb-4">
                  <strong>Legal basis:</strong> Art. 6(1)(f) GDPR. The legitimate interest is the secure and functional operation of this website.
                </p>
                <p className="mb-4">
                  <strong>Storage period:</strong> Server log files are stored only as long as necessary for technical and security purposes, unless longer retention is legally required.
                </p>
                <div className="bg-gold/[0.02] border border-gold/10 p-5 rounded-xl text-gold font-mono text-[13px] space-y-1 shadow-sm">
                  <div>Hosting provider: IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany</div>
                  <div>Hosting location: Germany</div>
                </div>
              </div>

              <div id="sec-4" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">4. Contact Form and Quote Requests</h2>
                <p className="mb-4">
                  If you contact us through the contact form or request a non-binding quote, we process the information you provide. This may include:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 text-muted">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Company or organization</li>
                  <li>Selected service</li>
                  <li>Project description</li>
                  <li>Timeline</li>
                  <li>Budget range, if provided</li>
                  <li>Uploaded files, if provided</li>
                  <li>Any additional information included in your message</li>
                </ul>
                <p className="mb-4">
                  We use this data only to review your inquiry, communicate with you, prepare a non-binding quote, and discuss possible services.
                </p>
                <p className="mb-4">
                  <strong>Legal basis:</strong><br />
                  Art. 6(1)(b) GDPR, where processing is necessary for pre-contractual communication or preparing a quote.<br />
                  Art. 6(1)(f) GDPR, where processing is necessary for general business communication and handling inquiries.
                </p>
                <p className="text-[13px] italic text-muted/60">
                  * A quote request does not create a contract unless both parties expressly agree to proceed.
                </p>
              </div>

              <div id="sec-5" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">5. File Uploads</h2>
                <p className="mb-4">
                  If the website provides a file upload option, you may upload project-related documents, briefs, sample data, or supporting material.
                </p>
                <p className="mb-4">
                  Please do not upload sensitive personal data, confidential third-party data, government identification documents, health data, financial documents, or private personal documents unless this is necessary for your project and has been agreed in advance.
                </p>
                <p>
                  Uploaded files are used only to review your inquiry or project requirements.
                </p>
              </div>

              <div id="sec-6" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">6. Email Communication</h2>
                <p className="mb-4">
                  If you contact us by email, we process the personal data included in your message. This may include name, email address, company details, message content, project information, and attachments.
                </p>
                <p className="mb-4">
                  We use this data to respond to your inquiry, communicate with you, and process your request.
                </p>
                <p className="mb-4">
                  <strong>Legal basis:</strong> Art. 6(1)(b) GDPR and Art. 6(1)(f) GDPR.
                </p>
                <p className="font-mono text-[13px] text-gold">
                  Email provider: IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany
                </p>
              </div>

              <div id="sec-7" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">7. Non-Binding Quotes</h2>
                <p>
                  If you request a quote, we process the information you provide in order to understand your requirements and prepare a non-binding proposal. Quote-related communication may be stored for business documentation, follow-up, and legal record-keeping where required.
                </p>
              </div>

              <div id="sec-8" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">8. Data Sharing</h2>
                <p className="mb-4">
                  We do not sell personal data. Personal data may be shared only where necessary for:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4 text-muted">
                  <li>Website hosting</li>
                  <li>Email communication</li>
                  <li>Contact form processing</li>
                  <li>Technical maintenance</li>
                  <li>Legal or tax obligations</li>
                  <li>Project communication</li>
                  <li>Service delivery after agreement</li>
                </ul>
                <p>
                  If external service providers are used, they are selected carefully and process data only according to appropriate contractual arrangements.
                </p>
              </div>

              <div id="sec-9" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">9. External Contractors and Project Support</h2>
                <p className="mb-4">
                  Some technical or project-related work may be supported by external contractors or service providers. If external support is required for a project, only the information necessary for the project will be shared. Where possible, data will be minimized, anonymized, or limited to technical project requirements.
                </p>
                <p className="mb-4">
                  If personal data is transferred outside the European Union or European Economic Area, such transfer will only take place where legally permitted and with appropriate safeguards.
                </p>
                <p>
                  For initial contact and quote requests, your inquiry will be handled for communication and project review purposes. Project data will not be shared with external contractors unless this becomes necessary for preparing or delivering the requested service.
                </p>
              </div>

              <div id="sec-10" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">10. Cookies</h2>
                <p className="mb-4">
                  This website does not currently use cookies. We do not currently use:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4 text-muted">
                  <li>Analytics cookies</li>
                  <li>Marketing cookies</li>
                  <li>Advertising cookies</li>
                  <li>Tracking pixels</li>
                  <li>Retargeting technologies</li>
                  <li>Social media tracking tools</li>
                </ul>
                <p>
                  If cookies or similar technologies are introduced in the future, this Privacy Policy will be updated accordingly. Where legally required, a cookie consent mechanism will be implemented before such technologies are activated.
                </p>
              </div>

              <div id="sec-11" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">11. Analytics and Tracking</h2>
                <p className="mb-4">
                  At launch, this website does not use analytics or marketing tracking tools. This means we currently do not use:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4 text-muted">
                  <li>Google Analytics</li>
                  <li>Meta Pixel</li>
                  <li>LinkedIn Insight Tag</li>
                  <li>Advertising tracking cookies</li>
                  <li>Heatmaps</li>
                  <li>Retargeting tools</li>
                </ul>
                <p>
                  If analytics or tracking tools are added later, this Privacy Policy will be updated and, where required, a consent solution will be implemented.
                </p>
              </div>

              <div id="sec-12" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">12. Embedded Third-Party Content</h2>
                <p className="mb-4">
                  At launch, this website does not intentionally use embedded third-party content such as Google Maps, YouTube videos, external booking tools, marketing pixels, or social media plugins.
                </p>
                <p>
                  If such services are added in the future, this Privacy Policy will be updated. Depending on the service, personal data such as IP address, browser information, or usage data may be transferred to third-party providers.
                </p>
              </div>

              <div id="sec-13" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">13. Social Media Links</h2>
                <p>
                  This website may include simple links to social media profiles. If you click such a link, you leave this website and visit the respective external platform. The operator of that platform is responsible for its own data processing. Please review the privacy policy of the respective platform before using it.
                </p>
              </div>

              <div id="sec-14" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">14. Data Retention</h2>
                <p className="mb-4">
                  We store personal data only as long as necessary for the purpose for which it was collected. Typical retention periods:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 text-muted">
                  <li><strong>Contact inquiries:</strong> As long as needed to process and follow up on the inquiry</li>
                  <li><strong>Quote communication:</strong> As long as needed for business documentation</li>
                  <li><strong>Project-related communication:</strong> As long as needed for service delivery and legal documentation</li>
                  <li><strong>Server logs:</strong> Only as long as necessary for technical and security purposes</li>
                </ul>
                <p>
                  Where legal retention obligations apply, data may be stored for longer.
                </p>
              </div>

              <div id="sec-15" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">15. Legal Bases for Processing</h2>
                <p className="mb-4">
                  Depending on the situation, personal data may be processed based on:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-4 text-muted">
                  <li><strong>Art. 6(1)(a) GDPR:</strong> Consent</li>
                  <li><strong>Art. 6(1)(b) GDPR:</strong> Pre-contractual or contractual communication</li>
                  <li><strong>Art. 6(1)(c) GDPR:</strong> Legal obligations</li>
                  <li><strong>Art. 6(1)(f) GDPR:</strong> Legitimate interests, such as secure website operation, business communication, and service improvement</li>
                </ul>
              </div>

              <div id="sec-16" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">16. Your Rights</h2>
                <p className="mb-4">
                  Under the GDPR, you have rights regarding your personal data. These may include:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 text-muted">
                  <li>Right of access</li>
                  <li>Right to rectification</li>
                  <li>Right to erasure</li>
                  <li>Right to restriction of processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent where processing is based on consent</li>
                </ul>
                <p>
                  To exercise your rights, contact us at: <strong>info@ravianmatrixsystems.de</strong>
                </p>
              </div>

              <div id="sec-17" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">17. Right to Lodge a Complaint</h2>
                <p className="mb-4">
                  You have the right to lodge a complaint with a data protection supervisory authority if you believe that your personal data is being processed unlawfully.
                </p>
                <p className="mb-4">
                  For private-sector businesses in Bavaria, the competent authority is generally:
                </p>
                <div className="bg-bg-base p-6 rounded-xl border border-line font-mono text-[13px] leading-relaxed shadow-inner">
                  <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
                  Promenade 18<br />
                  91522 Ansbach<br />
                  Germany<br />
                  Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.lda.bayern.de</a>
                </div>
                <p className="mt-4">
                  BayLDA is the Bavarian supervisory authority responsible for data protection supervision in the non-public/private sector in Bavaria.
                </p>
              </div>

              <div id="sec-18" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">18. Data Security</h2>
                <p>
                  We use appropriate technical and organizational measures to protect personal data against unauthorized access, loss, misuse, alteration, or disclosure. This includes reasonable security measures for website operation, communication, access control, and data handling.
                </p>
              </div>

              <div id="sec-19" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">19. SSL / TLS Encryption</h2>
                <p>
                  This website should use SSL/TLS encryption. You can recognize an encrypted connection by “https://” in the browser address bar. Encryption helps protect data transmitted through the website, including contact form submissions.
                </p>
              </div>

              <div id="sec-20" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">20. No Automated Decision-Making</h2>
                <p>
                  We do not use automated decision-making or profiling through this website.
                </p>
              </div>

              <div id="sec-21" className="scroll-mt-28">
                <h2 className="text-[20px] text-primary font-bold mb-4">21. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy when our website, services, technical systems, providers, or legal requirements change. The current version applies as published on this website.
                </p>
              </div>

              <div className="pt-8 border-t border-line text-[12px] text-muted/50 font-mono">
                Last Updated: May 2026
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
