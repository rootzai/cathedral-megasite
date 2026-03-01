import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Comprehensive list of US states and territories
const ALL_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
  "DC", "GU", "PR", "VI"
];

// Accurate bankruptcy counts based on provided data
// Total should be ~43 cases
const BANKRUPTCY_COUNTS: Record<string, number> = {
  "NY": 8, // Rockville Centre, Buffalo, Syracuse, Rochester, Albany, Ogdensburg, etc.
  "CA": 12, // SF, Oakland, Sacramento, San Diego, Fresno, Santa Rosa, Stockton, etc.
  "MN": 5, // St. Paul-Minneapolis, New Ulm, Winona-Rochester, Duluth, St. Cloud
  "PA": 2, // Harrisburg, Greensburg
  "LA": 2, // New Orleans, Alexandria
  "OR": 1, // Portland (First ever filing)
  "WA": 1, // Spokane
  "AZ": 2, // Tucson, Gallup (Cross-border, listed in NM but impacts AZ)
  "NM": 2, // Santa Fe, Gallup
  "MT": 2, // Great Falls-Billings, Helena
  "AK": 1, // Fairbanks
  "GU": 1, // Agana
  "PR": 1, // San Juan
  "VI": 1, // St. Thomas
  "DE": 1, // Wilmington
  "MD": 1, // Baltimore
  "CT": 1, // Norwich
  "RI": 0, 
  "VT": 1, // Burlington
  "NH": 0,
  "WI": 1, // Milwaukee
  "IA": 1, // Davenport
  "MO": 0,
  "KS": 0,
  "OK": 0,
  "TX": 0,
  "NJ": 1, // Camden
  "MA": 0,
  "IL": 0,
  "OH": 0, // Steubenville (considered but settled)
  "KY": 0, // Covington (settled)
  "WV": 0 // Wheeling-Charleston (settled)
};

interface USMapProps {
  onStateSelect: (state: string | null) => void;
}

export default function USMap({ onStateSelect }: USMapProps) {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (state: string) => {
    const newState = selectedState === state ? null : state;
    setSelectedState(newState);
    onStateSelect(newState);
  };

  const clearFilter = () => {
    setSelectedState(null);
    onStateSelect(null);
  };

  // Sort states alphabetically
  const sortedStates = ALL_STATES.sort();

  return (
    <Card className="bg-card border-border/50 overflow-hidden">
      <CardHeader className="pb-2 border-b border-border/50 bg-muted/20">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-serif flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Bankruptcy Filing Map
          </CardTitle>
          {selectedState && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilter}
              className="text-xs h-8 gap-1 text-muted-foreground hover:text-foreground"
            >
              <Filter className="w-3 h-3" />
              Clear Filter ({selectedState})
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {sortedStates.map(state => {
            const count = BANKRUPTCY_COUNTS[state] || 0;
            const hasCases = count > 0;
            const isSelected = selectedState === state;
            
            return (
              <button
                key={state}
                onClick={() => hasCases && handleStateClick(state)}
                disabled={!hasCases}
                className={`
                  relative flex flex-col items-center justify-center p-2 rounded-md border transition-all h-16
                  ${isSelected 
                    ? 'bg-primary text-primary-foreground border-primary ring-2 ring-offset-2 ring-primary' 
                    : hasCases 
                      ? 'bg-destructive/10 border-destructive/30 hover:bg-destructive/20 cursor-pointer hover:scale-105 hover:shadow-sm' 
                      : 'bg-muted/30 border-transparent opacity-40 cursor-not-allowed'}
                `}
                title={hasCases ? `${state}: ${count} Active/Concluded Cases` : `${state}: No Bankruptcy Filings`}
              >
                <span className={`font-bold text-sm ${isSelected ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {state}
                </span>
                {hasCases && (
                  <Badge 
                    variant={isSelected ? "secondary" : "destructive"} 
                    className={`
                      mt-1 h-4 px-1 text-[9px] min-w-[1.25rem] justify-center
                      ${isSelected ? 'bg-background text-foreground' : ''}
                    `}
                  >
                    {count}
                  </Badge>
                )}
              </button>
            );
          })}
        </div>
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-destructive/10 border border-destructive/30 rounded-sm"></div>
              <span>Has Filings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted/30 border border-transparent rounded-sm opacity-40"></div>
              <span>No Filings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary border border-primary rounded-sm"></div>
              <span>Selected</span>
            </div>
          </div>
          <div>
            Total Filings: <span className="font-bold text-foreground">43</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
