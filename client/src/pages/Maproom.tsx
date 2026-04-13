import React from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

// --- CUSTOM MYSTICAL & CATHOLIC MNEMONIC SYMBOLS ---

const NurserySymbol = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        {/* Abstract Gothic Arch / Sacred Architecture */}
        <path d="M 20 90 L 20 40 Q 50 -10 80 40 L 80 90" />
        <path d="M 30 90 L 30 45 Q 50 10 70 45 L 70 90" />
        {/* Central Eye / Foundation */}
        <path d="M 40 60 Q 50 50 60 60 Q 50 70 40 60" />
        <circle cx="50" cy="60" r="2" fill="currentColor" />
        <path d="M 50 40 L 50 20" strokeDasharray="2 3" />
    </svg>
);

const MechanismSymbol = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        {/* Intersecting rings depicting institutional mechanics */}
        <circle cx="35" cy="50" r="25" />
        <circle cx="65" cy="50" r="25" fill="none" strokeDasharray="4 6" />
        <path d="M 50 20 L 50 80" />
        <path d="M 35 15 L 65 85" strokeDasharray="2 4" />
        {/* The failure point */}
        <path d="M 45 45 L 55 55 M 55 45 L 45 55" stroke="red" strokeWidth="2" />
    </svg>
);

const PersonaSymbol = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        {/* The Halo / Triquetra / Hierarchy */}
        <path d="M 50 15 L 85 75 L 15 75 Z" />
        <circle cx="50" cy="45" r="12" />
        <path d="M 50 57 L 50 75" />
        <circle cx="35" cy="75" r="8" strokeDasharray="2 2" />
        <circle cx="65" cy="75" r="8" strokeDasharray="2 2" />
    </svg>
);

const LedgerSymbol = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        {/* Abstract Papal Keys - The Financial Slush Fund */}
        <path d="M 25 75 L 70 30" />
        <circle cx="75" cy="25" r="8" />
        <path d="M 35 65 L 45 75 M 45 55 L 55 65" />
        
        <path d="M 25 25 L 70 70" />
        <circle cx="75" cy="75" r="8" fill="none" strokeDasharray="2 2" />
        <path d="M 35 35 L 45 25 M 45 45 L 55 35" />
    </svg>
);

const ShieldSymbol = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        {/* The Wall / Institutional Defense */}
        <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        <path d="M 50 15 L 50 85" />
        <path d="M 15 50 L 85 50" />
        <rect x="40" y="40" width="20" height="20" />
    </svg>
);

const PalaceSymbol = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
        {/* The Labyrinth / Tesseract */}
        <rect x="10" y="10" width="80" height="80" />
        <rect x="30" y="30" width="40" height="40" strokeDasharray="2 4" />
        <path d="M 10 10 L 30 30 M 90 10 L 70 30 M 10 90 L 30 70 M 90 90 L 70 70" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        <circle cx="50" cy="50" r="15" strokeDasharray="1 3" />
    </svg>
);

export default function Maproom() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-serif overflow-y-auto pb-32">
            <SEO 
                title="The Maproom | Sodom Hall" 
                description="The Master Schematic of the Cathedral Investigation." 
            />

            {/* The SCIF Terminal / Rollover Story */}
            <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto mb-24 relative bg-[#040504] border border-[#1a1f1a] shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col items-center justify-center md:min-h-[450px]">
                {/* CRT Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-20" />
                
                <div className="relative z-20 flex flex-col items-center space-y-20 w-full">
                    
                    {/* Node 1: SCIF */}
                    <div className="group relative cursor-crosshair w-full flex justify-center">
                        <div className="text-center group-hover:opacity-0 transition-opacity duration-300">
                            <span className="font-mono text-zinc-600 tracking-[0.4em] text-xs block mb-4 uppercase">Location</span>
                            <h1 className="text-7xl md:text-9xl font-sans font-black text-white tracking-widest uppercase">
                                S.C.I.F.
                            </h1>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="bg-black border border-white/20 p-8 w-full max-w-lg shadow-2xl">
                                <p className="font-mono text-zinc-300 text-sm md:text-base leading-relaxed text-center">
                                    <span className="text-white font-bold block mb-4 border-b border-white/20 pb-4 tracking-widest uppercase">Sensitive Compartmented Info. Facility</span>
                                    A physical vault utilized by Seton Hall to lock away internal abuse investigations. No electronics. No copies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full justify-center">
                        {/* Node 2: The Document */}
                        <div className="group relative cursor-crosshair flex-1 w-full max-w-[320px]">
                            <div className="border border-white/10 p-10 text-center group-hover:opacity-0 transition-opacity duration-300 bg-white/5">
                                <span className="font-mono text-zinc-600 tracking-[0.5em] text-[10px] block mb-6 uppercase">Payload</span>
                                <h2 className="font-mono text-zinc-300 tracking-[0.2em] text-2xl font-bold">LATHAM.DAT</h2>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 border border-white/30 p-8 shadow-2xl pointer-events-none">
                                <p className="font-mono text-white text-xs md:text-sm leading-relaxed text-center">
                                    <span className="text-[#d4a843] block mb-2 font-bold tracking-widest">24,000 PAGES</span>
                                    The definitive internal report identifying the complicit hierarchy. Legally suppressed to shield the powerful.
                                </p>
                            </div>
                        </div>

                        {/* Node 3: The Action */}
                        <div className="group relative cursor-crosshair flex-1 w-full max-w-[320px]">
                            <div className="border border-[#c41e1e]/20 p-10 text-center group-hover:opacity-0 transition-opacity duration-300 bg-[#c41e1e]/5">
                                <span className="font-mono text-[#c41e1e]/50 tracking-[0.5em] text-[10px] block mb-6 uppercase">Status</span>
                                <h2 className="font-mono text-[#c41e1e] font-black tracking-[0.2em] text-2xl animate-pulse">SEALED</h2>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#c41e1e] border border-[#ff3333] p-8 shadow-[0_0_40px_rgba(196,30,30,0.3)] pointer-events-none">
                                <p className="font-mono text-white font-black text-sm tracking-widest text-center uppercase leading-loose">
                                    [ Perimeter Breached ]<br/>
                                    Decrypting Directories...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Blueprint Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* Shell 1: The Nursery */}
                    <Link href="/about">
                        <motion.a 
                            whileHover={{ scale: 1.02 }}
                            className="group block border border-white/10 bg-[#0a0a0c] p-8 md:p-10 hover:bg-[#c41e1e]/5 hover:border-[#c41e1e]/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col cursor-pointer"
                        >
                            <div className="absolute -top-12 -right-12 text-white/5 group-hover:text-[#c41e1e]/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                <NurserySymbol className="w-56 h-56" />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#c41e1e] tracking-widest uppercase block mb-4 transition-colors">Shell 01</span>
                            <h2 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">The Nursery</h2>
                            <p className="font-mono text-zinc-400 text-xs md:text-sm tracking-wider uppercase leading-relaxed mb-8 flex-grow">
                                Foundation & Architecture. Who built the machine and the Silence Doctrine mapping.
                            </p>
                            <div className="font-mono font-bold text-xs tracking-[0.3em] text-[#c41e1e] uppercase">
                                [ Begin the Briefing ]
                            </div>
                        </motion.a>
                    </Link>

                    {/* Shell 2: The Mechanism */}
                    <Link href="/humpty">
                        <motion.a 
                            whileHover={{ scale: 1.02 }}
                            className="group block border border-white/10 bg-[#0a0a0c] p-8 md:p-10 hover:bg-[#c41e1e]/5 hover:border-[#c41e1e]/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col cursor-pointer"
                        >
                            <div className="absolute -top-12 -right-12 text-white/5 group-hover:text-[#c41e1e]/20 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                                <MechanismSymbol className="w-56 h-56" />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#c41e1e] tracking-widest uppercase block mb-4 transition-colors">Shell 02</span>
                            <h2 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">The Mechanism</h2>
                            <p className="font-mono text-zinc-400 text-xs md:text-sm tracking-wider uppercase leading-relaxed mb-8 flex-grow">
                                Humpty Dumpty Case Study. Exposing the structural failure and the Dr. Seuss parallel.
                            </p>
                            <div className="font-mono font-bold text-xs tracking-[0.3em] text-[#c41e1e] uppercase">
                                [ Execute Case Study ]
                            </div>
                        </motion.a>
                    </Link>

                    {/* Shell 3: Dramatis Personae */}
                    <Link href="/whos-who">
                        <motion.a 
                            whileHover={{ scale: 1.02 }}
                            className="group block border border-white/10 bg-[#0a0a0c] p-8 md:p-10 hover:bg-[#d4a843]/5 hover:border-[#d4a843]/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col cursor-pointer"
                        >
                            <div className="absolute -top-12 -right-12 text-white/5 group-hover:text-[#d4a843]/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                <PersonaSymbol className="w-56 h-56" />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#d4a843] tracking-widest uppercase block mb-4 transition-colors">Shell 03</span>
                            <h2 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Dramatis Personae</h2>
                            <p className="font-mono text-zinc-400 text-xs md:text-sm tracking-wider uppercase leading-relaxed mb-8 flex-grow">
                                Ringleaders, Enablers, and the Legal Wall. The institutional personnel dossiers.
                            </p>
                            <div className="font-mono font-bold text-xs tracking-[0.3em] text-[#d4a843] uppercase">
                                [ Open Directories ]
                            </div>
                        </motion.a>
                    </Link>

                    {/* Shell 4: Ledger */}
                    <Link href="/ledger">
                        <motion.a 
                            whileHover={{ scale: 1.02 }}
                            className="group block border border-white/10 bg-[#0a0a0c] p-8 md:p-10 hover:bg-[#c41e1e]/5 hover:border-[#c41e1e]/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col cursor-pointer"
                        >
                            <div className="absolute -top-12 -right-12 text-white/5 group-hover:text-[#c41e1e]/20 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                                <LedgerSymbol className="w-56 h-56" />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#c41e1e] tracking-widest uppercase block mb-4 transition-colors">Shell 04</span>
                            <h2 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">The Ledger</h2>
                            <p className="font-mono text-zinc-400 text-xs md:text-sm tracking-wider uppercase leading-relaxed mb-8 flex-grow">
                                Forensic financial audit. Tracing the McCarrick slush fund and payout mechanics.
                            </p>
                            <div className="font-mono font-bold text-xs tracking-[0.3em] text-[#c41e1e] uppercase">
                                [ Analyze Finances ]
                            </div>
                        </motion.a>
                    </Link>

                    {/* Shell 5: Legal Shield */}
                    <Link href="/breach/hub">
                        <motion.a 
                            whileHover={{ scale: 1.02 }}
                            className="group block border border-white/10 bg-[#0a0a0c] p-8 md:p-10 hover:bg-[#c41e1e]/5 hover:border-[#c41e1e]/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col cursor-pointer"
                        >
                            <div className="absolute -top-12 -right-12 text-white/5 group-hover:text-[#c41e1e]/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                <ShieldSymbol className="w-56 h-56" />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#c41e1e] tracking-widest uppercase block mb-4 transition-colors">Shell 05</span>
                            <h2 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Legal Shield</h2>
                            <p className="font-mono text-zinc-400 text-xs md:text-sm tracking-wider uppercase leading-relaxed mb-8 flex-grow">
                                Court filings, litigation timelines, and the anatomy of the institutional defense.
                            </p>
                            <div className="font-mono font-bold text-xs tracking-[0.3em] text-[#c41e1e] uppercase">
                                [ Examine Filings ]
                            </div>
                        </motion.a>
                    </Link>

                    {/* Layer 3: The Jump Hub */}
                    <Link href="/palace">
                        <motion.a 
                            whileHover={{ scale: 1.02 }}
                            className="group block border-2 border-[#d4a843]/50 bg-[#d4a843]/10 p-8 md:p-10 hover:bg-[#d4a843]/20 hover:border-[#d4a843] transition-all duration-300 relative overflow-hidden h-full flex flex-col cursor-pointer shadow-[0_0_30px_rgba(212,168,67,0.1)] hover:shadow-[0_0_40px_rgba(212,168,67,0.25)]"
                        >
                            <div className="absolute -top-12 -right-12 text-white/10 group-hover:text-[#d4a843]/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-90">
                                <PalaceSymbol className="w-64 h-64" />
                            </div>
                            <span className="font-mono text-xs text-[#d4a843] tracking-widest uppercase block mb-4 animate-pulse">Level 3 Access</span>
                            <h2 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 text-white text-shadow-sm">The Memory Palace</h2>
                            <p className="font-mono text-zinc-300 text-xs md:text-sm tracking-wider uppercase leading-relaxed mb-8 flex-grow relative z-10">
                                The Jump Hub. The 3D WebGL hyperspace environment. Granular, multidimensional visualization of the shenanigans.
                            </p>
                            <div className="font-mono font-bold text-xs tracking-[0.3em] text-[#d4a843] uppercase flex items-center gap-4 relative z-10">
                                <PalaceSymbol className="w-4 h-4" /> [ Initialize Zoom ]
                            </div>
                        </motion.a>
                    </Link>

                </div>
            </div>
        </div>
    );
}
