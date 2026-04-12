import React, { useState } from "react";
import { Link } from "wouter";
import { MoveRight, Shield, ShieldAlert, Search, Fingerprint, Eye, Code, BrainCircuit, Crosshair } from "lucide-react";

export default function OnboardingOverlay({ onDismiss, onStart }: { onDismiss: () => void, onStart?: () => void }) {
    const [onboardingStep, setOnboardingStep] = useState(1);
    const [isVisible, setIsVisible] = useState(true);

    const handleStart = () => {
        setOnboardingStep(2);
    };

    const handleDismissLocal = () => {
        setIsVisible(false);
        onDismiss();
    };

    if (!isVisible) return null;

    return (
        <div className="absolute inset-0 z-50 pointer-events-none">
            
            {/* STEP 1: Hero Welcome Cinematic Bar */}
            {onboardingStep === 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[96%] max-w-6xl flex flex-col md:flex-row items-center justify-between px-6 py-4 md:px-10 md:py-4 border border-white/5 bg-black/85 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-1000 delay-500 fill-mode-both pointer-events-auto rounded-2xl">
                    
                    <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 text-center md:text-left mb-4 md:mb-0">
                        <div className="md:border-r border-[#8b1a1a]/30 md:pr-6">
                            <span className="text-zinc-500 text-[10px] tracking-[0.4em] block mb-1 uppercase font-mono">Welcome to</span>
                            <h1 className="text-3xl md:text-4xl font-cinzel font-black uppercase tracking-widest text-[#8b1a1a] leading-none text-shadow-sm">
                                The Cathedral
                            </h1>
                        </div>
                        
                        <p className="text-xs md:text-sm text-zinc-300 font-mono tracking-widest uppercase">
                            A forensic memory palace.
                        </p>
                    </div>

                    <button 
                        onClick={handleStart}
                        className="group relative overflow-hidden bg-black hover:bg-[#0a0000] border border-[#8b1a1a]/50 hover:border-[#8b1a1a] transition-all duration-500 py-3 px-8 md:px-10 shadow-[0_0_15px_rgba(139,26,26,0.15)] hover:shadow-[0_0_30px_rgba(139,26,26,0.5)] rounded-full shrink-0"
                    >
                        <div className="absolute inset-0 bg-[#8b1a1a]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <div className="relative z-10 flex items-center justify-center gap-3">
                            <span className="font-mono font-bold text-xs uppercase tracking-[0.3em] text-[#8b1a1a] group-hover:text-white transition-colors">
                                Initialize Protocol
                            </span>
                            <MoveRight className="w-5 h-5 text-[#8b1a1a] group-hover:text-white transition-all group-hover:translate-x-2" />
                        </div>
                    </button>
                </div>
            )}

            {/* STEP 2: Choose Your Mystery */}
            {onboardingStep === 2 && (
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-black/60 backdrop-blur-md z-50 pointer-events-auto transition-all duration-700">
                    <div className="max-w-6xl w-full animate-in fade-in zoom-in-95 duration-700 mt-auto mb-auto md:mt-10 md:mb-10">
                        <div className="text-center mb-10 md:mb-16 inline-block md:block">
                            <span className="text-[#8b1a1a] font-mono text-xs uppercase tracking-[0.4em] font-black block mb-3 animate-pulse">
                                Target Selection Required
                            </span>
                            <h2 className="text-4xl md:text-5xl font-cinzel font-black uppercase tracking-widest text-white drop-shadow-lg">
                                Choose Your Mystery
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
                            
                            {/* Path 1: The Newbie */}
                            <div className="border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-md hover:border-[#8b1a1a]/50 p-8 md:p-10 flex flex-col group transition-all duration-500 shadow-xl hover:shadow-[#8b1a1a]/20">
                                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:border-[#8b1a1a]/50 group-hover:bg-[#8b1a1a]/10 transition-colors">
                                    <Search className="w-5 h-5 text-zinc-400 group-hover:text-[#8b1a1a]" />
                                </div>
                                <span className="text-xs font-black font-mono text-zinc-500 uppercase tracking-widest block mb-2 group-hover:text-zinc-400 transition-colors">Class: Investigator</span>
                                <h4 className="text-3xl font-black font-cinzel text-white uppercase mb-4">The Newbie</h4>
                                <p className="text-base md:text-lg text-zinc-400 italic mb-8 flex-grow leading-relaxed">"I'm new. Who is involved and what exactly happened?"</p>
                                
                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-widest leading-normal"><Fingerprint className="w-4 h-4 text-[#8b1a1a]"/> Discover the origins</div>
                                    <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-widest leading-normal"><Eye className="w-4 h-4 text-[#8b1a1a]"/> Identify key players</div>
                                </div>

                                <Link href="/about" className="w-full">
                                    <button className="w-full py-5 bg-white/5 hover:bg-[#8b1a1a] text-[#8b1a1a] hover:text-white border border-[#8b1a1a]/30 transition-all font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                                        Start Here
                                    </button>
                                </Link>
                            </div>

                            {/* Path 2: The Legalist */}
                            <div className="border border-[#8b1a1a]/50 bg-[#0a0a0c]/90 backdrop-blur-md p-8 md:p-10 flex flex-col group transition-all duration-500 shadow-[0_0_40px_rgba(139,26,26,0.15)] relative scale-100 hover:-translate-y-2">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#8b1a1a] shadow-[0_0_10px_rgba(139,26,26,0.5)]"></div>
                                <div className="w-12 h-12 rounded-full border border-[#8b1a1a]/50 bg-[#8b1a1a]/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(139,26,26,0.2)]">
                                    <ShieldAlert className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xs font-black font-mono text-[#8b1a1a] uppercase tracking-widest block mb-2">Class: Forensic Auditor</span>
                                <h4 className="text-3xl font-black font-cinzel text-white uppercase mb-4 text-shadow-sm">The Deep Dive</h4>
                                <p className="text-base md:text-lg text-zinc-300 italic mb-8 flex-grow leading-relaxed">"Show me the filings. Explain how the Critchley Shield functioned."</p>
                                
                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-zinc-400 uppercase tracking-widest leading-normal"><Code className="w-4 h-4 text-[#8b1a1a]"/> Analyze the Breach</div>
                                    <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-zinc-400 uppercase tracking-widest leading-normal"><Shield className="w-4 h-4 text-[#8b1a1a]"/> Enter the Vault</div>
                                </div>

                                <Link href="/breach/hub" className="w-full">
                                    <button className="w-full py-5 bg-[#8b1a1a] hover:bg-white text-white hover:text-black transition-all font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(139,26,26,0.3)]">
                                        Access Records
                                    </button>
                                </Link>
                            </div>

                            {/* Path 3: The Advocate */}
                            <div className="border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-md hover:border-[#8b1a1a]/50 p-8 md:p-10 flex flex-col group transition-all duration-500 shadow-xl hover:shadow-[#8b1a1a]/20">
                                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:border-[#8b1a1a]/50 group-hover:bg-[#8b1a1a]/10 transition-colors">
                                    <Crosshair className="w-5 h-5 text-zinc-400 group-hover:text-[#8b1a1a]" />
                                </div>
                                <span className="text-xs font-black font-mono text-zinc-500 uppercase tracking-widest block mb-2 group-hover:text-zinc-400 transition-colors">Class: Truth Seeker</span>
                                <h4 className="text-3xl font-black font-cinzel text-white uppercase mb-4">The Human Cost</h4>
                                <p className="text-base md:text-lg text-zinc-400 italic mb-8 flex-grow leading-relaxed">"I want to see the real testimonies. How does this affect victims?"</p>
                                
                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-widest leading-normal"><Fingerprint className="w-4 h-4 text-[#8b1a1a]"/> Lara McKeever Case</div>
                                    <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-widest leading-normal"><BrainCircuit className="w-4 h-4 text-[#8b1a1a]"/> The McCarrick Mechanism</div>
                                </div>

                                <Link href="/evidence/mckeever" className="w-full">
                                    <button className="w-full py-5 bg-white/5 hover:bg-[#8b1a1a] text-[#8b1a1a] hover:text-white border border-[#8b1a1a]/30 transition-all font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                                        Examine Truth
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Skip / Direct Access */}
                        <div className="text-center mt-12 mb-6 pointer-events-auto inline-block bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5">
                            <button 
                                onClick={handleDismissLocal}
                                className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-colors"
                            >
                                [ Enter 3D Free-Roam ]
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
