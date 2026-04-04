import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
    Shield, 
    ArrowRight, 
    AlertCircle, 
    Search,
    Lock,
    Eye,
    Activity,
    Database,
    Zap
} from "lucide-react";
import ShieldHub from "@/components/ShieldHub";
import PowerAxis from "@/components/PowerAxis";
import TriptychPortal from "@/components/TriptychPortal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function RedesignedHome() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif overflow-x-hidden">
            {/* BRAND NEW TRIPTYCH PORTAL */}
            <TriptychPortal />

            {/* SECTION 1: THE BREACH STARTS HERE (HERO) */}
            <section className="relative min-h-screen flex flex-col items-center justify-center p-6 border-b border-red-900/20 overflow-hidden">
                {/* Visual Anchor: The Advocate Photo Background (Subtle) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none grayscale">
                    <img src="/assets/WhatsAppImage2025-10-11at11.40.16_e2ac3ebb.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-8 animate-fade-in">
                        <Zap className="w-4 h-4 text-red-600 fill-red-600" />
                        <span className="text-red-700 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.6em] block">
                            Historical Record SH-2025 // THE BREACH STARTS HERE
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-black mb-8 text-white leading-none tracking-tighter" style={{ textShadow: "0 10px 40px rgba(0,0,0,0.9)" }}>
                        The Case of <br />
                        <span className="text-red-900">Mark Crawford</span>
                    </h1>

                    <div className="max-w-3xl mx-auto mb-16">
                        <p className="text-xl md:text-2xl text-white leading-relaxed font-serif italic mb-6">
                            "The breach isn't a theory. It's a single biography. It's a survivor who refused to be bought, and an age registry that was falsified to stop him."
                        </p>
                        <p className="text-sm md:text-md text-zinc-500 font-mono uppercase tracking-widest leading-loose">
                            Mark Crawford reported his abuse to Cardinal McCarrick in 1987. <br />
                            McCarrick promised a 'fair hearing'. Two years later, McCarrick was <br />
                            photographed at a Christmas party with Crawford's abuser.
                        </p>
                    </div>

                    {/* ACTION CTAs (CATEGORY VOCABULARY) */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl">
                        <Link href="/shield">
                            <a className="group w-full sm:w-auto bg-red-900 hover:bg-red-600 text-white px-10 py-5 font-black uppercase tracking-[0.3em] text-[10px] transition-all shadow-[0_0_30px_rgba(139,26,26,0.5)] flex items-center justify-center gap-3 text-center">
                                MAP THE SHIELD <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Link>
                        <Link href="/breach">
                            <a className="w-full sm:w-auto bg-white/5 border border-white/10 hover:border-white/30 text-white px-10 py-5 font-black uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 text-center">
                                FIND THE BREACH POINT <Search className="w-4 h-4" />
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE ADVOCATE PHOTO (FORENSIC PROOF) */}
            <section className="py-24 px-6 bg-[#050505] border-y border-red-900/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-red-900/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative border border-white/10 p-2 bg-zinc-900/40">
                             <img src="/assets/WhatsAppImage2025-10-11at11.40.16_e2ac3ebb.jpg" alt="The Advocate Photo" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000" />
                             <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] font-mono px-3 py-1 uppercase tracking-widest border border-white/10">Evidence SHU-99</div>
                        </div>
                        <div className="mt-6 p-6 border-l-2 border-red-900 bg-black/40">
                            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                                <strong>ITEM 1.1:</strong> The Advocate Photo. McCarrick (Right) and Kenneth Martin (Left) at a children's Christmas party. 
                                <span className="text-red-700 block mt-1 underline">Date: Dec 1989 — Two years after Crawford's report to McCarrick.</span>
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <span className="text-red-800 font-black text-[9px] uppercase tracking-[0.5em] block">The Forensic Answer</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">THE REWRITE</h2>
                        <p className="text-xl text-white font-serif italic border-l-4 border-red-900 pl-6 py-2">
                            "A survivor who refused to be bought."
                        </p>
                        <p className="text-lg text-zinc-400 font-serif leading-relaxed">
                            How do you get through the shield? You identify the lie. In 2004, the institution attempted to stop Mark Crawford with a $108,000 settlement. <strong className="text-white">He refused.</strong> To stop his 2005 lawsuit, they falsified internal age registries to claim the statute of limitations had passed—even though they knew the exact year of his birth.
                        </p>
                        <Link href="/coverup/big-lie">
                            <a className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                EXAMINE THE DISINFORMATION AUDIT
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE SHIELD (INTERACTIVE ARCHITECTURE) */}
            <section className="py-24 px-6 border-b border-[#1a1a22]">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-red-900 font-black text-[10px] uppercase tracking-[0.5em]">Forensic Mapping</span>
                        <h2 className="text-4xl font-bold text-white uppercase tracking-[0.2em]">Architecture of Protection</h2>
                        <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest leading-relaxed">Select a layer to identify the individual and map the breach.</p>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="w-full max-w-4xl relative cursor-pointer group">
                                <div className="absolute inset-0 bg-red-900/5 blur-[80px] rounded-full group-hover:bg-red-900/10 transition-all" />
                                <div className="relative border border-white/5 p-4 bg-black/40 backdrop-blur-xl rounded-[40px]">
                                    <img 
                                        src="/assets/shield-high-fidelity.png" 
                                        alt="Interactive Shield Map" 
                                        className="w-full h-auto brightness-75 group-hover:brightness-100 transition-all duration-700" 
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-red-900/90 text-white px-10 py-5 font-black text-[10px] uppercase tracking-[0.4em] shadow-[0_0_50px_rgba(139,26,26,0.8)] opacity-0 group-hover:opacity-100 transition-all">
                                            PENETRATE HUB
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] w-[1400px] max-h-[92vh] bg-black border-red-900/30 p-0 text-white shadow-[0_0_100px_rgba(0,0,0,1)] overflow-y-auto">
                            <ShieldHub />
                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            {/* SECTION 4: THE CONVERSION (CRAWFORD & PATRICK WALL) */}
            <section className="py-24 px-6 bg-[#030303] border-b border-red-900/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4 space-y-6">
                        <div className="w-16 h-1 bg-red-900" />
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">THE CONVERSION</h3>
                        <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest leading-loose">
                            Turning "Human Suffering" into "Institutional Process."
                        </p>
                        <div className="p-6 border border-zinc-900 bg-black/40">
                             <span className="text-red-700 font-black text-[9px] uppercase mb-4 block">Founding Collaborator</span>
                             <p className="text-lg text-white font-serif italic mb-6">"I didn't just watch the machine. I helped build the parts."</p>
                             <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">— PATRICK WALL</span>
                        </div>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#080808] border border-white/5 p-8 hover:border-red-900/30 transition-all group">
                            <Activity className="w-6 h-6 text-red-900 mb-6 group-hover:animate-pulse" />
                            <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-widest">The Crawford Pivot</h4>
                            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest leading-loose">The specific behavioral model for refusal. One victim. One lie about a birthday. One thread that unravels the architecture.</p>
                        </div>
                        <div className="bg-[#080808] border border-white/5 p-8 hover:border-red-900/30 transition-all group">
                            <Database className="w-6 h-6 text-red-900 mb-6 group-hover:animate-pulse" />
                            <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-widest">The $108k Refusal</h4>
                            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest leading-loose">The financial threshold where the 'Rewrite' was deployed to stop a high-fidelity breach point.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 px-6 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
                    <span className="text-[9px] font-bold text-zinc-800 uppercase tracking-[0.8em]">Ecclesiastical Record // Sodom Hall // 2025</span>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                        <Link href="/about"><a className="hover:text-red-500 transition-colors italic leading-none">The Imprint</a></Link>
                        <Link href="/evidence"><a className="hover:text-red-500 transition-colors italic leading-none">The Shield</a></Link>
                        <Link href="/breach"><a className="hover:text-red-500 transition-colors italic leading-none">The Breach</a></Link>
                        <Link href="/opinion"><a className="hover:text-red-500 transition-colors italic leading-none">The Rewrite</a></Link>
                    </div>
                    <p className="text-zinc-800 text-[8px] font-mono uppercase tracking-widest">Authorized Forensic Compilation SH-001</p>
                </div>
            </footer>
        </div>
    );
}
