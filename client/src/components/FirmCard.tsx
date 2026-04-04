/*
 * FirmCard — Gothic Ecclesiastical Noir
 * Firm name first, attorney name below — mandatory formatting
 */
import type { LawyerFirm } from "@/lib/data";
import { motion } from "framer-motion";
import { Building2, User } from "lucide-react";

export function FirmCard({ firm, index = 0 }: { firm: LawyerFirm; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.4) }}
      className="relative p-5 rounded-sm gold-border gold-glow bg-cathedral-dark hover:bg-[oklch(0.12_0.005_285)] transition-all duration-300"
    >
      {/* Firm Name */}
      <div className="flex items-center gap-2 mb-1">
        <Building2 className="w-4 h-4 text-gold shrink-0" />
        <h3 className="font-heading text-base tracking-wider text-gold leading-tight">
          {firm.firm}
        </h3>
      </div>
      <p className="font-label text-[11px] text-gold ml-6 mb-4 uppercase tracking-widest">{firm.role}</p>

      {/* Attorneys */}
      <div className="space-y-4 ml-2">
        {firm.attorneys.map((attorney) => (
          <div key={attorney.name} className="border-l-2 border-cathedral-gold/40 pl-4">
            <div className="flex items-center gap-2">
              <User className="w-3 h-3 text-gold shrink-0" />
              <span className="font-heading text-base tracking-wide text-white font-bold">{attorney.name}</span>
            </div>
            <p className="text-[11px] font-label text-gold/80 ml-5 uppercase tracking-wider">{attorney.title}</p>
            {attorney.note && (
              <p className="text-xs text-zinc-100 leading-relaxed italic ml-5 mt-1">
                {attorney.note}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Firm Description */}
      <p className="text-sm text-zinc-200 leading-relaxed mt-4 pt-3 border-t border-cathedral-gold/20">
        {firm.description}
      </p>
    </motion.div>
  );
}
