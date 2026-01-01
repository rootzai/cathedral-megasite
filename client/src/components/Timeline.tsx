import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: "investigation" | "removal" | "promotion" | "legal";
}

const events: TimelineEvent[] = [
  {
    date: "2018",
    title: "Theodore McCarrick Exposed",
    description: "Allegations against former Archbishop Theodore McCarrick become public, triggering a global scandal and local scrutiny of his former appointments.",
    type: "investigation"
  },
  {
    date: "August 2019",
    title: "Reports Delivered",
    description: "Both the Latham & Watkins and Gibbons reports are delivered to the Archdiocese and University leadership. They are immediately sealed.",
    type: "investigation"
  },
  {
    date: "Late 2019",
    title: "The Quiet Purge Begins",
    description: "Msgr. Harahan (McCarrick's former secretary) is removed from University Boards. Msgr. Doran vanishes from the seminary course catalog.",
    type: "removal"
  },
  {
    date: "July 2020",
    title: "The Vicar General Swap",
    description: "Msgr. Nydegger is removed as Vicar General and sent to a parish. He is replaced by Rev. John Chadwick, who was exonerated by the internal probe.",
    type: "promotion"
  },
  {
    date: "September 2020",
    title: "Ziccardi Demoted",
    description: "Msgr. Ziccardi is stripped of his Vice President title and Cabinet status, moved to a teaching-only role.",
    type: "removal"
  },
  {
    date: "2022",
    title: "McCarren Rehabilitated",
    description: "After a two-year 'penalty box' period, Msgr. McCarren is appointed Interim Rector of the Seminary, signaling the end of the purge phase.",
    type: "promotion"
  },
  {
    date: "November 12, 2025",
    title: "The Benjamin Ruling",
    description: "Judge Avion Benjamin rules that the public interest outweighs institutional privacy, ordering the release of the names.",
    type: "legal"
  }
];

export default function Timeline() {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
      {events.map((event, index) => (
        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            {event.type === "legal" ? (
              <Calendar className="w-5 h-5 text-primary" />
            ) : (
              <Clock className={`w-5 h-5 ${
                event.type === "removal" ? "text-destructive" : 
                event.type === "promotion" ? "text-accent" : "text-muted-foreground"
              }`} />
            )}
          </div>
          
          {/* Content Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
            <Card className="bg-card border border-border/50 hover:border-primary/50 transition-colors duration-300 rounded-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <time className="font-mono text-xs text-primary font-bold uppercase tracking-widest">
                    {event.date}
                  </time>
                  <span className={`font-mono text-[10px] uppercase px-2 py-1 border ${
                    event.type === "removal" ? "border-destructive text-destructive" : 
                    event.type === "promotion" ? "border-accent text-accent" : 
                    event.type === "legal" ? "border-primary text-primary" : "border-muted text-muted-foreground"
                  }`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{event.title}</h3>
                <p className="font-body text-sm text-foreground/80 leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
