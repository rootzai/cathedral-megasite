import React, { useState } from "react";
import { useLocation } from "wouter";
import TriptychPortal from "@/components/TriptychPortal";
import { SEO } from "@/components/SEO";
import OnboardingOverlay from "@/components/evidence/OnboardingOverlay";
import MemoryPalaceCanvas from "@/components/MemoryPalaceCanvas";

export default function Airlock() {
    const [_, setLocation] = useLocation();
    const [isVanguardActive, setIsVanguardActive] = useState(true);
    
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            <SEO 
                title="The Cathedral | Airlock" 
                description="Initialize the protocol to enter the maproom." 
            />
            
            {/* The background ambient toy to make it look cool before porting */}
            {isVanguardActive && <MemoryPalaceCanvas />}

            {isVanguardActive ? (
                <OnboardingOverlay 
                    onDismiss={() => setIsVanguardActive(false)} 
                />
            ) : (
                <TriptychPortal onComplete={() => setLocation('/maproom')} />
            )}
        </div>
    );
}
