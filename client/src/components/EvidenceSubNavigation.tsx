import React from "react";
import { Link, useLocation } from "wouter";
import { RINGS } from "./ShieldDiagram";

export default function EvidenceSubNavigation() {
    const [location] = useLocation();

    return (
        <div className="bg-[#111116] border-b border-[#1a1a22] overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="max-w-7xl mx-auto px-6 flex items-center gap-8 py-2">
                <span className="text-[10px] font-bold text-[#555] uppercase tracking-[0.2em] pr-4 border-r border-[#1a1a22]">
                    SELECT RING
                </span>
                {RINGS.map((ring) => (
                    <Link key={ring.id} href={ring.route}>
                        <a className={`
              text-[10px] font-bold uppercase tracking-[0.2em] transition-all py-1
              ${location === ring.route
                                ? "text-[#8b1a1a] border-b border-[#8b1a1a]"
                                : "text-[#888] hover:text-[#c8bdb0]"}
            `}>
                            {ring.breach ? `★ RING ${ring.id}` : `RING ${ring.id}`}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}
