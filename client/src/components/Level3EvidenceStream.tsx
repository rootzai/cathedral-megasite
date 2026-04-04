import { motion } from "framer-motion";
import { Terminal, Database, FileText, Activity } from "lucide-react";
import { forensicDataPoints } from "@/lib/data";

interface DataPoint {
  label: string;
  value: string;
  status: string;
}

export function Level3EvidenceStream() {
  const dataPoints: DataPoint[] = (forensicDataPoints as DataPoint[]) || [
    { label: "Target Account", value: "cardinaltobin@gmail.com", status: "UNMASKED" },
    { label: "Subpoena Date", value: "July 18, 2024", status: "VERIFIED" },
    { label: "Latham Archive", value: "24,000 Pages", status: "COMPELLED" },
    { label: "Slush Fund Checks", value: "$600,000", status: "TRACED" },
    { label: "Board Vote", value: "August 27, 2019", status: "SCIF RECORDED" },
    { label: "Settlement Refusal", value: "$108,000", status: "DOCUMENTED" }
  ];

  return (
    <div className="bg-[#050505] border border-gold/10 p-6 rounded-sm font-mono text-[10px] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gold/20 overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="h-full w-1/3 bg-gold shadow-[0_0_10px_gold]"
        />
      </div>
      
      <div className="flex items-center gap-2 mb-4 text-gold/40 border-b border-gold/5 pb-2">
        <Terminal className="w-3 h-3" />
        <span className="uppercase tracking-[0.2em]">Level 3 Forensic Streaming // Data Active</span>
      </div>

      <div className="space-y-3">
        {dataPoints.map((dp: DataPoint, i: number) => (
          <div key={i} className="flex justify-between items-center group">
            <div className="flex items-center gap-2">
              <span className="text-zinc-600">[{i+1}]</span>
              <span className="text-zinc-400 uppercase">{dp.label}:</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-parchment font-bold text-center">{dp.value}</span>
              <span className="px-2 py-0.5 bg-gold/5 border border-gold/20 text-gold text-[8px] rounded-full group-hover:bg-gold group-hover:text-black transition-all">
                {dp.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4 opacity-20">
        <Activity className="w-4 h-4 animate-pulse" />
        <Database className="w-4 h-4" />
        <FileText className="w-4 h-4" />
      </div>
    </div>
  );
}
