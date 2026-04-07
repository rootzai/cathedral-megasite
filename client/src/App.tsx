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

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <TriptychPortal />
          <Toaster />
          <ScrollManager />
          <div className="flex flex-col min-h-screen bg-[#0a0a0c]">
            <PrimaryNavigation />
            <LiveStatusBar />
            <div className="flex-grow">
              <CoreRouter />
            </div>
            <GlobalFooter />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
