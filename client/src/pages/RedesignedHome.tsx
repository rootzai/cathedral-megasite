import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
    FolderDown, 
    ShieldAlert, 
    Archive, 
    Search, 
    Shield, 
    ArrowRight, 
    AlertCircle, 
    CheckCircle2, 
    XCircle,
    FileX,
    ChevronRight,
    Gavel,
    Activity
} from "lucide-react";
import ShieldDiagram from "@/components/ShieldDiagram";
import { RINGS } from "@/lib/data";
import PowerAxis from "@/components/PowerAxis";
import { SmartImage } from "@/components/SmartImage";
import TriptychPortal from "@/components/TriptychPortal";

export default function RedesignedHome() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif overflow-x-hidden">
            {/* BRAND NEW TRIPTYCH PORTAL */}
            <TriptychPortal />

            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden border-b border-[#1a1a22]">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-[url('/assets/images/cathedral-blueprint.jpg')] bg-cover bg-fixed opacity-30 grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c]/40 to-[#0a0a0c]" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#8b1a1a] font-bold text-xs md:text-sm uppercase tracking-[0.5em] mb-8 block font-mono"
                    >
                        Intelligence Dossier // Unsealed Archives
                    </motion.span>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-none mb-12"
                    >
                        THE HOUSE THAT<br />
                        <span className="text-[#8b1a1a]">MCCARRICK BUILT</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-5xl mx-auto text-xl md:text-3xl text-white font-light mb-16 px-4"
                    >
                        Seton Hall, the Newark Archdiocese, and the State of New Jersey: <br className="hidden md:block" />
                        A triangular machine of silence that protected the powerful <span className="text-[#8b1a1a] font-bold underline decoration-red-900/40">from the seminaries to the halls of Rome.</span>
                        <span className="text-white/70 text-base md:text-xl block mt-6 italic font-serif">
                             The unmasking of the organized and methodical coverup of priest sex abuse at scale.
                        </span>
                    </motion.p>


                    {/* Altar Presentation of the Shield */}
                    <div className="w-full max-w-[900px] mx-auto relative mb-16">
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-[50px] border border-white/5 shadow-2xl scale-[1.02] -z-10" />
                        <ShieldDiagram />
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-12">
                            A forensic mapping of the six structural layers that enforced institutional immunity for 40 years.
                            Each ring represents a redundant failure of accountability &mdash; from canon law to legislative capture.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/evidence">
                                <a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#8b1a1a] hover:border-[#8b1a1a] hover:shadow-[0_0_20px_rgba(139,26,26,0.4)] transition-all">
                                    Enter the Archives
                                </a>
                            </Link>
                            <Link href="/breach">
                                <a className="w-full sm:w-auto border border-[#1a1a22] bg-black/50 backdrop-blur text-zinc-400 px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:border-[#8b1a1a] hover:text-white transition-all">
                                    Active Litigation
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE POWER AXIS (SCROLL TIMELINE) */}
            <section className="py-24 px-6 border-b border-[#1a1a22] bg-[#0d0d10]">
                <div className="max-w-7xl mx-auto mb-12">
                    <PowerAxis />
                </div>
            </section>

            {/* SECTION 3: THE HUBRIS (THE MAIN EVENT) */}
            <section className="py-24 px-6 border-b border-[#1a1a22]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="prose prose-invert prose-crimson">
                        <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Hubris</span>
                        <h2 className="text-3xl font-bold text-white uppercase tracking-[0.2em] mb-10">THE HUBRIS: The Presidency of Monsignor Reilly</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            They didn't just hide him. They promoted him. The ultimate hubris of the "Shield" was the appointment of Msgr. Reilly as President of Seton Hall University—positioning an architect of silence at the head of a major institution as if no one would ever look inside the briefcase.
                        </p>
                        <p className="text-lg leading-relaxed mb-8">
                            It was the "hands in the cookie jar" moment. While Reilly maintained the facade of elite normalcy, a critical "Side Show" was occurring in the basement. <strong>Mark Crawford</strong>, a survivor who refused to be bought, recovered the forensic proof: the blatant falsification of internal age registries to weaponize the statute of limitations.
                        </p>
                        <Link href="/breach">
                            <a className="inline-block border-b-2 border-[#8b1a1a] pb-1 text-sm font-bold uppercase tracking-[0.2em] text-[#8b1a1a] hover:text-white hover:border-white transition-all">
                                Examine the Hubris Registry →
                            </a>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-fit relative">
                        {/* THE HUBRIS SIDEBAR (AUDIT LOG) */}
                        <div className="absolute -left-32 top-0 bottom-0 w-24 hidden xl:flex flex-col gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                            <div className="h-full border-l border-[#8b1a1a]/30 flex flex-col justify-between py-4">
                                <span className="text-xs font-mono text-[#8b1a1a] uppercase rotate-90 whitespace-nowrap -ml-4">Audit Trace SHU-2005</span>
                                <div className="flex flex-col gap-2 pl-4">
                                    <div className="w-1 h-8 bg-[#8b1a1a]/60" />
                                    <div className="w-1 h-12 bg-white/40" />
                                    <div className="w-1 h-4 bg-red-600" />
                                </div>
                                <span className="text-xs font-mono text-[#888] uppercase rotate-90 whitespace-nowrap -ml-4">Terminal End</span>
                            </div>
                        </div>

                        <div className="bg-[#111116] border border-[#1a1a22] p-6 relative group overflow-hidden text-left">
                            <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-[#8b1a1a] text-[10px] font-bold block mb-2 font-mono">CASE ID // HUBRIS-SHU</span>
                            <span className="text-xl font-bold text-white uppercase tabular-nums">PRESIDENCY-05</span>
                        </div>
                        <div className="bg-[#111116] border border-[#1a1a22] p-6 text-left">
                            <span className="text-zinc-600 text-[10px] font-bold block mb-2 font-mono">STATUS</span>
                            <span className="text-xl font-bold text-red-600 uppercase animate-pulse">INTERNAL BREACH</span>
                        </div>
                        <div className="col-span-2 bg-[#111116] border border-[#1a1a22] p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-end text-left">
                            {/* Forensic Document Fragments (Simulated via overlay) */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute top-10 left-10 w-32 h-40 bg-white/10 rotate-3 border border-white/20" />
                                <div className="absolute bottom-10 right-10 w-40 h-32 bg-white/10 -rotate-2 border border-white/20" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-[#8b1a1a]/10 border border-[#8b1a1a]/30" />
                            </div>

                            <div className="relative z-10">
                                <span className="text-[#8b1a1a] text-[10px] font-black block mb-2 tracking-[0.3em]">FORENSIC EVIDENCE SCAN</span>
                                <span className="text-xs text-zinc-400 font-mono italic block uppercase mb-4">Seton Hall Nexus // Registry Age Override — 2005</span>
                                <div className="space-y-2">
                                    <div className="w-full h-1 bg-[#8b1a1a]/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                                    </div>
                                    <p className="text-[10px] font-mono text-zinc-400 uppercase">Scanning Ring 3 Financial Moat... [VALIDATED]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE MATRIX OF COMPLICITY */}
            <section className="py-24 px-6 border-b border-[#1a1a22] bg-[#050507] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#8b1a1a] to-transparent" />
                    <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#8b1a1a] to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[1em] block mb-6"
                        >
                            The Enforcers
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                            Matrix of <br className="md:hidden" />
                            <span className="text-[#8b1a1a]">Complicity</span>
                        </h2>
                        <p className="text-[#666] text-lg md:text-xl max-w-3xl mx-auto font-light">
                            "Did you order the Code Red?" — The coordination between personal defense and institutional cleanup. 
                            Three architects, one wall of silence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a22] border border-[#1a1a22]">
                        {[
                            { 
                                name: "Kevin H. Marino", 
                                role: "The Board Enforcer", 
                                bio: "Chairman of the Board who directed the purging of Title IX logs and orchestrated the internal whitewash.",
                                highlight: "Purged Logs",
                                link: "/ledger#marino"
                            },
                            { 
                                name: "Christopher S. Porrino", 
                                role: "The State Hitman", 
                                bio: "Former NJ AG and Marino's personal lawyer. Coordinated the grand jury subpoena to unmask whistleblowers.",
                                highlight: "Grand Jury Subpoena",
                                link: "/ledger#porrino"
                            },
                            { 
                                name: "Thomas P. Scrivo", 
                                role: "The Institutional Cleaner", 
                                bio: "Former Christie Chief Counsel. Expert in metadata concealment. Blocked whistleblowers from testifying to the Cardinal.",
                                highlight: "Metadata Specialist",
                                link: "/ledger#scrivo"
                            }
                        ].map((villain, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0a0a0c] p-12 hover:bg-[#0d0d10] transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <FileX className="w-8 h-8 text-[#8b1a1a]" />
                                </div>
                                <span className="text-[#8b1a1a] font-mono text-xs uppercase tracking-widest block mb-4">Dossier Entry #{334 + i}</span>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 leading-none group-hover:text-[#8b1a1a] transition-colors">
                                    {villain.name}
                                </h3>
                                <p className="text-[#8b1a1a] text-sm font-bold uppercase tracking-widest mb-8">{villain.role}</p>
                                <div className="space-y-6 mb-12">
                                    <p className="text-[#bbb] text-base leading-relaxed font-light italic">
                                        "{villain.bio}"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                        <span className="text-xs text-zinc-300 font-mono uppercase tracking-widest">Target Intel: {villain.highlight}</span>
                                    </div>
                                </div>
                                <Link href={villain.link}>
                                    <a className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-[0.3em] hover:gap-4 transition-all">
                                        Examine Evidence <ChevronRight className="w-3 h-3 text-[#8b1a1a]" />
                                    </a>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 border border-[#1a1a22] bg-red-950/5 text-center">
                        <p className="text-[#8b1a1a] font-mono text-sm uppercase tracking-widest mb-4">Coordinated Maneuver Detected</p>
                        <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic">"The Six-Day Gap"</h4>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed mb-6">
                            December 11: Porrino threatens whistleblower. <br/>
                            December 17: Scrivo sends identical threat naming the whistleblower by identity obtained via secret subpoena. <br/>
                            <span className="text-white mt-4 block font-bold uppercase tracking-widest text-sm">Coordination: 100% // Complicity: Absolute</span>
                        </p>
                        <Link href="/network">
                            <a className="inline-flex items-center gap-3 px-8 py-4 bg-[#8b1a1a] text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all group">
                                <Activity className="w-4 h-4 animate-pulse" /> Launch Intelligence Map
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 5: THE VOCABULARY */}
            <section className="py-24 px-6 border-b border-[#1a1a22] bg-[#0d0d10]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-[0.2em] mb-6">Category Vocabulary</h2>
                        <p className="text-[#666] max-w-2xl mx-auto">To understand the shield, you must speak the language of its architects. Every euphemism was a brick in the wall.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { term: "Laundered", icon: FolderDown, def: "The process of moving an abuser between parishes without informing local authorities, using 'clean' personnel files." },
                            { term: "Corporation Sole", icon: ShieldAlert, def: "A legal entity where all assets are owned by one individual (the Bishop), shielding the institution from individual parish liability." },
                            { term: "The Vault", icon: Archive, def: "The unsealed-but-withheld 24,000 pages of the Latham Report. The document that wasn't there." },
                            { term: "The Code Red", icon: Gavel, def: "A coordinated multi-firm legal maneuver designed to unmask and silence whistleblowers through fabricated criminal fraud claims." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-[#1a1a22] bg-[#0a0a0c] hover:border-[#8b1a1a]/50 transition-all group text-left">
                                <item.icon className="w-5 h-5 text-[#8b1a1a] mb-6 group-hover:scale-110 transition-transform" />
                                <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.3em] block mb-4">{item.term}</span>
                                <p className="text-sm text-[#888] leading-relaxed italic">"{item.def}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-16 px-6 bg-[#0a0a0c] border-t border-[#1a1a22] text-center">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.5em] block mb-8">Archbishop of Newark v. Multiple Claimants (2025)</span>
                    <div className="flex justify-center gap-12 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                        <Link href="/about"><a className="hover:text-white">Imprint</a></Link>
                        <Link href="/corrections"><a className="hover:text-white">Corrections</a></Link>
                        <Link href="/academy"><a className="hover:text-white">Curriculum</a></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
