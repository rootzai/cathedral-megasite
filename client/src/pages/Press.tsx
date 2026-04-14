import React from "react";
import { Link } from "wouter";
import { ArrowLeft, FileText, Calendar, Scale, Mail, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";

const KEY_DATES = [
  { date: "November 2020", event: "Vatican McCarrick Report published (449 pages)" },
  { date: "November 25, 2019", event: "Latham Report delivered to Seton Hall Board (24,000+ pages, sealed)" },
  { date: "February 5, 2024", event: "Nyre v. SHU complaint filed (8 counts, 64 pages)" },
  { date: "December 13, 2024", event: "Scrivo litigation hold letter sent (identifies journalist)" },
  { date: "January 19, 2026", event: "Bar complaints filed against Scrivo and Porrino with NJ OAE" },
  { date: "January 21, 2026", event: "OAE declines both complaints (2 days, no investigation)" },
  { date: "February 24, 2026", event: "Jennifer Davenport confirmed as NJ Attorney General" },
  { date: "March 24, 2026", event: "Troutman Pepper files California deposition petition (same day as Congressional meeting)" },
  { date: "May 18, 2026", event: "Court-ordered Latham Report production deadline" },
  { date: "May 28, 2026", event: "California hearing, Dept C23, Orange County Superior Court" },
];

const CASE_NUMBERS = [
  { case: "Nyre v. Seton Hall University", number: "ESX-L-001234-24", court: "NJ Superior Court, Law Division" },
  { case: "Seton Hall University v. Nyre", number: "ESX-C-000XXX-24", court: "NJ Superior Court, Chancery Division (Essex County)" },
  { case: "Seton Hall University v. Dei Journo", number: "30-2026-01555640-CU-PT-CJC", court: "Orange County Superior Court, California" },
  { case: "Diocese of Rockville Centre Bankruptcy", number: "20-12345-CEC", court: "U.S. Bankruptcy Court, SDNY" },
];

const PRIMARY_SOURCES = [
  { title: "Vatican Report on Theodore McCarrick", year: "2020", pages: 449, url: "https://www.vatican.va/resources/resources_rapporto-card-mccarrick_20201110_en.pdf" },
  { title: "Perry Law Report", year: "2024", pages: 57, url: null },
  { title: "Latham Report (sealed)", year: "2019", pages: "24,000+", url: null },
  { title: "Politico Investigation", year: "2025", pages: null, url: "https://www.politico.com/news/2025/11/17/seton-hall-clergy-abuse-documents-00654168" },
  { title: "Kevin Flood Letter to Cardinal Tobin", year: "2023", pages: null, url: null },
  { title: "Flood Resignation Letter", year: "2024", pages: null, url: null },
  { title: "Litigation as a Weapon (Congressional Submission)", year: "2026", pages: null, url: null },
];

export default function Press() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] pt-32 pb-24 px-6">
      <SEO
        title="Press Resources"
        description="Key dates, case numbers, primary sources, and contact information for journalists covering the Seton Hall investigation."
      />
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-12 text-[#8b1a1a] hover:text-white uppercase tracking-widest text-xs font-mono transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return Home
        </Link>

        <h1 className="text-5xl md:text-7xl font-black font-cinzel text-white uppercase tracking-tighter mb-4">
          PRESS <span className="text-[#8b1a1a]">RESOURCES</span>
        </h1>
        <p className="text-zinc-500 font-serif italic mb-16 text-lg max-w-2xl">
          This page consolidates key dates, case numbers, and primary sources for journalists covering the Seton Hall University clergy abuse investigation.
        </p>

        {/* KEY DATES */}
        <section className="mb-20" id="dates">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-5 h-5 text-[#8b1a1a]" />
            <h2 className="text-2xl font-cinzel font-black text-white uppercase tracking-widest">Key Dates</h2>
          </div>
          <div className="space-y-0">
            {KEY_DATES.map((item, i) => (
              <div key={i} className="flex border-b border-white/5 py-4 gap-6">
                <span className="shrink-0 w-44 font-mono text-sm text-[#8b1a1a] font-bold">{item.date}</span>
                <span className="text-zinc-300 text-base leading-relaxed">{item.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CASE NUMBERS */}
        <section className="mb-20" id="cases">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="w-5 h-5 text-[#8b1a1a]" />
            <h2 className="text-2xl font-cinzel font-black text-white uppercase tracking-widest">Active Cases</h2>
          </div>
          <div className="space-y-4">
            {CASE_NUMBERS.map((c, i) => (
              <div key={i} className="bg-[#050505] border border-white/5 p-5">
                <h3 className="text-white font-bold text-base mb-1">{c.case}</h3>
                <p className="font-mono text-sm text-[#8b1a1a] mb-1">{c.number}</p>
                <p className="text-zinc-500 text-sm">{c.court}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRIMARY SOURCES */}
        <section className="mb-20" id="sources">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-5 h-5 text-[#8b1a1a]" />
            <h2 className="text-2xl font-cinzel font-black text-white uppercase tracking-widest">Primary Sources</h2>
          </div>
          <div className="space-y-4">
            {PRIMARY_SOURCES.map((src, i) => (
              <div key={i} className="flex items-start justify-between border-b border-white/5 py-4">
                <div>
                  <h3 className="text-white font-bold text-base">{src.title}</h3>
                  <p className="text-zinc-500 text-sm font-mono">
                    {src.year}{src.pages ? ` \u2014 ${src.pages} pages` : ""}
                    {!src.url && " (not publicly available)"}
                  </p>
                </div>
                {src.url && (
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-[#8b1a1a] hover:text-white transition-colors ml-4">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="w-5 h-5 text-[#8b1a1a]" />
            <h2 className="text-2xl font-cinzel font-black text-white uppercase tracking-widest">Press Contact</h2>
          </div>
          <div className="bg-[#050505] border border-[#8b1a1a]/30 p-8">
            <p className="text-zinc-300 text-base leading-relaxed mb-6">
              For press inquiries, source verification, or document requests, contact:
            </p>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-white">tips@sodomhall.com</p>
              <p className="text-zinc-500">PGP key available on request. Signal preferred for sensitive materials.</p>
            </div>
          </div>
        </section>

        <div className="mt-20 pt-8 border-t border-white/5 flex gap-6 justify-center">
          <Link href="/updates" className="text-zinc-500 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors">
            Site Updates
          </Link>
          <Link href="/about" className="text-zinc-500 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors">
            About / Methodology
          </Link>
          <Link href="/tips" className="text-zinc-500 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors">
            Submit a Tip
          </Link>
        </div>
      </div>
    </div>
  );
}
