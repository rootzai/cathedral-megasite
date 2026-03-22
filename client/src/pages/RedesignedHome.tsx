import React, { useState } from "react";
import { Link } from "wouter";
import ShieldDiagram from "@/components/ShieldDiagram";
import { RINGS } from "@/lib/data";
import PowerAxis from "@/components/PowerAxis";
import { SmartImage } from "@/components/SmartImage";
import TriptychPortal from "@/components/TriptychPortal";

export default function RedesignedHome() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif overflow-x-hidden">
            {/* BRAND NEW TRIPTYCH PORTAL */}
            <TriptychPortal />

            {/* SECTION 1: THE SHIELD (HERO) */}
            <section className="relative min-h-screen flex flex-col items-center justify-center p-6 border-b border-[#1a1a22] overflow-hidden">
                {/* Ambient glow behind the shield */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-red-900/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center mt-20">
                    <span className="text-[#8b1a1a] font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 block animate-fade-in drop-shadow-[0_0_10px_rgba(139,26,26,0.5)]">
                        The Architecture of Concealment
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 text-white leading-none tracking-tighter" style={{ textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
                        The Shield of <br className="md:hidden" />
                        <span className="text-[#8b1a1a]">Sodom Hall</span>
                    </h1>

                    {/* Altar Presentation of the Shield */}
                    <div className="w-full max-w-[900px] mx-auto relative mb-16">
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-[50px] border border-white/5 shadow-2xl scale-[1.02] -z-10" />
                        <ShieldDiagram />
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-[#888] leading-relaxed mb-12">
                            A forensic mapping of the six structural layers that protected Kenneth Martin for 40 years.
                            Each ring represents a redundant failure of accountability &mdash; from canon law to legislative capture.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/evidence">
                                <a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#8b1a1a] hover:border-[#8b1a1a] hover:shadow-[0_0_20px_rgba(139,26,26,0.4)] transition-all">
                                    Enter the Archives
                                </a>
                            </Link>
                            <Link href="/breach">
                                <a className="w-full sm:w-auto border border-[#1a1a22] bg-black/50 backdrop-blur text-[#888] px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:border-[#8b1a1a] hover:text-white transition-all">
                                    Active Litigation
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE POWER AXIS (SCROLL TIMELINE) */}
            <section className="py-24 px-6 border-b border-[#1a1a22] bg-[#0d0d10]">

                <div className="max-w-7xl mx-auto mb-12">
                    <PowerAxis />
                </div>
            </section>

            {/* SECTION 3: THE CRAWFORD NARRATIVE */}
            <section className="py-24 px-6 border-b border-[#1a1a22]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="prose prose-invert prose-crimson">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-[0.2em] mb-10">THE BREACH: Mark Crawford</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Mark Crawford is the reason the Shield is failing. Unlike the hundred of survivors before him,
                            Crawford's evidence exists across multiple rings—including Ring 3, the Financial Moat.
                        </p>
                        <p className="text-lg leading-relaxed mb-8">
                            In 2005, the institution attempted to pay Crawford $108,000 to sign a non-disclosure agreement.
                            <strong> He refused.</strong> Not only did he refuse, but he uncovered the institution's fatal error:
                            they had falsified his age in their internal registries to claim the statute of limitations had passed.
                        </p>
                        <Link href="/breach">
                            <a className="inline-block border-b-2 border-[#8b1a1a] pb-1 text-sm font-bold uppercase tracking-[0.2em] text-[#8b1a1a] hover:text-white hover:border-white transition-all">
                                Read the Crawford Deposition →
                            </a>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-fit">
                        <div className="bg-[#111116] border border-[#1a1a22] p-6">
                            <span className="text-[#8b1a1a] text-[10px] font-bold block mb-2">CASE ID</span>
                            <span className="text-xl font-bold text-white uppercase tabular-nums">15-CRA-2005</span>
                        </div>
                        <div className="bg-[#111116] border border-[#1a1a22] p-6">
                            <span className="text-[#8b1a1a] text-[10px] font-bold block mb-2">STATUS</span>
                            <span className="text-xl font-bold text-[#8b1a1a] uppercase animate-pulse">BREACHING</span>
                        </div>
                        <div className="col-span-2 bg-[#111116] border border-[#1a1a22] p-6 relative overflow-hidden group">
                            <SmartImage
                                src="/assets/power-axis-1.png"
                                alt="Forensic Evidence"
                                className="w-full h-auto opacity-30 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className="absolute top-6 left-6 right-6">
                                <span className="text-[#8b1a1a] text-[10px] font-bold block mb-2">EVIDENCE SCAN</span>
                                <span className="text-xs text-[#666] font-mono italic block uppercase">Ring 3 Correspondence — November 2005</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE VOCABULARY */}
            <section className="py-24 px-6 border-b border-[#1a1a22] bg-[#0d0d10]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-[0.2em] mb-6">Category Vocabulary</h2>
                        <p className="text-[#666] max-w-2xl mx-auto">To understand the shield, you must speak the language of its architects. Every euphemism was a brick in the wall.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { term: "Laundered", def: "The process of moving an abuser between parishes without informing local authorities, using 'clean' personnel files." },
                            { term: "Corporation Sole", def: "A legal entity where all assets are owned by one individual (the Bishop), shielding the institution from individual parish liability." },
                            { term: "The Vault", def: "A collection of 24,000 unsealed pages detailing the internal knowledge of the cover-up from 1960–2020." },
                            { term: "The Breach", def: "A specific forensic opening where institutional documentation contradicts public statements or legal filings." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-[#1a1a22] bg-[#0a0a0c] hover:border-[#8b1a1a]/50 transition-colors">
                                <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.3em] block mb-4">{item.term}</span>
                                <p className="text-sm text-[#888] leading-relaxed italic">"{item.def}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-16 px-6 bg-[#0a0a0c] border-t border-[#1a1a22] text-center">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[10px] font-bold text-[#333] uppercase tracking-[0.5em] block mb-8">Archbishop of Newark v. Multiple Claimants (2025)</span>
                    <div className="flex justify-center gap-12 text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">
                        <Link href="/about"><a className="hover:text-white">Imprint</a></Link>
                        <Link href="/corrections"><a className="hover:text-white">Corrections</a></Link>
                        <Link href="/academy"><a className="hover:text-white">Curriculum</a></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
