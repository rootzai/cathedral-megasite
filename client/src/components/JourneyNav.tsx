import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { ShareButton } from "./ShareButton";

const RULING_BASE_PATH = "/ruling";
const ROUTES = [
  { path: RULING_BASE_PATH, label: "The Ruling" },
  { path: `${RULING_BASE_PATH}/dirty-dozen`, label: "The Dirty Dozen" },
  { path: `${RULING_BASE_PATH}/reilly`, label: "The Presidency of Joseph Reilly" },
  { path: `${RULING_BASE_PATH}/beach-house`, label: "The Beach House" },
  { path: `${RULING_BASE_PATH}/tobin-hypocrisy`, label: "Tobin's Hypocrisy" },
  { path: `${RULING_BASE_PATH}/corporate-veil`, label: "The Corporate Veil" },
  { path: `${RULING_BASE_PATH}/timeline`, label: "Timeline of Erasure" },
  { path: `${RULING_BASE_PATH}/evidence`, label: "Evidence Repository" },
  { path: `${RULING_BASE_PATH}/analysis`, label: "Analysis" },
  { path: `${RULING_BASE_PATH}/sheeran-mccarrick`, label: "The Nexus" },
  { path: `${RULING_BASE_PATH}/sanction-plea`, label: "Sanction Plea" },
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
