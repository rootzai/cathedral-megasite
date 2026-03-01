/*
 * FilterPanel — Gothic Ecclesiastical Noir
 * Allows filtering board members by key events:
 *   - Who was on the board in 2019 (heard the Latham Report)
 *   - Who voted for Reilly in 2024
 *   - Who received Cardinal Tobin's letters
 *   - Christie Network members
 */
import { type Badge, getAllBoardMembers, getUniqueMembers } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Church, Crown, Filter, Gavel, Shield, User, X } from "lucide-react";
import { useState, useMemo } from "react";

type FilterType = "latham" | "reilly" | "tobin" | "christie" | "nyre" | null;

const FILTERS: { key: FilterType; label: string; icon: React.ReactNode; description: string }[] = [
  { key: "latham", label: "On Board in 2019", icon: <BookOpen className="w-4 h-4" />, description: "Members who were on the board when the Latham Report was presented on August 27, 2019" },
  { key: "reilly", label: "Voted for Reilly", icon: <Crown className="w-4 h-4" />, description: "Members who voted to elect Msgr. Reilly as Seton Hall president in 2024" },
  { key: "tobin", label: "Tobin Letters", icon: <Church className="w-4 h-4" />, description: "Members who received Cardinal Tobin's letters regarding the scandal" },
  { key: "christie", label: "Christie Network", icon: <Shield className="w-4 h-4" />, description: "Members connected to the Christie political network" },
  { key: "nyre", label: "Named in Nyre Case", icon: <Gavel className="w-4 h-4" />, description: "Individuals named as defendants in Nyre v. Seton Hall University (Lucciola, D'Alessandro, et al.) — filed February 2024" },
];

const filterStyles: Record<string, string> = {
  latham: "badge-latham",
  reilly: "badge-reilly",
  tobin: "badge-tobin",
  christie: "badge-christie",
  nyre: "bg-[oklch(0.35_0.15_45/20%)] text-[oklch(0.7_0.15_45)] border border-[oklch(0.45_0.15_45/40%)]",
};

export function FilterPanel() {
  const [activeFilter, setActiveFilter] = useState<FilterType>(null);

  const allMembers = useMemo(() => getAllBoardMembers(), []);
  const uniqueMembers = useMemo(() => getUniqueMembers(allMembers), [allMembers]);

  const filteredMembers = useMemo(() => {
    if (!activeFilter) return [];
    return uniqueMembers
      .filter(m => m.badges.includes(activeFilter as Badge))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [uniqueMembers, activeFilter]);

  const activeFilterInfo = FILTERS.find(f => f.key === activeFilter);

  return (
    <section id="filter" className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-label text-sm tracking-[0.3em] text-gold-dim uppercase mb-3">
            <Filter className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            Cross-Board Analysis
          </p>
          <h2 className="font-heading text-3xl md:text-5xl tracking-wider text-gold mb-4">
            Who Knew What
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_85)] to-transparent mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Filter across all three Seton Hall boards to see who was present for key decisions and events.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(activeFilter === f.key ? null : f.key)}
              className={`
                inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-label text-sm tracking-wider
                transition-all duration-300 border
                ${activeFilter === f.key
                  ? `${filterStyles[f.key!]} ring-2 ring-gold/30 scale-105`
                  : "bg-[oklch(0.12_0.005_285)] text-muted-foreground border-[oklch(0.25_0.02_85/30%)] hover:text-gold hover:border-[oklch(0.75_0.12_85/40%)]"
                }
              `}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm font-label text-sm tracking-wider bg-[oklch(0.15_0.005_285)] text-muted-foreground border border-[oklch(0.3_0.01_285/40%)] hover:text-parchment transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear
            </button>
          )}
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {activeFilter && activeFilterInfo && (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              {/* Description */}
              <div className="text-center mb-8">
                <p className="text-base text-parchment italic">{activeFilterInfo.description}</p>
                <p className="font-label text-sm text-gold mt-2">
                  {filteredMembers.length} member{filteredMembers.length !== 1 ? "s" : ""} across all boards
                </p>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredMembers.map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.5) }}
                    className="p-4 rounded-sm gold-border bg-[oklch(0.1_0.005_285)] hover:bg-[oklch(0.13_0.005_285)] transition-colors"
                  >
                    <div className="flex items-start gap-2 mb-1.5">
                      <User className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-heading text-sm tracking-wider text-gold leading-tight">
                          {person.name}
                        </h4>
                        <p className="font-label text-xs text-gold-dim mt-0.5">{person.role}</p>
                      </div>
                    </div>

                    {/* Boards this person sits on */}
                    <div className="flex flex-wrap gap-1.5 ml-5 mb-2">
                      {person.boards.map(b => (
                        <span key={b} className="text-[10px] font-label px-2 py-0.5 rounded-sm bg-[oklch(0.15_0.005_285)] text-muted-foreground border border-[oklch(0.25_0.02_85/20%)]">
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1 ml-5 mb-2">
                      {person.badges.map(badge => {
                        const style = badge === "latham" ? "badge-latham" :
                          badge === "reilly" ? "badge-reilly" :
                          badge === "tobin" ? "badge-tobin" :
                          badge === "christie" ? "badge-christie" :
                          badge === "resigned" ? "bg-[oklch(0.3_0.01_285)] text-[oklch(0.6_0.02_285)] border border-[oklch(0.4_0.01_285/40%)]" :
                          badge === "clergy" ? "bg-[oklch(0.3_0.08_280/20%)] text-[oklch(0.6_0.1_280)] border border-[oklch(0.4_0.08_280/40%)]" :
                          badge === "nyre" ? "bg-[oklch(0.35_0.15_45/20%)] text-[oklch(0.7_0.15_45)] border border-[oklch(0.45_0.15_45/40%)]" :
                          "bg-[oklch(0.3_0.05_60/20%)] text-[oklch(0.6_0.06_60)] border border-[oklch(0.4_0.05_60/40%)]";
                        return (
                          <span key={badge} className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[9px] font-label ${style}`}>
                            {badge === "latham" ? "Latham" : badge === "reilly" ? "Voted Reilly" : badge === "tobin" ? "Tobin" : badge === "christie" ? "Christie" : badge === "resigned" ? "Resigned" : badge === "clergy" ? "Clergy" : badge === "nyre" ? "Nyre Case" : "Emeritus"}
                          </span>
                        );
                      })}
                    </div>

                    {person.note && (
                      <p className="text-xs text-muted-foreground leading-relaxed italic border-l-2 border-[oklch(0.75_0.12_85/20%)] pl-3 ml-3 mt-2">
                        {person.note}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {!activeFilter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground italic text-base">
              Select a filter above to see which board members were involved in key events.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
