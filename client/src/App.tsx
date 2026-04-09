import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import React from "react";
import { Info } from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import PrimaryNavigation from "./components/PrimaryNavigation";
import LiveStatusBar from "./components/LiveStatusBar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CoreRouter } from "./routes/CoreRouter";
import { ScrollManager } from "./components/ScrollManager";
import TriptychPortal from "./components/TriptychPortal";
import { GlobalFooter } from "./components/GlobalFooter";

import { useLocation } from "wouter";

function App() {
  const [location] = useLocation();
  const isFullScreenLayout = 
    location === "/" || 
    location === "/prologue" || 
    location === "/axis" || 
    (location.startsWith("/ledger/") && location !== "/ledger");
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <TriptychPortal />
          <Toaster />
          <ScrollManager />
          <div className="flex flex-col min-h-screen bg-[#0a0a0c]">
            {!isFullScreenLayout && <PrimaryNavigation />}
            {!isFullScreenLayout && <LiveStatusBar />}
            <div className="flex-grow">
              <CoreRouter />
            </div>
            {!isFullScreenLayout && <GlobalFooter />}
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
