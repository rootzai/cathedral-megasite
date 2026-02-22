import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

interface AcademyLayoutProps {
  children: React.ReactNode;
}

export default function AcademyLayout({ children }: AcademyLayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/academy", label: "EXECUTIVE SUMMARY", id: "00" },
    { href: "/academy/global-growth", label: "GLOBAL EXPANSION", id: "01" },
    { href: "/academy/clergy-metrics", label: "CLERGY & VOCATIONS", id: "02" },
    { href: "/academy/sacramental-data", label: "SACRAMENTAL INDEX", id: "03" },
    { href: "/academy/global-metrics", label: "GLOBAL METRICS", id: "04" },
    { href: "/academy/institutional-structure", label: "INSTITUTIONAL STRUCTURE", id: "05" },
    { href: "/academy/diocesan-finance", label: "DIOCESAN FINANCE", id: "06" },
    { href: "/academy/financial-model", label: "FINANCIAL MODEL", id: "07" },
    { href: "/academy/stakeholder-analysis", label: "STAKEHOLDER ANALYSIS", id: "08" },
    { href: "/academy/the-cardinalate", label: "THE CARDINALATE", id: "09" },
    { href: "/academy/cardinalate-mccarrick", label: "CARDINALATE & MCCARRICK", id: "10" },
    { href: "/academy/corporate-veil", label: "THE CORPORATE VEIL", id: "11" },
    { href: "/academy/mccarrick-mechanism", label: "THE MCCARRICK MECHANISM", id: "12" },
  ];

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
            THE ACADEMY
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            CATHEDRAL CAPITAL REPORT
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

        <div className="p-4 border-t border-border">
          <p className="font-mono text-[10px] text-muted-foreground uppercase">
            Research & Analysis Division
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 w-full z-50 bg-background border-b border-border p-4 flex justify-between items-center">
        <div>
          <h1 className="font-heading text-lg text-foreground">THE ACADEMY</h1>
          <p className="font-mono text-[10px] text-muted-foreground uppercase">CATHEDRAL CAPITAL REPORT</p>
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
