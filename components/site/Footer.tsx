import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-surface text-muted pt-16 pb-8 border-t border-line relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Logo and Slogan */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.jpeg" 
                alt="Ravian Matrix Systems" 
                width={200} 
                height={50} 
                className="h-10 w-auto object-contain rounded-sm"
              />
            </Link>
            <p className="font-semibold text-primary text-[15px] tracking-tight">
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
                className="w-8 h-8 rounded-lg bg-bg-base flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 border border-line transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-bg-base flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 border border-line transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-bg-base flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 border border-line transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-mono text-[11px] tracking-wider uppercase text-primary mb-6">
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
                <Link href="/contact" className="text-[14px] text-muted hover:text-gold transition-colors font-medium">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="font-mono text-[11px] tracking-wider uppercase text-primary mb-6">
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
            <h5 className="font-mono text-[11px] tracking-wider uppercase text-primary mb-6">
              Get In Touch
            </h5>
            <ul className="flex flex-col gap-4 text-[13.5px] text-muted">
              <li className="flex items-start gap-2.5">
                <span className="terminal-label !text-gold/90 mt-0.5">LOC:</span>
                <span className="text-primary font-medium">Munich, Germany</span>
              </li>
              <li>
                <a href="mailto:info@ravianmatrixsystems.de" className="hover:text-gold transition-colors flex items-start gap-2.5">
                  <span className="terminal-label !text-gold/90 mt-0.5">EML:</span>
                  <span className="text-primary font-medium hover:underline">info@ravianmatrixsystems.de</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="terminal-label !text-gold/90 mt-0.5">HRS:</span>
                <span>Response within 24 hours on business days. Meetings by appointment only.</span>
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
        <div className="border-t border-line pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-muted/60">
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
