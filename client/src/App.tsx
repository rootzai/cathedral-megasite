import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import PrimaryNavigation from "./components/PrimaryNavigation";
import LiveStatusBar from "./components/LiveStatusBar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CoreRouter } from "./routes/CoreRouter";

/**
 * CATHEDRAL MEGASITE: THE TEMPLE (App.tsx)
 * v5.0 Hardened Architecture
 * 
 * This is the clean, stable entry point.
 * All routing logic is centralized in /routes/CoreRouter.tsx.
 * All forensic data is managed in /lib/registry.ts.
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen bg-[#0a0a0c]">
            <PrimaryNavigation />
            <LiveStatusBar />
            <CoreRouter />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
