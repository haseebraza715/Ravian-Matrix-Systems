import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-dark-mute pt-[60px] pb-[30px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-[#F1ECDF] mb-4">
              <div className="w-[22px] h-[22px] relative">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full block">
                  <rect x="1.5" y="1.5" width="21" height="21" stroke="#F1ECDF" strokeWidth="1.5" />
                  <line x1="1.5" y1="8" x2="22.5" y2="8" stroke="#F1ECDF" strokeWidth="1" />
                  <line x1="1.5" y1="16" x2="22.5" y2="16" stroke="#F1ECDF" strokeWidth="1" />
                  <line x1="8" y1="1.5" x2="8" y2="22.5" stroke="#F1ECDF" strokeWidth="1" />
                  <line x1="16" y1="1.5" x2="16" y2="22.5" stroke="#F1ECDF" strokeWidth="1" />
                  <circle cx="16" cy="8" r="2.6" fill="#D8A72A" />
                </svg>
              </div>
              <span>Signal Grid</span>
            </Link>
            <p className="text-[14px] text-dark-mute leading-[1.55] max-w-[300px] m-0">
              {siteConfig.headline}
            </p>
          </div>

          <div>
            <h5 className="font-ibm text-[11px] tracking-[0.12em] uppercase text-white/45 m-0 mb-4 font-medium">Services</h5>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              <li><Link href="#services" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Web GIS</Link></li>
              <li><Link href="#services" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Dashboards</Link></li>
              <li><Link href="#services" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Automation</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-ibm text-[11px] tracking-[0.12em] uppercase text-white/45 m-0 mb-4 font-medium">Company</h5>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              <li><Link href="#work" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Work</Link></li>
              <li><Link href="#process" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Process</Link></li>
              <li><Link href="#stack" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Tech Stack</Link></li>
              <li><Link href="#contact" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-ibm text-[11px] tracking-[0.12em] uppercase text-white/45 m-0 mb-4 font-medium">Connect</h5>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              <li><a href="#" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-[14px] text-[#F1ECDF] hover:text-mustard2 transition-colors">Email Us</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-dark-line pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-ibm text-[11px] text-white/45">
          <div>&copy; {currentYear} Signal Grid Studio. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
