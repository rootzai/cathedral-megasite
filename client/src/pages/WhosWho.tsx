import React from "react";
import { Link } from "wouter";
import { Search, Map } from "lucide-react";
import { PERPETRATORS } from "@/lib/registry";
import { SEO } from "@/components/SEO";

export default function WhosWho() {
    const categories = [
        {
            title: "THE RINGLEADERS",
            description: "The primary architects of the silence.",
            actors: PERPETRATORS.filter(a => a.tags.includes('ringleader'))
        },
        {
            title: "THE ENABLERS",
            description: "The institutional lieutenants who operated the machinery.",
            actors: PERPETRATORS.filter(a => a.tags.includes('core'))
        },
        {
            title: "THE LEGAL WALL",
            description: "The attorneys who insulated the hierarchy from discovery.",
            actors: PERPETRATORS.filter(a => a.tags.includes('legal-wall') && !a.tags.includes('ringleader'))
        },
        {
            title: "THE MACHINE",
            description: "The leaders enforcing the 'Big Lie' strategy today.",
            actors: PERPETRATORS.filter(a => a.tags.includes('machine'))
        }
    ];

    return (
        <div className="bg-[#0a0a0c] text-[#e2dacf] font-serif pb-32">
            <SEO 
                title="Who's Who" 
                description="The key actors in the architecture of protection." 
            />

            {/* Editorial Header */}
            <header className="border-b-4 border-[#c41e1e] bg-[#050505] py-6 px-8 flex justify-between items-center sticky top-0 z-50">
                <Link href="/">
                    <a className="text-3xl font-black font-cinzel text-[#e2dacf] uppercase tracking-[0.2em] hover:text-[#d4a843] transition-colors flex items-center gap-4">
                        <span className="w-4 h-4 bg-[#c41e1e]"></span>
                        SODOM HALL
                    </a>
                </Link>
                <nav className="flex gap-8">
                    <Link href="/evidence">
                        <a className="text-[#888] hover:text-[#d4a843] font-mono text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                            <Map className="w-4 h-4" /> Open Architecture
                        </a>
                    </Link>
                </nav>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-20">
                {/* Massive Broadsheet Headline */}
                <div className="text-center mb-24 border-b border-[#c41e1e]/30 pb-16">
                    <span className="text-[#d4a843] font-mono font-black tracking-[0.5em] uppercase text-sm mb-6 block">
                        Dramatis Personae
                    </span>
                    <h1 className="text-7xl md:text-[8rem] font-black font-cinzel text-white leading-[0.85] uppercase tracking-tighter mb-8 drop-shadow-2xl">
                        WHO'S <span className="text-[#c41e1e]">WHO</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-[#e2dacf]/80 max-w-4xl mx-auto italic font-serif leading-snug">
                        The architects, the enablers, and the legal engineers who prioritized the institution over the innocent.
                    </p>
                </div>

                <div className="space-y-32">
                    {categories.map((cat, i) => (
                        <section key={i} className="space-y-12">
                            <div className="text-center mb-16">
                                <h2 className="text-6xl font-black font-cinzel text-white uppercase tracking-wider mb-4 border-b-2 border-[#c41e1e] inline-block pb-4">
                                    {cat.title}
                                </h2>
                                <p className="text-2xl text-[#d4a843] italic font-serif mt-6">{cat.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {cat.actors.map((actor) => (
                                    <div key={actor.id} className="bg-[#e2dacf] p-6 border-4 border-[#1a1a1a] shadow-[-15px_15px_0_0_rgba(196,30,30,1)] hover:-translate-y-2 hover:shadow-[-25px_25px_0_0_rgba(196,30,30,1)] transition-all duration-300 relative group overflow-hidden">
                                        
                                        {/* "Wanted" Aesthetic Header */}
                                        <div className="border-b-4 border-black pb-4 mb-6 text-center">
                                            <span className="text-black font-black font-cinzel text-4xl uppercase tracking-tighter block mb-1">
                                                {actor.name}
                                            </span>
                                            <span className="text-[#c41e1e] font-mono text-sm uppercase tracking-widest font-bold block mt-2">
                                                {actor.role}
                                            </span>
                                        </div>

                                        {/* Mugshot Placeholder / Illustration Block */}
                                        <div className="w-full h-48 bg-black border-2 border-dashed border-black/30 mb-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#111] transition-colors">
                                            <Search className="w-12 h-12 text-[#c41e1e] mb-2 opacity-50" />
                                            <span className="text-[#d4a843] font-mono text-xs uppercase tracking-widest block font-bold">
                                                Archival Image Subject
                                            </span>
                                        </div>

                                        {/* Data Block */}
                                        <div className="text-black font-serif italic text-lg leading-snug">
                                            Role documented in official unsealed reports, internal memorandums, and federal investigations.
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-32 text-center border-t border-white/10 pt-16">
                    <Link href="/evidence">
                        <a className="inline-block bg-[#c41e1e] hover:bg-white text-white hover:text-[#c41e1e] px-12 py-6 font-black uppercase tracking-[0.3em] transition-colors border-4 border-transparent hover:border-[#c41e1e]">
                            Return to Architectural Map
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
}
