import React from "react";
import { Shield, Gavel, Scale, Landmark, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

export default function MichaelCritchley() {
    return (
        <div className="min-h-screen bg-[#050505] text-[#c8bdb0] font-serif pt-32 pb-24 px-6 md:px-12">
            <SEO 
                title="Michael Critchley: The Fixer" 
                description="Forensic mapping of Michael Critchley's role as the preeminent legal gladiator and architect of protection for the Archdiocese of Newark." 
            />
            
            <div className="max-w-5xl mx-auto">
                <Link href="/whos-who">
                    <a className="inline-flex items-center gap-2 mb-12 text-red-700 hover:text-white uppercase tracking-widest text-xs font-mono transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Registry
                    </a>
                </Link>

                <header className="mb-20 border-l-4 border-red-900 pl-8 py-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-5 h-5 text-red-600" />
                        <span className="font-mono text-xs text-red-600 uppercase tracking-[0.6em] font-black">Forensic Dossier // Ringleader</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-cinzel text-white uppercase tracking-tighter mb-4 leading-none">
                        MICHAEL <span className="text-red-900">CRITCHLEY</span>
                    </h1>
                    <p className="text-2xl text-zinc-500 italic font-serif max-w-2xl leading-relaxed">
                        "The Architect of Protection. A master of the temperature, the network, and the institutional shield."
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-20">
                        {/* Section 1: The Fixer */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest flex items-center gap-3">
                                <Gavel className="text-red-900" /> The Institutional Shield
                            </h2>
                            <div className="prose prose-invert prose-zinc max-w-none text-lg text-zinc-400 leading-relaxed space-y-6 italic">
                                <p>
                                    Critchley's role transcends that of a standard defense attorney. He is the preeminent "legal gladiator" for the Catholic Church in New Jersey, providing a secular armor that allows the religious hierarchy to survive public investigations that would otherwise dismantle it.
                                </p>
                                <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-sm">
                                    <h3 className="text-white font-cinzel uppercase tracking-widest text-xl mb-4">The Father Fugee Crisis (2013)</h3>
                                    <p className="text-sm font-mono text-zinc-500 uppercase mb-4 tracking-widest">Case Study // De-escalation Mastery</p>
                                    <p className="text-zinc-300">
                                        When Fr. Michael Fugee violated a prosecutorial MOU by participating in youth retreats, the Archdiocese faced profound criminal exposure. Critchley successfully "managed the temperature," ensuring he was "cooperative and forthright" to prevent criminal escalation and insulate the Archbishop from indictment.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Seton Hall Pipeline */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest flex items-center gap-3">
                                <Landmark className="text-red-900" /> The Seton Hall Pipeline
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 bg-zinc-900/40 border border-white/5 group hover:border-red-900/40 transition-all">
                                    <h4 className="text-white font-cinzel uppercase mb-2">The LaSala / Marino Alliance</h4>
                                    <p className="text-xs text-zinc-600 leading-relaxed font-serif italic">
                                        Critchley teams up seamlessly with <span className="text-red-700 font-bold">Kevin Marino</span> and <span className="text-red-700 font-bold">Joe LaSala</span>, leveraging a shared Seton Hall Law background that permeates the state's legal culture.
                                    </p>
                                </div>
                                <div className="p-6 bg-zinc-900/40 border border-white/5 group hover:border-red-900/40 transition-all">
                                    <h4 className="text-white font-cinzel uppercase mb-2">The Triga of Power</h4>
                                    <p className="text-xs text-zinc-600 leading-relaxed font-serif italic">
                                        Critchley, <span className="text-red-700 font-bold">Tom Scrivo</span>, and <span className="text-red-700 font-bold">Chris Porrino</span> represent the elite cadre of attorneys who maintain a common operational language with the prosecution and judiciary.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: The Advocati Christi */}
                        <section className="space-y-6 pb-12">
                            <h2 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest flex items-center gap-3">
                                <Scale className="text-red-900" /> Advocati Christi
                            </h2>
                            <div className="p-8 border border-white/5 bg-zinc-950/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-red-900">
                                    <Landmark size={120} />
                                </div>
                                <p className="text-xl text-white italic mb-6">"Instruments of Goodness"</p>
                                <p className="text-zinc-600 font-serif italic leading-relaxed mb-6">
                                    Critchley's 2017 Advocati Christi Award from Bishop Serratelli formalized his status as a deeply trusted insider. In his acceptance, he invoked the legacy of St. Thomas More, framing legal defense as a "personal commitment to justice" that transcends professional duty.
                                </p>
                                <div className="w-16 h-1 bg-red-900" />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1 space-y-12">
                        <div className="bg-[#0D0D10] border border-white/5 p-8">
                            <h3 className="font-mono text-[10px] text-zinc-700 uppercase tracking-[0.5em] mb-6">NETWORK NEXUS</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-1 h-12 bg-red-900 mt-1" />
                                    <div>
                                        <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">Chris Christie</h4>
                                        <p className="text-xs text-zinc-600 italic">2003 Strategic Intermediary</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-1 h-12 bg-red-900 mt-1" />
                                    <div>
                                        <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">George Norcross</h4>
                                        <p className="text-xs text-zinc-600 italic">Political Machine Liaison</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-1 h-12 bg-red-900 mt-1" />
                                    <div>
                                        <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">Cardinal Tobin</h4>
                                        <p className="text-xs text-zinc-600 italic">Informal Elder Statesman</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border border-white/5 font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">
                            <p className="text-red-900 font-black mb-4">FORENSIC NOTE:</p>
                            To accurately assess Critchley is to understand the historical continuum of leadership. From the McCarrick wake to the Succession, he is the anchor that prevents the legacy from sinking the institution.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

