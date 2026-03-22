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
        paragraph: `The Sodom Hall investigation exposes a coordinated forensic breach where institutional immunity was weaponized to silence a whistleblower. Following the November 2025 Benjamin Mandate, which unsealed the 24,000-page Latham Report buried in a SCIF for six years, a pattern of "Captured Ethics" has emerged. This includes a fabricated "fraud" investigation used to justify a grand jury subpoena to Google just 18 days after Reilly's installation, and an "Epstein Nexus" where lead investigators were in intimate communication with Jeffrey Epstein while his funds simultaneously flowed into the university.`,
        page: `THE ARCHITECTURE OF SILENCE: A 10-SECTION OVERVIEW\n\nHow a Catholic university hid a 24,000-page abuse report for six years — and the extraordinary lengths its lawyers went to keep it buried.\n\nBy Joe Reporter | TRENTON, N.J. — March 2026\n\nOn the morning of March 18, 2025, Judge Avion Benjamin asked a question: "But was the report ever identified in any of your discovery responses?" The answer was no. For six years, Seton Hall declined to mention the 24,000-page Latham Report into the "McCarrick Network." The report, commissioned in 2018, was stored in a SCIF. Judge Benjamin found out from Politico, not the university.\n\nI. THE WARNINGS\nThe report recommended removing Monsignor Joseph Reilly from leadership due to reporting failures. Cardinal Tobin did nothing. He sealed the report, stored it in a SCIF, and waited five years. In 2024, he made Reilly the president of Seton Hall.\n\nII. THE FABRICATED CRIME\nTo unmask a whistleblower, Scrivo and Porrino needed a crime. They invented fraud via parish bulletins claiming an impersonator was "soliciting money." No money was ever requested. On Nov 20, 2024—18 days after Reilly's installation—a grand jury subpoena was issued to Google.\n\nIII. THE FINGERPRINTS\nTwo letters arrived six days apart. Porrino (Marino's lawyer) sent a preservation demand. Scrivo (Seton Hall's lawyer) followed with a letter identifying the journalist by name. The civil lawyer had the fruits of the criminal subpoena. The "Code Red" was confirmed.\n\nIV. THE SHAM CHANCERY CASE\nScrivo filed a duplicative lawsuit in the Essex Chancery Division—a venue he influenced—to delay the original whistleblower case. He used a sham TRO to prevent witnesses from speaking to investigators, effectively using the court to silence the Cardinal's own investigation.\n\nV. THE MCCARRICK LEGACY (SEA GIRT)\nJoseph Reilly served as McCarrick's secretary during the 1990s. The Latham Report finds he managed access to the Sea Girt beach house where abuse occurred. Despite this, he was elevated to president, personifying the institutional refusal to hold its own accountable.\n\nVI. THE EPSTEIN-RUEMMLER NEXUS\nLead investigator Kathryn Ruemmler was in regular contact with Jeffrey Epstein during the probe. Epstein made $32k in tuition payments to Seton Hall via Deutsche Bank. Ruemmler presented her "independent" report 17 days after Epstein's death—a catastrophic conflict of interest.\n\nVII. THE NETWORKS OF POWER\nThe NJ legal machinery is "captured." Chris Porrino endorsed the AG while she was in a position to investigate him. Governors Christie, Murphy, and Corzine serve as honorary trustees, creating a repository where institutional immunity is the prime directive.\n\nVIII. CAPTURED ETHICS\nThe Office of Attorney Ethics twice declined to investigate Scrivo and Porrino. OAE Director Johanna Barba Jones is a former Christie counsel. They misapplied Rule 1:20-3(f), using Scrivo's own manufactured litigation as a shield against ethical accountability.\n\nIX. THE PENN STATE PARALLEL\nThe cover-up mirrors the Sandusky scandal. Paterno and Spanier were destroyed for what they helped hide. Seton Hall leaders who suppress investigations face potential criminal liability under Title IX (Clery Act) and child endangerment statutes.\n\nX. THE BENJAMIN MANDATE\nJudge Benjamin shattered the silence, ordering the release of the 24,000-page report. She ruled Seton Hall waived privilege by using the report's "thoroughness" as a public defense. The days of the SCIF are over; the breach is public.`,
        detailed: `THE SODOM HALL DOSSIER: THE 24,000-PAGE BREACH\n\nI. THE DOCUMENT THAT WASN'T THERE\n\nHow a Catholic university hid a 24,000-page abuse report for six years — and the extraordinary lengths its lawyers went to keep it buried. In March 2025, Judge Avion Benjamin asked: "Was the report ever identified in any of your discovery responses?" The answer was no. For six years, through the suffering of 450 abuse survivors, Seton Hall possessed a 24,000-page internal investigation but never acknowledged its existence. The report was stored in a Sensitive Compartmented Information Facility (SCIF). Judge Benjamin learned about the report from Politico, not the university. This deliberate omission suggests a multi-decade strategy of institutional concealment.\n\nII. THE WARNINGS AND THE INSTALLATION\n\nThe "Journalist"—a veteran media executive—learned that the sealed Latham Report recommended the removal of Monsignor Joseph Reilly from all leadership positions due to his failure to report sexual misconduct. Reilly had served as McCarrick's personal secretary during the 1990s, and the report documented his proximity to the predator during the years of the Sea Girt beach house abuse. Despite these findings, Cardinal Tobin took no action. He stored the report in a SCIF and waited five years. On November 4, 2024, he installed Reilly as president, declaring him "the right person at the right time."\n\nIII. THE FABRICATED CRIME (THE 18-DAY CLOCK)\n\nTo identify the whistleblower, Seton Hall's legal team needed a criminal referral. Journalism is not a crime. They invented fraud. Beginning in October 2024, the Archdiocese distributed parish bulletins claiming an impersonator was "soliciting money." This was false; no money was requested. On November 20, 2024—exactly eighteen days after Reilly's installation—a grand jury subpoena was issued to Google. The architects were Thomas Scrivo and Christopher Porrino. They used the state's criminal machinery to target a journalist who was exposing their cover-up. This was a "Code Red" coordination aimed at unmasking a source in secret.\n\nIV. THE FINGERPRINTS AND COORDINATION\n\nGoogle's transparency policy exposed the operation. Two letters arrived six days apart. On Dec 11, Porrino (Marino's personal lawyer) sent a preservation demand. On Dec 17, Scrivo (Seton Hall's lawyer) sent a letter identifying the journalist by name. The civil lawyer had the identity that the criminal subpoena had produced. Two clients, two lawyers, and one coordinated operation. When the journalist asked Scrivo "Did you order the Code Red?", there was no denial, only a massive civil subpoena package designed for further intimidation. The coordination was too precise to be accidental.\n\nV. THE MCCARRICK NETWORK AND THE BEACH HOUSE\n\nMcCarrick operated a sex ring out of the Sea Girt beach house. Joseph Reilly, as McCarrick's secretary, managed his schedule and organized the events that launched McCarrick's national career. The Latham Report finds that Reilly manage seminarian access to the beach house. One victim documented McCarrick telling him to "say three Our Fathers" after an assault. The report's removal recommendation for Reilly was based on these institutional failures during the years that mattered most. The man recommended for removal is now the institution's president.\n\nVI. THE EPSTEIN-RUEMMLER NEXUS\n\nKathryn Ruemmler led the Seton Hall investigation at Latham & Watkins while in regular, intimate contact with Jeffrey Epstein. DOJ documents reveal Epstein making three tuition payments to Seton Hall ($32k). Ruemmler received Hermès handbags and career advice from Epstein, who called her on the day of his arrest in 2019. She presented her "independent" report to the board just seventeen days after Epstein's death. This conflict of interest tainted the investigation from its inception, ensuring the findings would be sanitized and then buried for six years. The proximity of the "investigator" to a global sex trafficker while investigating a clerical sex ring is the ultimate indictment of institutional ethics.\n\nVII. THE SHAM CHANCERY CASE AND FORUM SHOPPING\n\nHaving lost four venue fights, Scrivo filed a duplicative case in the Essex Chancery Division. This court is heavily influenced by Scrivo's partner, James DiGiulio, who chairs the judicial appointments committee. Scrivo used a sham TRO to prevent former President Joseph Nyre from speaking to independent investigators. The institution used its own manufactured court orders to silence the witnesses of its own Cardinal's investigation. Why file a duplicative lawsuit? Intimidation, forum shopping, and generating "pending litigation" to block ethics complaints. This is legal gaslighting as a matter of institutional policy.\n\nVIII. CAPTURED ETHICS AND THE CHRISTIE NETWORK\n\nThe NJ Office of Attorney Ethics (OAE) twice declined to investigate Scrivo and Porrino. OAE Director Johanna Barba Jones is a former Christie assistant counsel and Seton Hall Law graduate. She runs the office that protects Christie's former Chief Counsel and former AG. New Jersey is not a state; it is a repository of captured institutions. The "Legal Triumvirate" operates with total immunity from the very regulators designed to oversee them. The OAE misapplied Rule 1:20-3(f) to shield their colleagues from accountability, claiming "pending litigation" (the case Scrivo himself manufactured) blocked the probe.\n\nIX. THE PENN STATE PARALLEL AND DISCLOSURE\n\nStructural parallels with the Penn State (Sandusky) cover-up are undeniable. Joe Paterno and Graham Spanier were destroyed for what they knew and chose to hide. Seton Hall leaders who suppress investigations, manipulate complaint logs, and fabricate bulletins face the same criminal liability. The Department of Education and federal investigators are the only entities capable of breaching this Architecture of Silence. Graham Spanier served 58 days in prison; the Penn State fine was $2.4 million. The consequences of fiduciary ruin are now arriving at Seton Hall as discovery proceeds in the Essex County Court.\n\nX. THE BENJAMIN MANDATE AND THE FINAL BREACH\n\nAssignment Judge Avion Benjamin has ordered the release of the Latham Report, ruling that Seton Hall waived privilege. She has ordered the production of 20,000 pages that were withheld for six years. The breach is total. The 24,000-page dossier is now the public record of institutional collapse. As Judge Benjamin told the lawyers: "It was not forgotten." The days of the SCIF are over, and the truth of the McCarrick legacy is finally entering the light. This is not just a breach of documents; it is the death of the Architecture of Silence. THE TRUTH WILL OUT.`
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
                            <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-zinc-800">
                                {summaries.page}
                            </div>
                        </div>
                    )}

                    {viewLevel === "detailed" && (
                        <div className="prose-investigative bg-white p-10 border border-zinc-300 shadow-xl rounded-sm space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-2 text-red-700 font-mono text-sm uppercase tracking-[0.2em]">
                                    <FileText size={14} /> Level 03 · 3-Page Forensic Dossier
                                </div>
                                <button
                                    onClick={() => downloadText("dossier_3_page.txt", summaries.detailed)}
                                    className="text-zinc-500 hover:text-red-700 transition-colors flex items-center gap-1 text-xs uppercase font-bold tracking-widest"
                                >
                                    Download <Download size={14} />
                                </button>
                            </div>
                            <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-zinc-900 bg-zinc-50 p-6 border-l-4 border-red-700">
                                {summaries.detailed}
                            </div>
                        </div>
                    )}

                    {viewLevel === "notebook" && (
                        <div className="bg-zinc-900 text-zinc-300 p-10 shadow-2xl rounded-sm space-y-8 border-t-8 border-red-700 animate-in fade-in zoom-in-95 duration-500">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2 text-red-500 font-mono text-sm uppercase tracking-[0.2em]">
                                    <Cpu size={14} /> Level 04 · NotebookLM AI Extraction
                                </div>
                                <div className="text-[10px] text-zinc-500 font-mono uppercase">Status: Analysis Complete</div>
                            </div>

                            <div className="space-y-8">
                                <p className="text-xl font-mono text-white leading-relaxed">
                                    AI synthesis identifies three core patterns of institutional survival: "Fiduciary Ruin," "The 18-Day Clock," and "Judicial Gatekeeping."
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 01: The 18-Day Pattern</h4>
                                        <p className="text-sm">High-frequency coordination detected between Reilly's installation and the Google subpoena trigger. The 18-day timeline is numerically impossible for standard legal triage.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 02: Fiduciary Ruin</h4>
                                        <p className="text-sm">Structural parallels with the Penn State (Sandusky/Paterno) cover-up. The institution prioritizes brand survival over fiduciary compliance.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 03: The Ruemmler Conflict</h4>
                                        <p className="text-sm">Documented communication between Kathryn Ruemmler and Jeffrey Epstein during the 2018 probe period. $32k payment nexus exists.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 04: The Fabricated Bulletins</h4>
                                        <p className="text-sm">Five parish bulletins were created to falsely claim fraud as a pretext for the grand jury subpoena to unmask a whistleblower.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 05: The McCarrick Slush Fund</h4>
                                        <p className="text-sm">Misuse of the "Archbishop's Fund" as a personal nexus for Vatican tipping and the management of McCarrick's sexual network.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 06: Captured Ethics Network</h4>
                                        <p className="text-sm">The Office of Attorney Ethics (OAE) director is a former Christie administration subordinate, shielding the Triumvirate from bar complaints.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 07: The 2019 Beach House Purge</h4>
                                        <p className="text-sm">Destruction of Sea Girt visitor logs coinciding with the original McCarrick unmasking, despite the 2018 discovery hold.</p>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Finding 08: SEC 10-K Forensic Omissions</h4>
                                        <p className="text-sm">Failure to disclose $20M+ in potential Title IX liabilities related to the McCarrick network to institutional bondholders.</p>
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
                                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Global Site Architecture · Navigation Map</p>
                                <div className="aspect-video bg-zinc-800 border border-white/10 rounded-sm overflow-hidden group-hover:border-red-500 transition-all relative">
                                    <SmartImage
                                        src="/assets/site_map_overview.png"
                                        alt="Global Site Architecture Map"
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-red-600/20">
                                        <Maximize2 className="text-white drop-shadow-lg" size={32} />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-xs text-zinc-400 group-hover:text-white transition-colors uppercase tracking-widest">Global Site Flow & Component Hierarchy</p>
                                    <a href="/assets/site_map_overview.png" download onClick={(e) => e.stopPropagation()} className="text-xs text-zinc-500 hover:text-red-500 font-bold tracking-widest uppercase">Save Map</a>
                                </div>
                            </div>

                            <div className="group cursor-pointer relative overflow-hidden" onClick={() => setActiveModal("/assets/site_wireframe_detail.png")}>
                                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Technical Wireframe · CSS Layout Breakdown</p>
                                <div className="aspect-video bg-zinc-800 border border-white/10 rounded-sm overflow-hidden group-hover:border-red-500 transition-all relative">
                                    <SmartImage
                                        src="/assets/site_wireframe_detail.png"
                                        alt="Technical Wireframe Detail"
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-red-600/20">
                                        <Maximize2 className="text-white drop-shadow-lg" size={32} />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-xs text-zinc-400 group-hover:text-white transition-colors uppercase tracking-widest">View Hierarchy & State Management Architecture</p>
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
