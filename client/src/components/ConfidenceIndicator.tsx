import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckCircle2, FileText, Newspaper } from "lucide-react";

export type ConfidenceLevel = 'court' | 'official' | 'news';

interface ConfidenceIndicatorProps {
    level: ConfidenceLevel;
    source?: string;
    className?: string;
}

export const ConfidenceIndicator: React.FC<ConfidenceIndicatorProps> = ({ level, source, className = "" }) => {
    const configs = {
        court: {
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            label: "Court Record",
            icon: CheckCircle2,
            description: "Sourced to a verified court filing or judicial order."
        },
        official: {
            color: "text-blue-600",
            bg: "bg-blue-50",
            label: "Official Document",
            icon: FileText,
            description: "Sourced to a Vatican report, board minutes, or official institutional correspondence."
        },
        news: {
            color: "text-amber-600",
            bg: "bg-amber-50",
            label: "News Reporting",
            icon: Newspaper,
            description: "Sourced to credible investigative journalism (NYT, Politico, etc.)."
        }
    };

    const config = configs[level];
    const Icon = config.icon;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors cursor-help ${config.bg} ${config.color} border-current ${className}`}>
                        <Icon size={12} className="shrink-0" />
                        {config.label}
                    </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-[200px] bg-zinc-900 text-white border-zinc-700 text-[11px] leading-relaxed p-3 shadow-xl">
                    <p className="font-bold mb-1 uppercase tracking-widest text-xs opacity-70">{config.label}</p>
                    <p className="mb-2">{config.description}</p>
                    {source && (
                        <div className="pt-2 border-t border-zinc-700">
                            <span className="opacity-60">Source: </span>
                            <span className="font-mono text-xs">{source}</span>
                        </div>
                    )}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
