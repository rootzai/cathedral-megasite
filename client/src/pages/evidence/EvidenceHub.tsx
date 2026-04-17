import React, { useState } from "react";
import { Link } from "wouter";
import MemoryPalaceCanvas from "@/components/MemoryPalaceCanvas";
import TriptychPortal from "@/components/TriptychPortal";
import { SEO } from "@/components/SEO";
import { Term } from "@/components/Term";
import { Wind, Zap, Flame, Hash, Layers, Eye, ArrowRight, AlertTriangle } from "lucide-react";

export default function EvidenceHub() {
    const [showOnboarding, setShowOnboarding] = useState(true);
    const [showProtocols, setShowProtocols] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            <SEO
                title="The Architecture of Recall"
                description="A massive, interactive 3D WebGL data representation of the Cathedral Megasite evidence."
            />

            <TriptychPortal />

            {/* The 3D Engine */}
            <MemoryPalaceCanvas />

            {/* The Gateway (Triptych + Onboarding) */}
            {showOnboarding && (
                <div className="absolute inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8 overflow-y-auto">
                    {/* Cathedral Nave atmospheric layers */}
                    <img src="/assets/cathedral/cathedral_interior_wide.jpg" alt="" className="fixed inset-0 w-full h-full object-cover opacity-[0.15] select-none pointer-events-none" />
                    <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(180,140,60,0.08)_0%,_transparent_50%)] pointer-events-none" />
                    <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(139,26,26,0.12)_100%)] pointer-events-none" />
                    <div className="fixed inset-0 bg-[url('/assets/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

                    {/* Pinned Action Text */}
                    <div className="fixed top-6 right-6 md:top-8 md:right-12 z-[60]">
                        <Link href="/evidence" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-xs md:text-sm font-mono uppercase tracking-widest transition-colors bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full cursor-pointer">
                            Skip / Enter Site <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="max-w-6xl w-full border border-[#8b1a1a]/30 bg-[#050505] p-6 md:p-12 relative shadow-[0_0_80px_rgba(139,26,26,0.1)] mt-auto mb-auto md:mt-20 md:mb-20">

                        <div className="absolute top-0 left-0 w-1 h-full bg-[#8b1a1a]"></div>

                        {/* WHAT IS THIS — Plain language summary (Tier 1a) */}
                        <div className="mb-8 md:mb-12">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-black uppercase tracking-widest text-white mb-8 text-center">
                                Sodom Hall
                            </h2>
                            <div className="max-w-3xl mx-auto space-y-5 text-zinc-200 font-serif text-lg md:text-xl leading-relaxed text-center">
                                <p>
                                    This is an <strong className="text-white">independent investigation</strong> into how Seton Hall University and the Archdiocese of Newark concealed decades of clergy sexual abuse. It is sourced from court filings, the Vatican McCarrick Report, the sealed Latham Report, and investigative journalism.
                                </p>
                                <p className="text-zinc-300 text-base md:text-lg font-bold">
                                    <a href="https://www.nj.gov/oag/newsreleases16/Clergy-Abuse-Grand-Jury-Report.pdf" target="_blank" rel="noopener" className="underline decoration-zinc-500 hover:decoration-white transition-colors">450+ survivors</a>. 24,000 pages of sealed evidence. Six years of suppression. This site is their public record.
                                </p>
                            </div>

                            {/* Skip link (Tier 1b) - Original removed as it's now pinned to the top right */}
                        </div>

                        {/* REILLY BANNER (Tier 1c) */}
                        <Link href="/ledger/reilly" className="block mb-8 md:mb-12 border border-[#8b1a1a]/50 bg-[#8b1a1a]/10 hover:bg-[#8b1a1a]/20 transition-all p-4 md:p-6 group">
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="w-5 h-5 text-[#8b1a1a] shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-[#ff4444] font-mono text-sm font-black uppercase tracking-widest block mb-2">CURRENT</span>
                                    <p className="text-zinc-100 text-base md:text-lg font-serif leading-relaxed">
                                        The sitting president of Seton Hall University was recommended for removal by the Latham Report. He was McCarrick&apos;s personal secretary. <span className="text-[#ff4444] group-hover:text-white font-bold transition-colors">Read the Reilly dossier &rarr;</span>
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* THE TRIPTYCH — Three paths */}
                        <div className="mb-8 md:mb-16">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                <div className="p-6 md:p-8 border border-white/10 bg-black/60 hover:border-zinc-500 transition-all group">
                                    <span className="text-sm font-black font-mono text-zinc-400 uppercase tracking-widest block mb-4 group-hover:text-white transition-colors">PATH 01 // THE NEWBIE</span>
                                    <h4 className="text-2xl md:text-3xl font-black font-cinzel text-white uppercase mb-4">Start Here</h4>
                                    <p className="text-base text-zinc-300 italic mb-6 md:mb-8 md:h-12">&quot;I&apos;m new. Who is involved and what happened?&quot;</p>
                                    <div className="space-y-4">
                                        <Link href="/about" className="text-sm text-[#ff4444] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">1. THE MISSION</Link>
                                        <Link href="/whos-who" className="text-sm text-[#ff4444] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">2. THE PEOPLE</Link>
                                        <Link href="/ledger/martin" className="text-sm text-[#ff4444] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors">3. THE LATHAM ORIGIN</Link>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 border border-white/10 bg-black/60 hover:border-zinc-500 transition-all group">
                                    <span className="text-sm font-black font-mono text-zinc-400 uppercase tracking-widest block mb-4 group-hover:text-white transition-colors">PATH 02 // THE LEGALIST</span>
                                    <h4 className="text-2xl md:text-3xl font-black font-cinzel text-white uppercase mb-4">The Deep Dive</h4>
                                    <p className="text-base text-zinc-300 italic mb-6 md:mb-8 md:h-12">&quot;I want the records. Show me the filings and the <Term id="Michael Critchley">Critchley Shield</Term>.&quot;</p>
                                    <div className="space-y-4">
                                        <Link href="/breach/hub" className="text-sm text-[#ff4444] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">1. THE BREACH</Link>
                                        <Link href="/vault" className="text-sm text-[#ff4444] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">2. THE VAULT</Link>
                                        <Link href="/ledger" className="text-sm text-[#ff4444] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors">3. THE RECORD</Link>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 border border-[#8b1a1a]/30 bg-[#8b1a1a]/5 hover:border-[#8b1a1a] transition-all group shadow-[0_0_30px_rgba(139,26,26,0.05)]">
                                    <span className="text-sm font-black font-mono text-[#ff4444] uppercase tracking-widest block mb-4 group-hover:text-[#ff6666] transition-colors">PATH 03 // THE ADVOCATE</span>
                                    <h4 className="text-2xl md:text-3xl font-black font-cinzel text-white uppercase mb-4">The Human Cost</h4>
                                    <p className="text-base text-zinc-300 italic mb-6 md:mb-8 md:h-12">&quot;How does this affect real survivors?&quot;</p>
                                    <div className="space-y-4">
                                        <Link href="/evidence/mckeever" className="text-sm text-[#ff4444] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">1. THE LARA MCKEEVER CASE</Link>
                                        <Link href="/ledger/mccarrick" className="text-sm text-[#ff4444] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">2. THE MCCARRICK MECHANISM</Link>
                                        <Link href="/tips" className="text-sm text-[#ff4444] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors">3. TAKE ACTION</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COGNITIVE PROTOCOLS — hidden on mobile, expandable (Tier 2a) */}
                        <div className="hidden md:block mb-12">
                            <div className="text-center mb-8">
                                <span className="text-[#8b1a1a] font-mono text-xs uppercase tracking-[0.4em] font-black block mb-4">
                                    The Shield of Memory
                                </span>
                                <div className="space-y-6 max-w-4xl mx-auto text-zinc-400 font-serif text-lg leading-relaxed text-left">
                                    <p className="italic">
                                        The institution&apos;s primary defensive architecture is induced amnesia. The cover-up thrives on structural gaslighting and the fabrication of events designed expressly to make the public forget. Here, <strong className="text-white">your memory is your only shield against coercion.</strong>
                                    </p>

                                    <div className="border border-[#8b1a1a]/30 bg-black/50 p-6 md:p-8 shadow-inner">
                                        <h3 className="text-[#8b1a1a] font-mono text-base uppercase tracking-widest mb-4 font-bold border-b border-[#8b1a1a]/30 pb-3">The Thessalian Paradigm</h3>
                                        <p className="text-base md:text-lg">
                                            Before the written word, human survival depended on spatial recall. When the roof of the Thessalian banquet hall collapsed, mangling the bodies of the guests beyond recognition, the poet Simonides identified the dead solely by tracing the spatial architecture of the hall in his mind.
                                            You are now entering a <strong className="text-white">Memory Palace</strong>. This is not a metaphor; it is how our minds are biologically built to preserve truth against eradication.
                                        </p>
                                    </div>
                                    <p className="text-base uppercase tracking-widest font-mono text-center pt-6">You have been granted SIX specific cognitive protocols:</p>

                                    <ul className="grid grid-cols-3 gap-6 text-base font-sans mt-6">
                                        <li className="bg-[#050505] border border-white/10 p-6">
                                            <Wind className="w-8 h-8 text-[#8b1a1a] mb-4" />
                                            <strong className="text-white uppercase tracking-widest block mb-2 text-sm font-black">I. Method of Loci</strong>
                                            The map is spatial. You do not read; you traverse. Data is locked to physical coordinates.
                                        </li>
                                        <li className="bg-[#050505] border border-white/10 p-6">
                                            <Zap className="w-8 h-8 text-[#8b1a1a] mb-4" />
                                            <strong className="text-white uppercase tracking-widest block mb-2 text-sm font-black">II. PAO System</strong>
                                            Complex abstractions are violently compressed into Person-Action-Object triggers in your HUD.
                                        </li>
                                        <li className="bg-[#050505] border border-[#8b1a1a]/30 shadow-[0_0_15px_rgba(139,26,26,0.1)] p-6">
                                            <Flame className="w-8 h-8 text-[#ff3333] mb-4" />
                                            <strong className="text-[#ff3333] uppercase tracking-widest block mb-2 text-sm font-black">III. Aquinas Effect</strong>
                                            &quot;Unwonted illustration.&quot; Bizarre, extreme visualizations force permanent retention.
                                        </li>
                                        <li className="bg-[#050505] border border-white/10 p-6">
                                            <Layers className="w-8 h-8 text-[#8b1a1a] mb-4" />
                                            <strong className="text-white uppercase tracking-widest block mb-2 text-sm font-black">IV. Extreme Chunking</strong>
                                            Raw financial aggregates and dates are bound into singular, highly distinct compound events.
                                        </li>
                                        <li className="bg-[#050505] border border-white/10 p-6">
                                            <Hash className="w-8 h-8 text-[#8b1a1a] mb-4" />
                                            <strong className="text-white uppercase tracking-widest block mb-2 text-sm font-black">V. The Major System</strong>
                                            Calculated phonetic translation. Sterile dates and subpoena figures convert into vivid imagery.
                                        </li>
                                        <li className="bg-[#050505] border border-white/10 p-6 shadow-[0_0_15px_rgba(139,26,26,0.05)]">
                                            <Eye className="w-8 h-8 text-amber-500 mb-4" />
                                            <strong className="text-amber-500 uppercase tracking-widest block mb-2 text-sm font-black">VI. Von Restorff Isolation</strong>
                                            The mind refuses to forget anomalies. Deliberate focus is placed on the most absurd, contradicting testimony.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Mobile: collapsible "Learn More" for protocols (Tier 2a) */}
                        <div className="md:hidden mb-8">
                            <button
                                onClick={() => setShowProtocols(!showProtocols)}
                                className="w-full text-center text-zinc-500 hover:text-white text-xs font-mono uppercase tracking-widest py-3 border border-white/10 transition-colors cursor-pointer"
                            >
                                {showProtocols ? "Hide" : "Show"} Memory Palace Guide
                            </button>
                            {showProtocols && (
                                <div className="mt-4 space-y-4 text-zinc-400 font-serif text-sm leading-relaxed">
                                    <p className="italic">
                                        The institution&apos;s primary defensive architecture is induced amnesia. Here, <strong className="text-white">your memory is your only shield against coercion.</strong>
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        This site uses the ancient &quot;Memory Palace&quot; technique — spatial architecture mapped to evidence — to make institutional abuse impossible to forget.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* MAP ROOM + 3D BUTTONS (Tier 1b — renamed) */}
                        <div className="border-t border-[#8b1a1a]/20 pt-8 space-y-4">
                            <Link
                                href="/evidence"
                                className="w-full block text-center bg-[#8b1a1a] hover:bg-white hover:text-black text-white transition-all py-5 md:py-6 font-black font-cinzel uppercase tracking-[0.3em] text-base md:text-lg"
                            >
                                [ OPEN THE MAP ROOM ]
                            </Link>
                            <button
                                onClick={() => setShowOnboarding(false)}
                                className="w-full relative group overflow-hidden bg-black border border-white/10 hover:border-zinc-500 text-white transition-all py-4 md:py-5 cursor-pointer"
                            >
                                <div className="relative z-10 flex flex-col items-center justify-center">
                                    <span className="font-mono uppercase tracking-[0.3em] text-sm text-zinc-500 group-hover:text-white transition-colors">
                                        Explore the 3D Memory Palace
                                    </span>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
