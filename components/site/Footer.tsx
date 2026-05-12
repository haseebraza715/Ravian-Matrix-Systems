import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-dark to-dark/95 text-dark-mute pt-12 sm:pt-20 pb-8 relative">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-mustard/30 to-transparent"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <div className="mb-6 bg-white/[0.04] inline-block p-3 rounded-xl border border-white/[0.06]">
              <Image 
                src="/logo.jpeg" 
                alt="Ravian Matrix Systems" 
                width={200} 
                height={50} 
                className="h-9 w-auto object-contain rounded-sm"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-[300px] text-white/50">
              Delivering intelligent GIS, IT, and data-driven solutions for businesses worldwide.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-mustard-2 hover:border-mustard/30 transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-mustard-2 hover:border-mustard/30 transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-mustard-2 hover:border-mustard/30 transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[11px] tracking-[0.12em] uppercase text-mustard/60 mb-5 font-medium">Quick Links</h5>
            <ul className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-mustard-2 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] tracking-[0.12em] uppercase text-mustard/60 mb-5 font-medium">Our Services</h5>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-mustard-2 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] tracking-[0.12em] uppercase text-mustard/60 mb-5 font-medium">Get In Touch</h5>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-mustard/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Munich, Germany
              </li>
              <li>
                <a href="mailto:info@raviannmatrixsystems.de" className="hover:text-mustard-2 transition-colors flex items-start gap-2">
                  <svg className="w-4 h-4 text-mustard/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@raviannmatrixsystems.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-mustard/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Mon–Fri, 9am–6pm (CET)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px] text-white/30">
          <div>© 2026 Ravian Matrix Systems. All Rights Reserved.</div>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-mustard-2 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
