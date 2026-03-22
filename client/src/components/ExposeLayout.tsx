import {
    BookOpen,
    ChevronRight,
    Church,
    Eye,
    FileText,
    Gavel,
    Link2,
    Menu,
    Network,
    Scale,
    Shield, Skull,
    Users,
    X
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import "../pages/expose/expose.css";

const navItems = [
    { path: "/expose", label: "I. The Overview", subtitle: "The Architecture of Silence", icon: BookOpen, section: "I" },
    { path: "/expose/mccarrick-network", label: "II. McCarrick Network", subtitle: "Church, State & the Mob", icon: Network, section: "II" },
    { path: "/expose/reilly-protection", label: "III. Reilly's Ascent", subtitle: "Secretary to President", icon: Church, section: "III" },
    { path: "/expose/nyre-dismissal", label: "IV. The Nyre Dismissal", subtitle: "Feb. 19, 2026 Ruling", icon: Gavel, section: "IV" },
    { path: "/expose/legal-triumvirate", label: "V. The Legal Triumvirate", subtitle: "Scrivo, Porrino & Ruemmler", icon: Scale, section: "V" },
    { path: "/expose/epstein-nexus", label: "VI. The Epstein Nexus", subtitle: "The Lead Investigator", icon: Link2, section: "VI" },
    { path: "/expose/kenneth-martin", label: "VII. Kenneth Martin", subtitle: "The Founding Template", icon: Skull, section: "VII" },
    { path: "/expose/checchio-new-orleans", label: "VIII. Checchio & NOLA", subtitle: "The Calculus of Relocation", icon: Users, section: "VIII" },
    { path: "/expose/rabner-exhibits", label: "IX. The Rabner Dossier", subtitle: "19 Forensic Exhibits", icon: FileText, section: "IX" },
    { path: "/expose/whistleblower-unmasking", label: "X. The Subpoena", subtitle: "The Fabricated Crime", icon: Eye, section: "X" },
    { path: "/expose/appeal-grounds", label: "XI. Grounds for Appeal", subtitle: "Seven Reversible Errors", icon: Shield, section: "XI" },
];

export default function ExposeLayout({ children }: { children: React.ReactNode }) {
    const [location] = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const mainEl = document.getElementById("main-content");
        if (mainEl) mainEl.scrollTop = 0;
    }, [location]);

    return (
        <div className="expose-theme flex min-h-screen" style={{ background: "#faf6ee" }}>
            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-white/60 lg:hidden" onClick={() => setMobileOpen(false)} />
            )}

            <aside
                className={`fixed top-0 left-0 h-full z-50 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
                style={{ width: "272px", minWidth: "272px", background: "var(--sidebar-bg)", borderRight: "1px solid #2e2416", boxShadow: "4px 0 20px rgba(0,0,0,0.5)" }}
            >
                <div className="flex-shrink-0 px-5 pt-5 pb-4" style={{ borderBottom: "1px solid #2e2416" }}>
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-xs tracking-widest uppercase mb-2 font-semibold" style={{ color: "var(--sidebar-dim)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.15em" }}>Forensic Dossier</div>
                            <h1 className="text-xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "var(--sidebar-gold)", lineHeight: 1.2 }}>The Architecture<br />of Silence</h1>
                            <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--sidebar-dim)", fontFamily: "'Lora', serif" }}>New Jersey Institutional<br />Legal Corruption</p>
                        </div>
                        <button className="lg:hidden p-1" onClick={() => setMobileOpen(false)} style={{ color: "var(--sidebar-dim)" }}><X size={18} /></button>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                        <div className="flex-1 h-px" style={{ background: "var(--sidebar-dim)", opacity: 0.35 }} />
                        <div className="text-xs" style={{ color: "var(--sidebar-dim)", opacity: 0.6 }}>✦</div>
                        <div className="flex-1 h-px" style={{ background: "var(--sidebar-dim)", opacity: 0.35 }} />
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-2">
                    {navItems.map((item) => {
                        const isActive = location === item.path || (item.path === '/expose' && location === '/expose/');
                        const Icon = item.icon;
                        return (
                            <Link key={item.path} href={item.path} onClick={() => setMobileOpen(false)}>
                                <div
                                    className="flex items-start gap-3 px-4 py-2.5 mx-1.5 my-0.5 transition-all duration-150 cursor-pointer"
                                    style={{
                                        borderLeft: isActive ? "3px solid var(--sidebar-gold)" : "3px solid transparent",
                                        background: isActive ? "var(--sidebar-active)" : "transparent",
                                        borderRadius: "2px",
                                    }}
                                    onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLDivElement).style.background = "var(--sidebar-hover)"; }}
                                    onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                                >
                                    <span className="flex-shrink-0 text-xs font-bold mt-0.5" style={{ fontFamily: "'Playfair Display', serif", color: isActive ? "var(--sidebar-gold)" : "var(--sidebar-dim)", minWidth: "1.6rem", fontSize: "0.7rem" }}>{item.section}</span>
                                    <Icon size={13} className="flex-shrink-0 mt-0.5" style={{ color: isActive ? "var(--sidebar-gold)" : "#5a4a2e", opacity: isActive ? 1 : 0.7 }} />
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-semibold leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: isActive ? "var(--sidebar-gold)" : "var(--sidebar-text)", fontSize: "0.85rem" }}>{item.label}</div>
                                        <div className="text-xs mt-0.5 truncate" style={{ fontFamily: "'Lora', serif", color: isActive ? "var(--sidebar-dim)" : "#4a3c28", fontSize: "0.68rem", fontStyle: "italic" }}>{item.subtitle}</div>
                                    </div>
                                    {isActive && <ChevronRight size={11} className="flex-shrink-0 mt-1" style={{ color: "var(--sidebar-gold)" }} />}
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex-shrink-0 px-5 py-4" style={{ borderTop: "1px solid #2e2416" }}>
                    <p className="text-xs leading-relaxed text-center italic" style={{ color: "#4a3c28", fontFamily: "'Lora', serif" }}>"The truth is not always beautiful,<br />nor beautiful words the truth."</p>
                    <p className="text-xs text-center mt-1" style={{ color: "#3a2e1a", fontFamily: "'Lora', serif" }}>— Umberto Eco</p>
                </div>
            </aside>

            <div className="flex-1 flex flex-col min-w-0">
                <header className="lg:hidden flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ background: "var(--sidebar-bg)", borderBottom: "1px solid #2e2416" }}>
                    <button onClick={() => setMobileOpen(true)} className="p-1.5" style={{ color: "var(--sidebar-gold)" }}><Menu size={20} /></button>
                    <h1 className="text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--sidebar-gold)" }}>The Architecture of Silence</h1>
                    <div style={{ width: 28 }} />
                </header>

                <main id="main-content" className="flex-1 overflow-y-auto" style={{ background: "#faf6ee" }}>
                    <div className="w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
