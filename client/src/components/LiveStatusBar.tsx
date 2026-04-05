import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, AlertTriangle, ShieldCheck } from "lucide-react";

const EVENTS = [
  { id: "latham", label: "LATHAM REPORT PRODUCTION", date: "2026-05-18T09:00:00" },
  { id: "cali", label: "CALIFORNIA HEARING (DEPT C23)", date: "2026-05-28T10:00:00" },
];

export default function LiveStatusBar() {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const newTimeLeft: { [key: string]: string } = {};

      EVENTS.forEach(event => {
        const target = new Date(event.date).getTime();
        const diff = target - now;

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          newTimeLeft[event.id] = `${days}d ${hours}h ${mins}m`;
        } else {
          newTimeLeft[event.id] = "LIVE";
        }
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#8b1a1a]/10 border-b border-[#8b1a1a]/20 py-1.5 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden">
      <div className="flex items-center gap-6 divide-x divide-[#8b1a1a]/30">
        {EVENTS.map((event) => (
          <div key={event.id} className="flex items-center gap-3 pl-6 first:pl-0">
             <span className="text-[9px] font-black tracking-[0.2em] text-[#c8bdb0]/60 uppercase whitespace-nowrap">
               {event.label}
             </span>
             <div className="flex items-center gap-1.5 min-w-[80px]">
               <motion.div 
                 animate={{ opacity: [1, 0.4, 1] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
                 className="w-1 h-1 bg-[#8b1a1a] rounded-full shadow-[0_0_5px_#8b1a1a]"
               />
               <span className="text-[10px] font-mono text-[#8b1a1a] font-bold">
                 {timeLeft[event.id] || "--:--:--"}
               </span>
             </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3 h-3 text-gold-500/50" />
          <span className="text-[9px] font-black tracking-[0.2em] text-gold-600/80 uppercase whitespace-nowrap">
            Congressional Subpoena Request: <span className="text-white/80">PENDING</span>
          </span>
        </div>
      </div>
    </div>
  );
}
