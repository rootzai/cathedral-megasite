import React, { useEffect, useState } from "react";
import { SmartImage } from "@/components/SmartImage";

export default function EpsteinLayout({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState('front-page');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-20% 0px -80% 0px' });

        const sections = document.querySelectorAll('section[id], div[id="front-page"]');
        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
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
        <div className="flex min-h-screen bg-zinc-900 text-foreground">
            <aside className="w-64 sticky top-0 h-screen border-r border-border bg-zinc-950 flex flex-col z-40 overflow-y-auto hidden lg:flex">
                <div className="p-4 border-b border-border flex flex-col items-center">
                    <a href="/" className="mb-4 block hover:opacity-80 transition-opacity">
                        <SmartImage src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/ohgmPACCpypWjdfQ.png" alt="SodomHall.com" className="w-16 h-auto object-contain grayscale invert opacity-80" />
                    </a>
                    <h1 className="font-heading text-xl leading-none mb-2 text-center w-full text-foreground">
                        SPECIAL INVESTIGATION
                    </h1>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Vol. III — Feb. 2026
                    </p>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, `#${item.id}`)} className="block group">
                                <div className={`font-mono text-xs uppercase tracking-wider p-3 transition-all duration-300 cursor-pointer flex justify-between items-center border ${isActive ? 'border-destructive bg-destructive/10 text-destructive' : 'border-border text-muted-foreground group-hover:border-zinc-500 group-hover:text-zinc-300'}`}>
                                    <span className="truncate">{item.label}</span>
                                    <span className={`w-5 h-5 flex items-center justify-center text-xs font-bold transition-colors flex-shrink-0 ml-2 ${isActive ? 'bg-destructive text-zinc-50' : 'bg-zinc-800 text-zinc-500'}`}>
                                        {item.num}
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </nav>
            </aside>

            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 w-full z-50 p-4 border-b border-border bg-zinc-950 flex justify-between items-center">
                <div>
                    <h1 className="font-heading text-lg text-foreground">SPECIAL INVESTIGATION</h1>
                    <p className="font-mono text-xs uppercase text-muted-foreground">Vol. III — Feb. 2026</p>
                </div>
            </header>

            <main className="flex-1 w-full overflow-hidden min-h-screen relative">
                <div className="container py-12 lg:py-16 max-w-5xl mx-auto mt-16 lg:mt-0">
                    {children}
                </div>
            </main>
        </div>
    );
}
