import React, { useEffect, useState } from "react";
import "../pages/epstein/epstein.css";
import { SmartImage } from "@/components/SmartImage";


export default function EpsteinLayout({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState('front-page');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id], div[id="front-page"]');
            let current = 'front-page';
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop - 160;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id') || 'front-page';
                }
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: "front-page", label: "Front Page", num: "—" },
        { id: "timeline", label: "Timeline", num: "01" },
        { id: "money-trail", label: "The Money Trail", num: "02" },
        { id: "ruemmler", label: "Ruemmler", num: "03" },
        { id: "key-figures", label: "Key Figures", num: "04" },
        { id: "law-school", label: "The Law School", num: "05" },
        { id: "ropes-gray", label: "Ropes & Gray", num: "06" },
        { id: "payment-channels", label: "Other Channels?", num: "07" },
        { id: "open-questions", label: "Open Questions", num: "08" },
        { id: "sources", label: "Sources", num: "09" },
    ];

    return (
        <div className="epstein-theme flex min-h-screen" style={{ background: "var(--paper, #f4f0e8)" }}>
            <aside
                className="w-64 sticky top-0 h-screen border-r flex flex-col z-40 overflow-y-auto hidden lg:flex"
                style={{ background: "#ebe5d8", borderColor: "#cdc8bd" }}
            >
                <div className="p-4 border-b flex flex-col items-center" style={{ borderColor: "#cdc8bd" }}>
                    <a href="/" className="mb-4 block hover:opacity-80 transition-opacity">
                        <SmartImage src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/ohgmPACCpypWjdfQ.png" alt="SodomHall.com" className="w-16 h-auto object-contain" />
                    </a>
                    <h1 className="font-heading text-xl leading-none mb-2 text-center w-full" style={{ color: "#222" }}>
                        SPECIAL INVESTIGATION
                    </h1>
                    <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#666" }}>
                        Vol. III — Feb. 2026
                    </p>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, `#${item.id}`)} className="block">
                                <div
                                    className="font-mono text-xs uppercase tracking-wider p-3 transition-all duration-300 cursor-pointer flex justify-between items-center group"
                                    style={{
                                        border: isActive ? "1px solid #8b1a1a" : "1px solid #cdc8bd",
                                        background: isActive ? "rgba(139, 26, 26, 0.05)" : "transparent",
                                        color: isActive ? "#8b1a1a" : "#444"
                                    }}
                                    onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = "#999"; e.currentTarget.style.color = "#111"; } }}
                                    onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = "#cdc8bd"; e.currentTarget.style.color = "#444"; } }}
                                >
                                    <span className="truncate">{item.label}</span>
                                    <span 
                                         className="w-5 h-5 flex items-center justify-center text-[9px] font-bold transition-colors flex-shrink-0 ml-2"
                                         style={{
                                             background: isActive ? "#8b1a1a" : "rgba(205, 200, 189, 0.5)",
                                             color: isActive ? "#fff" : "#666"
                                         }}
                                    >
                                        {item.num}
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </nav>
            </aside>

            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 w-full z-50 p-4 border-b flex justify-between items-center" style={{ background: "#ebe5d8", borderColor: "#cdc8bd" }}>
                <div>
                    <h1 className="font-heading text-lg" style={{ color: "#222" }}>SPECIAL INVESTIGATION</h1>
                    <p className="font-mono text-[10px] uppercase" style={{ color: "#666" }}>Vol. III — Feb. 2026</p>
                </div>
            </header>

            <main className="flex-1 w-full overflow-hidden min-h-screen relative" style={{ background: "transparent" }}>
                <div className="container py-12 lg:py-16 max-w-5xl mx-auto mt-16 lg:mt-0">
                    {children}
                </div>
            </main>
        </div>
    );
}
