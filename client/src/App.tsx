import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import React, { Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PrimaryNavigation from "./components/PrimaryNavigation";
import { ThemeProvider } from "./contexts/ThemeContext";

// New Redesigned Pages
const RedesignedHome = React.lazy(() => import("./pages/RedesignedHome"));
const EvidenceHub = React.lazy(() => import("./pages/evidence/EvidenceHub"));
const BreachHub = React.lazy(() => import("./pages/breach/BreachHub"));

// Legacy Core Pages (Will be mapped to folders)
const About = React.lazy(() => import("./pages/About"));
const Corrections = React.lazy(() => import("./pages/Corrections"));
const CathedralHome = React.lazy(() => import("./pages/Home"));

// Modular Routes (To be integrated into IA)
import { EndgameRoutes } from "./routes/EndgameRouter";
import { VaultRoutes } from "./routes/VaultRouter";
import { ExposeRoutes } from "./routes/ExposeRouter";

function PageLayout({ component: Component, theme = "dark" }: { component: React.ComponentType; theme?: string }) {
  return (
    <div className={`theme-${theme} min-h-screen bg-background text-foreground transition-colors duration-500`}>
      <Component />
    </div>
  );
}

const REDIRECT_MAP: Record<string, string> = {
  "/cathedral": "/evidence",
  "/endgame": "/evidence",
  "/expose": "/evidence",
  "/vault": "/evidence",
  "/ruling": "/evidence/ring-1", // Rule 1: Inner Sanctum
  "/ledger": "/evidence",
  "/headline-news": "/breach"
};

function RedirectHandler() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Check for exact matches
    if (REDIRECT_MAP[location]) {
      setLocation(REDIRECT_MAP[location]);
      return;
    }

    // Check for pattern matches (e.g., /ledger/* -> /evidence)
    for (const [key, value] of Object.entries(REDIRECT_MAP)) {
      if (location.startsWith(key)) {
        setLocation(value);
        return;
      }
    }
  }, [location, setLocation]);

  return null;
}

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#0a0a0c] text-[#8b1a1a] animate-pulse uppercase tracking-[0.2em] font-bold">Unsealing Archives...</div>}>
      <RedirectHandler />
      <Switch>
        {/* Tier 1: THE SHIELD (Homepage) */}
        <Route path="/">
          <PageLayout component={RedesignedHome} />
        </Route>

        {/* Tier 2: THE EVIDENCE */}
        <Route path="/evidence">
          <PageLayout component={EvidenceHub} />
        </Route>
        <Route path="/evidence/ring-:id">
          {/* This would ideally route to specific ring pages, but for now acts as Evidence Hub */}
          <PageLayout component={EvidenceHub} />
        </Route>

        {/* Tier 3: THE BREACH */}
        <Route path="/breach">
          <PageLayout component={BreachHub} />
        </Route>

        {/* ACADEMY & ABOUT */}
        <Route path="/academy">
          <PageLayout component={CathedralHome} />
        </Route>
        <Route path="/about">
          <PageLayout component={About} />
        </Route>
        <Route path="/corrections">
          <PageLayout component={Corrections} />
        </Route>

        {/* Integrated Modular Routes (For deep linking until physical migration) */}
        {ExposeRoutes}
        {EndgameRoutes}
        {VaultRoutes}

        {/* Catch-all and Redirects */}
        <Route>
          <RedirectHandler />
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen bg-[#0a0a0c]">
            <PrimaryNavigation />
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
