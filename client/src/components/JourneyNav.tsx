import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { ShareButton } from "./ShareButton";

const ROUTES = [
  // THE ORIGIN
  { path: "/origin", label: "The Origin Portal" },
  { path: "/origin/martin", label: "The Martin Evidence" },
  { path: "/origin/beach-house", label: "The Beach House" },
  { path: "/origin/network", label: "The McCarrick Network" },
  { path: "/origin/explosion", label: "The McCarrick Downfall" },

  // THE COVER-UP
  { path: "/coverup", label: "The Billion-Dollar Mechanism" },
  { path: "/coverup/complicity", label: "They Knew" },
  { path: "/coverup/big-lie", label: "The Big Lie: Governance Hierarchy" },
  { path: "/coverup/legal", label: "The Legal Triumvirate" },
  { path: "/coverup/epstein", label: "The Epstein Nexus" },

  // THE BREACH
  { path: "/breach", label: "The Breach" },
  { path: "/breach/whistleblowers", label: "The Whistleblowers" },
  { path: "/breach/courtroom", label: "The Courtroom (Timeline)" },
  { path: "/breach/rabner", label: "The Rabner Dossier" },
  { path: "/breach/forensics", label: "Forensic Overview" },

  // THE SUCCESSION
  { path: "/succession", label: "The Succession" },
  { path: "/succession/checchio", label: "The Newark Export" },
  { path: "/succession/cases", label: "Active Case Dossiers" },
  { path: "/succession/epilogue", label: "The Millstone Epilogue" },

  // THE LEDGER (ENDGAME)
  { path: "/ledger", label: "The Ledger" },
  { path: "/ledger/mccarrick", label: "McCarrick: Introduction" },
  { path: "/ledger/mccarrick/background", label: "McCarrick: Background" },
  { path: "/ledger/mccarrick/profile", label: "McCarrick: Profile" },
  { path: "/ledger/mccarrick/the-rise", label: "McCarrick: The Rise" },
  { path: "/ledger/mccarrick/the-regime", label: "McCarrick: The Regime" },
  { path: "/ledger/mccarrick/network", label: "Act II: The Labyrinth" },
  { path: "/ledger/mccarrick/warnings", label: "McCarrick: Warnings Ignored" },
  { path: "/ledger/mccarrick/mechanisms", label: "Act III: The Mechanisms" },
  { path: "/ledger/mccarrick/seton-hall", label: "McCarrick: Seton Hall" },
  { path: "/ledger/mccarrick/downfall", label: "McCarrick: Downfall" },
  { path: "/ledger/mccarrick/the-reckoning", label: "McCarrick: The Reckoning" },
  { path: "/ledger/mccarrick/legal", label: "McCarrick: Legal Actions" },
  { path: "/ledger/mccarrick/survivors", label: "Ring 5: The Survivors" },
  { path: "/ledger/mccarrick/responses", label: "McCarrick: Responses" },
  { path: "/ledger/mccarrick/analysis", label: "McCarrick: Analysis" },
  { path: "/ledger/mccarrick/conclusion", label: "McCarrick: Conclusion" },

  { path: "/ledger/checchio", label: "Act VI: The Succession" },
  { path: "/ledger/checchio/formation", label: "Checchio: Formation" },
  { path: "/ledger/checchio/ascent", label: "Checchio: The Ascent" },
  { path: "/ledger/checchio/governance", label: "Checchio: Governance" },
  { path: "/ledger/checchio/controversies", label: "Checchio: Controversies" },
  { path: "/ledger/checchio/purge", label: "Checchio: The Purge" },
  { path: "/ledger/checchio/status", label: "Checchio: Status" },

  { path: "/ledger/martin", label: "Act I: Kenneth Martin" },
  { path: "/ledger/martin/crimes", label: "Martin: The Crimes" },
  { path: "/ledger/martin/launder", label: "Martin: The Launder" },
  { path: "/ledger/martin/chicago", label: "Martin: Complicity" },

  { path: "/ledger/lorenzo", label: "Elias Lorenzo: Introduction" },
  { path: "/ledger/lorenzo/expulsion", label: "Lorenzo: Expulsion" },
  { path: "/ledger/lorenzo/rehabilitation", label: "Lorenzo: Rehabilitation" },
  { path: "/ledger/lorenzo/elevation", label: "Lorenzo: Elevation" },

  { path: "/ledger/reilly", label: "Joseph Reilly: The President" },

  // DEEP DIVES & RECORDS
  { path: "/vault/documents", label: "The Document Repository" },
  { path: "/the-record", label: "The Record: Fact-Check Dashboard" },
];

export function JourneyNav() {
  const [location] = useLocation();
  const currentIndex = ROUTES.findIndex((route) => route.path === location);

  if (currentIndex === -1) return null;

  const prevRoute = currentIndex > 0 ? ROUTES[currentIndex - 1] : null;
  const nextRoute = currentIndex < ROUTES.length - 1 ? ROUTES[currentIndex + 1] : null;

  return (
    <div className="border-t border-border mt-16 py-8">
      <div className="flex justify-center mb-8">
        <ShareButton
          title={`The Benjamin Ruling: ${ROUTES[currentIndex].label}`}
          text={`Read about ${ROUTES[currentIndex].label} in the Benjamin Ruling investigation.`}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {prevRoute ? (
          <Link href={prevRoute.path}>
            <a className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-muted-foreground/50 transition-colors w-full md:w-auto">
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="text-left">
                <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Previous</span>
                <span className="block font-heading text-lg text-foreground group-hover:text-destructive transition-colors">
                  {prevRoute.label}
                </span>
              </div>
            </a>
          </Link>
        ) : (
          <div />
        )}

        {nextRoute ? (
          <Link href={nextRoute.path}>
            <a className="group flex items-center justify-end gap-4 p-4 rounded-lg border border-border hover:border-muted-foreground/50 transition-colors w-full md:w-auto text-right">
              <div className="text-right">
                <span className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Next</span>
                <span className="block font-heading text-lg text-foreground group-hover:text-destructive transition-colors">
                  {nextRoute.label}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
