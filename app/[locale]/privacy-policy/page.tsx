import type { Metadata } from "next";
import PageHero from "@/components/ui-custom/PageHero";
import { locales } from "@/lib/i18n/locales";
import { en } from "@/lib/i18n/translations/en";
import { de } from "@/lib/i18n/translations/de";

// ⚠️ LEGAL REVIEW REQUIRED — DO NOT SHIP WITHOUT SIGN-OFF
// The German Datenschutzerklärung and its English translation MUST be reviewed and
// approved by the business owner or a legal advisor before production launch
// (GDPR/DSGVO compliance, controller details, legal bases, retention periods).
// Do not rewrite or alter the legal meaning of this text without explicit approval.

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isDe = locale === "de";
  const translations = isDe ? de : en;
  return {
    title: translations.seo.privacyPolicy.title,
    description: translations.seo.privacyPolicy.description,
    alternates: {
      canonical: `https://ravian-matrix.de/${locale}/privacy-policy`,
      languages: {
        en: "https://ravian-matrix.de/en/privacy-policy",
        de: "https://ravian-matrix.de/de/privacy-policy",
        "x-default": "https://ravian-matrix.de/en/privacy-policy",
      }
    }
  };
}

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  const isDe = locale === "de";

  const tocItems = isDe ? [
    { id: "sec-1", label: "1. Allgemeine Hinweise" },
    { id: "sec-2", label: "2. Verantwortlicher" },
    { id: "sec-3", label: "3. Hosting und Server-Logfiles" },
    { id: "sec-4", label: "4. Kontaktformular und Angebote" },
    { id: "sec-5", label: "5. Dateiuploads" },
    { id: "sec-6", label: "6. E-Mail-Kommunikation" },
    { id: "sec-7", label: "7. Unverbindliche Angebote" },
    { id: "sec-8", label: "8. Weitergabe von Daten" },
    { id: "sec-9", label: "9. Dienstleister und Auftragsverarbeiter" },
    { id: "sec-10", label: "10. Cookies" },
    { id: "sec-11", label: "11. Analyse- und Tracking-Tools" },
    { id: "sec-12", label: "12. Eingebettete Drittinhalte" },
    { id: "sec-13", label: "13. Social-Media-Links" },
    { id: "sec-14", label: "14. Aufbewahrungsdauer" },
    { id: "sec-15", label: "15. Rechtsgrundlagen" },
    { id: "sec-16", label: "16. Ihre Rechte" },
    { id: "sec-17", label: "17. Beschwerderecht" },
    { id: "sec-18", label: "18. Datensicherheit" },
    { id: "sec-19", label: "19. SSL- bzw. TLS-Verschlüsselung" },
    { id: "sec-20", label: "20. Keine automatisierte Entscheidungsfindung" },
    { id: "sec-21", label: "21. Änderungen dieser Richtlinie" }
  ] : [
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

  return (
    <div className="bg-bg-base text-primary min-h-screen">
      <PageHero 
        eyebrow="Legal"
        title={isDe ? "Datenschutzerklärung" : "Privacy Policy"}
        description={isDe ? "Hinweise zum Datenschutz" : "Datenschutzerklärung"}
      />
      
      <section className="py-12 sm:py-20 md:py-32 bg-bg-surface border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-12 lg:gap-20 items-start">
            
            {/* Sticky Table of Contents Sidebar */}
            <aside className="sticky top-28 hidden md:block border-r border-line pr-8 max-h-[80vh] overflow-y-auto">
              <h4 className="font-mono text-[10px] tracking-widest uppercase text-muted mb-4">
                {isDe ? "// Inhaltsverzeichnis" : "// Table of Contents"}
              </h4>
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
              
              {isDe ? (
                // GERMAN PRIVACY POLICY
                <>
                  <div id="sec-1" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">1. Allgemeine Hinweise</h2>
                    <p className="mb-4">
                      Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung erläutert, wie wir personenbezogene Daten verarbeiten, wenn Sie unsere Website besuchen, uns kontaktieren oder ein unverbindliches Angebot anfordern.
                    </p>
                    <p className="mb-4">
                      Personenbezogene Daten sind alle Informationen, mit denen eine Person direkt oder indirekt identifiziert werden kann. Dazu gehören beispielsweise Ihr Name, Ihre E-Mail-Adresse, Ihre Telefonnummer, Ihr Firmenname, Ihre IP-Adresse, Projektdetails oder hochgeladene Dateien.
                    </p>
                    <p>
                      Der Betrieb dieser Website erfolgt in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) und den geltenden landesspezifischen Datenschutzbestimmungen.
                    </p>
                  </div>

                  <div id="sec-2" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">2. Verantwortlicher</h2>
                    <p className="mb-4">Der Verantwortliche für die Datenverarbeitung auf dieser Website ist:</p>
                    <div className="not-italic text-primary bg-bg-base p-6 rounded-xl border border-line font-mono text-[13px] leading-relaxed shadow-inner">
                      <strong>Ravian Matrix Systems</strong><br />
                      Arslan Saleem<br />
                      Pfeilschifterstraße 27<br />
                      c/o Amjad<br />
                      80997 München<br />
                      Deutschland<br />
                      E-Mail: info@ravian-matrix.de
                    </div>
                  </div>

                  <div id="sec-3" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">3. Website-Hosting und Server-Logfiles</h2>
                    <p className="mb-4">
                      Beim Aufruf dieser Website werden automatisch technische Daten durch den Hosting-Provider verarbeitet. Dazu gehören:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-muted">
                      <li>IP-Adresse des zugreifenden Geräts</li>
                      <li>Datum und Uhrzeit des Zugriffs</li>
                      <li>Browsertyp und -version</li>
                      <li>Verwendetes Betriebssystem</li>
                      <li>Aufgerufene Seiten oder Dateien</li>
                      <li>Referrer-URL (die zuvor besuchte Seite)</li>
                      <li>Übertragene Datenmenge</li>
                      <li>Zugriffsstatus / HTTP-Statuscode</li>
                    </ul>
                    <p className="mb-4">
                      Diese Daten werden verarbeitet, um den sicheren, stabilen und zuverlässigen Betrieb der Website zu gewährleisten, technische Fehler zu analysieren und die Website vor Missbrauch oder Angriffen zu schützen.
                    </p>
                    <p className="mb-4">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Gewährleistung der dauerhaften Sicherheit und Funktionsfähigkeit unserer Website.
                    </p>
                    <p className="mb-4">
                      <strong>Speicherdauer:</strong> Server-Logfiles werden nur so lange gespeichert, wie es für technische und Sicherheitszwecke erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                    </p>
                    <div className="bg-gold/[0.02] border border-gold/10 p-5 rounded-xl text-gold font-mono text-[13px] space-y-1 shadow-sm">
                      <div>Hosting-Provider: IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland</div>
                      <div>Server-Standort: Deutschland</div>
                    </div>
                  </div>

                  <div id="sec-4" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">4. Kontaktformular und Angebote</h2>
                    <p className="mb-4">
                      Wenn Sie uns über das Kontaktformular oder zur Anforderung eines Angebots kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten. Dies umfasst in der Regel:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 text-muted">
                      <li>Name und Vorname</li>
                      <li>E-Mail-Adresse</li>
                      <li>Firma / Organisation</li>
                      <li>Gewünschte Dienstleistung</li>
                      <li>Projektbeschreibung</li>
                      <li>Gewünschter Zeitrahmen</li>
                      <li>Budgetvorstellung, sofern angegeben</li>
                      <li>Hochgeladene Dokumente, falls übermittelt</li>
                      <li>Weitere freiwillige Angaben in Ihrer Nachricht</li>
                    </ul>
                    <p className="mb-4">
                      Wir nutzen diese Daten ausschließlich zur Prüfung Ihrer Anfrage, zur direkten Kommunikation mit Ihnen, zur Vorbereitung eines unverbindlichen Angebots und zur Beratung bezüglich unserer Dienstleistungen.
                    </p>
                    <p className="mb-4">
                      <strong>Rechtsgrundlage:</strong><br />
                      Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Maßnahmen oder die Angebotserstellung auf Ihre Anfrage hin.<br />
                      Art. 6 Abs. 1 lit. f DSGVO für allgemeine geschäftliche Anfragen und Korrespondenz.
                    </p>
                  </div>

                  <div id="sec-5" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">5. Dateiuploads</h2>
                    <p className="mb-4">
                      Wenn Sie auf unserer Website Dateien hochladen, um uns Projektinformationen zukommen zu lassen, verarbeiten wir diese Dateien ausschließlich zur Bewertung Ihres Projektvorhabens.
                    </p>
                    <p className="mb-4">
                      Bitte achten Sie darauf, keine sensiblen personenbezogenen Daten (z.B. Gesundheitsdaten, Ausweisdokumente) oder vertrauliche Daten Dritter ohne vorherige Absprache hochzuladen.
                    </p>
                  </div>

                  <div id="sec-6" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">6. E-Mail-Kommunikation</h2>
                    <p className="mb-4">
                      Wenn Sie uns eine E-Mail senden, verarbeiten wir die in der E-Mail enthaltenen Daten sowie Ihre E-Mail-Adresse, um Ihr Anliegen zu bearbeiten.
                    </p>
                    <p className="mb-4">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b und lit. f DSGVO.
                    </p>
                    <p className="font-mono text-[13px] text-gold">
                      E-Mail-Anbieter: IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland
                    </p>
                  </div>

                  <div id="sec-7" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">7. Unverbindliche Angebote</h2>
                    <p>
                      Sofern Sie ein Angebot anfordern, speichern wir die entsprechenden Angaben für unsere interne Buchführung, Nachbearbeitung und Einhaltung gesetzlicher kaufmännischer Dokumentationspflichten.
                    </p>
                  </div>

                  <div id="sec-8" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">8. Weitergabe von Daten</h2>
                    <p className="mb-4">
                      Wir verkaufen keine personenbezogenen Daten. Eine Weitergabe an Dritte erfolgt nur, wenn dies zwingend erforderlich ist für:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-4 text-muted">
                      <li>Web-Hosting und Systembetrieb</li>
                      <li>E-Mail-Kommunikation</li>
                      <li>Kontaktformular-Verarbeitung</li>
                      <li>Erfüllung rechtlicher oder steuerlicher Pflichten</li>
                      <li>Projektabwicklung nach ausdrücklicher Beauftragung</li>
                    </ul>
                  </div>

                  <div id="sec-9" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">9. Externe Dienstleister und Auftragsverarbeiter</h2>
                    <p className="mb-4">
                      Teile unserer technischen Systeme oder Projektaufgaben werden durch vertraglich gebundene Dienstleister unterstützt. Soweit Daten an Dienstleister außerhalb der Europäischen Union weitergegeben werden, erfolgt dies nur unter Einhaltung der gesetzlichen Datenschutzanforderungen und mit entsprechenden Garantien (z.B. EU-Standardvertragsklauseln).
                    </p>
                  </div>

                  <div id="sec-10" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">10. Cookies</h2>
                    <p className="mb-4">
                      Diese Website verwendet derzeit keine Cookies. Wir setzen keine Tracking-Pixel, Werbe-Cookies oder Analyse-Cookies ein. Sollte sich dies in Zukunft ändern, werden wir diese Datenschutzerklärung aktualisieren und — sofern gesetzlich erforderlich — eine entsprechende Einwilligungslösung (Cookie-Banner) einbinden.
                    </p>
                  </div>

                  <div id="sec-11" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">11. Analyse- und Tracking-Tools</h2>
                    <p className="mb-4">
                      Wir verwenden auf dieser Website keine Marketing- oder Tracking-Tools (wie Google Analytics, Meta-Pixel oder LinkedIn Insight Tag).
                    </p>
                  </div>

                  <div id="sec-12" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">12. Eingebettete Drittinhalte</h2>
                    <p>
                      Wir betten auf dieser Website derzeit keine externen Dienste wie Google Maps, YouTube-Videos oder Social-Media-Plugins ein, bei denen bereits beim Laden der Seite Daten an Dritte übertragen werden.
                    </p>
                  </div>

                  <div id="sec-13" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">13. Social-Media-Links</h2>
                    <p>
                      Auf unserer Website befinden sich einfache Links zu unseren Profilen in sozialen Netzwerken (z.B. LinkedIn). Wenn Sie diese Links anklicken, verlassen Sie unsere Website. Für die Datenverarbeitung auf den verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                    </p>
                  </div>

                  <div id="sec-14" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">14. Speicherdauer</h2>
                    <p className="mb-4">
                      Wir speichern Ihre Daten nur so lange, wie es für den Zweck der Erfassung erforderlich ist:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 text-muted">
                      <li><strong>Kontaktanfragen:</strong> Bis zur abschließenden Klärung Ihres Anliegens</li>
                      <li><strong>Angebotsanfragen:</strong> Für die Dauer der vorvertraglichen Phase und gemäß gesetzlichen Aufbewahrungsfristen</li>
                      <li><strong>Server-Logfiles:</strong> Für technische Sicherheitsprüfungen, in der Regel wenige Tage</li>
                    </ul>
                  </div>

                  <div id="sec-15" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">15. Rechtsgrundlagen</h2>
                    <p className="mb-4">
                      Die Verarbeitung Ihrer Daten basiert auf folgenden Grundlagen der DSGVO:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 ml-4 text-muted">
                      <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Ihre Einwilligung</li>
                      <li><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Durchführung vorvertraglicher Maßnahmen oder Erfüllung eines Vertrags</li>
                      <li><strong>Art. 6 Abs. 1 lit. c DSGVO:</strong> Erfüllung einer rechtlichen Pflicht</li>
                      <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Wahrung unserer berechtigten Interessen (z.B. Betriebssicherheit der Website, Geschäftskommunikation)</li>
                    </ul>
                  </div>

                  <div id="sec-16" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">16. Ihre Rechte</h2>
                    <p className="mb-4">
                      Sie haben im Rahmen der gesetzlichen Bestimmungen der DSGVO jederzeit das Recht auf:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 text-muted">
                      <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
                      <li>Berichtigung unrichtiger Daten</li>
                      <li>Löschung Ihrer Daten (sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen)</li>
                      <li>Einschränkung der Verarbeitung</li>
                      <li>Datenübertragbarkeit</li>
                      <li>Widerspruch gegen die Verarbeitung</li>
                      <li>Widerruf einer erteilten Einwilligung</li>
                    </ul>
                    <p>
                      Bitte richten Sie Ihre Anfrage an: <strong>info@ravian-matrix.de</strong>
                    </p>
                  </div>

                  <div id="sec-17" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">17. Beschwerderecht bei der Aufsichtsbehörde</h2>
                    <p className="mb-4">
                      Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
                    </p>
                    <p className="mb-4">
                      Die für uns zuständige Aufsichtsbehörde für den nicht-öffentlichen Bereich in Bayern ist:
                    </p>
                    <div className="bg-bg-base p-6 rounded-xl border border-line font-mono text-[13px] leading-relaxed shadow-inner">
                      <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
                      Promenade 18<br />
                      91522 Ansbach<br />
                      Deutschland<br />
                      Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.lda.bayern.de</a>
                    </div>
                  </div>

                  <div id="sec-18" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">18. Datensicherheit</h2>
                    <p>
                      Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten vor Verlust, Zerstörung, Manipulation und unbefugtem Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend angepasst.
                    </p>
                  </div>

                  <div id="sec-19" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">19. SSL- bzw. TLS-Verschlüsselung</h2>
                    <p>
                      Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung zum Schutz vertraulicher Inhalte, wie z. B. Anfragen, die Sie an uns senden. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt.
                    </p>
                  </div>

                  <div id="sec-20" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">20. Keine automatisierte Entscheidungsfindung</h2>
                    <p>
                      Wir führen auf dieser Website keine automatisierte Entscheidungsfindung oder Profiling durch.
                    </p>
                  </div>

                  <div id="sec-21" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">21. Änderungen dieser Datenschutzerklärung</h2>
                    <p>
                      Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Dienste umzusetzen. Für Ihren erneuten Besuch gilt die jeweils aktuelle Datenschutzerklärung.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-line text-[12px] text-muted/50 font-mono">
                    Stand: Mai 2026
                  </div>
                </>
              ) : (
                // ENGLISH PRIVACY POLICY
                <>
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
                      Email: info@ravian-matrix.de
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
                  </div>

                  <div id="sec-5" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">5. File Uploads</h2>
                    <p className="mb-4">
                      If the website provides a file upload option, you may upload project-related documents, briefs, sample data, or supporting material.
                    </p>
                    <p className="mb-4">
                      Please do not upload sensitive personal data, confidential third-party data, government identification documents, health data, financial documents, or private personal documents unless this is necessary for your project and has been agreed in advance.
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
                      We do not sell personal data. Personal data may be shared only where necessary for website hosting, email communication, or regulatory requirements.
                    </p>
                  </div>

                  <div id="sec-9" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">9. External Contractors and Project Support</h2>
                    <p className="mb-4">
                      Some technical or project-related work may be supported by external contractors or service providers. Soweit data is transferred, we apply standard contractual clauses and maintain appropriate compliance protocols.
                    </p>
                  </div>

                  <div id="sec-10" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">10. Cookies</h2>
                    <p className="mb-4">
                      This website does not currently use cookies. We do not use analytics, advertising, or tracking cookies.
                    </p>
                  </div>

                  <div id="sec-11" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">11. Analytics and Tracking</h2>
                    <p className="mb-4">
                      At launch, this website does not use analytics or marketing tracking tools.
                    </p>
                  </div>

                  <div id="sec-12" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">12. Embedded Third-Party Content</h2>
                    <p>
                      We do not embed third-party services that transmit your data silently upon page load.
                    </p>
                  </div>

                  <div id="sec-13" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">13. Social Media Links</h2>
                    <p>
                      This website includes links to social platforms (e.g. LinkedIn). When clicking external links, you are subject to their respective data collection rules.
                    </p>
                  </div>

                  <div id="sec-14" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">14. Data Retention</h2>
                    <p className="mb-4">
                      We store personal data only as long as necessary for the purpose for which it was collected:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 text-muted">
                      <li><strong>Contact inquiries:</strong> As long as needed to process and follow up on the inquiry</li>
                      <li><strong>Quote communication:</strong> As long as needed for business documentation</li>
                      <li><strong>Server logs:</strong> Only as long as necessary for technical and security purposes</li>
                    </ul>
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
                      Under the GDPR, you have rights regarding your personal data. These may include access, rectification, erasure, restriction, portability, or objection.
                    </p>
                    <p>
                      To exercise your rights, contact us at: <strong>info@ravian-matrix.de</strong>
                    </p>
                  </div>

                  <div id="sec-17" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">17. Right to Lodge a Complaint</h2>
                    <p className="mb-4">
                      You have the right to lodge a complaint with a data protection supervisory authority. In Bavaria:
                    </p>
                    <div className="bg-bg-base p-6 rounded-xl border border-line font-mono text-[13px] leading-relaxed shadow-inner">
                      <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
                      Promenade 18<br />
                      91522 Ansbach<br />
                      Germany<br />
                      Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.lda.bayern.de</a>
                    </div>
                  </div>

                  <div id="sec-18" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">18. Data Security</h2>
                    <p>
                      We use appropriate technical and organizational measures to protect personal data against unauthorized access, loss, misuse, or alteration.
                    </p>
                  </div>

                  <div id="sec-19" className="scroll-mt-28">
                    <h2 className="text-[20px] text-primary font-bold mb-4">19. SSL / TLS Encryption</h2>
                    <p>
                      This website uses SSL/TLS encryption. You can recognize an encrypted connection by “https://” in the browser address bar.
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
                      We may update this Privacy Policy when our website, services, or regulatory requirements change.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-line text-[12px] text-muted/50 font-mono">
                    Last Updated: May 2026
                  </div>
                </>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
