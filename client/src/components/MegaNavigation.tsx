import { cn } from '@/lib/utils';
import {
  ChevronDown,
  Crown,
  DollarSign,
  Globe,
  Landmark,
  Scale,
  Shield,
  Wallet
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

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
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  const isHome = location === '/';

  const navLinkClass = (path: string) => cn(
    "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300",
    isActive(path)
      ? (isHome ? "text-white" : "text-white bg-zinc-800/50")
      : "text-zinc-400 hover:text-white hover:bg-zinc-800/30"
  );

  const academyItems = [
    { href: "/financial-operating-model", label: "Financial Model", icon: Wallet },
    { href: "/diocesan-finance", label: "Diocesan Intel", icon: DollarSign },
    { href: "/institutional-structure", label: "Structure", icon: Landmark },
    { href: "/cardinalate-mccarrick", label: "The Cardinalate", icon: Crown },
    { href: "/the-corporate-veil", label: "Corporate Veil", icon: Shield },
    { href: "/stakeholder-analysis", label: "Stakeholders", icon: Scale },
    { href: "/global-church-metrics", label: "Global Metrics", icon: Globe },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled || !isHome ? "bg-black/90 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
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
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/">
              <a className={navLinkClass('/')}>The Cathedral</a>
            </Link>

            <div className="group relative">
              <button className={cn(navLinkClass('/academy'), "flex items-center gap-1")}>
                The Academy <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full right-0 w-64 bg-zinc-950 border border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pt-2">
                <div className="grid grid-cols-1 p-2">
                  {academyItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <a className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-900 transition-colors text-zinc-400 hover:text-white text-[10px] uppercase font-bold tracking-widest">
                        <item.icon className="w-4 h-4 text-zinc-600" />
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/endgame/mccarrick">
              <a className={navLinkClass('/endgame')}>The Endgame</a>
            </Link>
            <Link href="/ruling">
              <a className={navLinkClass('/ruling')}>The Ruling</a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-zinc-800 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-10 space-y-2 animate-in slide-in-from-top-4 duration-300">
            <Link href="/">
              <a className="block px-6 py-4 text-white hover:bg-zinc-800 text-xs font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>The Cathedral</a>
            </Link>
            <Separator className="bg-zinc-800 mx-6 opacity-50" />
            <div className="px-6 py-2">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">The Academy Report</p>
              <div className="grid grid-cols-1 gap-1">
                {academyItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a className="flex items-center gap-3 py-3 text-zinc-400 hover:text-white text-[10px] uppercase font-bold tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <Separator className="bg-zinc-800 mx-6 opacity-50" />
            <Link href="/endgame/mccarrick">
              <a className="block px-6 py-4 text-white hover:bg-zinc-800 text-xs font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>The Endgame</a>
            </Link>
            <Link href="/ruling">
              <a className="block px-6 py-4 text-white hover:bg-zinc-800 text-xs font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>The Ruling</a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("shrink-0 bg-border h-[1px] w-full", className)}
      {...props}
    />
  );
}
