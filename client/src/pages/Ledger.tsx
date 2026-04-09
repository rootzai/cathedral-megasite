import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Shield, Search, Scale, Users, Building2, Gavel } from "lucide-react";
import { boardOfRegents, boardOfTrustees, boardOfVisitors, shuLawyers, investigativeFirms, rcanLawyers, type Person, type BoardSection, type LawyerFirm } from "@/lib/data";
import { FirmCard } from "@/components/FirmCard";
import { SEO } from "@/components/SEO";

type BoardTab = "regents" | "trustees" | "visitors" | "legal";

const BOARD_TABS: { id: BoardTab; label: string; icon: React.ElementType; count: number }[] = [
  { id: "regents", label: "Board of Regents", icon: Shield, count: 0 },
  { id: "trustees", label: "Board of Trustees", icon: Users, count: 0 },
  { id: "visitors", label: "Board of Visitors", icon: Scale, count: 0 },
  { id: "legal", label: "Legal Network", icon: Gavel, count: 0 },
];

function getAllMembers(board: BoardSection): Person[] {
  return [...board.leadership, ...board.exOfficio, ...board.members, ...(board.clergy || [])];
}

function PersonCard({ person, index }: { person: Person; index: number }) {
  const votedForReilly = person.badges?.includes("reilly");
  const heardLatham = person.badges?.includes("latham");
  const isResigned = person.badges?.includes("resigned");

  return (
    <motion.div
      key={person.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.03, 0.3) }}
      className={`p-8 border border-white/5 bg-zinc-950/30 group hover:border-[#8b1a1a]/30 transition-all relative overflow-hidden flex flex-col justify-between min-h-[280px] ${isResigned ? 'opacity-50 grayscale' : ''}`}
    >
      <div className="flex gap-2 mb-6 flex-wrap">
        {votedForReilly && (
          <div className="bg-[#8b1a1a]/10 border border-[#8b1a1a]/40 text-[#8b1a1a] text-xs font-mono px-2 py-0.5 rounded-sm uppercase tracking-widest font-black">
            [Voted Reilly]
          </div>
        )}
        {heardLatham && (
          <div className="bg-blue-900/10 border border-blue-900/40 text-blue-500 text-xs font-mono px-2 py-0.5 rounded-sm uppercase tracking-widest font-black">
            [Heard Latham]
          </div>
        )}
        {isResigned && (
          <div className="bg-zinc-800 border border-zinc-600 text-zinc-400 text-xs font-mono px-2 py-0.5 rounded-sm uppercase tracking-widest font-black">
            [Resigned]
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-black font-cinzel text-white tracking-widest leading-none group-hover:text-[#8b1a1a] transition-colors">{person.name}</h3>
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest leading-loose">{person.role}</p>
        <hr className="border-white/5 w-12" />
        <p className="text-zinc-600 font-serif italic text-sm leading-relaxed line-clamp-4">
          {person.note || "No public statement on record."}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-mono text-zinc-700 tracking-tighter uppercase">{person.tenure}</span>
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
      </div>
    </motion.div>
  );
}

export default function Ledger() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<BoardTab>("regents");

  const regentsAll = getAllMembers(boardOfRegents);
  const trusteesAll = getAllMembers(boardOfTrustees);
  const visitorsAll = getAllMembers(boardOfVisitors);
  const allFirms: LawyerFirm[] = [...shuLawyers, ...investigativeFirms, ...rcanLawyers];

  BOARD_TABS[0].count = regentsAll.length;
  BOARD_TABS[1].count = trusteesAll.length;
  BOARD_TABS[2].count = visitorsAll.length;
  BOARD_TABS[3].count = allFirms.reduce((sum, f) => sum + f.attorneys.length, 0);

  const filterPeople = (people: Person[]) =>
    searchTerm
      ? people.filter(m =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (m.note || "").toLowerCase().includes(searchTerm.toLowerCase())
      )
      : people;

  const filterFirms = (firms: LawyerFirm[]) =>
    searchTerm
      ? firms.filter(f =>
        f.firm.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.attorneys.some(a => a.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        f.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : firms;

  const boardDescriptions: Record<string, { title: string; description: string }> = {
    regents: {
      title: boardOfRegents.title,
      description: boardOfRegents.description,
    },
    trustees: {
      title: boardOfTrustees.title,
      description: boardOfTrustees.description,
    },
    visitors: {
      title: boardOfVisitors.title,
      description: boardOfVisitors.description,
    },
    legal: {
      title: "The Legal Network",
      description: "Every law firm and attorney involved in the defense, investigation, and suppression of evidence in the Seton Hall clergy abuse litigation.",
    },
  };

  const currentBoard = boardDescriptions[activeTab];
  let currentPeople: Person[] = [];
  if (activeTab === "regents") currentPeople = filterPeople(regentsAll);
  else if (activeTab === "trustees") currentPeople = filterPeople(trusteesAll);
  else if (activeTab === "visitors") currentPeople = filterPeople(visitorsAll);

  const currentFirms = activeTab === "legal" ? filterFirms(allFirms) : [];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif transition-all duration-500">
      <SEO
        title="The Ledger"
        description="The definitive record of every board member, lawyer, and institutional actor in the Seton Hall cover-up."
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
              This is the forensic index of <strong className="text-zinc-300">every governing board, lawyer, and institutional actor</strong> involved in the Seton Hall cover-up.
            </p>
            <p className="font-bold text-white">
              Three boards. Five law firms. One system of institutional silence.
            </p>
            <p>
              Every individual listed below sat in governance or legal counsel during the concealment of the Latham Report. We have tracked their tenure, their roles, and their direct actions.
            </p>
          </div>
        </div>
      </div>

      {/* BOARD TABS & SEARCH */}
      <div className="sticky top-0 z-50 bg-[#0a0a0c]/95 backdrop-blur-md border-b border-white/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between py-4">
            <nav className="flex gap-1 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto" role="tablist">
              {BOARD_TABS.map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-all border-b-2 cursor-pointer ${isActive
                        ? 'border-[#8b1a1a] text-white bg-[#8b1a1a]/10 font-black'
                        : 'border-transparent text-zinc-600 hover:text-zinc-300 hover:border-zinc-700'
                      }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${isActive ? 'bg-[#8b1a1a] text-white' : 'bg-zinc-900 text-zinc-500'}`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </nav>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
              <input
                type="text"
                placeholder="FILTER BY NAME / ROLE..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black border border-white/10 py-2 pl-10 pr-4 text-xs font-mono uppercase tracking-widest focus:border-[#8b1a1a] outline-none transition-all placeholder:text-zinc-800"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOARD DESCRIPTION */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <h2 className="text-sm font-black font-cinzel text-white uppercase tracking-[0.3em] whitespace-nowrap">{currentBoard.title}</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-4xl mx-auto text-center italic">
          {currentBoard.description}
        </p>
      </div>

      {/* PEOPLE GRID */}
      {activeTab !== "legal" && (
        <div className="max-w-6xl mx-auto px-6 pb-20">
          {currentPeople.length === 0 && searchTerm ? (
            <p className="text-zinc-600 text-center py-12 font-mono text-sm uppercase">No matches for "{searchTerm}"</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPeople.map((person, i) => (
                <PersonCard key={person.name} person={person} index={i} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* LEGAL NETWORK */}
      {activeTab === "legal" && (
        <div className="max-w-6xl mx-auto px-6 pb-20">
          {currentFirms.length === 0 && searchTerm ? (
            <p className="text-zinc-600 text-center py-12 font-mono text-sm uppercase">No matches for "{searchTerm}"</p>
          ) : (
            <div className="space-y-16">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-[#8b1a1a] mb-6 font-black">University Defense Counsel</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filterFirms(shuLawyers).map((firm, i) => (
                    <FirmCard key={firm.firm} firm={firm} index={i} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-[#8b1a1a] mb-6 font-black">Investigative Firms</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filterFirms(investigativeFirms).map((firm, i) => (
                    <FirmCard key={firm.firm} firm={firm} index={i} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-[#8b1a1a] mb-6 font-black">Archdiocese of Newark (RCAN) Counsel</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filterFirms(rcanLawyers).map((firm, i) => (
                    <FirmCard key={firm.firm} firm={firm} index={i} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="py-12" />
    </div>
  );
}
