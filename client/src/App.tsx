import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import React, { Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import MegaNavigation from "./components/MegaNavigation";
import { ThemeProvider } from "./contexts/ThemeContext";

// Modular Routes
import { EndgameRoutes } from "./routes/EndgameRouter";
import { VaultRoutes } from "./routes/VaultRouter";
import { ExposeRoutes } from "./routes/ExposeRouter";

// Cathedral (Sodom Hall) Pages
const About = React.lazy(() => import("./pages/About"));
const Dedication = React.lazy(() => import("./pages/Dedication"));
const Documents = React.lazy(() => import("./pages/Documents"));
const CathedralHome = React.lazy(() => import("./pages/Home"));
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const TheyKnew = React.lazy(() => import("./pages/TheyKnew"));
const Corrections = React.lazy(() => import("./pages/Corrections"));
const InstitutionalParallels = React.lazy(() => import("./pages/InstitutionalParallels"));

// Ruling Pages
const RulingAnalysis = React.lazy(() => import("./pages/ruling/Analysis"));
const BeachHouse = React.lazy(() => import("./pages/ruling/BeachHouse"));
const CorporateVeil = React.lazy(() => import("./pages/ruling/CorporateVeil"));
const DirtyDozen = React.lazy(() => import("./pages/ruling/DirtyDozen"));
const RulingEvidence = React.lazy(() => import("./pages/ruling/Evidence"));
const RulingHome = React.lazy(() => import("./pages/ruling/Home"));
const Reilly = React.lazy(() => import("./pages/ruling/Reilly"));
const SanctionPlea = React.lazy(() => import("./pages/ruling/SanctionPlea"));
const SheeranMcCarrick = React.lazy(() => import("./pages/ruling/SheeranMcCarrick"));
const RulingTimeline = React.lazy(() => import("./pages/ruling/Timeline"));
const TobinHypocrisy = React.lazy(() => import("./pages/ruling/TobinHypocrisy"));

// Opinions Pages
const OpinionsHub = React.lazy(() => import("./pages/opinions/Hub"));
const NoonanEssay = React.lazy(() => import("./pages/opinions/Noonan"));
const CannonEssay = React.lazy(() => import("./pages/opinions/Cannon"));
const MatthewsEssay = React.lazy(() => import("./pages/opinions/Matthews"));
const StephensEssay = React.lazy(() => import("./pages/opinions/Stephens"));

// Epstein Pages
import EpsteinLayout from "./components/EpsteinLayout";
const EpsteinHome = React.lazy(() => import("./pages/epstein/Home"));

// Section Layouts
import RulingLayout from "./components/Layout";

import "./index.css";

function PageLayout({ component: Component, theme = "theme-cathedral" }: { component: React.ComponentType; theme?: string }) {
  return (
    <div className={`${theme} min-h-screen bg-background text-foreground transition-colors duration-500`}>
      <Component />
    </div>
  );
}

function RulingPageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <div className="theme-ruling min-h-screen bg-background text-foreground transition-colors duration-500">
      <RulingLayout>
        <Component />
      </RulingLayout>
    </div>
  );
}

function EpsteinPageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <div className="theme-epstein min-h-screen bg-background text-foreground transition-colors duration-500">
      <EpsteinLayout>
        <Component />
      </EpsteinLayout>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background text-primary animate-pulse">Entering the Archives...</div>}>
      <Switch>
        {/* Landing Page - Public Hub */}
        <Route path={"/"}><PageLayout component={LandingPage} /></Route>

        {ExposeRoutes}
        {EndgameRoutes}
        {VaultRoutes}

        {/* -------------------------------------------
            THE RULING
        ------------------------------------------- */}
        <Route path={"/ruling"}><RulingPageLayout component={RulingHome} /></Route>
        <Route path={"/ruling/evidence"}><RulingPageLayout component={RulingEvidence} /></Route>
        <Route path={"/ruling/analysis"}><RulingPageLayout component={RulingAnalysis} /></Route>
        <Route path={"/ruling/corporate-veil"}><RulingPageLayout component={CorporateVeil} /></Route>
        <Route path={"/ruling/dirty-dozen"}><RulingPageLayout component={DirtyDozen} /></Route>
        <Route path={"/ruling/reilly"}><RulingPageLayout component={Reilly} /></Route>
        <Route path={"/ruling/sanction-plea"}><RulingPageLayout component={SanctionPlea} /></Route>
        <Route path={"/ruling/sheeran-mccarrick"}><RulingPageLayout component={SheeranMcCarrick} /></Route>
        <Route path={"/ruling/tobin-hypocrisy"}><RulingPageLayout component={TobinHypocrisy} /></Route>

        {/* -------------------------------------------
            THE OPINION SECTION (Act 5)
        ------------------------------------------- */}
        <Route path={"/opinion"}><PageLayout component={OpinionsHub} theme="theme-opinion" /></Route>
        <Route path={"/opinion/noonan"}><PageLayout component={NoonanEssay} theme="theme-opinion" /></Route>
        <Route path={"/opinion/cannon"}><PageLayout component={CannonEssay} theme="theme-opinion" /></Route>
        <Route path={"/opinion/matthews"}><PageLayout component={MatthewsEssay} theme="theme-opinion" /></Route>
        <Route path={"/opinion/stephens"}><PageLayout component={StephensEssay} theme="theme-opinion" /></Route>

        {/* -------------------------------------------
            EPSTEIN
        ------------------------------------------- */}
        <Route path={"/epstein"}><EpsteinPageLayout component={EpsteinHome} /></Route>

        {/* -------------------------------------------
            STRATEGIC PAGES
        ------------------------------------------- */}
        <Route path={"/corrections"}><Corrections /></Route>
        <Route path={"/about"}><PageLayout component={About} /></Route>
        <Route path={"/parallels"}><InstitutionalParallels /></Route>

        {/* Home fallback routes */}
        <Route path={"/cathedral"}><PageLayout component={CathedralHome} /></Route>
        <Route path={"/cathedral*"}><PageLayout component={CathedralHome} /></Route>

        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense >
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <MegaNavigation />
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
