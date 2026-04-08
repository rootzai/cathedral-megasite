import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TERM_DEFINITIONS: Record<string, { summary: string; context?: string }> = {
  "Latham Report": {
    summary: "A devastating 2019 internal investigation by the law firm Latham & Watkins.",
    context: "It named 12 abusive clergymen and detailed McCarrick's 'culture of fear.' Seton Hall locked it away and has fought its release for six years."
  },
  "Michael Critchley": {
    summary: "The preeminent 'legal gladiator' for the Church in NJ.",
    context: "Architect of the 'Architecture of Protection' and lead crisis manager responsible for the 2013 Fugee de-escalation."
  },
  "Latham Archive": {
    summary: "A 24,000-page vault of evidence supporting the Latham Report.",
    context: "Currently locked in a SCIF. A judge recently ordered it unsealed by May 18, 2026."
  },
  "SCIF": {
    summary: "Sensitive Compartmented Information Facility.",
    context: "A highly secure room typically used by the CIA/FBI for state secrets. Seton Hall used one to hide the abuse report from subpoenas."
  },
  "McCarrick": {
    summary: "Theodore McCarrick, a former Cardinal and Archbishop of Newark.",
    context: "He was defrocked in 2019 for serial sexual abuse. He built the modern power structure at Seton Hall."
  },
  "LaSala Task Force": {
    summary: "An internal Seton Hall committee formed to review the Latham Report.",
    context: "They explicitly recommended removing Msgr. Reilly. The Board of Regents ignored them and made Reilly president."
  },
  "Perry Law Report": {
    summary: "A 2024 investigation by Perry Law into misconduct at Seton Hall.",
    context: "It was leaked to the New York Times within hours of being unsealed to discredit whistleblowers. Also known as the 'Humpty Dumpty' drop."
  },
  "Title IX": {
    summary: "Federal civil rights law protecting against sex-based discrimination.",
    context: "Seton Hall was accused of operating a 'shadow' compliance channel and erasing Title IX complaints against powerful Regents."
  },
  "Board of Regents": {
    summary: "The operational governing board of Seton Hall University.",
    context: "They manage the $1.2B budget. They voted to install Msgr. Reilly as president despite knowing about his complicity."
  },
  "Ecclesiastical": {
    summary: "Relating to the Christian Church or its clergy.",
    context: "Seton Hall often uses 'ecclesiastical privilege' as a legal shield to claim civil courts have no jurisdiction over them."
  },
  "Grand Jury Privilege": {
    summary: "A legal rule that keeps grand jury proceedings secret.",
    context: "Seton Hall is trying to use this NJ rule to overcome California laws that protect journalists from being forced to reveal sources."
  },
  "Anti-SLAPP": {
    summary: "Laws designed to stop 'Strategic Lawsuits Against Public Participation.'",
    context: "These laws prevent powerful groups from using expensive, meritless lawsuits to silence critics or journalists."
  },
  "Shield Law": {
    summary: "A law that protects journalists from being forced to reveal their anonymous sources.",
    context: "California has a strong 'Shield Law' in its Constitution, which Seton Hall is attempting to bypass."
  },
  "Subpoena": {
    summary: "A formal legal order from a court or grand jury requiring someone to give testimony or evidence.",
    context: "Seton Hall is using 'Does' (anonymous) subpoenas to try to find out who is leaking documents to the press."
  },
  "Deposition": {
    summary: "A witness's out-of-court testimony that is reduced to writing for later use in court.",
    context: "Seton Hall wants to force a California journalist into a deposition to reveal their sources."
  },
  "Chancery": {
    summary: "The administrative office or 'business headquarters' of a Catholic diocese.",
    context: "The Newark Chancery is where the historical abuse records are kept."
  },
  "Vicar General": {
    summary: "The second-highest official in a diocese, serving as the Bishop's primary deputy.",
    context: "Several Vicars General in Newark were found to have ignored reports of McCarrick's misconduct."
  },
  "Statute of Limitations": {
    summary: "A law that sets the maximum time after an event within which legal proceedings may be initiated.",
    context: "New Jersey recently changed these laws to allow survivors of old abuse cases to finally sue the Church."
  },
  "Amicus": {
    summary: "Short for 'Amicus Curiae' or 'Friend of the Court.'",
    context: "These are outside groups that give the judge extra information to help make a decision on a case."
  },
  "TRO": {
    summary: "Temporary Restraining Order.",
    context: "A short-term court order that stops someone from doing something until a full hearing can be held."
  },
  "Canon Law": {
    summary: "The internal legal system of the Catholic Church.",
    context: "The Church often argues that Canon Law should take precedence over civil laws in matters involving clergy."
  },
  "Legislative Capture": {
    summary: "A situation where a government agency or legislature acts in favor of a powerful interest group instead of the public.",
    context: "The Church used its political influence to block changes to the Statute of Limitations for years."
  },
  "Grand Jury": {
    summary: "A group of citizens empowered by law to conduct legal proceedings and investigate potential criminal conduct.",
    context: "The 2018 Pennsylvania Grand Jury report was a turning point, exposing decades of cover-ups in six dioceses."
  }
};

interface TermProps {
  id: string;
  children?: React.ReactNode;
}

export function Term({ id, children }: TermProps) {
  const definition = TERM_DEFINITIONS[id];

  if (!definition) {
    return <span className="font-bold">{children || id}</span>;
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help border-b border-dashed border-[#8b1a1a]/70 hover:border-[#8b1a1a] hover:text-white transition-colors">
            {children || id}
          </span>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs bg-black border border-[#8b1a1a]/50 p-4 shadow-2xl">
          <p className="font-bold text-[#8b1a1a] font-cinzel text-lg mb-1">{id}</p>
          <p className="text-sm text-zinc-300 font-serif leading-relaxed mb-2">{definition.summary}</p>
          {definition.context && (
            <p className="text-xs text-zinc-500 font-mono leading-relaxed">{definition.context}</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
