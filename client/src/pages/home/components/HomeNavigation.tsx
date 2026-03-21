import React from "react";

export function HomeNavigation() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gray-900 border-y border-red-900/10 text-zinc-900">
            <div className="container mx-auto max-w-6xl px-3 sm:px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight uppercase">The Descent</h2>
                <p className="text-gray-400 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-12 text-center underline decoration-red-600/50 underline-offset-8">Complete Forensic Investigation</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <a href="#act-vii" className="block p-6 bg-white border border-gray-800 hover:border-zinc-300 transition-all rounded-lg group shadow-lg text-zinc-900">
                        <h3 className="text-xl font-bold mb-2 text-zinc-700 group-hover:text-red-400">Act VII</h3>
                        <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Reckoning</p>
                        <p className="text-gray-400 text-sm italic">May 2026: Final Deadline</p>
                    </a>

                    <a href="#act-ix" className="block p-6 bg-white border border-gray-800 hover:border-zinc-300 transition-all rounded-lg group shadow-lg text-zinc-900">
                        <h3 className="text-xl font-bold mb-2 text-zinc-700 group-hover:text-red-400">Act IX</h3>
                        <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Dossier</p>
                        <p className="text-gray-400 text-sm italic">Feb 2026: Supreme Court Referral</p>
                    </a>

                    <a href="#act-viii" className="block p-6 bg-white border border-gray-800 hover:border-zinc-300 transition-all rounded-lg group shadow-lg text-zinc-900">
                        <h3 className="text-xl font-bold mb-2 text-zinc-700 group-hover:text-red-400">Act VIII</h3>
                        <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Vault</p>
                        <p className="text-gray-400 text-sm italic">Nov 2025: The Order to Unseal</p>
                    </a>

                    <a href="#act-vi" className="block p-6 bg-white border border-gray-800 hover:border-zinc-300 transition-all rounded-lg group text-zinc-900">
                        <h3 className="text-xl font-bold mb-2 text-zinc-700 group-hover:text-red-400">Act VI</h3>
                        <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Succession</p>
                        <p className="text-gray-400 text-sm italic">2027: Who Inherits the Cathedral?</p>
                    </a>

                    <a href="#act-v" className="block p-6 bg-white border border-gray-800 hover:border-zinc-300 transition-all rounded-lg group text-zinc-900">
                        <h3 className="text-xl font-bold mb-2 text-zinc-700 group-hover:text-red-400">Act V</h3>
                        <p className="text-lg mb-2 font-bold uppercase tracking-wider">Rome Knew</p>
                        <p className="text-gray-400 text-sm italic">2020: The Vatican Connection</p>
                    </a>

                    <a href="#act-iv" className="block p-6 bg-white border border-gray-800 hover:border-zinc-300 transition-all rounded-lg group text-zinc-900">
                        <h3 className="text-xl font-bold mb-2 text-zinc-700 group-hover:text-red-400">Act IV</h3>
                        <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Courtroom</p>
                        <p className="text-gray-400 text-sm italic">2023-25: Survivors & The Reckoning</p>
                    </a>

                    <a href="#act-iii" className="block p-6 bg-white border border-gray-800 hover:border-zinc-300 transition-all rounded-lg group text-zinc-900">
                        <h3 className="text-xl font-bold mb-2 text-zinc-700 group-hover:text-red-400">Act III</h3>
                        <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Concealment</p>
                        <p className="text-gray-400 text-sm italic">2020-23: The Network of Silence</p>
                    </a>

                    <a href="#act-ii" className="block p-6 bg-white border border-gray-800 hover:border-zinc-300 transition-all rounded-lg group text-zinc-900">
                        <h3 className="text-xl font-bold mb-2 text-zinc-700 group-hover:text-red-400">Act II</h3>
                        <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Labyrinth</p>
                        <p className="text-gray-400 text-sm italic">1987-2020: Building the Network</p>
                    </a>

                    <a href="#act-i" className="block p-6 bg-white border border-gray-800 hover:border-zinc-300 transition-all rounded-lg group text-center text-zinc-900">
                        <h3 className="text-xl font-bold mb-2 text-zinc-700 group-hover:text-red-400">Act I</h3>
                        <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Vault</p>
                        <p className="text-gray-400 text-sm italic">2019: The Secret Meeting</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
