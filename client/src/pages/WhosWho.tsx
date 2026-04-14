import React from "react";
import { Link } from "wouter";
import { User, Shield, Gavel, Scale, AlertCircle, ArrowLeft } from "lucide-react";
import { PERPETRATORS } from "@/lib/registry";
import { SEO } from "@/components/SEO";

export default function WhosWho() {
    const categories = [
        {
            title: "PRINCIPAL FIGURES",
            description: "The primary architects of the 'Architecture of Protection' and the elite crisis managers who insulated the hierarchy from accountability.",
            actors: [
                { id: "critchley", name: "Michael Critchley", role: "The Fixer / Legal Architect", tags: ["ringleader"] },
                { id: "myers", name: "John J. Myers", role: "Former Archbishop of Newark", tags: ["ringleader"] },
                { id: "serratelli", name: "Arthur J. Serratelli", role: "Former Bishop of Paterson", tags: ["ringleader"] },
                { id: "tobin", name: "Cardinal Joseph Tobin", role: "Archbishop of Newark", tags: ["ringleader"] },
                { id: "mccarrick", name: "Theodore McCarrick", role: "The Source", tags: ["ringleader"] },
                ...PERPETRATORS.filter(a => a.tags.includes('ringleader') && !["critchley", "myers", "serratelli", "tobin", "mccarrick"].includes(a.id))
            ]
        },
        {
            title: "KEY ENABLERS",
            description: "Individuals whose actions or silence allowed the defensive mechanisms to function.",
            actors: PERPETRATORS.filter(a => a.tags.includes('core'))
        },
        {
            title: "LEGAL NETWORK",
            description: "The Seton Hall Law pipeline: Attorneys responsible for the 'Sanction Plea' and shielding forensic evidence from discovery.",
            actors: PERPETRATORS.filter(a => a.tags.includes('legal-wall') && !a.tags.includes('ringleader'))
        },
        {
            title: "POLITICAL CONNECTIONS",
            description: "The secular power structures and intermediaries that de-escalated criminal exposure for institutional leadership.",
            actors: PERPETRATORS.filter(a => a.tags.includes('political-nexus'))
        },
        {
            title: "CURRENT ADMINISTRATION",
            description: "The institutional leaders who operate the current regime and enforce the 'Big Lie' strategy.",
            actors: PERPETRATORS.filter(a => a.tags.includes('machine'))
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif pt-32 pb-24 px-6">
            <SEO
                title="Who's Who"
                description="A directory of the key actors and institutional enablers in the Cathedral investigation."
            />
            <div className="max-w-5xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 mb-12 text-[#8b1a1a] hover:text-white uppercase tracking-widest text-xs font-mono transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Architecture
                </Link>

                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <User className="w-6 h-6 text-[#8b1a1a]" />
                        <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.6em] font-mono">Dramatis Personae</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-cinzel text-white uppercase tracking-tighter mb-8 leading-none">
                        WHO'S <span className="text-[#8b1a1a]">WHO</span>
                    </h1>
                    <p className="text-2xl text-zinc-500 italic leading-relaxed max-w-3xl">
                        A simplified directory of the key actors in the Cathedral investigation.
                        Understand the roles, the connections, and the history of those in power.
                    </p>
                </div>

                <div className="space-y-32">
                    {categories.map((cat, i) => (
                        <section key={i} className="space-y-12">
                            <div className="space-y-4 border-b border-white/5 pb-8">
                                <h2 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest">{cat.title}</h2>
                                <p className="text-lg text-zinc-600 italic font-serif">{cat.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {cat.actors.map((actor) => (
                                    <div key={actor.id} className="bg-[#0D0D10] border border-white/5 p-8 hover:border-[#8b1a1a]/30 transition-all group">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="w-12 h-12 bg-white/5 flex items-center justify-center p-3">
                                                {actor.tags.includes('legal-wall') ? <Gavel className="text-zinc-600 group-hover:text-[#8b1a1a] transition-colors" /> : <User className="text-zinc-600 group-hover:text-[#8b1a1a] transition-colors" />}
                                            </div>
                                            {actor.tags.includes('sanctioned') && (
                                                <span className="bg-[#8b1a1a]/20 text-[#8b1a1a] text-xs font-black uppercase tracking-widest px-2 py-1 rounded-sm border border-[#8b1a1a]/30">
                                                    Sanctioned
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-black font-cinzel text-white uppercase tracking-widest mb-2 group-hover:text-[#8b1a1a] transition-colors">
                                            {actor.name}
                                        </h3>
                                        <p className="text-[#8b1a1a] font-mono text-xs uppercase tracking-[0.4em] mb-4">
                                            {actor.role}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                            {actor.tags.map(tag => (
                                                <span key={tag} className="text-xs font-mono uppercase text-zinc-700 tracking-tighter">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-32 pt-16 border-t border-white/5 text-center">
                    <p className="text-xs font-courier text-zinc-800 font-black uppercase tracking-[0.5em]">
                        ACT FILE // DRAMATIS PERSONAE // SH-2026
                    </p>
                </div>
            </div>
        </div>
    );
}
