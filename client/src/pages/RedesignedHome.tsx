import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
    Database, AlertCircle, Eye, Fingerprint, Lock, ChevronRight, Activity, ChevronDown
} from "lucide-react";
import ShieldHub from "@/components/ShieldHub";

const NAVIGATION_NODES = [
    { title: "THE EVIDENCE", desc: "SIX ACTS. PRIMARY SOURCES.", href: "/evidence", icon: Database, color: "text-red-500", border: "border-red-950", bg: "hover:bg-red-950/20" },
    { title: "THE BREACH", desc: "ACTIVE LITIGATION.", href: "/breach", icon: AlertCircle, color: "text-red-600", border: "border-red-900", bg: "hover:bg-red-900/20" },
    { title: "THE LEDGER", desc: "THE COMPLICIT BOARD.", href: "/ledger", icon: Eye, color: "text-amber-500", border: "border-amber-500/30", bg: "hover:bg-amber-500/10" },
    { title: "THE METHOD", desc: "AI-DRIVEN DISCOVERY.", href: "/method", icon: Fingerprint, color: "text-blue-500", border: "border-blue-500/50", bg: "hover:bg-blue-500/20" },
    { title: "MADMAN ARCHIVE", desc: "SECRETARIAL INFRASTRUCTURE.", href: "/madman", icon: Lock, color: "text-zinc-200", border: "border-zinc-800", bg: "hover:bg-zinc-900/50" }
];

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
                    onClick={() => scrollToNext("prologue")}
                    className="absolute bottom-12 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer group z-20"
                >
                    <span className="font-mono text-xs tracking-widest uppercase mb-2">Initialize Narrative</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </motion.button>
            </section>

            {/* SECTION 2: THE HUMAN ELEMENT & STARTING POINT */}
            <section id="prologue" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 bg-[#0a0a0c]">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl w-full mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="font-cinzel text-5xl text-white mb-6 uppercase tracking-wider">Where It Begins</h2>
                        <div className="w-24 h-1 bg-red-900 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link href="/prologue" className="group block border border-white/5 bg-black/60 backdrop-blur-xl p-10 hover:border-red-900/50 hover:bg-zinc-900/80 transition-all duration-500 shadow-2xl relative overflow-hidden rounded-sm hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <ChevronRight className="absolute top-8 right-8 w-6 h-6 text-red-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                            <h3 className="font-cinzel text-4xl text-white mb-4 font-bold tracking-wider uppercase">The Prologue</h3>
                            <p className="font-mono text-xl text-zinc-400 uppercase tracking-widest mb-6">Mark Crawford. Age 13.</p>
                            <p className="text-lg text-zinc-300 font-serif leading-relaxed line-clamp-3">The devastating personal account that unmasks the institutional reality of the cathedral. The origin point of the investigation.</p>
                        </Link>

                        <Link href="/axis" className="group block border border-white/5 bg-black/60 backdrop-blur-xl p-10 hover:border-[#8b6914]/50 hover:bg-zinc-900/80 transition-all duration-500 shadow-2xl relative overflow-hidden rounded-sm hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8b6914]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <ChevronRight className="absolute top-8 right-8 w-6 h-6 text-[#8b6914] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                            <h3 className="font-cinzel text-4xl text-white mb-4 font-bold tracking-wider uppercase">The Power Axis</h3>
                            <p className="font-mono text-xl text-zinc-400 uppercase tracking-widest mb-6">Bayonne to the Vatican</p>
                            <p className="text-lg text-zinc-300 font-serif leading-relaxed line-clamp-3">How localized power structures networked to provide total immunity for the highest echelons of the church hierarchy.</p>
                        </Link>
                    </div>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    onClick={() => scrollToNext("archive")}
                    className="absolute bottom-12 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer group"
                >
                    <ChevronDown className="w-6 h-6 animate-pulse" />
                </motion.button>
            </section>

            {/* SECTION 2.5: START HERE — Guided Narrative Spine */}
            <section className="relative w-full py-24 px-4 bg-[#0a0a0c] border-t border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-14">
                        <span className="font-mono text-xs tracking-[0.5em] uppercase text-red-700 font-black">Recommended Reading Order</span>
                        <h2 className="font-cinzel text-4xl md:text-5xl text-white mt-4 uppercase tracking-wider">Start Here</h2>
                        <p className="text-lg text-zinc-500 font-serif mt-4 max-w-2xl mx-auto italic">
                            Follow the investigation in four acts. Each builds on the last.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical connector line */}
                        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-900/60 via-red-900/30 to-transparent" />

                        {[
                            { step: 1, label: "ORIGIN", title: "The Prologue", desc: "A survivor's account that launched the investigation.", href: "/prologue", color: "border-red-900" },
                            { step: 2, label: "EVIDENCE", title: "The Evidence Hub", desc: "Primary sources, court filings, and the suppressed Latham Report.", href: "/evidence", color: "border-amber-700" },
                            { step: 3, label: "BREACH", title: "The Breach", desc: "Active litigation, judicial rulings, and the unraveling cover-up.", href: "/breach", color: "border-blue-800" },
                            { step: 4, label: "LEDGER", title: "The Definitive Record", desc: "Every board member, lawyer, and institutional actor — named and tracked.", href: "/ledger", color: "border-white/30" },
                        ].map((item, i) => (
                            <Link key={item.step} href={item.href}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className={`relative flex items-start gap-6 mb-6 pl-14 md:pl-16 pr-6 py-6 group cursor-pointer border-l-2 ${item.color} hover:bg-white/[0.02] transition-all rounded-r-sm`}
                                >
                                    {/* Step number */}
                                    <div className="absolute left-2 md:left-4 top-6 w-8 h-8 rounded-full bg-[#0a0a0c] border-2 border-zinc-700 group-hover:border-red-700 flex items-center justify-center transition-colors">
                                        <span className="font-mono text-xs font-black text-zinc-400 group-hover:text-white transition-colors">{item.step}</span>
                                    </div>
                                    <div className="flex-1">
                                        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-red-700/70 font-bold">Act {item.step} · {item.label}</span>
                                        <h3 className="font-cinzel text-xl text-white mt-1 group-hover:text-red-400 transition-colors font-bold tracking-wide">{item.title}</h3>
                                        <p className="text-sm text-zinc-500 mt-1 font-serif">{item.desc}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-zinc-700 group-hover:text-red-500 group-hover:translate-x-1 transition-all mt-2 shrink-0" />
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* SECTION 3: THE FORENSIC ARCHIVES */}
            <section id="archive" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 bg-[#0a0a0c] border-t border-white/5">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl w-full mx-auto"
                >
                    <div className="text-center mb-16">
                        <Activity className="w-12 h-12 text-red-900 mx-auto mb-6" />
                        <h2 className="font-cinzel text-4xl md:text-5xl text-white mb-6 uppercase tracking-wider">Forensic Operations</h2>
                        <p className="text-xl text-zinc-400 font-serif max-w-2xl mx-auto">Access primary litigation exhibits, board complicity logs, and raw operational intelligence via the database modules below.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {NAVIGATION_NODES.map((node, i) => (
                            <Link key={node.href} href={node.href} className={`group flex flex-col items-start bg-black/40 backdrop-blur-md border border-white/5 hover:${node.border} p-8 transition-all duration-300 ${node.bg} hover:-translate-y-2 rounded-sm shadow-xl hover:shadow-2xl`}>
                                <div className={`p-4 bg-black/60 border border-white/5 rounded-full ${node.color} group-hover:bg-white/5 transition-colors mb-6`}>
                                    <node.icon className="w-6 h-6" />
                                </div>
                                <h4 className="font-cinzel font-black tracking-widest text-2xl text-white drop-shadow mb-2">{node.title}</h4>
                                <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest group-hover:text-zinc-200 transition-colors">{node.desc}</p>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    onClick={() => scrollToNext("network")}
                    className="absolute bottom-12 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer group"
                >
                    <span className="font-mono text-[10px] tracking-widest uppercase mb-2 text-red-900/50">Access Network Shield</span>
                    <ChevronDown className="w-6 h-6 animate-pulse" />
                </motion.button>
            </section>

            {/* SECTION 4: THE SHIELD HUB */}
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
                    <span className="flex items-center gap-3"><Activity className="w-5 h-5 text-red-800" /> Authorized Record // SH-2026</span>
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full hidden sm:block" />
                    <span className="hidden sm:inline">Sodom Hall Forensic Archive</span>
                </div>
            </section>
        </div>
    );
}
