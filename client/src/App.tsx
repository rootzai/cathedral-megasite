import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import MegaNavigation from "./components/MegaNavigation";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// Cathedral (Sodom Hall) Pages
import About from "./pages/About";
import Documents from "./pages/Documents";
import CathedralHome from "./pages/Home";
import Login from "./pages/Login";

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
import ChecchioAscent from "./pages/endgame/checchio/Ascent";
import ChecchioControversies from "./pages/endgame/checchio/Controversies";
import ChecchioFormation from "./pages/endgame/checchio/Formation";
import ChecchioGovernance from "./pages/endgame/checchio/Governance";
import ChecchioHome from "./pages/endgame/checchio/Home";
import ChecchioPurge from "./pages/endgame/checchio/Purge";
import ChecchioStatus from "./pages/endgame/checchio/Status";

// Academy Pages
import ClergyMetrics from "./pages/academy/ClergyMetrics";
import DiocesanFinance from "./pages/academy/DiocesanFinance";
import FinancialOperatingModel from "./pages/academy/FinancialOperatingModel";
import GlobalGrowth from "./pages/academy/GlobalGrowth";
import AcademyHome from "./pages/academy/Home";
import InstitutionalStructure from "./pages/academy/InstitutionalStructure";
import McCarrickMechanism from "./pages/academy/McCarrickMechanism";
import SacramentalData from "./pages/academy/SacramentalData";
import StakeholderAnalysis from "./pages/academy/StakeholderAnalysis";
import TheCardinalate from "./pages/academy/TheCardinalate";
import TheCorporateVeilAcademy from "./pages/academy/TheCorporateVeil";

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

      {/* Cathedral Routes */}
      <Route path={"/"}>
        <ProtectedRoute component={CathedralHome} />
      </Route>
      <Route path={"/about"}>
        <ProtectedRoute component={About} />
      </Route>
      <Route path={"/documents"}>
        <ProtectedRoute component={Documents} />
      </Route>

      {/* Endgame Routes */}
      <Route path={"/endgame/mccarrick"}>
        <ProtectedRoute component={McCarrickHome} />
      </Route>
      <Route path={"/endgame/mccarrick/rise"}>
        <ProtectedRoute component={McCarrickTheRise} />
      </Route>
      <Route path={"/endgame/mccarrick/regime"}>
        <ProtectedRoute component={McCarrickTheRegime} />
      </Route>
      <Route path={"/endgame/mccarrick/reckoning"}>
        <ProtectedRoute component={McCarrickTheReckoning} />
      </Route>
      <Route path={"/endgame/mccarrick/background"}>
        <ProtectedRoute component={McCarrickBackground} />
      </Route>
      <Route path={"/endgame/mccarrick/profile"}>
        <ProtectedRoute component={McCarrickProfile} />
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
      <Route path={"/endgame/mccarrick/downfall"}>
        <ProtectedRoute component={McCarrickDownfall} />
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
      <Route path={"/endgame/mccarrick/setonhall"}>
        <ProtectedRoute component={McCarrickSetonHall} />
      </Route>
      <Route path={"/endgame/mccarrick/conclusion"}>
        <ProtectedRoute component={McCarrickConclusion} />
      </Route>

      {/* Checchio Routes */}
      <Route path={"/endgame/checchio"}>
        <ProtectedRoute component={ChecchioHome} />
      </Route>
      <Route path={"/endgame/checchio/formation"}>
        <ProtectedRoute component={ChecchioFormation} />
      </Route>
      <Route path={"/endgame/checchio/ascent"}>
        <ProtectedRoute component={ChecchioAscent} />
      </Route>
      <Route path={"/endgame/checchio/governance"}>
        <ProtectedRoute component={ChecchioGovernance} />
      </Route>
      <Route path={"/endgame/checchio/purge"}>
        <ProtectedRoute component={ChecchioPurge} />
      </Route>
      <Route path={"/endgame/checchio/controversies"}>
        <ProtectedRoute component={ChecchioControversies} />
      </Route>
      <Route path={"/endgame/checchio/status"}>
        <ProtectedRoute component={ChecchioStatus} />
      </Route>

      <Route path={"/mccarrick"}>
        <Redirect to="/endgame/mccarrick" />
      </Route>
      <Route path={"/mccarrick/rise"}>
        <Redirect to="/endgame/mccarrick/rise" />
      </Route>
      <Route path={"/mccarrick/regime"}>
        <Redirect to="/endgame/mccarrick/regime" />
      </Route>
      <Route path={"/mccarrick/reckoning"}>
        <Redirect to="/endgame/mccarrick/reckoning" />
      </Route>

      {/* Academy Routes */}
      <Route path={"/academy"}>
        <ProtectedRoute component={AcademyHome} />
      </Route>
      <Route path={"/academy/global-growth"}>
        <ProtectedRoute component={GlobalGrowth} />
      </Route>
      <Route path={"/academy/clergy-metrics"}>
        <ProtectedRoute component={ClergyMetrics} />
      </Route>
      <Route path={"/academy/sacramental-data"}>
        <ProtectedRoute component={SacramentalData} />
      </Route>
      <Route path={"/academy/financial-operating-model"}>
        <ProtectedRoute component={FinancialOperatingModel} />
      </Route>
      <Route path={"/academy/diocesan-finance"}>
        <ProtectedRoute component={DiocesanFinance} />
      </Route>
      <Route path={"/academy/institutional-structure"}>
        <ProtectedRoute component={InstitutionalStructure} />
      </Route>
      <Route path={"/academy/cardinalate-mccarrick"}>
        <ProtectedRoute component={TheCardinalate} />
      </Route>
      <Route path={"/academy/the-corporate-veil"}>
        <ProtectedRoute component={TheCorporateVeilAcademy} />
      </Route>
      <Route path={"/academy/stakeholder-analysis"}>
        <ProtectedRoute component={StakeholderAnalysis} />
      </Route>
      <Route path={"/academy/mccarrick-mechanism"}>
        <ProtectedRoute component={McCarrickMechanism} />
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
