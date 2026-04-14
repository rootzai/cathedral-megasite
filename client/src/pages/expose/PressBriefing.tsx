import React from "react";
import { PageHero } from "@/components/PageHero";
import { Link } from "wouter";
import MemoryGate from "@/components/MemoryGate";

export default function PressBriefing() {
  return (
    <div className="min-h-screen bg-[#F5EDD0] font-courier text-[#1A1208]">
      <div className="bg-[#1A1208] p-3 flex justify-between items-center text-[#F5EDD0]">
        <span className="font-boogaloo text-[#D4A017] text-lg tracking-[0.15em] uppercase">
          PRESS BRIEFING — PRINT VERSION
        </span>
        <button className="border-2 border-[#D4A017] px-4 py-1 font-elite text-sm hover:bg-[#D4A017] hover:text-[#1A1208] transition-colors uppercase">
          Print
        </button>
      </div>

      {/* Hero band — press room atmosphere */}
      <div className="relative overflow-hidden h-28 md:h-40">
        <img src="/assets/courtroom/courtroom_generic.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] select-none pointer-events-none grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5EDD0]" />
        {/* ¶ — The Brief. Every paragraph matters */}
        <div className="absolute top-3 right-3 text-[#1A1208]/[0.04] hover:text-[#1A1208]/20 text-6xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">¶</div>
      </div>
      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="font-abril text-5xl md:text-6xl font-black leading-tight mb-8 border-b-8 border-[#CC2200] pb-6">
          Press Briefing: The Architecture of Protection
        </h1>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            <strong>DATE:</strong> April 2026<br />
            <strong>SUBJECT:</strong> Seton Hall University / Archdiocese of Newark<br />
            <strong>STATUS:</strong> ACTIVE COVER-UP
          </p>

          <div className="bg-white p-8 border-4 border-[#1A1208] shadow-[8px_8px_0_#CC2200]">
            <h2 className="font-abril text-3xl mb-4 text-[#CC2200]">The Core Finding</h2>
            <p className="font-bold">
              The men running Seton Hall University today are the same men named in the 2019 Latham Report for facilitating Theodore McCarrick's abuse.
            </p>
          </div>

          <h3 className="font-abril text-2xl mt-12 mb-4 border-b-2 border-black pb-2">1. The 2019 Latham Report</h3>
          <p>
            Commissioned by Cardinal Tobin and Seton Hall, the <a href="/vault/latham">Latham & Watkins Report</a> identified 12 clergymen complicit in the abuse regime. It made strict recommendations for institutional reform.
          </p>
          <p className="font-bold text-[#CC2200]">
            Fact: Zero of these recommendations have been implemented.
          </p>

          <h3 className="font-abril text-2xl mt-12 mb-4 border-b-2 border-black pb-2">2. The Elevation of the Complicit</h3>
          <p>
            Msgr. Joseph Reilly, explicitly named in the report as McCarrick's personal secretary who visited the Sea Girt abuse site, was unanimously elected President of Seton Hall University in 2024.
          </p>

          <h3 className="font-abril text-2xl mt-12 mb-4 border-b-2 border-black pb-2">3. The Legal Wall</h3>
          <p>
            To protect these elevations, the Board of Regents retains Michael Critchley, Kevin O'Toole, and Christopher Porrino—lawyers who execute a "protect the institution at all costs" strategy, spending millions from the endowment to block subpoenas and silence survivors.
          </p>

          <div className="bg-[#1A1208] text-[#F5EDD0] p-8 mt-12 border-l-8 border-[#D4A017]">
            <h4 className="font-elite text-xl mb-4 tracking-widest text-[#D4A017]">PRESS CONTACTS RELEVANT TO THIS BRIEFING</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li>Cardinal Tobin's Office: <a href="mailto:cardinaltobin@gmail.com" className="text-[#CC2200] underline">cardinaltobin@gmail.com</a></li>
              <li>Ropes & Gray Tip Line: <a href="tel:18005550199" className="text-[#CC2200] underline">1-800-555-0199</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-16 mb-12">
          <Link href="/ledger/mccarrick" className="inline-block bg-[#1A1208] hover:bg-[#D4A017] hover:text-[#1A1208] text-[#F5EDD0] px-8 py-4 font-mono font-bold tracking-[0.3em] uppercase transition-all duration-300 border-2 border-[#D4A017]">
            VIEW FULL DOSSIER
          </Link>
        </div>

        <MemoryGate registryId="route-press-briefing" />
      </div>
    </div>
  );
}
