import { BoschOwl, HollowEye, TwistedBranch } from "@/components/BoschSymbols";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

interface LayoutProps {
    children: React.ReactNode;
}

export default function TheyKnewLayout({ children }: LayoutProps) {
    const [location] = useLocation();

    const navItems = [
        { href: "/they-knew", label: "01. OVERVIEW", id: "01" },
        { href: "/they-knew/board-of-trustees", label: "02. BOARD OF TRUSTEES", id: "02" },
        { href: "/they-knew/board-of-regents", label: "03. BOARD OF REGENTS", id: "03" },
        { href: "/they-knew/board-of-visitors", label: "04. BOARD OF VISITORS", id: "04" },
        { href: "/they-knew/the-lawyers", label: "05. THE LAWYERS", id: "05" },
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
                <div className="p-4 border-b border-border flex flex-col items-center">
                    <Link href="/cathedral">
                        <a className="mb-4 block hover:opacity-80 transition-opacity flex justify-center w-full">
                            <img
                                src="/assets/sodom-hall-logo.png"
                                alt="Sodom Hall Home"
                                className="h-20 w-auto grayscale brightness-200 mx-auto"
                            />
                        </a>
                    </Link>
                    <h1 className="font-heading text-2xl text-foreground leading-none mb-2 text-center w-full">
                        THEY KNEW
                    </h1>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-widest text-center uppercase border-t border-border/50 pt-2 w-full">
                        The Complicity Network
                    </p>
                </div>

                <nav className="flex-1 overflow-y-auto py-6">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = location === item.href;
                            return (
                                <li key={item.href}>
                                    <Link href={item.href}>
                                        <a
                                            className={cn(
                                                "block px-6 py-2 text-sm font-mono tracking-wider transition-all duration-300 border-l-2",
                                                isActive
                                                    ? "border-primary text-primary bg-primary/5"
                                                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                            )}
                                        >
                                            {item.label}
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="p-4 border-t border-border mt-auto">
                    <div className="flex items-center space-x-2 text-xs font-mono text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span>SYSTEM ACTIVE</span>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-64 relative z-10 flex flex-col min-h-screen">
                <div className="absolute top-0 right-0 p-8 flex items-center gap-4 text-sm font-mono text-muted-foreground opacity-50 z-20 pointer-events-none hidden md:flex">
                    <span className="tracking-widest uppercase">Exhibit A</span>
                    <span className="w-12 h-px bg-border"></span>
                    <span>Dossier File</span>
                </div>

                {children}
            </main>
        </div>
    );
}
