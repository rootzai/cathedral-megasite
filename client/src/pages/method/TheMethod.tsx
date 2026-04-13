import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
    Fingerprint, 
    Search, 
    Database, 
    Cpu, 
    Zap, 
    ArrowRight,
    AlertCircle,
    Activity,
    Eye
} from "lucide-react";

export default function TheMethod() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-cormorant selection:bg-[#8b1a1a] selection:text-white">
            {/* HERO SECTION */}
            <section className="relative h-[80vh] flex flex-col items-center justify-center pt-20 px-6 border-b border-[#8b1a1a]/20 overflow-hidden">
                <div className="absolute inset-0 bg-[#8b1a1a]/5 blur-[120px] opacity-20" />
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="h-full w-full bg-[radial-gradient(#8b1a1a_1px,transparent_1px)] [background-size:32px_32px]" />
                </div>
                
                <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex justify-center mb-12"
                    >
                        <div className="relative">
                            <Fingerprint className="w-24 h-24 text-[#8b1a1a] opacity-40 blur-sm" />
                            <Fingerprint className="absolute inset-0 w-24 h-24 text-[#cc0000] drop-shadow-[0_0_20px_rgba(204,0,0,0.5)]" />
                        </div>
                    </motion.div>
                    
                    <h1 className="text-6xl md:text-[8rem] font-black font-cinzel text-white leading-none uppercase tracking-tighter">
                        THE <span className="text-[#cc0000]">METHOD</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl font-serif italic text-zinc-500 leading-relaxed">
                        "How AI unmasked the fabricated bulletins of the Newark Archdiocese through forensic typesetting analysis."
                    </p>
                </div>
            </section>

            {/* DARKO VUCETIC & THE FINGERPRINT */}
            <section className="py-32 px-6 border-b border-white/5 bg-[#070709]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-[#cc0000] font-black text-xs uppercase tracking-[0.5em] font-courier">Forensic Analyst // DARKO VUCETIC</span>
                            <h2 className="text-5xl font-black font-cinzel text-white uppercase tracking-tighter">THE DATA COLLISION</h2>
                        </div>
                        <div className="space-y-8 text-lg text-zinc-400 font-serif leading-relaxed italic">
                            <p className="border-l-2 border-[#cc0000] pl-8">
                                "The institution claimed the bulletins proved the abuser was elsewhere. The AI proved the bulletins didn't exist until 2005."
                            </p>
                            <p>
                                Darko Vucetic utilized neural typesetting analysis to compare the metadata of original 1980s bulletins against those provided in the Crawford litigation. The result: A 99.8% probability of retroactive fabrication.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div className="space-y-2">
                                <span className="text-white font-black text-3xl">0.2%</span>
                                <p className="text-xs text-zinc-600 font-courier uppercase tracking-widest">Similarity to Original Stock</p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[#cc0000] font-black text-3xl">2005</span>
                                <p className="text-xs text-zinc-600 font-courier uppercase tracking-widest">Date of Fabrication</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group p-4 border border-[#8b1a1a]/30 bg-black/40">
                         <div className="absolute inset-0 bg-[#cc0000]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                         <div className="relative space-y-6">
                            <div className="aspect-square bg-zinc-900 overflow-hidden relative">
                                <img src="/assets/data-fingerprint.png" alt="AI Fingerprint" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-1 bg-[#cc0000]/50 animate-scan" style={{ animation: 'scan 4s linear infinite' }} />
                                </div>
                            </div>
                            <div className="p-6 bg-[#0a0a0c] border border-white/5">
                                <span className="text-xs font-black font-courier text-[#cc0000] uppercase tracking-widest block mb-1">Audit Record SH-V1</span>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">RETROACTIVE DOCUMENTATION IDENTIFIED</p>
                            </div>
                         </div>
                    </div>
                </div>
            </section>

            {/* THE FABRICATION PIPELINE */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto space-y-24">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black font-cinzel text-white uppercase tracking-widest">THE FABRICATION PIPELINE</h2>
                        <div className="h-px w-24 bg-[#cc0000] mx-auto" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Database,
                                title: "Data Ingest",
                                desc: "Thousands of archival patterns fed into the Vucetic model."
                            },
                            {
                                icon: Cpu,
                                title: "Neural Audit",
                                desc: "Analysis of kerning, ink bleed, and paper grain variances."
                            },
                            {
                                icon: AlertCircle,
                                title: "Anomalies",
                                desc: "Discovery of digital artifacts in '1987' typefaces."
                            }
                        ].map((item, i) => (
                            <div key={i} className="text-center space-y-6 p-8 bg-[#0D0D10] border border-white/5 hover:border-[#cc0000]/40 transition-all duration-500">
                                <item.icon className="w-10 h-10 text-[#cc0000] mx-auto" />
                                <h4 className="text-xl font-black font-cinzel text-white uppercase">{item.title}</h4>
                                <p className="text-sm text-zinc-500 font-serif italic leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-12 bg-[#8b1a1a]/5 border border-[#8b1a1a]/20 relative group">
                        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-black font-cinzel text-white uppercase">THE ECLESIASTICAL CLEANUP</h3>
                                <p className="text-lg text-zinc-400 font-serif leading-relaxed italic">
                                    The "Method" reveals a coordinated systematic effort across three dioceses to 'align' their records before the 2026 unsealing. This is not a clerical error; it is a clinical removal of evidence.
                                </p>
                            </div>
                            <div className="w-full md:w-auto">
                                <Link href="/evidence">
                                    <a className="inline-flex items-center gap-3 bg-black border border-[#cc0000] text-[#F5EDD0] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(204,0,0,0.3)] hover:shadow-none">
                                        View Data Stream <Activity className="w-4 h-4" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY INDIVIDUALS */}
            <section className="py-32 px-6 bg-[#070709] border-t border-white/5">
                <div className="max-w-7xl mx-auto space-y-20">
                     <div className="flex flex-col items-center text-center space-y-4">
                        <span className="text-[#cc0000] font-black text-xs uppercase tracking-[0.5em] font-courier">Human Intelligence</span>
                        <h2 className="text-5xl font-black font-cinzel text-white uppercase tracking-tighter">THE WHISTLEBLOWERS</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group bg-[#0D0D10] border border-white/5 p-10 hover:border-[#cc0000]/40 transition-all duration-500">
                             <div className="flex items-center justify-between mb-8">
                                <h4 className="text-2xl font-black font-cinzel text-white uppercase">PATRICK WALL</h4>
                                <Eye className="w-6 h-6 text-[#cc0000]" />
                             </div>
                             <p className="text-zinc-500 font-serif italic italic leading-relaxed">
                                Former Benedictine monk. Identified the 'feeder system' at Delbarton that fueled the McCarrick machine.
                             </p>
                        </div>
                        <div className="group bg-[#0D0D10] border border-white/5 p-10 hover:border-[#cc0000]/40 transition-all duration-500">
                             <div className="flex items-center justify-between mb-8">
                                <h4 className="text-2xl font-black font-cinzel text-white uppercase">LORI BROWN</h4>
                                <div className="p-1.5 bg-[#8b1a1a] rounded-full" />
                             </div>
                             <p className="text-zinc-500 font-serif italic italic leading-relaxed">
                                The insider whose private note unmasked the true purpose of the Perry Law 'independent' investigation.
                             </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 px-6 border-t border-white/5 text-center text-xs font-black font-courier text-zinc-700 uppercase tracking-[0.4em]">
                Authorized Method Record // SODOM HALL // 2026
            </footer>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scan {
                    0% { top: 0; }
                    100% { top: 100%; }
                }
                .animate-scan {
                    position: absolute;
                    width: 100%;
                    z-index: 10;
                }
            ` }} />
        </div>
    );
}
