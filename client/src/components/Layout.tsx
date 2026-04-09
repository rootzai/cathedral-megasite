import { BoschOwl, HollowEye, TwistedBranch } from "@/components/BoschSymbols";
import { ScreamToggle } from "@/components/ScreamToggle";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { SmartImage } from "@/components/SmartImage";


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/ruling", label: "01. THE RULING", id: "01" },
    { href: "/ruling/dirty-dozen", label: "02. THE DIRTY DOZEN", id: "02" },
    { href: "/ruling/reilly", label: "03. THE PRESIDENCY OF JOSEPH REILLY", id: "03" },
    { href: "/ruling/beach-house", label: "04. THE BEACH HOUSE", id: "04" },
    { href: "/ruling/tobin-hypocrisy", label: "05. TOBIN'S HYPOCRISY", id: "05" },
    { href: "/ruling/corporate-veil", label: "06. THE CORPORATE VEIL", id: "06" },
    { href: "/ruling/timeline", label: "07. TIMELINE OF ERASURE", id: "07" },
    { href: "/ruling/evidence", label: "08. EVIDENCE REPOSITORY", id: "08" },
    { href: "/ruling/analysis", label: "09. ANALYSIS", id: "09" },
    { href: "/ruling/sheeran-mccarrick", label: "10. THE NEXUS", id: "10" },
    { href: "/ruling/sanction-plea", label: "11. SANCTION PLEA", id: "11" },
  ];

  return (
    <div className="min-h-screen flex bg-background text-foreground font-body selection:bg-primary/20 selection:text-primary-foreground relative">
      <div className="texture-overlay"></div>

      {/* Symbolic Watermarks */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <TwistedBranch className="absolute top-[-5%] right-[-5%] w-[40vw] h-[20vw] text-primary rotate-12" opacity={0.03} />
        <TwistedBranch className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[25vw] text-primary -rotate-6" opacity={0.02} />
        <HollowEye className="absolute top-[20%] left-[5%] w-24 h-16 text-accent" opacity={0.04} />
        <BoschOwl className="absolute bottom-[5%] right-[10%] w-32 h-32 text-muted-foreground" opacity={0.03} />
      </div>
      {/* Sidebar Navigation - Dossier Style */}
      <aside className="w-64 sticky top-0 h-screen border-r border-border bg-sidebar hidden lg:flex flex-col z-40 overflow-y-auto">
        <div className="p-4 border-b border-border flex flex-col items-center">
          <Link href="/cathedral">
            <a className="mb-4 block hover:opacity-80 transition-opacity">
              <img
                src="/assets/images/colored-pirate-logo.png"
                alt="Sodom Hall Home"
                className="w-20 h-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </Link>
          <h1 className="font-heading text-2xl text-foreground leading-none mb-2 text-center w-full">
            THE BENJAMIN RULING
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            CASE FILE: #2026-SHU
          </p>
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
                      ? "border-primary text-primary bg-primary/5 shadow-[0_0_10px_rgba(var(--primary),0.2)]"
                      : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                  )}
                >
                  <span className="truncate">{item.label}</span>
                  <span className={cn(
                    "w-5 h-5 flex items-center justify-center text-[9px] font-bold transition-colors flex-shrink-0 ml-2",
                    isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background"
                  )}>
                    {item.id}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-border space-y-4">
          <div className="space-y-1">
            <p className="font-mono text-[10px] text-muted-foreground uppercase">Confidential Report</p>
            <p className="font-mono text-[10px] text-muted-foreground uppercase">Do Not Distribute</p>
          </div>
          <div className="pt-4 border-t border-border/50">
            <p className="font-mono text-[10px] text-muted-foreground leading-relaxed italic opacity-70">
              "We are amateur sleuths who do our homework, but we have not seen any of the documents. We live in the age of AI, where everything is available to the sharpened brain."
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 w-full z-50 bg-background border-b border-border p-4 flex justify-between items-center">
        <div>
          <h1 className="font-heading text-lg text-foreground">THE BENJAMIN RULING</h1>
          <p className="font-mono text-[10px] text-muted-foreground uppercase">CASE FILE: #2026-SHU</p>
        </div>
        {/* Mobile menu trigger would go here */}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full overflow-hidden min-h-screen relative z-10 bg-background/50 backdrop-blur-[2px]">
        <div className="container py-12 lg:py-16 max-w-5xl mx-auto mt-16 lg:mt-0 relative z-20">
          {children}
          <div className="mt-20">
             {/* JourneyNav normally goes here if available */}
          </div>
        </div>
      </main>
      <ScreamToggle />
    </div>
  );
}
