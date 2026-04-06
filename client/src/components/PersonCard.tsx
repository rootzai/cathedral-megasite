/*
 * PersonCard — Gothic Ecclesiastical Noir
 * Gold-leaf bordered cards with badge indicators
 */
import { type Badge, BADGE_LABELS, type Person } from "@/lib/data";
import { motion } from "framer-motion";
import { AlertCircle, AlertTriangle, BookOpen, Church, Crown, Gavel, Lock, LogOut, Shield } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const badgeIcons: Record<Badge, React.ReactNode> = {
  latham: <BookOpen className="w-3 h-3" />,
  reilly: <Crown className="w-3 h-3" />,
  tobin: <Church className="w-3 h-3" />,
  christie: <Shield className="w-3 h-3" />,
  resigned: <LogOut className="w-3 h-3" />,
  clergy: <Church className="w-3 h-3" />,
  emeritus: <AlertTriangle className="w-3 h-3" />,
  nyre: <Gavel className="w-3 h-3" />,
  epstein: <Lock className="w-3 h-3" />,
  sanctioned: <AlertCircle className="w-3 h-3" />,
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
  epstein: "bg-purple-950/30 text-purple-400 border border-purple-800/40",
  sanctioned: "bg-red-950/20 text-red-100 border border-red-800/50 font-bold animate-pulse",
};

export function PersonCard({ person, index = 0, onBadgeClick }: {
  person: Person;
  index?: number;
  onBadgeClick?: (badge: Badge) => void;
}) {
  const hasNote = !!person.note;
  const isFlagged = person.badges.includes("latham") || person.badges.includes("reilly");

  return (
    <motion.div
      id={person.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}
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
          <h4 className={`font-heading text-sm tracking-wider leading-tight ${isFlagged ? "text-gold" : "text-white font-bold"}`}>
            {person.name}
          </h4>
          <p className="font-label text-xs text-gold mt-0.5">{person.role}</p>
        </div>
        <span className="text-xs font-label text-zinc-300 whitespace-nowrap mt-0.5">
          {person.tenure}
        </span>
      </div>

      {person.badges.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-2">
          {person.badges.map((badge) => (
            <Tooltip key={badge}>
              <TooltipTrigger asChild>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBadgeClick?.(badge);
                  }}
                  className={cn(
                    "inline-flex items-center gap-1 px-2 py-0.5 rounded-sm text-xs font-label transition-transform hover:scale-110 active:scale-95",
                    badgeStyles[badge]
                  )}
                >
                  {badgeIcons[badge]}
                  {badge === "latham" ? "Latham" :
                    badge === "reilly" ? "Voted Reilly" :
                      badge === "tobin" ? "Tobin Letters" :
                        badge === "christie" ? "Christie" :
                          badge === "resigned" ? "Resigned" :
                            badge === "clergy" ? "Clergy" :
                              badge === "emeritus" ? "Emeritus" :
                                badge === "epstein" ? "Epstein Connection" :
                                  badge === "sanctioned" ? "SANCTIONED" :
                                    "Nyre Case"}
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-white border border-red-900 text-sm font-mono uppercase tracking-widest px-3 py-1.5 z-[100]">
                {BADGE_LABELS[badge]}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      )}

      {hasNote && (
        <p className="text-sm text-zinc-200 leading-relaxed italic border-l-2 border-cathedral-gold/50 pl-3 mt-2">
          {person.note}
        </p>
      )}
    </motion.div>
  );
}
