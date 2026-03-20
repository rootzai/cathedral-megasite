import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { Search } from '@/components/Search';

export function HomeHero() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}

            {/* News Ticker */}
            <div className="bg-red-600 text-white py-2 overflow-hidden sticky top-0 z-50 shadow-lg border-b border-red-900/50">
                <div className="whitespace-nowrap flex animate-ticker">
                    {[
                        "🚨 MAY 18, 2026: Final Court Deadline for 100% Document Production.",
                        "📄 RABNER DOSSIER: Criminal Referral for 'Closed Loop' Legal Fraud.",
                        "🏛️ VAULT UNSEALED: 24,000 pages of withheld records ordered released.",
                        "🏦 BK EXPOSURE: McCarrick 'Nephew' network identified in financial ledger.",
                        "⚖️ SCRIVO SANCTIONED: Judge cites 'Deliberate Concealment'.",
                        "🕵️ EPSTEIN NEXUS: Investigation expands to Shared Counsel.",
                    ].map((text, i) => (
                        <span key={i} className="mx-8 font-bold tracking-tight inline-flex items-center">
                            {text}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {[
                        "🚨 MAY 18, 2026: Final Court Deadline for 100% Document Production.",
                        "📄 RABNER DOSSIER: Criminal Referral for 'Closed Loop' Legal Fraud.",
                        "🏛️ VAULT UNSEALED: 24,000 pages of withheld records ordered released.",
                        "🏦 BK EXPOSURE: McCarrick 'Nephew' network identified in financial ledger.",
                        "⚖️ SCRIVO SANCTIONED: Judge cites 'Deliberate Concealment'.",
                        "🕵️ EPSTEIN NEXUS: Investigation expands to Shared Counsel.",
                    ].map((text, i) => (
                        <span key={i + 6} className="mx-8 font-bold tracking-tight inline-flex items-center">
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            {/* Header Section */}
            <header className="bg-gradient-to-b from-gray-900 to-black text-white py-20 border-b-4 border-red-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/vault/archive_storage.jpg')] bg-cover bg-center opacity-20" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex justify-end items-center gap-4 mb-4">
                        <a href="/documents" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">Documents</a>
                        <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">About</a>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                        >
                            <SearchIcon className="w-4 h-4" />
                            <span className="text-sm font-semibold">Search</span>
                        </button>
                    </div>
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm uppercase tracking-[0.5em] text-red-500 mb-6 font-mono">Special Forensic Investigation</p>
                        <h1 className="text-8xl font-bold mb-4 tracking-tighter">SODOM <span className="text-red-600">HALL</span></h1>
                        <h2 className="text-3xl mb-8 text-gray-400 font-light tracking-widest uppercase">The Cathedral of Documents</h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
                    </div>
                </div>
            </header>

            {/* Leading Reckoning Section */}
            <section className="py-24 px-4 bg-black border-b border-red-900/10">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <blockquote className="border-l-4 border-red-600 pl-8 italic text-3xl mb-12 bg-zinc-950 p-12 rounded-r-lg shadow-2xl text-white">
                                "The vault is no longer accidental. It is deliberate. And on May 18, 2026, it becomes a crime."
                                <footer className="text-gray-500 mt-4 text-sm font-mono uppercase tracking-widest">— Forensic Note: Exhibit 00</footer>
                            </blockquote>
                        </div>
                        <div className="prose prose-invert prose-xl text-white">
                            <p className="text-2xl font-bold text-red-500 mb-6 leading-tight">
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
