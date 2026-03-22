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
        paragraph: `The Sodom Hall investigation exposes a coordinated forensic breach where institutional immunity was weaponized to silence a whistleblower. Following the November 2025 Benjamin Mandate, which unsealed the 24,000-page Latham Report buried in a SCIF for six years, a pattern of "Captured Ethics" has emerged. This includes a fabricated "fraud" investigation used to justify a grand jury subpoena to Google just 18 days after Reilly’s installation, and an "Epstein Nexus" where lead investigators were in intimate communication with Jeffrey Epstein while his funds simultaneously flowed into the university.`,
        page: `The "18-Day Clock" represents the definitive proof of a coordinated institutional strike against transparency. On November 20, 2024—less than three weeks after Msgr. Reilly was installed as president—the university initiated a criminal grand jury subpoena to Google. The purpose was clear: unmask the anonymous whistleblower ("The Journalist") who had breached the Architecture of Silence. This "Code Red" coordination involved Chief Counsel Christopher Scrivo, former AG Christopher Porrino, and White House Counsel Kathryn Ruemmler, all alumni and former Christie administration officials.\n\nWhile the university claimed to be the victim of a "fraud" involving fabricated archdiocesan bulletins, the forensic trail suggests the bulletins were a pretext to justify the subpoena. Simultaneously, the 24,000-page Latham Report was buried in a Sensitive Compartmented Information Facility (SCIF), ensuring that its findings on the "Beach House" and the "McCarrick Network" would remain shielded from the public during the crucial 2024 installation period. The subsequent February 19, 2026 dismissal of the Nyre case represents the logical conclusion of a system that has captured the judiciary it helped create.`,
        detailed: `FORENSIC DOSSIER: THE 24,000-PAGE BREACH\n\nI. THE FABRICATED CRIME\nDetailed analysis of the "Fraud" bulletins invented to justify the November 2024 grand jury subpoena. Records indicate that Porrino initiated a preservation letter to the whistleblower exactly 18 days after Reilly's installation, while Scrivo simultaneously forum-shopped the civil case to Essex Chancery to keep it under Christie-appointed judges.\n\nII. THE SCIF CONCEALMENT\nAn audit of the six-year silence surrounding the 2018 Latham & Watkins investigation. The report was stored in a SCIF to prevent Board oversight. The Benjamin Mandate (Nov 2025) unsealed the 24k pages, revealing that high-level officials (The "Dirty Dozen") had documented knowledge of the McCarrick pipeline while it was still active.\n\nIII. THE EPSTEIN NEXUS\nForensic mapping of the Kathryn Ruemmler connection. While lead investigator for Latham, Ruemmler was in direct communication with Jeffrey Epstein regarding tuition payments ($32k) and personal legal matters. This represents a catastrophic conflict of interest that tainted the "independent" nature of the probe from its inception.\n\nIV. CAPTURED ETHICS\nAn inventory of the Office of Attorney Ethics (OAE) declinations. The OAE, run by former Christie counsel Johanna Barba Jones, has systematically declined bar complaints against Scrivo and Porrino, effectively shielding the "Legal Triumvirate" from ethical accountability despite documented forensic breaches.`
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
                                <div className="flex items-center gap-2 text-red-700 font-mono text-sm uppercase tracking-[0.2em]">
                                    <Layers size={14} /> Level 01 · Executive Summary
                                </div>
                                <button
                                    onClick={() => downloadText("synopsis_paragraph.txt", summaries.paragraph)}
                                    className="text-zinc-500 hover:text-red-700 transition-colors flex items-center gap-1 text-xs uppercase font-bold tracking-widest"
                                >
                                    Download <Download size={14} />
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
                                <div className="flex items-center gap-2 text-red-700 font-mono text-sm uppercase tracking-[0.2em]">
                                    <BookOpen size={14} /> Level 02 · Journalistic Overview
                                </div>
                                <button
                                    onClick={() => downloadText("synopsis_one_page.txt", summaries.page)}
                                    className="text-zinc-500 hover:text-red-700 transition-colors flex items-center gap-1 text-xs uppercase font-bold tracking-widest"
                                >
                                    Download <Download size={14} />
                                </button>
                            </div>
                            <h2 className="text-3xl font-black uppercase mb-4">The Benjamin Mandate</h2>
                            <div className="space-y-4">
                                {summaries.page.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-lg leading-relaxed text-zinc-800 font-serif">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}

                    {viewLevel === "detailed" && (
                        <div className="prose-investigative bg-white p-10 border border-zinc-300 shadow-xl rounded-sm space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-2 text-red-700 font-mono text-sm uppercase tracking-[0.2em]">
                                    <FileText size={14} /> Level 03 · Forensic Dossier
                                </div>
                                <button
                                    onClick={() => downloadText("synopsis_dossier.txt", summaries.detailed)}
                                    className="text-zinc-500 hover:text-red-700 transition-colors flex items-center gap-1 text-xs uppercase font-bold tracking-widest"
                                >
                                    Download <Download size={14} />
                                </button>
                            </div>
                            <h2 className="text-3xl font-black uppercase mb-4 border-b pb-2">Forensic Breakdown: The 24k Breach</h2>
                            <div className="space-y-8 text-lg text-zinc-800 font-serif leading-relaxed">
                                {summaries.detailed.split('\n\n').filter(s => s.trim().length > 0 && !s.includes('FORENSIC DOSSIER')).map((section, i) => {
                                    const lines = section.split('\n');
                                    return (
                                        <section key={i} className="space-y-4">
                                            <h3 className="text-xl font-bold uppercase tracking-tight text-red-700">
                                                {lines[0]}
                                            </h3>
                                            <p>{lines.slice(1).join(' ')}</p>
                                        </section>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {viewLevel === "notebook" && (
                        <div className="prose-investigative bg-zinc-900 p-10 border border-white/10 shadow-2xl rounded-sm space-y-8 animate-in fade-in slide-in-from-left-4 duration-500 text-zinc-300">
                            <div className="flex justify-between items-start mb-6 text-zinc-500">
                                <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-zinc-300">
                                    <Cpu size={14} /> Level 04 · NotebookLM AI Synthesis
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-widest animate-pulse text-red-500">Analysis Active</span>
                            </div>
                            <h2 className="text-3xl font-black uppercase mb-4 text-white">Pattern Recognition: The Scrivenor Effect</h2>
                            <div className="space-y-6 font-serif">
                                <p className="text-lg leading-relaxed border-l-2 border-red-500 pl-6 italic bg-white/5 py-4">
                                    "NotebookLM analysis identifies a recurring structural pattern known as the 'Scrivenor Buffer'—a legal and ecclesiastical firewall designed to prioritize 'Continuity of Presence' over 'Institutional Integrity'."
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 01: The 18-Day Pattern</h4>
                                        <p className="text-sm">High-frequency coordination detected between Reilly's installation and the Google subpoena trigger. The timeline is too tight for a standard criminal referral.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 02: Fiduciary Ruin</h4>
                                        <p className="text-sm">Structural parallels with the Penn State (Sandusky/Paterno) cover-up. The institution prioritizes brand survival over fiduciary compliance.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 03: The Ruemmler Conflict</h4>
                                        <p className="text-sm">Documented communication between lead investigator Kathryn Ruemmler and Jeffrey Epstein during the 2018 probe period ($32k payment nexus).</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Conclusion</h4>
                                        <p className="text-sm">The "Architecture of Silence" was not passive. It was an active legal and financial shield built on the Christie administration network.</p>
                                    </div>
                                </div>
                            </div>
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
                                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Forensic Blueprint · Act I-V</p>
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
                                    <p className="text-xs text-zinc-400 group-hover:text-white transition-colors uppercase tracking-widest">Comprehensive Narrative Flow</p>
                                    <a href="/assets/site_map_overview.png" download onClick={(e) => e.stopPropagation()} className="text-xs text-zinc-500 hover:text-red-500 font-bold tracking-widest uppercase">Save Map</a>
                                </div>
                            </div>

                            <div className="group cursor-pointer relative overflow-hidden" onClick={() => setActiveModal("/assets/site_wireframe_detail.png")}>
                                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Forensic Detail · The Breach (Expanded)</p>
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
                                    <p className="text-xs text-zinc-400 group-hover:text-white transition-colors uppercase tracking-widest">Clever Architecture</p>
                                    <a href="/assets/site_wireframe_detail.png" download onClick={(e) => e.stopPropagation()} className="text-xs text-zinc-500 hover:text-red-500 font-bold tracking-widest uppercase">Save Detail</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Institutional Audit Kit</p>
                            <div className="grid grid-cols-2 gap-2">
                                <a href="/assets/site_map_overview.png" download className="bg-zinc-800 hover:bg-zinc-700 text-xs font-bold py-2.5 px-3 text-center uppercase tracking-widest transition-all">Sitemap PNG</a>
                                <a href="/assets/site_wireframe_detail.png" download className="bg-zinc-800 hover:bg-zinc-700 text-xs font-bold py-2.5 px-3 text-center uppercase tracking-widest transition-all">Wireframe PNG</a>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}
