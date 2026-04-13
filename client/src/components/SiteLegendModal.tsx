import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Shield, Users, BookOpen, AlertCircle, FileText, Send, Database } from "lucide-react";

interface SiteLegendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LEGEND_ITEMS = [
  {
    cryptic: "THE VAULT MAP",
    literal: "Interactive Evidence & Documents Library",
    path: "/evidence",
    icon: Shield,
    color: "group-hover:text-[#c41e1e]",
    border: "group-hover:border-[#c41e1e]",
  },
  {
    cryptic: "DRAMATIS PERSONAE",
    literal: "Database of Key Institutional Actors",
    path: "/whos-who",
    icon: Users,
    color: "group-hover:text-[#d4a843]",
    border: "group-hover:border-[#d4a843]",
  },
  {
    cryptic: "THE MANDATE",
    literal: "Mission Statement & The Silence Doctrine",
    path: "/about",
    icon: BookOpen,
    color: "group-hover:text-[#c41e1e]",
    border: "group-hover:border-[#c41e1e]",
  },
  {
    cryptic: "COLLISION TIMELINE",
    literal: "Tracking Core Litigation & The Breach",
    path: "/breach/hub",
    icon: AlertCircle,
    color: "group-hover:text-[#d4a843]",
    border: "group-hover:border-[#d4a843]",
  },
  {
    cryptic: "THE MASTER LEDGER",
    literal: "Financial Forensics & Transaction Evidence",
    path: "/ledger",
    icon: FileText,
    color: "group-hover:text-[#c41e1e]",
    border: "group-hover:border-[#c41e1e]",
  },
  {
    cryptic: "ENCRYPTED DROPS",
    literal: "Secure Whistleblower Tip Line",
    path: "/tips",
    icon: Send,
    color: "group-hover:text-[#d4a843]",
    border: "group-hover:border-[#d4a843]",
  },
  {
    cryptic: "THE INDEX",
    literal: "Global Master Investigative Directory",
    path: "/index",
    icon: Database,
    color: "group-hover:text-white",
    border: "group-hover:border-white",
  }
];

export default function SiteLegendModal({ isOpen, onClose }: SiteLegendModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0c] text-white flex flex-col overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 md:p-8 lg:px-12 border-b border-white/10 bg-[#050505]">
            <div className="flex items-center gap-4">
              <span className="font-cinzel font-black tracking-[0.3em] text-xl md:text-3xl text-zinc-300 uppercase">
                Site Legend
              </span>
              <span className="hidden md:inline-block font-mono text-xs text-[#c41e1e] tracking-[0.2em] border border-[#c41e1e]/30 px-3 py-1 bg-[#c41e1e]/10">
                DECODER KEY
              </span>
            </div>
            <button 
              onClick={onClose}
              className="group flex items-center gap-3 border border-white/20 hover:border-white/50 px-4 py-2 transition-colors bg-white/5 hover:bg-white/10"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">Close</span>
              <X className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Grid Layout */}
          <div className="flex-1 p-6 md:p-8 lg:p-12 lg:px-16 container mx-auto max-w-7xl">
            
            <div className="mb-12 border-l-4 border-[#c41e1e] pl-6 py-2">
              <p className="font-mono text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl uppercase tracking-wider">
                The architecture of this investigation utilizes thematic memory coding. <br className="hidden md:block"/>
                Select a literal pathway below to navigate directly to the compiled intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
              {LEGEND_ITEMS.map((item, idx) => (
                <Link key={idx} href={item.path}>
                  <a 
                    onClick={onClose}
                    className={`group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 border-b md:border border-white/5 hover:bg-white/5 transition-all duration-300 ${item.border}`}
                  >
                    <div className={`p-4 bg-white/5 rounded-full shrink-0 ${item.color} transition-colors duration-300`}>
                      <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span className={`font-cinzel text-xl md:text-2xl font-black tracking-widest ${item.color} transition-colors duration-300`}>
                          {item.cryptic}
                        </span>
                        <div className="hidden md:flex items-center text-zinc-600 gap-2">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="font-mono text-sm uppercase tracking-[0.1em] text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
                        [ {item.literal} ]
                      </div>
                    </div>
                    
                    <div className="hidden md:block shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0 transform">
                       <ArrowRight className={`w-6 h-6 ${item.color}`} />
                    </div>
                  </a>
                </Link>
              ))}
            </div>

          </div>
          
          {/* Footer Graphic */}
          <div className="mt-auto p-8 border-t border-white/5 flex items-center justify-center opacity-30 pointer-events-none">
             <img src="/assets/images/colored-pirate-logo.png" alt="Seal" className="w-24 h-24 filter grayscale" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
