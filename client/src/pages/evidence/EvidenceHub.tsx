import React from "react";
import { Link } from "wouter";
import { RINGS } from "@/lib/data";
import EvidenceSubNavigation from "@/components/EvidenceSubNavigation";

export default function EvidenceHub() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif">
            <EvidenceSubNavigation />

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
                            Institutional Immunity
                        </span>
                        <h1 className="text-5xl font-bold text-white uppercase tracking-[0.1em] mb-8">
                            The Unsealed Archives
                        </h1>
                        <div className="max-w-2xl mx-auto">
                            <p className="text-lg md:text-xl text-[#888] leading-relaxed mb-12">
                                A forensic mapping of the six structural layers that enforced institutional immunity for 40 years.
                                Each ring represents a redundant failure of accountability &mdash; from canon law to legislative capture.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {RINGS.map((ring) => (
                            <Link key={ring.id} href={ring.route} className="group block bg-[#111116] border border-[#1a1a22] p-8 hover:border-[#8b1a1a] transition-all relative overflow-hidden">
                                {ring.breach && (
                                    <div className="absolute top-0 right-0 bg-[#8b1a1a] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                                        Breach Point
                                    </div>
                                )}
                                <span className="text-[#8b1a1a] font-bold text-[10px] uppercase tracking-[0.3em] block mb-4">
                                    RING {ring.id}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#8b1a1a] transition-colors uppercase tracking-wider">
                                    {ring.name}
                                </h3>
                                <p className="text-sm text-[#555] leading-relaxed italic mb-8 group-hover:text-[#888]">
                                    "{ring.description}"
                                </p>
                                <div className="mt-auto pt-6 border-t border-[#1a1a22] flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-[#444] uppercase tracking-widest group-hover:text-[#8b1a1a]">
                                        EXPLORE ARCHIVES
                                    </span>
                                    <svg className="w-4 h-4 text-[#444] group-hover:text-[#8b1a1a] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
