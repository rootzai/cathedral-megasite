import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, MapPin } from "lucide-react";
import { useState } from "react";

interface ClergyLocation {
  id: number;
  name: string;
  role: string;
  location: string;
  lat: number;
  lng: number;
  status: string;
}

const clergyLocations: ClergyLocation[] = [
  { id: 1, name: "Msgr. Joseph R. Reilly", role: "President", location: "Seton Hall University, South Orange, NJ", lat: 40.7431, lng: -74.2469, status: "Protected" },
  { id: 2, name: "Msgr. C. Anthony Ziccardi", role: "Faculty", location: "Seton Hall University, South Orange, NJ", lat: 40.7431, lng: -74.2469, status: "Demoted" },
  { id: 3, name: "Msgr. Thomas P. Nydegger", role: "Pastor", location: "St. Helen's Church, Westfield, NJ", lat: 40.6534, lng: -74.3496, status: "Removed" },
  { id: 5, name: "Rev. Duverney Bermúdez", role: "Pastor", location: "Immaculate Conception, Elizabeth, NJ", lat: 40.6639, lng: -74.2107, status: "Transferred" },
  { id: 8, name: "Msgr. Gerard H. McCarren", role: "Rector", location: "Immaculate Conception Seminary, South Orange, NJ", lat: 40.7431, lng: -74.2469, status: "Rehabilitated" },
  { id: 9, name: "Rev. John J. Chadwick", role: "Vicar General", location: "Archdiocese of Newark, Newark, NJ", lat: 40.7580, lng: -74.1724, status: "Promoted" },
  { id: 11, name: "Msgr. Thomas P. Ivany", role: "Pastor", location: "Assumption Church, Roselle Park, NJ", lat: 40.6634, lng: -74.2646, status: "Quietly Moved" },
];

export default function ClergyMap() {
  const [selectedLocation, setSelectedLocation] = useState<ClergyLocation | null>(null);

  return (
    <Card className="bg-card border border-border rounded-none overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-muted/20 p-4 border-b border-border flex justify-between items-center">
          <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <MapPin className="w-3 h-3" /> Geographic Distribution
          </h3>
          <div className="flex items-center gap-2 text-destructive text-xs font-mono uppercase">
            <AlertTriangle className="w-3 h-3" />
            Active Locations
          </div>
        </div>
        <div className="h-[400px] w-full relative">
          <iframe
            title="Clergy Locations - Northern New Jersey"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.45%2C40.60%2C-74.10%2C40.80&layer=mapnik"
            className="w-full h-full border-0"
            loading="lazy"
          />
          {/* Location pins overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {clergyLocations.map((clergy) => (
              <button
                key={clergy.id}
                className="absolute pointer-events-auto group"
                style={{
                  left: `${((clergy.lng - (-74.45)) / (-74.10 - (-74.45))) * 100}%`,
                  top: `${((40.80 - clergy.lat) / (40.80 - 40.60)) * 100}%`,
                }}
                onClick={() => setSelectedLocation(clergy)}
                title={clergy.name}
              >
                <div className="w-3 h-3 bg-destructive rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform" />
              </button>
            ))}
          </div>
        </div>
        {selectedLocation && (
          <div className="p-4 bg-muted/5 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">Selected Location</p>
            <p className="font-heading text-lg text-foreground">{selectedLocation.name}</p>
            <p className="font-body text-sm text-foreground/80">{selectedLocation.location}</p>
            <p className="font-mono text-xs text-destructive uppercase mt-1">{selectedLocation.status}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
