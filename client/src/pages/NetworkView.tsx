import React from 'react';
import { motion } from 'framer-motion';
import McCarrickNetwork from '@/components/McCarrickNetwork';
import { Shield, Info, ArrowLeft, Activity } from 'lucide-react';
import { useLocation } from 'wouter';

export default function NetworkView() {
    const [, setLocation] = useLocation();

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#8b1a1a]/30 overflow-hidden relative">
            {/* GRID OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            {/* HEADER / HUD */}
            <header className="relative z-50 p-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-end">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-[#8b1a1a] animate-pulse rounded-full" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8b1a1a]">
                            Live Intelligence Feed // The Archive
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold uppercase tracking-tighter">
                        The McCarrick <span className="text-[#8b1a1a]">Network</span> Map
                    </h1>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-2">
                        Forensic Visualization of the Architecture of Protection
                    </p>
                </div>

                <div className="flex gap-4">
                    <button 
                        onClick={() => setLocation('/')}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                    >
                        <ArrowLeft className="w-3 h-3" /> Exit Situation Room
                    </button>
                    <div className="px-6 py-3 bg-[#8b1a1a]/10 border border-[#8b1a1a]/40 text-[#8b1a1a] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                        <Activity className="w-3 h-3" /> Secure Connection
                    </div>
                </div>
            </header>

            <main className="relative z-10 p-8 h-[calc(100vh-140px)] flex gap-8">
                {/* LEFT SIDEBAR: INTELLIGENCE BRIEF */}
                <aside className="w-80 flex flex-col gap-6 overflow-y-auto pr-4 scrollbar-hide">
                    <section className="bg-white/5 border border-white/10 p-6">
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#8b1a1a] mb-4 flex items-center gap-2">
                            <Info className="w-3 h-3" /> Intelligence Brief
                        </h2>
                        <p className="text-sm text-white/60 leading-relaxed mb-4">
                            This map visualizes the **relational geometry** of the Cover-up. It tracks how ecclesiastical power, legal force, and board governance converged to protect Cardinal McCarrick for over four decades.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tighter text-white/40">
                                <div className="w-2 h-2 rounded-full bg-[#8b1a1a]" /> Primary Mentor / Direct Link
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tighter text-white/40">
                                <div className="w-2 h-2 rounded-full bg-[#d4af37]" /> Institutional Governance
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tighter text-white/40">
                                <div className="w-2 h-2 rounded-full bg-[#4682b4]" /> Legal Shield / Defense
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#8b1a1a]/5 border border-[#8b1a1a]/20 p-6">
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#8b1a1a] mb-4 flex items-center gap-2">
                            <Shield className="w-3 h-3" /> The Complicity Factor
                        </h2>
                        <p className="text-[10px] text-white/60 uppercase leading-relaxed">
                            Nodes are interconnected via directed edges representing specific actions (Appointments, Legal Coordination, Metadata Suppression). Click any node to unseal the forensic dossier.
                        </p>
                    </section>

                    <div className="mt-auto pt-8 border-t border-white/5">
                        <span className="text-[8px] text-white/20 uppercase tracking-[0.3em]">
                            System V1.2 // Nano Pro Engine
                        </span>
                    </div>
                </aside>

                {/* CENTRAL VISUALIZATION */}
                <div className="flex-1 bg-black/40 border border-white/5 rounded-3xl relative overflow-hidden flex items-center justify-center shadow-inner">
                    <McCarrickNetwork />
                    
                    {/* CORNER ACCENTS */}
                    <div className="absolute top-8 left-8 text-[8px] font-mono text-white/20 uppercase vertical-text">
                        Coordinate System: Global Network
                    </div>
                    <div className="absolute bottom-8 right-8 text-[8px] font-mono text-white/20 uppercase">
                        Archive // Reference: SHU-2024-MC
                    </div>
                </div>
            </main>

            {/* BACKGROUND ATMOSPHERE */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#8b1a1a]/5 to-transparent pointer-events-none" />
        </div>
    );
}
