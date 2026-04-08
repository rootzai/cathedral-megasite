import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Shield, Search } from "lucide-react";
import { boardOfRegents } from "@/lib/data";
import { Term } from "@/components/Term";
import { SEO } from "@/components/SEO";

export default function Ledger() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get all regents who have the 'reilly' badge or active tenure.
  // The feedback highlights specifically the board members who voted for Reilly.
  const categories = [
    { title: "LEADERSHIP & CHAIRS", members: boardOfRegents.leadership, icon: Shield },
    { title: "BOARD OF REGENTS", members: boardOfRegents.members, icon: Clock },
    { title: "ECCLESIASTICAL OVERSIGHT", members: boardOfRegents.clergy || [], icon: BookOpen },
    { title: "EX-OFFICIO", members: boardOfRegents.exOfficio, icon: Search }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif transition-all duration-500">
      <SEO 
        title="The Ledger" 
        description="A historical record of institutional transactions and accountability metrics."
      />
      
      {/* HEADER */}
      <div className="border-b border-white/5 relative overflow-hidden bg-black py-20 px-6">
        <div className="absolute inset-0 bg-[#8b1a1a]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/">
            <a className="inline-flex items-center gap-2 mb-8 text-[#8b1a1a] hover:text-white uppercase tracking-widest text-xs font-mono transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Architecture
            </a>
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-[#8b1a1a]" />
            <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.5em] font-mono">
              The Definitive Record
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black font-cinzel text-white uppercase tracking-tighter leading-tight mb-4 text-shadow-blood">
            THE LEDGER
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 italic max-w-3xl leading-relaxed mb-8">
            "A record of those who saw the evidence and chose the promotion."
          </p>
          
          <div className="max-w-3xl space-y-4 text-base text-zinc-500 leading-relaxed bg-[#8b1a1a]/5 border-l-4 border-[#8b1a1a] p-8">
            <p>
              This is the forensic index of the <strong className="text-zinc-300">Seton Hall Board of Regents</strong> and University Leadership.
            </p>
            <p className="font-bold text-white">
              The Board of Regents is the governing body that approved Joseph Reilly's installation as Seton Hall president — after reviewing the Latham Report's findings about him.
            </p>
            <p>
              Every individual listed below sat in governance during the concealment of the Latham Report. We have tracked their tenure, their roles, and their direct actions during the 2024 Presidential Investigation.
            </p>
          </div>
        </div>
      </div>

      {/* QUICK NAV & SEARCH */}
      <div className="sticky top-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            <nav className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto font-mono text-[10px] tracking-widest uppercase">
                {categories.map(cat => (
                    <a key={cat.title} href={`#${cat.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-zinc-600 hover:text-white transition-colors whitespace-nowrap">
                        {cat.title}
                    </a>
                ))}
            </nav>
            <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
                <input 
                  type="text" 
                  placeholder="FILTER BY NAME / ACTION..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black border border-white/10 py-2 pl-10 pr-4 text-xs font-mono uppercase tracking-widest focus:border-[#8b1a1a] outline-none transition-all placeholder:text-zinc-800"
                />
            </div>
        </div>
      </div>

      {/* CATEGORIZED CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {categories.map((category, catIdx) => {
          const filtered = category.members.filter(m => 
            m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            m.role.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filtered.length === 0 && searchTerm) return null;

          const Icon = category.icon;

          return (
            <section key={category.title} id={category.title.replace(/\s+/g, '-').toLowerCase()} className="space-y-12 scroll-mt-32">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="flex items-center gap-3 px-6 py-2 bg-zinc-900/50 border border-white/5 rounded-full">
                    <Icon className="w-4 h-4 text-[#8b1a1a]" />
                    <h2 className="text-sm font-black font-cinzel text-white uppercase tracking-[0.3em]">{category.title}</h2>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((regent, i) => {
                  const votedForReilly = regent.badges?.includes("reilly");
                  const heardLatham = regent.badges?.includes("latham");
                  const isResigned = regent.badges?.includes("resigned");

                  return (
                    <motion.div 
                      key={regent.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`p-8 border border-white/5 bg-zinc-950/30 group hover:border-[#8b1a1a]/30 transition-all relative overflow-hidden flex flex-col justify-between min-h-[320px] ${isResigned ? 'opacity-50 grayscale' : ''}`}
                    >
                      {/* Badge Area */}
                      <div className="flex gap-2 mb-6 flex-wrap">
                        {votedForReilly && (
                          <div className="bg-[#8b1a1a]/10 border border-[#8b1a1a]/40 text-[#8b1a1a] text-[8px] font-mono px-2 py-0.5 rounded-sm uppercase tracking-widest font-black">
                             [Voted Reilly]
                          </div>
                        )}
                        {heardLatham && (
                          <div className="bg-blue-900/10 border border-blue-900/40 text-blue-500 text-[8px] font-mono px-2 py-0.5 rounded-sm uppercase tracking-widest font-black">
                             [Heard Latham]
                          </div>
                        )}
                        {isResigned && (
                          <div className="bg-zinc-800 border border-zinc-600 text-zinc-400 text-[8px] font-mono px-2 py-0.5 rounded-sm uppercase tracking-widest font-black">
                             [Resigned]
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-black font-cinzel text-white tracking-widest leading-none group-hover:text-[#8b1a1a] transition-colors">{regent.name}</h3>
                        <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">{regent.role}</p>
                        <hr className="border-white/5 w-12" />
                        <p className="text-zinc-600 font-serif italic text-sm leading-relaxed line-clamp-4">
                          {regent.note || "No public statement on record."}
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-zinc-700 tracking-tighter uppercase">{regent.tenure}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      
      <div className="py-12" />
    </div>
  );
}
