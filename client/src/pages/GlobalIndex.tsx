import { useState, useMemo } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight, Search, SlidersHorizontal, Database } from "lucide-react";
import { motion } from "framer-motion";
import { getSortedRegistry, UniversalNode, EntityCategory } from "@/lib/UniversalRegistry";

export default function GlobalIndex() {
  const allNodes = useMemo(() => getSortedRegistry(), []);
  
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<EntityCategory | "ALL">("ALL");

  const filteredNodes = useMemo(() => {
    return allNodes.filter(node => {
      const matchSearch = 
        node.name.toLowerCase().includes(search.toLowerCase()) || 
        node.description.toLowerCase().includes(search.toLowerCase()) ||
        node.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      
      const matchCategory = filterCategory === "ALL" || node.category === filterCategory;
      
      return matchSearch && matchCategory;
    });
  }, [allNodes, search, filterCategory]);

  return (
    <div className="min-h-screen bg-[oklch(0.06_0.005_285)] text-foreground">

        <div className="container py-4 flex flex-col md:flex-row items-start md:items-center justify-end gap-4 border-b border-white/5">
            <div className="relative flex-1 md:w-64 max-w-sm ml-auto">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input 
                type="text" 
                placeholder="Search entities, routes, tags..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-sm py-2 pl-9 pr-4 text-sm font-label tracking-wide text-white focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all outline-none"
              />
            </div>
        </div>
        
        {/* Toolbar / Filters */}
        <div className="container py-3 flex items-center gap-4 overflow-x-auto border-t border-white/5">
          <SlidersHorizontal className="w-4 h-4 text-white/40 shrink-0" />
          <div className="flex gap-2">
            {["ALL", "NARRATIVE_ROUTE", "PERSON", "DOCUMENT", "EVENT", "BOARD_OR_FIRM"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat as any)}
                className={`px-3 py-1 text-xs font-label uppercase tracking-widest rounded-sm whitespace-nowrap transition-colors ${
                  filterCategory === cat 
                    ? "bg-gold/20 text-gold border border-gold/40" 
                    : "bg-white/5 text-white/60 border border-transparent hover:bg-white/10"
                }`}
              >
                {cat === "ALL" ? "All Entries" : cat.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

      {/* The Spreadsheet Matrix */}
      <main className="container py-8 overflow-x-auto">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-[120px_1fr_2fr_100px_80px] gap-4 mb-4 px-4 font-label text-xs tracking-[0.2em] uppercase text-white/40 border-b border-white/10 pb-2">
            <div>Category</div>
            <div>Entity / Route</div>
            <div>Description & Tags</div>
            <div className="text-center">Weight</div>
            <div className="text-right">Access</div>
          </div>

          <div className="flex flex-col gap-2">
            {filteredNodes.length > 0 ? (
              filteredNodes.map((node, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  key={node.id}
                  className="grid grid-cols-[120px_1fr_2fr_100px_80px] gap-4 items-center bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 p-4 rounded-sm transition-colors group"
                >
                  <div className="text-[10px] font-label uppercase text-white/50 tracking-widest bg-black/40 px-2 py-1 align-middle inline-block rounded-sm w-fit">
                    {node.category.replace("_", " ")}
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-lg tracking-wide text-white group-hover:text-gold transition-colors">
                      {node.name}
                    </h3>
                    {node.dateStr && (
                      <span className="text-xs text-white/40 font-serif italic block mt-1">{node.dateStr}</span>
                    )}
                  </div>

                  <div>
                    <p className="text-sm text-white/70 font-serif leading-relaxed line-clamp-2">
                      {node.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {node.tags.map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-wider font-label text-gold-dim border border-gold-dim/30 px-1.5 py-0.5 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-xl font-heading text-white">{node.rankings.globalWeight}</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-label">Tier {node.rankings.categoryRank}</div>
                  </div>

                  <div className="text-right flex justify-end">
                    <Link href={node.routeUrl}>
                      <a className="w-10 h-10 flex items-center justify-center bg-gold/10 hover:bg-gold/20 border border-gold/30 rounded-full transition-all text-gold hover:scale-110">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 text-white/40 font-serif italic">
                No forensic entities found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Footer Stats */}
      <footer className="border-t border-white/10 py-6 text-center">
        <p className="font-label text-xs tracking-widest text-white/40 uppercase">
          Total Indexed Nodes: {allNodes.length} | Filtered: {filteredNodes.length}
        </p>
      </footer>
    </div>
  );
}
