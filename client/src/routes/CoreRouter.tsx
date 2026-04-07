import React, { Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";

// Lazy-loaded Pages
const RedesignedHome = React.lazy(() => import("@/pages/RedesignedHome"));
const EvidenceHub = React.lazy(() => import("@/pages/evidence/EvidenceHub"));
const BreachHub = React.lazy(() => import("@/pages/breach/BreachHub"));
const TheyKnew = React.lazy(() => import("@/pages/TheyKnew"));
const Ledger = React.lazy(() => import("@/pages/Ledger"));
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
const Tips = React.lazy(() => import("@/pages/Tips"));
const TheMethod = React.lazy(() => import("@/pages/TheMethod"));
const TheNursery = React.lazy(() => import("@/pages/TheNursery"));
const HumptyCaseStudy = React.lazy(() => import("@/pages/easter/HumptyCaseStudy"));
const ExposePortal = React.lazy(() => import("../pages/expose/Portal"));
const DeiJournoEasterEgg = React.lazy(() => import("../pages/DeiJournoEasterEgg"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));
const McKeeverCaseStudy = React.lazy(() => import("@/pages/evidence/McKeeverCaseStudy"));

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
  "/cathedral": "/evidence",
  "/shield": "/",
  "/headline-news": "/breach",
  "/expose": "/evidence/legal",
  "/documents": "/vault/documents",
  "/timeline": "/breach/courtroom",
  "/briefing": "/breach",
  "/ruling": "/breach",
  "/cathedral-bk": "/vault/bankruptcy",
  "/method": "/methodology"
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

        {/* Tier 2: THE EVIDENCE */}
        <Route path="/evidence">
          <PageLayout component={EvidenceHub} />
        </Route>
        <Route path="/evidence/origin">
          <PageLayout component={EvidenceHub} />
        </Route>
        <Route path="/evidence/machine">
          <PageLayout component={EvidenceHub} />
        </Route>
        <Route path="/evidence/board">
          <PageLayout component={EvidenceHub} />
        </Route>
        <Route path="/evidence/legal">
          <PageLayout component={EvidenceHub} />
        </Route>
        <Route path="/evidence/present">
          <PageLayout component={EvidenceHub} />
        </Route>
        <Route path="/evidence/victims">
          <PageLayout component={EvidenceHub} />
        </Route>
        <Route path="/evidence/mckeever">
          <PageLayout component={McKeeverCaseStudy} />
        </Route>

        {/* Tier 3: THE BREACH */}
        <Route path="/breach">
          <PageLayout component={BreachHub} />
        </Route>

        {/* Tier 6: THE METHOD & THE NURSERY */}
        <Route path="/method">
          <PageLayout component={TheMethod} />
        </Route>
        <Route path="/easter">
          <PageLayout component={TheNursery} />
        </Route>
        <Route path="/easter/case-study">
          <PageLayout component={HumptyCaseStudy} />
        </Route>

        {/* ACADEMY & ABOUT */}
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
        <Route path="/tips">
          <PageLayout component={Tips} />
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
          <PageLayout component={Ledger} />
        </Route>

        {/* Integrated Modular Routes (Explicit Spread for Switch Stability) */}
        {ExposeRoutes.map(route => route)}
        {EndgameRoutes.map(route => route)}
        {VaultRoutes.map(route => route)}

        {/* Easter Egg / 404 Unmasking */}
        <Route path="/deijourno">
            <DeiJournoEasterEgg />
        </Route>

        {/* Catch-all and Redirects */}
        <Route path="/governance">
            <RedirectHandler /> {/* Will map to /shield via REDIRECT_MAP fallback if not handled */}
        </Route>
        <Route>
          <PageLayout component={NotFound} />
        </Route>
      </Switch>
    </Suspense>
  );
}
