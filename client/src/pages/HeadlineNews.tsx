import React, { useState } from "react";
import { MoveRight, FileText, Map as MapIcon, Newspaper } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";

export default function HeadlineNews() {
    const [viewLevel, setViewLevel] = useState<"paragraph" | "page" | "detailed">("paragraph");

    return (
        <div className="page-enter max-w-6xl mx-auto px-6 py-12 space-y-16">
            <header className="border-b-4 border-zinc-900 pb-8">
                <div className="flex items-center gap-3 mb-4 text-red-700 uppercase font-mono text-sm tracking-widest font-bold">
                    <Newspaper size={20} />
                    Flash Bulletin · Forensic Audit
                </div>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                    Headline News
                </h1>
                <p className="text-xl font-serif italic text-zinc-700 max-w-3xl">
                    The Benjamin Ruling: Unsealing the Latham Report and the collapse of institutional immunity.
                </p>
            </header>

            {/* View Selector */}
            <section className="bg-zinc-100 p-2 rounded-lg inline-flex gap-2 border border-zinc-300 shadow-sm">
                <button
                    onClick={() => setViewLevel("paragraph")}
                    className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${viewLevel === "paragraph" ? "bg-red-600 text-white shadow-md" : "text-zinc-600 hover:bg-zinc-200"
                        }`}
                >
                    1 Paragraph
                </button>
                <button
                    onClick={() => setViewLevel("page")}
                    className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${viewLevel === "page" ? "bg-red-600 text-white shadow-md" : "text-zinc-600 hover:bg-zinc-200"
                        }`}
                >
                    1 Page
                </button>
                <button
                    onClick={() => setViewLevel("detailed")}
                    className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${viewLevel === "detailed" ? "bg-red-600 text-white shadow-md" : "text-zinc-600 hover:bg-zinc-200"
                        }`}
                >
                    Full Dossier
                </button>
            </section>

            {/* Content Area */}
            <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-8 space-y-10">
                    {viewLevel === "paragraph" && (
                        <div className="prose-investigative bg-white p-10 border border-zinc-300 shadow-xl rounded-sm animate-in fade-in slide-in-from-left-4 duration-500">
                            <p className="text-2xl leading-relaxed font-serif italic text-zinc-800">
                                ESSEX COUNTY, NJ — In a landmark ruling on November 17, 2025, Judge Avion Benjamin ordered Seton Hall University to unseal the 20,000-page Latham & Watkins report, a 2018 internal investigation that documented systemic clergy abuse and institutional failure. The ruling follows years of concealment by the university, which had claimed the report was privileged despite findings that it implicated high-ranking officials, including President Joseph Reilly. Survivors and legal advocates hail the decision as a critical step toward transparency and accountability for the "McCarrick Network" that has dominated the region's ecclesiastical and legal landscape for decades.
                            </p>
                        </div>
                    )}

                    {viewLevel === "page" && (
                        <div className="prose-investigative bg-white p-10 border border-zinc-300 shadow-xl rounded-sm space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                            <h2 className="text-3xl font-black uppercase mb-4">The Benjamin Mandate</h2>
                            <p className="text-lg leading-relaxed text-zinc-800 font-serif">
                                The November 17 ruling marked the absolute end of institutional immunity for the Archdiocese of Newark and Seton Hall University. Judge Avion Benjamin's 52-page opinion dismantled the university’s primary defense—that an internal fact-finding mission by Latham & Watkins constituted "attorney-client privilege."
                            </p>
                            <p className="text-lg leading-relaxed text-zinc-800 font-serif">
                                The court found that the university had systematically misled the public and the judiciary about the scope of the 2018 investigation. While the university publicly maintained it was "transparent," the report—which implicated President Joseph Reilly and eleven other senior clergymen—remained locked in a vault for six years. Judge Benjamin gave the university a 30-day ultimatum to produce the entire set of documents to the plaintiffs' counsel.
                            </p>
                            <div className="bg-zinc-50 p-6 border-l-4 border-red-600 italic font-serif text-xl">
                                "There is a legitimate need for the evidence. The evidence is material and relevant. Survivors are entitled to the truth." — Judge Avion Benjamin
                            </div>
                        </div>
                    )}

                    {viewLevel === "detailed" && (
                        <div className="prose-investigative bg-white p-10 border border-zinc-300 shadow-xl rounded-sm space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                            <h2 className="text-3xl font-black uppercase mb-4">Forensic Breakdown: The 24,000-Page Breach</h2>
                            <div className="space-y-6 text-lg text-zinc-800 font-serif leading-relaxed">
                                <section className="space-y-4">
                                    <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                                        <FileText size={18} className="text-red-700" /> I. The Latham Findings
                                    </h3>
                                    <p>
                                        The unsealed report reveals that the "Legal Triumvirate" of external counsel and university leadership orchestrated a containment strategy that bypassed canonical law and civil discovery. The 2018 audit specifically recommended that Joseph Reilly step down from all leadership positions due to his prior knowledge of abuse claims—a recommendation that was suppressed when Reilly was subsequently promoted to the university presidency.
                                    </p>
                                </section>

                                <section className="space-y-4 border-t border-zinc-100 pt-6">
                                    <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                                        <FileText size={18} className="text-red-700" /> II. The Financial Slush Funds
                                    </h3>
                                    <p>
                                        Buried within the forensic accounting appendices is the tracing of the "Archbishop's Fund"—a discretionary slush fund utilized by McCarrick and his successors to provide "Vatican Tipping" and ensure institutional silence across international jurisdictions.
                                    </p>
                                </section>

                                <section className="space-y-4 border-t border-zinc-100 pt-6">
                                    <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                                        <FileText size={18} className="text-red-700" /> III. The Judicial Order
                                    </h3>
                                    <p>
                                        Judge Benjamin's order for production includes not only the report but the underlying communications between the Board of Regents and the Archdiocese. This represents the first time the internal "Architecture of Silence" will be exposed to public scrutiny through legal mandate.
                                    </p>
                                </section>
                            </div>
                        </div>
                    )}
                </div>

                {/* Site Maps Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="bg-zinc-900 text-white p-8 rounded-sm shadow-2xl">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <MapIcon size={16} className="text-red-500" /> Nano Pro Site Maps
                        </h3>

                        <div className="space-y-6">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Forensic Blueprint · Act I-IV</p>
                                <div className="aspect-video bg-zinc-800 border border-white/10 rounded-sm overflow-hidden group-hover:border-red-500 transition-all">
                                    <SmartImage
                                        src="/site_map_overview.png"
                                        alt="Process Flow Overview"
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                    />
                                </div>
                                <p className="text-xs mt-2 text-zinc-400 group-hover:text-white transition-colors">Narrative Flow Overview</p>
                            </div>

                            <div className="group cursor-pointer">
                                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Wireframe Detail · The Breach</p>
                                <div className="aspect-video bg-zinc-800 border border-white/10 rounded-sm overflow-hidden group-hover:border-red-500 transition-all">
                                    <SmartImage
                                        src="/site_wireframe_detail.png"
                                        alt="Institutional Wireframe"
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                    />
                                </div>
                                <p className="text-xs mt-2 text-zinc-400 group-hover:text-white transition-colors">Forensic Architecture Detail</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <button className="w-full bg-red-700 hover:bg-red-800 py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                                Download Full Evidence Kit <MoveRight size={14} />
                            </button>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}
