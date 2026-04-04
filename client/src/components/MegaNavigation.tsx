import { SmartImage } from "@/components/SmartImage";
import { useState } from 'react';
import { Link, useLocation } from 'wouter';

// CATEGORY FRAMEWORK DEFINITION v5.1
export default function MegaNavigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path === '/') return false;
    return location.startsWith(path);
  };

  const navLinkClass = (path: string) => {
    const isLinkActive = isActive(path);

    return `
      px-2 lg:px-4 py-3 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] transition-all text-center
      ${isLinkActive
        ? 'bg-red-900 text-white shadow-[0_0_15px_rgba(139,26,26,0.5)]'
        : 'text-zinc-500 hover:bg-red-900/10 hover:text-red-500'}
    `;
  };

  const newsItems = [
    { type: "BREAKING", text: "October 2025 Jury Awards $5M in Delbarton Abuse Case" },
    { type: "DOCUMENTED", text: "LATHAM REPORT: 24,000 Pages of Evidence Unsealed by Court Order" },
    { type: "DOCUMENTED", text: "FORENSIC AUDIT: McCarrick 'Archbishop's Fund' Slush Fund Revealed" },
    { type: "BREAKING", text: "REGIME CHANGE: Bishop Elias Lorenzo Positioned as Successor to Tobin" }
  ];

  return (
    <nav className="bg-black border-b border-red-900/30 relative z-50">
      {/* 1. RAINN Crisis Resource Banner (Now Secondary) */}
      <div className="bg-[#050505] border-b border-white/5 py-1.5 px-4 flex items-center justify-center gap-3 text-[9px]">
        <span className="text-zinc-600 font-mono uppercase tracking-widest italic">Confidential Survivor Support:</span>
        <a href="https://www.rainn.org" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-400 hover:text-red-600 transition-colors uppercase tracking-widest">RAINN.org</a>
        <span className="text-zinc-800">|</span>
        <a href="tel:1-800-656-4673" className="font-bold text-red-600 hover:text-red-500 transition-colors tracking-widest">1-800-656-HOPE</a>
      </div>

      {/* 2. Primary Navigation Tier */}
      <div className="w-full px-2 lg:px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full h-full">
            <Link href="/">
              <a className="px-2 lg:px-4 h-full flex items-center group transition-all shrink-0">
                <SmartImage
                  src="/assets/images/sh-pirate-logo.png"
                  alt="Sodom Hall Home"
                  className="h-10 w-auto group-hover:scale-110 transition-all brightness-150 drop-shadow-[0_0_15px_rgba(139,26,26,0.6)]"
                />
              </a>
            </Link>

            <Link href="/shield"><a className={navLinkClass('/shield')}>THE SHIELD</a></Link>
            <Link href="/conversion"><a className={navLinkClass('/conversion')}>THE CONVERSION</a></Link>
            <Link href="/opinion"><a className={navLinkClass('/opinion')}>THE REWRITE</a></Link>
            <Link href="/power-axis"><a className={navLinkClass('/power-axis')}>THE POWER AXIS</a></Link>
            <Link href="/breach"><a className={navLinkClass('/breach')}>THE BREACH</a></Link>

            <Link href="/about#tips">
              <a className="ml-4 border border-red-900/50 hover:bg-red-600 text-white px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.4em] transition-all shadow-[0_0_20px_rgba(139,26,26,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                PENETRATE SHIELD
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
                  src="/assets/images/sh-pirate-logo.png"
                  alt="Sodom Hall Home"
                  className="h-8 w-auto brightness-150"
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
            <div className="pb-6 space-y-2 animate-in fade-in duration-300">
               <Link href="/shield"><a className="block px-4 py-3 text-red-600 font-black tracking-widest text-xs border-b border-white/5">THE SHIELD</a></Link>
               <Link href="/conversion"><a className="block px-4 py-3 text-zinc-400 hover:text-white transition-all text-xs">THE CONVERSION</a></Link>
               <Link href="/breach"><a className="block px-4 py-3 text-zinc-400 hover:text-white transition-all text-xs">THE BREACH</a></Link>
               <Link href="/about#tips"><a className="block px-4 py-3 bg-red-900 text-white font-bold text-center text-xs tracking-widest mt-4">PENETRATE SHIELD</a></Link>
            </div>
          )}
        </div>
      </div>

      {/* 3. News Ticker */}
      <div className="bg-[#080808] h-7 flex items-center overflow-hidden whitespace-nowrap border-t border-white/5">
        <div className="flex animate-ticker items-center py-1">
          {[...newsItems, ...newsItems].map((item, idx) => (
            <div key={idx} className="flex items-center px-12">
              <span className={`text-[8px] font-bold px-2 py-0.5 mr-2 rounded ${item.type === 'BREAKING' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                {item.type}
              </span>
              <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-navigations */}
      {location.startsWith('/ledger') && (
        <div className="bg-zinc-950 border-t border-red-900/20">
          <div className="container mx-auto px-4 py-1.5 flex flex-wrap justify-center gap-8">
            {['Who Knew', 'Regents', 'Trustees', 'Lawyers', 'Timeline'].map(tab => (
              <a key={tab} href={`#${tab.toLowerCase()}`} className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 hover:text-red-500 transition-colors">{tab}</a>
            ))}
          </div>
        </div>
      )}

      {/* Jurisdictional Counter / Who's Watching */}
      <div className="bg-[#050505] text-[9px] text-zinc-600 py-2.5 px-4 text-center border-t border-white/5 font-mono uppercase tracking-widest">
        <span>Live Trace:</span>
        <span className="ml-2 text-red-900 font-bold">4,812 Access Points</span>
        <span className="mx-4 opacity-10">|</span>
        <span className="text-zinc-700">Jurisdictions: Vatican City, Newark, DC, Geneva</span>
      </div>
    </nav>
  );
}
