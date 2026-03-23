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
import EvidenceHub from "./pages/evidence/EvidenceHub";
const BreachHub = React.lazy(() => import("./pages/breach/BreachHub"));
const TheyKnew = React.lazy(() => import("./pages/TheyKnew"));
const OpinionsHub = React.lazy(() => import("./pages/opinions/Hub"));
const Noonan = React.lazy(() => import("./pages/opinions/Noonan"));
const Cannon = React.lazy(() => import("./pages/opinions/Cannon"));
const Matthews = React.lazy(() => import("./pages/opinions/Matthews"));
const Stephens = React.lazy(() => import("./pages/opinions/Stephens"));
const NetworkView = React.lazy(() => import("./pages/NetworkView"));


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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#0a0a0c] text-[#8b1a1a] animate-pulse uppercase tracking-[0.4em] font-black text-2xl">Accessing Systemic Records...</div>}>
      <Switch>
        {/* Tier 2: THE EVIDENCE */}
        <Route path="/evidence">
          <PageLayout component={EvidenceHub} />
        </Route>

        {/* Tier 1: THE SHIELD (Homepage) */}
        <Route path="/">
          <PageLayout component={RedesignedHome} />
        </Route>

        {/* Tier 3: THE BREACH (BreachHub landing — sub-routes handled by ExposeRoutes below) */}
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

        {/* OPINIONS & LEDGER */}
        <Route path="/opinion">
          <PageLayout component={OpinionsHub} />
        </Route>
        <Route path="/opinion/noonan">
          <PageLayout component={Noonan} />
        </Route>
        <Route path="/opinion/cannon">
          <PageLayout component={Cannon} />
        </Route>
        <Route path="/opinion/matthews">
          <PageLayout component={Matthews} />
        </Route>
        <Route path="/opinion/stephens">
          <PageLayout component={Stephens} />
        </Route>
        <Route path="/ledger">
          <PageLayout component={TheyKnew} />
        </Route>
        <Route path="/network">
          <PageLayout component={NetworkView} />
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
