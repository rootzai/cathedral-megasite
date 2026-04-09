import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, Scale, Gavel, DollarSign, Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  type: "start" | "milestone" | "legislation" | "surge" | "current" | "settlement";
  details?: string;
}

export default function VisualTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events: TimelineEvent[] = [
    { 
      year: "2004", 
      title: "First Wave: The Strategy Emerges", 
      desc: "Portland (OR), Tucson (AZ), and Spokane (WA) file for Chapter 11. This marks the first time US Dioceses use bankruptcy as a legal shield against abuse claims.", 
      type: "start",
      details: "The Archdiocese of Portland filed on the very day a trial was set to begin, establishing the precedent of using the 'Automatic Stay' to halt litigation."
    },
    { 
      year: "2011", 
      title: "The Milwaukee Maneuver", 
      desc: "Archdiocese of Milwaukee files. The case becomes infamous for the pre-bankruptcy transfer of $55M into a 'Cemetery Trust' to shield it from creditors.", 
      type: "milestone",
      details: "Courts eventually ruled the Cemetery Trust was protected, validating the strategy of ring-fencing assets before filing."
    },
    { 
      year: "2015", 
      title: "St. Paul & Minneapolis Settlement", 
      desc: "$210M settlement sets a new benchmark for liability, forcing other dioceses to reassess their exposure.", 
      type: "settlement",
      details: "This massive settlement demonstrated that even with bankruptcy protection, the cost of resolution was rising dramatically."
    },
    { 
      year: "2019", 
      title: "NY Child Victims Act (CVA)", 
      desc: "New York opens a 'lookback window' for time-barred claims. Rochester files immediately, followed by Buffalo, Syracuse, Rockville Centre, Albany, and Ogdensburg.", 
      type: "legislation",
      details: "The CVA triggered a cascade of filings across New York state, as dioceses faced thousands of revived claims."
    },
    { 
      year: "2020", 
      title: "The Pandemic Surge", 
      desc: "New Orleans and Camden file. The economic uncertainty of COVID-19 combined with abuse liability accelerates filings.", 
      type: "surge",
      details: "New Orleans filed specifically to stop the deposition of Archbishop Aymond, highlighting the tactical use of Chapter 11 to avoid transparency."
    },
    { 
      year: "2023", 
      title: "California Window (AB 218)", 
      desc: "California's window opens. Santa Rosa, Oakland, San Francisco, Sacramento, and San Diego file in rapid succession.", 
      type: "surge",
      details: "The California wave represents the largest exposure yet, with billions in real estate assets at stake in high-value markets like SF and San Diego."
    },
    { 
      year: "2024", 
      title: "The $880M LA Settlement", 
      desc: "Archdiocese of Los Angeles settles for $880M without filing bankruptcy, proving that immense liquidity exists when the Church chooses to access it.", 
      type: "current",
      details: "This historic settlement avoided the transparency of bankruptcy court but set a massive financial precedent for future cases."
    },
    { 
      year: "2025", 
      title: "The Liquidity Crisis", 
      desc: "Buffalo and Rockville Centre confirm plans, but Oakland moves to dismiss its own case due to professional fee 'burn rates'.", 
      type: "milestone",
      details: "The strategy shifts from reorganization to 'liquidity management', with dioceses using the cost of bankruptcy itself to pressure survivors into lower settlements."
    }
  ];

  return (
    <Card className="bg-card border-border/50 mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          The Acceleration of Insolvency (2004-2025)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative border-l-2 border-muted ml-4 space-y-8 py-2">
          {events.map((event, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Timeline Dot */}
              <button 
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-background transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary ${
                  selectedEvent === index ? "scale-125 ring-2 ring-primary" : ""
                } ${
                  event.type === "surge" ? "bg-destructive" : 
                  event.type === "legislation" ? "bg-accent" : 
                  event.type === "current" ? "bg-emerald-500" :
                  event.type === "settlement" ? "bg-blue-500" :
                  "bg-muted-foreground"
                }`} 
                aria-label={`View details for ${event.year}`}
              />
              
              <div 
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1 cursor-pointer"
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
              >
                <span className="font-mono text-sm font-bold text-primary">{event.year}</span>
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{event.title}</h4>
                {event.type === "surge" && <Badge variant="destructive" className="w-fit text-xs h-5">Surge</Badge>}
                {event.type === "legislation" && <Badge variant="secondary" className="w-fit text-xs h-5">Legislation</Badge>}
                {event.type === "settlement" && <Badge variant="outline" className="w-fit text-xs h-5 border-blue-500 text-blue-500">Settlement</Badge>}
              </div>
              
              <p className="text-sm text-muted-foreground max-w-2xl mb-2">
                {event.desc}
              </p>

              {/* Expandable Details */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${selectedEvent === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                <div className="bg-muted/30 p-3 rounded-md border border-border/50 text-sm text-foreground">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p>{event.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-xs text-center text-muted-foreground">
          Click on any timeline event to reveal strategic details.
        </div>
      </CardContent>
    </Card>
  );
}
