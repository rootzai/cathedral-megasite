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
          <ScrollManager />
          <div className="flex flex-col min-h-screen bg-[#0a0a0c]">
            <PrimaryNavigation />
            <LiveStatusBar />
            <CoreRouter />
            {/* Global Survivor Resources Floating Link */}
            <a
              href="https://www.rainn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#8b1a1a]/90 hover:bg-[#8b1a1a] text-white px-4 py-3 rounded-full font-mono text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(139,26,26,0.5)] transition-all hover:scale-105 border border-white/10 backdrop-blur-sm"
            >
              <Info size={16} />
              Survivor Resources
            </a>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
