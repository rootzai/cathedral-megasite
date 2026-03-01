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
  "Chapter 11": "A section of the US Bankruptcy Code that allows a business to reorganize its debts while continuing operations. Dioceses use this to halt lawsuits and force global settlements.",
  "Automatic Stay": "An injunction that automatically stops lawsuits, foreclosures, garnishments, and all collection activity against the debtor the moment a bankruptcy petition is filed.",
  "Fraudulent Conveyance": "The illegal transfer of property to another party in order to defer, hinder or defraud creditors. Courts have ruled some diocesan asset transfers fit this definition.",
  "Two-Hat Defense": "A legal strategy where a Bishop claims to be the absolute owner of property under Canon Law, but merely a trustee with no ownership rights under Civil Law.",
  "Diocese": "The territorial jurisdiction of a bishop. In the US, each diocese is typically a separate legal corporation.",
  "Ordinary": "An officer of the church who by reason of office has ordinary power to execute the church's laws. Typically refers to the diocesan bishop.",
  "Ad Limina": "A mandatory visit made by bishops to Rome every five years to report on the state of their dioceses to the Pope.",
  "Peter's Pence": "A donation made directly to the Holy See of the Catholic Church. It is intended to be used by the Pope for philanthropic purposes.",
  "Canon Law": "The system of laws and legal principles made and enforced by the hierarchical authorities of the Catholic Church.",
  "Alvarez & Marsal": "A global professional services firm notable for its turnaround management and performance improvement. They are frequently hired by dioceses to manage bankruptcy restructuring.",
  "Burn Rate": "The rate at which a company (or diocese in bankruptcy) is spending its available cash on professional fees and operations.",
  "Cramdown": "A bankruptcy court's ability to force a reorganization plan on creditors (survivors) even if they vote against it."
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
