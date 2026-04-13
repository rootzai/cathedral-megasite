import React from "react";
import { Link } from "wouter";
import { Zap, AlertCircle, ArrowRight, ShieldCheck, Scale } from "lucide-react";
import { Term } from "@/components/Term";

const LITIGATION_EVENTS = [
    { 
        date: "MAY 28, 2026", 
        title: "Seton Hall v. Dei Journo", 
        desc: "SHU attempts to depose the journalist. Managed by the Critchley triumvirate.",
        status: "HEARING",
        color: "bg-[#c41e1e]"
    },
    { 
        date: "MAY 18, 2026", 
        title: "McCloskey v. RCAN", 
        desc: "Production of the 24,000-page Latham Archive ordered.",
        status: "PRODUCTION",
        color: "bg-[#d4a843]",
        textClass: "text-black"
    },
    { 
        date: "MAR 12, 2026", 
        title: "Stay Denial", 
        desc: "RCAN's emergency stay to block Latham unsealing denied.",
        status: "DENIED",
        color: "bg-[#111]"
    }
];

export default function BreachHub() {
    return (
        <div className="bg-[#0a0a0c] text-[#e2dacf] font-serif pb-32">
            {/* Editorial Header */}
            <header className="border-b-4 border-[#c41e1e] bg-[#050505] py-6 px-8 flex justify-between items-center sticky top-0 z-50">
                <Link href="/">
                    <a className="text-3xl font-black font-cinzel text-[#e2dacf] uppercase tracking-[0.2em] hover:text-[#d4a843] transition-colors flex items-center gap-4">
                        <span className="w-4 h-4 bg-[#c41e1e]"></span>
                        SODOM HALL
                    </a>
                </Link>
                <nav className="flex gap-8">
                    <Link href="/evidence">
                        <a className="text-[#888] hover:text-[#d4a843] font-mono text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                             Open Architecture
                        </a>
                    </Link>
                </nav>
            </header>

            {/* HERO: THE BREACH POINT */}
            <section className="py-20 px-6 border-b border-[#c41e1e]/20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c41e1e]/10 via-[#0a0a0c] to-[#0a0a0c]">
                <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
                    <div className="flex items-center gap-4 mb-8">
                        <Zap className="w-6 h-6 text-[#d4a843] animate-pulse" />
                        <span className="text-[#d4a843] font-black text-sm uppercase tracking-[0.5em] font-mono">
                            Active Litigation
                        </span>
                    </div>
                    
                    <h1 className="text-7xl md:text-[9rem] font-black font-cinzel text-white uppercase tracking-tighter mb-12 leading-[0.85] drop-shadow-2xl">
                        THE <span className="text-[#c41e1e]">BREACH</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left max-w-5xl w-full mt-12 mb-12">
                        <div className="space-y-6">
                            <p className="text-4xl text-white font-cinzel font-black leading-tight border-l-4 border-[#d4a843] pl-6">
                                They sealed the Latham Archive.<br />
                                They pursued the journalist.
                            </p>
                            <p className="text-2xl text-[#e2dacf]/80 font-serif italic leading-relaxed">
                                The institution that sealed 24,000 pages of abuse evidence is now attempting to silence the reporter who warned them.
                            </p>
                        </div>
                        
                        <div className="bg-[#050505] border-4 border-[#c41e1e] p-8 shadow-[-15px_15px_0_0_rgba(196,30,30,0.5)]">
                            <span className="text-sm font-black font-mono text-[#d4a843] uppercase tracking-[0.3em] flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" /> Collision Countdown
                            </span>
                            <div className="flex flex-col mt-6">
                                <span className="text-7xl md:text-[6rem] font-black text-white font-cinzel tracking-tighter leading-none mb-4">
                                    MAY 28
                                </span>
                                <div className="border-t-2 border-[#c41e1e]/50 pt-4">
                                    <span className="text-[#e2dacf] font-black text-lg uppercase tracking-widest">
                                        Deposition Hearing (Dept. C23)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE COLLISION TIMELINE */}
            <section className="py-24 px-6 max-w-5xl mx-auto">
                <h2 className="text-6xl font-black font-cinzel text-white uppercase tracking-widest mb-16 text-center">
                    Collision <span className="text-[#c41e1e]">Timeline</span>
                </h2>

                <div className="space-y-8">
                    {LITIGATION_EVENTS.map((event, i) => (
                        <div key={i} className="bg-[#111] border-2 border-[#1a1a1a] p-8 flex flex-col md:flex-row gap-8 items-start group hover:border-[#d4a843] transition-colors relative overflow-hidden">
                            <div className={`${event.color} ${event.textClass || 'text-white'} p-6 min-w-[200px] text-center shrink-0`}>
                                <span className="block font-black text-4xl mb-1">{event.date.split(',')[0]}</span>
                                <span className="block font-mono text-sm tracking-widest font-bold">{event.date.split(',')[1]}</span>
                            </div>
                            <div className="pt-2">
                                <h3 className="text-3xl font-black text-white uppercase tracking-wider mb-2">{event.title}</h3>
                                <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#c41e1e] mb-4">
                                    Status: {event.status}
                                </span>
                                <p className="text-xl text-[#e2dacf]/80 leading-relaxed italic">
                                    {event.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* THE SLAPP SHIELD ANALYSIS */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <span className="text-[#c41e1e] font-black text-sm uppercase tracking-[0.5em] font-mono">Judicial Conflict</span>
                        <h2 className="text-6xl font-black font-cinzel text-white uppercase tracking-tighter">THE SLAPP SHIELD</h2>
                        <p className="text-2xl text-white font-serif italic leading-relaxed">
                            Using New Jersey Privilege to ignore California Shield Laws. 
                        </p>
                        <div className="bg-[#111] border-2 border-white/5 p-8 relative">
                            <Scale className="w-8 h-8 text-[#d4a843] mb-4" />
                            <h4 className="text-white font-black font-cinzel text-2xl uppercase mb-4">Symmetry of Power</h4>
                            <p className="text-lg text-[#e2dacf]/80 font-serif leading-relaxed italic">
                                Secular power meets religious protection. A multi-decade defensive alignment managing the temperature of exposure.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#1a0000] border-4 border-[#c41e1e] p-12 relative overflow-hidden shadow-2xl">
                        <ShieldCheck className="absolute -bottom-10 -right-10 w-64 h-64 text-[#c41e1e]/20" />
                        <h3 className="text-4xl font-black font-cinzel text-white uppercase tracking-tighter mb-8 relative z-10">
                            Forensic Triggers
                        </h3>
                        <div className="space-y-8 relative z-10">
                            <div className="border-l-4 border-[#d4a843] pl-6">
                                <span className="text-lg font-black text-white uppercase tracking-widest font-mono block mb-2">The September Email</span>
                                <p className="text-xl text-[#e2dacf]/80 font-serif italic">Coordination to suppress the Latham report before installation.</p>
                            </div>
                            <div className="border-l-4 border-[#d4a843] pl-6">
                                <span className="text-lg font-black text-white uppercase tracking-widest font-mono block mb-2">The Resignation</span>
                                <p className="text-xl text-[#e2dacf]/80 font-serif italic">Internal revolt against the overarching Big Lie strategy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hub Navigation */}
            <section className="py-24 px-6 max-w-4xl mx-auto border-t-2 border-[#c41e1e]/20 text-center">
                <Link href="/breach">
                    <a className="inline-flex items-center gap-4 bg-[#c41e1e] hover:bg-white text-white hover:text-[#c41e1e] px-12 py-6 font-black uppercase tracking-[0.3em] transition-colors border-4 border-transparent hover:border-[#c41e1e] text-2xl">
                        Enter Investigation <ArrowRight className="w-6 h-6" />
                    </a>
                </Link>
            </section>
        </div>
    );
}
