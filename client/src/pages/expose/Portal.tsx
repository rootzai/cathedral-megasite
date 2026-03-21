import { SmartImage } from "@/components/SmartImage";
import { Link } from "wouter";
import { Shield, Lock, AlertCircle, Eye } from "lucide-react";

export default function ExposePortal() {
    return (
        <div className="min-h-screen bg-white text-zinc-900 font-serif flex flex-col items-center justify-start p-4 sm:p-8 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: "url('/assets/images/paper_texture.png')" }}></div>

            <div className="z-10 max-w-6xl w-full space-y-12 py-12">
                {/* Header */}
                <div className="text-center space-y-4 animate-in fade-in duration-1000 slide-in-from-top-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-900 bg-zinc-100/20 text-zinc-900 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
                        <Lock size={12} /> Confidential Dossier · Access Level 04
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900">
                        The Architecture <br /><span className="text-zinc-800">of Silence</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-700 italic font-serif max-w-2xl mx-auto leading-relaxed">
                        "A forensic audit of institutional complicity, legal manipulation, and the network that protected Theodore McCarrick for forty years."
                    </p>
                </div>

                {/* Acts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Act 1: The Origin */}
                    <Link href="/origin/martin">
                        <div className="group cursor-pointer relative h-[450px] border border-zinc-800 hover:border-red-600/50 transition-all duration-700 overflow-hidden bg-zinc-900 shadow-2xl">
                            <div className="absolute inset-0 z-0">
                                <SmartImage
                                    src="/assets/images/sh_origin_seminary.png"
                                    alt="The Origin"
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                            <div className="p-10 relative z-20 h-full flex flex-col justify-end">
                                <span className="block text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-3 font-bold">Act I · 1980 - 2018</span>
                                <h2 className="text-4xl font-black uppercase text-white mb-3 group-hover:text-red-500 transition-colors tracking-tighter">
                                    The Origin
                                </h2>
                                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors max-w-sm leading-relaxed font-serif italic">
                                    The construction of the machine. The Sea Girt beach house, the seminarian pipeline, and the early warnings that were systematically ignored.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Act 2: The Cover-Up */}
                    <Link href="/coverup/financial">
                        <div className="group cursor-pointer relative h-[450px] border border-zinc-800 hover:border-red-600/50 transition-all duration-700 overflow-hidden bg-zinc-900 shadow-2xl">
                            <div className="absolute inset-0 z-0">
                                <SmartImage
                                    src="/assets/images/sh_coverup_vault.png"
                                    alt="The Cover-Up"
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                            <div className="p-10 relative z-20 h-full flex flex-col justify-end">
                                <span className="block text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-3 font-bold">Act II · 2018 - 2024</span>
                                <h2 className="text-4xl font-black uppercase text-white mb-3 group-hover:text-red-500 transition-colors tracking-tighter">
                                    The Cover-Up
                                </h2>
                                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors max-w-sm leading-relaxed font-serif italic">
                                    The protection of the machine. The "Legal Triumvirate," the suppression of the Latham Report, and the Christie legal network's intervention.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Act 3: The Breach */}
                    <Link href="/breach/whistleblowers">
                        <div className="group cursor-pointer relative h-[450px] border border-zinc-800 hover:border-red-600/50 transition-all duration-700 overflow-hidden bg-zinc-900 shadow-2xl">
                            <div className="absolute inset-0 z-0">
                                <SmartImage
                                    src="/assets/images/sh_breach_glass.png"
                                    alt="The Breach"
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                            <div className="p-10 relative z-20 h-full flex flex-col justify-end">
                                <span className="block text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-3 font-bold">Act III · 2024 - 2026</span>
                                <h2 className="text-4xl font-black uppercase text-white mb-3 group-hover:text-red-500 transition-colors tracking-tighter">
                                    The Breach
                                </h2>
                                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors max-w-sm leading-relaxed font-serif italic">
                                    The collapse of the machine. Whistleblowers emerge, the Politico revelations, and the judiciary's mandate to produce 24,000 pages.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Act 4: The Succession */}
                    <Link href="/succession/regime">
                        <div className="group cursor-pointer relative h-[450px] border border-zinc-800 hover:border-red-600/50 transition-all duration-700 overflow-hidden bg-zinc-900 shadow-2xl">
                            <div className="absolute inset-0 z-0">
                                <SmartImage
                                    src="/assets/images/sh_succession_cathedral.png"
                                    alt="The Succession"
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                            <div className="p-10 relative z-20 h-full flex flex-col justify-end">
                                <span className="block text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-3 font-bold">Act IV · 2026 - Beyond</span>
                                <h2 className="text-4xl font-black uppercase text-white mb-3 group-hover:text-red-500 transition-colors tracking-tighter">
                                    The Succession
                                </h2>
                                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors max-w-sm leading-relaxed font-serif italic">
                                    The survival of the machine. The election of Msgr. Reilly, the New Orleans export, and the institutional efforts to outlast the scandal.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Strategic Footer / Call to Action */}
                <div className="mt-20 p-8 border border-zinc-300 bg-zinc-50/50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-zinc-900 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                                <Shield size={14} /> Adversarial Audit
                            </h3>
                            <p className="text-xs text-zinc-700 leading-relaxed font-serif">
                                This investigation is protected by the First Amendment. We welcome legal process. Any demand letter received will be published in full.
                            </p>
                            <Link href="/about" className="text-xs text-zinc-900 underline hover:text-zinc-700 transition-colors">View Legal Basis</Link>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-zinc-900 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                                <Eye size={14} /> Public Record
                            </h3>
                            <p className="text-xs text-zinc-700 leading-relaxed font-serif">
                                Explore the verified document library including the unsealed Perry Report and the Vatican's 2020 findings.
                            </p>
                            <Link href="/documents" className="text-xs text-zinc-900 underline hover:text-zinc-700 transition-colors">Access Archives</Link>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-zinc-900 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                                <AlertCircle size={14} /> Submit a Tip
                            </h3>
                            <p className="text-xs text-zinc-700 leading-relaxed font-serif">
                                Protecting source confidentiality is our priority. Contribute to the investigation anonymously.
                            </p>
                            <Link href="/about#tips" className="inline-block bg-red-600 hover:bg-red-700 text-zinc-900 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors">
                                Submit Secure Tip
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-12 border-t border-zinc-300">
                    <p className="text-[10px] text-zinc-800 font-mono uppercase tracking-[0.4em]">
                        Sodom Hall Investigation · The Architecture of Silence · 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
