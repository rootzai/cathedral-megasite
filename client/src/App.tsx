import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import MegaNavigation from "./components/MegaNavigation";
import { ThemeProvider } from "./contexts/ThemeContext";

// Cathedral (Sodom Hall) Pages
import About from "./pages/About";
import Documents from "./pages/Documents";
import CathedralHome from "./pages/Home";

// Endgame - McCarrick Pages
import McCarrickAnalysis from "./pages/endgame/mccarrick/Analysis";
import McCarrickBackground from "./pages/endgame/mccarrick/Background";
import McCarrickConclusion from "./pages/endgame/mccarrick/Conclusion";
import McCarrickDownfall from "./pages/endgame/mccarrick/Downfall";
import McCarrickHome from "./pages/endgame/mccarrick/Home";
import McCarrickLegal from "./pages/endgame/mccarrick/Legal";
import McCarrickMechanisms from "./pages/endgame/mccarrick/Mechanisms";
import McCarrickNetwork from "./pages/endgame/mccarrick/Network";
import McCarrickProfile from "./pages/endgame/mccarrick/Profile";
import McCarrickResponses from "./pages/endgame/mccarrick/Responses";
import McCarrickSetonHall from "./pages/endgame/mccarrick/SetonHall";
import McCarrickSurvivors from "./pages/endgame/mccarrick/Survivors";
import McCarrickTheReckoning from "./pages/endgame/mccarrick/TheReckoning";
import McCarrickTheRegime from "./pages/endgame/mccarrick/TheRegime";
import McCarrickTheRise from "./pages/endgame/mccarrick/TheRise";
import McCarrickWarnings from "./pages/endgame/mccarrick/Warnings";

// Endgame - Checchio Pages
import CheckchioAscent from "./pages/endgame/checchio/Ascent";
import CheckchioControversies from "./pages/endgame/checchio/Controversies";
import CheckchioFormation from "./pages/endgame/checchio/Formation";
import CheckchioGovernance from "./pages/endgame/checchio/Governance";
import CheckchioHome from "./pages/endgame/checchio/Home";
import CheckchioPurge from "./pages/endgame/checchio/Purge";
import CheckchioStatus from "./pages/endgame/checchio/Status";

// Endgame Portal
import EndgamePortal from "./pages/endgame/Portal";

// Academy Pages
import AcademyCardinalateAndMcCarrick from "./pages/academy/CardinalateAndMcCarrick";
import AcademyClergyMetrics from "./pages/academy/ClergyMetrics";
import AcademyDiocesanFinance from "./pages/academy/DiocesanFinance";
import AcademyFinancialModel from "./pages/academy/FinancialOperatingModel";
import AcademyGlobalChurchMetrics from "./pages/academy/GlobalChurchMetrics";
import AcademyGlobalGrowth from "./pages/academy/GlobalGrowth";
import AcademyHome from "./pages/academy/Home";
import AcademyInstitutionalStructure from "./pages/academy/InstitutionalStructure";
import AcademyMcCarrickMechanism from "./pages/academy/McCarrickMechanism";
import AcademySacramentalData from "./pages/academy/SacramentalData";
import AcademyStakeholderAnalysis from "./pages/academy/StakeholderAnalysis";
import AcademyTheCardinalate from "./pages/academy/TheCardinalate";
import AcademyTheCorporateVeil from "./pages/academy/TheCorporateVeil";

// Landing/Hub Page
import LandingPage from "./pages/LandingPage";

// Ruling Pages
import RulingAnalysis from "./pages/ruling/Analysis";
import BeachHouse from "./pages/ruling/BeachHouse";
import CorporateVeil from "./pages/ruling/CorporateVeil";
import DirtyDozen from "./pages/ruling/DirtyDozen";
import RulingEvidence from "./pages/ruling/Evidence";
import RulingHome from "./pages/ruling/Home";
import Reilly from "./pages/ruling/Reilly";
import SanctionPlea from "./pages/ruling/SanctionPlea";
import SheeranMcCarrick from "./pages/ruling/SheeranMcCarrick";
import RulingTimeline from "./pages/ruling/Timeline";
import TobinHypocrisy from "./pages/ruling/TobinHypocrisy";

import "./index.css";

function PageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <>
      <MegaNavigation />
      <Component />
    </>
  );
}

function Router() {
  return (
    <Switch>
      {/* Landing Page - Public Hub */}
      <Route path={"/"}>
        <PageLayout component={LandingPage} />
      </Route>

      {/* Cathedral Routes */}
      <Route path={"/cathedral"}>
        <PageLayout component={CathedralHome} />
      </Route>
      <Route path={"/about"}>
        <PageLayout component={About} />
      </Route>
      <Route path={"/documents"}>
        <PageLayout component={Documents} />
      </Route>

      {/* Endgame Routes */}
      <Route path={"/endgame"}>
        <PageLayout component={EndgamePortal} />
      </Route>

      {/* McCarrick Sub-pages */}
      <Route path={"/endgame/mccarrick"}>
        <PageLayout component={McCarrickHome} />
      </Route>
      <Route path={"/endgame/mccarrick/background"}>
        <PageLayout component={McCarrickBackground} />
      </Route>
      <Route path={"/endgame/mccarrick/profile"}>
        <PageLayout component={McCarrickProfile} />
      </Route>
      <Route path={"/endgame/mccarrick/the-rise"}>
        <PageLayout component={McCarrickTheRise} />
      </Route>
      <Route path={"/endgame/mccarrick/the-regime"}>
        <PageLayout component={McCarrickTheRegime} />
      </Route>
      <Route path={"/endgame/mccarrick/network"}>
        <PageLayout component={McCarrickNetwork} />
      </Route>
      <Route path={"/endgame/mccarrick/warnings"}>
        <PageLayout component={McCarrickWarnings} />
      </Route>
      <Route path={"/endgame/mccarrick/mechanisms"}>
        <PageLayout component={McCarrickMechanisms} />
      </Route>
      <Route path={"/endgame/mccarrick/seton-hall"}>
        <PageLayout component={McCarrickSetonHall} />
      </Route>
      <Route path={"/endgame/mccarrick/downfall"}>
        <PageLayout component={McCarrickDownfall} />
      </Route>
      <Route path={"/endgame/mccarrick/the-reckoning"}>
        <PageLayout component={McCarrickTheReckoning} />
      </Route>
      <Route path={"/endgame/mccarrick/legal"}>
        <PageLayout component={McCarrickLegal} />
      </Route>
      <Route path={"/endgame/mccarrick/survivors"}>
        <PageLayout component={McCarrickSurvivors} />
      </Route>
      <Route path={"/endgame/mccarrick/responses"}>
        <PageLayout component={McCarrickResponses} />
      </Route>
      <Route path={"/endgame/mccarrick/analysis"}>
        <PageLayout component={McCarrickAnalysis} />
      </Route>
      <Route path={"/endgame/mccarrick/conclusion"}>
        <PageLayout component={McCarrickConclusion} />
      </Route>

      {/* Checchio Sub-pages */}
      <Route path={"/endgame/checchio"}>
        <PageLayout component={CheckchioHome} />
      </Route>
      <Route path={"/endgame/checchio/formation"}>
        <PageLayout component={CheckchioFormation} />
      </Route>
      <Route path={"/endgame/checchio/ascent"}>
        <PageLayout component={CheckchioAscent} />
      </Route>
      <Route path={"/endgame/checchio/governance"}>
        <PageLayout component={CheckchioGovernance} />
      </Route>
      <Route path={"/endgame/checchio/controversies"}>
        <PageLayout component={CheckchioControversies} />
      </Route>
      <Route path={"/endgame/checchio/purge"}>
        <PageLayout component={CheckchioPurge} />
      </Route>
      <Route path={"/endgame/checchio/status"}>
        <PageLayout component={CheckchioStatus} />
      </Route>

      {/* Academy Routes */}
      <Route path={"/academy"}>
        <PageLayout component={AcademyHome} />
      </Route>
      <Route path={"/academy/global-growth"}>
        <PageLayout component={AcademyGlobalGrowth} />
      </Route>
      <Route path={"/academy/clergy-metrics"}>
        <PageLayout component={AcademyClergyMetrics} />
      </Route>
      <Route path={"/academy/sacramental-data"}>
        <PageLayout component={AcademySacramentalData} />
      </Route>
      <Route path={"/academy/global-metrics"}>
        <PageLayout component={AcademyGlobalChurchMetrics} />
      </Route>
      <Route path={"/academy/institutional-structure"}>
        <PageLayout component={AcademyInstitutionalStructure} />
      </Route>
      <Route path={"/academy/diocesan-finance"}>
        <PageLayout component={AcademyDiocesanFinance} />
      </Route>
      <Route path={"/academy/financial-model"}>
        <PageLayout component={AcademyFinancialModel} />
      </Route>
      <Route path={"/academy/stakeholder-analysis"}>
        <PageLayout component={AcademyStakeholderAnalysis} />
      </Route>
      <Route path={"/academy/the-cardinalate"}>
        <PageLayout component={AcademyTheCardinalate} />
      </Route>
      <Route path={"/academy/cardinalate-mccarrick"}>
        <PageLayout component={AcademyCardinalateAndMcCarrick} />
      </Route>
      <Route path={"/academy/corporate-veil"}>
        <PageLayout component={AcademyTheCorporateVeil} />
      </Route>
      <Route path={"/academy/mccarrick-mechanism"}>
        <PageLayout component={AcademyMcCarrickMechanism} />
      </Route>

      {/* Ruling Routes */}
      <Route path={"/ruling"}>
        <PageLayout component={RulingHome} />
      </Route>
      <Route path={"/ruling/timeline"}>
        <PageLayout component={RulingTimeline} />
      </Route>
      <Route path={"/ruling/evidence"}>
        <PageLayout component={RulingEvidence} />
      </Route>
      <Route path={"/ruling/analysis"}>
        <PageLayout component={RulingAnalysis} />
      </Route>
      <Route path={"/ruling/dirty-dozen"}>
        <PageLayout component={DirtyDozen} />
      </Route>
      <Route path={"/ruling/tobin-hypocrisy"}>
        <PageLayout component={TobinHypocrisy} />
      </Route>
      <Route path={"/ruling/reilly"}>
        <PageLayout component={Reilly} />
      </Route>
      <Route path={"/ruling/beach-house"}>
        <PageLayout component={BeachHouse} />
      </Route>
      <Route path={"/ruling/sheeran-mccarrick"}>
        <PageLayout component={SheeranMcCarrick} />
      </Route>
      <Route path={"/ruling/sanction-plea"}>
        <PageLayout component={SanctionPlea} />
      </Route>
      <Route path={"/ruling/corporate-veil"}>
        <PageLayout component={CorporateVeil} />
      </Route>

      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
