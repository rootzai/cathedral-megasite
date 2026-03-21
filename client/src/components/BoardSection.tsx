/*
 * BoardSection — Gothic Ecclesiastical Noir
 * Each board rendered as a section in the cathedral descent
 */
import type { BoardSection as BoardSectionType } from "@/lib/data";
import { motion } from "framer-motion";
import { PersonCard } from "./PersonCard";

export function BoardSection({ board, onFilterChange }: {
  board: BoardSectionType;
  onFilterChange?: (filter: any) => void;
}) {
  return (
    <section id={board.id} className="relative py-16 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="font-label text-xs tracking-[0.3em] text-gold-dim uppercase mb-2">
          {board.subtitle}
        </p>
        <h2 className="font-heading text-3xl md:text-4xl tracking-wider text-gold mb-4">
          {board.title}
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-cathedral-gold to-transparent mx-auto mb-6" />
        <p className="max-w-3xl mx-auto text-base text-white/70 leading-relaxed">
          {board.description}
        </p>
      </motion.div>

      {/* Leadership */}
      {board.leadership.length > 0 && (
        <div className="mb-10">
          <h3 className="font-label text-xs tracking-[0.25em] text-gold-dim uppercase mb-4 px-1">
            Leadership & Executive Committee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {board.leadership.map((person, i) => (
              <PersonCard key={person.name} person={person} index={i} onBadgeClick={onFilterChange} />
            ))}
          </div>
        </div>
      )}

      {/* Ex-Officio */}
      {board.exOfficio.length > 0 && (
        <div className="mb-10">
          <h3 className="font-label text-xs tracking-[0.25em] text-gold-dim uppercase mb-4 px-1">
            Ex-Officio Members (Presidents & Archbishops)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {board.exOfficio.map((person, i) => (
              <PersonCard key={person.name} person={person} index={i} onBadgeClick={onFilterChange} />
            ))}
          </div>
        </div>
      )}

      {/* Members */}
      {board.members.length > 0 && (
        <div className="mb-10">
          <h3 className="font-label text-xs tracking-[0.25em] text-gold-dim uppercase mb-4 px-1">
            {board.id === "visitors" ? "Notable Members (2016–2026)" : "Appointed Members"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {board.members.map((person, i) => (
              <PersonCard key={person.name} person={person} index={i} onBadgeClick={onFilterChange} />
            ))}
          </div>
        </div>
      )}

      {/* Clergy */}
      {board.clergy && board.clergy.length > 0 && (
        <div>
          <h3 className="font-label text-xs tracking-[0.25em] text-gold-dim uppercase mb-4 px-1">
            Clergy Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {board.clergy.map((person, i) => (
              <PersonCard key={person.name} person={person} index={i} onBadgeClick={onFilterChange} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
