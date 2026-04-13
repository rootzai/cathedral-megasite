import React from "react";
import { PageHero } from "@/components/PageHero";
import TriptychPortal from "@/components/TriptychPortal";
import { Term as GlossaryTerm } from "@/components/Term";
import DocumentViewer from "@/components/DocumentViewer";
import MemoryGate from "@/components/MemoryGate";

export default function LathamEmails() {
  return (
    <div className="min-h-screen bg-[#1A1208] font-courier text-[#F5EDD0]">
      <div className="bg-[#CC2200] border-b-4 border-[#D4A017] p-2 text-center overflow-hidden whitespace-nowrap">
        <span className="font-boogaloo tracking-[0.2em] font-bold text-[#F5EDD0] text-sm marquee animate-pulse">
           DOCUMENTED RECORD // KATHRYN RUEMMLER // LATHAM & WATKINS // JEFFREY EPSTEIN CALENDAR LEAK
        </span>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-8">
        <div className="mb-12">
          <div className="text-sm tracking-[0.2em] text-[#CC2200] font-bold mb-4 uppercase">
            The Epstein Connection
          </div>
          <h1 className="font-abril text-5xl md:text-6xl font-black leading-tight mb-4 text-[#F5EDD0]">
            The Ruemmler<br/>
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

        <div className="mb-16">
          <DocumentViewer 
            title="Jeffrey Epstein's Private Calendar"
            documentId="DOC-000"
          >
            <button className="bg-[#D4A017] text-[#1A1208] px-8 py-3 font-bold tracking-widest uppercase hover:bg-white transition-colors">
              View Calendar Entries
            </button>
          </DocumentViewer>
        </div>

        <div className="flex justify-center mb-12">
            <TriptychPortal />
        </div>

        <MemoryGate registryId="route-epstein-emails" />
      </div>
    </div>
  );
}
