import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import ShieldHub from "@/components/ShieldHub";
import AmbientParticles from "@/components/AmbientParticles";
import { SEO } from "@/components/SEO";
import { ArrowLeft, BookOpen, Fingerprint, Search } from "lucide-react";

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
      <AmbientParticles count={25} />

      <main className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="space-y-4">
            <Link href="/">
              <a className="inline-flex items-center gap-2 text-[#8b1a1a] hover:text-white uppercase tracking-widest text-xs font-mono transition-colors group mb-8">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Memory Palace
              </a>
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-black font-cinzel text-white uppercase tracking-tighter">
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
            <h3 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest mb-12">
              Investigation Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/evidence/mckeever">
                <a className="group block bg-[#0D0D10] border border-white/5 p-8 hover:border-[#8b1a1a]/40 transition-colors">
                  <Fingerprint className="w-8 h-8 text-[#8b1a1a] mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-cinzel text-xl font-bold uppercase mb-2">Featured Case Study</h4>
                  <p className="text-sm font-mono text-zinc-500 uppercase">McKeever Foundation</p>
                </a>
              </Link>
              <Link href="/method">
                <a className="group block bg-[#0D0D10] border border-white/5 p-8 hover:border-[#8b1a1a]/40 transition-colors">
                  <Search className="w-8 h-8 text-[#8b1a1a] mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-cinzel text-xl font-bold uppercase mb-2">The Method</h4>
                  <p className="text-sm font-mono text-zinc-500 uppercase">Forensic Methodology</p>
                </a>
              </Link>
              <Link href="/opinion">
                <a className="group block bg-[#0D0D10] border border-white/5 p-8 hover:border-[#8b1a1a]/40 transition-colors">
                  <BookOpen className="w-8 h-8 text-[#8b1a1a] mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-cinzel text-xl font-bold uppercase mb-2">The Rewrite</h4>
                  <p className="text-sm font-mono text-zinc-500 uppercase">Journalistic Opinions</p>
                </a>
              </Link>
              <Link href="/madman">
                <a className="group block bg-[#0D0D10] border border-white/5 p-8 hover:border-[#d4af37]/40 transition-colors">
                  <Fingerprint className="w-8 h-8 text-[#d4af37] mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-cinzel text-xl font-bold uppercase mb-2">Madman McCarrick</h4>
                  <p className="text-sm font-mono text-[#d4af37]/60 uppercase">The Secretarial Archive</p>
                </a>
              </Link>
            </div>
          </div>
          
          <div className="py-12 border-b border-white/5" />
          
          <div className="text-center py-24 bg-[#0a0a0c] border border-white/5">
            <h2 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest mb-6">READY TO BEGIN?</h2>
            <Link href="/ledger/martin">
              <a className="inline-block bg-[#8b1a1a] hover:bg-white hover:text-black text-white px-8 py-4 font-mono font-bold tracking-[0.3em] uppercase transition-all duration-300">
                INITIATE THE LATHAM ORIGIN
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
