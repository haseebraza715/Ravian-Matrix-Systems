import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/50 pt-12 sm:pt-20 pb-8 sm:pb-12 lg:pb-16 min-h-[200px] sm:min-h-[300px] relative overflow-hidden flex flex-col justify-between">
      {/* Matrix elements */}
      <div className="absolute inset-0 spatial-grid-overlay opacity-10 pointer-events-none"></div>
      
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <div className="mb-6 bg-white/[0.04] inline-block p-3 rounded-xl border border-white/[0.06] hover:border-gold/30 transition-colors">
              <Image 
                src="/logo.jpeg" 
                alt="Ravian Matrix Systems" 
                width={200} 
                height={50} 
                className="h-9 w-auto object-contain rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-[300px]">
              Delivering intelligent GIS, IT, and data-driven solutions for businesses worldwide.
            </p>
            {/* Social links removed pending setup */}
          </div>

          {[
            { title: "Quick Links", links: footerLinks.quickLinks },
            { title: "Our Services", links: footerLinks.services }
          ].map((col, idx) => (
            <div key={idx}>
              <h5 className="font-mono text-[11px] tracking-[0.12em] uppercase text-gold mb-5 font-medium flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold"></span>
                {col.title}
              </h5>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13.5px] text-white/70 hover:text-gold transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="font-mono text-[11px] tracking-[0.12em] uppercase text-gold mb-5 font-medium flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold"></span>
              Get In Touch
            </h5>
            <ul className="flex flex-col gap-4 text-[13.5px]">
              <li className="flex items-start gap-2">
                <span className="terminal-label !opacity-100 mt-1">LOC:</span>
                <span>Munich, Germany</span>
              </li>
              <li>
                <a href="mailto:info@ravianmatrixsystems.de" className="hover:text-gold transition-colors flex items-start gap-2">
                  <span className="terminal-label !opacity-100 mt-1">EML:</span>
                  <span className="text-white/80">info@ravianmatrixsystems.de</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="terminal-label !opacity-100 mt-1">HRS:</span>
                <span>Mon–Fri, 9am–6pm (CET)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-white/60">
          <div className="flex items-center gap-2">
             <span className="terminal-label !opacity-100">© 2026</span>
             <span>Ravian Matrix Systems. All Rights Reserved.</span>
          </div>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-gold transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
