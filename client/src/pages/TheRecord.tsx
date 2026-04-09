import React from 'react';
import { ConfidenceIndicator } from "@/components/ConfidenceIndicator";
import { CheckCircle2, XCircle, Search, Filter, AlertCircle, FileText, FileDown } from "lucide-react";
import { JourneyNav } from "@/components/JourneyNav";

export default function TheRecord() {
    const facts = [
        {
            claim: "Kathryn Ruemmler coordinated personal meetings with Jeffrey Epstein during the Seton Hall probe.",
            evidence: "DOJ Epstein Document Release (Feb 2019 logs)",
            level: "official" as const,
            disputed: false,
            lastVerified: "Oct 2025"
        },
        {
            claim: "Brad Karp and Paul Weiss removed themselves from the McCarrick investigation in Oct 2019.",
            evidence: "Latham & Watkins Institutional Records",
            level: "official" as const,
            disputed: false,
            lastVerified: "Oct 2025"
        },
        {
            claim: "University President Dr. Joseph Nyre had health insurance terminated after whistleblowing.",
            evidence: "Essex County Superior Court Case No. ESX-L-006240-23",
            level: "court" as const,
            disputed: false,
            lastVerified: "Oct 2025"
        },
        {
            claim: "A criminal grand jury subpoena was issued to unmask an anonymous whistleblower.",
            evidence: "NJ Superior Court Miscellaneous Docket",
            level: "court" as const,
            disputed: false,
            lastVerified: "Oct 2025"
        },
        {
            claim: "Bishop Elias Lorenzo was ordained and promoted through the McCarrick network.",
            evidence: "Vatican McCarrick Report (2020), pg. 256-280",
            level: "official" as const,
            disputed: false,
            lastVerified: "Oct 2025"
        },
        {
            claim: "Regent Kevin Flood joined the whistleblowers in 2023.",
            evidence: "Institutional Board Minutes and Sealed Findings",
            level: "official" as const,
            disputed: false,
            lastVerified: "Oct 2025"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-20 min-h-screen">
            <header className="mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl font-serif mb-2">The Record</h1>
                        <p className="text-zinc-300 uppercase tracking-widest text-xs font-bold">A Living Fact-Check Dashboard</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="bg-zinc-900 text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-red-700 transition-all border border-zinc-800 shadow-xl group">
                            <FileDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                            Download Fact-Check (PDF)
                        </button>
                        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-sm border border-emerald-100 flex items-center gap-2">
                            <CheckCircle2 size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">0 Factual Disputes</span>
                        </div>
                        <div className="bg-zinc-100 text-zinc-600 px-4 py-2 rounded-sm border border-zinc-200 flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-widest tabular-nums italic">Last Verified: Oct 21, 2025</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-amber-50 border border-amber-200 text-amber-900 rounded-sm mb-12">
                    <div className="flex gap-4">
                        <AlertCircle className="shrink-0" size={24} />
                        <p className="text-sm leading-relaxed">
                            **Note to Institutions**: This dashboard weaponizes the "Corrections" concept. If any fact listed below is disputed,
                            submit a formal correction request via the Corrections page. We will publish your dispute alongside our 35 exhibits.
                            **To date, no party has challenged a single fact on this site.**
                        </p>
                    </div>
                </div>
            </header>

            {/* Control Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search the docket..."
                        className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:border-red-600 transition-colors text-sm"
                    />
                </div>
                <button className="px-6 py-3 bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-200 transition-colors">
                    <Filter size={16} />
                    Filter by Type
                </button>
            </div>

            {/* Facts Table */}
            <div className="border border-zinc-200 rounded-sm overflow-hidden bg-white shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-zinc-50 border-b border-zinc-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Claim / Finding</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400 w-48 text-center">Evidentiary Weight</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400 w-32 text-center">Disputed?</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-zinc-400 w-32 text-center">Reference</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200">
                        {facts.map((fact, idx) => (
                            <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                                <td className="px-6 py-6 border-r border-zinc-100">
                                    <p className="text-zinc-900 font-medium leading-relaxed mb-2">{fact.claim}</p>
                                    <div className="flex items-center gap-2 text-xs text-zinc-400 italic">
                                        <FileText size={12} />
                                        Source: {fact.evidence}
                                    </div>
                                </td>
                                <td className="px-6 py-6 border-r border-zinc-100">
                                    <div className="flex justify-center">
                                        <ConfidenceIndicator level={fact.level} />
                                    </div>
                                </td>
                                <td className="px-6 py-6 border-r border-zinc-100">
                                    <div className="flex justify-center">
                                        {fact.disputed ? (
                                            <span className="text-red-700"><XCircle size={18} /></span>
                                        ) : (
                                            <span className="text-emerald-500"><CheckCircle2 size={18} /></span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-6 text-center">
                                    <button className="text-xs font-bold text-red-700 hover:text-red-900 uppercase tracking-widest transition-colors">
                                        View Exhibit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <footer className="mt-12 flex items-center justify-between text-zinc-400 text-xs italic">
                <p>Total evidentiary markers: 78</p>
                <p>Last verified: October 21, 2025</p>
            </footer>

            <div className="mt-20 border-t border-zinc-100 pt-10">
                <JourneyNav />
            </div>
        </div>
    );
}
