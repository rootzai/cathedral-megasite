import React, { useState } from "react";
import { Link } from "wouter";
import { MoveRight, Shield, ShieldAlert, Search, Fingerprint, Eye, Code, BrainCircuit, Crosshair } from "lucide-react";

export default function OnboardingOverlay({ onDismiss, onStart }: { onDismiss: () => void, onStart?: () => void }) {
    const [onboardingStep, setOnboardingStep] = useState(1);
    const [isVisible, setIsVisible] = useState(true);
    const handleStart = () => {
        try {
            const audio = new Audio('/assets/audio/drawer_slam.mp3');
            audio.volume = 0.6;
            audio.play().catch(() => { });
        } catch (e) { }

        handleDismissLocal();
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
                        <div className="md:border-r border-[#c41e1e]/50 md:pr-6 relative z-10 overflow-hidden">
                            {/* CRT Fuzz / Glitch pseudo-element */}
                            <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none"></div>
                            <span className="text-[#c41e1e] text-[10px] tracking-[0.4em] block mb-1 uppercase font-mono animate-pulse">Classified Archive Access</span>
                            <h1 className="text-3xl md:text-4xl font-cinzel font-black uppercase tracking-widest text-white leading-none drop-shadow-[0_0_10px_rgba(196,30,30,0.8)]">
                                The Cathedral
                            </h1>
                        </div>

                        <div className="flex flex-col gap-1 z-10">
                            <p className="text-xs md:text-sm text-zinc-300 font-mono tracking-[0.2em] uppercase border-l-2 border-[#c41e1e] pl-3">
                                14,000 pages of sealed evidence.
                            </p>
                            <p className="text-xs md:text-sm text-zinc-500 font-mono tracking-[0.2em] uppercase border-l-2 border-[#c41e1e]/30 pl-3">
                                3 decades of institutional silence.
                            </p>
                        </div>
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

        </div>
    );
}
