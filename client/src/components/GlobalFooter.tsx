import React from "react";
import { Link } from "wouter";
import { Shield, AlertTriangle, Phone, Heart, Mail } from "lucide-react";

export function GlobalFooter() {
    return (
        <footer className="bg-black border-t border-white/5 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-20 text-center md:text-left">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <img src="/assets/images/colored-pirate-logo.png" alt="Sodom Hall" className="w-12 h-auto opacity-80" />
                            <span className="font-cinzel font-black tracking-[0.3em] text-white text-xl">SODOM HALL</span>
                        </div>
                        <p className="text-zinc-600 font-serif italic leading-relaxed text-sm">
                            An independent reconstruction of institutional failure. Dedicated to the 450+ survivors of the New Jersey clergy abuse scandal.
                        </p>
                    </div>

                    {/* Resources */}
                    <div className="space-y-8 bg-[#8b1a1a]/5 border border-[#8b1a1a]/20 p-10 rounded-sm">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <Heart className="w-5 h-5 text-[#8b1a1a]" />
                            <h4 className="font-cinzel font-black text-white uppercase tracking-widest text-base">Survivor Resources</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 border border-[#8b1a1a]/30 bg-black">
                                <p className="text-xs font-black font-mono text-[#8b1a1a] uppercase tracking-widest mb-1">RAINN National Hotline</p>
                                <a href="tel:800-656-HOPE" className="text-2xl font-black font-cinzel text-white hover:text-[#8b1a1a] transition-colors tracking-widest">
                                    800.656.HOPE
                                </a>
                            </div>
                            <p className="text-xs text-zinc-500 italic font-serif leading-relaxed">
                                Free, confidential support 24/7. You are not alone.
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="grid grid-cols-2 gap-8 text-left">
                        <div className="space-y-4">
                            <span className="text-xs font-black font-courier text-zinc-700 uppercase tracking-widest block">Archives</span>
                            <div className="flex flex-col gap-2">
                                <Link href="/evidence" className="text-xs text-zinc-500 hover:text-white transition-colors">The Evidence</Link>
                                <Link href="/ledger" className="text-xs text-zinc-500 hover:text-white transition-colors">The Ledger</Link>
                                <Link href="/vault" className="text-xs text-zinc-500 hover:text-white transition-colors">The Vault</Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-xs font-black font-courier text-zinc-700 uppercase tracking-widest block">Institutional</span>
                            <div className="flex flex-col gap-2">
                                <Link href="/about" className="text-xs text-zinc-500 hover:text-white transition-colors">About Us</Link>
                                <Link href="/whos-who" className="text-xs text-zinc-500 hover:text-white transition-colors">Who's Who</Link>
                                <Link href="/tips" className="text-xs text-zinc-500 hover:text-white transition-colors">Submit Tip</Link>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Legal Disclaimer */}
                <div className="pt-10 pb-8 border-t border-white/5 mb-8">
                    <p className="text-xs text-zinc-600 font-serif leading-relaxed max-w-4xl mx-auto text-center">
                        This site presents independent journalism, public records analysis, and editorial opinion. All claims are sourced from court filings, the Vatican McCarrick Report (2020), the Perry Law Report (2024), investigative journalism, and public records. No party named on this site has requested a factual correction. If you or someone you know has been affected by clergy abuse, contact <a href="https://www.rainn.org" target="_blank" rel="noopener" className="text-[#8b1a1a] hover:text-white transition-colors underline">RAINN.org</a> or call <a href="tel:800-656-4673" className="text-[#8b1a1a] hover:text-white transition-colors underline">1-800-656-HOPE</a>.
                    </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
                    <p className="text-xs font-courier text-zinc-500 uppercase tracking-[0.4em]">
                        SH-2026 // CATHEDRAL MEGASITE // NO STATUTE // By Dei Journo
                    </p>
                    <div className="flex gap-8 items-center">
                        <AlertTriangle className="w-4 h-4 text-[#8b1a1a]" />
                        <span className="text-xs font-courier text-zinc-500 uppercase tracking-[0.4em]">Ongoing Reporting</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
