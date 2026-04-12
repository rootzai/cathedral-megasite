import React, { useState } from "react";
import { Link } from "wouter";
import MemoryPalaceCanvas from "@/components/MemoryPalaceCanvas";
import { SEO } from "@/components/SEO";
import { Term } from "@/components/Term";
import { Wind, Zap, Flame, Hash, Layers, Eye } from "lucide-react";

export default function EvidenceHub() {
    const [showOnboarding, setShowOnboarding] = useState(true);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            <SEO 
                title="The Architecture of Recall" 
                description="A massive, interactive 3D WebGL data representation of the Cathedral Megasite evidence." 
            />
            
            {/* The 3D Engine */}
            <MemoryPalaceCanvas />

            {/* The Gateway (Triptych + Onboarding) */}
            {showOnboarding && (
                <div className="absolute inset-0 z-50 flex items-start justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 overflow-y-auto">
                    <div className="max-w-6xl w-full border border-[#8b1a1a]/30 bg-[#050505] p-8 md:p-12 relative shadow-[0_0_80px_rgba(139,26,26,0.1)] mt-auto mb-auto md:mt-20 md:mb-20">
                        
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#8b1a1a]"></div>

                        <div className="text-center mb-12">
                            <span className="text-[#8b1a1a] font-mono text-xs uppercase tracking-[0.4em] font-black block mb-4 animate-pulse">
                                Cognitive Protocol Initialization
                            </span>
                            <h2 className="text-4xl md:text-5xl font-cinzel font-black uppercase tracking-widest text-white mb-6">
                                The Shield of Memory
                            </h2>
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
                                
                                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base font-sans mt-6">
                                    {/* Row 1 */}
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
                                        "Unwonted illustration." Bizarre, extreme visualizations force permanent retention.
                                    </li>
                                    {/* Row 2 */}
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
                        
                        {/* THE TRIPTYCH */}
                        <div className="mb-16">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-8 border border-white/10 bg-black/60 hover:border-zinc-500 transition-all group">
                                    <span className="text-xs font-black font-mono text-zinc-500 uppercase tracking-widest block mb-4 group-hover:text-white transition-colors">PATH 01 // THE NEWBIE</span>
                                    <h4 className="text-2xl font-black font-cinzel text-white uppercase mb-4">Start Here</h4>
                                    <p className="text-sm text-zinc-400 italic mb-8 h-10">"I'm new. Who is involved and what happened?"</p>
                                    <div className="space-y-4">
                                        <Link href="/about" className="text-xs text-[#8b1a1a] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">1. THE MISSION</Link>
                                        <Link href="/whos-who" className="text-xs text-[#8b1a1a] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">2. THE PEOPLE</Link>
                                        <Link href="/origin/martin" className="text-xs text-[#8b1a1a] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors">3. THE LATHAM ORIGIN</Link>
                                    </div>
                                </div>
                                <div className="p-8 border border-white/10 bg-black/60 hover:border-zinc-500 transition-all group">
                                    <span className="text-xs font-black font-mono text-zinc-500 uppercase tracking-widest block mb-4 group-hover:text-white transition-colors">PATH 02 // THE LEGALIST</span>
                                    <h4 className="text-2xl font-black font-cinzel text-white uppercase mb-4">The Deep Dive</h4>
                                    <p className="text-sm text-zinc-400 italic mb-8 h-10">"I want the records. Show me the filings and the <Term id="Michael Critchley">Critchley Shield</Term>."</p>
                                    <div className="space-y-4">
                                        <Link href="/ruling/breach" className="text-xs text-[#8b1a1a] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">1. THE BREACH</Link>
                                        <Link href="/ruling/vault" className="text-xs text-[#8b1a1a] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">2. THE VAULT</Link>
                                        <Link href="/ruling/ledger" className="text-xs text-[#8b1a1a] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors">3. THE RECORD</Link>
                                    </div>
                                </div>
                                <div className="p-8 border border-[#8b1a1a]/30 bg-[#8b1a1a]/5 hover:border-[#8b1a1a] transition-all group shadow-[0_0_30px_rgba(139,26,26,0.05)]">
                                    <span className="text-xs font-black font-mono text-[#8b1a1a] uppercase tracking-widest block mb-4 group-hover:text-[#ff4444] transition-colors">PATH 03 // THE ADVOCATE</span>
                                    <h4 className="text-2xl font-black font-cinzel text-white uppercase mb-4">The Human Cost</h4>
                                    <p className="text-sm text-zinc-400 italic mb-8 h-10">"How does this affect real survivors?"</p>
                                    <div className="space-y-4">
                                        <Link href="/evidence/mckeever" className="text-xs text-[#8b1a1a] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">1. THE LARA MCKEEVER CASE</Link>
                                        <Link href="/endgame/mccarrick" className="text-xs text-[#8b1a1a] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors border-b border-white/5 pb-2">2. THE MCCARRICK MECHANISM</Link>
                                        <Link href="/tips" className="text-xs text-[#8b1a1a] hover:text-white block tracking-[0.2em] uppercase font-bold transition-colors">3. TAKE ACTION</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ENTER THE VOID PROTOCOL */}
                        <div className="border-t border-[#8b1a1a]/20 pt-10">
                            <h3 className="text-xl font-cinzel font-black uppercase text-center text-white mb-4 tracking-widest">Or Formulate Your Own Map</h3>
                            <button 
                                onClick={() => setShowOnboarding(false)}
                                className="w-full relative group overflow-hidden bg-black border border-[#8b1a1a] text-white transition-all py-6 md:py-8 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-[#8b1a1a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                <div className="relative z-10 flex flex-col items-center justify-center">
                                    <span className="font-black font-cinzel uppercase tracking-[0.3em] text-lg md:text-xl md:mb-2 text-[#8b1a1a] group-hover:text-black">
                                        [ ACCESS THE 3D MEMORY PALACE ]
                                    </span>
                                    <span className="font-mono text-xs text-zinc-500 tracking-[0.4em] uppercase group-hover:text-black/70">
                                        Descend into the Garden of Good and Evil
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
