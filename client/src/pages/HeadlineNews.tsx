import React, { useState } from "react";
import { MoveRight, FileText, Map as MapIcon, Newspaper, BookOpen, Layers, Cpu, X, Download, Maximize2 } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";

export default function HeadlineNews() {
    const [viewLevel, setViewLevel] = useState<"paragraph" | "page" | "detailed" | "notebook">("paragraph");
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const downloadText = (filename: string, text: string) => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const summaries = {
        paragraph: `ESSEX COUNTY, NJ — In a landmark ruling on November 17, 2025, Judge Avion Benjamin ordered Seton Hall University to unseal the 20,000-page Latham & Watkins report, a 2018 internal investigation that documented systemic clergy abuse and institutional failure. The ruling follows years of concealment by the university, which had claimed the report was privileged despite findings that it implicated high-ranking officials, including President Joseph Reilly. Survivors and legal advocates hail the decision as a critical step toward transparency and accountability for the "McCarrick Network" that has dominated the region's ecclesiastical and legal landscape for decades.`,
        page: `The November 17 ruling marked the absolute end of institutional immunity for the Archdiocese of Newark and Seton Hall University. Judge Avion Benjamin's 52-page opinion dismantled the university’s primary defense—that an internal fact-finding mission by Latham & Watkins constituted "attorney-client privilege." The court found that the university had systematically misled the public and the judiciary about the scope of the 2018 investigation.`,
        detailed: `Forensic Breakdown: The 24,000-Page Breach... [Full Dossier Content Truncated for Download]`
    };

    return (
        <div className="page-enter max-w-6xl mx-auto px-6 py-12 space-y-16">
            {/* Modal Overlay */}
            {activeModal && (
                <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <button
                        onClick={() => setActiveModal(null)}
                        className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-[10000]"
                    >
                        <X size={40} />
                    </button>
                    <div className="max-w-7xl w-full h-full flex flex-col items-center justify-center">
                        <SmartImage
                            src={activeModal}
                            alt="Forensic View"
                            className="max-h-[85vh] w-auto object-contain shadow-2xl border-4 border-zinc-800"
                        />
                        <div className="mt-6 flex gap-4">
                            <a
                                href={activeModal}
                                download
                                className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg"
                            >
                                Download High-Res Blueprint <Download size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            )}

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

            {/* View Selector - Sequential Progression */}
            <section className="bg-zinc-100 p-2 rounded-lg inline-flex flex-wrap gap-2 border border-zinc-300 shadow-sm">
                <button
                    onClick={() => setViewLevel("paragraph")}
                    className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${viewLevel === "paragraph" ? "bg-red-600 text-white shadow-md" : "text-zinc-600 hover:bg-zinc-200"
                        }`}
                >
                    1. One Paragraph
                </button>
                <button
                    onClick={() => setViewLevel("page")}
                    className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${viewLevel === "page" ? "bg-red-600 text-white shadow-md" : "text-zinc-600 hover:bg-zinc-200"
                        }`}
                >
                    2. One Page
                </button>
                <button
                    onClick={() => setViewLevel("detailed")}
                    className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${viewLevel === "detailed" ? "bg-red-600 text-white shadow-md" : "text-zinc-600 hover:bg-zinc-200"
                        }`}
                >
                    3. 3-Page Dossier
                </button>
                <button
                    onClick={() => setViewLevel("notebook")}
                    className={`px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${viewLevel === "notebook" ? "bg-zinc-900 text-white shadow-md" : "text-zinc-600 hover:bg-zinc-200"
                        }`}
                >
                    4. NotebookLM Summary
                </button>
            </section>

            {/* Content Area */}
            <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-8 space-y-10">
                    {viewLevel === "paragraph" && (
                        <div className="prose-investigative bg-white p-10 border border-zinc-300 shadow-xl rounded-sm animate-in fade-in slide-in-from-left-4 duration-500">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-2 text-red-700 font-mono text-[10px] uppercase tracking-[0.2em]">
                                    <Layers size={12} /> Level 01 · Executive Summary
                                </div>
                                <button
                                    onClick={() => downloadText("synopsis_paragraph.txt", summaries.paragraph)}
                                    className="text-zinc-400 hover:text-red-700 transition-colors flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest"
                                >
                                    Download <Download size={12} />
                                </button>
                            </div>
                            <p className="text-2xl leading-relaxed font-serif italic text-zinc-800">
                                {summaries.paragraph}
                            </p>
                        </div>
                    )}

                    {viewLevel === "page" && (
                        <div className="prose-investigative bg-white p-10 border border-zinc-300 shadow-xl rounded-sm space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-2 text-red-700 font-mono text-[10px] uppercase tracking-[0.2em]">
                                    <BookOpen size={12} /> Level 02 · Journalistic Overview
                                </div>
                                <button
                                    onClick={() => downloadText("synopsis_one_page.txt", summaries.page)}
                                    className="text-zinc-400 hover:text-red-700 transition-colors flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest"
                                >
                                    Download <Download size={12} />
                                </button>
                            </div>
                            <h2 className="text-3xl font-black uppercase mb-4">The Benjamin Mandate</h2>
                            <p className="text-lg leading-relaxed text-zinc-800 font-serif">
                                The November 17 ruling marked the absolute end of institutional immunity for the Archdiocese of Newark and Seton Hall University. Judge Avion Benjamin's 52-page opinion dismantled the university’s primary defense—that an internal fact-finding mission by Latham & Watkins constituted "attorney-client privilege."
                            </p>
                            <p className="text-lg leading-relaxed text-zinc-800 font-serif">
                                The court found that the university had systematically misled the public and the judiciary about the scope of the 2018 investigation.
                            </p>
                        </div>
                    )}

                    {viewLevel === "detailed" && (
                        <div className="prose-investigative bg-white p-10 border border-zinc-300 shadow-xl rounded-sm space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-2 text-red-700 font-mono text-[10px] uppercase tracking-[0.2em]">
                                    <FileText size={12} /> Level 03 · 3-Page Forensic Dossier
                                </div>
                                <button
                                    onClick={() => downloadText("synopsis_dossier.txt", summaries.detailed)}
                                    className="text-zinc-400 hover:text-red-700 transition-colors flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest"
                                >
                                    Download <Download size={12} />
                                </button>
                            </div>
                            <h2 className="text-3xl font-black uppercase mb-4">Forensic Breakdown: The 24,000-Page Breach</h2>
                            <div className="space-y-6 text-lg text-zinc-800 font-serif leading-relaxed">
                                <section className="space-y-4">
                                    <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                                        I. The Latham Findings
                                    </h3>
                                    <p>
                                        The unsealed report reveals that the "Legal Triumvirate" of external counsel and university leadership orchestrated a containment strategy that bypassed canonical law and civil discovery.
                                    </p>
                                </section>
                            </div>
                        </div>
                    )}

                    {viewLevel === "notebook" && (
                        <div className="prose-investigative bg-zinc-900 p-10 border border-white/10 shadow-2xl rounded-sm space-y-8 animate-in fade-in slide-in-from-left-4 duration-500 text-zinc-300">
                            <div className="flex justify-between items-start mb-6 text-zinc-500">
                                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
                                    <Cpu size={12} /> Level 04 · NotebookLM AI Synthesis
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-widest">AI Stream Restricted</span>
                            </div>
                            <h2 className="text-3xl font-black uppercase mb-4 text-white">AI Analysis: The Scrivenor Pattern</h2>
                            <p className="text-lg font-serif">
                                NotebookLM analysis identifies a recurring structural pattern known as the "Scrivenor Buffer"—a legal and ecclesiastical firewall.
                            </p>
                        </div>
                    )}
                </div>

                {/* View into the Labyrinth Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="bg-zinc-900 text-white p-8 rounded-sm shadow-2xl">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <MapIcon size={16} className="text-red-500" /> View into the Labyrinth
                        </h3>

                        <div className="space-y-6">
                            <div className="group cursor-pointer relative overflow-hidden" onClick={() => setActiveModal("/assets/site_map_overview.png")}>
                                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Forensic Blueprint · Act I-IV</p>
                                <div className="aspect-video bg-zinc-800 border border-white/10 rounded-sm overflow-hidden group-hover:border-red-500 transition-all relative">
                                    <SmartImage
                                        src="/assets/site_map_overview.png"
                                        alt="Process Flow Overview"
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-red-600/20">
                                        <Maximize2 className="text-white drop-shadow-lg" size={32} />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-xs text-zinc-400 group-hover:text-white transition-colors uppercase tracking-widest">Narrative Flow</p>
                                    <a href="/assets/site_map_overview.png" download onClick={(e) => e.stopPropagation()} className="text-[10px] text-zinc-600 hover:text-red-500 font-bold tracking-widest uppercase">Save Map</a>
                                </div>
                            </div>

                            <div className="group cursor-pointer relative overflow-hidden" onClick={() => setActiveModal("/assets/site_wireframe_detail.png")}>
                                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Wireframe Detail · The Breach</p>
                                <div className="aspect-video bg-zinc-800 border border-white/10 rounded-sm overflow-hidden group-hover:border-red-500 transition-all relative">
                                    <SmartImage
                                        src="/assets/site_wireframe_detail.png"
                                        alt="Institutional Wireframe"
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-red-600/20">
                                        <Maximize2 className="text-white drop-shadow-lg" size={32} />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-xs text-zinc-400 group-hover:text-white transition-colors uppercase tracking-widest">Forensic Detail</p>
                                    <a href="/assets/site_wireframe_detail.png" download onClick={(e) => e.stopPropagation()} className="text-[10px] text-zinc-600 hover:text-red-500 font-bold tracking-widest uppercase">Save Detail</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Institutional Audit Kit</p>
                            <div className="grid grid-cols-2 gap-2">
                                <a href="/assets/site_map_overview.png" download className="bg-zinc-800 hover:bg-zinc-700 text-[10px] font-bold py-2 px-3 text-center uppercase tracking-widest transition-all">Sitemap PNG</a>
                                <a href="/assets/site_wireframe_detail.png" download className="bg-zinc-800 hover:bg-zinc-700 text-[10px] font-bold py-2 px-3 text-center uppercase tracking-widest transition-all">Wireframe PNG</a>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}
