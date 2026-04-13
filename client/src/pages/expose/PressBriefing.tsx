import React from "react";
import { PageHero } from "@/components/PageHero";
import TriptychPortal from "@/components/TriptychPortal";
import MemoryGate from "@/components/MemoryGate";

export default function PressBriefing() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] font-['Share_Tech_Mono'] text-[#F5EDD0]">
      <div className="bg-black border-b border-[#F5EDD0]/20 p-4 flex justify-between items-center text-[#F5EDD0]">
        <span className="text-[#D4A017] text-lg tracking-[0.3em] uppercase font-bold">
          [ DECLASSIFIED : PRESS COMMUNICATION ]
        </span>
        <button className="border border-[#D4A017] px-4 py-1 text-xs hover:bg-[#D4A017] hover:text-black transition-colors uppercase tracking-widest">
          Print Block
        </button>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="font-sans text-5xl md:text-6xl font-black leading-tight mb-8 border-b-2 border-[#cc0000] pb-6 uppercase tracking-widest text-white">
          Press Briefing: Latham Vectors
        </h1>
        
        <div className="space-y-8 text-sm leading-relaxed text-[#F5EDD0]/80">
          <p className="font-mono text-[#D4A017]">
            <strong>DATE:</strong> April 2026<br />
            <strong>SUBJECT:</strong> Seton Hall University / Archdiocese of Newark<br />
            <strong>STATUS:</strong> ACTIVE COVER-UP
          </p>

          <div className="bg-black p-8 border border-[#cc0000]/30 shadow-[0_0_30px_rgba(204,0,0,0.15)] relative group">
             <div className="absolute inset-0 bg-[#cc0000]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <h2 className="font-sans font-bold text-3xl mb-4 text-[#cc0000] tracking-widest uppercase">The Core Finding</h2>
            <p className="font-bold text-white text-base">
              The men running Seton Hall University today are the same men named in the 2019 Latham Report for facilitating Theodore McCarrick's abuse.
            </p>
          </div>

          <h3 className="font-sans font-bold text-2xl mt-12 mb-4 border-b border-[#F5EDD0]/20 pb-2 text-[#D4A017] uppercase tracking-widest">1. The 2019 Latham Report</h3>
          <p>
            Commissioned by Cardinal Tobin and Seton Hall, the <a href="/vault/epstein-emails" className="text-[#D4A017] hover:text-white transition-colors underline">Latham & Watkins Data</a> identified 12 clergymen complicit in the abuse regime. It made strict recommendations for institutional reform.
          </p>
          <p className="font-bold text-[#cc0000]">
            Fact: Zero of these recommendations have been implemented.
          </p>

          <h3 className="font-sans font-bold text-2xl mt-12 mb-4 border-b border-[#F5EDD0]/20 pb-2 text-[#D4A017] uppercase tracking-widest">2. The Elevation of the Complicit</h3>
          <p>
            Msgr. Joseph Reilly, explicitly named in the report as McCarrick's personal secretary who visited the Sea Girt abuse site, was unanimously elected President of Seton Hall University in 2024.
          </p>

          <h3 className="font-sans font-bold text-2xl mt-12 mb-4 border-b border-[#F5EDD0]/20 pb-2 text-[#D4A017] uppercase tracking-widest">3. The Legal Wall</h3>
          <p>
            To protect these elevations, the Board of Regents retains Michael Critchley, Kevin O'Toole, and Christopher Porrino—lawyers who execute a "protect the institution at all costs" strategy, spending millions from the endowment to block subpoenas and silence survivors.
          </p>

          <div className="bg-[#111] text-[#F5EDD0] p-8 mt-12 border border-[#D4A017]/30 shadow-lg">
            <h4 className="font-sans font-bold text-xl mb-4 tracking-widest text-[#D4A017] uppercase">PRESS CONTACTS RELEVANT TO THIS BRIEFING</h4>
            <ul className="space-y-4 font-mono text-xs">
              <li>Cardinal Tobin's Office: <a href="mailto:cardinaltobin@gmail.com" className="text-[#cc0000] hover:text-white transition-colors underline">cardinaltobin@gmail.com</a></li>
              <li>Ropes & Gray Tip Line: <a href="tel:18005550199" className="text-[#CC2200] underline">1-800-555-0199</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-16 mb-12">
            <TriptychPortal />
        </div>

        <MemoryGate registryId="route-press-briefing" />
      </div>
    </div>
  );
}
