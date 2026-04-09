import React from 'react';
import { ConfidenceIndicator } from "@/components/ConfidenceIndicator";
import { SmartImage } from "@/components/SmartImage";
import { Link } from "wouter";
import { AlertTriangle, Mail, Users, ArrowRight, ExternalLink } from "lucide-react";

export default function EpsteinRuemmlerPivot() {
    return (
        <div className="bg-[#0a0a0a] text-[#e0e0e0] min-h-screen">
            {/* Hero Section */}
            <header className="relative py-24 px-4 border-b border-zinc-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10 grayscale">
                    <SmartImage src="/assets/mccarrick-netzwerk.jpg" alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-900/30 border border-red-900 rounded-full text-red-500 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
                        <AlertTriangle size={14} />
                        Exclusive Investigative Finding
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                        The Ruemmler-Epstein <br />
                        <span className="italic text-red-700">October Pivot</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        How the lead investigator of the Seton Hall seminary probe maintained a personal relationship
                        with Jeffrey Epstein while meeting with Newark's bishops.
                    </p>
                </div>
            </header>

            {/* The Evidence: The Emails */}
            <section className="py-20 px-4 bg-zinc-900/50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif mb-6 flex items-center gap-2">
                                <Mail className="text-red-700" />
                                The Email Chain
                            </h2>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Recovered from DOJ document releases, these communications between **Kathryn Ruemmler** (Latham & Watkins)
                                and "J" (**Jeffrey Epstein**) reveal intimate coordination in 2018-2019. At this exact moment,
                                Ruemmler was leading the "independent" probe into McCarrick’s network at Seton Hall.
                            </p>
                            <div className="space-y-4">
                                <div className="p-4 bg-black border-l-4 border-red-700 rounded-r shadow-lg">
                                    <p className="text-zinc-500 text-xs font-mono mb-1">Feb 27, 2019 10:28 AM</p>
                                    <p className="text-zinc-200 italic">"Maybe. I am trying to figure out whether I have to interview Bishops in Newark."</p>
                                    <p className="text-zinc-500 text-xs font-mono mt-2">— Kathryn Ruemmler to Jeffrey Epstein</p>
                                </div>
                                <div className="p-4 bg-black border-l-4 border-zinc-700 rounded-r shadow-lg">
                                    <p className="text-zinc-500 text-xs font-mono mb-1">Feb 27, 2019 11:25 AM</p>
                                    <p className="text-zinc-200 italic">"Meeting the Cardinal at 2 pm in Newark... Are you free @ 11 am if I came by then?"</p>
                                    <p className="text-zinc-500 text-xs font-mono mt-2">— Kathryn Ruemmler to Jeffrey Epstein</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-900/50 to-zinc-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative bg-zinc-900 border border-zinc-800 p-2 rounded-lg rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                                <SmartImage src="/assets/ruemmler-epstein-email.png" alt="Ruemmler Epstein Email" className="w-full h-auto rounded" />
                                <div className="mt-4 px-2 pb-2">
                                    <ConfidenceIndicator level="official" source="DOJ Evidence Release" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Paul Weiss Removal */}
            <section className="py-24 px-4 border-t border-zinc-800">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-6">
                        <div className="bg-red-900/10 p-4 rounded-full border border-red-900/20">
                            <Users className="text-red-700" size={32} />
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif mb-6">The October 2019 Paul Weiss Pivot</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                                In October 2019, **Brad Karp and Paul Weiss** removed themselves from the McCarrick investigation.
                                This strategic withdrawal created the vacuum for Kathryn Ruemmler and Latham & Watkins to assume
                                control of the probe. While positioned as a conflict-free successor, the DOJ documents now prove
                                that Ruemmler brought her own undisclosed — and far more radioactive — connections to the table.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded">
                                    <h3 className="text-red-700 font-bold uppercase tracking-widest text-xs mb-3">Before: Paul Weiss</h3>
                                    <p className="text-zinc-400 text-sm italic">"Brad Karp removes the firm from the investigation citing potential conflicts, leaving the seat open."</p>
                                </div>
                                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded">
                                    <h3 className="text-red-700 font-bold uppercase tracking-widest text-xs mb-3">After: Latham & Watkins</h3>
                                    <p className="text-zinc-400 text-sm italic">"Ruemmler takes over. The Perry Law Report is later commissioned, forming the basis of the concealment."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Overlay */}
            <section className="py-24 px-4 bg-black">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400 mb-16 text-center">Overlapping Realities</h2>
                    <div className="space-y-12">
                        {[
                            { date: "2018", event: "Ruemmler begins coordination with Epstein while Latham is retained for Seton Hall matters." },
                            { date: "Feb 2019", event: "Ruemmler meets Epstein in NYC hours before interviewing Newark bishops in NJ." },
                            { date: "Oct 2019", event: "Brad Karp/Paul Weiss withdraw. Ruemmler takes lead on McCarrick probe." },
                            { date: "2019 - 2023", event: "Epstein money identified in University accounts. Ruemmler's firm produces the 'No Evidence' reports." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-8 group">
                                <div className="w-24 shrink-0 font-mono text-xs text-red-700 font-bold pt-1">{item.date}</div>
                                <div className="flex-1 pb-12 border-l border-zinc-800 pl-8 relative">
                                    <div className="absolute top-2 -left-1.5 w-3 h-3 bg-red-700 rounded-full group-hover:scale-150 transition-transform"></div>
                                    <p className="text-xl font-light group-hover:text-white transition-colors capitalize">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Callout */}
            <section className="py-24 px-4 border-t border-zinc-800 bg-gradient-to-b from-black to-[#0a0a0a]">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="font-mono text-xs text-red-700 uppercase tracking-widest mb-4">The Methodology</p>
                    <p className="text-2xl font-serif italic mb-8">
                        "No other outlet identified this connection because they weren't looking.
                        SodomHall.com performed the forensic audit of the DOJ Epstein releases
                        against the Seton Hall institutional timeline to reveal the truth."
                    </p>
                    <Link href="/tips">
                        <a className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-all group">
                                Submit More Evidence
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    );
}
