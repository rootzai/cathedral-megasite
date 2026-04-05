import React from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Shield, FileText, AlertCircle, BookOpen, Database, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "THE SHIELD", icon: Shield, href: "/" },
  { label: "THE EVIDENCE", icon: FileText, href: "/evidence" },
  { label: "THE BREACH", icon: AlertCircle, href: "/breach" },
  { label: "THE LEDGER", icon: BookOpen, href: "/ledger" },
  { label: "THE VAULT", icon: Database, href: "/vault" },
];

export default function PrimaryNavigation() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0a0c]/95 backdrop-blur-md border-b border-white/5 py-3 px-6 md:px-12 flex items-center justify-between">
      {/* Brand */}
      <Link href="/">
        <a className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#8b1a1a] rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-black text-xs">SH</span>
          </div>
          <span className="text-[#c8bdb0] font-cinzel font-black tracking-[0.2em] text-sm md:text-base hidden sm:block">
            SODOM HALL
          </span>
        </a>
      </Link>

      {/* Nav Items */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => {
          const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}>
              <a className={cn(
                "group relative flex items-center gap-2 py-2 text-[10px] font-black tracking-[0.2em] transition-all duration-300",
                isActive ? "text-[#8b1a1a]" : "text-[#c8bdb0]/60 hover:text-[#c8bdb0]"
              )}>
                <item.icon className={cn("w-3 h-3 translate-y-[-1px]", isActive ? "text-[#8b1a1a]" : "text-zinc-600 group-hover:text-zinc-400")} />
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-3 left-0 w-full h-[1px] bg-[#8b1a1a]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </Link>
          );
        })}
      </div>

      {/* Submit Tip Button */}
      <Link href="/tips">
        <a className="relative group overflow-hidden bg-[#8b1a1a] hover:bg-[#a11e1e] text-white px-5 py-2.5 rounded-sm flex items-center gap-2.5 transition-all duration-500 shadow-[0_0_20px_rgba(139,26,26,0.2)]">
          <Send className="w-3.5 h-3.5" />
          <span className="text-[10px] font-black tracking-[0.3em] uppercase">Submit a Tip</span>
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute right-3 w-1.5 h-1.5 bg-white rounded-full"
          />
        </a>
      </Link>
    </nav>
  );
}
