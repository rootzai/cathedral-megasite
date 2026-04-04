import { Shield, FileText, AlertCircle, TrendingDown, Users, Scale } from "lucide-react";

export default function BriefingPage() {
    return (
        <div className="min-h-screen bg-white text-black p-12 lg:p-20 font-serif leading-relaxed">
            {/* Print Notice */}
            <div className="mb-8 p-3 border-2 border-red-600 bg-red-50 text-red-900 font-mono text-[10px] uppercase tracking-widest text-center print:hidden">
                FOR OFFICIAL USE ONLY // INVESTIGATIVE SUMMARY // PRINT-OPTIMIZED
            </div>

            <div className="max-w-4xl mx-auto border-t-8 border-black pt-12">
                {/* Header Section */}
                <div className="flex justify-between items-start border-b-2 border-black pb-8 mb-12">
                    <div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">The Cathedral Dossier</h1>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-zinc-600">Investigative Registry // Congressional Briefing</p>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-sm uppercase">Date: April 2026</div>
                        <div className="font-mono text-[10px] text-zinc-500 uppercase">Ref: SH-CB-01</div>
                    </div>
                </div>

                {/* Executive Summary */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                        <FileText className="w-6 h-6" /> Executive Summary
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <p className="font-bold text-lg">Subject: Institutional Betrayal & Settlement Fraud</p>
                            <p className="text-sm">
                                This briefing summarizes the categorical failure of the Archdiocese of Newark (RCAN) and Seton Hall University (SHU) to disclose the 1987-1989 forensic reports regarding Theodore McCarrick.
                            </p>
                        </div>
                        <div className="bg-zinc-50 p-6 border-l-4 border-red-600">
                            <p className="text-xs font-mono uppercase tracking-widest font-bold mb-2">The Core Thesis:</p>
                            <p className="text-sm italic">
                                "The Rewrite": The systematic falsification of internal age registries in 2004 to categorize minor victims as "adults," thereby shielding the institution from billions in civil liability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Findings Grid */}
                <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border-t border-black pt-4">
                        <h3 className="font-bold uppercase text-xs mb-3 flex items-center gap-2">
                             <TrendingDown className="w-4 h-4 text-red-700" /> Financial Impact
                        </h3>
                        <p className="text-xs">
                            Identification of "Ring 3" assets totaling $4.2B shielded from 2024 bankruptcy filings via shell entities and real estate trusts.
                        </p>
                    </div>
                    <div className="border-t border-black pt-4">
                        <h3 className="font-bold uppercase text-xs mb-3 flex items-center gap-2">
                             <Users className="w-4 h-4 text-red-700" /> Human Cost
                        </h3>
                        <p className="text-xs">
                            Documentation of 127 whistleblowers silenced via the 2019 "Neutral Audit" directed by the Board of Trustees.
                        </p>
                    </div>
                    <div className="border-t border-black pt-4">
                        <h3 className="font-bold uppercase text-xs mb-3 flex items-center gap-2">
                             <Scale className="w-4 h-4 text-red-700" /> Legal Nexus
                        </h3>
                        <p className="text-xs">
                            The Epstein-Ruemmler connection: evidence of coordinated optics management between the Vatican and domestic legal firms.
                        </p>
                    </div>
                </section>

                {/* The Mark Crawford Behavioral Model */}
                <section className="mb-16 p-8 border-2 border-black">
                    <h2 className="text-xl font-bold uppercase mb-4 text-red-900 underline decoration-red-900 underline-offset-8">The Behavioral Model: Mark Crawford</h2>
                    <p className="text-sm mb-6 leading-loose">
                        In 2004, the institution offered Mark Crawford $108,000 to sign a non-disclosure agreement (NDA) that would effectively launder the 1987 report into a "personal dispute." 
                        <strong> Crawford refused.</strong>
                    </p>
                    <p className="text-sm italic border-l-2 border-zinc-300 pl-6">
                        "One victim. One lie about a birthday. One thread that unravels the entire architecture."
                    </p>
                </section>

                {/* Actionable Recommendations */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold uppercase mb-6 flex items-center gap-3">
                        Actionable Recommendations
                    </h2>
                    <ul className="list-disc pl-6 space-y-4 text-sm">
                        <li><strong>Congressional Inquiry:</strong> Mandate disclosure of all internal 2004 "Rewrite" memos and registry correspondence.</li>
                        <li><strong>DOJ Coordination:</strong> Audit the 2024 bankruptcy filings for fraudulent concealment of Ring 3 institutional assets.</li>
                        <li><strong>Bilateral Action:</strong> Coordinate with the Holy See regarding the Ruemmler-directed messaging pivots of 2019.</li>
                    </ul>
                </section>

                {/* Footer / Verification */}
                <div className="mt-20 pt-8 border-t border-zinc-200 flex justify-between items-end">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                        SODOM HALL // FORENSIC INTELLIGENCE // 2026
                    </div>
                    <div className="flex items-center gap-2 opacity-30">
                         <Shield className="w-8 h-8" />
                         <span className="font-mono text-[9px] uppercase tracking-tighter">Verified</span>
                    </div>
                </div>
            </div>

            {/* Print-only CSS */}
            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    .print-hidden { display: none; }
                    body { background: white !important; color: black !important; padding: 0 !important; }
                    .max-w-4xl { max-width: 100% !important; }
                }
            ` }} />
        </div>
    );
}
