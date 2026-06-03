import Link from "next/link";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-bg-surface text-muted pt-16 pb-8 border-t border-line relative overflow-hidden">
      {/* Premium Top Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />

      {/* Ambient Radial Gold Back-Glow */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Logo and Slogan */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <BrandLogo
                className="px-2 py-1.5 max-w-max group-hover:border-gold/30"
                imageClassName="h-9 w-9 sm:h-10 sm:w-10"
              />
            </Link>
            <p className="font-semibold text-gold text-[15px] tracking-tight">
              You name IT, We make IT.
            </p>
            <p className="text-sm leading-relaxed text-muted max-w-[280px]">
              Delivering reliable IT, web, geospatial, and digital solutions for businesses in Germany, Europe, and worldwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-lg bg-bg-base flex items-center justify-center text-muted hover:text-gold hover:border-gold/60 hover:shadow-[0_0_10px_rgba(245,197,107,0.15)] border border-line transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-lg bg-bg-base flex items-center justify-center text-muted hover:text-gold hover:border-gold/60 hover:shadow-[0_0_10px_rgba(245,197,107,0.15)] border border-line transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-lg bg-bg-base flex items-center justify-center text-muted hover:text-gold hover:border-gold/60 hover:shadow-[0_0_10px_rgba(245,197,107,0.15)] border border-line transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-mono text-[11px] tracking-wider uppercase text-gold/90 mb-6 flex items-center gap-2 border-b border-gold/10 pb-2">
              <span className="w-1.5 h-1.5 bg-gold transform rotate-45 inline-block shadow-[0_0_4px_rgba(245,197,107,0.6)]"></span>
              Quick Links
            </h5>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="/" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h5 className="font-mono text-[11px] tracking-wider uppercase text-gold/90 mb-6 flex items-center gap-2 border-b border-gold/10 pb-2">
              <span className="w-1.5 h-1.5 bg-gold transform rotate-45 inline-block shadow-[0_0_4px_rgba(245,197,107,0.6)]"></span>
              Our Services
            </h5>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="/services/web-development" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  Web Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/geospatial-intelligence" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  Geospatial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/services/digital-growth" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  Digital Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h5 className="font-mono text-[11px] tracking-wider uppercase text-gold/90 mb-6 flex items-center gap-2 border-b border-gold/10 pb-2">
              <span className="w-1.5 h-1.5 bg-gold transform rotate-45 inline-block shadow-[0_0_4px_rgba(245,197,107,0.6)]"></span>
              Get In Touch
            </h5>
            <ul className="flex flex-col gap-4 text-[13.5px] text-muted">
              <li className="flex items-start gap-2.5">
                <span className="terminal-label !text-gold/90 mt-0.5 shrink-0">LOC:</span>
                <span className="text-primary font-medium leading-snug">
                  Pfeilschifterstraße 27<br />
                  80997 Munich, Germany
                </span>
              </li>
              <li>
                <a href="mailto:info@ravianmatrixsystems.de" className="hover:text-gold transition-colors flex items-start gap-2.5">
                  <span className="terminal-label !text-gold/90 mt-0.5">EML:</span>
                  <span className="text-primary font-medium hover:underline">info@ravianmatrixsystems.de</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="terminal-label !text-gold/90 mt-0.5 shrink-0">HRS:</span>
                <span className="leading-snug">
                  Response within 24 hours on business days. Meetings by appointment only.
                </span>
              </li>
              <li className="flex items-start gap-2.5 border-t border-line pt-3 mt-1">
                <span className="terminal-label !text-gold/90 mt-0.5">LNG:</span>
                <span>English &amp; German</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="terminal-label !text-gold/90 mt-0.5">QTE:</span>
                <span className="text-primary font-semibold">Non-binding and free of charge</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-line pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-[11px] font-mono text-muted/60">
          <div>
            © 2026 Ravian Matrix Systems. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-gold transition-colors">
              Impressum
            </Link>
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
