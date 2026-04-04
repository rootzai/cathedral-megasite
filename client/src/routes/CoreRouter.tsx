import React, { Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";

// Lazy-loaded Pages
const RedesignedHome = React.lazy(() => import("@/pages/RedesignedHome"));
const EvidenceHub = React.lazy(() => import("@/pages/evidence/EvidenceHub"));
const BreachHub = React.lazy(() => import("@/pages/breach/BreachHub"));
const TheyKnew = React.lazy(() => import("@/pages/TheyKnew"));
const OpinionsHub = React.lazy(() => import("@/pages/opinions/Hub"));
const Noonan = React.lazy(() => import("@/pages/opinions/Noonan"));
const Cannon = React.lazy(() => import("@/pages/opinions/Cannon"));
const Matthews = React.lazy(() => import("@/pages/opinions/Matthews"));
const Stephens = React.lazy(() => import("@/pages/opinions/Stephens"));
const About = React.lazy(() => import("@/pages/About"));
const Corrections = React.lazy(() => import("@/pages/Corrections"));
const Dedication = React.lazy(() => import("@/pages/Dedication"));
const CathedralHome = React.lazy(() => import("@/pages/Home"));
const TheRecord = React.lazy(() => import("@/pages/TheRecord"));
const TheConversion = React.lazy(() => import("@/pages/methodology/TheConversion"));
const PatrickWall = React.lazy(() => import("@/pages/intelligence/PatrickWall"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

// Modular Routers
import { EndgameRoutes } from "./EndgameRouter";
import { VaultRoutes } from "./VaultRouter";
import { ExposeRoutes } from "./ExposeRouter";

function PageLayout({ component: Component, theme = "dark" }: { component: React.ComponentType; theme?: string }) {
  return (
    <div className={`theme-${theme} min-h-screen bg-background text-foreground transition-colors duration-500`}>
      <Component />
    </div>
  );
}

const REDIRECT_MAP: Record<string, string> = {
  "/cathedral": "/shield",
  "/ledger": "/shield",
  "/evidence": "/shield",
  "/headline-news": "/breach"
};

function RedirectHandler() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (REDIRECT_MAP[location]) {
      setLocation(REDIRECT_MAP[location]);
      return;
    }
    for (const [key, value] of Object.entries(REDIRECT_MAP)) {
      if (location.startsWith(key)) {
        setLocation(value);
        return;
      }
    }
  }, [location, setLocation]);

  return null;
}

export function CoreRouter() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0c] text-[#8b1a1a] animate-pulse uppercase tracking-[0.2em] font-bold text-xs">
        Unsealing Archives...
      </div>
    }>
      <Switch>
        {/* Tier 1: THE HUB (Homepage) */}
        <Route path="/">
          <PageLayout component={RedesignedHome} />
        </Route>

        {/* Tier 2: THE SHIELD */}
        <Route path="/shield">
          <PageLayout component={EvidenceHub} />
        </Route>

        {/* Tier 3: THE BREACH */}
        <Route path="/breach">
          <PageLayout component={BreachHub} />
        </Route>

        {/* Tier 4: THE CONVERSION */}
        <Route path="/conversion">
          <PageLayout component={TheConversion} />
        </Route>

        {/* Tier 5: THE POWER AXIS (INTELLIGENCE) */}
        <Route path="/power-axis">
          <PageLayout component={PatrickWall} />
        </Route>

        {/* ACADEMY & ABOUT */}
        <Route path="/academy">
          <PageLayout component={CathedralHome} />
        </Route>
        <Route path="/about">
          <PageLayout component={About} />
        </Route>
        <Route path="/dedication">
          <PageLayout component={Dedication} />
        </Route>
        <Route path="/the-record">
          <PageLayout component={TheRecord} />
        </Route>
        <Route path="/corrections">
          <PageLayout component={Corrections} />
        </Route>

        {/* THE REWRITE (OPINIONS) */}
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

        {/* Integrated Modular Routes */}
        {ExposeRoutes}
        {EndgameRoutes}
        {VaultRoutes}

        {/* Catch-all and Redirects */}
        <Route>
          <RedirectHandler />
          <PageLayout component={NotFound} />
        </Route>
      </Switch>
    </Suspense>
  );
}
