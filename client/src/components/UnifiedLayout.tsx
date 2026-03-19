import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";



interface NavItem {
    path: string;
    label: string;
    id: string;
}

interface UnifiedLayoutProps {
    title: string;
    subtitle: string;
    caseFile: string;
    themeClass: string;
    navItems: NavItem[];
    children: React.ReactNode;
}

export default function UnifiedLayout({
    title,
    subtitle,
    caseFile,
    themeClass,
    navItems,
    children
}: UnifiedLayoutProps) {
    const [location] = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className={cn(`min-h-screen flex flex-col pt-20`, themeClass)} style={{ background: "var(--background)", color: "var(--foreground)" }}>
            {/* Header Section */}
            <header className="w-full border-b border-border bg-card/50 backdrop-blur-md pt-8 pb-4 px-4 md:px-8 z-40 sticky top-20">

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <p className="font-mono text-xs text-destructive uppercase tracking-[0.2em] mb-2 font-bold">
                                ACT FILE: {caseFile}
                            </p>
                            <h1 className="font-heading text-4xl md:text-5xl text-foreground uppercase tracking-tight leading-none mb-1">
                                {title}
                            </h1>
                            <p className="font-serif italic text-muted-foreground text-sm md:text-base">
                                {subtitle}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Link href="/">
                                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground cursor-pointer transition-colors border border-border px-3 py-1.5 rounded-full hover:bg-muted">
                                    Return to Archway
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Top-Scrolling Tabs per User Request */}
                <div className="max-w-6xl mx-auto mt-6">
                    <div className="flex border-b border-border w-full overflow-x-auto scrollbar-thin scrollbar-thumb-muted pb-[1px]">
                        {navItems.map((item) => {
                            // Exact match or active subroute
                            const isActive = location === item.path || (location.startsWith(item.path + '/') && item.path !== '/');
                            return (
                                <Link key={item.id} href={item.path}>
                                    <div className={cn(
                                        "flex-shrink-0 py-3 px-6 text-center font-mono text-xs uppercase tracking-widest cursor-pointer transition-all border-r border-border hover:bg-foreground/5 last:border-r-0 whitespace-nowrap",
                                        isActive
                                            ? "border-b-2 border-b-destructive text-destructive font-bold bg-foreground/10"
                                            : "border-b-2 border-b-transparent text-foreground/60 hover:text-foreground"
                                    )}>
                                        <span className="opacity-50 mr-2 text-[9px]">{item.id}</span>
                                        {item.label}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 animate-in fade-in duration-700">
                {children}
            </main>
        </div>
    );
}
