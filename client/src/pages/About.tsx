import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Shield, Lock, Mail, AlertCircle, ArrowRight, Search, FileText } from "lucide-react";
import { TipSubmissionForm } from "@/components/TipSubmissionForm";
import ShieldDiagram from "@/components/ShieldDiagram";
import { SEO } from "@/components/SEO";

export default function About() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-[#0a0a0c] text-[#e2dacf] selection:bg-[#c41e1e]/30 font-serif pb-32 overflow-x-hidden relative">
      <img src="/assets/cathedral/cathedral_rose_window_2.jpg" alt="" className="fixed inset-0 w-full h-full object-cover select-none pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />
      <SEO
        title="About The Mission"
        description="The independent reconstruction of institutional failure and the search for truth."
      />


      <main className="max-w-6xl mx-auto px-6 py-20 relative z-10">

        {/* Massive 1905 Broadsheet Headline */}
        <div className="text-center mb-24 border-b border-[#c41e1e]/30 pb-16">
          <span className="text-[#d4a843] font-mono font-black tracking-[0.5em] uppercase text-sm mb-6 block">
            Declaration of Purpose // 2026 // By Dei Journo
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[8rem] font-black font-cinzel text-white leading-[0.85] uppercase tracking-tighter break-words mb-8 drop-shadow-2xl">
            ABOUT THE <span className="text-[#c41e1e]">RECONSTRUCTION</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#e2dacf]/80 max-w-4xl mx-auto italic font-serif leading-snug">
            Documenting the architecture of silence. How institutions prioritize self-preservation over the protection of the innocent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Half Word Count Content */}
          <div className="space-y-12">
            <section>
              <h2 className="text-5xl font-black font-cinzel text-white uppercase tracking-wider mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-[#d4a843]"></span>
                The Mandate
              </h2>
              <p className="text-xl leading-relaxed text-[#e2dacf] mb-4">
                Sodomhall is an independent forensic project. We document the institutional failures of Seton Hall University and the Archdiocese of Newark in addressing clergy abuse.
              </p>
              <p className="text-xl leading-relaxed text-[#e2dacf]">
                <a href="https://www.nj.gov/oag/newsreleases16/Clergy-Abuse-Grand-Jury-Report.pdf" target="_blank" rel="noopener" className="underline decoration-[#c41e1e]/40 hover:decoration-[#c41e1e] transition-colors">450+ plaintiffs</a> demand a full accounting. We track the power, protection, and legal engineering used to conceal abuse rather than cure it.
              </p>
            </section>

            <section>
              <h2 className="text-5xl font-black font-cinzel text-white uppercase tracking-wider mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-[#d4a843]"></span>
                Our Sources
              </h2>
              <p className="text-xl leading-relaxed text-[#e2dacf] mb-6">
                No fabrication. No speculation. Every claim stems from public records.
              </p>
              <ul className="space-y-4 font-mono text-sm tracking-widest uppercase">
                <li className="flex items-center gap-4 border border-[#c41e1e]/20 p-4 bg-black">
                  <FileText className="w-6 h-6 text-[#c41e1e]" /> Vatican Report on McCarrick (2020)
                </li>
                <li className="flex items-center gap-4 border border-[#c41e1e]/20 p-4 bg-black">
                  <FileText className="w-6 h-6 text-[#c41e1e]" /> The Perry Law Report (2024)
                </li>
                <li className="flex items-center gap-4 border border-[#c41e1e]/20 p-4 bg-black">
                  <FileText className="w-6 h-6 text-[#c41e1e]" /> Court Filings & Sealed Archive References
                </li>
              </ul>
            </section>
          </div>

          {/* Bold Visual Block */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#c41e1e]/20 blur-3xl -z-10 group-hover:bg-[#d4a843]/20 transition-colors duration-700"></div>
            <img
              src="/assets/images/cathedral-blueprint.png"
              alt="Bosch Inspired Redaction Map"
              className="w-full h-auto border-4 border-[#1a1a1a] shadow-2xl grayscale contrast-150 brightness-75 group-hover:grayscale-0 transition-all duration-700 object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-black/90 border border-[#c41e1e] p-4 max-w-sm backdrop-blur-sm">
              <span className="text-[#d4a843] font-mono text-xs uppercase tracking-[0.3em] font-bold block mb-2">Fig 1. The Labyrinth</span>
              <p className="font-serif italic text-[#e2dacf]">"We were told the shield was for our protection. In reality, it was a distribution manifest for institutional inertia."</p>
            </div>
          </div>
        </div>

        {/* Editorial Challenge 3D Shield */}
        <div className="relative w-full bg-black py-32 mb-24 overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 bg-[#c41e1e]/5 blur-[120px] pointer-events-none" />
          <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* 3D Shield Wireframe */}
            <div className="w-full max-w-md mx-auto aspect-square relative opacity-80 hover:opacity-100 transition-opacity duration-700 group">
                <div className="absolute inset-0 bg-[#c41e1e]/10 blur-[80px] group-hover:bg-[#c41e1e]/20 transition-colors duration-1000 rounded-full" />
                <div className="absolute inset-0 pointer-events-none scale-110">
                    <ShieldDiagram />
                </div>
            </div>

            {/* Typography */}
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-5xl lg:text-6xl font-black font-cinzel text-white uppercase tracking-tighter mb-8 drop-shadow-[0_0_20px_rgba(196,30,30,0.4)]">
                We Welcome <br/><span className="text-[#c41e1e]">Legal Process</span>
              </h2>
              <p className="text-2xl text-[#e2dacf] leading-relaxed mb-8 italic font-serif">
                This investigation descends openly. We litigate in the light. We do not settle. We do not retract documented institutional truths.
              </p>
              <div className="inline-flex items-center gap-4 bg-[#111] border border-white/10 px-6 py-4 mb-12 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                  <Shield className="w-6 h-6 text-[#d4a843]" />
                  <span className="font-mono text-sm tracking-widest text-[#d4a843] uppercase">
                    Status: Zero demands received
                  </span>
              </div>
              <br/>
              <Link href="/corrections">
                <button className="bg-black hover:bg-[#c41e1e] text-[#c41e1e] border-2 border-[#c41e1e] hover:text-white font-black uppercase tracking-[0.3em] py-5 px-10 transition-all duration-300 shadow-[0_0_30px_rgba(196,30,30,0.2)]">
                  View Corrections Log
                </button>
              </Link>
            </div>

          </div>
        </div>

        {/* The Silence Doctrine */}
        <section className="text-center max-w-4xl mx-auto space-y-8 mb-24">
          <h2 className="text-5xl font-black font-cinzel text-[#d4a843] uppercase tracking-wider">The Silence Doctrine</h2>
          <p className="text-2xl leading-relaxed text-white">
            When confronted with 40 years of documented abuse, the institutional response has been singular:
            <span className="text-[#c41e1e] font-black ml-2 px-2 py-1 bg-[#1a0000]">"No comment."</span>
          </p>
          <p className="text-xl text-[#888] font-serif italic">
            Penn State officials testified. Michigan State's president resigned. Seton Hall's response has been silence, promotion, and the sanctioning of those who withheld evidence.
          </p>
        </section>

        {/* Tip Line */}
        <section id="tips" className="max-w-2xl mx-auto bg-black border border-white/10 p-10 shadow-2xl">
          <h2 className="text-3xl font-black font-cinzel text-white uppercase text-center tracking-widest mb-4">Secure Drop</h2>
          <p className="text-center text-[#888] font-mono text-xs uppercase tracking-widest mb-8">
            Source identity strictly protected.
          </p>
          <TipSubmissionForm />
        </section>

      </main>
    </div>
  );
}
