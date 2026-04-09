import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Database, AlertCircle, Eye, Fingerprint, Lock, ChevronRight, Activity 
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

    return (
        <div className={`h-screen w-full bg-[#09090b] text-[#c8bdb0] font-cormorant overflow-hidden relative ${isGlitching ? 'animate-pulse grayscale contrast-200' : ''}`}>
            
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

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-[#09090b] to-[#09090b] pointer-events-none z-0 opacity-60" />
            
            {/* TACTICAL COMMAND BAR */}
            <nav className="fixed top-0 left-0 w-full z-[150] bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4 px-8 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Fingerprint className="text-red-600 w-6 h-6" />
                    <span className="font-mono text-sm font-black tracking-[0.4em] text-white">COMMAND CENTER // V10</span>
                </div>
                <div className="flex gap-12">
                    {[
                        { name: "ACT I: ORIGIN", href: "/evidence/origin" },
                        { name: "ACT II: COVER-UP", href: "/expose/epstein-nexus" },
                        { name: "ACT III: BREACH", href: "/breach" },
                        { name: "ACT IV: SUCCESSION", href: "/ledger/lorenzo" }
                    ].map(act => (
                        <Link key={act.name} href={act.href} className="group relative">
                            <span className="font-cinzel text-xl font-bold tracking-widest text-zinc-400 group-hover:text-white transition-colors uppercase">{act.name}</span>
                            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500" />
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <Lock className="text-amber-500 w-4 h-4" />
                    <span className="font-mono text-[10px] text-amber-500 tracking-widest uppercase">Encryption Active</span>
                </div>
            </nav>

            <main className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-8 mt-12">
                
                {/* HERO BLOCK */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center space-y-2 mb-12 relative w-full max-w-6xl mt-4"
                >
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/10 blur-[120px] pointer-events-none rounded-full" />
                    
                    <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black font-cinzel leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
                        THE HOUSE THAT <br />
                        <span className="text-[#8b1a1a] drop-shadow-[0_0_40px_rgba(139,26,26,0.5)] bg-clip-text text-transparent bg-gradient-to-b from-[#b32424] to-[#5a1111]">McCARRICK</span> BUILT
                    </h1>
                    <p className="text-2xl md:text-3xl font-serif text-white tracking-wide max-w-2xl mx-auto pt-6 mt-6 border-t border-white/10 uppercase italic">
                        The Architecture of Immunity
                    </p>
                </motion.div>

                {/* DASHBOARD CONTAINER - GLASSMORPHISM */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                    {/* LEFT COLUMN: NARRATIVE NODES */}
                    <div className="hidden lg:flex lg:col-span-3 space-y-4 flex-col justify-center">
                        <Link href="/prologue" className="group block border border-white/5 bg-black/40 backdrop-blur-xl p-6 hover:border-red-900/50 hover:bg-black/60 transition-all duration-500 shadow-2xl relative overflow-hidden rounded-sm">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-950/0 to-red-950/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                    <ChevronRight className="w-5 h-5 text-red-500" />
                                </span>
                                <h3 className="font-cinzel text-4xl text-white mb-4 font-bold tracking-wider uppercase drop-shadow">The Prologue</h3>
                                <p className="font-mono text-xl text-zinc-300 uppercase tracking-widest relative z-10">Mark Crawford. Age 13.</p>
                        </Link>
                        <Link href="/axis" className="group block border border-white/5 bg-black/40 backdrop-blur-xl p-6 hover:border-[#8b6914]/50 hover:bg-black/60 transition-all duration-500 shadow-2xl relative overflow-hidden rounded-sm">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#8b6914]/0 to-[#8b6914]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="absolute top-0 right-0 p-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                    <ChevronRight className="w-5 h-5 text-[#8b6914]" />
                                </span>
                                <h3 className="font-cinzel text-4xl text-white mb-4 font-bold tracking-wider uppercase drop-shadow">The Power Axis</h3>
                                <p className="font-mono text-xl text-zinc-300 uppercase tracking-widest relative z-10">From Bayonne to the Vatican</p>
                        </Link>
                    </div>

                    {/* CENTER COLUMN: SHIELD HUB */}
                    <div className="lg:col-span-6 flex justify-center py-4 sm:py-8 relative w-full overflow-visible">
                        <div className="absolute inset-0 bg-gradient-radial from-red-900/5 to-transparent pointer-events-none" />
                        <div className="scale-75 sm:scale-90 md:scale-100 hover:scale-[1.02] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <ShieldHub onRingClick={() => {}} />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: MAIN ENTRIES */}
                    <div className="lg:col-span-3 flex flex-col gap-2 relative z-20">
                        {NAVIGATION_NODES.map((node, i) => (
                            <Link key={node.href} href={node.href} className={`group flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/5 hover:${node.border} p-3 sm:p-4 transition-all duration-300 ${node.bg} hover:scale-[1.02] shadow-xl hover:shadow-2xl rounded-sm`}>
                                    <div className={`p-2.5 bg-black/60 border border-white/5 rounded-full ${node.color} group-hover:bg-white/5 transition-colors`}>
                                        <node.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-cinzel font-black tracking-widest text-3xl text-white drop-shadow">{node.title}</h4>
                                        <p className="font-mono text-xl text-zinc-300 uppercase tracking-widest mt-2 group-hover:text-white transition-colors">{node.desc}</p>
                                    </div>
                            </Link>
                        ))}
                    </div>
                    
                    <div className="flex lg:hidden flex-col sm:flex-row w-full gap-3 mt-4 z-20">
                        <Link href="/prologue" className="flex-1 border border-white/5 bg-black/40 p-6 rounded-sm text-center">
                               <h3 className="font-cinzel text-2xl text-white font-bold tracking-wider uppercase">The Prologue</h3>
                        </Link>
                         <Link href="/axis" className="flex-1 border border-white/5 bg-black/40 p-6 rounded-sm text-center">
                               <h3 className="font-cinzel text-2xl text-white font-bold tracking-wider uppercase">Power Axis</h3>
                        </Link>
                    </div>

                </motion.div>
                
                {/* FOOTER BADGE */}
                <div className="absolute bottom-6 flex items-center gap-6 text-xl font-black font-courier text-zinc-300 uppercase tracking-[0.3em] opacity-90 hover:opacity-100 transition-opacity">
                    <span className="flex items-center gap-3"><Activity className="w-6 h-6 text-red-700" /> Authorized Record // SH-2026</span>
                    <div className="w-1.5 h-1.5 bg-red-900 rounded-full hidden sm:block" />
                    <span className="hidden sm:inline">Sodom Hall Forensic Archive</span>
                </div>
            </main>
        </div>
    );
}
