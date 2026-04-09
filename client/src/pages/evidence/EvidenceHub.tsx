import React from "react";
import { Link } from "wouter";
import { RINGS } from "@/lib/data";
import EvidenceSubNavigation from "@/components/EvidenceSubNavigation";
import { JourneyNav } from "@/components/JourneyNav";
import { ArrowRight } from "lucide-react";
import { Term } from "@/components/Term";

import { SEO } from "@/components/SEO";

export default function EvidenceHub() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif">
            <SEO 
                title="The Evidence Hub" 
                description="Explore the six structural layers of institutional immunity in the Cathedral investigation." 
            />
            <EvidenceSubNavigation />

            {/* ... rest of the section ... */}

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
                            Institutional Immunity
                        </span>
                        <h1 className="text-5xl font-bold text-white uppercase tracking-[0.1em] mb-8">
                            The Unsealed Archives
                        </h1>
                        <div className="max-w-2xl mx-auto">
                            <p className="text-lg md:text-xl text-[#888] leading-relaxed mb-12">
                                A forensic mapping of the six structural layers that enforced institutional immunity for 40 years.
                                Each ring represents a redundant failure of accountability &mdash; from {<Term id="Canon Law">canon law</Term>} to {<Term id="Legislative Capture">legislative capture</Term>}.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {RINGS.map((ring) => (
                            <Link key={ring.id} href={ring.route} className="group block bg-[#111116] border border-[#1a1a22] p-8 hover:border-[#8b1a1a] transition-all relative overflow-hidden">
                                {ring.breach && (
                                    <div className="absolute top-0 right-0 bg-[#8b1a1a] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                                        Breach Point
                                    </div>
                                )}
                                <span className="text-[#c22121] font-bold text-xs uppercase tracking-[0.3em] block mb-4">
                                    RING {ring.id}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#c22121] transition-colors uppercase tracking-wider">
                                    {ring.name}
                                </h3>
                                <p className="text-base text-zinc-300 leading-relaxed italic mb-8 group-hover:text-zinc-100">
                                    "{ring.description}"
                                </p>
                                <div className="mt-auto pt-6 border-t border-[#1a1a22] flex items-center justify-between">
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest group-hover:text-[#c22121]">
                                        EXPLORE ARCHIVES
                                    </span>
                                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-[#c22121] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                    <div className="mt-16 bg-[#111116] border border-[#1a1a22] hover:border-[#8b1a1a]/50 transition-colors p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b1a1a]/5 blur-[60px]" />
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center cursor-pointer">
                            <div className="md:col-span-2">
                                <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.4em] font-mono block mb-3">
                                    Featured Case Study
                                </span>
                                <h3 className="text-3xl font-black font-cinzel text-white uppercase tracking-tighter mb-4">
                                    The Architecture of Secrecy
                                </h3>
                                <p className="text-lg text-zinc-400 font-serif italic mb-6 leading-relaxed">
                                    An Analysis of the Lara McKeever Case, Institutional Complicity, and the Diocese of Harrisburg Bankruptcy.
                                </p>
                            </div>
                            <div className="flex md:justify-end">
                                <Link href="/evidence/mckeever">
                                    <a className="inline-flex items-center gap-3 bg-[#8b1a1a] text-white px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                                        Read Report <ArrowRight className="w-4 h-4" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="py-20 border-t border-white/5 bg-black/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-widest">Ready to Begin?</h2>
                    <p className="text-zinc-500 mb-12 max-w-2xl mx-auto italic">
                        The investigation starts at the core. Enter Ring 1 to uncover the secrets of the Latham Archive.
                    </p>
                    <Link href="/origin/martin">
                        <a className="inline-flex items-center gap-4 bg-[#8b1a1a] text-white px-12 py-5 rounded-sm font-black uppercase tracking-[0.3em] hover:bg-[#a11e1e] transition-all shadow-[0_0_30px_rgba(139,26,26,0.2)]">
                            Begin Act I: The Origin
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </Link>
                </div>
            </section>

                    <div className="mt-32 mb-16">
                        <h2 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest text-center mb-12">Suggested Journeys</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 border border-white/5 bg-black/40 hover:border-zinc-700 transition-all">
                                <span className="text-xs font-black font-mono text-zinc-600 uppercase tracking-widest block mb-4">PATH 01 // THE NEWBIE</span>
                                <h4 className="text-xl font-black font-cinzel text-white uppercase mb-4">Start Here</h4>
                                <p className="text-sm text-zinc-500 italic mb-6">"I'm new. Who is involved and what happened?"</p>
                                <div className="space-y-4">
                                    <Link href="/about" className="text-xs text-[#8b1a1a] hover:text-white block tracking-widest uppercase">1. THE MISSION</Link>
                                    <Link href="/whos-who" className="text-xs text-[#8b1a1a] hover:text-white block tracking-widest uppercase">2. THE PEOPLE</Link>
                                    <Link href="/evidence" className="text-xs text-[#8b1a1a] hover:text-white block tracking-widest uppercase">3. THE LAYERS</Link>
                                </div>
                            </div>
                            <div className="p-8 border border-white/5 bg-black/40 hover:border-zinc-700 transition-all">
                                <span className="text-xs font-black font-mono text-zinc-600 uppercase tracking-widest block mb-4">PATH 02 // THE LEGALIST</span>
                                <h4 className="text-xl font-black font-cinzel text-white uppercase mb-4">The Deep Dive</h4>
                                <p className="text-sm text-zinc-500 italic mb-6">"I want the records. Show me the filings and the {<Term id="Michael Critchley">Critchley Shield</Term>}."</p>
                                <div className="space-y-4">
                                    <Link href="/breach" className="text-xs text-[#8b1a1a] hover:text-white block tracking-widest uppercase">1. THE BREACH</Link>
                                    <Link href="/vault" className="text-xs text-[#8b1a1a] hover:text-white block tracking-widest uppercase">2. THE VAULT</Link>
                                    <Link href="/ledger" className="text-xs text-[#8b1a1a] hover:text-white block tracking-widest uppercase">3. THE RECORD</Link>
                                </div>
                            </div>
                            <div className="p-8 border border-[#8b1a1a]/20 bg-[#8b1a1a]/5 hover:border-[#8b1a1a]/40 transition-all">
                                <span className="text-xs font-black font-mono text-[#8b1a1a] uppercase tracking-widest block mb-4">PATH 03 // THE ADVOCATE</span>
                                <h4 className="text-xl font-black font-cinzel text-white uppercase mb-4">The Human Cost</h4>
                                <p className="text-sm text-zinc-500 italic mb-6">"How does this affect real survivors?"</p>
                                <div className="space-y-4">
                                    <Link href="/evidence/mckeever" className="text-xs text-[#8b1a1a] hover:text-white block tracking-widest uppercase">1. THE CASE STUDY</Link>
                                    <Link href="/origin/martin" className="text-xs text-[#8b1a1a] hover:text-white block tracking-widest uppercase">2. THE ORIGIN</Link>
                                    <Link href="/tips" className="text-xs text-[#8b1a1a] hover:text-white block tracking-widest uppercase">3. THE ACTION</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <JourneyNav />
        </div>
    );
}
