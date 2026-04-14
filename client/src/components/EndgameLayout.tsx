import { SmartImage } from "@/components/SmartImage";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { JourneyNav } from "./JourneyNav";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X, Heart, XCircle } from "lucide-react";

interface EndgameLayoutProps {
  children: React.ReactNode;
}

export default function EndgameLayout({ children }: EndgameLayoutProps) {
  const [location] = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [rainnDismissed, setRainnDismissed] = useState(() => {
    try { return sessionStorage.getItem('rainn-dismissed') === '1'; } catch { return false; }
  });

  const isChecchio = location.includes('/checchio');
  const isMartin = location.includes('/martin');
  const isLorenzo = location.includes('/lorenzo');
  const isReilly = location.includes('/reilly');
  const isMadman = location.includes('/madman');

  const mccarrickItems = [
    { href: "/ledger/mccarrick", label: "01. INTRODUCTION", id: "01" },
    { href: "/ledger/mccarrick/background", label: "02. BACKGROUND", id: "02" },
    { href: "/ledger/mccarrick/profile", label: "03. PROFILE", id: "03" },
    { href: "/ledger/mccarrick/the-rise", label: "04. THE RISE", id: "04" },
    { href: "/ledger/mccarrick/the-regime", label: "05. THE REGIME", id: "05" },
    { href: "/ledger/mccarrick/network", label: "06. THE NETWORK", id: "06" },
    { href: "/ledger/mccarrick/warnings", label: "07. WARNINGS IGNORED", id: "07" },
    { href: "/ledger/mccarrick/mechanisms", label: "08. MECHANISMS", id: "08" },
    { href: "/ledger/mccarrick/seton-hall", label: "09. SETON HALL", id: "09" },
    { href: "/ledger/mccarrick/popes", label: "10. THE POPES", id: "10" },
    { href: "/ledger/mccarrick/secretaries", label: "11. THE SECRETARIAT", id: "11" },
    { href: "/ledger/mccarrick/downfall", label: "12. DOWNFALL", id: "12" },
    { href: "/ledger/mccarrick/the-reckoning", label: "13. THE RECKONING", id: "13" },
    { href: "/ledger/mccarrick/legal", label: "14. LEGAL ACTIONS", id: "14" },
    { href: "/ledger/mccarrick/survivors", label: "15. SURVIVORS", id: "15" },
    { href: "/ledger/mccarrick/responses", label: "16. RESPONSES", id: "16" },
    { href: "/ledger/mccarrick/analysis", label: "17. ANALYSIS", id: "17" },
    { href: "/ledger/mccarrick/conclusion", label: "18. CONCLUSION", id: "18" }
  ];

  const checchioItems = [
    { href: "/ledger/checchio", label: "01. INTRODUCTION", id: "01" },
    { href: "/ledger/checchio/formation", label: "02. FORMATION", id: "02" },
    { href: "/ledger/checchio/ascent", label: "03. THE ASCENT", id: "03" },
    { href: "/ledger/checchio/governance", label: "04. GOVERNANCE", id: "04" },
    { href: "/ledger/checchio/controversies", label: "05. CONTROVERSIES", id: "05" },
    { href: "/ledger/checchio/purge", label: "06. THE PURGE", id: "06" },
    { href: "/ledger/checchio/status", label: "07. CURRENT STATUS", id: "07" },
  ];

  const martinItems = [
    { href: "/ledger/martin", label: "01. THE CASE OF KENNETH MARTIN", id: "01" },
    { href: "/ledger/martin/crimes", label: "02. THE INCIDENT", id: "02" },
    { href: "/ledger/martin/launder", label: "03. THE LAUNDER", id: "03" },
    { href: "/ledger/martin/chicago", label: "04. COMPLICITY", id: "04" }
  ];

  const lorenzoItems = [
    { href: "/ledger/lorenzo", label: "01. THE CASE OF ELIAS LORENZO", id: "01" },
    { href: "/ledger/lorenzo/expulsion", label: "02. THE EXPULSION", id: "02" },
    { href: "/ledger/lorenzo/rehabilitation", label: "03. REHABILITATION", id: "03" },
    { href: "/ledger/lorenzo/elevation", label: "04. THE ELEVATION", id: "04" }
  ];

  const reillyItems = [
    { href: "/ledger/reilly", label: "01. INTRODUCTION", id: "01" },
    { href: "/ledger/reilly/secretary", label: "02. THE SECRETARY", id: "02" },
    { href: "/ledger/reilly/latham", label: "03. THE LATHAM REPORT", id: "03" },
    { href: "/ledger/reilly/presidency", label: "04. THE PRESIDENCY", id: "04" },
    { href: "/ledger/reilly/memes", label: "05. COURT OF OPINION", id: "05" },
    { href: "/ledger/reilly/reckoning", label: "06. THE RECKONING", id: "06" },
    { href: "/ledger/reilly/status", label: "07. CURRENT STATUS", id: "07" },
  ];

  const madmanItems = [
    { href: "/madman", label: "01. EXTERNAL ARCHIVE", id: "01" }
  ];

  let navItems = mccarrickItems;
  let title = "THE McCARRICK DOSSIER";
  let caseFile = "#2018-TEM";

  if (isChecchio) {
    navItems = checchioItems;
    title = "THE CHECCHIO DOSSIER";
    caseFile = "#2026-JFC";
  } else if (isMartin) {
    navItems = martinItems;
    title = "THE MARTIN DOSSIER";
    caseFile = "#1989-KM";
  } else if (isLorenzo) {
    navItems = lorenzoItems;
    title = "THE LORENZO DOSSIER";
    caseFile = "#1980-EL";
  } else if (isReilly) {
    navItems = reillyItems;
    title = "THE REILLY DOSSIER";
    caseFile = "#2026-SHU";
  } else if (isMadman) {
    navItems = madmanItems;
    title = "THE MADMAN ARCHIVE";
    caseFile = "#1986-NWP";
  }

  // Find current section label for mobile header
  const currentSection = navItems.find(item => item.href === location);
  const currentLabel = currentSection?.label ?? navItems[0]?.label ?? "SECTION";
  const currentIdx = navItems.findIndex(item => item.href === location);
  const sectionCount = navItems.length;

  const dossierTabs = [
    { href: "/ledger/mccarrick", label: "McCarrick", active: !isChecchio && !isMartin && !isLorenzo && !isReilly && !isMadman && location.includes('/mccarrick') },
    { href: "/ledger/checchio", label: "Checchio", active: isChecchio },
    { href: "/ledger/reilly", label: "Reilly", active: isReilly },
    { href: "/ledger/martin", label: "Martin", active: isMartin },
    { href: "/ledger/lorenzo", label: "Lorenzo", active: isLorenzo },
    { href: "/madman/exhibit-a", label: "The Families \u203A", active: isMadman },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground font-body selection:bg-primary/20 selection:text-primary-foreground relative">
      <div className="texture-overlay" />

      {/* =========== DESKTOP SIDEBAR =========== */}
      <aside aria-label="Dossier Section Navigation" className="w-64 sticky top-0 h-screen border-r border-border bg-sidebar hidden lg:flex flex-col z-40 overflow-y-auto">
        <div className="p-4 border-b border-border flex flex-col items-center">
          <Link href="/">
            <a className="mb-4 block hover:opacity-80 transition-opacity">
              <img
                src="/assets/images/colored-pirate-logo.png"
                alt="Sodom Hall Home"
                className="w-16 h-auto object-contain"
              />
            </a>
          </Link>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="w-full mb-3">
            <ol className="flex flex-wrap items-center gap-1 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <li><Link href="/"><a className="hover:text-red-400 transition-colors">Home</a></Link></li>
              <li aria-hidden="true" className="text-zinc-700">/</li>
              <li><Link href="/ledger"><a className="hover:text-red-400 transition-colors">Ledger</a></Link></li>
              <li aria-hidden="true" className="text-zinc-700">/</li>
              <li className="text-zinc-300 truncate max-w-[120px]">{title.replace('THE ', '').replace(' DOSSIER', '').replace(' ARCHIVE', '')}</li>
            </ol>
          </nav>

          <h1 className="font-heading text-base text-foreground leading-tight mb-1 text-center w-full font-black tracking-wider">
            {title}
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            CASE FILE: {caseFile}
          </p>
        </div>

        {/* Dossier Tabs */}
        <div className="grid grid-cols-2 w-full">
          {dossierTabs.map((tab, i) => {
            const isLastRow = i >= dossierTabs.length - (dossierTabs.length % 2 === 0 ? 2 : 1);
            return (
              <Link key={tab.href} href={tab.href}>
                <div className={cn(
                  "py-2.5 px-1 text-center font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-all border-r border-border flex items-center justify-center whitespace-nowrap font-bold",
                  !isLastRow && "border-b border-border",
                  tab.active
                    ? "bg-destructive text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}>
                  {tab.label}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="border-b border-border" />

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.id} href={item.href}>
                <div
                  className={cn(
                    "font-mono text-xs uppercase tracking-wider p-3 border transition-all duration-300 cursor-pointer flex justify-between items-center group",
                    isActive
                      ? "border-destructive text-destructive bg-destructive/5 shadow-[0_0_10px_rgba(220,38,38,0.2)] font-black"
                      : "border-border text-zinc-300 hover:border-foreground/50 hover:text-foreground"
                  )}
                >
                  <span className="truncate">{item.label}</span>
                  <span className={cn(
                    "w-5 h-5 flex items-center justify-center text-xs font-bold transition-colors flex-shrink-0 ml-2",
                    isActive ? "bg-destructive text-white" : "bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background"
                  )}>
                    {item.id}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          <Link href="/ledger">
            <div className="font-mono text-sm uppercase tracking-widest bg-red-950/20 border border-red-900/50 text-red-400 hover:bg-red-900 hover:text-white cursor-pointer transition-all px-3 py-3 rounded-sm text-center font-bold">
              ← RETURN TO LEDGER
            </div>
          </Link>
        </div>
      </aside>

      {/* =========== MOBILE HEADER + NAV DRAWER =========== */}
      <div className="lg:hidden">
        {/* Sticky mobile header */}
        <header className="fixed top-0 w-full z-50 bg-background border-b border-border px-4 py-3 flex justify-between items-center shadow-xl">
          <div className="min-w-0 flex-1 pr-4">
            <p className="font-mono text-xs text-red-500 uppercase tracking-widest mb-0.5">CASE FILE: {caseFile}</p>
            <h1 className="font-heading text-sm text-foreground font-black truncate">{title}</h1>
            {currentSection && (
              <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider truncate mt-0.5">
                {currentLabel} ({currentIdx + 1}/{sectionCount})
              </p>
            )}
          </div>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-dossier-nav"
            aria-label="Toggle dossier section navigation"
            className="shrink-0 flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-white px-3 py-2 rounded text-xs font-bold uppercase tracking-widest"
          >
            {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span className="hidden xs:inline">{mobileNavOpen ? 'Close' : 'Sections'}</span>
          </button>
        </header>

        {/* Mobile nav drawer — full section list */}
        {mobileNavOpen && (
          <div
            id="mobile-dossier-nav"
            className="fixed top-[72px] left-0 right-0 bottom-0 z-40 bg-black/95 backdrop-blur-md overflow-y-auto border-b border-border"
          >
            {/* Dossier switcher */}
            <div className="flex overflow-x-auto border-b border-border">
              {dossierTabs.map(tab => (
                <Link key={tab.href} href={tab.href}>
                  <div
                    onClick={() => setMobileNavOpen(false)}
                    className={cn(
                      "shrink-0 px-4 py-3 font-mono text-sm uppercase tracking-wider font-bold border-r border-border cursor-pointer",
                      tab.active ? "bg-destructive text-white" : "text-zinc-400 hover:text-white"
                    )}
                  >
                    {tab.label}
                  </div>
                </Link>
              ))}
            </div>

            <nav className="py-3 px-3 space-y-1">
              {navItems.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link key={item.id} href={item.href}>
                    <div
                      onClick={() => setMobileNavOpen(false)}
                      className={cn(
                        "font-mono text-sm uppercase tracking-wider p-4 border transition-all cursor-pointer flex justify-between items-center",
                        isActive
                          ? "border-destructive text-destructive bg-destructive/10 font-black"
                          : "border-border text-zinc-300 hover:border-zinc-500 hover:text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      <span className={cn(
                        "w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 ml-2",
                        isActive ? "bg-destructive text-white" : "bg-zinc-800 text-zinc-400"
                      )}>
                        {item.id}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-border">
              <Link href="/ledger">
                <div
                  onClick={() => setMobileNavOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest bg-red-950/20 border border-red-900/50 text-red-400 hover:bg-red-900 hover:text-white cursor-pointer transition-all px-4 py-3 text-center font-bold"
                >
                  ← RETURN TO LEDGER
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* =========== MAIN CONTENT =========== */}
      <main id="main-content" className="flex-1 w-full overflow-hidden min-h-screen relative">
        {/* RAINN Persistent Banner */}
        {!rainnDismissed && (
          <div className="bg-[#8b1a1a]/20 border-b border-[#8b1a1a]/40 px-4 py-3 mt-[80px] lg:mt-0">
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <Heart className="w-4 h-4 text-[#8b1a1a] shrink-0" />
                <p className="text-xs md:text-sm text-zinc-300 font-mono">
                  If you or someone you know needs help: <a href="tel:800-656-4673" className="text-white font-bold hover:text-[#8b1a1a] transition-colors">RAINN 1-800-656-HOPE</a> — Free, confidential, 24/7
                </p>
              </div>
              <button
                onClick={() => { setRainnDismissed(true); try { sessionStorage.setItem('rainn-dismissed', '1'); } catch { } }}
                className="shrink-0 text-zinc-500 hover:text-white transition-colors"
                aria-label="Dismiss support banner"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <div className={cn("container py-12 lg:py-16 max-w-5xl mx-auto text-base md:text-lg leading-relaxed", rainnDismissed && "mt-[80px] lg:mt-0")}>
          {children}

          {/* Right of Reply */}
          <div className="mt-16 p-6 border border-zinc-800 bg-zinc-900/50 rounded-sm">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Right of Reply</p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              All individuals and institutions named in this dossier have been invited to provide a response, clarification, or correction. No response has been received as of April 14, 2026. Responses will be published in full on the <Link href="/corrections"><a className="text-red-400 hover:text-red-300 underline">Corrections</a></Link> page.
            </p>
          </div>

          <div className="mt-20">
            <JourneyNav />
          </div>
        </div>
      </main>
    </div>
  );
}
