import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Database, AlertCircle, Eye, Fingerprint, Lock, ChevronDown
} from "lucide-react";
import ShieldHub from "@/components/ShieldHub";
import AmbientParticles from "@/components/AmbientParticles";


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

            <AmbientParticles count={25} />

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

            {/* SECTION 2: THE SIX PATHS */}
            <section id="start-here" className="relative w-full py-24 px-4 bg-[#0a0a0c] border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-cinzel text-5xl md:text-6xl text-white uppercase tracking-wider">Start Here</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Prologue", href: "/prologue", glow: "rgba(239,68,68,0.5)",
                                emblem: (
                                    /* LURE 1: Fishing lure — shimmering hook */
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <defs>
                                            <linearGradient id="lure-shimmer" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ef4444" /><stop offset="50%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#ef4444" /></linearGradient>
                                        </defs>
                                        <line x1="50" y1="8" x2="50" y2="30" stroke="#71717a" strokeWidth="1.5" />
                                        <path d="M50 30 Q50 50, 38 58 Q28 64, 32 72 Q36 80, 50 72 Q58 66, 50 55" fill="none" stroke="#a1a1aa" strokeWidth="2.5" strokeLinecap="round" />
                                        <circle cx="32" cy="72" r="2" fill="#a1a1aa" />
                                        <ellipse cx="50" cy="38" rx="10" ry="6" fill="url(#lure-shimmer)" opacity="0.9" />
                                        <ellipse cx="50" cy="38" rx="6" ry="3.5" fill="#fbbf24" opacity="0.6" />
                                        <line x1="42" y1="42" x2="36" y2="52" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                                        <line x1="50" y1="44" x2="50" y2="55" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />
                                        <line x1="58" y1="42" x2="64" y2="52" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                                        <circle cx="50" cy="12" r="3" fill="none" stroke="#71717a" strokeWidth="1" />
                                    </svg>
                                ),
                            },
                            {
                                title: "The Evidence", href: "/evidence", glow: "rgba(251,191,36,0.4)",
                                emblem: (
                                    /* LURE 2: Apple pie — steam rising from golden crust */
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <ellipse cx="50" cy="70" rx="35" ry="12" fill="#92400e" opacity="0.3" />
                                        <path d="M18 62 Q18 55, 50 52 Q82 55, 82 62 L82 68 Q82 75, 50 78 Q18 75, 18 68 Z" fill="#b45309" />
                                        <path d="M18 62 Q18 55, 50 52 Q82 55, 82 62 Q82 55, 50 58 Q18 55, 18 62" fill="#d97706" opacity="0.5" />
                                        <path d="M22 60 Q50 54, 78 60" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6" />
                                        <path d="M30 58 L42 62 L54 58 L66 62 L74 59" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M38 30 Q36 22, 40 18 Q44 22, 38 30" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.4"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" /><animateTransform attributeName="transform" type="translate" values="0,0;-2,-4;0,0" dur="3s" repeatCount="indefinite" /></path>
                                        <path d="M50 28 Q48 18, 52 14 Q56 18, 50 28" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.35"><animate attributeName="opacity" values="0.15;0.45;0.15" dur="3.5s" repeatCount="indefinite" /><animateTransform attributeName="transform" type="translate" values="0,0;2,-5;0,0" dur="3.5s" repeatCount="indefinite" /></path>
                                        <path d="M62 32 Q60 24, 64 20 Q68 24, 62 32" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.3"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite" /><animateTransform attributeName="transform" type="translate" values="0,0;1,-3;0,0" dur="4s" repeatCount="indefinite" /></path>
                                    </svg>
                                ),
                            },
                            {
                                title: "The Breach", href: "/breach", glow: "rgba(139,26,26,0.5)",
                                emblem: (
                                    /* LURE 3: The wink — an eye mid-wink */
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <ellipse cx="50" cy="50" rx="38" ry="22" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
                                        <path d="M12 50 Q30 30, 50 30 Q70 30, 88 50" fill="none" stroke="#fff" strokeWidth="2" opacity="0.8" />
                                        <path d="M12 50 Q30 62, 50 58 Q70 55, 88 50" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
                                        <circle cx="50" cy="46" r="14" fill="#1a1a2e" stroke="#fff" strokeWidth="1.5" />
                                        <circle cx="50" cy="46" r="8" fill="#8b1a1a" />
                                        <circle cx="50" cy="46" r="4" fill="#0a0a0c" />
                                        <circle cx="46" cy="42" r="2" fill="#fff" opacity="0.8" />
                                        <path d="M20 48 Q35 38, 50 42" fill="none" stroke="#fff" strokeWidth="1" opacity="0.2" />
                                        {/* Wink line — the bottom lid lifts */}
                                        <path d="M25 52 Q38 44, 50 46 Q62 48, 75 52" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.6">
                                            <animate attributeName="d" values="M25 52 Q38 56, 50 58 Q62 56, 75 52;M25 52 Q38 44, 50 42 Q62 44, 75 52;M25 52 Q38 56, 50 58 Q62 56, 75 52" dur="4s" repeatCount="indefinite" />
                                        </path>
                                    </svg>
                                ),
                            },
                            {
                                title: "The Ledger", href: "/ledger", glow: "rgba(184,150,36,0.5)",
                                emblem: (
                                    /* LURE 4: Beckoning finger — "come here" */
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <path d="M55 80 L55 55 Q55 48, 50 45 Q45 42, 45 48 L45 60" fill="none" stroke="#d4d4d8" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M45 55 L45 42 Q45 35, 50 32 Q55 35, 55 42" fill="none" stroke="#d4d4d8" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M55 50 L55 38 Q55 31, 60 28 Q65 31, 65 38 L65 55" fill="none" stroke="#d4d4d8" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M65 52 L65 42 Q65 35, 70 33 Q75 36, 75 43 L75 58" fill="none" stroke="#d4d4d8" strokeWidth="3" strokeLinecap="round" />
                                        {/* The beckoning index finger curls */}
                                        <path d="M50 32 Q48 22, 52 18 Q56 22, 52 28" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
                                            <animate attributeName="d" values="M50 32 Q48 22, 52 18 Q56 22, 52 28;M50 32 Q52 25, 50 20 Q48 25, 50 30;M50 32 Q48 22, 52 18 Q56 22, 52 28" dur="2s" repeatCount="indefinite" />
                                        </path>
                                        <ellipse cx="58" cy="82" rx="18" ry="6" fill="#d4d4d8" opacity="0.15" />
                                    </svg>
                                ),
                            },
                            {
                                title: "The Method", href: "/method", glow: "rgba(96,165,250,0.4)",
                                emblem: (
                                    /* LURE 5: Keyhole with light spilling through */
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <defs>
                                            <radialGradient id="keylight"><stop offset="0%" stopColor="#fef3c7" /><stop offset="40%" stopColor="#fbbf24" stopOpacity="0.4" /><stop offset="100%" stopColor="transparent" /></radialGradient>
                                        </defs>
                                        <rect x="15" y="10" width="70" height="80" rx="3" fill="#18181b" stroke="#52525b" strokeWidth="2" />
                                        {/* Light spilling through keyhole */}
                                        <ellipse cx="50" cy="50" rx="20" ry="28" fill="url(#keylight)" opacity="0.3">
                                            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                                        </ellipse>
                                        {/* Keyhole shape */}
                                        <circle cx="50" cy="40" r="10" fill="#fef3c7" opacity="0.9" />
                                        <path d="M44 46 L42 70 L58 70 L56 46" fill="#fef3c7" opacity="0.9" />
                                        {/* Light rays */}
                                        <line x1="50" y1="20" x2="50" y2="10" stroke="#fef3c7" strokeWidth="1" opacity="0.3" />
                                        <line x1="35" y1="35" x2="22" y2="25" stroke="#fef3c7" strokeWidth="1" opacity="0.2" />
                                        <line x1="65" y1="35" x2="78" y2="25" stroke="#fef3c7" strokeWidth="1" opacity="0.2" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Madman Archive", href: "/madman", glow: "rgba(161,161,170,0.3)",
                                emblem: (
                                    /* LURE 6: Trail of breadcrumbs leading into darkness */
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <circle cx="22" cy="78" r="4" fill="#fbbf24" opacity="0.9" />
                                        <circle cx="32" cy="68" r="3.5" fill="#fbbf24" opacity="0.75" />
                                        <circle cx="40" cy="58" r="3" fill="#fbbf24" opacity="0.6" />
                                        <circle cx="50" cy="50" r="2.5" fill="#fbbf24" opacity="0.45" />
                                        <circle cx="58" cy="42" r="2" fill="#fbbf24" opacity="0.35" />
                                        <circle cx="64" cy="34" r="1.5" fill="#fbbf24" opacity="0.25" />
                                        <circle cx="70" cy="28" r="1" fill="#fbbf24" opacity="0.15" />
                                        <circle cx="75" cy="22" r="0.8" fill="#fbbf24" opacity="0.1" />
                                        {/* Faint path line */}
                                        <path d="M22 78 Q35 65, 50 50 Q62 38, 78 18" fill="none" stroke="#fbbf24" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 4" />
                                        {/* Dark opening at the end */}
                                        <circle cx="80" cy="16" r="8" fill="#0a0a0c" stroke="#52525b" strokeWidth="1" />
                                        <circle cx="80" cy="16" r="4" fill="#18181b" />
                                    </svg>
                                ),
                            },
                        ].map((item, i) => (
                            <Link key={item.href} href={item.href}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="group relative flex flex-col items-center border border-white/5 bg-black/40 p-8 pt-10 pb-6 hover:border-white/15 transition-all duration-500 cursor-pointer rounded-sm overflow-hidden"
                                >
                                    {/* Glow aura behind emblem */}
                                    <div
                                        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                        style={{ backgroundColor: item.glow }}
                                    />
                                    {/* Emblem */}
                                    <motion.div
                                        className="relative w-28 h-28 md:w-32 md:h-32 mb-6 group-hover:scale-110 transition-transform duration-500"
                                        whileHover={{ rotate: [0, -2, 2, 0] }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {item.emblem}
                                    </motion.div>
                                    {/* Title */}
                                    <h3 className="font-cinzel text-xl md:text-2xl text-white font-bold tracking-wide text-center group-hover:text-red-400 transition-colors duration-300">{item.title}</h3>
                                    {/* Hover indicator */}
                                    <div className="mt-4 w-8 h-0.5 bg-white/0 group-hover:bg-red-700 group-hover:w-16 transition-all duration-500" />
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
