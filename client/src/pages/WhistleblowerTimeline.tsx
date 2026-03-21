import React from 'react';
import { ConfidenceIndicator } from "@/components/ConfidenceIndicator";
import { Users, AlertCircle, ShieldAlert, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function WhistleblowerTimeline() {
    const whistleblowers = [
        {
            year: "2023",
            name: "Dr. Joseph Nyre",
            role: "President, Seton Hall University",
            action: "Blew the whistle on institutional cover-ups and legal fraud.",
            consequence: "Face coordinated retaliation, insurance termination, and removal from office.",
            level: "court" as const,
            source: "Essex County Lawsuit"
        },
        {
            year: "2023",
            name: "Regent Kevin Flood",
            role: "Board of Regents",
            action: "Joined the whistleblower ranks from within the governing board.",
            consequence: "Institutional isolation and systematic silencing.",
            level: "official" as const,
            source: "Board Minutes"
        },
        {
            year: "2023",
            name: "Kim Capadona",
            role: "Strategic Negotiator",
            action: "Negotiated for the removal of those who sheltered abusers, including Marino.",
            consequence: "Forced out from her position after standing her ground.",
            level: "official" as const,
            source: "Internal Record"
        },
        {
            year: "2023",
            name: "cardinaltobin@gmail.com",
            role: "Anonymous Journalist",
            action: "Exposed the internal mechanics of the 'Closed Loop' network.",
            consequence: "Targeted by a criminal grand jury subpoena intended to unmask and prosecute.",
            level: "court" as const,
            source: "NJ Superior Court Filings"
        },
        {
            year: "2023",
            name: "Anonymous Whistleblower",
            role: "Institutional Insider",
            action: "Leaked key documents confirming the Perry Law whitewash.",
            consequence: "Grand jury subpoena issued to Google to unmask personal identity.",
            level: "court" as const,
            source: "Subpoena Record"
        },
        {
            year: "2023",
            name: "Kelli Nyre",
            role: "University Community Member",
            action: "Documented sexual harassment and systemic abuse patterns.",
            consequence: "Institutional denial and documented complaints ignored.",
            level: "official" as const,
            source: "Official Complaint Logs"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-20 min-h-screen">
            <header className="mb-20">
                <div className="flex items-center gap-3 mb-4">
                    <ShieldAlert className="text-red-700" size={32} />
                    <h1 className="text-4xl font-serif">Whistleblower Retaliation Timeline</h1>
                </div>
                <p className="text-xl text-zinc-600 max-w-4xl italic leading-relaxed">
                    The following is a consolidated record of the individuals who chose courage over complicity —
                    and the price they were made to pay by a legal apparatus that weaponizes institutional silence.
                </p>
            </header>

            <div className="relative border-l-2 border-zinc-100 ml-4 md:ml-24 space-y-16 py-8">
                {whistleblowers.map((person, idx) => (
                    <div key={idx} className="relative group">
                        {/* Year Bubble */}
                        <div className="absolute -left-[11px] md:-left-[107px] top-0 w-5 h-5 bg-white border-2 border-red-700 rounded-full group-hover:scale-125 transition-transform z-10" />
                        <div className="absolute -left-[107px] top-0 hidden md:block text-xs font-mono font-bold text-red-700 uppercase tracking-widest pt-1">
                            {person.year}
                        </div>

                        <div className="pl-10 md:pl-20">
                            <div className="bg-white border-2 border-zinc-100 p-8 hover:border-red-600/30 transition-all shadow-sm hover:shadow-xl rounded-sm">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-serif mb-1">{person.name}</h2>
                                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">{person.role}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ConfidenceIndicator level={person.level} source={person.source} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-red-700 mb-2 flex items-center gap-2">
                                            <AlertCircle size={14} />
                                            Action
                                        </h3>
                                        <p className="text-zinc-600 text-sm leading-relaxed">{person.action}</p>
                                    </div>
                                    <div className="bg-red-50/50 p-4 border-l-2 border-red-200">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-2 flex items-center gap-2">
                                            <ShieldAlert size={14} className="text-red-700" />
                                            Institutional Cost
                                        </h3>
                                        <p className="text-zinc-900 text-sm leading-relaxed font-bold">{person.consequence}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <section className="mt-32 p-12 bg-zinc-900 text-white rounded-sm text-center">
                <Heart className="mx-auto mb-6 text-red-600 animate-pulse" size={40} />
                <h2 className="text-3xl font-serif mb-6 italic">"A machine groomed for silence cannot tolerate a voice that refuses to break."</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto mb-8 font-light">
                    If you are an insider with evidence of retaliation, your identity can be protected.
                    Use the secure tips line to share your story without fear.
                </p>
                <Link href="/about#tips">
                    <a className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-all">
                        SUBMIT SECURE TESTIMONY
                        <ArrowRight size={16} />
                    </a>
                </Link>
            </section>
        </div>
    );
}
