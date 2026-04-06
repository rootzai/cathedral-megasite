/*
 * Home Page — "The Cathedral of Complicity"
 * Seton Hall University Clergy Abuse Scandal
 * Gothic Ecclesiastical Noir — SodomHall.com
 *
 * Design: Dark obsidian backgrounds, antique gold accents, parchment text.
 * Structure: Vertical descent through institutional power.
 */

import { useState } from "react";
import ShieldHub from "@/components/ShieldHub";
import GovernanceHierarchy from "@/components/GovernanceHierarchy";
import { BoardSection } from "@/components/BoardSection";
import { JourneyNav } from "@/components/JourneyNav";
import { FilterPanel } from "@/components/FilterPanel";
import { FirmCard } from "@/components/FirmCard";
import { GothicDivider } from "@/components/GothicDivider";
import {
  Badge,
  BADGE_LABELS,
  boardOfRegents,
  boardOfTrustees,
  boardOfVisitors,
  investigativeFirms,
  KEY_DATES,
  njagConnection,
  rcanLawyers,
  shuLawyers,
  victimsAttorneys,
} from "@/lib/data";
import { motion } from "framer-motion";
import { Link } from "wouter";

import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Church,
  Crown,
  Gavel,
  LogOut,
  Scale,
  Shield,
  User
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/CvqcMXDjVdcgGoExeh6MSb/hero-cathedral-gtrH4ddunz7PPhnoSpqctQ.webp";
const LAWYERS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/CvqcMXDjVdcgGoExeh6MSb/lawyers-section-bg-ifkQhGphyaJc4dbtuowvcN.webp";

export default function TheyKnew() {
  const [activeFilter, setActiveFilter] = useState<any>(null);

  const handleFilterChange = (filter: any) => {
    setActiveFilter(filter);
    if (filter) {
      const el = document.getElementById('filter');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Local nav removed in favor of global MegaNavigation sub-nav */}

      {/* ===== HERO ===== */}
      <header className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.005_285/70%)] via-[oklch(0.06_0.005_285/50%)] to-[oklch(0.08_0.005_285)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          <div className="mb-6 flex justify-center">
            <Link href="/">
              <div className="inline-flex items-center gap-2 group cursor-pointer">
                <ArrowLeft className="w-4 h-4 text-gold-dim group-hover:text-gold transition-colors" />
                <span className="font-label text-sm tracking-[0.4em] text-gold-dim group-hover:text-gold uppercase transition-colors">Return to Archway</span>
              </div>
            </Link>
          </div>
          <p className="font-label text-sm md:text-base tracking-[0.4em] text-gold-dim uppercase mb-6">
            SodomHall.com Presents
          </p>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-wider text-gold leading-tight mb-4">
            Seton Hall
          </h1>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-wider text-parchment leading-tight mb-8">
            The Boards & The Lawyers
          </h2>
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_85)] to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-parchment leading-relaxed max-w-4xl mx-auto mb-10">
            The "Big Lie" of Seton Hall is not a single event; it is a multi-generational architecture of institutional silence. 
            This dossier exposes the 303 individuals—from the Canonical Trustees to the Operational Regents—who 
            maintained the "Wall of Immunity" while the Latham Archive was buried in a SCIF.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
            <div className="bg-red-950/20 border-l-4 border-gold p-6 backdrop-blur-sm">
              <h3 className="font-heading text-gold text-lg mb-3">ACT I: THE CANONICAL SHIELD</h3>
              <p className="text-sm text-parchment/70 leading-relaxed font-serif">
                How the Board of Trustees (Layer 1) created a legal black hole, housing 24,000 pages of the 
                Latham Report within an ecclesiastical vault that they claimed was beyond the reach of civil discovery.
              </p>
            </div>
            <div className="bg-red-950/20 border-l-4 border-gold p-6 backdrop-blur-sm">
              <h3 className="font-heading text-gold text-lg mb-3">ACT II: THE OPERATIONAL ATTRITION</h3>
              <p className="text-sm text-parchment/70 leading-relaxed font-serif">
                The role of the Board of Regents (Layer 2) in weaponizing the university's $1.2B government spigot 
                to fund the attrition of survivors and the unmasking of whistleblowers.
              </p>
            </div>
          </div>
          <p className="text-base md:text-lg text-white/80 mt-6 italic bg-background/50 backdrop-blur-sm p-4 inline-block rounded-sm">
            "They didn't just hide the truth; they built a hierarchy to house the lie."
          </p>
        </motion.div>
      </header>

      {/* ===== SHIELD HUB — "The Concentric Descent" ===== */}
      <section className="bg-background relative -mt-20 z-20 pb-20">
        <div className="container">
          <ShieldHub />
        </div>
      </section>

      {/* ===== BADGE LEGEND ===== */}
      <section className="py-10 border-b border-[oklch(0.75_0.12_85/10%)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-label text-sm tracking-[0.25em] text-gold-dim uppercase mb-4 text-center">
              Badge Legend
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { badge: "latham" as const, icon: <BookOpen className="w-3.5 h-3.5" />, label: "Heard Latham Report", style: "badge-latham" },
                { badge: "reilly" as const, icon: <Crown className="w-3.5 h-3.5" />, label: "Voted for Reilly (2024)", style: "badge-reilly" },
                { badge: "tobin" as const, icon: <Church className="w-3.5 h-3.5" />, label: "Received Tobin Letters", style: "badge-tobin" },
                { badge: "christie" as const, icon: <Shield className="w-3.5 h-3.5" />, label: "Christie Network", style: "badge-christie" },
                { badge: "resigned" as const, icon: <LogOut className="w-3.5 h-3.5" />, label: "Resigned", style: "bg-[oklch(0.3_0.01_285)] text-[oklch(0.6_0.02_285)] border border-[oklch(0.4_0.01_285/40%)]" },
                { badge: "clergy" as const, icon: <Church className="w-3.5 h-3.5" />, label: "Clergy", style: "bg-[oklch(0.3_0.08_280/20%)] text-[oklch(0.6_0.1_280)] border border-[oklch(0.4_0.08_280/40%)]" },
                { badge: "nyre" as const, icon: <Gavel className="w-3.5 h-3.5" />, label: "Named in Nyre Case", style: "bg-[oklch(0.35_0.15_45/20%)] text-[oklch(0.7_0.15_45)] border border-[oklch(0.45_0.15_45/40%)]" },
              ].map(({ badge, icon, label, style }) => (
                <button
                  key={badge}
                  onClick={() => handleFilterChange(badge)}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-sm font-label transition-all hover:scale-105 active:scale-95 ${style} ${activeFilter === badge ? 'ring-2 ring-gold shadow-lg shadow-gold/20' : 'opacity-80 hover:opacity-100'}`}
                  title={BADGE_LABELS[badge as Badge]}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FILTER PANEL — "Who Knew What" ===== */}
      <FilterPanel activeFilter={activeFilter} onFilterChange={handleFilterChange} />

      <GothicDivider />

      {/* ===== GOVERNANCE HIERARCHY — "The 5-Level Descent" ===== */}
      <section className="py-20 bg-[oklch(0.06_0.01_285)]">
        <div className="container">
          <GovernanceHierarchy />
        </div>
      </section>

      <GothicDivider />

      {/* ===== KEY DATES TIMELINE — "The Parchment Hall" ===== */}
      <section id="timeline" className="py-16 md:py-24 bg-card border-y border-border shadow-inner relative overflow-hidden">

        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="font-label text-sm tracking-[0.3em] text-gold-dim uppercase mb-3">
              Seton Hall University — The Timeline of Complicity
            </p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wider text-gold mb-4">
              Key Dates
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_85)] to-transparent mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.75_0.12_85/50%)] via-[oklch(0.75_0.12_85/30%)] to-[oklch(0.75_0.12_85/10%)]" />

            {KEY_DATES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative flex items-start mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[oklch(0.75_0.12_85)] -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_oklch(0.75_0.12_85/40%)]" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <span className="font-label text-sm tracking-wider text-gold">{item.date}</span>
                  <p className="text-base leading-relaxed mt-1" style={{ color: "var(--ink-mid)" }}>

                    {item.event}
                    {item.link && (
                      <>
                        {" "}
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold underline hover:text-gold-dim transition-colors"
                        >
                          {item.link.label}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GothicDivider />

      {/* ===== BOARD OF TRUSTEES — "The Apostolic Chamber" ===== */}
      <div id="trustees" className="container-fluid bg-[oklch(0.1_0.02_240)] border-b border-blue-900/30">
        <div className="container">
          <BoardSection board={boardOfTrustees} onFilterChange={handleFilterChange} />
        </div>
      </div>

      <GothicDivider />

      {/* ===== BOARD OF REGENTS — "The Hall of Governance" ===== */}
      <div id="regents" className="container-fluid bg-[oklch(0.08_0.03_15)] border-b border-red-950/30">
        <div className="container">
          <BoardSection board={boardOfRegents} onFilterChange={handleFilterChange} />
        </div>
      </div>

      <GothicDivider />

      {/* ===== BOARD OF VISITORS — "The Secular Cloister" ===== */}
      <div className="container-fluid bg-[oklch(0.12_0.01_285)] border-b border-zinc-300/30">
        <div className="container">
          <BoardSection board={boardOfVisitors} onFilterChange={handleFilterChange} />
        </div>
      </div>

      <GothicDivider />

      {/* ===== THE LAWYERS — "The Chancery of Deceit" ===== */}
      <section id="lawyers" className="relative py-16 md:py-24 bg-[oklch(0.1_0.03_285)]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${LAWYERS_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="container relative z-10">
          {/* SHU Counsel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="font-label text-sm tracking-[0.3em] text-gold-dim uppercase mb-3">
              Seton Hall University — Architects of Deceit
            </p>
            <h2 className="font-heading text-3xl md:text-5xl tracking-wider text-gold mb-4">
              The Lawyers
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_85)] to-transparent mx-auto mb-6" />
            <p className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed">
              The firms and attorneys who defended Seton Hall, conducted investigations, represented the Archdiocese, and now hold the keys to whether justice is served or buried.
            </p>

          </motion.div>

          {/* Seton Hall's Counsel */}
          <div id="lawyers" className="mb-16">
            <h3 className="font-label text-sm tracking-[0.25em] text-gold-dim uppercase mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Seton Hall University — Outside Counsel
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {shuLawyers.map((firm, i) => (
                <FirmCard key={firm.firm} firm={firm} index={i} />
              ))}
            </div>
          </div>

          {/* Investigative Firms */}
          <div className="mb-16">
            <h3 className="font-label text-sm tracking-[0.25em] text-gold-dim uppercase mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              The Investigators — Firms That Conducted Reviews
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {investigativeFirms.map((firm, i) => (
                <FirmCard key={firm.firm} firm={firm} index={i} />
              ))}
            </div>
          </div>

          {/* RCAN Counsel */}
          <div className="mb-16">
            <h3 className="font-label text-sm tracking-[0.25em] text-gold-dim uppercase mb-6 flex items-center gap-2">
              <Church className="w-5 h-5" />
              RCAN (Archdiocese of Newark) — Counsel & Bankruptcy
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {rcanLawyers.map((firm, i) => (
                <FirmCard key={firm.firm} firm={firm} index={i} />
              ))}
            </div>
          </div>

          {/* AG Connection */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-sm border-2 border-[oklch(0.45_0.18_25/40%)] bg-[oklch(0.1_0.005_285)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h3 className="font-heading text-xl md:text-2xl tracking-wider text-parchment">
                  {njagConnection.title}
                </h3>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed mb-8">
                {njagConnection.description}
              </p>
              <div className="space-y-5">
                {njagConnection.people.map((person) => (
                  <div key={person.name} className="border-l-2 border-[oklch(0.45_0.18_25/30%)] pl-5">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span className="font-heading text-base tracking-wide text-parchment">{person.name}</span>
                    </div>
                    <p className="text-sm font-label text-gold-dim ml-6">{person.role}</p>
                    <p className="text-sm text-white/60 leading-relaxed italic ml-6 mt-1">
                      {person.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* For the Survivors */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-sm border border-[oklch(0.75_0.12_85/30%)] bg-[oklch(0.1_0.005_285)]"
            >
              <h3 className="font-heading text-xl md:text-2xl tracking-wider text-gold mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6" />
                {victimsAttorneys.title}
              </h3>
              <div className="space-y-5">
                {victimsAttorneys.people.map((person) => (
                  <div key={person.name} className="border-l-2 border-[oklch(0.75_0.12_85/25%)] pl-5">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gold shrink-0" />
                      <span className="font-heading text-base tracking-wide text-parchment">{person.name}</span>
                    </div>
                    {person.firm && <p className="text-sm font-label text-gold-dim ml-6">{person.firm}</p>}
                    <p className="text-sm font-label text-gold-dim ml-6">{person.role}</p>
                    <p className="text-sm text-white/60 leading-relaxed italic ml-6 mt-1">
                      {person.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 border-t border-[oklch(0.75_0.12_85/10%)]">
        <div className="container text-center">
          <JourneyNav />
          <GothicDivider />
          <p className="font-heading text-base tracking-[0.2em] text-gold-dim mt-6">
            SodomHall.com — Seton Hall University
          </p>
          <p className="text-sm text-white/60 mt-3 max-w-2xl mx-auto leading-relaxed">
            This reference section documents individuals who served on Seton Hall University's governing boards from 2016 to 2026 and the legal teams involved in the clergy abuse scandal. Information is sourced from university announcements, legal filings, tax documents, press releases, and news reporting.
          </p>
          <p className="text-xs text-white/50 mt-4 italic">
            "The truth will set you free, but first it will make you miserable."
          </p>
        </div>
      </footer>
    </div>
  );
}
