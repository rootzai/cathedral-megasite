import React from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Shield, FileText, AlertCircle, BookOpen, Database, Send, Key, Fingerprint, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "THE SHIELD", icon: Shield, href: "/" },
  { label: "THE METHOD", icon: Fingerprint, href: "/method" },
  { label: "THE EVIDENCE", icon: FileText, href: "/evidence" },
  { label: "THE BREACH", icon: AlertCircle, href: "/breach" },
  { label: "THE LEDGER", icon: BookOpen, href: "/ledger" },
  { label: "PERRY REPORT", icon: Landmark, href: "/easter" },
];

export default function PrimaryNavigation() {
  const [location] = useLocation();

  return (
    <nav className="relative z-50 w-full bg-[#0a0a0c] border-b border-white/5 py-4 px-4 xl:px-12 flex items-center justify-between gap-4">
      {/* Brand */}
      <Link href="/">
        <a className="flex items-center gap-3 group">
          <img 
            src="/assets/images/colored-pirate-logo.png" 
            alt="Sodom Hall Pirate Logo" 
            className="w-12 h-auto transition-all duration-300 group-hover:scale-110 object-contain drop-shadow-[0_0_10px_rgba(139,26,26,0.3)]" 
          />
          <span className="text-[#c8bdb0] font-cinzel font-black tracking-[0.2em] text-base md:text-lg hidden xl:block whitespace-nowrap">
            SODOM HALL
          </span>
        </a>
      </Link>

      {/* Nav Items */}
      <div className="hidden lg:flex items-center gap-3 xl:gap-6 flex-wrap justify-center">
        {NAV_ITEMS.map((item) => {
          const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}>
              <a className={cn(
                "group relative flex items-center gap-2 py-2 text-[10px] xl:text-xs font-black tracking-[0.15em] transition-all duration-300 whitespace-nowrap",
                isActive ? "text-[#8b1a1a]" : "text-[#c8bdb0]/60 hover:text-[#c8bdb0]"
              )}>
                <item.icon className={cn("w-4 h-4 lg:w-5 lg:h-5 translate-y-[-1px]", isActive ? "text-[#8b1a1a]" : "text-zinc-600 group-hover:text-zinc-400")} />
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-3 left-0 w-full h-[2px] bg-[#8b1a1a]"
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
        <a className="hidden md:flex relative group overflow-hidden bg-[#8b1a1a] hover:bg-[#a11e1e] text-white px-4 py-2.5 xl:px-6 xl:py-3 rounded-sm items-center gap-2 xl:gap-3 transition-all duration-500 shadow-[0_0_20px_rgba(139,26,26,0.2)] whitespace-nowrap shrink-0">
            <Send className="w-4 h-4 xl:w-5 xl:h-5" />
            <span className="text-[10px] xl:text-xs font-black tracking-[0.2em] uppercase">Whistleblower Tip Line</span>
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute right-3 w-2 h-2 bg-white rounded-full"
            />
          </a>
      </Link>
    </nav>
  );
}
