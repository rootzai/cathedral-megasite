import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Shield, 
    ArrowRight, 
    AlertCircle, 
    Search,
    Lock,
    Eye,
    Activity,
    Database,
    Zap,
    Fingerprint,
    Ghost,
    Send
} from "lucide-react";
import ShieldHub from "@/components/ShieldHub";
import PowerAxis from "@/components/PowerAxis";
import TriptychPortal from "@/components/TriptychPortal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const SECTION_CARDS = [
    {
        title: "THE EVIDENCE",
        desc: "Six acts. Named players. Primary sources.",
        href: "/evidence",
        icon: Database,
        color: "text-[#8b1a1a]"
    },
    {
        title: "THE BREACH",
        desc: "Active litigation. May 18. May 28.",
        href: "/breach",
        icon: AlertCircle,
        color: "text-[#8b1a1a]",
        pulse: true
    },
    {
        title: "THE LEDGER",
        desc: "The board that read the report and installed him anyway.",
        href: "/ledger",
        icon: Eye,
        color: "text-[#8b6914]"
    },
    {
        title: "THE VAULT",
        desc: "24,000 pages. Sealed for six years. Opening May 18.",
        href: "/vault",
        icon: Lock,
        color: "text-[#c8bdb0]"
    },
    {
        title: "THE METHOD",
        desc: "How AI found the fabricated bulletins.",
        href: "/method",
        icon: Fingerprint,
        color: "text-[#1a3a5c]"
    },
    {
        title: "THE NURSERY",
        desc: "Humpty Dumpty Had a Great Fall.",
        href: "/easter",
        icon: Ghost,
        color: "text-[#3a1a5c]"
    }
];

export default function RedesignedHome() {
    const [, setLocation] = useLocation();
    const [isGlitching, setIsGlitching] = useState(false);
    const [konamiProgress, setKonamiProgress] = useState<string[]>([]);
    
    // KONAMI CODE: UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
    const KONAMI_CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const nextKey = e.key;
            const updated = [...konamiProgress, nextKey];
            
            // Check if input matches so far
            if (KONAMI_CODE[updated.length - 1] === nextKey) {
                if (updated.length === KONAMI_CODE.length) {
                    // CODE SUCCESS
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
        <div className={`min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-cormorant overflow-x-hidden ${isGlitching ? 'animate-pulse grayscale contrast-200' : ''}`}>
            <AnimatePresence>
                {isGlitching && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-red-950/20 backdrop-blur-md flex flex-col items-center justify-center pointer-events-none"
                    >
                        <h2 className="text-white font-cinzel text-4xl tracking-[2em] uppercase animate-bounce">THE VAULT IS COMPROMISED</h2>
                        <div className="w-full h-1 bg-red-600 animate-ping mt-8" />
                    </motion.div>
                )}
            </AnimatePresence>

            <TriptychPortal />

            {/* HERO SECTION: THE HOUSE THAT McCARRICK BUILT */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 text-center border-b border-white/5">
                <div className="max-w-5xl mx-auto space-y-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-[5.5rem] font-black font-cinzel leading-none tracking-tighter text-white">
                            THE HOUSE THAT <br />
                            <span className="text-[#8b1a1a]">McCARRICK</span> BUILT
                        </h1>
                        <p className="max-w-5xl mx-auto text-xl md:text-2xl font-serif italic text-[#c8bdb0]/80 leading-relaxed space-y-6">
                            <span>"For the last half century, the RCAN architected a scheme to make priest sex abuse unreachable. They sealed investigations, falsified records, and weaponized the NJ legal system against their victims and anyone who dared to defy them. This investigation names every layer of protection the See erects."</span>
                            <span className="block pt-8 text-[#8b1a1a] font-cinzel font-black tracking-[0.2em] uppercase text-3xl">The vault opens May 18, 2026.</span>
                        </p>
                    </motion.div>

                    <div className="w-full flex justify-center mt-12 relative">
                        <div className="absolute inset-0 bg-[#8b1a1a]/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="relative z-10 w-full flex justify-center">
                            <ShieldHub onRingClick={() => {}} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CRAWFORD'S LIFELINE */}
            <section className="py-24 px-6 border-b border-[#8b1a1a]/20 bg-[#070709]">
                <div className="max-w-4xl mx-auto space-y-12 text-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-3 text-zinc-500 hover:text-red-600 transition-colors cursor-pointer group">
                            <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </div>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                             <h2 className="text-[#d4af37] font-serif text-5xl tracking-tight leading-none uppercase">The Crawford Thread</h2>
                             <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">Case Study: Institutional Mechanics</p>
                        </div>
                        <div className="w-24 h-px bg-red-900 mx-auto" />
                        <p className="text-xl text-white font-serif leading-[1.6]">
                            Mark Crawford. Age 13. Bayonne, New Jersey. 
                        </p>
                        <div className="text-xl text-zinc-400 leading-relaxed font-serif italic space-y-6">
                            <p>
                                When Mark Crawford was thirteen years old, a priest named Kenneth Martin began abusing him and his brothers in Bayonne, New Jersey. Shortly thereafter, Martin became Archbishop Theodore McCarrick's personal secretary, serving at the Archbishop’s pleasure. 
                            </p>
                            <p>
                                When Crawford came forward years later, the Diocese of Metuchen did not deny what had happened. Instead, they falsified his birth records to claim his adulthood and said the statute of limitations had expired, refused to pay the $108,000 settlement their own mediator had awarded him. When Crawford asked for a written acknowledgment that the abuse happened and that Martin would never have access to children again, they refused to oblige him.
                            </p>
                            <p className="border-l-2 border-red-900 pl-6 py-2">
                                Catholics call that acknowledgment a Conversion. <span className="text-[#8b1a1a]">Metuchen refused it.</span>
                            </p>
                            <p>
                                Fifteen became sixteen on paper, one falsified digit, and a man who had been abused as a child was turned away without money, without acknowledgment, and without the Church's most basic gesture of accountability.
                            </p>
                            <p className="text-white not-italic font-bold">
                                What you are about to read is that same mechanism, applied at institutional scale across fifty years, with better lawyers and massive resources.
                            </p>
                        </div>
                        <Link href="/evidence/origin">
                            <a className="inline-flex items-center gap-3 text-[#8b1a1a] font-courier font-black tracking-[0.3em] uppercase text-xs group hover:text-white transition-colors">
                                Follow the lifeline <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>

            {/* THE POWER AXIS */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <span className="text-[#8b6914] font-black text-[10px] uppercase tracking-[0.6em] font-courier">Level 5 ESCALATION</span>
                        <h2 className="text-4xl md:text-6xl font-black font-cinzel text-white leading-none uppercase">THE POWER AXIS</h2>
                    </div>
                    <PowerAxis />
                    <p className="text-center text-zinc-600 font-courier text-[10px] uppercase tracking-widest max-w-2xl mx-auto">
                        Updated 2026: Node 5 includes Ruemmler / Epstein / September email / Goldman resignation.
                    </p>
                </div>
            </section>

            {/* SECTION ENTRY CARDS */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SECTION_CARDS.map((card) => (
                        <Link key={card.href} href={card.href}>
                            <a className="group block bg-[#0D0D10] border border-white/5 p-10 hover:border-white/20 transition-all duration-500 relative overflow-hidden h-full">
                                <card.icon className={`w-8 h-8 ${card.color} mb-8 group-hover:scale-110 transition-transform duration-500`} />
                                <h3 className="text-2xl font-black font-cinzel text-white mb-4 tracking-tighter">{card.title}</h3>
                                <p className="text-zinc-500 font-serif leading-relaxed mb-12 italic">{card.desc}</p>
                                
                                <div className="absolute bottom-10 left-10 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-black font-courier text-white uppercase tracking-widest">Enter Section</span>
                                    <ArrowRight className="w-4 h-4 text-[#8b1a1a]" />
                                </div>

                                {card.pulse && (
                                    <div className="absolute top-6 right-6">
                                        <motion.div 
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-2 h-2 bg-red-600 rounded-full"
                                        />
                                    </div>
                                )}

                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/1 blur-[100px] rounded-full group-hover:bg-[#8b1a1a]/5 transition-all duration-700" />
                            </a>
                        </Link>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 px-6 border-t border-white/5 text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="w-16 h-1 bg-[#8b1a1a] mx-auto" />
                    <div className="space-y-6">
                        <p className="text-[#8b1a1a] font-black font-cinzel text-2xl uppercase tracking-tighter italic">
                            The Church has had two thousand years to build the shield.
                        </p>
                        <p className="text-white font-black font-cinzel text-3xl uppercase tracking-tighter">
                            The counter-infrastructure starts now.
                        </p>
                    </div>
                    <div className="pt-12 flex items-center justify-center gap-12 text-[10px] font-black font-courier text-zinc-700 uppercase tracking-[0.4em]">
                        <span>Authorized Record // SH-2026</span>
                        <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                        <span>Sodom Hall Forensic</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
