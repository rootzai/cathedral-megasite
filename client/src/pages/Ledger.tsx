import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Shield, Search } from "lucide-react";
import { boardOfRegents } from "@/lib/data";

export default function Ledger() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get all regents who have the 'reilly' badge or active tenure.
  // The feedback highlights specifically the board members who voted for Reilly.
  const allRegents = [
      ...boardOfRegents.leadership,
      ...boardOfRegents.members,
      ...boardOfRegents.exOfficio,
      ...(boardOfRegents.clergy || [])
  ];

  // We deduplicate just in case
  const uniqueRegents = Array.from(new Map(allRegents.map(r => [r.name, r])).values());

  const filteredRegents = uniqueRegents.filter(regent => 
    regent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    regent.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (regent.note && regent.note.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif">
      {/* HEADER */}
      <div className="border-b border-white/5 relative overflow-hidden bg-black py-20">
        <div className="absolute inset-0 bg-[#8b1a1a]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Link href="/">
            <a className="inline-flex items-center gap-2 mb-8 text-[#8b1a1a] hover:text-white uppercase tracking-widest text-xs font-mono transition-colors">
              <ArrowLeft className="w-4 h-4" /> Return to Architecture
            </a>
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-[#8b1a1a]" />
            <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.5em] font-mono">
              The Definitive Record
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-cinzel text-white uppercase tracking-tighter leading-tight mb-4 text-shadow-blood">
            THE LEDGER
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 italic max-w-3xl leading-relaxed mb-4">
            Names. Dates. Votes. Current positions. 
          </p>
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
            This is the unabridged manifest of the officials who received the evidence, sat on the board, and ultimately voted to empower the very administration implicated by their own investigations.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search by name, role, or note..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-sm py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#8b1a1a] font-mono text-sm transition-colors"
            />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {filteredRegents.length} INDIVIDUALS IDENTIFIED
          </p>
        </div>

        <div className="overflow-x-auto bg-black border border-white/5 shadow-2xl">
          <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
            <thead>
              <tr className="border-b border-white/10 text-[#8b1a1a] font-mono uppercase tracking-[0.2em] text-xs bg-[#111116]">
                <th className="px-6 py-5">Name</th>
                <th className="px-6 py-5">Position / Role</th>
                <th className="px-6 py-5">Tenure Status</th>
                <th className="px-6 py-5">Voting Record / Actions</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300 divide-y divide-white/5">
              {filteredRegents.map((regent, i) => {
                const votedForReilly = regent.badges?.includes("reilly");
                const heardLatham = regent.badges?.includes("latham");
                const isResigned = regent.badges?.includes("resigned");

                return (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    key={regent.name} 
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-5 align-top">
                      <span className={`font-black font-cinzel text-lg tracking-wider ${isResigned ? 'text-zinc-600 line-through' : 'text-white'}`}>
                        {regent.name}
                      </span>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                        {regent.role}
                      </span>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${isResigned ? 'bg-zinc-900 border-zinc-700 text-zinc-500' : 'bg-green-950/30 border-green-900/50 text-green-500'} border`}>
                        {regent.tenure}
                      </span>
                    </td>
                    <td className="px-6 py-5 align-top min-w-[250px] max-w-sm">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {votedForReilly && (
                          <span className="bg-[#8b1a1a]/20 border border-[#8b1a1a]/50 text-[#ff4d4d] px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest rounded-sm">
                            Voted for Reilly
                          </span>
                        )}
                        {heardLatham && (
                          <span className="bg-blue-950/20 border border-blue-900/50 text-blue-400 px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest rounded-sm">
                            Heard Latham Report
                          </span>
                        )}
                      </div>
                      {regent.note ? (
                        <p className="text-zinc-400 font-serif italic text-sm leading-relaxed">
                          {regent.note}
                        </p>
                      ) : (
                        <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
                          Record sealed / No public dissent registered
                        </p>
                      )}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Footer Sentence specific to feedback */}
      <div className="bg-[#8b1a1a] py-12 px-6 text-center shadow-[0_0_50px_rgba(139,26,26,0.2)] mt-20 relative overflow-hidden">
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black font-cinzel text-white uppercase tracking-[0.2em] leading-tight mb-2">
               The Church has had two thousand years to build the shield.
            </h2>
            <h2 className="text-2xl md:text-3xl font-black font-cinzel text-white uppercase tracking-[0.2em] leading-tight">
               The counter-infrastructure starts now.
            </h2>
         </div>
      </div>
    </div>
  );
}
