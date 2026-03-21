import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { Search } from '@/components/Search';

export function HomeHero() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}

            {/* News Ticker */}
            <div className="bg-zinc-950 text-zinc-300 py-1.5 sm:py-2 overflow-hidden sticky top-0 z-50 shadow-lg border-b border-zinc-800">
                <div className="whitespace-nowrap flex animate-ticker">
                    {[
                        "MAY 18, 2026: Final Court Deadline for Document Production.",
                        "RABNER DOSSIER: Criminal Referral for Legal Fraud.",
                        "VAULT UNSEALED: 24,000 pages of withheld records ordered released.",
                        "BK EXPOSURE: Network identified in financial ledger.",
                        "SCRIVO SANCTIONED: Judge cites 'Deliberate Concealment'.",
                        "EPSTEIN NEXUS: Investigation expands to Shared Counsel.",
                    ].map((text, i) => (
                        <span key={i} className="mx-8 font-bold tracking-tight inline-flex items-center">
                            {text}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {[
                        "MAY 18, 2026: Final Court Deadline for Document Production.",
                        "RABNER DOSSIER: Criminal Referral for Legal Fraud.",
                        "VAULT UNSEALED: 24,000 pages of withheld records ordered released.",
                        "BK EXPOSURE: Network identified in financial ledger.",
                        "SCRIVO SANCTIONED: Judge cites 'Deliberate Concealment'.",
                        "EPSTEIN NEXUS: Investigation expands to Shared Counsel.",
                    ].map((text, i) => (
                        <span key={i + 6} className="mx-4 sm:mx-8 font-bold tracking-tight inline-flex items-center text-xs sm:text-sm">
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            {/* Header Section */}
            <header className="bg-zinc-950 text-white py-10 sm:py-16 md:py-20 border-b border-zinc-900 relative overflow-hidden">
                <div className="container mx-auto px-3 sm:px-4 relative z-10">
                    <div className="flex flex-wrap justify-end items-center gap-2 sm:gap-4 mb-4">
                        <a href="/documents" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">Documents</a>
                        <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">About</a>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded transition-colors"
                        >
                            <SearchIcon className="w-4 h-4" />
                            <span className="text-sm font-semibold">Search</span>
                        </button>
                    </div>
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-[10px] sm:text-sm uppercase tracking-[0.4em] text-zinc-500 mb-4 sm:mb-6 font-mono font-bold">Investigation & Documentation</p>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>SODOM<span className="text-zinc-600 font-light">HALL</span></h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-zinc-400 font-light tracking-widest uppercase">The Cathedral Documents</h2>
                        <div className="w-16 sm:w-24 h-px bg-zinc-800 mx-auto mb-6 sm:mb-8" />
                    </div>
                </div>
            </header>

            {/* Leading Reckoning Section */}
            <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 bg-zinc-950 border-b border-zinc-900">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
                        <div>
                            <blockquote className="border-l-4 border-zinc-700 pl-4 sm:pl-8 italic text-lg sm:text-2xl md:text-3xl mb-8 sm:mb-12 bg-zinc-900/50 p-6 sm:p-8 md:p-12 rounded-r shadow-lg text-zinc-100">
                                "The vault is no longer accidental. It is deliberate. And on May 18, 2026, it becomes a crime."
                                <footer className="text-zinc-500 mt-4 text-sm font-mono uppercase tracking-widest">— Exhibit 00</footer>
                            </blockquote>
                        </div>
                        <div className="prose prose-invert prose-lg sm:prose-xl text-zinc-300">
                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-100 mb-4 sm:mb-6 leading-tight">
                                The Cathedral stands unsealed.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                As of May 2026, the institutional memory of New Jersey's Catholic political elite is no longer protected by privilege. Judge Avion Benjamin's unsealing order has fundamentally breached the ancestral walls, exposing the "Closed Loop" of legal and judicial fraud that has protected the McCarrick network for four decades.
                            </p>
                            <p className="text-gray-300 mt-4">
                                This is the Forensic Dossier. The identities of the "twelve clergymen" are now public record. The following acts map the structural collapse of the silence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
