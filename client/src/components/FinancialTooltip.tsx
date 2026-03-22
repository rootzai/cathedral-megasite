import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface FinancialTooltipProps {
  value: string;
  breakdown: {
    label: string;
    amount: string;
  }[];
}

export default function FinancialTooltip({ value, breakdown }: FinancialTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="font-mono font-bold text-primary cursor-help border-b border-dotted border-primary/50 hover:border-primary transition-colors flex items-center gap-1 w-fit">
            {value}
            <Info className="w-3 h-3 text-muted-foreground" />
          </span>
        </TooltipTrigger>
        <TooltipContent className="bg-card border-border p-3 shadow-xl">
          <div className="space-y-2">
            <p className="font-serif font-bold text-sm border-b border-border pb-1 mb-2">Valuation Breakdown</p>
            {breakdown.map((item, index) => (
              <div key={index} className="flex justify-between text-sm gap-4">
                <span className="text-muted-foreground">{item.label}:</span>
                <span className="font-mono font-bold">{item.amount}</span>
              </div>
            ))}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
