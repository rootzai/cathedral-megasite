import { Link, useLocation } from 'wouter';
import { useState } from 'react';
import SiteLegendModal from './SiteLegendModal';

// Unified Minimalist Header - "The Vault Map" Paradigm
export default function MegaNavigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tickerPaused, setTickerPaused] = useState(false);
  const [legendOpen, setLegendOpen] = useState(false);

  const newsItems = [
    { type: "BREAKING", text: "October 2025 Jury Awards $5M in Delbarton Abuse Case" },
    { type: "DOCUMENTED", text: "LATHAM REPORT: 24,000 Pages of Evidence Unsealed by Court Order" },
    { type: "DOCUMENTED", text: "FORENSIC AUDIT: McCarrick 'Archbishop's Fund' Slush Fund Revealed" },
    { type: "BREAKING", text: "COURT ORDER: Seton Hall University v. Does, Case No. 30-2026-01555640-CU-PT-CJC — California Hearing Set for May 28, 2026, Dept. C23 Santa Ana." }
  ];

  return (
    <nav aria-label="Primary Navigation" className="bg-black border-b border-white/5 sticky top-0 z-[100]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-red-900 focus:text-white focus:px-4 focus:py-2 focus:font-bold focus:text-sm focus:rounded">
        Skip to content
      </a>

      {/* RAINN Crisis Resource Banner */}
      <div className="bg-[#050505] border-b border-white/5 py-2.5 px-4 flex items-center justify-center gap-3 text-sm">
        <span className="text-zinc-300 font-mono text-xs uppercase tracking-widest italic">Confidential Survivor Support:</span>
        <a href="https://www.rainn.org" target="_blank" rel="noopener noreferrer" className="font-bold text-white text-xs hover:text-red-500 transition-colors uppercase tracking-widest underline decoration-red-900/40 underline-offset-4">RAINN.org</a>
        <span className="text-zinc-600">|</span>
        <a href="tel:1-800-656-4673" className="font-bold text-xs text-red-500 hover:text-red-400 transition-colors tracking-[0.2em] bg-red-900/10 px-2 py-0.5 rounded">1-800-656-HOPE</a>
      </div>

      {/* Primary Navigation Tier - Minimalist Memory Palace Map Trigger */}
      <div className="w-full px-4 lg:px-8">
        <div className="hidden md:flex items-center justify-between h-20">
          <Link href="/">
            <a className="h-full flex items-center group transition-all shrink-0">
              <img src="/assets/images/colored-pirate-logo.png" alt="Sodom Hall Home" className="w-16 h-auto object-contain group-hover:scale-110 transition-all filter grayscale brightness-50 contrast-125" />
              <span className="ml-4 text-zinc-500 group-hover:text-zinc-100 transition-colors duration-500 font-cinzel font-black tracking-[0.2em] text-2xl uppercase">Sodom Hall</span>
            </a>
          </Link>

          <div className="flex gap-4">
              <button 
                onClick={() => setLegendOpen(true)}
                className="border border-[#c41e1e] bg-[#c41e1e]/10 hover:bg-[#c41e1e]/30 text-[#c41e1e] hover:text-red-400 px-6 py-3 text-base font-black uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(196,30,30,0.1)] hover:shadow-[0_0_30px_rgba(196,30,30,0.3)] flex items-center justify-center gap-3"
              >
                  <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  [ ACCESS SITE LEGEND ]
              </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-6">
            <Link href="/">
              <a className="flex items-center gap-4">
                <img src="/assets/images/colored-pirate-logo.png" alt="Sodom Hall Home" className="h-16 w-auto object-contain filter grayscale" />
              </a>
            </Link>
            <button 
              onClick={() => setLegendOpen(true)}
              className="bg-[#c41e1e]/20 border border-[#c41e1e]/50 text-[#c41e1e] px-6 py-3 text-lg font-bold uppercase tracking-widest flex items-center gap-3"
            >
                <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                LEGEND
            </button>
          </div>
        </div>
      </div>

      {/* 3. News Ticker */}
      <div className="hidden md:flex bg-[#080808] h-12 items-center border-t border-white/5 group" aria-label="News ticker" role="region">
        <button onClick={() => setTickerPaused(!tickerPaused)} className="shrink-0 px-4 h-full flex items-center text-zinc-600 hover:text-white transition-colors border-r border-white/5 cursor-pointer z-10">
          {tickerPaused ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg> : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>}
        </button>
        <div className="overflow-hidden flex-1 h-full flex items-center opacity-60 hover:opacity-100 transition-opacity">
          <div className={`flex ${tickerPaused ? '' : 'animate-ticker'} group-hover:[animation-play-state:paused] items-center whitespace-nowrap`} style={{ minWidth: 'max-content', ...(tickerPaused ? { animationPlayState: 'paused' } : {}) }}>
            {[...newsItems, ...newsItems].map((item, idx) => (
              <div key={idx} className="flex items-center px-16 shrink-0">
                <span className={`text-base font-bold px-3 py-1 mr-4 rounded border shrink-0 ${item.type === 'BREAKING' ? 'bg-zinc-900 text-red-500 border-red-900/50' : 'bg-black text-zinc-500 border-white/5'}`}>{item.type}</span>
                <span className="text-lg font-mono text-zinc-400 uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <SiteLegendModal isOpen={legendOpen} onClose={() => setLegendOpen(false)} />
    </nav>
  );
}
