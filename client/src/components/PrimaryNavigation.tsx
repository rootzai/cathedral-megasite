import React from "react";
import { Link, useLocation } from "wouter";

export default function PrimaryNavigation() {
    const [location] = useLocation();

    const navItemClass = (path: string) => {
        const isActive = location === path || (path !== "/" && location.startsWith(path));
        return `
      px-4 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all
      ${isActive ? "text-white border-b-2 border-[#8b1a1a]" : "text-[#555] hover:text-[#c8bdb0]"}
    `;
    };

    return (
        <nav className="bg-[#0a0a0c] border-b border-[#1a1a22] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <img src="/assets/images/sh-pirate-logo.png" alt="Sodom Hall Home" className="h-10 w-auto group-hover:scale-105 transition-transform" />
                    <span className="text-[#c8bdb0] font-bold text-sm uppercase tracking-[0.3em] group-hover:text-white transition-colors pt-1">
                        SODOM HALL
                    </span>
                </Link>

                <div className="hidden md:flex items-center">
                     <Link href="/" className={navItemClass("/")}>THE SHIELD</Link>
                    <Link href="/evidence" className={navItemClass("/evidence")}>THE EVIDENCE</Link>
                    <Link href="/breach" className={navItemClass("/breach")}>
                        THE BREACH
                        <span className="ml-2 w-2 h-2 rounded-full bg-[#8b1a1a] inline-block animate-pulse" />
                    </Link>
                    <Link href="/opinion" className={navItemClass("/opinion")}>OPINIONS</Link>
                    <Link href="/ledger" className={navItemClass("/ledger")}>THE LEDGER</Link>

                </div>

                <Link href="/about#tips" className="hidden lg:block bg-[#8b1a1a] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#a51d1d] transition-colors">
                    SUBMIT A TIP
                </Link>
            </div>
        </nav>
    );
}
