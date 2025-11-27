import { CheckCircle2, Circle, Clock } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: "complete" | "current" | "future";
}

const events: TimelineEvent[] = [
  {
    date: "August 27, 2019",
    title: "The Vault Closes",
    description: "Board of Regents receives Latham Report. Tobin protects Reilly.",
    status: "complete",
  },
  {
    date: "September 2019",
    title: "The Truth Leaks",
    description: "Joe Nyre sends Latham Report to Vatican and NJ Attorney General.",
    status: "complete",
  },
  {
    date: "2020-2024",
    title: "The Cover-Up Intensifies",
    description: "Reilly promoted. Marino resigns. Nyre retaliated against. Grand jury begins.",
    status: "complete",
  },
  {
    date: "November 12, 2025",
    title: "The Vault Opens",
    description: "Judge Benjamin orders document production.",
    status: "complete",
  },
  {
    date: "Late Nov 2025",
    title: "Documents Begin Release",
    description: "The disinfectant of sunlight begins its work.",
    status: "current",
  },
  {
    date: "2026",
    title: "Depositions & Trials",
    description: "Tobin, Reilly, Lorenzo, Marino questioned under oath. Criminal referrals.",
    status: "future",
  },
  {
    date: "2027",
    title: "Tobin's Retirement",
    description: "The succession question. Will Rome choose accountability or protection?",
    status: "future",
  },
];

export default function Timeline() {
  return (
    <div className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">Timeline of Accountability</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative pl-20">
                {/* Icon */}
                <div className="absolute left-0 top-0 flex items-center justify-center">
                  {event.status === "complete" && (
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                  )}
                  {event.status === "current" && (
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center animate-pulse">
                      <Clock className="h-8 w-8 text-primary-foreground" />
                    </div>
                  )}
                  {event.status === "future" && (
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <Circle className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="text-sm text-primary font-bold mb-1">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                  {event.status === "current" && (
                    <div className="mt-3 inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                      YOU ARE HERE
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
