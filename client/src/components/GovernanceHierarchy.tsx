import { motion } from "framer-motion";
import {
  boardOfTrustees,
  boardOfRegents,
  universityCabinet,
  Person,
  Badge
} from "@/lib/data";
import {
  ChevronDown,
  ShieldCheck,
  Users,
  UserCircle,
  Settings,
  Link2
} from "lucide-react";
import { useState } from "react";

interface HierarchyLevelProps {
  level: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  people: Person[];
  isExpanded: boolean;
  onToggle: () => void;
}

const DEFAULT_VISIBLE = 12;

function HierarchyLevel({ level, title, subtitle, icon, people, isExpanded, onToggle }: HierarchyLevelProps) {
  const [showAll, setShowAll] = useState(false);
  const visiblePeople = showAll ? people : people.slice(0, DEFAULT_VISIBLE);
  const hiddenCount = people.length - DEFAULT_VISIBLE;

  return (
    <div className="relative mb-4 group">
      <motion.div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
        aria-expanded={isExpanded}
        className={`relative z-10 p-6 border border-gold/20 flex items-center justify-between cursor-pointer transition-all duration-500 bg-[oklch(0.08_0.02_240)] ${isExpanded ? 'border-gold/60 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'hover:border-gold/40'}`}
      >
        <div className="flex items-center gap-6">
          <div className="font-mono text-xs text-gold/40">LEVEL 0{level}</div>
          <div className="p-3 bg-gold/5 border border-gold/10 rounded-sm text-gold">
            {icon}
          </div>
          <div>
            <h3 className="font-heading text-lg md:text-xl text-gold uppercase tracking-[0.2em]">{title}</h3>
            <p className="font-label text-xs text-muted-foreground/40 uppercase tracking-[0.1em]">{subtitle}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-gold/40"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        className="overflow-hidden bg-background/30 border-x border-gold/10"
      >
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visiblePeople.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx < DEFAULT_VISIBLE ? idx * 0.05 : 0 }}
              className="p-4 bg-muted/5 border border-white/5 hover:border-gold/20 transition-colors group/person"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-heading text-sm text-foreground group-hover/person:text-gold transition-colors">{person.name}</span>
                {person.badges.includes('clergy') && <ShieldCheck className="w-3 h-3 text-gold/40" />}
              </div>
              <p className="text-xs font-mono uppercase text-muted-foreground mb-2">{person.role}</p>
              {person.note && (
                <p className="text-[11px] font-body italic text-muted-foreground leading-tight border-t border-white/5 pt-2 mt-2">
                  {person.note}
                </p>
              )}
            </motion.div>
          ))}
          {hiddenCount > 0 && (
            <div className="col-span-full text-center py-3">
              <button
                onClick={(e) => { e.stopPropagation(); setShowAll(!showAll); }}
                className="text-xs font-mono uppercase tracking-widest text-gold/60 hover:text-gold transition-colors border border-gold/20 hover:border-gold/40 px-4 py-2 cursor-pointer"
              >
                {showAll ? 'COLLAPSE' : `SHOW ALL ${people.length} MEMBERS (+${hiddenCount} MORE)`}
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Connector Line */}
      {level < 5 && (
        <div className="absolute left-[5.25rem] bottom-[-1rem] w-px h-4 bg-gold/20" />
      )}
    </div>
  );
}

export default function GovernanceHierarchy() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1);

  const levels = [
    {
      level: 1,
      title: "Board of Trustees",
      subtitle: "Canonical Oversight",
      icon: <Users className="w-5 h-5" />,
      people: [...boardOfTrustees.leadership, ...boardOfTrustees.exOfficio, ...boardOfTrustees.members]
    },
    {
      level: 2,
      title: "Board of Regents",
      subtitle: "Operational Control",
      icon: <ShieldCheck className="w-5 h-5" />,
      people: [...boardOfRegents.leadership, ...boardOfRegents.exOfficio, ...boardOfRegents.members]
    },
    {
      level: 3,
      title: "Executive Office",
      subtitle: "The Presidency",
      icon: <UserCircle className="w-5 h-5" />,
      people: [universityCabinet[0]] // Msgr. Reilly
    },
    {
      level: 4,
      title: "The Cabinet",
      subtitle: "Administrative Management",
      icon: <Settings className="w-5 h-5" />,
      people: universityCabinet.slice(1)
    },
    {
      level: 5,
      title: "Feeder Nexus",
      subtitle: "ICS / Prep Schools",
      icon: <Link2 className="w-5 h-5" />,
      people: [
        { name: "Msgr. Gerard McCarren", role: "Rector, ICS", tenure: "Active", badges: ["clergy"] as Badge[] },
        { name: "Msgr. Michael E. Kelly", role: "President, Seton Hall Prep", tenure: "Active", badges: ["clergy"] as Badge[] }
      ]
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl text-gold uppercase tracking-[0.25em] mb-4">
          The Vertical Descent
        </h2>
        <p className="font-body text-sm italic text-muted-foreground">
          Mapping the five levels of institutional power and collective silence.
        </p>
      </div>

      <div className="space-y-4">
        {levels.map((lvl) => (
          <HierarchyLevel
            key={lvl.level}
            {...lvl}
            isExpanded={expandedLevel === lvl.level}
            onToggle={() => setExpandedLevel(expandedLevel === lvl.level ? null : lvl.level)}
          />
        ))}
      </div>
    </div>
  );
}
