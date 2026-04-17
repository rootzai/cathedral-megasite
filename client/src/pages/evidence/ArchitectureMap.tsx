import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import ShieldHub from "@/components/ShieldHub";
import AmbientParticles from "@/components/AmbientParticles";
import { SEO } from "@/components/SEO";
import { ArrowLeft, BookOpen, Fingerprint, Search } from "lucide-react";
import LivingSymbol from "@/components/LivingSymbol";

export default function ArchitectureMap() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#c8bdb0] font-cormorant relative">
      <SEO
        title="Map Room: The Architecture of Protection"
        description="The interactive architectural map exploring the structural defense mechanisms concealing clerical abuse."
      />
      {/* Cathedral — the actual background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src="/assets/cathedral/cathedral_interior_wide.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#09090b]" />
      </div>
      {/* ⬡ — The Map Room. Architecture reveals intent */}
      <div className="absolute top-20 right-6 text-white/[0.02] hover:text-white/15 text-8xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default z-20" aria-hidden="true">⬡</div>
      <AmbientParticles count={25} />

      <main className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">

          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-[#8b1a1a] hover:text-white uppercase tracking-widest text-xs font-mono transition-colors group mb-8">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Memory Palace
            </Link>

            <h1 className="text-5xl md:text-7xl font-black font-cinzel text-white uppercase tracking-normal">
              THE <span className="text-[#8b1a1a]">MAP</span> ROOM
            </h1>
            <p className="text-xl text-zinc-500 font-serif italic max-w-3xl">
              "Here is the architecture of protection. Pick a ring. Pick a path." Select an institutional layer below to trace the mechanisms of immunity.
            </p>
          </div>

          {/* THE SHIELD DIAGRAM */}
          <div className="pt-8">
            <ShieldHub
              onNodeClick={(id) => {
                if (['mccarrick', 'checchio', 'reilly', 'martin', 'lorenzo', 'critchley'].includes(id)) {
                  setLocation(`/ledger/${id}`);
                } else {
                  setLocation(`/ledger/mccarrick/network`);
                }
              }}
              onRingClick={(id) => {
                // The rings route inside ShieldHub Component itself based on FORENSIC_RINGS definitions.
              }}
            />
          </div>

          <div className="py-12 border-b border-white/5" />

          {/* INVESTIGATION TOOLS (ADDITIONAL ARCHIVES) */}
          <div>
            <h3 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest mb-16 text-center drop-shadow-lg">
              Investigation Tools
            </h3>
            <div className="flex flex-col gap-24 items-center pl-4 md:pl-0">
              
              <div className="self-start md:ml-[10%]">
                <LivingSymbol 
                  href="/evidence/mckeever" 
                  imageSrc="/assets/symbols/apple_evidence.png" 
                  title="McKeever Foundation" 
                  description="Featured Historical Case Study" 
                  glowColor="#8b1a1a" 
                />
              </div>

              <div className="self-end md:mr-[10%]">
                <LivingSymbol 
                  href="/method" 
                  imageSrc="/assets/symbols/method_keyhole.png" 
                  title="The Method" 
                  description="Systemic Forensic Methodology" 
                  glowColor="#ef4444" 
                />
              </div>

              <div className="self-start md:ml-[15%]">
                <LivingSymbol 
                  href="/opinion" 
                  imageSrc="/assets/symbols/ledger_cloud.png" 
                  title="The Rewrite" 
                  description="Journalistic & Institutional Opinions" 
                  glowColor="#0ea5e9" 
                />
              </div>

              <div className="self-end md:mr-[15%]">
                <LivingSymbol 
                  href="/madman" 
                  imageSrc="/assets/symbols/arch_madman.png" 
                  title="Madman McCarrick" 
                  description="The Secretarial Archive" 
                  glowColor="#d4af37" 
                />
              </div>

            </div>
          </div>

          <div className="py-12 border-b border-white/5" />

          <div className="text-center py-24 bg-[#0a0a0c] border border-white/5">
            <h2 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest mb-6">READY TO BEGIN?</h2>
            <Link href="/ledger/martin" className="inline-block bg-[#8b1a1a] hover:bg-white hover:text-black text-white px-8 py-4 font-mono font-bold tracking-[0.3em] uppercase transition-all duration-300">
              INITIATE THE LATHAM ORIGIN
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
