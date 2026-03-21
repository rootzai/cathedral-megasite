import { SmartImage } from "@/components/SmartImage";
import { Link } from "wouter";
import { Shield, Lock, AlertCircle, Eye } from "lucide-react";

export default function ExposePortal() {
    return (
        <div className="min-h-screen bg-black text-white font-serif flex flex-col items-center justify-start p-4 sm:p-8 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: "url('/assets/images/paper_texture.png')" }}></div>

            <div className="z-10 max-w-6xl w-full space-y-12 py-12">
                {/* Header */}
                <div className="text-center space-y-4 animate-in fade-in duration-1000 slide-in-from-top-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-900 bg-red-950/20 text-red-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
                        <Lock size={12} /> Confidential Dossier · Access Level 04
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
                        The Architecture <br /><span className="text-red-600">of Silence</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 italic font-serif max-w-2xl mx-auto leading-relaxed">
                        "A forensic audit of institutional complicity, legal manipulation, and the network that protected Theodore McCarrick for forty years."
                    </p>
                </div>

                {/* Acts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Act 1: The Origin */}
                    <Link href="/origin/martin">
                        <div className="group cursor-pointer relative h-[350px] border border-gray-800 hover:border-red-600 transition-all duration-500 overflow-hidden bg-zinc-900/50">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                            <div className="p-8 relative z-20 h-full flex flex-col justify-end">
                                <span className="block text-red-500 font-mono text-[10px] uppercase tracking-widest mb-2">Act I · 1980 - 2018</span>
                                <h2 className="text-3xl font-bold uppercase text-white mb-2 group-hover:text-red-500 transition-colors">
                                    The Origin
                                </h2>
                                <p className="text-sm text-gray-400 group-hover:text-white transition-colors max-w-sm">
                                    The construction of the machine. The Sea Girt beach house, the seminarian pipeline, and the early warnings that were systematically ignored.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Act 2: The Cover-Up */}
                    <Link href="/coverup/financial">
                        <div className="group cursor-pointer relative h-[350px] border border-gray-800 hover:border-red-600 transition-all duration-500 overflow-hidden bg-zinc-900/50">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                            <div className="p-8 relative z-20 h-full flex flex-col justify-end">
                                <span className="block text-red-500 font-mono text-[10px] uppercase tracking-widest mb-2">Act II · 2018 - 2024</span>
                                <h2 className="text-3xl font-bold uppercase text-white mb-2 group-hover:text-red-500 transition-colors">
                                    The Cover-Up
                                </h2>
                                <p className="text-sm text-gray-400 group-hover:text-white transition-colors max-w-sm">
                                    The protection of the machine. The "Legal Triumvirate," the suppression of the Latham Report, and the Christie legal network's intervention.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Act 3: The Breach */}
                    <Link href="/breach/whistleblowers">
                        <div className="group cursor-pointer relative h-[350px] border border-gray-800 hover:border-red-600 transition-all duration-500 overflow-hidden bg-zinc-900/50">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                            <div className="p-8 relative z-20 h-full flex flex-col justify-end">
                                <span className="block text-red-500 font-mono text-[10px] uppercase tracking-widest mb-2">Act III · 2024 - 2026</span>
                                <h2 className="text-3xl font-bold uppercase text-white mb-2 group-hover:text-red-500 transition-colors">
                                    The Breach
                                </h2>
                                <p className="text-sm text-gray-400 group-hover:text-white transition-colors max-w-sm">
                                    The collapse of the machine. Whistleblowers emerge, the Politico revelations, and the judiciary's mandate to produce 24,000 pages.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Act 4: The Succession */}
                    <Link href="/succession/regime">
                        <div className="group cursor-pointer relative h-[350px] border border-gray-800 hover:border-red-600 transition-all duration-500 overflow-hidden bg-zinc-900/50">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                            <div className="p-8 relative z-20 h-full flex flex-col justify-end">
                                <span className="block text-red-500 font-mono text-[10px] uppercase tracking-widest mb-2">Act IV · 2026 - Beyond</span>
                                <h2 className="text-3xl font-bold uppercase text-white mb-2 group-hover:text-red-500 transition-colors">
                                    The Succession
                                </h2>
                                <p className="text-sm text-gray-400 group-hover:text-white transition-colors max-w-sm">
                                    The survival of the machine. The election of Msgr. Reilly, the New Orleans export, and the institutional efforts to outlast the scandal.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Strategic Footer / Call to Action */}
                <div className="mt-20 p-8 border border-zinc-800 bg-zinc-950/50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-red-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                                <Shield size={14} /> Adversarial Audit
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed font-serif">
                                This investigation is protected by the First Amendment. We welcome legal process. Any demand letter received will be published in full.
                            </p>
                            <Link href="/about" className="text-xs text-white underline hover:text-red-500 transition-colors">View Legal Basis</Link>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-red-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                                <Eye size={14} /> Public Record
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed font-serif">
                                Explore the verified document library including the unsealed Perry Report and the Vatican's 2020 findings.
                            </p>
                            <Link href="/documents" className="text-xs text-white underline hover:text-red-500 transition-colors">Access Archives</Link>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-red-500 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                                <AlertCircle size={14} /> Submit a Tip
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed font-serif">
                                Protecting source confidentiality is our priority. Contribute to the investigation anonymously.
                            </p>
                            <Link href="/about#tips" className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors">
                                Submit Secure Tip
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-12 border-t border-zinc-900">
                    <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.4em]">
                        Sodom Hall Investigation · The Architecture of Silence · 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
