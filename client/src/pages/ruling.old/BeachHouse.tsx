import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Bed, Home, MapPin, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MapView } from "@/components/Map";
import { useRef } from "react";

export default function BeachHouse() {
  return (
    <Layout>
      <div className="space-y-16 animate-in fade-in duration-1000">
        
        {/* Hero Section */}
        <section className="relative border-b border-border pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
                <Home className="w-3 h-3" />
                THE EPICENTER OF ABUSE
              </div>
              <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none">
                The Beach <br/>
                <span className="text-destructive">House</span>
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl">
                300 Ocean Avenue, Sea Girt, NJ. For over twenty years, this modest oceanfront property served as the primary grooming ground for Theodore McCarrick.
              </p>
            </div>
            <div className="relative aspect-video bg-zinc-900 rounded-lg border border-border overflow-hidden group">
               <MapView 
                 className="w-full h-full"
                 initialCenter={{ lat: 40.1337, lng: -74.0335 }} // Sea Girt, NJ
                 initialZoom={15}
                 onMapReady={(map) => {
                    // Define locations
                    const setonHall = { lat: 40.743, lng: -74.247 }; // Seton Hall University
                    const beachHouse = { lat: 40.1337, lng: -74.0335 }; // Sea Girt Beach House

                    // Add markers
                    new google.maps.marker.AdvancedMarkerElement({
                      map,
                      position: setonHall,
                      title: "Seton Hall University",
                    });
                    
                    new google.maps.marker.AdvancedMarkerElement({
                      map,
                      position: beachHouse,
                      title: "The Beach House",
                    });

                    // Calculate and display route
                    const directionsService = new google.maps.DirectionsService();
                    const directionsRenderer = new google.maps.DirectionsRenderer({
                      map,
                      suppressMarkers: true, // We're using custom markers
                      polylineOptions: {
                        strokeColor: "#ef4444", // Destructive red
                        strokeWeight: 4,
                        strokeOpacity: 0.8,
                      }
                    });

                    directionsService.route(
                      {
                        origin: setonHall,
                        destination: beachHouse,
                        travelMode: google.maps.TravelMode.DRIVING,
                      },
                      (result, status) => {
                        if (status === "OK" && result) {
                          directionsRenderer.setDirections(result);
                        }
                      }
                    );
                 }}
               />
               <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Button 
                   variant="secondary" 
                   size="sm" 
                   className="gap-2 font-mono text-xs uppercase tracking-wider shadow-lg"
                   onClick={() => window.open("https://www.google.com/maps/dir/Seton+Hall+University,+South+Orange+Ave,+South+Orange,+NJ/300+Ocean+Ave,+Sea+Girt,+NJ+08750", "_blank")}
                 >
                   <ExternalLink className="w-3 h-3" />
                   Open in Maps
                 </Button>
               </div>
            </div>
          </div>
        </section>

        {/* The System Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="font-heading text-3xl text-foreground">The System</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              McCarrick personally controlled access. The routine was identical for 20+ years. Seminarians were told: "If you don't go, you'll never be ordained."
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-sm shrink-0">1</div>
                <div>
                  <h4 className="font-heading text-lg text-foreground">The Invitation</h4>
                  <p className="font-mono text-xs text-muted-foreground mt-1">Thursday/Friday afternoon pickup. "Archbishop's retreat."</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-sm shrink-0">2</div>
                <div>
                  <h4 className="font-heading text-lg text-foreground">The Assignment</h4>
                  <p className="font-mono text-xs text-muted-foreground mt-1">"There are only four beds, so two of you will have to share."</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-sm shrink-0">3</div>
                <div>
                  <h4 className="font-heading text-lg text-foreground">The "Cuddle"</h4>
                  <p className="font-mono text-xs text-muted-foreground mt-1">Forced bed-sharing. Unwanted physical contact. Grooming.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floor Plan Visualization */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <Bed className="w-5 h-5 text-destructive" />
                  The Layout of Coercion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Bedroom 1 */}
                  <div className="aspect-square bg-zinc-900/50 border border-border rounded p-4 flex flex-col justify-between">
                    <span className="font-mono text-xs text-muted-foreground uppercase">Bedroom 1</span>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-foreground mx-auto mb-2" />
                      <span className="font-heading text-sm text-foreground">McCarrick</span>
                    </div>
                  </div>
                  
                  {/* Bedroom 2 */}
                  <div className="aspect-square bg-zinc-900/50 border border-border rounded p-4 flex flex-col justify-between">
                    <span className="font-mono text-xs text-muted-foreground uppercase">Bedroom 2</span>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <span className="font-heading text-sm text-muted-foreground">Secretary</span>
                    </div>
                  </div>

                  {/* Bedroom 3 */}
                  <div className="aspect-square bg-zinc-900/50 border border-border rounded p-4 flex flex-col justify-between">
                    <span className="font-mono text-xs text-muted-foreground uppercase">Bedroom 3</span>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <span className="font-heading text-sm text-muted-foreground">Guest / Priest</span>
                    </div>
                  </div>

                  {/* Bedroom 4 */}
                  <div className="aspect-square bg-zinc-900/50 border border-border rounded p-4 flex flex-col justify-between">
                    <span className="font-mono text-xs text-muted-foreground uppercase">Bedroom 4</span>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <span className="font-heading text-sm text-muted-foreground">Guest / Priest</span>
                    </div>
                  </div>

                  {/* Bedroom 5 - The Trap */}
                  <div className="col-span-2 md:col-span-2 aspect-[2/1] bg-destructive/5 border border-destructive/30 rounded p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2">
                      <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
                    </div>
                    <span className="font-mono text-xs text-destructive uppercase tracking-widest">Bedroom 5: "The Trap"</span>
                    <div className="flex items-center justify-center gap-8">
                      <div className="text-center">
                        <div className="w-16 h-24 border-2 border-dashed border-destructive/50 rounded mx-auto mb-2 bg-destructive/10" />
                        <span className="font-mono text-[10px] text-destructive">Single Bed</span>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-24 border-2 border-dashed border-destructive/50 rounded mx-auto mb-2 bg-destructive/10" />
                        <span className="font-mono text-[10px] text-destructive">Twin Bed</span>
                      </div>
                    </div>
                    <p className="text-center font-body text-sm text-destructive mt-4">
                      "Pushed together." The site of the abuse.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who Knew Section */}
        <section className="space-y-8">
           <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-heading text-3xl text-foreground flex items-center gap-2">
              Who Knew?
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Msgr. Joseph Reilly", role: "Seminarian / Secretary", year: "1994", detail: "Personally avoided staying overnight after hearing rumors." },
              { name: "Bishop Arthur Serratelli", role: "Rector, St. Andrew's", year: "1997-2000", detail: "Heard direct complaints from seminarians." },
              { name: "Msgr. Robert Harahan", role: "McCarrick Secretary", year: "1986-1995", detail: "Scheduled seminarians for weekends." },
              { name: "Msgr. John Doran", role: "ICS Faculty", year: "1990s", detail: "Multiple seminarians confided in him." },
              { name: "Msgr. Gerard McCarren", role: "Seminarian", year: "1991", detail: "Invited once, declined." },
              { name: "Cardinal Justin Rigali", role: "Vatican Official", year: "1999", detail: "Received anonymous letter describing the bed-sharing." },
            ].map((person, i) => (
              <Card key={i} className="bg-card border-border">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2 font-mono text-xs">{person.year}</Badge>
                  <CardTitle className="font-heading text-xl">{person.name}</CardTitle>
                  <p className="font-mono text-xs text-muted-foreground">{person.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-muted-foreground">{person.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <JourneyNav />
      </div>
    </Layout>
  );
}
