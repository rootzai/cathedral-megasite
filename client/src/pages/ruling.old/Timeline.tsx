import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronRight, FileText, Siren, UserMinus, UserPlus } from "lucide-react";

const timelineEvents = [
  {
    year: "1981",
    title: "The Purchase",
    description: "Archdiocese of Newark purchases 300 Ocean Avenue, Sea Girt for ~$250k. McCarrick begins using it immediately.",
    type: "origin",
    icon: HomeIcon
  },
  {
    year: "1986-2000",
    title: "The McCarrick Era",
    description: "McCarrick serves as Archbishop of Newark and Seton Hall Board Chair. The 'Beach House System' is fully operational.",
    type: "era",
    icon: Siren
  },
  {
    year: "1994",
    title: "The Reilly Incident",
    description: "Msgr. Joseph Reilly (then secretary) hears rumors and refuses to stay overnight. He does not report it.",
    type: "incident",
    icon: AlertTriangleIcon
  },
  {
    year: "June 2018",
    title: "The First Domino",
    description: "First public allegation (Victim 'James') surfaces in NY Archdiocese settlement.",
    type: "trigger",
    icon: FileText
  },
  {
    year: "Oct 2018",
    title: "The Ban",
    description: "Cardinal Tobin quietly bans McCarrick from the Sea Girt property.",
    type: "action",
    icon: UserMinus
  },
  {
    year: "Jan 2019",
    title: "The Sale & Laicization",
    description: "Property sold for $1.6M days after McCarrick is laicized. The physical evidence is liquidated.",
    type: "milestone",
    icon: DollarSignIcon
  },
  {
    year: "2019",
    title: "The Latham Report",
    description: "Latham & Watkins completes the investigation. The report is immediately sealed.",
    type: "milestone",
    icon: FileText
  },
  {
    year: "2020",
    title: "The Purge Begins",
    description: "Msgr. Ziccardi (VP Mission) and Msgr. Nydegger (Vicar General) are removed/demoted.",
    type: "purge",
    icon: UserMinus
  },
  {
    year: "2024",
    title: "The Promotion",
    description: "Msgr. Joseph Reilly is named President of Seton Hall University, despite the report's findings.",
    type: "scandal",
    icon: UserPlus
  },
  {
    year: "Nov 2025",
    title: "The Leak",
    description: "Politico exposes the Latham Report contents. The cover-up collapses.",
    type: "revelation",
    icon: Siren
  }
];

import { AlertTriangle as AlertTriangleIcon, DollarSign as DollarSignIcon, Home as HomeIcon } from "lucide-react";

export default function Timeline() {
  return (
    <Layout>
      <div className="space-y-16 animate-in fade-in duration-1000">
        
        {/* Hero Section */}
        <section className="relative border-b border-border pb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
              <Calendar className="w-3 h-3" />
              CHRONOLOGY OF COVER-UP
            </div>
            <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none">
              The Timeline <br/>
              <span className="text-destructive">of Erasure</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl">
              Mapping the decades of abuse against the sudden, coordinated "purge" of 2019-2020.
            </p>
          </div>
        </section>

        {/* Timeline Visualization */}
        <section className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}>
                
                {/* Date Marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-destructive z-10" />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)] pl-20 md:pl-0">
                  <Card className={`bg-card border-border hover:border-destructive/50 transition-colors duration-300 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    <CardHeader>
                      <div className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      }`}>
                        <Badge variant="outline" className="font-mono text-xs">{event.year}</Badge>
                        <Badge variant="secondary" className="font-mono text-[10px] uppercase">{event.type}</Badge>
                      </div>
                      <CardTitle className="font-heading text-xl flex items-center gap-2">
                        {index % 2 !== 0 && <event.icon className="w-5 h-5 text-destructive md:hidden" />}
                        {event.title}
                        {index % 2 === 0 && <event.icon className="w-5 h-5 text-destructive md:hidden" />}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-body text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </section>
        <JourneyNav />
      </div>
    </Layout>
  );
}
