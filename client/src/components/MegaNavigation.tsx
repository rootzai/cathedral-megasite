import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

const NAV_ITEMS = [
  { path: "/", label: "The Cathedral" },
  { path: "/academy", label: "The Academy" },
  { path: "/endgame/mccarrick", label: "The Endgame" },
  { path: "/ruling", label: "The Ruling" },
];

const ACADEMY_ROUTES = [
  { path: "/academy", label: "Overview" },
  { path: "/academy/global-growth", label: "Global Growth" },
  { path: "/academy/clergy-metrics", label: "Clergy Metrics" },
  { path: "/academy/sacramental-data", label: "Sacramental Data" },
  { path: "/academy/financial-operating-model", label: "Financial Model" },
  { path: "/academy/diocesan-finance", label: "Diocesan Finance" },
  { path: "/academy/institutional-structure", label: "Structure" },
  { path: "/academy/stakeholder-analysis", label: "Stakeholders" },
  { path: "/academy/mccarrick-mechanism", label: "The Mechanism" },
  { path: "/academy/cardinalate-mccarrick", label: "The Cardinalate" },
  { path: "/academy/the-corporate-veil", label: "Corporate Veil" },
];

export default function MegaNavigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location === '/') return false;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  const isSubActive = (path: string) => {
    return location === path;
  };

  const isHome = location === '/';

  const navLinkClass = (path: string) => cn(
    "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300",
    isActive(path)
      ? (isHome ? "text-white" : "text-white bg-zinc-800/50")
      : "text-zinc-400 hover:text-white hover:bg-zinc-800/30"
  );

  const mobileLinkClass = (path: string) => cn(
    "block px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors",
    isActive(path)
      ? "text-white bg-zinc-800"
      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
  );

  const mobileSubLinkClass = (path: string) => cn(
    "flex items-center gap-3 py-3 text-[10px] uppercase font-bold tracking-widest transition-colors",
    isSubActive(path)
      ? "text-white"
      : "text-zinc-500 hover:text-zinc-300"
  );

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      isScrolled ? "bg-black/90 backdrop-blur-md border-b border-zinc-800/50 py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo / Home Link */}
          <Link href="/">
            <a className="flex items-center gap-3 group">
              <div className={cn(
                "w-10 h-10 border-2 transition-all duration-500 flex items-center justify-center",
                isHome ? "border-white/20 group-hover:border-white" : "border-white/40 group-hover:border-white"
              )}>
                <span className="text-white font-serif font-bold text-2xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-sm tracking-tighter leading-none hidden sm:block">
                  THE CATHEDRAL<br />OF DOCUMENTS
                </span>
                {isHome && (
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em] mt-1 hidden sm:block">
                    Truth Still Emerging
                  </span>
                )}
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={navLinkClass(item.path)}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-zinc-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-zinc-800 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col divide-y divide-zinc-900/50">
              <Link href="/">
                <a className={mobileLinkClass('/')} onClick={() => setMobileMenuOpen(false)}>The Cathedral</a>
              </Link>

              {/* Academy with Sub-routes */}
              <div className="bg-zinc-900/20">
                <Link href="/academy">
                  <a className={mobileLinkClass('/academy')} onClick={() => setMobileMenuOpen(false)}>The Academy</a>
                </Link>
                <div className="pl-6 pb-4 space-y-1">
                  {ACADEMY_ROUTES.slice(1).map((route) => (
                    <Link key={route.path} href={route.path}>
                      <a className={mobileSubLinkClass(route.path)} onClick={() => setMobileMenuOpen(false)}>
                        <div className={cn(
                          "w-1 h-1 rounded-full transition-colors",
                          isSubActive(route.path) ? "bg-white" : "bg-zinc-800"
                        )} />
                        {route.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/endgame/mccarrick">
                <a className={mobileLinkClass('/endgame/mccarrick')} onClick={() => setMobileMenuOpen(false)}>The Endgame</a>
              </Link>

              <Link href="/ruling">
                <a className={mobileLinkClass('/ruling')} onClick={() => setMobileMenuOpen(false)}>The Ruling</a>
              </Link>

              <div className="p-6 bg-zinc-900/40">
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.3em] mb-4">Current Investigation</p>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center border border-red-500/20">
                    <span className="text-red-500 font-bold text-xs">12</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest">The Dirty Dozen</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Judge Avion Benjamin Ruling</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
