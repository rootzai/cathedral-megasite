/// <reference types="@types/google.maps" />
import { JourneyNav } from "@/components/JourneyNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Home, MapPin, Users, Navigation } from "lucide-react";
import { MapView } from "@/components/Map";
import { useState, useRef } from "react";

export default function BeachHouse() {
  const [showRoute, setShowRoute] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);

  const handleViewRoute = () => {
    if (!mapRef.current || !window.google) return;

    setShowRoute(true);
    const directionsService = new window.google.maps.DirectionsService();

    if (!directionsRendererRef.current) {
      directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
        map: mapRef.current,
        suppressMarkers: false,
        polylineOptions: {
          strokeColor: "#ef4444",
          strokeWeight: 5,
          strokeOpacity: 0.8
        }
      });
    }

    directionsService.route(
      {
        origin: "Seton Hall University, South Orange, NJ",
        destination: "300 Ocean Avenue, Sea Girt, NJ",
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result: google.maps.DirectionsResult | null, status: google.maps.DirectionsStatus) => {
        if (status === "OK" && result) {
          directionsRendererRef.current?.setDirections(result);
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  };

  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-12 space-y-20">

      {/* Narrative Hero */}
      <section className="relative border-b border-border pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-[0.2em]">
              <Home className="w-3 h-3" />
              Forensic Site Analysis
            </div>

            <h1 className="font-heading text-7xl md:text-8xl text-foreground leading-[0.9] tracking-tighter">
              The Ocean <br />
              <span className="text-destructive italic underline decoration-destructive/30 underline-offset-8">Avenue</span>
            </h1>

            <div className="prose-investigative text-xl leading-relaxed text-muted-foreground font-serif italic">
              "300 Ocean Avenue was not a retreat. It was a laboratory of coercion—a quiet, salt-aired house where the hierarchy of the Church was used to dismantle the boundaries of the young."
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-video bg-zinc-900 rounded-sm border border-border overflow-hidden grayscale contrast-125 group shadow-2xl">
              <MapView
                className="w-full h-full grayscale opacity-60 mix-blend-luminosity"
                initialCenter={{ lat: 40.1311, lng: -74.0315 }}
                initialZoom={15}
                onMapReady={(map) => { mapRef.current = map; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="font-mono text-xs uppercase tracking-widest text-white">
                  Coordinates: 40.1311° N, 74.0315° W
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className={`gap-2 font-mono text-xs uppercase tracking-widest transition-all ${showRoute
                    ? "bg-destructive text-white border-destructive"
                    : "bg-white/20 border-white/40 text-white hover:bg-destructive hover:border-destructive"
                    }`}
                  onClick={handleViewRoute}
                >
                  <Navigation className={`w-3 h-3 ${showRoute ? "animate-pulse" : ""}`} />
                  {showRoute ? "Route Active" : "View Route"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Atlantic Reconstruction */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-12 prose-investigative max-w-none">
          <h2 className="section-heading mb-12">The Ritual of the Weekend</h2>

          <div className="columns-1 md:columns-2 gap-12 space-y-8 text-lg leading-relaxed text-muted-foreground font-serif">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-foreground">
              T
              he drive began in late afternoon sunlight, usually on a Thursday or Friday.
              The car—often driven by one of the "nephews"—would wind its way south from
              the heavy gothic architectures of Newark and South Orange toward the coastal
              anonymity of Sea Girt. Theodore McCarrick sat in the front seat, a prince
              of the Church shedding his vestments for the casual affect of a mentor.
              To the seminarians in the back, the invitation was the ultimate mark of
              favor—a weekend at the Archbishop’s private oceanfront sanctuary.
            </p>

            <p>
              But the favor was a cage. The ritual at 300 Ocean Avenue was as consistent
              as the tide. It began with pizza and beer—a calculated leveling of roles
              designed to blur the line between spiritual father and casual peer. As
              night fell, the Archbishop would orchestrate the sleeping arrangements.
              Despite the house’s multiple bedrooms, there was always a "lack of space."
              The decree was issued with paternal finality: two of the young men would
              have to share a bed. Often, that bed was in the small secondary room on
              the second floor—or, most chillingly, in the Archbishop's own quarters.
            </p>

            <blockquote className="border-l-4 border-destructive pl-8 py-4 my-10 bg-destructive/5 not-italic text-foreground">
              <p className="text-2xl font-bold leading-tight mb-4">
                "If you don't go, you'll never be ordained."
              </p>
              <footer className="font-mono text-xs uppercase tracking-widest opacity-60">
                — Recurring testimony from survivors of the Sea Girt weekends
              </footer>
            </blockquote>

            <p>
              What followed was what survivors came to call "the cuddle"—a sanitized
              euphemism for a brutal violation of boundaries. Under the guise of
              mentorship, McCarrick would engage in unwanted physical contact,
              leveraging his absolute power over their futures to enforce their
              silence. To object was to risk a vocation; to flee was to
              confront the absolute weight of the Church's hierarchy. In the
              quiet of Sea Girt, the ocean provided the only witness.
            </p>
          </div>
        </div>
      </section>

      {/* High-Fidelity Floor Plan */}
      <section className="bg-zinc-50 p-12 rounded-sm border border-border shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive to-transparent" />

        <header className="mb-12 text-center">
          <h3 className="font-heading text-3xl mb-2">The Architecture of Coercion</h3>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Reconstruction of the 2nd Floor Sleeping Quarters</p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border border-border bg-white/40 flex flex-col justify-between aspect-square group">
            <span className="font-mono text-xs text-zinc-600 uppercase">Room A</span>
            <div className="text-center">
              <Users className="w-6 h-6 text-destructive/40 mx-auto mb-3 group-hover:text-destructive transition-colors" />
              <div className="font-heading text-sm text-foreground">The Archbishop</div>
            </div>
            <p className="font-mono text-[9px] text-muted-foreground leading-tight">Master Suite. Site of the most frequent 'Nephew' assignments.</p>
          </div>

          <div className="p-6 border border-border bg-white/40 flex flex-col justify-between aspect-square group">
            <span className="font-mono text-xs text-zinc-600 uppercase">Room B</span>
            <div className="text-center">
              <Users className="w-6 h-6 text-muted-foreground/20 mx-auto mb-3" />
              <div className="font-heading text-sm text-muted-foreground/60 tracking-widest">SECRETARY</div>
            </div>
            <p className="font-mono text-[9px] text-muted-foreground leading-tight">Reserved for Reilly or other assistants. The room of the silent witness.</p>
          </div>

          <div className="col-span-2 p-8 border border-destructive/20 bg-destructive/[0.02] flex flex-col justify-between relative overflow-hidden shadow-inner">
            <div className="absolute top-2 right-2 flex gap-1">
              <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
            </div>
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-xs text-destructive uppercase tracking-widest">Room C: "The Overflow"</span>
              <div className="h-px flex-1 bg-destructive/20 mx-4 mt-2" />
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-20 h-32 border-2 border-dashed border-destructive/40 bg-destructive/10 rounded-sm" />
              <div className="w-20 h-32 border-2 border-dashed border-destructive/40 bg-destructive/10 rounded-sm" />
            </div>
            <p className="font-serif text-sm italic text-destructive/80 text-center leading-relaxed">
              "Pushed together." The calculated 'lack of space' that turned a beach house into a grooming facility.
            </p>
          </div>
        </div>
      </section>

      {/* The Gallery of Silence */}
      <section className="space-y-12">
        <header className="flex items-center gap-6">
          <h2 className="font-heading text-4xl text-foreground shrink-0 uppercase tracking-tighter">The Gallery of Silence</h2>
          <div className="h-px flex-1 bg-border" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Msgr. Joseph Reilly",
              role: "The Gatekeeper",
              context: "1987-1994",
              narrative: "Claims to have visited the house exactly 'once' during a decade of service as McCarrick's right hand. An implausible admission given the role's requirement for constant proximity."
            },
            {
              name: "Msgr. Robert Harahan",
              role: "The Administrator",
              context: "1986-1995",
              narrative: "Responsible for the logistical scheduling of the 'Nephews'. Testimony suggests he were fully aware of the bed-sharing mandates as a standard operating procedure."
            },
            {
              name: "Bishop James Checchio",
              role: "The Witness",
              context: "2019 Task Force",
              narrative: "As a member of the Regent Task Force, he heard the first-hand accounts of Sea Girt survivors. He chose to sign the reward letters for Tobin instead of the criminal referrals."
            }
          ].map((vignette, i) => (
            <Card key={i} className="bg-zinc-50 border-border group hover:border-destructive/50 transition-all duration-500 shadow-xl rounded-none">
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="font-mono text-xs uppercase tracking-widest text-destructive">{vignette.context}</div>
                  <Users className="w-4 h-4 text-zinc-600 group-hover:text-destructive transition-colors" />
                </div>
                <h4 className="font-heading text-2xl text-foreground group-hover:text-destructive transition-colors">{vignette.name}</h4>
                <div className="font-mono text-xs uppercase tracking-widest text-zinc-600 border-b border-border pb-4">{vignette.role}</div>
                <p className="font-serif text-base leading-relaxed text-muted-foreground italic">"{vignette.narrative}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <JourneyNav />
    </div>
  );
}
