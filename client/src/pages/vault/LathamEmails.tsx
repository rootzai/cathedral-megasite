import React from "react";
import { PageHero } from "@/components/PageHero";
import { Link } from "wouter";
import { Term as GlossaryTerm } from "@/components/Term";
import MemoryGate from "@/components/MemoryGate";

export default function LathamEmails() {
  return (
    <div className="min-h-screen bg-[#1A1208] font-courier text-[#F5EDD0]">
      <div className="bg-[#CC2200] border-b-4 border-[#D4A017] p-2 text-center overflow-hidden whitespace-nowrap">
        <span className="font-boogaloo tracking-[0.2em] font-bold text-[#F5EDD0] text-sm marquee animate-pulse">
          DOCUMENTED RECORD // KATHRYN RUEMMLER // LATHAM & WATKINS // JEFFREY EPSTEIN CALENDAR LEAK
        </span>
      </div>

      {/* Hero band — vault atmosphere */}
      <div className="relative overflow-hidden h-32 md:h-44">
        <img src="/assets/images/reilly-beach-house-dark.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] select-none pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1208]" />
        {/* ⊗ — The Epstein Calendar. Where law firms and predators share a schedule */}
        <div className="absolute top-3 right-3 text-[#D4A017]/[0.06] hover:text-[#D4A017]/30 text-6xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">⊗</div>
      </div>
      <div className="max-w-4xl mx-auto py-16 px-8">
        <div className="mb-12">
          <div className="text-sm tracking-[0.2em] text-[#CC2200] font-bold mb-4 uppercase">
            The Epstein Connection
          </div>
          <h1 className="font-abril text-5xl md:text-6xl font-black leading-tight mb-4 text-[#F5EDD0]">
            The Ruemmler<br />
            <span className="text-[#D4A017]">Emails.</span>
          </h1>
          <p className="text-lg text-[#F5EDD0]/70 leading-relaxed max-w-2xl">
            In 2018, Seton Hall hired <GlossaryTerm id="Ruemmler">Kathryn Ruemmler</GlossaryTerm> of Latham & Watkins to investigate the McCarrick abuse. Months after presenting her findings to the Board, Ruemmler was revealed to have met with Jeffrey Epstein dozens of times while he was a registered sex offender.
          </p>
        </div>

        <div className="bg-[#050505] p-8 border-l-4 border-[#CC2200] mb-12 shadow-[4px_4px_0_#D4A017]">
          <h3 className="font-elite text-xl text-[#D4A017] mb-4 tracking-widest uppercase">
            Evidence: Wall Street Journal Leak
          </h3>
          <p className="mb-4">
            "Ms. Ruemmler had dozens of meetings with Epstein in the years before his death, according to the documents. She also was invited to dinners and to fly on his private jet."
          </p>
          <p className="text-sm text-[#F5EDD0]/50 italic">
            — Wall Street Journal (2023)
          </p>
        </div>

        <div className="mb-16 bg-[#050505] p-8 border border-[#D4A017]/30">
          <h3 className="font-elite text-xl text-[#D4A017] mb-4 tracking-widest uppercase">Document: Jeffrey Epstein's Private Calendar</h3>
          <p className="text-sm text-[#F5EDD0]/60 mb-4">Source: Wall Street Journal Leaks (2018–2019) — 48 pages</p>
          <p className="mb-4">Shows Ruemmler's extensive scheduled meetings with Epstein during the exact timeframe she was leading the Seton Hall McCarrick coverup.</p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-[#F5EDD0]/80">
            <li>The lead attorney hired to investigate one of the worst serial predators in U.S. history was simultaneously taking dozens of meetings with Jeffrey Epstein.</li>
            <li>Seton Hall has never publicly addressed this conflict.</li>
          </ul>
          <a href="https://s3.documentcloud.org/documents/23793910/jeffrey-epstein-calendar.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-[#CC2200] underline text-sm font-bold uppercase tracking-widest hover:text-[#D4A017] transition-colors">View Source Document →</a>
        </div>

        <div className="flex justify-center mb-12">
          <Link href="/vault" className="inline-block bg-[#CC2200] hover:bg-[#D4A017] hover:text-[#1A1208] text-[#F5EDD0] px-8 py-4 font-mono font-bold tracking-[0.3em] uppercase transition-all duration-300 border-2 border-[#D4A017]">
            ENTER THE VAULT
          </Link>
        </div>

        <MemoryGate registryId="route-epstein-emails" />
      </div>
    </div>
  );
}
