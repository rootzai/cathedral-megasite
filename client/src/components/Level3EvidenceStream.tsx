import { motion } from "framer-motion";
import { Terminal, Database, FileText, Activity } from "lucide-react";
import { forensicDataPoints } from "@/lib/data";

interface DataPoint {
  label: string;
  value: string;
  metric: string;
  status?: string;
}

export function Level3EvidenceStream() {
  const data: any[] = forensicDataPoints;
  const dataPoints: DataPoint[] = data.map(d => ({
    label: d.label,
    value: d.value,
    metric: d.metric,
    status: d.metric.includes("Served") ? "VERIFIED" : 
            d.metric.includes("Slush") ? "TRACED" : "RECORDED"
  }));

  return (
    <div className="bg-[#050505] border border-gold/10 p-6 rounded-sm font-mono text-xs overflow-hidden relative">
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
              <span className="text-foreground font-bold text-center">{dp.value}</span>
              <span className="px-2 py-0.5 bg-gold/5 border border-gold/20 text-gold text-xs rounded-full group-hover:bg-gold group-hover:text-black transition-all">
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
