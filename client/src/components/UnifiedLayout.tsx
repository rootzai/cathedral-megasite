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
            <header className="w-full border-b border-border bg-background pt-6 md:pt-10 pb-4 md:pb-6 px-3 sm:px-4 md:px-8 z-40 relative shadow-sm">

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
                                <p className="font-mono text-xs text-zinc-900 uppercase tracking-[0.2em] font-bold">
                                    ACT FILE: {caseFile}
                                </p>
                            </div>
                            <h1 className="font-heading text-2xl sm:text-4xl md:text-6xl text-foreground uppercase tracking-tight leading-[0.9] mb-2 md:mb-3">
                                {title}
                            </h1>
                            <p className="font-serif italic text-zinc-700 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                                {subtitle}
                            </p>

                        </div>

                        <div className="flex items-center gap-2">
                            <Link href="/">
                                <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground font-bold hover:text-zinc-600 cursor-pointer transition-all border-2 border-foreground/10 px-3 sm:px-6 py-1.5 sm:py-2 rounded-sm hover:border-zinc-500 hover:bg-zinc-200/50 active:scale-95 shadow-sm">
                                    Return to Archway
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>

            </header>

            {/* Content Layout: 2 Columns on Desktop */}
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row px-3 sm:px-4 md:px-8 py-6 md:py-10 gap-8 md:gap-12">

                {/* Mobile & Tablet Tabs */}
                <div className="block lg:hidden w-full border-b border-border pb-2">
                    <div className="flex flex-wrap gap-2">
                        {navItems.map((item) => {
                            const isActive = location === item.path || (location.startsWith(item.path + '/') && item.path !== '/');
                            return (
                                <Link key={item.id} href={item.path}>
                                    <div className={cn(
                                        "flex-shrink-0 py-2 sm:py-3 px-3 sm:px-5 text-center font-mono text-[10px] sm:text-xs uppercase tracking-[0.1em] cursor-pointer transition-all border border-border rounded-sm",
                                        isActive
                                            ? "bg-foreground/10 border-foreground/40 text-foreground font-black shadow-sm"
                                            : "bg-transparent text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
                                    )}>
                                        <span className={cn("mr-2", isActive ? "text-foreground" : "opacity-50")}>{item.id}</span>
                                        {item.label}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Desktop Left-Hand Navigation */}
                <aside className="hidden lg:block w-64 shrink-0">
                    <div className="space-y-1 bg-background/50 border border-border/50 p-2 rounded-lg">
                        <p className="font-mono text-xs text-zinc-900 uppercase tracking-[0.2em] px-4 py-3 font-bold border-b border-border mb-2">
                            Section Index
                        </p>
                        {navItems.map((item) => {
                            const isActive = location === item.path || (location.startsWith(item.path + '/') && item.path !== '/');
                            return (
                                <Link key={item.id} href={item.path}>
                                    <div className={cn(
                                        "block py-3 px-4 rounded-md transition-all cursor-pointer group",
                                        isActive
                                            ? "bg-foreground/15 text-foreground shadow-sm ring-1 ring-foreground/20"
                                            : "text-zinc-600 hover:bg-foreground/10 hover:text-zinc-900"
                                    )}>
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-sm font-medium">{item.label}</span>
                                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                                        </div>
                                        <span className={cn(
                                            "font-mono text-xs tracking-widest mt-1 block",
                                            isActive ? "text-foreground/90 font-bold" : "text-zinc-700 group-hover:text-zinc-900"
                                        )}>
                                            {item.id}
                                        </span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 animate-in fade-in duration-700">
                    {children}
                </main>
            </div>
        </div>
    );
}
