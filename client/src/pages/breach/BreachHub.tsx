import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
    AlertCircle, 
    Gavel, 
    Scale, 
    ShieldCheck, 
    Zap, 
    Search,
    ArrowRight,
    FileWarning,
    Calendar
} from "lucide-react";

const LITIGATION_EVENTS = [
    { 
        date: "MAY 28, 2026", 
        title: "SANCTION HEARING", 
        desc: "California Superior Court. The institution's motion to unmask the journalist.",
        status: "CRITICAL",
        color: "bg-[#8b1a1a]"
    },
    { 
        date: "MAY 18, 2026", 
        title: "LATHAM UNSEALING", 
        desc: "The anticipated production of 24,000 pages of privileged board logs.",
        status: "UPCOMING",
        color: "bg-[#8b6914]"
    },
    { 
        date: "SEPT 2005", 
        title: "THE DISCOVERY", 
        desc: "Mark Crawford identifies the falsified birthday in internal registries.",
        status: "RECORDED",
        color: "bg-zinc-800"
    }
];

export default function BreachHub() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-cormorant">
            {/* HERO: THE BREACH POINT */}
            <section className="py-24 px-6 border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#8b1a1a]/5 blur-[120px] opacity-20" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <Zap className="w-4 h-4 text-[#8b1a1a] fill-[#8b1a1a]" />
                        <span className="text-[#8b1a1a] font-black text-[10px] uppercase tracking-[0.6em] font-courier">ACTIVE LITIGATION // COLLISION FRAME</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-cinzel text-white uppercase tracking-tighter mb-12">
                        THE <span className="text-[#8b1a1a]">BREACH</span> POINT
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <p className="text-2xl text-zinc-400 font-serif italic leading-relaxed">
                            "The Shield is not a static wall; it is a legal fiction that requires constant maintenance. On May 28, that maintenance fails."
                        </p>
                        <div className="bg-[#0D0D10] border border-[#8b1a1a]/20 p-8 space-y-6">
                            <span className="text-[10px] font-black font-courier text-white uppercase tracking-widest">Forensic Countdown</span>
                            <div className="flex items-end gap-2">
                                <span className="text-5xl font-black text-white font-cinzel tracking-tighter">MAY 28</span>
                                <span className="text-[#8b1a1a] font-black text-xs uppercase mb-1">Sanction Hearing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE COLLISION TIMELINE */}
            <section className="py-24 px-6 bg-[#070709]">
                <div className="max-w-5xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest">THE COLLISION</h2>
                        <div className="h-px w-24 bg-[#8b1a1a]" />
                    </div>
                    <div className="space-y-4">
                        {LITIGATION_EVENTS.map((event, i) => (
                            <div key={i} className="group relative flex flex-col md:flex-row gap-8 p-10 bg-[#0D0D10] border border-white/5 hover:border-[#8b1a1a]/40 transition-all duration-500">
                                <div className="md:w-48">
                                    <span className="text-2xl font-black font-cinzel text-white">{event.date}</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-lg font-black font-cinzel text-white uppercase tracking-widest">{event.title}</h4>
                                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-sm ${event.color} text-white`}>
                                            {event.status}
                                        </span>
                                    </div>
                                    <p className="text-zinc-500 font-serif italic">{event.desc}</p>
                                </div>
                                <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight className="w-5 h-5 text-[#8b1a1a]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE SLAPP SHIELD ANALYSIS */}
            <section className="py-32 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-[#8b1a1a] font-black text-[10px] uppercase tracking-[0.5em] font-courier">Judicial Conflict</span>
                            <h2 className="text-5xl font-black font-cinzel text-white uppercase tracking-tighter">THE SLAPP SHIELD</h2>
                        </div>
                        <p className="text-xl text-zinc-400 font-serif italic leading-relaxed">
                            The institution's strategy: Deploying New Jersey "Grand Jury Privilege" to bypass California "Anti-SLAPP" and "Shield Law" protections.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-6 p-6 bg-[#0D0D10] border border-white/5">
                                <Scale className="w-6 h-6 text-[#8b1a1a]" />
                                <div>
                                    <h4 className="text-white font-black font-cinzel uppercase text-sm mb-2">The Conflict of Laws</h4>
                                    <p className="text-xs text-zinc-500 font-serif leading-relaxed">
                                        Can a New Jersey grand jury subpoena—issued under a false criminal predicate—be used to strip a journalist of residency-based constitutional protections in California?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#111116] border border-white/10 p-12 space-y-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b1a1a]/10 blur-[60px]" />
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black font-cinzel text-white uppercase tracking-tighter">THE FORENSIC TRIGGERS</h3>
                            <div className="space-y-8">
                                <div className="space-y-2 border-l-2 border-[#8b1a1a] pl-6">
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest font-courier">The September Email</span>
                                    <p className="text-sm text-zinc-500 font-serif italic"> coordination between Goldman and the board to suppress the Latham report before Reilly's install.</p>
                                </div>
                                <div className="space-y-2 border-l-2 border-[#8b1a1a] pl-6">
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest font-courier">The Goldman Resignation</span>
                                    <p className="text-sm text-zinc-500 font-serif italic">Evidence of the internal revolt against the 'Big Lie' strategy.</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/vault">
                            <a className="inline-flex items-center gap-3 bg-[#8b1a1a] text-white px-8 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">
                                Open The Vault <Search className="w-4 h-4" />
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 px-6 border-t border-white/5 text-center">
                   <div className="max-w-4xl mx-auto space-y-8">
                        <div className="w-12 h-1 bg-[#8b1a1a] mx-auto" />
                        <p className="text-zinc-600 font-courier text-[10px] uppercase tracking-[0.4em]">Authorized Reconstruction // SH-2026 // Active Breach</p>
                   </div>
            </footer>
        </div>
    );
}
