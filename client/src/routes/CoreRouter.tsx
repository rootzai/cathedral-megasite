import React, { Suspense, useEffect } from "react";
import { Route, Switch, useLocation, Redirect } from "wouter";
import TriptychPortal from "@/components/TriptychPortal";

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
const About = React.lazy(() => import("@/pages/About").then(m => ({ default: m.default })));
const Corrections = React.lazy(() => import("@/pages/Corrections").then(m => ({ default: m.default })));
const Dedication = React.lazy(() => import("@/pages/Dedication").then(m => ({ default: m.default })));
const CathedralHome = React.lazy(() => import("@/pages/Home").then(m => ({ default: m.default })));
const TheRecord = React.lazy(() => import("@/pages/TheRecord").then(m => ({ default: m.default })));
const TheConversion = React.lazy(() => import("@/pages/methodology/TheConversion").then(m => ({ default: m.default })));
const PatrickWall = React.lazy(() => import("@/pages/intelligence/PatrickWall").then(m => ({ default: m.default })));
const Tips = React.lazy(() => import("@/pages/Tips").then(m => ({ default: m.default })));
const TheMethod = React.lazy(() => import("@/pages/TheMethod"));
const TheNursery = React.lazy(() => import("@/pages/TheNursery"));
const HumptyCaseStudy = React.lazy(() => import("@/pages/easter/HumptyCaseStudy"));
const ExposePortal = React.lazy(() => import("../pages/expose/Portal"));
const DeiJournoEasterEgg = React.lazy(() => import("../pages/DeiJournoEasterEgg"));
const NotFound = React.lazy(() => import("@/pages/NotFound").then(m => ({ default: m.default })));
const McKeeverCaseStudy = React.lazy(() => import("@/pages/evidence/McKeeverCaseStudy").then(m => ({ default: m.default })));
const WhosWho = React.lazy(() => import("@/pages/WhosWho").then(m => ({ default: m.default })));
const LegalFindings = React.lazy(() => import("@/pages/vault/LegalFindings").then(m => ({ default: m.default })));
const MichaelCritchley = React.lazy(() => import("@/pages/MichaelCritchley").then(m => ({ default: m.default })));
const Prologue = React.lazy(() => import("@/pages/Prologue").then(m => ({ default: m.default })));

const ArchitectureMap = React.lazy(() => import("@/pages/evidence/ArchitectureMap").then(m => ({ default: m.default })));
const GlobalIndex = React.lazy(() => import("@/pages/GlobalIndex").then(m => ({ default: m.default })));

// Modular Routers
import { EndgameRoutes } from "./EndgameRouter";
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
  "/headline-news": "/breach-hub",
  // "/expose" removed — ExposeRouter has an explicit route that handles this
  "/documents": "/evidence/legal",
  "/timeline": "/breach/courtroom",
  "/briefing": "/breach",
  "/ruling": "/breach/hub",
  "/ledger/madman": "/madman",   // Fix: sidebar links here but route is at /madman
  "/methodology": "/method",     // Fix: /method is the real route
  "/lorenzo": "/ledger/lorenzo",
  
  // Legacy / Triptych Fallbacks
  "/endgame/mccarrick": "/ledger/mccarrick",
  "/endgame": "/ledger/mccarrick",
  "/origin/martin": "/ledger/martin",
  "/ruling/breach": "/breach/hub",
  "/ruling/vault": "/vault",
  "/ruling/ledger": "/ledger"
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
      <RedirectHandler />
      <Switch>
        {/* Tier 1: THE HUB (Homepage) */}
        <Route path="/">
          <PageLayout component={EvidenceHub} />
        </Route>
        <Route path="/archive">
          <PageLayout component={RedesignedHome} />
        </Route>
        <Route path="/prologue">
          <PageLayout component={Prologue} />
        </Route>

        <Route path="/index">
          <PageLayout component={GlobalIndex} />
        </Route>
        <Route path="/madman">
          <PageLayout component={React.lazy(() => import("@/pages/endgame/madman/Home"))} />
        </Route>
        <Route path="/madman/the-machine">
          <PageLayout component={React.lazy(() => import("@/pages/endgame/madman/TheMachine"))} />
        </Route>
        <Route path="/madman/exhibit-a">
          <PageLayout component={React.lazy(() => import("@/pages/endgame/madman/ExhibitA"))} />
        </Route>
        <Route path="/madman/exhibit-b">
          <PageLayout component={React.lazy(() => import("@/pages/endgame/madman/ExhibitB"))} />
        </Route>
        <Route path="/madman/exhibit-c">
          <PageLayout component={React.lazy(() => import("@/pages/endgame/madman/ExhibitC"))} />
        </Route>
        <Route path="/madman/exhibit-d">
          <PageLayout component={React.lazy(() => import("@/pages/endgame/madman/ExhibitD"))} />
        </Route>
        <Route path="/madman/exhibit-e">
          <PageLayout component={React.lazy(() => import("@/pages/endgame/madman/ExhibitE"))} />
        </Route>
        <Route path="/madman/exhibit-f">
          <PageLayout component={React.lazy(() => import("@/pages/endgame/madman/ExhibitF"))} />
        </Route>
        <Route path="/vault/epstein-emails">
          <PageLayout component={React.lazy(() => import("@/pages/vault/LathamEmails"))} />
        </Route>
        <Route path="/ledger/reilly/irishman">
          <PageLayout component={React.lazy(() => import("@/pages/endgame/reilly/Irishman"))} />
        </Route>
        <Route path="/expose/press-briefing">
          <PageLayout component={React.lazy(() => import("@/pages/expose/PressBriefing"))} />
        </Route>
        <Route path="/humpty">
          <PageLayout component={HumptyCaseStudy} />
        </Route>

        {/* Tier 2: THE EVIDENCE */}
        <Route path="/evidence">
          <PageLayout component={ArchitectureMap} />
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
        
        {/* Legacy redirect */}
        <Route path="/evidence/politico-report">
          <Redirect to="/evidence" />
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

        {/* Tier 3: THE BREACH (Act 3) */}
        <Route path="/breach/hub">
          <PageLayout component={React.lazy(() => import("@/pages/breach/BreachHub").then(m => ({ default: m.default })))} />
        </Route>
        <Route path="/breach">
          <PageLayout component={React.lazy(() => import("@/pages/expose/WhistleblowerUnmasking").then(m => ({ default: m.default })))} />
        </Route>

        {/* Tier 6: THE METHOD & THE NURSERY */}
        <Route path="/method">
          <PageLayout component={TheMethod} />
        </Route>
        <Route path="/easter">
          <PageLayout component={TheNursery} />
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
        <Route path="/whos-who">
          <PageLayout component={WhosWho} />
        </Route>
        <Route path="/vault">
          <PageLayout component={LegalFindings} />
        </Route>
        <Route path="/ledger/critchley">
          <PageLayout component={MichaelCritchley} theme="endgame" />
        </Route>

        {/* Integrated Modular Routes (Explicit Spread for Switch Stability) */}
        {ExposeRoutes.map(route => route)}
        {EndgameRoutes.map(route => route)}

        {/* Easter Egg / 404 Unmasking */}
        <Route path="/deijourno">
          <DeiJournoEasterEgg />
        </Route>


        <Route>
          <PageLayout component={NotFound} />
        </Route>
      </Switch>
    </Suspense>
  );
}
