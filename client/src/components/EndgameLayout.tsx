import { SmartImage } from "@/components/SmartImage";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { JourneyNav } from "./JourneyNav";


interface EndgameLayoutProps {
  children: React.ReactNode;
}

export default function EndgameLayout({ children }: EndgameLayoutProps) {
  const [location] = useLocation();
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
    { href: "/ledger/reilly", label: "01. FACE OF IMPUNITY", id: "01" }
  ];

  const madmanItems = [
    { href: "/ledger/madman", label: "01. EXTERNAL ARCHIVE", id: "01" }
  ];

  let navItems = mccarrickItems;
  let title = "THE MCCARRICK DOSSIER";
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

  return (
    <div className="min-h-screen flex bg-background text-foreground font-body selection:bg-primary/20 selection:text-primary-foreground relative">
      <div className="texture-overlay"></div>

      {/* Sidebar Navigation */}
      <aside className="w-64 sticky top-0 h-screen border-r border-border bg-sidebar hidden lg:flex flex-col z-40 overflow-y-auto">
        <div className="p-4 border-b border-border flex flex-col items-center">
          <Link href="/">
            <a className="mb-4 block hover:opacity-80 transition-opacity">
              <img
                src="/assets/images/colored-pirate-logo.png"
                alt="Sodom Hall Home"
                className="w-16 h-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </Link>
          <h1 className="font-heading text-xl text-foreground leading-none mb-2 text-center w-full">
            {title}
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            CASE FILE: {caseFile}
          </p>
        </div>

        {/* Section Toggle */}
        <div className="flex border-b border-border w-full overflow-x-auto scrollbar-thin">
          <Link href="/ledger/mccarrick">
            <div className={cn(
              "flex-shrink-0 py-3 px-4 text-center font-mono text-[9px] uppercase tracking-wider cursor-pointer transition-all border-r border-border flex items-center justify-center whitespace-nowrap",
              location.includes('/mccarrick') && !isChecchio && !isMartin && !isLorenzo && !isReilly && !isMadman
                ? "bg-destructive text-zinc-900"
                : "text-muted-foreground hover:bg-muted"
            )}>
              McCarrick
            </div>
          </Link>
          <Link href="/ledger/checchio">
            <div className={cn(
              "flex-shrink-0 py-3 px-4 text-center font-mono text-[9px] uppercase tracking-wider cursor-pointer transition-all border-r border-border flex items-center justify-center whitespace-nowrap",
              isChecchio
                ? "bg-destructive text-zinc-900"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Checchio
            </div>
          </Link>
          <Link href="/ledger/reilly">
            <div className={cn(
              "flex-shrink-0 py-3 px-4 text-center font-mono text-[9px] uppercase tracking-wider cursor-pointer transition-all border-r border-border flex items-center justify-center whitespace-nowrap",
              isReilly
                ? "bg-destructive text-zinc-900"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Reilly
            </div>
          </Link>
          <Link href="/ledger/martin">
            <div className={cn(
              "flex-shrink-0 py-3 px-4 text-center font-mono text-[9px] uppercase tracking-wider cursor-pointer transition-all border-r border-border flex items-center justify-center whitespace-nowrap",
              isMartin
                ? "bg-destructive text-zinc-900"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Martin
            </div>
          </Link>
          <Link href="/ledger/lorenzo">
            <div className={cn(
              "flex-shrink-0 py-3 px-4 text-center font-mono text-[9px] uppercase tracking-wider cursor-pointer transition-all border-r border-border flex items-center justify-center whitespace-nowrap",
              isLorenzo
                ? "bg-destructive text-zinc-900"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Lorenzo
            </div>
          </Link>
          <Link href="/ledger/madman">
            <div className={cn(
              "flex-shrink-0 py-3 px-4 text-center font-mono text-[9px] uppercase tracking-wider cursor-pointer transition-all border-r border-border flex items-center justify-center whitespace-nowrap",
              isMadman
                ? "bg-destructive text-zinc-900"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Archive
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.id} href={item.href}>
                <div
                  className={cn(
                    "font-mono text-xs uppercase tracking-wider p-3 border transition-all duration-300 cursor-pointer flex justify-between items-center group",
                    isActive
                      ? "border-destructive text-destructive bg-destructive/5 shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                      : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                  )}
                >
                  <span className="truncate">{item.label}</span>
                  <span className={cn(
                    "w-5 h-5 flex items-center justify-center text-[9px] font-bold transition-colors flex-shrink-0 ml-2",
                    isActive ? "bg-destructive text-zinc-900" : "bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background"
                  )}>
                    {item.id}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          <Link href="/evidence">
            <div className="font-mono text-[10px] uppercase tracking-widest bg-red-950/20 border border-red-900/50 text-red-500 hover:bg-red-900 hover:text-white cursor-pointer transition-all px-3 py-3 rounded-sm text-center font-bold">
              ← BACK TO EVIDENCE HUB
            </div>
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 w-full z-50 bg-background border-b border-border p-4 flex justify-between items-center">
        <div>
          <h1 className="font-heading text-lg text-foreground">{title}</h1>
          <p className="font-mono text-[10px] text-muted-foreground uppercase">CASE FILE: {caseFile}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full overflow-hidden min-h-screen relative">
        <div className="container py-12 lg:py-16 max-w-5xl mx-auto mt-16 lg:mt-0">
          {children}

          <div className="mt-20">
            <JourneyNav />
          </div>
        </div>
      </main>
    </div>
  );
}
