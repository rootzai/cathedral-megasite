import React from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Shield, BookOpen, AlertCircle, FileText, Users, Orbit } from "lucide-react";
import { motion } from "framer-motion";

export default function Maproom() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-serif overflow-y-auto pb-32">
            <SEO 
                title="The Maproom | Sodom Hall" 
                description="The Master Schematic of the Cathedral Investigation." 
            />

            {/* The SCIF Terminal / Rosetta Stone */}
            <div className="pt-16 pb-12 px-6 md:px-12 max-w-7xl mx-auto mb-20 relative bg-[#040504] border border-[#1a1f1a] overflow-hidden shadow-2xl">
                {/* CRT Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-20" />
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-[#c41e1e]/30 pb-4 mb-8">
                    <span className="font-mono text-[#c41e1e] tracking-[0.2em] text-xs font-black uppercase flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#c41e1e] rounded-full animate-pulse shadow-[0_0_8px_rgba(196,30,30,1)]"></span>
                        TERMINAL ACTIVE // SCIF BREACH
                    </span>
                    <span className="font-mono text-zinc-600 text-xs tracking-widest hidden sm:block">
                        USER: UNAUTHORIZED
                    </span>
                </div>

                {/* SCIF Definition */}
                <div className="font-mono text-sm text-zinc-400 max-w-3xl mb-12 bg-black border border-white/5 p-6 rounded-sm">
                    <div className="flex items-start gap-4">
                        <span className="text-[#d4a843] shrink-0 font-bold">DEF. &gt;</span>
                        <p className="leading-loose">
                            <strong className="text-white text-base mr-2">S.C.I.F.</strong> 
                            <span className="text-zinc-500 mr-2">(Sensitive Compartmented Information Facility):</span> 
                            A highly secure room, proofed against electronic surveillance and physical breach. Typically used by federal intelligence agencies to review classified national security documents.
                        </p>
                    </div>
                </div>

                {/* Terminal Printout */}
                <div className="font-mono leading-relaxed space-y-6 max-w-4xl relative z-20">
                    <p className="text-white font-bold text-lg md:text-xl leading-snug">
                        <span className="text-zinc-500 mr-4">08-27-2019 //</span> 
                        Seton Hall University completes a 24,000-page internal investigation into decades of clergy abuse.
                    </p>
                    
                    <p className="text-zinc-400 text-base md:text-lg pl-8 border-l-2 border-[#1a1f1a]">
                        The massive <span className="text-white font-bold">Latham Report</span> definitively identified who knew, and who covered it up. To prevent discovery, the University locked the physical copies inside a secure vault—essentially a SCIF—where no copies could be made, no electronics were allowed, and no notes could be taken.
                    </p>

                    <p className="text-white font-bold text-base md:text-xl mt-8">
                        They suppressed the truth to protect the hierarchy over the innocent. 
                    </p>

                    <div className="mt-12 bg-[#c41e1e]/10 border border-[#c41e1e]/30 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                        <span className="text-[#c41e1e] tracking-[0.3em] font-black uppercase text-sm drop-shadow-[0_0_8px_rgba(196,30,30,0.5)]">
                            [ DECRYPTING DIRECTORIES ]
                        </span>
                        <span className="w-2 h-5 bg-[#c41e1e] animate-ping block"></span>
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
                            <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-[#c41e1e]/10 transition-colors">
                                <BookOpen className="w-48 h-48" strokeWidth={1} />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#c41e1e] tracking-widest uppercase block mb-4 transition-colors">Shell 01</span>
                            <h2 className="font-cinzel text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">The Nursery</h2>
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
                            <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-[#c41e1e]/10 transition-colors">
                                <AlertCircle className="w-48 h-48" strokeWidth={1} />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#c41e1e] tracking-widest uppercase block mb-4 transition-colors">Shell 02</span>
                            <h2 className="font-cinzel text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">The Mechanism</h2>
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
                            <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-[#d4a843]/10 transition-colors">
                                <Users className="w-48 h-48" strokeWidth={1} />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#d4a843] tracking-widest uppercase block mb-4 transition-colors">Shell 03</span>
                            <h2 className="font-cinzel text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Dramatis Personae</h2>
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
                            <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-[#c41e1e]/10 transition-colors">
                                <FileText className="w-48 h-48" strokeWidth={1} />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#c41e1e] tracking-widest uppercase block mb-4 transition-colors">Shell 04</span>
                            <h2 className="font-cinzel text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">The Ledger</h2>
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
                            <div className="absolute -top-10 -right-10 text-white/5 group-hover:text-[#c41e1e]/10 transition-colors">
                                <Shield className="w-48 h-48" strokeWidth={1} />
                            </div>
                            <span className="font-mono text-xs text-zinc-600 group-hover:text-[#c41e1e] tracking-widest uppercase block mb-4 transition-colors">Shell 05</span>
                            <h2 className="font-cinzel text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Legal Shield</h2>
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
                            <div className="absolute -top-10 -right-10 text-white/10 group-hover:text-[#d4a843]/20 transition-colors">
                                <Orbit className="w-48 h-48" strokeWidth={1} />
                            </div>
                            <span className="font-mono text-xs text-[#d4a843] tracking-widest uppercase block mb-4 animate-pulse">Level 3 Access</span>
                            <h2 className="font-cinzel text-2xl md:text-3xl font-black uppercase tracking-widest mb-4 text-white text-shadow-sm">The Memory Palace</h2>
                            <p className="font-mono text-zinc-300 text-xs md:text-sm tracking-wider uppercase leading-relaxed mb-8 flex-grow">
                                The Jump Hub. The 3D WebGL hyperspace environment. Granular, multidimensional visualization of the shenanigans.
                            </p>
                            <div className="font-mono font-bold text-xs tracking-[0.3em] text-[#d4a843] uppercase flex items-center gap-4">
                                <Orbit className="w-4 h-4" /> [ Initialize Zoom ]
                            </div>
                        </motion.a>
                    </Link>

                </div>
            </div>
        </div>
    );
}
