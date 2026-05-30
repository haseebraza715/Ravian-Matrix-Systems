"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-bg-surface lg:bg-bg-surface/90 lg:backdrop-blur-xl border-b border-line shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="bg-white px-2 py-1 rounded-md flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-line transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(245,197,107,0.15)] group-hover:border-gold/30">
              <Image
                src="/logo.jpeg"
                alt="Ravian Matrix Systems"
                width={160}
                height={40}
                className="h-7 sm:h-8 w-auto object-contain"
                priority
                aria-hidden="true"
              />
            </div>
            <div className="hidden lg:block">
               <span className="terminal-label !opacity-80 text-gold/80 group-hover:text-gold transition-colors">RAVIAN_SYSTEMS_v2.1</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.filter(l => l.name !== "Home").map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13.5px] font-medium tracking-wide transition-all relative group text-white/70 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                <span className="group-hover:text-gold transition-colors">{link.name}</span>
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/request-quote" className="btn max-lg:!hidden lg:inline-flex text-[13px] bg-gold text-brand-black hover:bg-gold-soft hover:shadow-[0_0_20px_rgba(212,166,47,0.3)] transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-brand-black">
              Request a Quote <span className="arrow">→</span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden flex flex-col gap-1.5 items-center justify-center w-11 h-11 focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 items-end">
                <span className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`}></span>
                <span className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 border-t border-line bg-bg-surface ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 sm:px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/70 hover:text-gold py-3 border-b border-white/5 transition-colors flex justify-between items-center"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
              <span className="terminal-label !opacity-40">0x0{navLinks.indexOf(link)}</span>
            </Link>
          ))}
          <Link
            href="/request-quote"
            className="btn bg-gold text-brand-black hover:bg-gold-soft mt-4 w-full justify-center transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Request a Quote <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
