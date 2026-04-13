import React from "react";
import MemoryPalaceCanvas from "@/components/MemoryPalaceCanvas";
import MemoryPalaceHUD from "@/components/evidence/MemoryPalaceHUD";
import { SEO } from "@/components/SEO";

export default function JumpHub() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            <SEO 
                title="The Jump Hub | Cathedral Platform" 
                description="A massive, interactive 3D WebGL data representation of the Cathedral Megasite evidence." 
            />
            {/* The Orchestrated Layers */}
            <MemoryPalaceCanvas />
            <MemoryPalaceHUD />
        </div>
    );
}
