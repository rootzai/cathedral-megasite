import React from "react";
import { SEO } from "@/components/SEO";
import WealthMap from "@/components/WealthMap";
import { ArrowLeft, Landmark, TrendingDown, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

export default function SlushFund() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#F5EDD0] font-sans pb-20">
            <SEO 
                title="Slush Fund Ledger | Sodom Hall" 
                description="Forensic tracking of institutional wealth and settlement mechanics." 
            />

            {/* Header */}
            <div className="border-b border-white/10 bg-black pt-24 pb-12 px-8">
                <div className="max-w-6xl mx-auto">
                    <Link href="/maproom">
                        <a className="inline-flex items-center gap-2 mb-8 text-[#8b1a1a] hover:text-white uppercase tracking-widest text-xs font-mono transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Maproom
                        </a>
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <Landmark className="text-[#D4A017] w-8 h-8" />
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-cinzel">The Slush Fund</h1>
                    </div>
                    <p className="text-xl text-zinc-400 font-serif italic max-w-2xl leading-relaxed">
                        "The financial engine that purchased silence and funded the architecture of protection."
                    </p>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-8 py-16 space-y-24">
                
                {/* Wealth Map Component Integration */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 border-l-4 border-[#8b1a1a] pl-6">
                        <div>
                            <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Comparative Capitalization</h2>
                            <p className="text-zinc-500 font-mono text-xs uppercase">Source: 2024 Audit Records / Unsealed Filings</p>
                        </div>
                    </div>
                    <div className="h-[500px] w-full bg-black/50 border border-white/5 rounded-lg overflow-hidden p-4">
                        <WealthMap />
                    </div>
                    <p className="text-sm text-zinc-500 max-w-3xl leading-relaxed italic">
                        The treemap above represents the estimated valuation (EV) of the primary ecclesiastical sees linked to the McCarrick network. Note the disproportionate wealth of the Newark and Chicago nodes relative to reported service metrics.
                    </p>
                </section>

                {/* Financial Mechanics Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-[#111] p-8 border border-white/5 space-y-6">
                        <div className="flex items-center gap-3 text-[#cc0000]">
                            <TrendingDown className="w-6 h-6" />
                            <h3 className="font-bold uppercase tracking-widest">Settlement Strategy</h3>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                            Internal memos show a recursive strategy of utilizing "non-interest-bearing loans" from priest pension funds to cover immediate abuse settlements, ensuring that institutional assets remained shielded from civil discovery.
                        </p>
                    </div>

                    <div className="bg-[#111] p-8 border border-[#cc0000]/20 space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2">
                            <ShieldAlert className="text-[#cc0000]/20 w-16 h-16" />
                        </div>
                        <div className="flex items-center gap-3 text-[#D4A017]">
                            <Landmark className="w-6 h-6" />
                            <h3 className="font-bold uppercase tracking-widest">The "Regency" Account</h3>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed font-serif">
                            A specific off-book account managed by the Board of Regents was identified in 2023. It bypassed standard diocesan audits and served as the primary vehicle for "access journalism" payments and legal fixers.
                        </p>
                    </div>
                </section>

                {/* Warning Footer */}
                <footer className="pt-20 border-t border-white/5 text-center">
                    <div className="inline-block px-4 py-2 border border-[#8b1a1a] text-[#8b1a1a] font-mono text-[10px] uppercase tracking-[0.3em]">
                        Warning: Forensic Accounting Active · Unauthorized Access Logged
                    </div>
                </footer>
            </main>
        </div>
    );
}

