"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { BrandLogo } from "@/components/site/BrandLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-bg-surface lg:bg-bg-surface/90 lg:backdrop-blur-xl border-b border-line shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[72px] gap-2 sm:gap-3 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0 max-w-[42%] sm:max-w-none"
          >
            <BrandLogo
              priority
              className="px-1.5 py-1 group-hover:shadow-[0_4px_12px_rgba(245,197,107,0.15)] group-hover:border-gold/30"
              imageClassName="h-8 w-8 sm:h-9 sm:w-9"
            />
            <span className="hidden min-[1400px]:inline terminal-label !opacity-80 text-gold/80 group-hover:text-gold transition-colors whitespace-nowrap">
              RAVIAN_SYSTEMS_v2.1
            </span>
          </Link>

          {/* Desktop Nav — centered so links are not clipped by the logo */}
          <div className="hidden lg:flex flex-1 items-center justify-center min-w-0 px-1 sm:px-2">
            <div className="flex items-center gap-1 sm:gap-2 xl:gap-5 max-w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] xl:text-[13.5px] font-medium tracking-wide transition-all relative group text-white/70 hover:text-white px-2.5 xl:px-3 py-1.5 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-gold/50 whitespace-nowrap shrink-0"
                >
                  <span className="group-hover:text-gold transition-colors">{link.name}</span>
                  <span className="absolute bottom-0 left-2.5 xl:left-3 right-2.5 xl:right-3 h-[2px] bg-gold opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto lg:ml-0">
            <Link
              href="/request-quote"
              className="btn max-lg:!hidden lg:inline-flex text-[12px] xl:text-[13px] bg-gold text-brand-black hover:bg-gold-soft hover:shadow-[0_0_20px_rgba(212,166,47,0.3)] transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-brand-black whitespace-nowrap"
            >
              Request a Quote <span className="arrow">→</span>
            </Link>

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
      <div className={`lg:hidden overflow-hidden transition-all duration-500 border-t border-line bg-bg-surface ${mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
