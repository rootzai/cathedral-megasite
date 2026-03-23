import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Search, Gavel, AlertCircle, FileText, ArrowRight } from "lucide-react";

export default function BreachHub() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif overflow-x-hidden">
            {/* HERO: THE ANATOMY OF A FAILURE */}
            <section className="relative py-24 px-6 border-b border-[#1a1a22] overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#8b1a1a]/5 blur-[120px] -z-10" />
                
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Unsealed Intelligence // Dossier 22.1</span>
                        <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-10 leading-[0.85]">
                            The <span className="text-[#8b1a1a]">Breach</span>
                        </h1>
                        <p className="text-2xl text-white/90 leading-relaxed font-light mb-12">
                            A methodical collapse occurs when institutional arrogance meets forensic reality. 
                            The Breach is the forensic entry point—the moment the Shield shattered, unsealing the 24,000 withheld pages of the <span className="text-[#8b1a1a] font-bold">House That McCarrick Built</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
                        {/* THE HUbris (THE CAUSE) */}
                        <div className="p-8 border border-[#1a1a22] bg-[#111116] relative group">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><Shield className="w-8 h-8" /></div>
                            <h3 className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.3em] mb-6">The Cause // Institutional Hubris</h3>
                            <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">The Presidency of Msgr. Reilly</h4>
                            <p className="text-[#888] text-sm leading-relaxed mb-8 italic">
                                "The belief that they could install an architect of silence as the President of Seton Hall University—and that no one would ever look inside the briefcase."
                            </p>
                            <Link href="/opinion/stephens">
                                <a className="text-[10px] font-bold text-[#8b1a1a] uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                    Analyze the Hubris <ArrowRight className="w-3 h-3" />
                                </a>
                            </Link>
                        </div>

                        {/* THE FORENSICS (THE KEY) */}
                        <div className="p-8 border border-[#8b1a1a]/30 bg-[#111116] relative group shadow-[0_0_30px_rgba(139,26,26,0.1)]">
                            <div className="absolute top-0 right-0 p-4 text-[#8b1a1a]"><Search className="w-8 h-8" /></div>
                            <h3 className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.3em] mb-6">The Key // Forensic Reality</h3>
                            <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">The Mark Crawford Breach</h4>
                            <p className="text-[#888] text-sm leading-relaxed mb-8 italic">
                                "A singular opening: the blatant falsification of internal age registries in 2005. The precise failure that bypassed the statute of limitations."
                            </p>
                            <Link href="/opinion/matthews">
                                <a className="text-[10px] font-bold text-[#8b1a1a] uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                    Examine the Registry <ArrowRight className="w-3 h-3" />
                                </a>
                            </Link>
                        </div>

                        {/* THE COVER-UP (THE MATRIX) */}
                        <div className="p-8 border border-[#1a1a22] bg-[#111116] relative group">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><Gavel className="w-8 h-8" /></div>
                            <h3 className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.3em] mb-6">The Matrix // The Enablers</h3>
                            <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">The Cover-up of the Cover-up</h4>
                            <p className="text-[#888] text-sm leading-relaxed mb-8 italic">
                                "The Code Red coordination: Marino, Porrino, and Scrivo. The architects of silence who coordinated legal threats while truth was being unsealed."
                            </p>
                            <Link href="/ledger">
                                <a className="text-[10px] font-bold text-[#8b1a1a] uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                    Audit the Ledger <ArrowRight className="w-3 h-3" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE TIMELINE OF COLLAPSE */}
            <section className="py-24 px-6 bg-[#0d0d10]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#8b1a1a] font-bold text-[10px] uppercase tracking-[0.5em] block mb-4">Sequence of Failure</span>
                        <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Chronology of the Breach</h2>
                    </div>

                    <div className="space-y-12">
                        {[
                            { date: "2005", title: "The Registry Override", desc: "Clerical records for Mark Crawford are manually adjusted to bypass the statute of limitations—the first crack in the McCarrick House foundation." },
                            { date: "2024", title: "The Code Red", desc: "Porrino and Scrivo coordinate identical legal threats (6 days apart) to suppress journalists and unmask whistleblowers." },
                            { date: "2025", title: "24,000 Pages Unsealed", desc: "Judge Avion Benjamin orders the release of the withheld Latham Report, exposing the 'Architecture of Protection' in its entirety." }
                        ].map((event, i) => (
                            <div key={i} className="flex gap-12 group">
                                <div className="w-24 text-[#8b1a1a] font-black text-xl tabular-nums pt-1 border-t border-[#8b1a1a]/20">{event.date}</div>
                                <div className="flex-1 pb-12 border-b border-[#1a1a22]">
                                    <h4 className="text-white font-bold text-xl uppercase tracking-tight mb-4 group-hover:text-[#8b1a1a] transition-colors">{event.title}</h4>
                                    <p className="text-[#777] leading-relaxed italic">"{event.desc}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-2xl mx-auto border border-[#8b1a1a]/20 p-16 bg-[#111116] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#8b1a1a]" />
                    <AlertCircle className="w-12 h-12 text-[#8b1a1a] mx-auto mb-8" />
                    <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-6">Examine the Unsealed Briefcase</h2>
                    <p className="text-[#888] mb-10 leading-relaxed">
                        The full repository of unsealed documents detailing the cover-up of the cover-up is now accessible. 
                        Search by Case ID or Institutional Node.
                    </p>
                    <Link href="/evidence">
                        <a className="inline-block bg-[#8b1a1a] text-white px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all">
                            Examine the Documents
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    );
}
