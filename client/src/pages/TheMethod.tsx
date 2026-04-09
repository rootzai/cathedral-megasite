import React from "react";
import { motion } from "framer-motion";
import { Search, Fingerprint, Database, AlertTriangle, ArrowRight, Eye, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

const FINGERPRINTS = [
  {
    id: "01",
    title: "The Bulletins",
    parallel: "SIMULTANEOUS PARISH ARCHIVE SEARCH",
    evidence: "RCAN advisory (October 15, 2024) + five parish bulletins",
    desc: "They distributed the fabricated bulletins across five parishes because they assumed no one would ever search five parish archives simultaneously. That assumption was correct for every investigative method that existed before this one. The fabricated predicate was found in the place the network assumed was practically invisible."
  },
  {
    id: "02",
    title: "Footnote 10",
    parallel: "ENTIRE REPORT CROSS-REFERENCE",
    evidence: "Perry Law Report, footnote 10, page 13",
    desc: "Perry Law Report is ~16 pages. AI reads the whole document simultaneously and flags every internal contradiction. Footnote 10: the summer 2021 harassment report and the Martha's Vineyard visit in the same summer, unreconciled."
  },
  {
    id: "03",
    title: "The Scrivo Perjury Proof",
    parallel: "TRI-DOCUMENT CONFLICT ANALYSIS",
    evidence: "Scrivo Declaration (March 11, 2026) vs. Scrivo hold letter (December 17, 2024)",
    desc: "Three documents held simultaneously: the Scrivo declaration, Scrivo's own December 17 letter, SHU's Verified Complaint. The proof of false statement to a tribunal is hiding in the defendant's own filing."
  },
  {
    id: "04",
    title: "The Six-Day Gap",
    parallel: "COORDINATION SIGNATURE TIMESTAMPING",
    evidence: "Both hold letters, documentary record",
    desc: "Porrino December 11. Scrivo December 17. Six days apart. Two lawyers. Two clients. One piece of information that could only have traveled one way. AI timestamps both, identifies the coordination signature."
  },
  {
    id: "05",
    title: "The Pre-Briefing Problem",
    parallel: "NORMATIVE PUBLICATION TIMELINE COMPARISON",
    evidence: "Court filing timestamp (ESX-L-000867-24) + Times publication record",
    desc: "Porrino's amicus brief filed: July 10, 2024, 9:57 PM. Times story published: evening of July 11, 2024. No external deadline. No competitive pressure. The pace was Porrino's. AI analyzes the production timeline against newspaper norms and identifies the placement structure."
  },
  {
    id: "06",
    title: "The Christie Network Map",
    parallel: "INSTITUTIONAL ORIGIN TRACING",
    evidence: "Scrivo, Porrino, DiGiulio, Barba Jones, Davenport, Mary Pat Christie",
    desc: "Six institutional actors. One origin point. Every accountability mechanism in New Jersey traces to a single political administration. The capture is total. Visible only when all six actors are mapped simultaneously."
  },
  {
    id: "07",
    title: "The 36-Day Clock",
    parallel: "POST-PURPOSE EVENT EXTENSION",
    evidence: "RCAN advisory (Oct 15, 2024) vs Grand jury subpoena (Nov 20, 2024)",
    desc: "Exactly 36 days. The advisories continued until June 2025 — seven months after the subpoena was issued. AI extends the timeline and identifies that the false predicate remained in active distribution for seven months after it served its purpose."
  },
  {
    id: "08",
    title: "The Logbook and Perry Law Collision",
    parallel: "SIMULTANEOUS ABSENCE DETECTION",
    evidence: "Capadona restored logbook (March 2024) vs Perry Law engagement",
    desc: "Capadona restored the erased complaints to the logbook in March 2024. Perry Law engaged March 10, 2024. The logbook — restored, accurate, containing the pattern — is not on Perry Law's document review list. AI cross-references the engagement date against the restoration date and identifies the simultaneous absence."
  }
];

export default function TheMethod() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-cormorant selection:bg-[#1a3a5c] selection:text-white pb-32">
      {/* VUCETIC HERO */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 px-6 border-b border-[#1a3a5c]/20 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[#1a3a5c]/5 blur-[120px] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="flex justify-center">
            <Fingerprint className="w-20 h-20 text-[#1a3a5c]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-cinzel text-white uppercase tracking-tighter">
            THE <span className="text-[#3a8ef6]">METHOD</span>
          </h1>
          <div className="space-y-6 text-xl text-zinc-400 font-serif leading-relaxed italic text-left p-8 bg-[#0D0D10] border border-white/5">
            <p>
              <strong className="text-white not-italic font-cinzel tracking-widest text-sm">Ivan Vucetic, Database Pioneer</strong><br/>
              Born Hvar, Croatia, 1858. Emigrated to Argentina. 1892: The Francisca Rojas case — two children murdered. First criminal conviction by fingerprint evidence.
            </p>
            <p>
              His insight: you don't need a confession. You don't need a witness to the act itself. The physical evidence of coordination leaves its own mark, unique and unrepeatable.
            </p>
            <p>
              1911-1913: The Mona Lisa theft. Vincenzo Peruggia caught when Italian police matched his fingerprints against the Paris prisoner database using Vucetic's classification system. He'd been printed in Paris in 1909. The painting had been in his apartment for two years. The database found the match.
            </p>
            <p className="border-l-2 border-[#3a8ef6] pl-6 py-2 mt-6">
              Vucetic didn't watch the theft. He built the system that found the fingerprint that was already there.
            </p>
          </div>
        </div>
      </section>

      {/* THE 8 FINGERPRINTS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[#3a8ef6] font-black text-xs uppercase tracking-[0.5em] font-courier">Forensic AI Analysis</span>
            <h2 className="text-4xl font-black font-cinzel text-white uppercase tracking-widest">THE EIGHT FINGERPRINTS</h2>
            <div className="h-px w-24 bg-[#3a8ef6] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FINGERPRINTS.map((fp, i) => (
              <motion.div 
                key={fp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0D0D10] border border-white/5 p-8 hover:border-[#1a3a5c] transition-colors relative group"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-black font-cinzel text-white uppercase">{fp.id}. {fp.title}</h3>
                  <Fingerprint className="w-6 h-6 text-[#1a3a5c] group-hover:text-[#3a8ef6] transition-colors" />
                </div>
                
                <div className="mb-6 space-y-2">
                  <span className="block text-xs text-[#3a8ef6] font-courier uppercase tracking-widest leading-relaxed">
                    VUCETIC PARALLEL: <br/>{fp.parallel}
                  </span>
                  <span className="block text-xs text-zinc-500 font-courier uppercase tracking-widest leading-relaxed">
                    PRIMARY SOURCE: <br/>{fp.evidence}
                  </span>
                </div>

                <p className="text-zinc-400 font-serif leading-relaxed italic">
                  {fp.desc}
                </p>

                {fp.id === "04" && (
                    <div className="mt-6 pt-6 border-t border-[#8b1a1a]/20">
                        <Link href="/easter">
                            <a className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#8b1a1a] hover:text-white transition-colors cursor-pointer group/link">
                                The Agnifilo Paradox as Easter egg <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </Link>
                    </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE METHOD CONCLUSION */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-[#0D0D10] border border-white/5 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a3a5c]/10 blur-[80px]" />
            <h3 className="text-3xl font-black font-cinzel text-white uppercase tracking-widest">THE NEW METHOD</h3>
            <p className="text-xl text-zinc-400 font-serif leading-relaxed italic max-w-3xl mx-auto">
                What Vucetic understood: a fingerprint at a crime scene is evidence of contact, not presence.
            </p>
            <p className="text-lg text-zinc-500 font-serif leading-relaxed max-w-3xl mx-auto">
                What AI does: organizes the search space across distributed archives that no single human investigator would search simultaneously. The parish bulletin archives. The court filing timestamps. The document review lists. The footnotes of a 16-page report. The hold letter dates. None of these required unusual access. All of them were findable. None of them were practically findable by conventional methods.
            </p>
            <p className="text-lg font-bold text-white font-serif leading-relaxed max-w-3xl mx-auto">
                This is not the first crime solved with AI. It is the first time AI was used to locate fabricated ecclesiastical documents distributed across parish networks to manufacture a criminal predicate against a journalist. That specificity is itself a fingerprint.
            </p>
        </div>
      </section>
    </div>
  );
}
