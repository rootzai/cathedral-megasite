import React from "react";
import { motion } from "framer-motion";
import { 
    Ghost, 
    Wind, 
    ArrowRight, 
    Search,
    Lock,
    Eye,
    Activity,
    AlertCircle,
    UserCircle,
    Hammer
} from "lucide-react";
import { Link } from "wouter";

export default function TheNursery() {
    return (
        <div className="min-h-screen bg-[#070709] text-[#c8bdb0] font-cormorant selection:bg-[#3a1a5c] selection:text-white">
            {/* HERO: THE NURSERY */}
            <section className="relative h-[80vh] flex flex-col items-center justify-center pt-20 px-6 border-b border-[#3a1a5c]/20 overflow-hidden">
                <div className="absolute inset-0 bg-[#3a1a5c]/5 blur-[120px] opacity-20" />
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#3a1a5c_1px,transparent_1px)] [background-size:24px_24px]" />
                </div>
                
                <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-12"
                    >
                        <div className="relative">
                            <Ghost className="w-24 h-24 text-[#3a1a5c] opacity-40 blur-sm" />
                            <Ghost className="absolute inset-0 w-24 h-24 text-[#7c3aed] drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]" />
                        </div>
                    </motion.div>
                    
                    <h1 className="text-6xl md:text-[8rem] font-black font-cinzel text-white leading-none uppercase tracking-tighter">
                        THE <span className="text-[#7c3aed]">NURSERY</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl font-serif italic text-zinc-500 leading-relaxed">
                        "Humpty Dumpty sat on a wall. Humpty Dumpty had a great fall."
                    </p>
                </div>
            </section>

            {/* THE PERRY LAW SHAM */}
            <section className="py-32 px-6 border-b border-white/5 bg-[#0a0a0c]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-[#3a1a5c] font-black text-[10px] uppercase tracking-[0.5em] font-courier">Forensic Entry // THE NURSERY</span>
                            <h2 className="text-5xl font-black font-cinzel text-white uppercase tracking-tighter">THE ALL-KING'S MEN</h2>
                        </div>
                        <div className="space-y-8 text-lg text-zinc-400 font-serif leading-relaxed italic">
                            <p className="border-l-2 border-[#3a1a5c] pl-8">
                                "The Perry Law 'independent' investigation was codenamed 'The Nursery' in internal emails."
                            </p>
                            <p>
                                The goal: Assemble the 'King's Men' (Marino, Stio, Villar, Porrino) to put the pieces of the institutional shield back together after the Nyre breach. They didn't fix the wall. They just painted it white.
                            </p>
                        </div>
                        <div className="bg-[#0D0D10] border border-white/5 p-10 space-y-6 group hover:border-[#7c3aed]/40 transition-all">
                             <div className="flex justify-between items-center">
                                <h4 className="text-white font-black font-cinzel uppercase tracking-widest text-lg">THE LORI BROWN NOTE</h4>
                                <Lock className="w-5 h-5 text-[#7c3aed]" />
                             </div>
                             <p className="text-sm text-zinc-500 font-serif leading-relaxed">
                                "I am hired by the Board to protect the Board." — The first line of the directive that Karen Agnifilo followed, which never made it into the public version of the report.
                             </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#7c3aed]/5 blur-[100px] opacity-20" />
                        <div className="relative bg-[#070709] border border-white/10 p-12 space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black font-cinzel text-white uppercase tracking-tighter">THE PIECES</h3>
                                <div className="space-y-6">
                                    {[
                                        { name: "Kevin Marino", role: "The Anchor", status: "Managing the Spin" },
                                        { name: "Stacy Stio", role: "The Scribe", status: "Redacting the Truth" },
                                        { name: "Karen Agnifilo", role: "The Shield", status: "Publishing the Lie" }
                                    ].map((person, i) => (
                                        <div key={i} className="flex items-center justify-between py-4 border-b border-white/5">
                                            <div>
                                                <p className="text-white font-black font-cinzel uppercase text-sm mb-1">{person.name}</p>
                                                <p className="text-[10px] text-zinc-600 font-courier uppercase tracking-widest">{person.role}</p>
                                            </div>
                                            <span className="text-[8px] font-black font-courier text-[#7c3aed] uppercase tracking-widest">{person.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-8">
                                <p className="text-[10px] text-zinc-700 font-courier uppercase tracking-[0.4em] text-center italic">
                                    "And all the King's horses, and all the King's men..."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE GREAT FALL */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto space-y-20 text-center">
                    <div className="space-y-4">
                        <h2 className="text-5xl font-black font-cinzel text-white uppercase tracking-tighter">THE GREAT FALL</h2>
                        <div className="h-px w-24 bg-[#7c3aed] mx-auto" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="p-10 bg-[#0D0D10] border border-white/5 space-y-6">
                            <Hammer className="w-8 h-8 text-[#7c3aed]" />
                            <h4 className="text-2xl font-black font-cinzel text-white uppercase">The 2026 Collision</h4>
                            <p className="text-lg text-zinc-500 font-serif italic leading-relaxed">
                                The 'Nursery' was supposed to be the final word. Instead, it became the evidence of a coordinated cover-up that is now the subject of federal interest.
                            </p>
                        </div>
                        <div className="p-10 bg-[#0D0D10] border border-white/5 space-y-6">
                            <Search className="w-8 h-8 text-[#7c3aed]" />
                            <h4 className="text-2xl font-black font-cinzel text-white uppercase">The Missing Link</h4>
                            <p className="text-lg text-zinc-500 font-serif italic leading-relaxed">
                                Why was the Martha's Vineyard narrative fabricated? To ensure that the 'Kings' remained on their wall. The fall is coming.
                            </p>
                        </div>
                    </div>

                    <div className="pt-20">
                         <Link href="/method">
                            <a className="inline-flex items-center gap-3 text-[#7c3aed] font-black uppercase text-[10px] tracking-[0.5em] group hover:text-white transition-colors">
                                View The Method <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                            </a>
                         </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 px-6 border-t border-white/5 text-center text-[10px] font-black font-courier text-zinc-700 uppercase tracking-[0.4em]">
                Authorized Nursery Record // SODOM HALL // 2026
            </footer>
        </div>
    );
}
