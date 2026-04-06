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
    <div className="w-full bg-[#8b1a1a]/10 border-b border-[#8b1a1a]/20 py-4 px-6 md:px-12 flex flex-col xl:flex-row items-center justify-between gap-6 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6 xl:gap-10 md:divide-x divide-[#8b1a1a]/30">
        {EVENTS.map((event) => (
          <div key={event.id} className="flex flex-col sm:flex-row items-center gap-4 md:pl-6 first:pl-0">
             <span className="text-base sm:text-lg xl:text-xl font-black tracking-[0.1em] sm:tracking-[0.2em] text-[#e0e0e0] uppercase whitespace-nowrap">
               {event.label}
             </span>
             <div className="flex items-center gap-3 min-w-[120px]">
               <motion.div 
                 animate={{ opacity: [1, 0.4, 1] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
                 className="w-3 h-3 bg-[#dc2626] rounded-full shadow-[0_0_12px_#dc2626]"
               />
               <span className="text-lg sm:text-xl xl:text-2xl font-mono text-[#dc2626] font-bold">
                 {timeLeft[event.id] || "--:--:--"}
               </span>
             </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 xl:pt-0 border-t xl:border-none border-[#8b1a1a]/20 w-full xl:w-auto justify-center">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 xl:w-7 xl:h-7 text-[#c9a227]" />
          <span className="text-base sm:text-lg xl:text-xl font-black tracking-[0.1em] sm:tracking-[0.2em] text-[#c9a227] uppercase whitespace-nowrap">
            Congressional Subpoena Request: <span className="text-white">PENDING</span>
          </span>
        </div>
      </div>
    </div>
  );
}
