import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/50 pt-12 sm:pt-20 pb-8 relative overflow-hidden">
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
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", label: "LinkedIn" },
                { path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", label: "GitHub" },
                { path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", label: "X" }
              ].map((social, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 hover:shadow-[0_0_15px_rgba(201,162,77,0.1)] transition-all">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d={social.path}/></svg>
                </a>
              ))}
            </div>
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
                <a href="mailto:info@raviannmatrixsystems.de" className="hover:text-gold transition-colors flex items-start gap-2">
                  <span className="terminal-label !opacity-100 mt-1">EML:</span>
                  <span className="text-white/80">info@raviannmatrixsystems.de</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="terminal-label !opacity-100 mt-1">HRS:</span>
                <span>Mon–Fri, 9am–6pm (CET)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-white/20">
          <div className="flex items-center gap-2">
             <span className="terminal-label !opacity-100">© 2026</span>
             <span>Ravian Matrix Systems. All Rights Reserved.</span>
          </div>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-matrix transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
