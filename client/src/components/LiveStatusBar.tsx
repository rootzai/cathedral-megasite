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
    <div className="w-full bg-[#0a0a0c] border-b border-[#8b1a1a]/30 py-4 px-4 xl:px-12 flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-10 xl:divide-x divide-[#8b1a1a]/30 w-full justify-center text-center">
        {EVENTS.map((event) => (
          <div key={event.id} className="flex flex-col items-center gap-2 xl:pl-6 first:pl-0">
             <span className="text-sm md:text-base font-black tracking-widest text-[#e0e0e0] uppercase text-center max-w-[280px] xl:max-w-none leading-tight xl:leading-normal xl:whitespace-nowrap">
               {event.label}
             </span>
             <div className="flex items-center justify-center gap-3 w-full">
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

      <div className="flex flex-col xl:flex-row items-center gap-4 pt-4 border-t border-[#8b1a1a]/30 w-full justify-center max-w-4xl opacity-90">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <ShieldCheck className="w-5 h-5 xl:w-6 xl:h-6 text-[#c9a227]" />
          <span className="text-xs sm:text-sm font-black tracking-widest text-[#c9a227] uppercase leading-tight xl:whitespace-nowrap">
            Congressional Subpoena Request: <span className="text-white">PENDING</span>
          </span>
        </div>
      </div>
    </div>
  );
}
