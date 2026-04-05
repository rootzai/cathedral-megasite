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
  EyeOff
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
            { id: "act-0", label: "The Signal", sub: "The Unmasking" },
            { id: "act-i", label: "The Origin", sub: "McCarrick/Reilly" },
            { id: "act-ii", label: "The Architecture", sub: "2005 Rewrite" },
            { id: "act-iii", label: "The Breach", sub: "The Big Lie" },
            { id: "act-iv", label: "The High Court", sub: "NYT Notice" },
            { id: "act-v", label: "The Succession", sub: "The Millstone" }
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
        {/* ACT 0: THE SIGNAL (2024-2025) */}
        <section id="act-0" className="py-24 bg-[#0a0a0c] border-b border-red-900/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/assets/seton-hall-hierarchy.png')] bg-cover bg-fixed grayscale" />
          
          <div className="container mx-auto max-w-5xl px-6 relative z-10">
            <div className="flex items-center gap-4 mb-12">
               <div className="h-px flex-1 bg-red-900/40" />
               <span className="text-red-700 font-black text-[10px] uppercase tracking-[0.5em]">Forensic Signal // THE CARDINALTOBIN CAMPAIGN</span>
               <div className="h-px flex-1 bg-red-900/40" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-12 mb-12">
                <h2 className="text-zinc-500 font-bold text-lg mb-2 font-mono tracking-widest uppercase">ACT 0</h2>
                <h3 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white uppercase leading-none">
                    THE <span className="text-red-900">SIGNAL</span> <br />
                    & THE UNMASKING
                </h3>
              </div>

              <div className="lg:col-span-8 space-y-12">
                <div className="prose prose-invert prose-xl max-w-none text-zinc-400 font-serif leading-relaxed italic">
                  <p className="border-l-4 border-red-900 pl-8 py-4">
                      "In late 2024, five rounds of warnings were sent to the SHU governing boards. The response was not investigation, but a Bergen County Grand Jury unmasking scheme."
                  </p>
                </div>

                <div className="space-y-8">
                  <CollapsibleSection title="The cardinaltobin@gmail.com Warnings (Sept–Nov 2024)">
                    <div className="text-zinc-300 space-y-4">
                      <p>The campaign consisted of five sequenced alerts sent to the Board of Regents, Board of Trustees, and Cardinal Tobin personally. The goal: warn the institution about the installation of <strong className="text-white">Monsignor Joseph Reilly</strong>—the man whose removal the Latham Report had recommended.</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Round 1 (Sept 22):</strong> Initial warning regarding the "Talent Moat."</li>
                        <li><strong>Round 3 (Oct 18):</strong> Explicit identification of Reilly as the target of upcoming reporting.</li>
                        <li><strong>Round 5 (Nov 1):</strong> The "Code Red" warning before Reilly's install.</li>
                      </ul>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="The Manufactured Predicate: RCAN Fraud Advisory">
                    <div className="text-zinc-300 space-y-4">
                      <p>On October 15, 2024, the Archdiocese of Newark (RCAN) published a false "Fraud Advisory." It claimed the email account was <strong className="text-red-500 uppercase tracking-widest">soliciting money</strong>—a criminal predicate manufactured to justify law enforcement intervention. No money was ever solicited. The advisory was a "seed" to produce a grand jury subpoena.</p>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="The Scrivo-Porrino Grand Jury Scheme">
                    <div className="text-zinc-300 space-y-4">
                      <p>On November 20, 2024, 16 days after Reilly’s investiture, a Bergen County grand jury subpoena was issued to Google. The timing reveals the coordination: <strong className="text-white">Thomas Scrivo</strong> (SHU Counsel) and <strong className="text-white">Christopher Porrino</strong> (Marino's lawyer) sent coordinated litigation hold letters to the journalist *before* Google reached its return date. How did they know the name before the production? The Section 1983 Civil Conspiracy begins here.</p>
                    </div>
                  </CollapsibleSection>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-zinc-900/40 border border-white/10 p-8 sticky top-24">
                    <span className="text-red-900 font-black text-[9px] uppercase tracking-widest block mb-4">The Fletch Register</span>
                    <p className="text-lg text-white font-bold leading-tight">"I'm a cross between an old-school investigative columnist — IM Fletcher — and a whistleblower."</p>
                    <p className="text-xs text-zinc-500 mt-4 leading-relaxed font-mono uppercase tracking-[0.2em]">
                       The Jan 7 "Assface" letter to Scrivo: A first-person declaration of journalistic identity that the institution now attempts to redact in California court.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT I: THE ORIGIN (1987) */}
        <section id="act-i" className="py-24 bg-zinc-50 border-b border-zinc-200 relative">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="flex items-center gap-4 mb-12">
               <div className="h-px flex-1 bg-zinc-300" />
               <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">The McCarrick Foundation</span>
               <div className="h-px flex-1 bg-zinc-300" />
            </div>

            <div className="mb-16">
              <h2 className="text-zinc-400 font-bold text-lg mb-2 font-mono tracking-widest uppercase">ACT I</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-zinc-900 uppercase">THE ORIGIN & THE TWINS</h3>
              <p className="text-2xl text-zinc-600 font-serif italic mb-12">"McRyan and the art of the feeder system."</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 uppercase tracking-widest mb-4">Mark Crawford: The Betrayal</h4>
                    <p className="text-lg text-zinc-800 leading-relaxed font-serif">
                      In 1987, Mark Crawford reported his abuse to <Term word="Cardinal McCarrick" definition="The ultimate architect of the Newark power structure." />. McCarrick's 'fair hearing' was the first instrument of the shield. The 1989 <strong className="text-red-900">Advocate Photo</strong>—showing McCarrick celebrating with abuser Fr. Kenneth Martin—proves the betrayal was immediate.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white border border-zinc-200">
                    <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-widest mb-2 font-mono">The Feeder System</h4>
                    <p className="text-sm text-zinc-600 font-serif">
                      McCarrick didn't just hide abuse; he built a pipeline. He ordained 'The Twins'—<strong className="text-zinc-900">Joseph Reilly</strong> and <strong className="text-zinc-900">Elias Lorenzo</strong>—and strategically placed them in the 'feeder' zones: <Term word="Seton Hall Prep" definition="The primary recruitment ground for the University and the priesthood." /> and <Term word="Delbarton" definition="The elite enclave of institutional silence." />.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-zinc-900 text-white p-8">
                    <span className="text-red-500 font-black text-[9px] uppercase tracking-widest block mb-4">The Dirty Dozen</span>
                    <p className="text-xl font-bold leading-tight mb-4">"12 Names. One Latham Archive."</p>
                    <p className="text-sm text-zinc-400 font-serif">
                      The Latham Report documents 12 specific clergymen—the 'Dirty Dozen'—who operated within this feeder system. While Reilly rose to the Presidency and Lorenzo to the Bishopric (Metuchen), the names of the others remained buried in the 24,000-page archive.
                    </p>
                  </div>
                  <div className="aspect-video bg-zinc-200 grayscale contrast-125 overflow-hidden border border-zinc-300">
                    <img src="/assets/WhatsAppImage2025-10-11at11.40.16_e2ac3ebb.jpg" alt="The Advocate Photo" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT II: THE ARCHITECTURE (2005-2019) */}
        <section id="act-ii" className="py-24 bg-white border-b border-zinc-200 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl px-6 relative z-10">
            <div className="flex items-center gap-4 mb-12">
               <div className="h-px flex-1 bg-zinc-300" />
               <span className="text-zinc-500 font-black text-[10px] uppercase tracking-[0.4em]">The 30-Year Silence // THE ARCHITECTURE</span>
               <div className="h-px flex-1 bg-zinc-300" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-12">
                <h2 className="text-zinc-400 font-bold text-lg mb-2 font-mono tracking-widest uppercase">ACT II</h2>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-zinc-900 uppercase">THE ARCHITECTURE OF PROTECTION</h3>
              </div>

              <div className="lg:col-span-12 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-zinc-900 uppercase tracking-widest">The 2005 Rewrite: The Statute Fraud</h4>
                    <p className="text-lg text-zinc-800 leading-relaxed font-serif">
                       In 2005, the Archdiocese of Newark executed a documented rewrite of their internal reporting protocols. This wasn't to increase transparency, but to manufacture a <strong className="text-red-900">Statute of Limitations fraud</strong>. By re-categorizing 'notices' and 'allegations,' they built a legal firewall that would stall survivors for another two decades.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-zinc-900 uppercase tracking-widest">IVCP: The Waiver Mechanism</h4>
                    <p className="text-lg text-zinc-800 leading-relaxed font-serif">
                       The Independent Victim Compensation Program (IVCP) was the ultimate "Conversion Mechanism." It offered fast payments in exchange for a <strong className="text-black italic">comprehensive waiver of rights</strong>. This wasn't healing; it was a bulk-purchase of silence to protect the "Ecclesiastical Assets."
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-100 p-12 border border-zinc-200">
                  <h4 className="text-2xl font-bold text-zinc-900 uppercase tracking-widest mb-6 text-center">The Latham Archive (2019)</h4>
                  <p className="text-xl text-zinc-700 font-serif italic text-center max-w-3xl mx-auto leading-relaxed">
                     "24,000 pages. Sealed immediately. The Archive documents the Board's full knowledge of the 'Dirty Dozen' and the failure of the Scrivo-ordered cleanups."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT III: THE BREACH (2020-2024) */}
        <section id="act-iii" className="py-24 bg-zinc-900 border-b border-red-900/30 relative">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="flex items-center gap-4 mb-12">
               <div className="h-px flex-1 bg-red-900/20" />
               <span className="text-red-700 font-black text-[10px] uppercase tracking-[0.5em]">Institutional Breach // THE NYRE REVOLT</span>
               <div className="h-px flex-1 bg-red-900/20" />
            </div>

            <div className="mb-16">
              <h2 className="text-zinc-500 font-bold text-lg mb-2 font-mono tracking-widest uppercase">ACT III</h2>
              <h3 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-white uppercase leading-tight">THE NYRE BREACH <br /> & THE BIG LIE</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-12">
                  <div className="prose prose-invert prose-xl text-zinc-400 font-serif leading-relaxed italic">
                    <p className="border-l-4 border-red-900 pl-8 py-4">
                        "The Dr. Joseph Nyre presidency was supposed to be the new face of Seton Hall. Instead, it became the breach that exposed the Board's control over the logs."
                    </p>
                  </div>

                  <div className="space-y-8">
                    <CollapsibleSection title="The Perry Law Sham (Karen Agnifilo)">
                      <div className="text-zinc-300 space-y-4">
                        <p>After Dechert LLP was removed for being 'not pliable,' the Board hired <strong className="text-white">Perry Law Group</strong>. Karen Friedman Agnifilo produced a 'no evidence' conclusion that famously buried the eyewitness testimony of <strong className="text-white">Regent Kevin Flood</strong>—who saw Marino's hands on Kelli Nyre.</p>
                      </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="The Martha's Vineyard 'Big Lie'">
                      <div className="text-zinc-300 space-y-4 font-serif">
                        <p>The centerpiece of the Perry Law exoneration was the claim that the Nyre family voluntarily vacationed with Kevin Marino in <strong className="text-red-500 uppercase">Martha's Vineyard</strong> weeks after the alleged harassment. Marino curated and provided the texts. The Nyres have since sworn under oath that this narrative is a complete fabrication.</p>
                      </div>
                    </CollapsibleSection>

                    <CollapsibleSection title="Outing the Complainants">
                      <div className="text-zinc-300 space-y-4">
                        <p>In an unprecedented act of intimidation, <strong className="text-white">Christopher Porrino</strong> attached the unredacted Perry Law Report to a public amicus brief—deliberately outing <strong className="text-white">Kim Capadona</strong> and <strong className="text-white">Donna McMonagle</strong> as sexual harassment complainants in a public court filing.</p>
                      </div>
                    </CollapsibleSection>
                  </div>
                </div>

                <div className="lg:col-span-4">
                   <div className="bg-red-950/20 border-2 border-red-900/40 p-8">
                      <h4 className="text-red-500 font-bold uppercase text-xs tracking-widest mb-6 italic">The Marino Machine</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed font-serif mb-8">
                        Kevin Marino (Chair, 2019-2023) is the gravitational center. He represented Bill Stepien in Bridgegate. He recruited Mary Pat Christie. He knows how to use institutional machinery as both shield and weapon.
                      </p>
                      <div className="h-px bg-red-900/20 mb-8" />
                      <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest leading-loose">
                        "They didn't just hide the truth; they built a hierarchy to house the lie."
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT IV: THE HIGH COURT (2025-2026) */}
        <section id="act-iv" className="py-24 bg-[#0a0a0c] border-b border-red-900/30 relative">
          <div className="container mx-auto max-w-5xl px-6">
             <div className="flex items-center gap-4 mb-12">
               <div className="h-px flex-1 bg-red-900/40" />
               <span className="text-red-700 font-black text-[10px] uppercase tracking-[0.5em]">Judicial Notice // THE NYT RECORD</span>
               <div className="h-px flex-1 bg-red-900/40" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-12">
                <h2 className="text-zinc-500 font-bold text-lg mb-2 font-mono tracking-widest uppercase">ACT IV</h2>
                <h3 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-white uppercase leading-tight">THE HIGH COURT <br /> & THE NOTICE RECORD</h3>
              </div>

              <div className="lg:col-span-8 space-y-12">
                <div className="prose prose-invert prose-xl text-zinc-400 font-serif leading-relaxed italic">
                  <p className="border-l-4 border-red-900 pl-8 py-4">
                      "The cover-up wasn't just a Seton Hall operation. It required the capture of the paper of record and the neutralization of the New Jersey judiciary."
                  </p>
                </div>

                <div className="space-y-8">
                  <CollapsibleSection title="The New York Times Notice Record">
                    <div className="text-zinc-300 space-y-4">
                      <p>The record establishes that <strong className="text-white">A.G. Sulzberger</strong> (Publisher) and <strong className="text-white">Christopher Maag</strong> were personally informed of the Perry Law fabrication as early as Sept 2024. They were warned that their July 11 story was a 'pre-briefed' Porrino plant. They published nothing. The silence of the Times is the cover-up's long tail.</p>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="The Rabner Referral">
                    <div className="text-zinc-300 space-y-4">
                      <p>On Oct 18, 2024, a formal dossier was submitted to <strong className="text-white">Chief Justice Stuart Rabner</strong> regarding the weaponization of the grand jury. The referral documented the coordination between Scrivo's firm and the Bergen County Prosecutor's office. The question remains: why did the High Court allow the California enforcement to proceed?</p>
                    </div>
                  </CollapsibleSection>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-zinc-900/40 border border-white/10 p-8">
                  <h4 className="text-red-900 font-black text-[9px] uppercase tracking-widest mb-4">Evidence: The Sulzberger Chain</h4>
                  <p className="text-sm text-zinc-500 font-mono leading-relaxed">
                    "Should I be doubting your position atop the journalism pyramid? Is the US Catholic Church too big for you to mess with?" <br /><br />
                    — Dec 2, 2024 email to A.G. Sulzberger
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT V: THE SUCCESSION (2026+) */}
        <section id="act-v" className="py-24 bg-white border-b border-zinc-200 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl px-6 relative z-10">
             <div className="flex items-center gap-4 mb-12">
               <div className="h-px flex-1 bg-zinc-300" />
               <span className="text-zinc-500 font-black text-[10px] uppercase tracking-[0.4em]">Ecclesiastical Succession // THE MILLSTONE</span>
               <div className="h-px flex-1 bg-zinc-300" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-12">
                <h2 className="text-zinc-400 font-bold text-lg mb-2 font-mono tracking-widest uppercase">ACT V</h2>
                <h3 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-zinc-900 uppercase leading-none">THE SUCCESSION</h3>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <p className="text-2xl text-zinc-700 font-serif italic border-l-4 border-red-900 pl-8 py-4">
                    "The Shield isn't just about protecting the past; it's about qualifying the future. Tobin's dual-chair authority is the lock. Checchio is the key."
                </p>
                
                <div className="space-y-6 text-lg text-zinc-800 font-serif leading-relaxed">
                  <p>
                    Cardinal <strong className="text-zinc-900">Joseph Tobin</strong> sits at the apex. He chairs the Board of Trustees and the Board of Regents. He oversees the Archdiocese and the University. This structural capture ensured the Latham Report stayed buried for six years.
                  </p>
                  <p>
                    Now, as the downfall becomes inevitable, the 'Metuchen Model' emerges. <strong className="text-zinc-900">Bishop James Checchio</strong>—a product of the same feeder system—is positioned for the succession. The names change, but the architecture of protection remains.
                  </p>
                </div>

                <div className="pt-8 border-t border-zinc-200">
                   <p className="text-xs text-zinc-500 font-mono uppercase tracking-[0.4em] leading-loose text-center">
                      The forensic audit is complete. The truth is no longer a secret. <br />
                      <span className="text-red-900 font-black uppercase text-[10px]">SodomHall.com — The Archive is Global.</span>
                   </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                 <div className="bg-zinc-900 text-white p-8 border border-zinc-700 shadow-2xl">
                    <h4 className="text-red-500 font-bold uppercase text-xs tracking-widest mb-4 font-mono">The Millennium File</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-serif mb-6 italic">
                       "To those who built the lie: Your fingerprints are in the ink. The Martha's Vineyard fabrication was the last brick in the wall. The wall just fell."
                    </p>
                    <Link href="/ledger">
                       <button className="w-full py-4 bg-red-900 hover:bg-red-800 text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all">Audit the Full Hierarchy (The Ledger)</button>
                    </Link>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}