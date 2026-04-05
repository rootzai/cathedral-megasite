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
                                    <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                                        <Search className="w-4 h-4" />
                                        <span className="text-[10px] font-courier uppercase tracking-widest">Identify individual Ring Positions</span>
                                    </div>
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-black/95 border-red-900/50 backdrop-blur-3xl text-white">
                                {/* The ShieldHub logic is handled inside its component now */}
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </section>

            {/* THE CRAWFORD THREAD */}
            <section className="py-24 px-6 border-b border-[#8b1a1a]/20 bg-[#070709]">
                <div className="max-w-4xl mx-auto space-y-12 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-1 bg-[#8b1a1a]" />
                        <h2 className="text-3xl md:text-5xl font-black font-cinzel text-white uppercase tracking-tighter">
                            THE CRAWFORD THREAD
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
                                Follow the thread <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
