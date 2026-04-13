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

            {/* Cinematic Introduction / The Rosetta Stone */}
            <div className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#c41e1e]/30 mb-20 relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#c41e1e]/5 via-transparent to-transparent">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#c41e1e]" />
                
                <span className="font-mono text-[#c41e1e] tracking-[0.5em] uppercase text-sm font-black mb-6 block drop-shadow-lg">
                    [ PERIMETER BREACH COMPLETED ]
                </span>
                
                <h1 className="text-6xl md:text-[5rem] lg:text-[6rem] font-cinzel font-black uppercase text-white tracking-tighter leading-[0.85] max-w-5xl mb-12 drop-shadow-2xl">
                    THE ARCHITECTURE OF SILENCE
                </h1>
                
                <div className="font-serif text-[#e2dacf] max-w-3xl text-xl md:text-[1.35rem] leading-relaxed space-y-8">
                    <p className="font-bold text-white tracking-wide">
                        You have breached the Cathedral. This is the definitive, independent reconstruction of an institutional cover-up.
                    </p>
                    <p className="border-l-4 border-[#c41e1e] pl-6 text-[#d4a843] italic text-2xl font-medium">
                        "They engineered a labyrinth of non-disclosure agreements, suppressed reports, and legal shields to protect the hierarchy over the innocent. We dragged it into the light."
                    </p>
                    <p className="text-sm font-mono uppercase tracking-[0.3em] text-[#c41e1e] pt-6 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-[#c41e1e]"></span>
                        This is your Rosetta Stone. Select a dossier below to begin.
                    </p>
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
