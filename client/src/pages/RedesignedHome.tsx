import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
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
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-cormorant overflow-x-hidden">
            <TriptychPortal />

            {/* HERO SECTION: THE HOUSE THAT McCARRICK BUILT */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 text-center border-b border-white/5">
                <div className="max-w-5xl mx-auto space-y-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-6xl md:text-[7rem] font-black font-cinzel leading-none tracking-tighter text-white">
                            THE HOUSE THAT <br />
                            <span className="text-[#8b1a1a]">McCARRICK</span> BUILT
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl md:text-2xl font-serif italic text-zinc-500 leading-relaxed">
                            "Seton Hall, the Newark Archdiocese, and the State of New Jersey: a triangular machine of silence that protected the powerful from the seminaries to the halls of Rome."
                        </p>
                    </motion.div>

                    <div className="w-full flex justify-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="group relative cursor-pointer outline-none">
                                    <div className="absolute inset-0 bg-[#8b1a1a]/20 blur-[100px] rounded-full group-hover:bg-[#8b1a1a]/40 transition-all duration-1000" />
                                    <ShieldHub onRingClick={() => {}} />
                                    <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                                        <div className="flex items-center gap-3 px-4 py-2 bg-red-950/20 border border-red-900/40 rounded-full backdrop-blur-sm shadow-[0_0_20px_rgba(139,26,26,0.2)]">
                                            <Search className="w-5 h-5 text-red-600" />
                                            <span className="text-xs font-courier uppercase tracking-[0.4em] text-[#d4af37] font-bold">
                                                Identify Ring Positions
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-black/95 border-red-900/50 backdrop-blur-3xl text-white">
                                <div className="p-8 space-y-6">
                                    <h2 className="text-3xl font-cinzel text-red-600">Shield Hierarchy Registry</h2>
                                    <p className="text-zinc-400 font-serif italic">Select a concentric layer to scan the associated institutions and perpetrators.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                        <div className="p-4 border border-white/10 bg-zinc-900/50">
                                            <span className="text-[10px] text-red-600 font-mono block mb-2 uppercase tracking-widest">Level 01</span>
                                            <h3 className="text-xl font-serif">The Core / Actors</h3>
                                            <p className="text-xs text-zinc-500 mt-2">The individual perpetrators and direct facilitators of abuse.</p>
                                        </div>
                                        <div className="p-4 border border-white/10 bg-zinc-900/50">
                                            <span className="text-[10px] text-red-600 font-mono block mb-2 uppercase tracking-widest">Level 02</span>
                                            <h3 className="text-xl font-serif">The Machine</h3>
                                            <p className="text-xs text-zinc-500 mt-2">Administrative entities providing logistical cover and transfers.</p>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </section>

            {/* CRAWFORD'S LIFELINE */}
            <section className="py-24 px-6 border-b border-[#8b1a1a]/20 bg-[#070709]">
                <div className="max-w-4xl mx-auto space-y-12 text-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-3 text-zinc-500 hover:text-red-600 transition-colors cursor-pointer group">
                            <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-courier uppercase tracking-[0.3em] font-bold">Identify individual ring positions</span>
                        </div>
                        <div className="w-16 h-1 bg-[#8b1a1a]" />
                        <h2 className="text-4xl md:text-6xl font-black font-cinzel text-white uppercase tracking-tighter">
                            Crawford's Lifeline
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Mark Crawford. Age 13. Bayonne, New Jersey.
                        </p>
                        <p className="text-xl text-zinc-400 leading-relaxed font-serif italic">
                            The falsified birthday. The refused $108,000. The refusal of the Conversion.
                            This is the category thesis in one biography.
                        </p>
                        <Link href="/evidence/origin">
                            <a className="inline-flex items-center gap-3 text-[#8b1a1a] font-courier font-black tracking-[0.3em] uppercase text-xs group hover:text-white transition-colors">
                                Follow the lifeline <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </Link>
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
