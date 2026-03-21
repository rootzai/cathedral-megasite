import React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

import { HomeHero } from "./home/components/HomeHero";
import { HomeNavigation } from "./home/components/HomeNavigation";
import { HomeActs } from "./home/components/HomeActs";
import { HomeMedia } from "./home/components/HomeMedia";
import { HomeEpilogue } from "./home/components/HomeEpilogue";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-zinc-900">
            <HomeHero />
            <main>
                <HomeActs />
                <HomeMedia />
                <HomeEpilogue />
            </main>
        </div>
    );
}
