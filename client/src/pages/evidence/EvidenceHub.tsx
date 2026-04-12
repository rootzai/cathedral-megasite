import React, { useState } from "react";
import MemoryPalaceCanvas from "@/components/MemoryPalaceCanvas";
import TriptychPortal from "@/components/TriptychPortal";
import { SEO } from "@/components/SEO";
import OnboardingOverlay from "@/components/evidence/OnboardingOverlay";
import MemoryPalaceHUD from "@/components/evidence/MemoryPalaceHUD";

export default function EvidenceHub() {
    const [isOnboardingActive, setIsOnboardingActive] = useState(true);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            <SEO 
                title="The Architecture of Recall" 
                description="A massive, interactive 3D WebGL data representation of the Cathedral Megasite evidence." 
            />
            
            <TriptychPortal onComplete={() => {}} />

            {/* The Orchestrated Layers */}
            <MemoryPalaceCanvas />
            
            {/* HUD is HIDDEN while the cinematic/onboarding welcome is running to cleanly focus attention */}
            {!isOnboardingActive && <MemoryPalaceHUD />}
            
            <OnboardingOverlay 
                onDismiss={() => setIsOnboardingActive(false)} 
                onStart={() => setIsOnboardingActive(true)} 
            />
            
        </div>
    );
}
