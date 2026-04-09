import { SmartImage } from "@/components/SmartImage";
import { useState } from 'react';
import { Link, useLocation } from 'wouter';

// CATEGORY FRAMEWORK DEFINITION v6.0 — Unified Navigation
export default function MegaNavigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location === '/';
    return location.startsWith(path);
  };

  const navLinkClass = (path: string) => {
    const isLinkActive = isActive(path);
    return `
      px-3 lg:px-5 py-3 text-sm lg:text-sm font-bold uppercase tracking-[0.15em] transition-all text-center whitespace-nowrap
      ${isLinkActive
        ? 'bg-red-900 text-white border-b-2 border-white font-black shadow-[0_0_15px_rgba(139,26,26,0.5)]'
        : 'text-zinc-300 hover:bg-red-900/10 hover:text-red-400'}
    `;
  };

  const newsItems = [
    { type: "BREAKING", text: "October 2025 Jury Awards $5M in Delbarton Abuse Case" },
    { type: "DOCUMENTED", text: "LATHAM REPORT: 24,000 Pages of Evidence Unsealed by Court Order" },
    { type: "DOCUMENTED", text: "FORENSIC AUDIT: McCarrick 'Archbishop's Fund' Slush Fund Revealed" },
    { type: "BREAKING", text: "COURT ORDER: Seton Hall University v. Does, Case No. 30-2026-01555640-CU-PT-CJC — California Hearing Set for May 28, 2026, Dept. C23 Santa Ana." }
  ];

  return (
    <nav aria-label="Primary Navigation" className="bg-black border-b border-red-900/30 relative z-50">
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-red-900 focus:text-white focus:px-4 focus:py-2 focus:font-bold focus:text-sm focus:rounded"
      >
        Skip to content
      </a>

      {/* 1. RAINN Crisis Resource Banner */}
      <div className="bg-[#050505] border-b border-white/5 py-2.5 px-4 flex items-center justify-center gap-3 text-sm">
        <span className="text-zinc-300 font-mono uppercase tracking-widest italic">Confidential Survivor Support:</span>
        <a href="https://www.rainn.org" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-red-500 transition-colors uppercase tracking-widest underline decoration-red-900/40 underline-offset-4">RAINN.org</a>
        <span className="text-zinc-600">|</span>
        <a href="tel:1-800-656-4673" className="font-bold text-red-500 hover:text-red-400 transition-colors tracking-[0.2em] bg-red-900/10 px-2 py-0.5 rounded">1-800-656-HOPE</a>
      </div>

      {/* 2. Primary Navigation Tier */}
      <div className="w-full px-2 lg:px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full h-full">
            <Link href="/" className="px-2 lg:px-4 h-full flex items-center group transition-all shrink-0">
                <img
                  src="/assets/images/colored-pirate-logo.png"
                  alt="Sodom Hall Home"
                  className="w-12 h-auto object-contain group-hover:scale-110 transition-all"
                />
                <span className="ml-3 text-[#c8bdb0] font-cinzel font-black tracking-[0.2em] text-sm hidden xl:block whitespace-nowrap">SODOM HALL</span>
            </Link>

            <Link href="/" className={navLinkClass('/')}>THE SHIELD</Link>
            <Link href="/method" className={navLinkClass('/method')}>THE METHOD</Link>
            <Link href="/evidence" className={navLinkClass('/evidence')}>THE EVIDENCE</Link>
            <Link href="/breach" className={navLinkClass('/breach')}>THE BREACH</Link>
            <Link href="/ledger" className={navLinkClass('/ledger')}>THE LEDGER</Link>
            <Link href="/opinion" className={navLinkClass('/opinion')}>OPINIONS</Link>

            <Link href="/tips" className="ml-2 border border-red-900/50 hover:bg-red-600 bg-red-900/20 text-white px-5 py-2.5 text-sm font-black uppercase tracking-[0.3em] transition-all shadow-[0_0_20px_rgba(139,26,26,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center justify-center whitespace-nowrap">
                WHISTLEBLOWER TIP LINE
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-2">
                <img src="/assets/images/colored-pirate-logo.png" alt="Sodom Hall Home" className="h-9 w-auto object-contain" />
                <span className="text-[#c8bdb0] font-cinzel font-black tracking-widest text-sm">SODOM HALL</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label="Toggle navigation menu"
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div id="mobile-nav-menu" className="pb-6 space-y-1 animate-in fade-in duration-200 border-t border-white/10">
               <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-base font-bold border-b border-white/5 ${isActive('/') && location === '/' ? 'text-white bg-red-900/30' : 'text-zinc-300 hover:text-white hover:bg-zinc-900'}`}>THE SHIELD</Link>
               <Link href="/method" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-base font-bold border-b border-white/5 ${isActive('/method') ? 'text-white bg-red-900/30' : 'text-zinc-300 hover:text-white hover:bg-zinc-900'}`}>THE METHOD</Link>
               <Link href="/evidence" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-base font-bold border-b border-white/5 ${isActive('/evidence') ? 'text-white bg-red-900/30' : 'text-zinc-300 hover:text-white hover:bg-zinc-900'}`}>THE EVIDENCE</Link>
               <Link href="/breach" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-base font-bold border-b border-white/5 ${isActive('/breach') ? 'text-white bg-red-900/30' : 'text-zinc-300 hover:text-white hover:bg-zinc-900'}`}>THE BREACH</Link>
               <Link href="/ledger" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-base font-bold border-b border-white/5 ${isActive('/ledger') ? 'text-white bg-red-900/30' : 'text-zinc-300 hover:text-white hover:bg-zinc-900'}`}>THE LEDGER</Link>
               <Link href="/opinion" onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-3 text-base font-bold border-b border-white/5 ${isActive('/opinion') ? 'text-white bg-red-900/30' : 'text-zinc-300 hover:text-white hover:bg-zinc-900'}`}>OPINIONS</Link>
               <Link href="/tips" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 bg-red-900 text-white font-bold text-center text-base tracking-widest mt-2">WHISTLEBLOWER TIP LINE</Link>
            </div>
          )}
        </div>
      </div>

      {/* 3. News Ticker — desktop only, pauses on hover, WCAG 2.2.2 compliant */}
      <div className="hidden md:block bg-[#080808] h-8 flex items-center overflow-hidden whitespace-nowrap border-t border-white/5 group" aria-label="News ticker — hover to pause" aria-live="off">
        <div className="flex group-hover:[animation-play-state:paused] animate-ticker items-center py-1">
          {[...newsItems, ...newsItems].map((item, idx) => (
            <div key={idx} className="flex items-center px-12">
              <span className={`text-sm font-bold px-3 py-0.5 mr-3 rounded border ${item.type === 'BREAKING' ? 'bg-red-900 text-white border-red-600' : 'bg-zinc-900 text-zinc-100 border-white/10'}`}>
                {item.type}
              </span>
              <span className="text-sm font-mono text-zinc-100 uppercase tracking-wide font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile: static most-critical ticker item */}
      <div className="md:hidden bg-red-900/20 border-t border-red-900/30 px-4 py-2 flex items-center gap-3">
        <span className="text-xs font-black text-red-500 uppercase tracking-widest shrink-0">BREAKING</span>
        <span className="text-xs font-mono text-zinc-200 truncate">California Hearing Set for May 28, 2026, Dept. C23 Santa Ana</span>
      </div>

      {/* Ledger sub-nav — anchors wired to actual Ledger.tsx section IDs */}
      {location.startsWith('/ledger') && !location.includes('/ledger/') && (
        <div className="bg-zinc-950 border-t border-red-900/20">
          <nav aria-label="Ledger Section Navigation" className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { label: 'Leadership', id: 'leadership-&-chairs' },
              { label: 'Regents', id: 'board-of-regents' },
              { label: 'Ecclesiastical', id: 'ecclesiastical-oversight' },
              { label: 'Ex-Officio', id: 'ex-officio' },
            ].map(tab => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-red-400 transition-colors py-1 border-b-2 border-transparent hover:border-red-700"
              >
                {tab.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
