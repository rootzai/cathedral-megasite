/*
 * PersonCard — Gothic Ecclesiastical Noir
 * Gold-leaf bordered cards with badge indicators
 */
import { type Badge, BADGE_LABELS, type Person } from "@/lib/data";
import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, Church, Crown, Gavel, LogOut, Shield } from "lucide-react";

const badgeIcons: Record<Badge, React.ReactNode> = {
  latham: <BookOpen className="w-3 h-3" />,
  reilly: <Crown className="w-3 h-3" />,
  tobin: <Church className="w-3 h-3" />,
  christie: <Shield className="w-3 h-3" />,
  resigned: <LogOut className="w-3 h-3" />,
  clergy: <Church className="w-3 h-3" />,
  emeritus: <AlertTriangle className="w-3 h-3" />,
  nyre: <Gavel className="w-3 h-3" />,
};

const badgeStyles: Record<Badge, string> = {
  latham: "badge-latham",
  reilly: "badge-reilly",
  tobin: "badge-tobin",
  christie: "badge-christie",
  resigned: "bg-[oklch(0.3_0.01_285)] text-[oklch(0.6_0.02_285)] border border-[oklch(0.4_0.01_285/40%)]",
  clergy: "bg-[oklch(0.3_0.08_280/20%)] text-[oklch(0.6_0.1_280)] border border-[oklch(0.4_0.08_280/40%)]",
  emeritus: "bg-[oklch(0.3_0.05_60/20%)] text-[oklch(0.6_0.06_60)] border border-[oklch(0.4_0.05_60/40%)]",
  nyre: "badge-nyre",
};

export function PersonCard({ person, index = 0 }: { person: Person; index?: number }) {
  const hasNote = !!person.note;
  const isFlagged = person.badges.includes("latham") || person.badges.includes("reilly");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
      className={`
        relative p-4 rounded-sm transition-all duration-300
        ${isFlagged ? "gold-border-bright gold-glow" : "gold-border"}
        bg-cathedral-dark hover:bg-[oklch(0.13_0.005_285)]
      `}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1">
          <h4 className={`font-heading text-sm tracking-wider leading-tight ${isFlagged ? "text-gold" : "text-parchment"}`}>
            {person.name}
          </h4>
          <p className="font-label text-sm text-gold-dim mt-0.5">{person.role}</p>
        </div>
        <span className="text-[10px] font-label text-muted-foreground whitespace-nowrap mt-0.5">
          {person.tenure}
        </span>
      </div>

      {person.badges.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-2">
          {person.badges.map((badge) => (
            <span
              key={badge}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-label ${badgeStyles[badge]}`}
              title={BADGE_LABELS[badge]}
            >
              {badgeIcons[badge]}
              {badge === "latham" ? "Latham" : badge === "reilly" ? "Voted Reilly" : badge === "tobin" ? "Tobin Letters" : badge === "christie" ? "Christie" : badge === "resigned" ? "Resigned" : badge === "clergy" ? "Clergy" : badge === "emeritus" ? "Emeritus" : "Nyre Case"}
            </span>
          ))}
        </div>
      )}

      {hasNote && (
        <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-cathedral-gold/20 pl-3 mt-2">
          {person.note}
        </p>
      )}
    </motion.div>
  );
}
