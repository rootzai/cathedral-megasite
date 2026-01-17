import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { useState } from "react";

interface EndgameLayoutProps {
  children: React.ReactNode;
}

export default function EndgameLayout({ children }: EndgameLayoutProps) {
  const [location] = useLocation();
  const isChecchio = location.includes('/checchio');

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

  const navItems = isChecchio ? checchioItems : mccarrickItems;
  const title = isChecchio ? "THE CHECCHIO DOSSIER" : "THE MCCARRICK DOSSIER";
  const caseFile = isChecchio ? "#2025-JFC" : "#2018-TEM";

  return (
    <div className="min-h-screen flex bg-background text-foreground font-body selection:bg-primary/20 selection:text-primary-foreground relative">
      <div className="texture-overlay"></div>

      {/* Sidebar Navigation */}
      <aside className="w-64 fixed h-full border-r border-border bg-sidebar hidden lg:flex flex-col z-50">
        <div className="p-6 border-b border-border">
          <h1 className="font-heading text-xl text-foreground leading-none mb-2">
            {title}
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            CASE FILE: {caseFile}
          </p>
        </div>

        {/* Section Toggle */}
        <div className="flex border-b border-border">
          <Link href="/endgame/mccarrick">
            <div className={cn(
              "flex-1 py-3 px-4 text-center font-mono text-xs uppercase tracking-wider cursor-pointer transition-all",
              !isChecchio
                ? "bg-destructive text-white"
                : "text-muted-foreground hover:bg-muted"
            )}>
              McCarrick
            </div>
          </Link>
          <Link href="/endgame/checchio">
            <div className={cn(
              "flex-1 py-3 px-4 text-center font-mono text-xs uppercase tracking-wider cursor-pointer transition-all border-l border-border",
              isChecchio
                ? "bg-destructive text-white"
                : "text-muted-foreground hover:bg-muted"
            )}>
              Checchio
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
