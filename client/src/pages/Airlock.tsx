import React from "react";
import { useLocation } from "wouter";
import TriptychPortal from "@/components/TriptychPortal";
import { SEO } from "@/components/SEO";

export default function Airlock() {
    const [_, setLocation] = useLocation();
    
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            <SEO 
                title="The Cathedral | Airlock" 
                description="Initialize the protocol to enter the maproom." 
            />
            
            <TriptychPortal onComplete={() => setLocation('/maproom')} />
        </div>
    );
}
