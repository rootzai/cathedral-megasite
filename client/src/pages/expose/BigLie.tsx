import { motion } from "framer-motion";
import { Shield, Lock, AlertTriangle, Scale, BookOpen, ChevronRight } from "lucide-react";
import GovernanceHierarchy from "@/components/GovernanceHierarchy";
import { JourneyNav } from "@/components/JourneyNav";
import { Level3EvidenceStream } from "@/components/Level3EvidenceStream";

export default function BigLie() {
  return (
    <div className="page-enter bg-[#0a0a0c] text-parchment/90 font-serif min-h-screen">
      {/* Cinematic Hero Header */}
      <header className="relative py-32 px-6 border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold text-xs uppercase tracking-[0.5em] mb-6 block"
          >
            The Fossil Record of Concealment
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter text-white uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            THE BIG <br />
            <span className="text-gold">LIE</span>
          </motion.h1>
          <div className="h-1 w-24 bg-gold mx-auto mb-12 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          <p className="text-2xl md:text-3xl italic text-parchment/60 leading-relaxed max-w-3xl mx-auto font-body">
            "The most durable lies are not built of air; they are built of stone, statute, and structure."
          </p>
        </div>
      </header>

      {/* Act I: The Analysis */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="prose-investigative text-xl leading-relaxed text-parchment/80 space-y-12">
            <p className="first-letter:text-8xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-gold first-letter:leading-none">
              T
              o understand the institutional rot of Seton Hall, one must first confront the Governance Hierarchy. 
              This is not a directory; it is a forensic map of the cover-up. A five-layer vertical descent 
              that explains how a major academic institution was converted into a legal fortress 
              for the protection of international predators.
            </p>
            
            <div className="bg-red-900/10 border border-red-900/30 p-8 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <AlertTriangle className="w-32 h-32" />
              </div>
              <h3 className="text-gold uppercase tracking-widest text-sm font-bold mb-4 flex items-center gap-3">
                <Shield className="w-4 h-4" /> REVEALED: THE ARCHITECTURE OF SILENCE
              </h3>
              <p className="text-lg leading-relaxed italic">
                From the Trustees who seal the vault, to the Regents who weaponize the lawyers, 
                to the President who embodies the history—the machine functions as designed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Act II: The Hierarchy (Visual Centerpiece) */}
      <section className="py-24 px-6 bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white uppercase tracking-[0.2em] mb-4">The Vertical Descent</h2>
            <p className="text-gold/60 font-mono text-xs uppercase tracking-widest">Seton Hall University Governance Hierarchy // Forensic Audit</p>
          </div>
          
          <div className="bg-[#0f0f13] border border-gold/20 rounded-sm shadow-3xl p-1 md:p-8">
            <GovernanceHierarchy />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/5 bg-white/2 rounded-sm text-center group hover:border-gold/30 transition-all">
              <Lock className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Layer 1: Canonical Wall</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed uppercase">Housing the 24,000-page Latham Archive behind a wall of ecclesiastical immunity.</p>
            </div>
            <div className="p-6 border border-white/5 bg-white/2 rounded-sm text-center group hover:border-gold/30 transition-all">
              <Scale className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Layer 2: Operational Shield</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed uppercase">Weaponizing the legal apparatus (Marino/Porrino) and the Newark Perimeter (Stio/Linares/Papalia) to suppress discovery.</p>
            </div>
            <div className="p-6 border border-white/5 bg-white/2 rounded-sm text-center group hover:border-gold/30 transition-all">
              <AlertTriangle className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Layer 5: Feeder Nexus</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed uppercase">The Seminary (ICS) as the epicenter of network formation and concealment selection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Act III: The Forensic Narrative Expansion */}
      <section className="py-24 px-6 border-b border-white/5 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto prose-investigative">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-16 border-l-8 border-gold pl-8">
            The Act of <br />Institutional Hubris
          </h2>
          
          <div className="space-y-16 text-lg leading-relaxed text-parchment/70">
            <div>
              <h3 className="text-gold font-heading text-2xl mb-6">The Reilly Succession: The 18-Day Clock</h3>
              <p>
                The appointment of Msgr. Joseph R. Reilly as President was not an academic selection; 
                it was a tactical succession. Exactly 18 days after his installation on July 1, 2024, 
                the network issued a criminal grand jury subpoena to Google. The target was not a 
                criminal, but the *cardinaltobin* whistleblower account. 
              </p>
              <p className="mt-4">
                This sequence proves the "Big Lie" in real-time. While Reilly maintained the facade of 
                university leadership, the operational Board was using the power of the state to 
                pierce the anonymity of its critics. The machine did not fail; it functioned as designed.
              </p>
            </div>

            <div className="border-y border-white/5 py-12">
              <h3 className="text-gold font-heading text-2xl mb-6 italic">"I am Chairman of the Fucking Board"</h3>
              <p className="text-2xl font-serif text-white/90 leading-tight">
                "Marino: 'I am Chairman of the fucking Board and a million-dollar donor.' This is the 
                operating philosophy of Layer 2. Influence as an immunity shield."
              </p>
              <footer className="mt-4 font-mono text-xs uppercase tracking-widest text-zinc-600">— Enclosure B Order, p. 6</footer>
            </div>

            <div>
              <h3 className="text-gold font-heading text-2xl mb-6">The SCIF Concealment (2019)</h3>
              <p>
                On August 27, 2019, the "Big Lie" was codified in a SCIF (Secure Compartmented 
                Information Facility) in Newark. Cardinal Tobin and Kathryn Ruemmler presented 
                the Latham findings to a Board that was forbidden from taking notes or removing 
                documents. 
              </p>
              <p className="mt-4">
                They identified 12 active clergymen who "Knew." They decided to bury the report. 
                They then hired Joe Nyre—an outsider—to inhabit the presidency as a human shield 
                for an archive he was never permitted to see. When Nyre eventually discovered 
                the "Breach," the network turned on him with the full weight of the Tier 2 
                legal apparatus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Act IV: The Conclusion */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <BookOpen className="w-12 h-12 text-gold mx-auto mb-8 opacity-20" />
          <h2 className="text-3xl font-black text-white uppercase tracking-[0.3em] mb-8">The Audit is Final</h2>
          <p className="text-xl italic text-parchment/50 mb-12">
            The Shield is failing. The unsealing has begun. The weight always finds the neck.
          </p>
          <div className="flex justify-center gap-6">
             <button className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl">
               Download Forensic PDF
             </button>
          </div>
        </div>
      </section>

      {/* RESTORED WORKFLOW NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <JourneyNav />
      </div>
    </div>
  );
}
