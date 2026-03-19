import { SmartImage } from "@/components/SmartImage";
import { useState } from 'react';
import { Link, useLocation } from 'wouter';


export default function MegaNavigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return false; // Never highlight root in this nav
    return location.startsWith(path);
  };

  const navLinkClass = (path: string) => {
    const isLinkActive = isActive(path);

    return `
      px-2 lg:px-4 py-3 text-[10px] lg:text-xs font-bold uppercase tracking-wider transition-all text-center
      ${isLinkActive
        ? 'bg-red-600 text-white'
        : 'text-gray-300 hover:bg-red-600/20 hover:text-white'}
    `;
  };

  return (
    <nav className="bg-black border-b-2 border-red-600 sticky top-0 z-50">
      <div className="w-full px-2 lg:px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-14">
          <div className="flex items-center justify-evenly w-full h-full">
            <Link href="/">
              <a className="px-2 lg:px-4 h-full flex items-center group transition-all shrink-0">
                <SmartImage
                  src="/assets/sodom-hall-logo.png"
                  alt="Sodom Hall Home"
                  className="h-10 w-auto grayscale brightness-200 group-hover:brightness-100 group-hover:grayscale-0 transition-all drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]"
                />
              </a>
            </Link>
            <Link href="/origin"><a className={navLinkClass('/origin')}>THE ORIGIN</a></Link>
            <Link href="/coverup"><a className={navLinkClass('/coverup')}>THE COVER-UP</a></Link>
            <Link href="/breach"><a className={navLinkClass('/breach')}>THE BREACH</a></Link>
            <Link href="/succession"><a className={navLinkClass('/succession')}>THE SUCCESSION</a></Link>
            <Link href="/ledger"><a className={navLinkClass('/ledger')}>THE LEDGER</a></Link>
            <Link href="/vault"><a className={navLinkClass('/vault')}>THE VAULT</a></Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-3">
            <Link href="/">
              <a className="flex items-center">
                <SmartImage
                  src="/assets/sodom-hall-logo.png"
                  alt="Sodom Hall Home"
                  className="h-8 w-auto grayscale brightness-200"
                />
              </a>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="pb-3 space-y-1">
              <Link href="/origin"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE ORIGIN</a></Link>
              <Link href="/coverup"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE COVER-UP</a></Link>
              <Link href="/breach"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE BREACH</a></Link>
              <Link href="/succession"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE SUCCESSION</a></Link>
              <Link href="/ledger"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE LEDGER</a></Link>
              <Link href="/vault"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE VAULT</a></Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
