import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export default function MegaNavigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return false; // Never highlight root in this nav
    return location.startsWith(path);
  };

  const navLinkClass = (path: string) => `
    px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all
    ${isActive(path)
      ? 'bg-red-600 text-white'
      : 'text-gray-300 hover:bg-red-600/20 hover:text-white'}
  `;

  return (
    <nav className="bg-black border-b-2 border-red-600 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-14">
          <div className="flex items-center space-x-1 h-full">
            <Link href="/">
              <a className="px-4 h-full flex items-center group transition-all">
                <img
                  src="/assets/sodom-hall-logo.png"
                  alt="Sodom Hall Home"
                  className="h-10 w-auto grayscale brightness-200 group-hover:brightness-100 group-hover:grayscale-0 transition-all drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]"
                />
              </a>
            </Link>
            <Link href="/cathedral">
              <a className={navLinkClass('/cathedral')}>
                THE CATHEDRAL
              </a>
            </Link>
            <Link href="/endgame">
              <a className={navLinkClass('/endgame')}>
                THE FRANCHISOR
              </a>
            </Link>
            <Link href="/academy">
              <a className={navLinkClass('/academy')}>
                THE ACADEMY
              </a>
            </Link>
            <Link href="/ruling">
              <a className={navLinkClass('/ruling')}>
                THE RULING
              </a>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-3">
            <Link href="/">
              <a className="flex items-center">
                <img
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
              <Link href="/cathedral">
                <a className="block px-4 py-2 text-white hover:bg-red-600/20">THE CATHEDRAL</a>
              </Link>
              <Link href="/endgame">
                <a className="block px-4 py-2 text-white hover:bg-red-600/20">THE FRANCHISOR</a>
              </Link>
              <Link href="/academy">
                <a className="block px-4 py-2 text-white hover:bg-red-600/20">THE ACADEMY</a>
              </Link>
              <Link href="/ruling">
                <a className="block px-4 py-2 text-white hover:bg-red-600/20">THE RULING</a>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Sub-navigation for Endgame */}
      {location.startsWith('/endgame') && (
        <div className="bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-2 flex flex-wrap gap-2">
            <Link href="/endgame/mccarrick">
              <a className={`px-4 py-2 text-xs uppercase ${location.includes('mccarrick') && !location.includes('checchio') && !location.includes('reilly') && !location.includes('martin') && !location.includes('lorenzo') ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                McCarrick
              </a>
            </Link>
            <Link href="/endgame/checchio">
              <a className={`px-4 py-2 text-xs uppercase ${location.includes('checchio') ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                Checchio
              </a>
            </Link>
            <Link href="/endgame/reilly">
              <a className={`px-4 py-2 text-xs uppercase ${location.includes('reilly') ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                Reilly
              </a>
            </Link>
            <Link href="/endgame/martin">
              <a className={`px-4 py-2 text-xs uppercase ${location.includes('martin') ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                Martin
              </a>
            </Link>
            <Link href="/endgame/lorenzo">
              <a className={`px-4 py-2 text-xs uppercase ${location.includes('lorenzo') ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                Lorenzo
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
