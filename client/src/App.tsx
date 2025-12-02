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

// Endgame - Checchio Pages
import CheckchioHome from "./pages/endgame/checchio/Home";

// Academy Pages
import AcademyHome from "./pages/academy/Home";

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
      <Route path={"/endgame/checchio"}>
        <ProtectedRoute component={CheckchioHome} />
      </Route>

      {/* Academy Routes */}
      <Route path={"/academy"}>
        <ProtectedRoute component={AcademyHome} />
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
