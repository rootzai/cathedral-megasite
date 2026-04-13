import React from "react";
import { PageHero } from "@/components/PageHero";
import TriptychPortal from "@/components/TriptychPortal";
import { Term as GlossaryTerm } from "@/components/Term";
import MemoryGate from "@/components/MemoryGate";

export default function ReillyIrishman() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-courier text-[#F5F0E8] overflow-x-hidden">
      <div className="bg-[#8B0000] p-3 text-center tracking-[0.2em] font-bold">
        ★ BREAKING ★ ESSEX COUNTY OFFICIAL ANNOUNCEMENT ★ APRIL 2026 ★
      </div>

      <div className="max-w-4xl mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <div className="text-sm tracking-[0.2em] text-[#8B0000] font-bold mb-4 uppercase">
            Essex County Executive — Official Proclamation
          </div>
          <h1 className="font-abril text-5xl md:text-6xl font-black leading-tight mb-2">
            The 2026 Essex County<br/>
            <span className="text-[#C8A84B]">Irishman of the Year</span>
          </h1>
          <div className="text-sm text-[#C8A84B] tracking-[0.15em] mt-4 uppercase">
            A Seussian Celebration of Achievement
          </div>
        </div>

        <div className="bg-[#F5F0E8] text-[#1A1A1A] border-4 border-[#C8A84B] p-12 mb-8 relative">
          <div className="absolute -top-3 left-8 bg-[#C8A84B] text-[#1A1A1A] text-xs font-bold tracking-[0.2em] px-3 py-1 uppercase">
            Official Citation — Surely This Is Satire
          </div>
          
          <div className="font-abril text-xl md:text-2xl leading-relaxed text-center space-y-6">
            <p>
              Oh, the places he's been!<br/>
              Oh, the things he has done!<br/>
              He managed the calendar,<br/>
              He answered the phone,<br/>
              He visited the beach house —<br/>
              <em>just once</em>, he has shown.
            </p>
            <p>
              He knew of the report,<br/>
              the one sealed in a drawer,<br/>
              the one naming twelve clergymen,<br/>
              the one they ignored.<br/>
              But the Regents said: <em>"Reilly!<br/>
              You're just what we need!"</em><br/>
              And they gave him the keys<br/>
              and the title and the creed.
            </p>
            <p>
              So raise up a glass<br/>
              to the Irishman of the Year!<br/>
              The man who saw nothing,<br/>
              who heard nothing, my dear.<br/>
              Who presides over ten thousand<br/>
              with a fresh, robust vision —<br/>
              while four hundred and fifty<br/>
              await a court's decision.
            </p>
            <p>
              Essex County says: <em>"Bravo!"</em><br/>
              DiVincenzo says: <em>"Hear, hear!"</em><br/>
              And <GlossaryTerm id="OToole">Kevin O'Toole</GlossaryTerm><br/>
              — his lawyer, his peer —<br/>
              stood right there beside him<br/>
              and led the applause<br/>
              for the man that his firm<br/>
              has been shielding from laws.
            </p>
            <p className="italic text-[#888888] text-base font-courier mt-10">
              — Surely this is a made-up story. Surely no one would actually do this.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <figure className="max-w-[280px] text-center">
            <img 
              src="/assets/madman/irishman-trophy-TyCaDLDrTaJ27YvHKVv5tr.webp" 
              alt="Essex County 2026 — Msgr Reilly holding an Irishman trophy"
              className="w-full border-4 border-[#C8A84B] shadow-[6px_6px_0_#8B0000] block"
              loading="lazy"
            />
            <figcaption className="text-[#C8A84B] text-xs tracking-widest mt-3 uppercase font-courier">
              Essex County 2026
            </figcaption>
          </figure>
        </div>

        <div className="text-center">
           <TriptychPortal />
        </div>

        <MemoryGate registryId="route-reilly-irishman" />
      </div>
    </div>
  );
}
