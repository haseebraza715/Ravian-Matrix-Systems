"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b shadow-sm" style={{ background: 'rgba(241,236,223,0.86)', borderColor: 'rgba(14,14,12,0.14)' }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.jpeg" 
              alt="Ravian Matrix Systems" 
              width={280} 
              height={70} 
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.filter(l => l.name !== "Home").map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm hover:text-ink transition-colors relative group" style={{ color: '#2A2823' }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-mustard transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="btn hidden md:inline-flex text-sm bg-[#0E0E0C] text-[#F6F2E7] hover:bg-black hover:-translate-y-[1px] shadow-md hover:shadow-lg transition-all">
              Start a project <span className="arrow">→</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-[2px] bg-ink transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
              <span className={`w-6 h-[2px] bg-ink transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-[2px] bg-ink transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 border-t ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`} style={{ borderColor: 'rgba(14,14,12,0.14)', background: '#F1ECDF' }}>
        <div className="px-6 sm:px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-ink-2 hover:text-ink py-2 border-b border-line/50 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="btn bg-[#0E0E0C] text-[#F6F2E7] hover:bg-black mt-4 w-full justify-center transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Get Started <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
