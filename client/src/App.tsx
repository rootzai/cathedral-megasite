import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import MegaNavigation from "./components/MegaNavigation";

// Cathedral (Sodom Hall) Pages
import CathedralHome from "./pages/Home";
import About from "./pages/About";
import Documents from "./pages/Documents";
import Login from "./pages/Login";

// Endgame - McCarrick Pages
import McCarrickHome from "./pages/endgame/mccarrick/Home";
import McCarrickBackground from "./pages/endgame/mccarrick/Background";
import McCarrickProfile from "./pages/endgame/mccarrick/Profile";
import McCarrickTheRise from "./pages/endgame/mccarrick/TheRise";
import McCarrickTheRegime from "./pages/endgame/mccarrick/TheRegime";
import McCarrickNetwork from "./pages/endgame/mccarrick/Network";
import McCarrickWarnings from "./pages/endgame/mccarrick/Warnings";
import McCarrickMechanisms from "./pages/endgame/mccarrick/Mechanisms";
import McCarrickSetonHall from "./pages/endgame/mccarrick/SetonHall";
import McCarrickDownfall from "./pages/endgame/mccarrick/Downfall";
import McCarrickTheReckoning from "./pages/endgame/mccarrick/TheReckoning";
import McCarrickLegal from "./pages/endgame/mccarrick/Legal";
import McCarrickSurvivors from "./pages/endgame/mccarrick/Survivors";
import McCarrickResponses from "./pages/endgame/mccarrick/Responses";
import McCarrickAnalysis from "./pages/endgame/mccarrick/Analysis";
import McCarrickConclusion from "./pages/endgame/mccarrick/Conclusion";

// Endgame - Checchio Pages
import CheckchioHome from "./pages/endgame/checchio/Home";
import CheckchioFormation from "./pages/endgame/checchio/Formation";
import CheckchioAscent from "./pages/endgame/checchio/Ascent";
import CheckchioGovernance from "./pages/endgame/checchio/Governance";
import CheckchioControversies from "./pages/endgame/checchio/Controversies";
import CheckchioPurge from "./pages/endgame/checchio/Purge";
import CheckchioStatus from "./pages/endgame/checchio/Status";

// Endgame Portal
import EndgamePortal from "./pages/endgame/Portal";

// Academy Pages
import AcademyHome from "./pages/academy/Home";
import AcademyGlobalGrowth from "./pages/academy/GlobalGrowth";
import AcademyClergyMetrics from "./pages/academy/ClergyMetrics";
import AcademySacramentalData from "./pages/academy/SacramentalData";
import AcademyGlobalChurchMetrics from "./pages/academy/GlobalChurchMetrics";
import AcademyInstitutionalStructure from "./pages/academy/InstitutionalStructure";
import AcademyDiocesanFinance from "./pages/academy/DiocesanFinance";
import AcademyFinancialModel from "./pages/academy/FinancialOperatingModel";
import AcademyStakeholderAnalysis from "./pages/academy/StakeholderAnalysis";
import AcademyTheCardinalate from "./pages/academy/TheCardinalate";
import AcademyCardinalateAndMcCarrick from "./pages/academy/CardinalateAndMcCarrick";
import AcademyTheCorporateVeil from "./pages/academy/TheCorporateVeil";
import AcademyMcCarrickMechanism from "./pages/academy/McCarrickMechanism";

// Landing/Hub Page
import LandingPage from "./pages/LandingPage";

// Ruling Pages
import RulingHome from "./pages/ruling/Home";
import RulingTimeline from "./pages/ruling/Timeline";
import RulingEvidence from "./pages/ruling/Evidence";
import RulingAnalysis from "./pages/ruling/Analysis";
import DirtyDozen from "./pages/ruling/DirtyDozen";
import TobinHypocrisy from "./pages/ruling/TobinHypocrisy";
import Reilly from "./pages/ruling/Reilly";
import BeachHouse from "./pages/ruling/BeachHouse";
import SheeranMcCarrick from "./pages/ruling/SheeranMcCarrick";
import SanctionPlea from "./pages/ruling/SanctionPlea";
import CorporateVeil from "./pages/ruling/CorporateVeil";

import "./index.css";

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { user, loading } = useAuth();

  if (!user) {
    if (loading) {
      return (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ color: '#00ff88', fontFamily: 'monospace' }}>Loading...</div>
        </div>
      );
    }
    return <Redirect to="/login" replace />;
  }

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
      <Route path={"/login"} component={Login} />
      
      {/* Landing Page - Default after login */}
      <Route path={"/"}>
        <ProtectedRoute component={LandingPage} />
      </Route>

      {/* Cathedral Routes */}
      <Route path={"/cathedral"}>
        <ProtectedRoute component={CathedralHome} />
      </Route>
      <Route path={"/about"}>
        <ProtectedRoute component={About} />
      </Route>
      <Route path={"/documents"}>
        <ProtectedRoute component={Documents} />
      </Route>

      {/* Endgame Routes */}
      <Route path={"/endgame"}>
        <ProtectedRoute component={EndgamePortal} />
      </Route>

      {/* McCarrick Sub-pages */}
      <Route path={"/endgame/mccarrick"}>
        <ProtectedRoute component={McCarrickHome} />
      </Route>
      <Route path={"/endgame/mccarrick/background"}>
        <ProtectedRoute component={McCarrickBackground} />
      </Route>
      <Route path={"/endgame/mccarrick/profile"}>
        <ProtectedRoute component={McCarrickProfile} />
      </Route>
      <Route path={"/endgame/mccarrick/the-rise"}>
        <ProtectedRoute component={McCarrickTheRise} />
      </Route>
      <Route path={"/endgame/mccarrick/the-regime"}>
        <ProtectedRoute component={McCarrickTheRegime} />
      </Route>
      <Route path={"/endgame/mccarrick/network"}>
        <ProtectedRoute component={McCarrickNetwork} />
      </Route>
      <Route path={"/endgame/mccarrick/warnings"}>
        <ProtectedRoute component={McCarrickWarnings} />
      </Route>
      <Route path={"/endgame/mccarrick/mechanisms"}>
        <ProtectedRoute component={McCarrickMechanisms} />
      </Route>
      <Route path={"/endgame/mccarrick/seton-hall"}>
        <ProtectedRoute component={McCarrickSetonHall} />
      </Route>
      <Route path={"/endgame/mccarrick/downfall"}>
        <ProtectedRoute component={McCarrickDownfall} />
      </Route>
      <Route path={"/endgame/mccarrick/the-reckoning"}>
        <ProtectedRoute component={McCarrickTheReckoning} />
      </Route>
      <Route path={"/endgame/mccarrick/legal"}>
        <ProtectedRoute component={McCarrickLegal} />
      </Route>
      <Route path={"/endgame/mccarrick/survivors"}>
        <ProtectedRoute component={McCarrickSurvivors} />
      </Route>
      <Route path={"/endgame/mccarrick/responses"}>
        <ProtectedRoute component={McCarrickResponses} />
      </Route>
      <Route path={"/endgame/mccarrick/analysis"}>
        <ProtectedRoute component={McCarrickAnalysis} />
      </Route>
      <Route path={"/endgame/mccarrick/conclusion"}>
        <ProtectedRoute component={McCarrickConclusion} />
      </Route>

      {/* Checchio Sub-pages */}
      <Route path={"/endgame/checchio"}>
        <ProtectedRoute component={CheckchioHome} />
      </Route>
      <Route path={"/endgame/checchio/formation"}>
        <ProtectedRoute component={CheckchioFormation} />
      </Route>
      <Route path={"/endgame/checchio/ascent"}>
        <ProtectedRoute component={CheckchioAscent} />
      </Route>
      <Route path={"/endgame/checchio/governance"}>
        <ProtectedRoute component={CheckchioGovernance} />
      </Route>
      <Route path={"/endgame/checchio/controversies"}>
        <ProtectedRoute component={CheckchioControversies} />
      </Route>
      <Route path={"/endgame/checchio/purge"}>
        <ProtectedRoute component={CheckchioPurge} />
      </Route>
      <Route path={"/endgame/checchio/status"}>
        <ProtectedRoute component={CheckchioStatus} />
      </Route>

      {/* Academy Routes */}
      <Route path={"/academy"}>
        <ProtectedRoute component={AcademyHome} />
      </Route>
      <Route path={"/academy/global-growth"}>
        <ProtectedRoute component={AcademyGlobalGrowth} />
      </Route>
      <Route path={"/academy/clergy-metrics"}>
        <ProtectedRoute component={AcademyClergyMetrics} />
      </Route>
      <Route path={"/academy/sacramental-data"}>
        <ProtectedRoute component={AcademySacramentalData} />
      </Route>
      <Route path={"/academy/global-metrics"}>
        <ProtectedRoute component={AcademyGlobalChurchMetrics} />
      </Route>
      <Route path={"/academy/institutional-structure"}>
        <ProtectedRoute component={AcademyInstitutionalStructure} />
      </Route>
      <Route path={"/academy/diocesan-finance"}>
        <ProtectedRoute component={AcademyDiocesanFinance} />
      </Route>
      <Route path={"/academy/financial-model"}>
        <ProtectedRoute component={AcademyFinancialModel} />
      </Route>
      <Route path={"/academy/stakeholder-analysis"}>
        <ProtectedRoute component={AcademyStakeholderAnalysis} />
      </Route>
      <Route path={"/academy/the-cardinalate"}>
        <ProtectedRoute component={AcademyTheCardinalate} />
      </Route>
      <Route path={"/academy/cardinalate-mccarrick"}>
        <ProtectedRoute component={AcademyCardinalateAndMcCarrick} />
      </Route>
      <Route path={"/academy/corporate-veil"}>
        <ProtectedRoute component={AcademyTheCorporateVeil} />
      </Route>
      <Route path={"/academy/mccarrick-mechanism"}>
        <ProtectedRoute component={AcademyMcCarrickMechanism} />
      </Route>

      {/* Ruling Routes */}
      <Route path={"/ruling"}>
        <ProtectedRoute component={RulingHome} />
      </Route>
      <Route path={"/ruling/timeline"}>
        <ProtectedRoute component={RulingTimeline} />
      </Route>
      <Route path={"/ruling/evidence"}>
        <ProtectedRoute component={RulingEvidence} />
      </Route>
      <Route path={"/ruling/analysis"}>
        <ProtectedRoute component={RulingAnalysis} />
      </Route>
      <Route path={"/ruling/dirty-dozen"}>
        <ProtectedRoute component={DirtyDozen} />
      </Route>
      <Route path={"/ruling/tobin-hypocrisy"}>
        <ProtectedRoute component={TobinHypocrisy} />
      </Route>
      <Route path={"/ruling/reilly"}>
        <ProtectedRoute component={Reilly} />
      </Route>
      <Route path={"/ruling/beach-house"}>
        <ProtectedRoute component={BeachHouse} />
      </Route>
      <Route path={"/ruling/sheeran-mccarrick"}>
        <ProtectedRoute component={SheeranMcCarrick} />
      </Route>
      <Route path={"/ruling/sanction-plea"}>
        <ProtectedRoute component={SanctionPlea} />
      </Route>
      <Route path={"/ruling/corporate-veil"}>
        <ProtectedRoute component={CorporateVeil} />
      </Route>

      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
