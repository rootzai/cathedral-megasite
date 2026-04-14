import React from "react";
import { Shield, Gavel, Scale, Landmark, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Term } from "@/components/Term";

export default function MichaelCritchley() {
    return (
        <div className="min-h-screen bg-[#050505] text-[#c8bdb0] font-serif pb-24">
            <SEO
                title="Michael Critchley: The Fixer"
                description="Forensic mapping of Michael Critchley's role as the preeminent legal gladiator and architect of protection for the Archdiocese of Newark."
            />

            {/* Hero with courthouse bg */}
            <div className="relative overflow-hidden border-b border-white/5">
                <img src="/assets/courtroom/essex_courthouse.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] select-none pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
                {/* Σ — Memory Palace marker: The Architect's Chamber. Sum of all suppressed evidence */}
                <div className="absolute top-4 right-4 text-white/[0.03] hover:text-white/20 text-7xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">Σ</div>
                <div className="relative z-10 pt-32 pb-12 px-6 md:px-12 max-w-5xl mx-auto">
                    <Link href="/whos-who" className="inline-flex items-center gap-2 mb-12 text-red-700 hover:text-white uppercase tracking-widest text-xs font-mono transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Registry
                    </Link>

                    <header className="border-l-4 border-red-900 pl-8 py-4">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-5 h-5 text-red-600" />
                            <span className="font-mono text-sm text-red-500 uppercase tracking-[0.6em] font-black">Forensic Dossier // Ringleader</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black font-cinzel text-white uppercase tracking-tighter mb-4 leading-none">
                            MICHAEL <span className="text-red-900">CRITCHLEY</span>
                        </h1>
                        <p className="text-3xl text-zinc-400 italic font-serif max-w-2xl leading-relaxed">
                            "The Architect of Protection. A master of the temperature, the network, and the institutional shield."
                        </p>
                    </header>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 pt-12">
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
                                    <h3 className="text-white font-cinzel uppercase tracking-widest text-2xl mb-4">The Father Fugee Crisis (2013)</h3>
                                    <p className="text-lg font-mono text-red-700 uppercase mb-4 tracking-widest font-bold">Case Study // De-escalation Mastery</p>
                                    <p className="text-zinc-200 text-lg leading-relaxed">
                                        When Fr. Michael Fugee violated a prosecutorial {<Term id="MOU">MOU</Term>} by participating in youth retreats, the Archdiocese faced profound criminal exposure. Critchley successfully "managed the temperature," ensuring he was "cooperative and forthright" to prevent criminal escalation and insulate the Archbishop from indictment.
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
                                <div className="p-8 bg-zinc-900/40 border border-white/5 group hover:border-red-900/40 transition-all">
                                    <h4 className="text-white font-cinzel uppercase text-lg mb-4">The LaSala / Marino Alliance</h4>
                                    <p className="text-lg text-zinc-400 leading-relaxed font-serif italic">
                                        Critchley teams up seamlessly with <span className="text-red-700 font-bold">Kevin Marino</span> and <span className="text-red-700 font-bold">Joe LaSala</span>, leveraging a shared Seton Hall Law background that permeates the state's legal culture.
                                    </p>
                                </div>
                                <div className="p-8 bg-zinc-900/40 border border-white/5 group hover:border-red-900/40 transition-all">
                                    <h4 className="text-white font-cinzel uppercase text-lg mb-4">The Triga of Power</h4>
                                    <p className="text-lg text-zinc-400 leading-relaxed font-serif italic">
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
                                    Critchley's 2017 {<Term id="Advocati Christi">Advocati Christi Award</Term>} from Bishop Serratelli formalized his status as a deeply trusted insider. In his acceptance, he invoked the legacy of St. Thomas More, framing legal defense as a "personal commitment to justice" that transcends professional duty.
                                </p>
                                <div className="w-16 h-1 bg-red-900" />
                            </div>
                        </section>
                        {/* Section 4: The Client-Patron Nexus */}
                        <section className="space-y-6 pb-24">
                            <h2 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest flex items-center gap-3">
                                <Shield className="text-red-900" /> The Client-Patron Nexus
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h4 className="text-white font-cinzel uppercase text-lg tracking-widest border-b border-red-900/30 pb-2">[THE CLIENT: JOHN MYERS]</h4>
                                    <p className="text-zinc-300 font-serif italic text-lg leading-relaxed">
                                        As Archbishop, Myers hired Critchley to insulate the Chancery from the Father Fugee criminal probe. Critchley successfully "managed the temperature," preventing Myers from being deposed and framing institutional failure as a simple oversight.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-white font-cinzel uppercase text-lg tracking-widest border-b border-red-900/30 pb-2">[THE PATRON: ARTHUR SERRATELLI]</h4>
                                    <p className="text-zinc-300 font-serif italic text-lg leading-relaxed">
                                        The former Bishop of Paterson—and Myers' former Vicar General—formally recognized Critchley with the 2017 Advocati Christi Award. This was more than an award; it was the public seal on the shield that kept both Newark and Paterson out of the courtroom.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1 space-y-12">
                        <div className="bg-[#0D0D10] border border-white/5 p-8">
                            <h3 className="font-mono text-sm text-red-500 uppercase tracking-[0.5em] mb-8 font-bold border-b border-white/5 pb-4">NETWORK NEXUS</h3>
                            <div className="space-y-12">
                                <div className="flex items-start gap-6">
                                    <div className="w-1.5 h-16 bg-red-900 mt-1" />
                                    <div>
                                        <h4 className="text-white font-black uppercase text-xl tracking-widest mb-2">Chris Christie</h4>
                                        <p className="text-sm text-zinc-400 italic uppercase tracking-widest">2003 Strategic Intermediary</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-1.5 h-16 bg-red-900 mt-1" />
                                    <div>
                                        <h4 className="text-white font-black uppercase text-xl tracking-widest mb-2">George Norcross</h4>
                                        <p className="text-sm text-zinc-400 italic uppercase tracking-widest">Political Machine Liaison</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-1.5 h-16 bg-red-900 mt-1" />
                                    <div>
                                        <h4 className="text-white font-black uppercase text-xl tracking-widest mb-2">Cardinal Tobin</h4>
                                        <p className="text-sm text-zinc-400 italic uppercase tracking-widest">Informal Elder Statesman</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-red-950/5 border border-red-900/20 font-mono text-sm text-zinc-300 uppercase tracking-widest leading-loose shadow-2xl">
                            <p className="text-red-500 font-black mb-6 text-xl">FORENSIC NOTE:</p>
                            To accurately assess Critchley is to understand the historical continuum of leadership. From the McCarrick wake to the Succession, he is the anchor that prevents the legacy from sinking the institution.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
