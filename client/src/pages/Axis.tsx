import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import PowerAxis from "@/components/PowerAxis";

export default function Axis() {
    return (
        <div className="min-h-screen bg-[#070709] text-[#c8bdb0] font-serif overflow-x-hidden selection:bg-red-900/30 py-12">
            <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-[#070709] to-transparent">
                <Link href="/" className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors font-mono uppercase tracking-[0.3em] text-sm font-bold">
                        <ArrowLeft className="w-5 h-5" /> Return to Hub
                </Link>
            </div>

            <main className="max-w-7xl mx-auto px-6 space-y-20 pt-16">
                <div className="text-center space-y-4">
                    <span className="text-amber-500 font-black text-sm uppercase tracking-[0.6em] font-courier">From Bayonne to the Vatican</span>
                    <h1 className="text-5xl md:text-[8rem] font-black font-cinzel text-white leading-none uppercase tracking-tighter drop-shadow-2xl">THE POWER AXIS</h1>
                    <p className="text-white font-serif italic text-3xl max-w-3xl mx-auto mt-12 leading-relaxed">
                        A parish priest has two rings of protection. A Cardinal has six — plus the networks that converge at maximum altitude.
                    </p>
                </div>
                <PowerAxis />
                <p className="text-center text-red-500 font-mono text-xl md:text-2xl font-black uppercase tracking-[0.2em] max-w-5xl mx-auto py-12 px-8 bg-red-950/20 border-t-2 border-b-2 border-red-900/40 mt-20 italic">
                    Updated 2026: Node 5 includes Ruemmler / Epstein / September email / Goldman resignation.
                </p>
            </main>
        </div>
    );
}
