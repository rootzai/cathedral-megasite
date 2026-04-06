import { motion } from "framer-motion";
import { Link } from "wouter";
import React, { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  ShieldAlert, 
  FileText, 
  Scale, 
  AlertTriangle,
  History,
  Map,
  Fingerprint,
  Mail,
  Gavel,
  Church,
  Eye,
  EyeOff,
  Lock,
  Activity
} from "lucide-react";

/**
 * Term component for glossary-style tooltips
 */
const Term = ({ word, definition }: { word: string; definition: string }) => (
  <span className="group relative border-b border-dotted border-red-900/50 cursor-help inline-block">
    <span className="font-bold text-zinc-900 group-hover:text-red-900 transition-colors">{word}</span>
    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-zinc-900 text-white text-[10px] p-3 rounded shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 font-sans normal-case tracking-normal leading-relaxed border border-white/10">
      {definition}
      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900" />
    </span>
  </span>
);

/**
 * Collapsible section for granular details
 */
const CollapsibleSection = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-zinc-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-900 transition-colors flex items-center gap-3">
          {isOpen ? <ChevronUp className="w-4 h-4 text-red-900" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
          {title}
        </h4>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 pb-4 overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default function HomeActs() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-zinc-50">
      {/* HUD Navigation (Left Rail) */}
      <aside className="lg:w-72 bg-zinc-900 text-white p-8 sticky top-0 h-screen overflow-y-auto hidden lg:block border-r border-white/5">
        <div className="mb-12">
          <h1 className="text-2xl font-black tracking-tighter leading-none mb-2">SODOM<br />HALL</h1>
          <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.3em]">Forensic Audit v7.0</p>
        </div>

        <nav className="space-y-6">
          {[
            { id: "act-i", label: "The Origin", sub: "Crawford/Martin" },
            { id: "act-ii", label: "The Machine", sub: "Building the Shield" },
            { id: "act-iii", label: "The Sham", sub: "Perry Law Forensic" },
            { id: "act-iv", label: "The Legal Wall", sub: "Scrivo-O'Toole" },
            { id: "act-v", label: "The Present", sub: "Active Litigation" },
            { id: "act-vi", label: "The Victims", sub: "The 432 Humanity" }
          ].map((act, i) => (
            <a 
              key={act.id}
              href={`#${act.id}`} 
              className="group block border-l-2 border-white/10 hover:border-red-900 pl-6 transition-all"
            >
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-1">Act 0{i}</div>
              <div className="text-sm font-bold group-hover:text-red-900 transition-colors uppercase tracking-widest">{act.label}</div>
              <div className="text-[9px] text-zinc-500 italic mt-1">{act.sub}</div>
            </a>
          ))}
        </nav>

        <div className="mt-24 pt-12 border-t border-white/5">
            <Link href="/ledger">
               <button className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-[9px] hover:bg-red-900 hover:text-white transition-all">Audit The Ledger</button>
            </Link>
        </div>
      </aside>

      <main id="home-acts-main" className="flex-1 min-w-0 transition-colors duration-500">
        {/* ACT I: THE ORIGIN (1987-1989) */}
        <section id="act-i" className="py-32 bg-[#0a0a0c] border-b border-white/5">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-center text-center mb-20 space-y-4">
              <span className="text-[#8b1a1a] font-black text-[10px] uppercase tracking-[0.6em] font-courier">ACT I // THE ORIGIN</span>
              <h2 className="text-5xl md:text-7xl font-black font-cinzel text-white uppercase tracking-tighter">THE STARTING POINT</h2>
              <p className="text-xl text-zinc-500 font-serif italic max-w-2xl">"Mark Crawford, Age 13. McCarrick, The Architect. Kenneth Martin, The Predator."</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-lg text-zinc-400 font-serif leading-relaxed italic border-l-2 border-[#8b1a1a] pl-6">
                  In 1987, Mark Crawford reports his abuse to Cardinal McCarrick. In 1989, McCarrick is photographed at a Christmas party with the abuser. The shield was built in the space between that report and that party.
                </p>
                <div className="bg-[#0D0D10] border border-white/5 p-8">
                  <h4 className="text-white font-black font-cinzel uppercase tracking-widest mb-4">The Advocate Photo</h4>
                  <p className="text-sm text-zinc-500 font-serif leading-relaxed italic">
                    Forensic Exhibit SHU-Latham. The objective record of institutional collaboration. McCarrick's 'fair hearing' was the first disinformation campaign, now unmasked by the Latham Archive.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <img src="/assets/WhatsAppImage2025-10-11at11.40.16_e2ac3ebb.jpg" alt="Act I Evidence" className="w-full grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10" />
                <div className="absolute top-4 left-4 bg-[#8b1a1a] text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest font-courier">EXHIBIT A</div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT II: THE MACHINE (1990-2018) */}
        <section id="act-ii" className="py-32 bg-[#0a0a0c] border-b border-white/5">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-center text-center mb-20 space-y-4">
              <span className="text-[#8b1a1a] font-black text-[10px] uppercase tracking-[0.6em] font-courier">ACT II // THE MACHINE</span>
              <h2 className="text-5xl md:text-7xl font-black font-cinzel text-white uppercase tracking-tighter">THE RECONVERSION</h2>
              <p className="text-xl text-zinc-500 font-serif italic max-w-2xl">"Converting survivors into 'anomalies'. Converting predators into 'assets'."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0D0D10] border border-white/5 p-8 space-y-6">
                <ShieldAlert className="w-8 h-8 text-[#8b1a1a]" />
                <h4 className="text-lg font-black font-cinzel text-white uppercase">The 2005 Rewrite</h4>
                <p className="text-sm text-zinc-500 font-serif italic leading-relaxed">
                  The manufacturing of the 'Statute of Limitations' fraud. Internal registries were falsified to claim Crawford's birthday happened earlier.
                </p>
              </div>
              <div className="bg-[#0D0D10] border border-white/5 p-8 space-y-6">
                <Lock className="w-8 h-8 text-[#8b1a1a]" />
                <h4 className="text-lg font-black font-cinzel text-white uppercase">The IVCP Waiver</h4>
                <p className="text-sm text-zinc-500 font-serif italic leading-relaxed">
                  Bulk-purchasing silence for payouts as small as $15,000, in exchange for a total waiver of liability for the institution.
                </p>
              </div>
              <div className="bg-[#0D0D10] border border-white/5 p-8 space-y-6">
                <Activity className="w-8 h-8 text-[#8b1a1a]" />
                <h4 className="text-lg font-black font-cinzel text-white uppercase">The Talent Moat</h4>
                <p className="text-sm text-zinc-500 font-serif italic leading-relaxed">
                  Building a layer of lawyers (Porrino, Stio, Villar) to serve as a biological wall between the Board and the Truth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACT III: THE SHAM (2019-2023) */}
        <section id="act-iii" className="py-32 bg-[#0a0a0c] border-b border-white/5">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-center text-center mb-20 space-y-4">
              <span className="text-[#8b1a1a] font-black text-[10px] uppercase tracking-[0.6em] font-courier">ACT III // THE SHAM</span>
              <h2 className="text-5xl md:text-7xl font-black font-cinzel text-white uppercase tracking-tighter">PERRY LAW</h2>
              <p className="text-xl text-zinc-500 font-serif italic max-w-2xl">"The Lori Brown Note. The Agnifilo Omission. The Big Lie."</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#8b1a1a]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-[#070709] border border-white/10 p-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <FileText className="w-6 h-6 text-[#8b1a1a]" />
                    <span className="text-[10px] font-black font-courier text-white uppercase tracking-[0.3em]">Forensic Audit</span>
                  </div>
                  <h4 className="text-2xl font-black font-cinzel text-white uppercase tracking-tighter">THE LORI BROWN NOTE</h4>
                  <p className="text-lg text-zinc-400 font-serif italic leading-relaxed">
                    "I am not independent. I am hired by the Board to protect the Board." — The unpublished directive that defined the Perry Law 'independent' report.
                  </p>
                </div>
              </div>
              <div className="space-y-12">
                <p className="text-lg text-zinc-400 font-serif leading-relaxed italic">
                  How was Mark Crawford stopped? Not by facts, but by the 'Martha's Vineyard' fabrication—a curated list of texts provided by Kevin Marino to Perry Law to claim the survivors were 'friends' with their harasser.
                </p>
                <div className="p-8 border-l-2 border-[#8b1a1a] bg-white/5 group hover:bg-white/10 transition-colors">
                  <h5 className="text-white font-black font-cinzel text-xs uppercase mb-2">The Agnifilo Omission</h5>
                  <p className="text-xs text-zinc-500 font-courier uppercase tracking-widest leading-loose">
                    Karen Agnifilo failed to interview the principal witnesses. She failed to review the Latham Archive. She published a manifest of institutional innocence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT IV: THE LEGAL WALL (2024) */}
        <section id="act-iv" className="py-32 bg-[#0a0a0c] border-b border-white/5">
          <div className="container mx-auto max-w-5xl px-6 text-center space-y-16">
            <div className="space-y-4">
              <span className="text-[#8b1a1a] font-black text-[10px] uppercase tracking-[0.6em] font-courier">ACT IV // THE LEGAL WALL</span>
              <h2 className="text-5xl md:text-7xl font-black font-cinzel text-white uppercase tracking-tighter">SCRIVO-O'TOOLE</h2>
            </div>
            
            <p className="text-2xl text-zinc-400 font-serif italic max-w-3xl mx-auto leading-relaxed">
              "When the truth breached the shield, the machines of the State were deployed."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-8 border border-white/5 bg-[#0D0D10] space-y-4">
                <Gavel className="w-6 h-6 text-[#8b1a1a]" />
                <h4 className="text-white font-black font-cinzel uppercase tracking-widest">The Sanction Pleadings</h4>
                <p className="text-sm text-zinc-500 font-serif italic">
                  Coordinated motions filed in multiple jurisdictions to freeze the journalist's assets and move for immediate unmasking.
                </p>
              </div>
              <div className="p-8 border border-white/5 bg-[#0D0D10] space-y-4">
                <Mail className="w-6 h-6 text-[#8b1a1a]" />
                <h4 className="text-white font-black font-cinzel uppercase tracking-widest">The Sulzberger Chain</h4>
                <p className="text-sm text-zinc-500 font-serif italic">
                  Documented warnings sent to the New York Times, ignored to protect the relationship between the paper and the New Jersey political elite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACT V: THE PRESENT (2025-2026) */}
        <section id="act-v" className="py-32 bg-[#0a0a0c] border-b border-white/5">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="flex flex-col items-center text-center mb-20 space-y-4">
              <span className="text-[#8b1a1a] font-black text-[10px] uppercase tracking-[0.6em] font-courier">ACT V // THE PRESENT</span>
              <h2 className="text-5xl md:text-[8rem] font-black font-cinzel text-white uppercase tracking-tighter">THE BREACH</h2>
              <p className="text-xl text-zinc-500 font-serif italic max-w-2xl">"May 18. The Unsealing of the 24,000 Pages."</p>
            </div>

            <div className="bg-[#8b1a1a]/5 border border-[#8b1a1a]/20 p-12 text-center space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#8b1a1a]/10 blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-6">
                <p className="text-3xl font-black font-cinzel text-white uppercase">THE LATHAM REPORT PRODUCTION</p>
                <p className="text-lg text-zinc-400 font-serif italic italic max-w-3xl mx-auto">
                  The 2026 California hearing marks the collision of the Shield and the Truth. The production of the privileged archives will end the 'Big Lie' era.
                </p>
                <div className="flex justify-center gap-12 pt-8">
                  <div className="text-center">
                    <span className="text-[#8b1a1a] font-black text-[10px] font-courier uppercase tracking-widest block">Status</span>
                    <span className="text-white font-black text-xl uppercase">ACTIVE</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[#8b1a1a] font-black text-[10px] font-courier uppercase tracking-widest block">Hearing</span>
                    <span className="text-white font-black text-xl uppercase">MAY 28</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT VI: THE VICTIMS (THE 432) */}
        <section id="act-vi" className="py-32 bg-[#0a0a0c]">
          <div className="container mx-auto max-w-5xl px-6 text-center space-y-12">
            <span className="text-[#8b1a1a] font-black text-[10px] uppercase tracking-[0.6em] font-courier">ACT VI // THE VICTIMS</span>
            <h2 className="text-5xl md:text-[8rem] font-black font-cinzel text-white uppercase tracking-tighter opacity-10">THE 432</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-2xl text-zinc-400 font-serif italic leading-relaxed">
                "Behind every block of the legal wall, there is a pulse. Behind every falsified birthday, there is a childhood stolen."
              </p>
              <p className="text-sm text-zinc-600 font-courier uppercase tracking-widest leading-loose">
                The 432 active lawsuits against the Archdiocese of Newark represent the total collapse of the McCarrick shield. This is not a legal problem. It is a humanitarian crisis housed in a Cathedral.
              </p>
            </div>
            <div className="pt-24 border-t border-white/5 opacity-40">
              <p className="text-[10px] font-black font-courier text-zinc-500 uppercase tracking-[0.5em]">Sodom Hall v3.0 // THE END OF IMMUNITY</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}