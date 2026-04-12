import React, { useState } from "react";
import { Link } from "wouter";
import MemoryPalaceCanvas from "@/components/MemoryPalaceCanvas";
import { SEO } from "@/components/SEO";
import { Term } from "@/components/Term";

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
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 overflow-y-auto">
                    <div className="max-w-6xl w-full border border-[#8b1a1a]/30 bg-[#050505] p-8 md:p-12 relative shadow-[0_0_80px_rgba(139,26,26,0.1)]">
                        
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#8b1a1a]"></div>

                        <div className="text-center mb-12">
                            <span className="text-[#8b1a1a] font-mono text-xs uppercase tracking-[0.4em] font-black block mb-4 animate-pulse">
                                Cognitive Protocol Initialization
                            </span>
                            <h2 className="text-4xl md:text-5xl font-cinzel font-black uppercase tracking-widest text-white mb-6">
                                The Shield of Memory
                            </h2>
                            <div className="space-y-4 max-w-4xl mx-auto text-zinc-400 font-serif text-lg leading-relaxed italic text-left md:text-center">
                                <p>
                                    The institution&apos;s primary defensive architecture is induced amnesia. The cover-up thrives on structural gaslighting and the fabrication of events designed expressly to make the public forget. Here, <strong className="text-white">your memory is your only shield against coercion.</strong>
                                </p>
                                <p>
                                    To combat this, we have mapped the unsealed archives into a continuous <strong className="text-[#ff4444]">Method of Loci</strong>. As you walk chronologically through this spatial palace, you will encounter massive mnemonic anchors. We bind these staggering abuses to extreme visual imagery and architectural loci, bypassing rote fatigue and forcing the cover-up permanently into your spatial recall.
                                </p>
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
