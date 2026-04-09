import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import PowerAxis from "@/components/PowerAxis";

export default function Axis() {
    return (
        <div className="min-h-screen bg-[#070709] text-[#c8bdb0] font-serif overflow-x-hidden selection:bg-red-900/30 py-12">
            <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-[#070709] to-transparent">
                <Link href="/">
                    <a className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-mono uppercase tracking-widest text-xs">
                        <ArrowLeft className="w-4 h-4" /> Return to Hub
                    </a>
                </Link>
            </div>

            <main className="max-w-7xl mx-auto px-6 space-y-20 pt-16">
                <div className="text-center space-y-4">
                    <span className="text-[#8b6914] font-black text-[10px] uppercase tracking-[0.6em] font-courier">From Bayonne to the Vatican</span>
                    <h1 className="text-4xl md:text-6xl font-black font-cinzel text-white leading-none uppercase">THE POWER AXIS</h1>
                    <p className="text-zinc-500 font-serif italic text-lg max-w-2xl mx-auto mt-4">
                        A parish priest has two rings of protection. A Cardinal has six — plus the networks that converge at maximum altitude.
                    </p>
                </div>
                <PowerAxis />
                <p className="text-center text-red-500 font-mono text-sm md:text-lg font-bold uppercase tracking-widest max-w-4xl mx-auto py-6 px-4 bg-red-950/20 border border-red-900/30 rounded">
                    Updated 2026: Node 5 includes Ruemmler / Epstein / September email / Goldman resignation.
                </p>
            </main>
        </div>
    );
}
