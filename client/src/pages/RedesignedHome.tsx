import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Database, AlertCircle, Eye, Fingerprint, Lock, ChevronRight, ChevronDown
} from "lucide-react";
import ShieldHub from "@/components/ShieldHub";


export default function RedesignedHome() {
    const [, setLocation] = useLocation();
    const [isGlitching, setIsGlitching] = useState(false);
    const [konamiProgress, setKonamiProgress] = useState<string[]>([]);

    // KONAMI CODE
    const KONAMI_CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const nextKey = e.key;
            const updated = [...konamiProgress, nextKey];

            if (KONAMI_CODE[updated.length - 1] === nextKey) {
                if (updated.length === KONAMI_CODE.length) {
                    setIsGlitching(true);
                    setTimeout(() => {
                        setLocation("/easter");
                    }, 1200);
                    setKonamiProgress([]);
                } else {
                    setKonamiProgress(updated);
                }
            } else {
                setKonamiProgress([]);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [konamiProgress, setLocation]);

    const scrollToNext = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`min-h-screen w-full bg-[#09090b] text-[#c8bdb0] font-cormorant relative ${isGlitching ? 'animate-pulse grayscale contrast-200' : ''}`}>

            <AnimatePresence>
                {isGlitching && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-red-950/20 backdrop-blur-md flex flex-col items-center justify-center pointer-events-none"
                    >
                        <h2 className="text-white font-cinzel text-4xl tracking-[2em] uppercase animate-bounce">SIGNAL INTERRUPTED</h2>
                        <div className="w-full h-1 bg-red-600 animate-ping mt-8" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* SECTION 1: THE TITLE & HERO */}
            <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-[#09090b] to-[#09090b] pointer-events-none z-0 opacity-60" />
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/10 blur-[120px] pointer-events-none rounded-full" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center space-y-2 relative w-full max-w-6xl z-10"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black font-cinzel leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
                        THE HOUSE THAT <br />
                        <span className="text-[#8b1a1a] drop-shadow-[0_0_40px_rgba(139,26,26,0.5)] bg-clip-text text-transparent bg-gradient-to-b from-[#b32424] to-[#5a1111]">McCARRICK</span> BUILT
                    </h1>
                    <p className="text-2xl md:text-3xl font-serif text-white tracking-wide max-w-2xl mx-auto pt-6 mt-6 border-t border-white/10 uppercase italic">
                        The Architecture of Immunity
                    </p>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    onClick={() => scrollToNext("start-here")}
                    className="absolute bottom-12 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer group z-20"
                >
                    <span className="font-mono text-xs tracking-widest uppercase mb-2">Initialize Narrative</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </motion.button>
            </section>

            {/* SECTION 2: THE SIX SECTIONS */}
            <section id="start-here" className="relative w-full py-24 px-4 bg-[#0a0a0c] border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-cinzel text-5xl md:text-6xl text-white uppercase tracking-wider">Start Here</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "The Prologue", desc: "A survivor's account. The origin of the investigation.", href: "/prologue", icon: Database, color: "text-red-500" },
                            { title: "The Evidence", desc: "Six acts. Primary sources. The suppressed Latham Report.", href: "/evidence", icon: Database, color: "text-red-500" },
                            { title: "The Breach", desc: "Active litigation. Judicial rulings. The unraveling cover-up.", href: "/breach", icon: AlertCircle, color: "text-red-600" },
                            { title: "The Ledger", desc: "Every board member, lawyer, and institutional actor — named.", href: "/ledger", icon: Eye, color: "text-amber-500" },
                            { title: "The Method", desc: "AI-driven discovery and forensic analysis.", href: "/method", icon: Fingerprint, color: "text-blue-500" },
                            { title: "Madman Archive", desc: "McCarrick's secretarial infrastructure.", href: "/madman", icon: Lock, color: "text-zinc-200" },
                        ].map((item, i) => (
                            <Link key={item.href} href={item.href}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    className="group border border-white/5 bg-black/40 p-8 hover:border-red-900/50 hover:bg-white/[0.02] transition-all cursor-pointer rounded-sm"
                                >
                                    <div className={`p-3 bg-black/60 border border-white/5 rounded-full ${item.color} inline-flex mb-5`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-cinzel text-2xl text-white font-bold tracking-wide mb-2 group-hover:text-red-400 transition-colors">{item.title}</h3>
                                    <p className="text-base text-zinc-400 font-serif">{item.desc}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE SHIELD HUB */}
            <section id="network" className="relative w-full flex flex-col items-center bg-[#050508] border-t border-white/5 pt-24 pb-20">
                <div className="absolute inset-0 bg-gradient-radial from-red-950/10 to-transparent pointer-events-none" />

                <div className="text-center w-full z-20 mb-8">
                    <h2 className="font-mono text-xl text-zinc-500 tracking-[0.5em] uppercase drop-shadow-md">The Complicit Architecture</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full flex justify-center items-center"
                    style={{ minHeight: "700px" }}
                >
                    <ShieldHub onRingClick={() => { }} />
                </motion.div>

                {/* FOOTER BADGE */}
                <div className="relative z-20 mt-16 flex items-center gap-6 text-sm font-black font-courier text-zinc-500 uppercase tracking-[0.3em] opacity-80 hover:opacity-100 transition-opacity">
                    <span className="flex items-center gap-3"><Database className="w-5 h-5 text-red-800" /> Authorized Record // SH-2026</span>
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full hidden sm:block" />
                    <span className="hidden sm:inline">Sodom Hall Forensic Archive</span>
                </div>
            </section>
        </div>
    );
}
