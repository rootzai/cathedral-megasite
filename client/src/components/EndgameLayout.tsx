import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

interface EndgameLayoutProps {
  children: React.ReactNode;
}

export default function EndgameLayout({ children }: EndgameLayoutProps) {
  const [location] = useLocation();
  const isChecchio = location.includes('/checchio');
  const isMartin = location.includes('/martin');
  const isLorenzo = location.includes('/lorenzo');
  const isReilly = location.includes('/reilly');

  const mccarrickItems = [
    { href: "/endgame/mccarrick", label: "01. INTRODUCTION", id: "01" },
    { href: "/endgame/mccarrick/background", label: "02. BACKGROUND", id: "02" },
    { href: "/endgame/mccarrick/profile", label: "03. PROFILE", id: "03" },
    { href: "/endgame/mccarrick/the-rise", label: "04. THE RISE", id: "04" },
    { href: "/endgame/mccarrick/the-regime", label: "05. THE REGIME", id: "05" },
    { href: "/endgame/mccarrick/network", label: "06. THE NETWORK", id: "06" },
    { href: "/endgame/mccarrick/warnings", label: "07. WARNINGS IGNORED", id: "07" },
    { href: "/endgame/mccarrick/mechanisms", label: "08. MECHANISMS", id: "08" },
    { href: "/endgame/mccarrick/seton-hall", label: "09. SETON HALL", id: "09" },
    { href: "/endgame/mccarrick/downfall", label: "10. DOWNFALL", id: "10" },
    { href: "/endgame/mccarrick/the-reckoning", label: "11. THE RECKONING", id: "11" },
    { href: "/endgame/mccarrick/legal", label: "12. LEGAL ACTIONS", id: "12" },
    { href: "/endgame/mccarrick/survivors", label: "13. SURVIVORS", id: "13" },
    { href: "/endgame/mccarrick/responses", label: "14. RESPONSES", id: "14" },
    { href: "/endgame/mccarrick/analysis", label: "15. ANALYSIS", id: "15" },
    { href: "/endgame/mccarrick/conclusion", label: "16. CONCLUSION", id: "16" },
  ];

  const checchioItems = [
    { href: "/endgame/checchio", label: "01. INTRODUCTION", id: "01" },
    { href: "/endgame/checchio/formation", label: "02. FORMATION", id: "02" },
    { href: "/endgame/checchio/ascent", label: "03. THE ASCENT", id: "03" },
    { href: "/endgame/checchio/governance", label: "04. GOVERNANCE", id: "04" },
    { href: "/endgame/checchio/controversies", label: "05. CONTROVERSIES", id: "05" },
    { href: "/endgame/checchio/purge", label: "06. THE PURGE", id: "06" },
    { href: "/endgame/checchio/status", label: "07. CURRENT STATUS", id: "07" },
  ];

  const martinItems = [
    { href: "/endgame/martin", label: "01. THE ENFORCER", id: "01" }
  ];

  const lorenzoItems = [
    { href: "/endgame/lorenzo", label: "01. THE REHABILITATED", id: "01" }
  ];

  const reillyItems = [
    { href: "/endgame/reilly", label: "01. FACE OF IMPUNITY", id: "01" }
  ];

  let navItems = mccarrickItems;
  let title = "THE MCCARRICK DOSSIER";
  let caseFile = "#2018-TEM";

  if (isChecchio) {
    navItems = checchioItems;
    title = "THE CHECCHIO DOSSIER";
    caseFile = "#2025-JFC";
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
    caseFile = "#2025-SHU";
  }

  return (
    <div className="min-h-screen flex bg-background text-foreground font-body selection:bg-primary/20 selection:text-primary-foreground relative">
      <div className="texture-overlay"></div>

      {/* Sidebar Navigation */}
      <aside className="w-64 fixed h-full border-r border-border bg-sidebar hidden lg:flex flex-col z-50">
        <div className="p-4 border-b border-border flex flex-col items-center">
          <Link href="/cathedral">
            <a className="mb-4 block hover:opacity-80 transition-opacity">
              <img
                src="/assets/sodom-hall-logo.png"
                alt="Sodom Hall Home"
                className="h-16 w-auto grayscale brightness-200"
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
        <div className="flex flex-wrap border-b border-border">
          <Link href="/endgame/mccarrick">
            <div className={cn(
              "w-1/2 py-2 px-2 text-center font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-all border-r border-b border-border",
              location.includes('/mccarrick') && !isChecchio && !isMartin && !isLorenzo && !isReilly
                ? "bg-destructive text-white"
                : "text-muted-foreground hover:bg-muted"
            )}>
              McCarrick
            </div>
          </Link>
          <Link href="/endgame/checchio">
            <div className={cn(
              "w-1/2 py-2 px-2 text-center font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-all border-b border-border",
              isChecchio
                ? "bg-destructive text-white"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Checchio
            </div>
          </Link>
          <Link href="/endgame/reilly">
            <div className={cn(
              "w-1/3 py-2 px-1 text-center font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-all border-r border-border",
              isReilly
                ? "bg-destructive text-white"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Reilly
            </div>
          </Link>
          <Link href="/endgame/martin">
            <div className={cn(
              "w-1/3 py-2 px-1 text-center font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-all border-r border-border",
              isMartin
                ? "bg-destructive text-white"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Martin
            </div>
          </Link>
          <Link href="/endgame/lorenzo">
            <div className={cn(
              "w-1/3 py-2 px-1 text-center font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-all",
              isLorenzo
                ? "bg-destructive text-white"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Lorenzo
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
                    isActive ? "bg-destructive text-white" : "bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background"
                  )}>
                    {item.id}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Link href="/endgame">
            <div className="font-mono text-xs text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-2">
              ← Back to Portal
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
      <main className="flex-1 lg:ml-64 min-h-screen relative">
        <div className="container py-12 lg:py-16 max-w-5xl mx-auto mt-16 lg:mt-0">
          {children}
        </div>
      </main>
    </div>
  );
}
