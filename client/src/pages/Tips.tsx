import React from "react";
import { TipSubmissionForm } from "@/components/TipSubmissionForm";
import { Shield, Lock, AlertCircle, Search, Zap, Send, AlertTriangle, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function TipsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] pt-32 pb-24 px-6 font-cormorant border-b border-white/5">
            <SEO 
                title="Submit Intelligence" 
                description="Securely share information regarding institutional misconduct. Protect your identity." 
            />
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-16 border-b border-[#8b1a1a]/30 pb-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#8b1a1a]/5 blur-3xl" />
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Zap className="w-5 h-5 text-[#8b1a1a] fill-[#8b1a1a]" />
                            <span className="font-courier text-xs text-[#8b1a1a] font-black uppercase tracking-[0.6em]">FORENSIC SIGNAL // SH-TIP-CORE</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black font-cinzel text-white uppercase tracking-tighter leading-none">
                            SUBMIT <span className="text-[#8b1a1a]">INTELLIGENCE</span>
                        </h1>
                        <p className="max-w-2xl text-xl md:text-2xl font-serif italic text-zinc-500 leading-relaxed">
                            "Secure, anonymous transmission of forensic data regarding institutional immunity, the 'Big Lie' strategy, and the Perry Law sham."
                        </p>
                        <p className="max-w-2xl text-lg text-white font-serif leading-relaxed mt-4">
                            If you work at Seton Hall, the Archdiocese of Newark, or any connected institution and have witnessed misconduct — this is where you tell us.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-20">
                    {/* The Form */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-b from-[#8b1a1a]/10 to-transparent blur-2xl opacity-50" />
                        <div className="relative bg-[#0D0D10] border border-white/5 p-1 px-1">
                            <TipSubmissionForm />
                        </div>
                    </div>

                    {/* Safety Protocols */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#070709] border border-white/5 p-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Lock className="w-5 h-5 text-[#8b1a1a]" />
                                <h4 className="font-cinzel text-lg font-black text-white uppercase tracking-widest">STEP 1: SECURE CONNECTION</h4>
                            </div>
                            <p className="text-sm text-zinc-600 font-serif leading-relaxed italic">
                                Use your own phone or computer—not a work device. If possible, use a 'VPN' to hide your location. Never use Seton Hall (SHU) or Church WiFi.
                            </p>
                        </div>
                        <div className="space-y-6 md:border-l md:border-white/5 md:pl-12">
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-[#8b1a1a]" />
                                <h4 className="font-cinzel text-lg font-black text-white uppercase tracking-widest">STEP 2: CLEAN YOUR FILES</h4>
                            </div>
                            <p className="text-sm text-zinc-600 font-serif leading-relaxed italic">
                                Remove your name or any identifying info from digital files before sending. If scanning paper, make sure the text is clear of any handwritten notes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-32 pt-12 border-t border-white/5 text-center">
                    <p className="text-xs font-courier text-zinc-800 font-black uppercase tracking-[0.5em]">
                         SH-2026 // AUTHORIZED RECONSTRUCTION // THE TRUTH HAS NO STATUTE
                    </p>
                </div>
            </div>
        </div>
    );
}
