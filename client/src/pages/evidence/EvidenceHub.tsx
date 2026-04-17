import React, { useState } from "react";
import { Link } from "wouter";
import MemoryPalaceCanvas from "@/components/MemoryPalaceCanvas";
import TriptychPortal from "@/components/TriptychPortal";
import { SEO } from "@/components/SEO";
import { Term } from "@/components/Term";
import LivingSymbol from "@/components/LivingSymbol";
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
                <div className="absolute inset-0 z-50 overflow-y-auto overflow-x-hidden bg-[#070709]">
                    <div className="fixed inset-0 bg-[url('/assets/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

                    {/* Simple Instructions Layer */}
                    <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-24 pb-32">
                        
                        <div className="text-center mb-24 px-4 max-w-4xl">
                            <h2 className="text-5xl md:text-7xl lg:text-9xl font-cinzel font-black uppercase tracking-tighter text-[#e2dacf] drop-shadow-2xl mb-8">
                                Sodom Hall
                            </h2>
                            <p className="font-mono text-sm md:text-base tracking-[0.4em] uppercase text-[#8b1a1a] border border-[#8b1a1a]/30 inline-block px-6 md:px-8 py-4 bg-[#8b1a1a]/10 mb-6 drop-shadow-md">
                                Hover over an artifact below to illuminate the dossier.
                            </p>
                        </div>

                        {/* Staggered Living Symbols (Containerless Void) */}
                        <div className="w-full max-w-7xl px-4 flex flex-col gap-32 md:gap-48 items-center overflow-visible">
                            
                            <div className="self-start md:ml-[10%]">
                                <LivingSymbol href="/whos-who" imageSrc="/assets/symbols/hook.png" title="The Newbie" description="Who is involved and what happened?" glowColor="#ef4444" />
                            </div>
                            
                            <div className="self-end md:mr-[10%]">
                                <LivingSymbol href="/vault" imageSrc="/assets/symbols/method_keyhole.png" title="The Deep Dive" description="Show me the 24,000 pages of filings." glowColor="#fbbf24" />
                            </div>

                            <div className="self-start md:ml-[15%]">
                                <LivingSymbol href="/evidence/mckeever" imageSrc="/assets/symbols/breach_eye.png" title="The Advocate" description="How does this affect the survivors?" glowColor="#8b1a1a" />
                            </div>
                            
                        </div>

                        {/* Traditional Navigation Backup Links */}
                        <div className="mt-40 pt-16 border-t border-white/10 w-full max-w-xl text-center space-y-6 px-4">
                            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Or view the classical directory:</p>
                            <Link
                                href="/evidence"
                                className="w-full block bg-black border border-zinc-800 hover:border-[#8b1a1a] hover:bg-[#8b1a1a]/10 text-zinc-400 hover:text-white transition-all py-6 font-mono uppercase tracking-[0.3em] text-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                            >
                                Enter The Map Room
                            </Link>
                            <button
                                onClick={() => setShowOnboarding(false)}
                                className="w-full block bg-transparent border border-zinc-900 hover:border-white/20 text-zinc-600 hover:text-zinc-300 transition-all py-4 font-mono uppercase tracking-widest text-xs cursor-pointer"
                            >
                                Explore raw 3D canvas
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
