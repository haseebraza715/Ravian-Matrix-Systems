"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-bg/80 backdrop-blur-md border-line py-4" : "bg-transparent border-transparent py-5"
    )}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-ink group">
          <div className="w-[22px] h-[22px] relative group-hover:rotate-90 transition-transform duration-500 ease-in-out">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full block">
              <rect x="1.5" y="1.5" width="21" height="21" stroke="#101010" strokeWidth="1.5" />
              <line x1="1.5" y1="8" x2="22.5" y2="8" stroke="#101010" strokeWidth="1" />
              <line x1="1.5" y1="16" x2="22.5" y2="16" stroke="#101010" strokeWidth="1" />
              <line x1="8" y1="1.5" x2="8" y2="22.5" stroke="#101010" strokeWidth="1" />
              <line x1="16" y1="1.5" x2="16" y2="22.5" stroke="#101010" strokeWidth="1" />
              <circle cx="16" cy="8" r="2.6" fill="#D8A72A" />
            </svg>
          </div>
          <span>Signal Grid</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-ink2 hover:text-ink transition-colors">Services</Link>
          <Link href="#work" className="text-sm font-medium text-ink2 hover:text-ink transition-colors">Work</Link>
          <Link href="#process" className="text-sm font-medium text-ink2 hover:text-ink transition-colors">Process</Link>
          <Link href="#stack" className="text-sm font-medium text-ink2 hover:text-ink transition-colors">Stack</Link>
          <Link href="#contact" className="text-sm font-medium text-ink2 hover:text-ink transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="#contact" className="btn btn-ghost">Log in</Link>
          <Link href="#contact" className="btn btn-primary group">
            Start a project
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-2 -mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-bg border-b border-line p-6 flex flex-col gap-6 shadow-xl md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Services</Link>
            <Link href="#work" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Work</Link>
            <Link href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Process</Link>
            <Link href="#stack" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Stack</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Contact</Link>
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-line">
            <Link href="#contact" className="btn btn-ghost justify-center">Log in</Link>
            <Link href="#contact" className="btn btn-primary justify-center">Start a project</Link>
          </div>
        </div>
      )}
    </header>
  );
}
