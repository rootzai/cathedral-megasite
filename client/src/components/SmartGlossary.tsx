import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface SmartGlossaryProps {
  term: string;
  definition?: string;
  children?: React.ReactNode;
}

const glossaryTerms: Record<string, string> = {
  "Cardinalate": "The collective body of all Cardinals of the Catholic Church. They serve as the Pope's primary advisors and elect his successor.",
  "Corporation Sole": "A legal entity consisting of a single incorporated office, occupied by a single natural person. This allows a Bishop to hold title to all diocesan property personally, often shielding it from parish-level liabilities.",
  "Holy See": "The jurisdiction of the Pope in his role as the bishop of Rome. It is a sovereign entity under international law, distinct from the Vatican City State.",
  "Fraudulent Conveyance": "The illegal transfer of property to another party in order to defer, hinder or defraud creditors. Courts have ruled some diocesan asset transfers fit this definition.",
};

export default function SmartGlossary({ term, definition: propDefinition, children }: SmartGlossaryProps) {
  const definition = propDefinition || glossaryTerms[term];

  if (!definition) {
    return <>{children || term}</>;
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <span className="cursor-help border-b border-dotted border-primary/50 hover:border-primary hover:bg-primary/5 transition-colors inline-flex items-center gap-0.5">
            {children || term}
            <Info className="w-3 h-3 text-muted-foreground opacity-50" />
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-4 bg-popover border-border shadow-xl">
          <p className="font-bold text-sm mb-1 text-primary">{term}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
