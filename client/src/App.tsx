import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import React from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import MegaNavigation from "./components/MegaNavigation";
import { ThemeProvider } from "./contexts/ThemeContext";

// Cathedral (Sodom Hall) Pages
import About from "./pages/About";
import Dedication from "./pages/Dedication";
import Documents from "./pages/Documents";
import CathedralHome from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import TheyKnew from "./pages/TheyKnew";

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

// Endgame Case Files
import LorenzoElevation from "./pages/endgame/lorenzo/Elevation";
import LorenzoExpulsion from "./pages/endgame/lorenzo/Expulsion";
import LorenzoHome from "./pages/endgame/lorenzo/Home";
import LorenzoRehabilitation from "./pages/endgame/lorenzo/Rehabilitation";
import MartinChicago from "./pages/endgame/martin/ChicagoConnection";
import MartinCrimes from "./pages/endgame/martin/Crimes";
import MartinHome from "./pages/endgame/martin/Home";
import MartinLaunder from "./pages/endgame/martin/TheLaunder";
import ReillyEndgame from "./pages/endgame/Reilly";

// Church BK Pages
import ChurchBKActiveCaseDossiers from "./pages/church-bk/ActiveCaseDossiers";
import ChurchBKCardinalateAndMcCarrick from "./pages/church-bk/CardinalateAndMcCarrick";
import ChurchBKClergyMetrics from "./pages/church-bk/ClergyMetrics";
import ChurchBKCreditorCommitteePortal from "./pages/church-bk/CreditorCommitteePortal";
import ChurchBKDiocesanFinance from "./pages/church-bk/DiocesanFinance";
import ChurchBKDocumentLibrary from "./pages/church-bk/DocumentLibrary";
import ChurchBKFinancialModel from "./pages/church-bk/FinancialOperatingModel";
import ChurchBKGlobalChurchMetrics from "./pages/church-bk/GlobalChurchMetrics";
import ChurchBKGlobalGrowth from "./pages/church-bk/GlobalGrowth";
import ChurchBKHome from "./pages/church-bk/Home";
import ChurchBKInstitutionalStructure from "./pages/church-bk/InstitutionalStructure";
import ChurchBKMcCarrickMechanism from "./pages/church-bk/McCarrickMechanism";
import ChurchBKSacramentalData from "./pages/church-bk/SacramentalData";
import ChurchBKStakeholderAnalysis from "./pages/church-bk/StakeholderAnalysis";
import ChurchBKTheCardinalate from "./pages/church-bk/TheCardinalate";
import ChurchBKTheCorporateVeil from "./pages/church-bk/TheCorporateVeil";

// Landing/Hub Page

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

// Expose Pages
import ExposeLayoutWrapper from "./components/ExposeLayout";
import AppealGrounds from "./pages/expose/AppealGrounds";
import CheckchioNewOrleans from "./pages/expose/CheckchioNewOrleans";
import EpsteinNexus from "./pages/expose/EpsteinNexus";
import KennethMartinexpose from "./pages/expose/KennethMartin";
import LegalTrumvirate from "./pages/expose/LegalTrumvirate";
import McCarrickNetworkexpose from "./pages/expose/McCarrickNetwork";
import NyreDismissal from "./pages/expose/NyreDismissal";
import Overview from "./pages/expose/Overview";
import RabnerExhibits from "./pages/expose/RabnerExhibits";
import ReillyProtection from "./pages/expose/ReillyProtection";
import SpitzUnmasking from "./pages/expose/SpitzUnmasking";

// Epstein Pages
import EpsteinLayout from "./components/EpsteinLayout";
import EpsteinHome from "./pages/epstein/Home";

import "./index.css";

function PageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <>
      <MegaNavigation />
      <Component />
    </>
  );
}

function ExposePageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <>
      <MegaNavigation />
      <ExposeLayoutWrapper>
        <Component />
      </ExposeLayoutWrapper>
    </>
  );
}

function EpsteinPageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <>
      <MegaNavigation />
      <EpsteinLayout>
        <Component />
      </EpsteinLayout>
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
      <Route path={"/dedication"}>
        <PageLayout component={Dedication} />
      </Route>
      <Route path={"/documents"}>
        <PageLayout component={Documents} />
      </Route>

      {/* They Knew Routes */}
      <Route path={"/they-knew"}>
        <PageLayout component={TheyKnew} />
      </Route>

      {/* Endgame Routes */}
      <Route path={"/endgame"}>
        <PageLayout component={EndgamePortal} />
      </Route>

      {/* Endgame Case Files */}
      <Route path={"/endgame/martin"}>
        <PageLayout component={MartinHome} />
      </Route>
      <Route path={"/endgame/martin/crimes"}>
        <PageLayout component={MartinCrimes} />
      </Route>
      <Route path={"/endgame/martin/launder"}>
        <PageLayout component={MartinLaunder} />
      </Route>
      <Route path={"/endgame/martin/chicago"}>
        <PageLayout component={MartinChicago} />
      </Route>
      <Route path={"/endgame/lorenzo"}>
        <PageLayout component={LorenzoHome} />
      </Route>
      <Route path={"/endgame/lorenzo/expulsion"}>
        <PageLayout component={LorenzoExpulsion} />
      </Route>
      <Route path={"/endgame/lorenzo/rehabilitation"}>
        <PageLayout component={LorenzoRehabilitation} />
      </Route>
      <Route path={"/endgame/lorenzo/elevation"}>
        <PageLayout component={LorenzoElevation} />
      </Route>
      <Route path={"/endgame/reilly"}>
        <PageLayout component={ReillyEndgame} />
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

      {/* Church BK Routes */}
      <Route path={"/church-bk"}>
        <PageLayout component={ChurchBKHome} />
      </Route>
      <Route path={"/church-bk/active-case-dossiers"}>
        <PageLayout component={ChurchBKActiveCaseDossiers} />
      </Route>
      <Route path={"/church-bk/cardinalate-mccarrick"}>
        <PageLayout component={ChurchBKCardinalateAndMcCarrick} />
      </Route>
      <Route path={"/church-bk/clergy-metrics"}>
        <PageLayout component={ChurchBKClergyMetrics} />
      </Route>
      <Route path={"/church-bk/creditor-committee-portal"}>
        <PageLayout component={ChurchBKCreditorCommitteePortal} />
      </Route>
      <Route path={"/church-bk/diocesan-finance"}>
        <PageLayout component={ChurchBKDiocesanFinance} />
      </Route>
      <Route path={"/church-bk/document-library"}>
        <PageLayout component={ChurchBKDocumentLibrary} />
      </Route>
      <Route path={"/church-bk/financial-operating-model"}>
        <PageLayout component={ChurchBKFinancialModel} />
      </Route>
      <Route path={"/church-bk/global-church-metrics"}>
        <PageLayout component={ChurchBKGlobalChurchMetrics} />
      </Route>
      <Route path={"/church-bk/global-growth"}>
        <PageLayout component={ChurchBKGlobalGrowth} />
      </Route>
      <Route path={"/church-bk/institutional-structure"}>
        <PageLayout component={ChurchBKInstitutionalStructure} />
      </Route>
      <Route path={"/church-bk/mccarrick-mechanism"}>
        <PageLayout component={ChurchBKMcCarrickMechanism} />
      </Route>
      <Route path={"/church-bk/sacramental-data"}>
        <PageLayout component={ChurchBKSacramentalData} />
      </Route>
      <Route path={"/church-bk/stakeholder-analysis"}>
        <PageLayout component={ChurchBKStakeholderAnalysis} />
      </Route>
      <Route path={"/church-bk/the-cardinalate"}>
        <PageLayout component={ChurchBKTheCardinalate} />
      </Route>
      <Route path={"/church-bk/the-corporate-veil"}>
        <PageLayout component={ChurchBKTheCorporateVeil} />
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

      {/* Expose Routes */}
      <Route path={"/expose"}><ExposePageLayout component={Overview} /></Route>
      <Route path={"/expose/mccarrick-network"}><ExposePageLayout component={McCarrickNetworkexpose} /></Route>
      <Route path={"/expose/reilly-protection"}><ExposePageLayout component={ReillyProtection} /></Route>
      <Route path={"/expose/nyre-dismissal"}><ExposePageLayout component={NyreDismissal} /></Route>
      <Route path={"/expose/legal-triumvirate"}><ExposePageLayout component={LegalTrumvirate} /></Route>
      <Route path={"/expose/epstein-nexus"}><ExposePageLayout component={EpsteinNexus} /></Route>
      <Route path={"/expose/kenneth-martin"}><ExposePageLayout component={KennethMartinexpose} /></Route>
      <Route path={"/expose/checchio-new-orleans"}><ExposePageLayout component={CheckchioNewOrleans} /></Route>
      <Route path={"/expose/rabner-exhibits"}><ExposePageLayout component={RabnerExhibits} /></Route>
      <Route path={"/expose/spitz-unmasking"}><ExposePageLayout component={SpitzUnmasking} /></Route>
      <Route path={"/expose/appeal-grounds"}><ExposePageLayout component={AppealGrounds} /></Route>

      {/* Epstein Routes */}
      <Route path={"/epstein"}><EpsteinPageLayout component={EpsteinHome} /></Route>

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
