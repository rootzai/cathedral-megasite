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
  { path: "/breach/rabner", label: "The Rabner Dossier" },
  { path: "/breach/forensics", label: "Forensic Overview" },

  // THE SUCCESSION
  { path: "/succession", label: "The Succession" },
  { path: "/succession/checchio", label: "The Newark Export" },
  { path: "/succession/cases", label: "Active Case Dossiers" },
  { path: "/succession/epilogue", label: "The Millstone Epilogue" },

  // THE LEDGER (ENDGAME)
  { path: "/ledger", label: "The Ledger" },
  { path: "/ledger/mccarrick", label: "McCarrick: The Full File" },
  { path: "/ledger/reilly", label: "Joseph Reilly: The President" },
  { path: "/ledger/lorenzo", label: "Elias Lorenzo: The King in Waiting" },
  { path: "/ledger/checchio", label: "James Checchio: The Musical Chairs" },
  { path: "/ledger/martin", label: "Kenneth Martin: The Chicago Link" },
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
          <div /> // Spacer
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
          <div /> // Spacer
        )}
      </div>
    </div>
  );
}
