import React from "react";
import { Link } from "wouter";

export default function BreachHub() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif">
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-2 h-2 rounded-full bg-[#8b1a1a] animate-pulse" />
                                <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.4em]">
                                    Active Litigation Tracker
                                </span>
                            </div>
                            <h1 className="text-6xl font-bold text-white uppercase tracking-[0.1em] mb-10 leading-tight">
                                The <span className="text-[#8b1a1a]">Breach</span>
                            </h1>
                            <p className="text-xl text-[#888] leading-relaxed mb-12">
                                Real-time updates on the Mark Crawford v. Archdiocese of Newark case.
                                Where the Shield finally broke under the weight of documented financial fraud and falsified records.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { date: "MAR 2026", title: "Newark Superior Court — Hearing on Falsified Records", status: "PENDING" },
                                    { date: "JAN 2026", title: "Ring 3 Financial Discovery Unsealed", status: "COMPLETED" },
                                    { date: "OCT 2025", title: "Mark Crawford Deposition Completed", status: "COMPLETED" },
                                ].map((event, i) => (
                                    <div key={i} className="flex gap-6 p-6 border border-[#1a1a22] bg-[#111116] items-center">
                                        <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.2em] tabular-nums">{event.date}</span>
                                        <div className="flex-1">
                                            <h4 className="text-white font-bold text-sm uppercase tracking-wide">{event.title}</h4>
                                        </div>
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-sm ${event.status === 'PENDING' ? 'bg-[#8b1a1a] text-white' : 'bg-[#1a1a22] text-[#555]'}`}>
                                            {event.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 bg-[#111116] border border-[#1a1a22] p-12">
                            <h3 className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.3em] mb-8">Case File: 15-CRA-2005</h3>
                            <div className="space-y-8 mb-12">
                                <div>
                                    <span className="text-[10px] text-[#555] uppercase font-bold block mb-2">Primary Plaintiff</span>
                                    <span className="text-2xl font-bold text-white">Mark Crawford</span>
                                </div>
                                <div>
                                    <span className="text-[10px] text-[#555] uppercase font-bold block mb-2">Subject Matter</span>
                                    <span className="text-lg text-[#bbb]">Fabrication of internal registries to bypass statute of limitations. Refusal of $108K settlement aimed at preventing discovery.</span>
                                </div>
                            </div>

                            <Link href="/breach/documents">
                                <a className="block w-full text-center bg-white text-black py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#8b1a1a] hover:text-white transition-all">
                                    Access Case Documents
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
