import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { SmartImage } from "./SmartImage";

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
        <div className={cn(`min-h-screen flex flex-col pt-14 md:pt-20`, themeClass)} style={{ background: "var(--background)", color: "var(--foreground)" }}>
            <header className="w-full border-b border-border bg-background/95 backdrop-blur-md pt-6 md:pt-10 pb-4 md:pb-6 px-3 sm:px-4 md:px-8 z-40 sticky top-14 md:top-20 shadow-sm">

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <Link href="/">
                                    <SmartImage
                                        src="/assets/sodom-hall-logo.png"
                                        alt="Sodom Hall"
                                        className="h-8 w-auto grayscale brightness-200 hover:brightness-100 hover:grayscale-0 transition-all cursor-pointer"
                                    />
                                </Link>
                                <div className="h-4 w-px bg-border mx-2" />
                                <p className="font-mono text-xs text-zinc-600 uppercase tracking-[0.2em] font-bold">
                                    ACT FILE: {caseFile}
                                </p>
                            </div>
                            <h1 className="font-heading text-2xl sm:text-4xl md:text-6xl text-foreground uppercase tracking-tight leading-[0.9] mb-2 md:mb-3">
                                {title}
                            </h1>
                            <p className="font-serif italic text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                                {subtitle}
                            </p>

                        </div>

                        <div className="flex items-center gap-2">
                            <Link href="/">
                                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground font-bold hover:text-zinc-600 cursor-pointer transition-all border-2 border-foreground/10 px-3 sm:px-6 py-1.5 sm:py-2 rounded-sm hover:border-zinc-500 hover:bg-zinc-200/50 active:scale-95 shadow-sm">
                                    Return to Archway
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>

                {/* Top Tabs: Flex-wrap for better scannability on all devices */}
                <div className="max-w-6xl mx-auto mt-6">
                    <div className="flex flex-wrap border-b border-border w-full pb-[1px] gap-y-2">
                        {navItems.map((item) => {
                            const isActive = location === item.path || (location.startsWith(item.path + '/') && item.path !== '/');
                            return (
                                <Link key={item.id} href={item.path}>
                                    <div className={cn(
                                        "flex-shrink-0 py-2.5 sm:py-4 px-4 sm:px-6 md:px-8 text-center font-mono text-[10px] sm:text-[11px] md:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] cursor-pointer transition-all border-r border-border hover:bg-foreground/5 last:border-r-0",
                                        isActive
                                            ? "border-b-4 border-b-zinc-400 text-zinc-800 font-black bg-foreground/5 scale-105 z-10"
                                            : "border-b-4 border-b-transparent text-foreground/70 hover:text-foreground hover:bg-foreground/[0.02]"
                                    )}>
                                        <span className={cn("mr-3 text-[10px] font-bold", isActive ? "text-zinc-600" : "opacity-40")}>{item.id}</span>
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
