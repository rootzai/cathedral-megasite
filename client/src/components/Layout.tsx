import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { ScreamToggle } from "@/components/ScreamToggle";
import { TwistedBranch, HollowEye, BoschOwl } from "@/components/BoschSymbols";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "01. THE RULING", id: "01" },
    { href: "/dirty-dozen", label: "02. THE DIRTY DOZEN", id: "02" },
    { href: "/reilly", label: "03. THE FACE OF IMPUNITY", id: "03" },
    { href: "/beach-house", label: "04. THE BEACH HOUSE", id: "04" },
    { href: "/timeline", label: "05. TIMELINE OF ERASURE", id: "05" },
    { href: "/evidence", label: "06. EVIDENCE REPOSITORY", id: "06" },
    { href: "/tobin-hypocrisy", label: "07. TOBIN'S HYPOCRISY", id: "07" },
    { href: "/analysis", label: "08. ANALYSIS", id: "08" },
    { href: "/sheeran-mccarrick", label: "09. THE NEXUS", id: "09" },
    { href: "/sanction-plea", label: "10. SANCTION PLEA", id: "10" },
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
      <aside className="w-64 fixed h-full border-r border-border bg-sidebar hidden lg:flex flex-col z-50">
        <div className="p-6 border-b border-border">
          <h1 className="font-heading text-2xl text-foreground leading-none mb-2">
            THE BENJAMIN RULING
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            CASE FILE: #2025-SHU
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
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
                  <span>{item.label}</span>
                  <span className={cn(
                    "w-6 h-6 flex items-center justify-center text-[10px] font-bold transition-colors",
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
          <p className="font-mono text-[10px] text-muted-foreground uppercase">CASE FILE: #2025-SHU</p>
        </div>
        {/* Mobile menu trigger would go here */}
      </header>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 min-h-screen relative">
        <div className="container py-12 lg:py-16 max-w-5xl mx-auto mt-16 lg:mt-0">
          {children}
        </div>
      </main>
      <ScreamToggle />
    </div>
  );
}
