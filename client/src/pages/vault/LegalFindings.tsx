import React from 'react';
import { ConfidenceIndicator } from "@/components/ConfidenceIndicator";
import { Link } from "wouter";
import { FileDown, ShieldCheck, Scale, FileText } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Term } from "@/components/Term";

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
            description: "Correspondence detailing the removal of Brad Karp/Paul Weiss and the subsequent pivot to {<Term id=\"Latham Archive\">Latham & Watkins</Term>}.",
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
        <div className="text-foreground font-cormorant">
            <SEO
                title="The Vault"
                description="Executive summary of the Rabner Filings and core documentary evidence."
            />
            {/* Hero — the vault */}
            <div className="relative overflow-hidden h-44 md:h-56 border-b border-white/5">
                <img src="/assets/symbols/gavel_scales.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] select-none pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
                {/* ⊢ — The Vault. Evidence proves the assertion */}
                <div className="absolute top-4 right-4 text-white/[0.03] hover:text-white/20 text-7xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">⊢</div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-20">
                <header className="mb-16">
                    <div className="inline-block px-3 py-1 mb-4 bg-primary text-primary-foreground text-xs font-black font-courier uppercase tracking-[0.4em]">
                        The Vault: Raw Evidence Depository
                    </div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                            <Scale className="text-primary w-10 h-10" />
                            <h1 className="text-5xl font-black font-cinzel tracking-tighter uppercase text-foreground">Confidential Legal Findings</h1>
                        </div>
                        <button
                            onClick={() => window.print()}
                            className="flex items-center gap-2 px-6 py-3 bg-[#8b1a1a] hover:bg-white hover:text-[#8b1a1a] text-white transition-all duration-500 font-mono text-xs font-black tracking-widest group shadow-[0_0_30px_rgba(139,26,26,0.2)]"
                        >
                            <FileDown className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            DOWNLOAD SUMMARY PDF
                        </button>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-serif italic">
                        This executive summary catalogs the formal legal findings and documentary evidence submitted as part of the {<Term id="Rabner Filings">Rabner Filings</Term>}.
                        These 35 exhibits represent the forensic reality that institutions have attempted to bury.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-card text-card-foreground border border-border p-8 hover:border-primary/30 transition-colors">
                        <h2 className="text-2xl font-black font-cinzel text-foreground mb-4 flex items-center gap-3 tracking-widest uppercase">
                            <ShieldCheck className="text-primary w-6 h-6" />
                            The Rabner Submission
                        </h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed font-serif italic">
                            Totaling 35 exhibits across two formal submissions to Chief Justice Rabner,
                            these filings represent the evidentiary core of the Sodom Hall investigation.
                            They bridge the gap between institutional "opinion" and verifiable "fact."
                        </p>
                    </div>

                    <div className="bg-muted text-muted-foreground border border-primary/20 p-8 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none" />
                        <p className="text-primary font-black font-courier text-xs uppercase tracking-[0.4em] mb-4 relative z-10">Notice to Counsel</p>
                        <p className="text-muted-foreground text-lg italic leading-relaxed font-serif relative z-10">
                            "These findings represent the forensic reality that institutions have attempted to bury through
                            seal orders and retaliation. The truth is no longer a matter of discovery; it is a matter of record."
                        </p>
                    </div>
                </div>

                <section>
                    <h3 className="text-xs font-black font-courier uppercase tracking-[0.4em] text-muted-foreground mb-8 pb-4 border-b border-border">Document Index</h3>
                    <div className="space-y-4">
                        {findings.map((item) => (
                            <div key={item.id} className="group bg-card text-card-foreground border border-border p-8 hover:border-primary/40 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="font-courier text-xs text-[#8b1a1a] font-black tracking-widest">{item.id}</span>
                                            <h4 className="text-2xl font-black font-cinzel text-white tracking-widest">{item.title}</h4>
                                        </div>
                                        <p className="text-zinc-500 font-serif leading-relaxed italic mb-6 max-w-2xl">{item.description}</p>
                                        <div className="flex items-center gap-6">
                                            <ConfidenceIndicator level={item.level} />
                                            <span className="flex items-center gap-2 text-xs font-black font-courier text-zinc-600 uppercase tracking-[0.3em] border border-white/5 px-3 py-1.5 rounded-sm">
                                                <FileText size={12} />
                                                {item.exhibits} Exhibits
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="px-4 py-2 bg-white/5 text-zinc-400 text-xs font-black font-courier uppercase tracking-[0.4em] rounded-sm">
                                            {item.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="py-20" />
            </div>
        </div>
    );
}
