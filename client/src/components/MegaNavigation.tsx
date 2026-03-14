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
    const isLinkActive = path === '/epstein'
      ? (location.startsWith('/epstein') || location.includes('epstein-nexus'))
      : isActive(path);

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
            <Link href="/cathedral"><a className={navLinkClass('/cathedral')}>THE CATHEDRAL</a></Link>
            <Link href="/ruling"><a className={navLinkClass('/ruling')}>THE RULING</a></Link>
            <Link href="/endgame"><a className={navLinkClass('/endgame')}>THE FRANCHISE</a></Link>
            <Link href="/epstein"><a className={navLinkClass('/epstein')}>THE EPSTEIN NEXUS</a></Link>
            <Link href="/church-bk"><a className={navLinkClass('/church-bk')}>CHURCH BK</a></Link>
            <Link href="/they-knew"><a className={navLinkClass('/they-knew')}>THEY KNEW</a></Link>
            <Link href="/expose"><a className={navLinkClass('/expose')}>THE ARCHITECTURE</a></Link>
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
              <Link href="/cathedral"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE CATHEDRAL</a></Link>
              <Link href="/ruling"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE RULING</a></Link>
              <Link href="/endgame"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE FRANCHISE</a></Link>
              <Link href="/epstein"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE EPSTEIN NEXUS</a></Link>
              <Link href="/church-bk"><a className="block px-4 py-2 text-white hover:bg-red-600/20">CHURCH BK</a></Link>
              <Link href="/they-knew"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THEY KNEW</a></Link>
              <Link href="/expose"><a className="block px-4 py-2 text-white hover:bg-red-600/20">THE ARCHITECTURE</a></Link>
            </div>
          )}
        </div>
      </div>

      {/* Sub-navigation for They Knew */}
      {location.startsWith('/they-knew') && (
        <div className="bg-zinc-900 border-t border-zinc-800 animate-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-6">
            <a href="#filter" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Who Knew</a>
            <a href="#regents" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Regents</a>
            <a href="#trustees" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Trustees</a>
            <a href="#visitors" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Visitors</a>
            <a href="#lawyers" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Lawyers</a>
            <a href="#timeline" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Timeline</a>
          </div>
        </div>
      )}

      {/* Sub-navigation for The Ruling */}
      {location.startsWith('/ruling') && (
        <div className="bg-blue-950 border-t border-blue-900 animate-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-6">
            <Link href="/ruling"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/ruling' ? 'text-white underline' : 'text-blue-300 hover:text-white transition-colors'}`}>Overview</a></Link>
            <Link href="/ruling/timeline"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/ruling/timeline' ? 'text-white underline' : 'text-blue-300 hover:text-white transition-colors'}`}>Timeline</a></Link>
            <Link href="/ruling/evidence"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/ruling/evidence' ? 'text-white underline' : 'text-blue-300 hover:text-white transition-colors'}`}>Evidence</a></Link>
            <Link href="/ruling/analysis"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/ruling/analysis' ? 'text-white underline' : 'text-blue-300 hover:text-white transition-colors'}`}>Analysis</a></Link>
            <Link href="/ruling/dirty-dozen"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/ruling/dirty-dozen' ? 'text-white underline' : 'text-blue-300 hover:text-white transition-colors'}`}>Dirty Dozen</a></Link>
          </div>
        </div>
      )}

      {/* Sub-navigation for Church BK */}
      {location.startsWith('/church-bk') && (
        <div className="bg-orange-950 border-t border-orange-900 animate-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-6">
            <Link href="/church-bk"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/church-bk' ? 'text-white underline' : 'text-orange-300 hover:text-white transition-colors'}`}>Case Status</a></Link>
            <Link href="/church-bk/diocesan-finance"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/church-bk/diocesan-finance' ? 'text-white underline' : 'text-orange-300 hover:text-white transition-colors'}`}>Diocesan Finance</a></Link>
            <Link href="/church-bk/financial-operating-model"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/church-bk/financial-operating-model' ? 'text-white underline' : 'text-orange-300 hover:text-white transition-colors'}`}>Model</a></Link>
            <Link href="/church-bk/active-case-dossiers"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/church-bk/active-case-dossiers' ? 'text-white underline' : 'text-orange-300 hover:text-white transition-colors'}`}>Active Dossiers</a></Link>
          </div>
        </div>
      )}

      {/* Sub-navigation for The Architecture (Expose) */}
      {location.startsWith('/expose') && (
        <div className="bg-zinc-900 border-t border-zinc-800 animate-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-6">
            <Link href="/expose"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/expose' ? 'text-white underline' : 'text-zinc-500 hover:text-white transition-colors'}`}>Overview</a></Link>
            <Link href="/expose/rabner-exhibits"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/expose/rabner-exhibits' ? 'text-white underline' : 'text-zinc-500 hover:text-white transition-colors'}`}>Rabner Exhibits</a></Link>
            <Link href="/expose/nyre-dismissal"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/expose/nyre-dismissal' ? 'text-white underline' : 'text-zinc-500 hover:text-white transition-colors'}`}>Nyre Dismissal</a></Link>
            <Link href="/expose/mccarrick-network"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/expose/mccarrick-network' ? 'text-white underline' : 'text-zinc-500 hover:text-white transition-colors'}`}>The Network</a></Link>
            <Link href="/expose/epstein-nexus"><a className={`text-[10px] font-bold uppercase tracking-widest ${location === '/expose/epstein-nexus' ? 'text-white underline' : 'text-zinc-500 hover:text-white transition-colors'}`}>Epstein Nexus</a></Link>
          </div>
        </div>
      )}

      {/* Sub-navigation for The Franchise (Endgame) */}
      {location.startsWith('/endgame') && (
        <div className="bg-gray-950 border-t border-gray-900 scrollbar-hide">
          <div className="container mx-auto px-4 py-2 flex flex-wrap justify-center gap-4">
            <Link href="/endgame/mccarrick">
              <a className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${location.includes('mccarrick') && !location.includes('checchio') && !location.includes('reilly') && !location.includes('martin') && !location.includes('lorenzo') ? 'text-white underline' : 'text-gray-500 hover:text-white transition-colors'}`}>
                McCarrick
              </a>
            </Link>
            <Link href="/endgame/checchio">
              <a className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${location.includes('checchio') ? 'text-white underline' : 'text-gray-500 hover:text-white transition-colors'}`}>
                Checchio
              </a>
            </Link>
            <Link href="/endgame/reilly">
              <a className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${location.includes('reilly') ? 'text-white underline' : 'text-gray-500 hover:text-white transition-colors'}`}>
                Reilly
              </a>
            </Link>
            <Link href="/endgame/martin">
              <a className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${location.includes('martin') ? 'text-white underline' : 'text-gray-500 hover:text-white transition-colors'}`}>
                Martin
              </a>
            </Link>
            <Link href="/endgame/lorenzo">
              <a className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${location.includes('lorenzo') ? 'text-white underline' : 'text-gray-500 hover:text-white transition-colors'}`}>
                Lorenzo
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
