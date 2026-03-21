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
        ? 'bg-red-600 text-zinc-900'
        : 'text-gray-300 hover:bg-red-600/20 hover:text-zinc-900'}
    `;
  };

  const newsItems = [
    "BREAKING: October 2025 Jury Awards $5M in Delbarton Abuse Case",
    "LATHAM REPORT: 24,000 Pages of Evidence Unsealed by Court Order",
    "REGIME CHANGE: Bishop Elias Lorenzo Positioned as Successor to Tobin",
    "ECCLESIASTICAL TRANSFERS: Archbishop Checchio Installed in New Orleans",
    "FORENSIC AUDIT: McCarrick 'Archbishop's Fund' Revealed as Slush Fund for Vatican Tipping"
  ];

  return (
    <nav className="bg-white border-b-2 border-zinc-300 relative z-50">
      {/* News Ticker */}
      <div className="bg-red-700 h-6 flex items-center overflow-hidden whitespace-nowrap border-b border-red-800">
        <div className="flex animate-ticker py-1">
          {[...newsItems, ...newsItems].map((item, idx) => (
            <span key={idx} className="inline-block px-10 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
      </div>

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
            <Link href="/opinion"><a className={navLinkClass('/opinion')}>OPINION</a></Link>
            <Link href="/ledger"><a className={navLinkClass('/ledger')}>THE LEDGER</a></Link>

            <Link href="/vault"><a className={navLinkClass('/vault')}>THE VAULT</a></Link>
            <Link href="/about"><a className={navLinkClass('/about')}>ABOUT</a></Link>
            <Link href="/corrections"><a className={navLinkClass('/corrections')}>CORRECTIONS</a></Link>
            <Link href="/about#tips">
              <a className="ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all shadow-md">
                SUBMIT A TIP
              </a>
            </Link>
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
              className="text-zinc-900 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="pb-3 space-y-1">
              <Link href="/origin"><a className="block px-4 py-2 text-zinc-900 hover:bg-red-600/20">THE ORIGIN</a></Link>
              <Link href="/coverup"><a className="block px-4 py-2 text-zinc-900 hover:bg-red-600/20">THE COVER-UP</a></Link>
              <Link href="/breach"><a className="block px-4 py-2 text-zinc-900 hover:bg-red-600/20">THE BREACH</a></Link>
              <Link href="/succession"><a className="block px-4 py-2 text-zinc-900 hover:bg-red-600/20">THE SUCCESSION</a></Link>
              <Link href="/opinion"><a className="block px-4 py-2 text-zinc-900 hover:bg-red-600/20">OPINION</a></Link>
              <Link href="/ledger"><a className="block px-4 py-2 text-zinc-900 hover:bg-red-600/20">THE LEDGER</a></Link>

              <Link href="/vault"><a className="block px-4 py-2 text-zinc-900 hover:bg-red-600/20">THE VAULT</a></Link>
              <Link href="/about"><a className="block px-4 py-2 text-zinc-900 hover:bg-red-600/20">ABOUT</a></Link>
              <Link href="/corrections"><a className="block px-4 py-2 text-zinc-900 hover:bg-red-600/20">CORRECTIONS</a></Link>
              <Link href="/about#tips"><a className="block px-4 py-2 bg-red-700 text-zinc-900">SUBMIT A TIP</a></Link>
            </div>
          )}
        </div>
      </div>
      {/* Sub-navigation for The Ledger (People Index) */}
      {location.startsWith('/ledger') && (
        <div className="bg-zinc-100 border-t border-zinc-300 animate-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-6">
            <a href="#filter" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">Who Knew</a>
            <a href="#regents" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">Regents</a>
            <a href="#trustees" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">Trustees</a>
            <a href="#visitors" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">Visitors</a>
            <a href="#lawyers" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">Lawyers</a>
            <a href="#timeline" className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">Timeline</a>
          </div>
        </div>
      )}

      {/* Sub-navigation for Opinion */}
      {location.startsWith('/opinion') && (
        <div className="bg-[#f0ede4] border-t border-black/10 animate-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-6">
            <Link href="/opinion/noonan"><a className="text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-red-700 transition-colors">O'Shaughnessy</a></Link>
            <Link href="/opinion/cannon"><a className="text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-red-700 transition-colors">Fairchild</a></Link>
            <Link href="/opinion/matthews"><a className="text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-red-700 transition-colors">Vance</a></Link>
            <Link href="/opinion/stephens"><a className="text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-red-700 transition-colors">Roth</a></Link>
          </div>
        </div>
      )}

      {/* Sub-navigation for Vault */}
      {location.startsWith('/vault') && (
        <div className="bg-zinc-100 border-t border-zinc-300 animate-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-6">
            <Link href="/origin"><a className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">The Origin</a></Link>
            <Link href="/coverup"><a className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">The Cover-Up</a></Link>
            <Link href="/breach"><a className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">The Breach</a></Link>
            <Link href="/succession"><a className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 transition-colors">The Succession</a></Link>
          </div>
        </div>
      )}

    </nav>
  );
}
