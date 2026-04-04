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
    Clock,
    Cross
} from "lucide-react";
import ShieldHub from "@/components/ShieldHub";
import { RINGS } from "@/lib/data";
import PowerAxis from "@/components/PowerAxis";
import { SmartImage } from "@/components/SmartImage";
import TriptychPortal from "@/components/TriptychPortal";
import { Level3EvidenceStream } from "@/components/Level3EvidenceStream";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ForensicSiteMap from "@/components/ForensicSiteMap";

export default function RedesignedHome() {
    const [isShieldOpen, setIsShieldOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif overflow-x-hidden">
            {/* BRAND NEW TRIPTYCH PORTAL */}
            <TriptychPortal />

            {/* SECTION 1: THE SHIELD (HERO) */}
            <section className="relative min-h-screen flex flex-col items-center justify-center p-6 border-b border-[#1a1a22] overflow-hidden">
                {/* Ambient glow behind the shield */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-red-900/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center mt-20">
                    <span className="text-[#8b1a1a] font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 block animate-fade-in drop-shadow-[0_0_10px_rgba(139,26,26,0.5)]">
                        The Architecture of Concealment
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-8 text-white leading-[0.85] tracking-tighter" style={{ textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
                        The House That <br />
                        <span className="text-[#8b1a1a]">McCarrick Built</span>
                    </h1>

                    <p className="text-[10px] font-bold text-white uppercase tracking-[0.5em] mb-12">
                        Authentic Forensic Record // Sodom Hall
                    </p>

                    {/* Altar Presentation of the Shield - Click to Open Modal */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="w-full max-w-[600px] mx-auto relative mb-16 cursor-pointer group">
                                <div className="absolute inset-0 bg-[#8b1a1a]/10 blur-[40px] rounded-full group-hover:bg-[#8b1a1a]/20 transition-all" />
                                <div className="relative border border-white/10 p-1 bg-black/40 backdrop-blur-sm rounded-[40px]">
                                    <img 
                                        src="/assets/shield-diagram-slide.jpeg" 
                                        alt="Click to Inspect the Shield" 
                                        className="w-full h-auto rounded-[35px] border border-white/5 group-hover:scale-[1.02] transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-[35px]">
                                        <div className="bg-red-900 text-white px-6 py-3 font-mono text-xs uppercase tracking-[0.4em] shadow-[0_0_20px_#8b1a1a]">
                                            Open Shield Hub
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] w-[1400px] max-h-[95vh] bg-black border-[#8b1a1a]/30 p-0 text-white overflow-y-auto shadow-[0_0_100px_rgba(139,26,26,0.2)] duration-75">
                            <ShieldHub />
                        </DialogContent>
                    </Dialog>
                    
                    <div className="max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-12 font-serif italic">
                            "The Architecture of Silence is constructed in concentric layers. To find the source, one must penetrate the five rings of institutional barrier."
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/evidence">
                                <a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#8b1a1a] hover:border-[#8b1a1a] hover:shadow-[0_0_20px_rgba(139,26,26,0.4)] transition-all">
                                    Enter the Archives
                                </a>
                            </Link>
                            <Link href="/governance">
                                <a className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#8b1a1a] hover:border-[#8b1a1a] hover:shadow-[0_0_20px_rgba(139,26,26,0.4)] transition-all">
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
                        <span className="text-[#8b1a1a] font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Institutional Hubris</span>
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
                                <span className="text-[8px] font-mono text-[#8b1a1a] uppercase rotate-90 whitespace-nowrap -ml-4">Audit Trace SHU-2005</span>
                                <div className="flex flex-col gap-2 pl-4">
                                    <div className="w-1 h-8 bg-[#8b1a1a]/40" />
                                    <div className="w-1 h-12 bg-white/20" />
                                    <div className="w-1 h-4 bg-red-600" />
                                </div>
                                <span className="text-[8px] font-mono text-[#444] uppercase rotate-90 whitespace-nowrap -ml-4">Terminal End</span>
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
                                <span className="text-xs text-[#666] font-mono italic block uppercase mb-4">Seton Hall Nexus // Registry Age Override — 2005</span>
                                <div className="space-y-2">
                                    <div className="w-full h-1 bg-[#8b1a1a]/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                                    </div>
                                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Scanning Ring 3 Financial Moat... [VALIDATED]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE SITE MAP */}
            <section id="sitemap">
                <ForensicSiteMap />
            </section>

            {/* FOOTER */}
            <footer className="py-16 px-6 bg-[#0a0a0c] border-t border-[#1a1a22] text-center">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[10px] font-bold text-[#333] uppercase tracking-[0.5em] block mb-8">Archbishop of Newark v. Multiple Claimants (2025)</span>
                    <div className="flex justify-center gap-12 text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">
                        <Link href="/about"><a className="hover:text-white">Imprint</a></Link>
                        <Link href="/corrections"><a className="hover:text-white">Corrections</a></Link>
                        <Link href="/academy"><a className="hover:text-white">Curriculum</a></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
