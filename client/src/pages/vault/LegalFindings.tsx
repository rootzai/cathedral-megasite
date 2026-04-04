import React from 'react';
import { ConfidenceIndicator } from "@/components/ConfidenceIndicator";
import { Link } from "wouter";
import { FileDown, ShieldCheck, Scale, FileText } from "lucide-react";

export default function LegalFindings() {
    const findings = [
        {
            id: "RF-01",
            title: "The Closed Loop Infrastructure",
            description: "Documentation of the interlocking relationship between the University's defense firms and the New Jersey judicial appointment process.",
            status: "Confidential Filing",
            exhibits: 14,
            level: "court" as const
        },
        {
            id: "RF-02",
            title: "Whistleblower Retaliation Logs",
            description: "Internal communications detailing the coordination of insurance termination and institutional isolation following the 2023 disclosures.",
            status: "Confidential Filing",
            exhibits: 9,
            level: "official" as const
        },
        {
            id: "RF-03",
            title: "The Marino Negotiation Record",
            description: "Evidence of the efforts to secure accountability for the oversight failures in the University's leadership chain.",
            status: "Rabner Filing",
            exhibits: 6,
            level: "court" as const
        },
        {
            id: "RF-04",
            title: "The Paul Weiss Oct 2019 Withdrawal",
            description: "Correspondence detailing the removal of Brad Karp/Paul Weiss and the subsequent pivot to Latham & Watkins.",
            status: "Institutional Record",
            exhibits: 4,
            level: "official" as const
        },
        {
            id: "RF-05",
            title: "Epstein DOJ Communications",
            description: "Original discovery of the communications between the lead seminary probe investigator and Jeffrey Epstein (2018-2019).",
            status: "DOJ Record",
            exhibits: 2,
            level: "official" as const
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            <header className="mb-16">
                <div className="inline-block px-3 py-1 mb-4 bg-red-700 text-white text-xs font-bold uppercase tracking-widest">
                    The Vault: Raw Evidence Depository
                </div>
                <div className="flex items-center gap-3 mb-6">
                    <Scale className="text-red-700" size={40} />
                    <h1 className="text-5xl font-serif italic font-bold">Confidential Legal Findings</h1>
                </div>
                <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed font-serif">
                    This executive summary catalogs the formal legal findings and documentary evidence submitted as part of the **Rabner Filings**.
                    These 35 exhibits represent the forensic reality that institutions have attempted to bury.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-lg">
                    <h2 className="text-2xl font-serif mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-red-700" size={24} />
                        The Rabner Submission
                    </h2>
                    <p className="text-zinc-300 mb-6 leading-relaxed text-sm">
                        Totaling 35 exhibits across two formal submissions to Chief Justice Rabner,
                        these filings represent the evidentiary core of the Sodom Hall investigation.
                        They bridge the gap between institutional "opinion" and verifiable "fact."
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-zinc-900 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center gap-2">
                            <FileDown size={14} />
                            Download Summary PDF
                        </button>
                    </div>
                </div>

                <div className="bg-red-50 border border-red-100 p-8 rounded-lg flex flex-col justify-center">
                    <p className="text-red-900/70 font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Notice to Counsel</p>
                    <p className="text-red-900 text-sm italic leading-relaxed">
                        "These findings represent the forensic reality that institutions have attempted to bury through
                        seal orders and retaliation. The truth is no longer a matter of discovery; it is a matter of record."
                    </p>
                </div>
            </div>

            <section>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8 pb-4 border-b">Document Index</h3>
                <div className="space-y-4">
                    {findings.map((item) => (
                        <div key={item.id} className="group bg-white border border-zinc-200 p-6 hover:border-red-600/30 transition-all shadow-sm hover:shadow-md">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-mono text-xs text-red-700 font-bold">{item.id}</span>
                                        <h4 className="text-xl font-serif">{item.title}</h4>
                                    </div>
                                    <p className="text-zinc-200 text-sm leading-relaxed mb-4">{item.description}</p>
                                    <div className="flex items-center gap-4">
                                        <ConfidenceIndicator level={item.level} />
                                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-widest border px-2 py-0.5 rounded-full">
                                            <FileText size={12} />
                                            {item.exhibits} Exhibits
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="px-3 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-widest rounded tabular-nums">
                                        {item.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="mt-20 pt-12 border-t border-zinc-200">
                <p className="text-zinc-300 text-xs italic text-center">
                    Access to original PDFs is restricted to verified legal and oversight bodies.
                    To request a confidential review, use the Signal tip line on the About page.
                </p>
            </footer>
        </div>
    );
}
