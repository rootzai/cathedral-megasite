import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";

const UPDATES = [
  {
    date: "April 14, 2026",
    entries: [
      "Expanded Reilly dossier: 7 sub-pages covering Secretary, Latham Report, Presidency, Court of Opinion, Reckoning, and Current Status",
      "New press briefing page consolidating key findings for journalists",
      "Mobile experience improvements: simplified navigation, visible news ticker on all devices",
      "Improved site onboarding with plain-language summary and guided paths",
    ],
  },
  {
    date: "April 2026",
    entries: [
      "Latham Report production deadline: May 18, 2026 (court-ordered)",
      "California deposition hearing: May 28, 2026 (Dept C23, Orange County Superior Court)",
      "Launched Epstein-Ruemmler connection vault with WSJ source documents",
      "Added McKeever Foundation case study",
    ],
  },
  {
    date: "March 2026",
    entries: [
      "Initial site launch: Memory Palace architecture, Shield Hub navigation",
      "McCarrick dossier: 18 sub-pages covering Background through Conclusion",
      "Martin dossier: Chicago Connection, Crimes, The Launder",
      "Lorenzo dossier: Expulsion, Rehabilitation, Elevation",
      "Checchio dossier: Formation, Ascent, Governance, Purge, Controversies, Status",
      "Madman McCarrick exhibit: 7 chapters (Home, The Machine, Exhibits A\u2013F)",
      "Easter egg case study: Humpty Dumpty forensic edition with 13 dossier drawers",
    ],
  },
];

export default function Updates() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] pt-32 pb-24 px-6">
      <SEO
        title="Site Updates"
        description="Changelog and recent updates to the Sodom Hall investigation."
      />
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-12 text-[#8b1a1a] hover:text-white uppercase tracking-widest text-xs font-mono transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return Home
        </Link>

        <h1 className="text-5xl md:text-7xl font-black font-cinzel text-white uppercase tracking-tighter mb-4">
          SITE <span className="text-[#8b1a1a]">UPDATES</span>
        </h1>
        <p className="text-zinc-500 font-serif italic mb-16 text-lg">
          A running log of additions, corrections, and new evidence.
        </p>

        <div className="space-y-16">
          {UPDATES.map((update, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-[#8b1a1a]/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#8b1a1a] border-2 border-[#0a0a0c]" />
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-4 h-4 text-[#8b1a1a]" />
                <span className="text-white font-mono text-sm font-bold uppercase tracking-widest">{update.date}</span>
              </div>
              <ul className="space-y-3">
                {update.entries.map((entry, j) => (
                  <li key={j} className="text-zinc-400 font-serif text-base leading-relaxed pl-4 border-l border-white/5">
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
            This page is updated as new evidence and features are added.
          </p>
        </div>
      </div>
    </div>
  );
}
