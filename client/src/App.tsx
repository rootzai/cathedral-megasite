import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import React, { Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import MegaNavigation from "./components/MegaNavigation";
import { ThemeProvider } from "./contexts/ThemeContext";

// Cathedral (Sodom Hall) Pages
const About = React.lazy(() => import("./pages/About"));
const Dedication = React.lazy(() => import("./pages/Dedication"));
const Documents = React.lazy(() => import("./pages/Documents"));
const CathedralHome = React.lazy(() => import("./pages/Home"));
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const TheyKnew = React.lazy(() => import("./pages/TheyKnew"));

// Endgame - McCarrick Pages
const McCarrickAnalysis = React.lazy(() => import("./pages/endgame/mccarrick/Analysis"));
const McCarrickBackground = React.lazy(() => import("./pages/endgame/mccarrick/Background"));
const McCarrickConclusion = React.lazy(() => import("./pages/endgame/mccarrick/Conclusion"));
const McCarrickDownfall = React.lazy(() => import("./pages/endgame/mccarrick/Downfall"));
const McCarrickHome = React.lazy(() => import("./pages/endgame/mccarrick/Home"));
const McCarrickLegal = React.lazy(() => import("./pages/endgame/mccarrick/Legal"));
const McCarrickMechanisms = React.lazy(() => import("./pages/endgame/mccarrick/Mechanisms"));
const McCarrickNetwork = React.lazy(() => import("./pages/endgame/mccarrick/Network"));
const McCarrickProfile = React.lazy(() => import("./pages/endgame/mccarrick/Profile"));
const McCarrickResponses = React.lazy(() => import("./pages/endgame/mccarrick/Responses"));
const McCarrickSetonHall = React.lazy(() => import("./pages/endgame/mccarrick/SetonHall"));
const McCarrickSurvivors = React.lazy(() => import("./pages/endgame/mccarrick/Survivors"));
const McCarrickTheReckoning = React.lazy(() => import("./pages/endgame/mccarrick/TheReckoning"));
const McCarrickTheRegime = React.lazy(() => import("./pages/endgame/mccarrick/TheRegime"));
const McCarrickTheRise = React.lazy(() => import("./pages/endgame/mccarrick/TheRise"));
const McCarrickWarnings = React.lazy(() => import("./pages/endgame/mccarrick/Warnings"));

// Endgame - Checchio Pages
const CheckchioAscent = React.lazy(() => import("./pages/endgame/checchio/Ascent"));
const CheckchioControversies = React.lazy(() => import("./pages/endgame/checchio/Controversies"));
const CheckchioFormation = React.lazy(() => import("./pages/endgame/checchio/Formation"));
const CheckchioGovernance = React.lazy(() => import("./pages/endgame/checchio/Governance"));
const CheckchioHome = React.lazy(() => import("./pages/endgame/checchio/Home"));
const CheckchioPurge = React.lazy(() => import("./pages/endgame/checchio/Purge"));
const CheckchioStatus = React.lazy(() => import("./pages/endgame/checchio/Status"));

// Endgame Portal
const EndgamePortal = React.lazy(() => import("./pages/endgame/Portal"));

// Endgame Case Files
const LorenzoElevation = React.lazy(() => import("./pages/endgame/lorenzo/Elevation"));
const LorenzoExpulsion = React.lazy(() => import("./pages/endgame/lorenzo/Expulsion"));
const LorenzoHome = React.lazy(() => import("./pages/endgame/lorenzo/Home"));
const LorenzoRehabilitation = React.lazy(() => import("./pages/endgame/lorenzo/Rehabilitation"));
const MartinChicago = React.lazy(() => import("./pages/endgame/martin/ChicagoConnection"));
const MartinCrimes = React.lazy(() => import("./pages/endgame/martin/Crimes"));
const MartinHome = React.lazy(() => import("./pages/endgame/martin/Home"));
const MartinLaunder = React.lazy(() => import("./pages/endgame/martin/TheLaunder"));
const ReillyEndgame = React.lazy(() => import("./pages/endgame/Reilly"));

// Church BK Pages
const ChurchBKActiveCaseDossiers = React.lazy(() => import("./pages/church-bk/ActiveCaseDossiers"));
const ChurchBKCardinalateAndMcCarrick = React.lazy(() => import("./pages/church-bk/CardinalateAndMcCarrick"));
const ChurchBKClergyMetrics = React.lazy(() => import("./pages/church-bk/ClergyMetrics"));
const ChurchBKCreditorCommitteePortal = React.lazy(() => import("./pages/church-bk/CreditorCommitteePortal"));
const ChurchBKDiocesanFinance = React.lazy(() => import("./pages/church-bk/DiocesanFinance"));
const ChurchBKDocumentLibrary = React.lazy(() => import("./pages/church-bk/DocumentLibrary"));
const ChurchBKFinancialModel = React.lazy(() => import("./pages/church-bk/FinancialOperatingModel"));
const ChurchBKGlobalChurchMetrics = React.lazy(() => import("./pages/church-bk/GlobalChurchMetrics"));
const ChurchBKGlobalGrowth = React.lazy(() => import("./pages/church-bk/GlobalGrowth"));
const ChurchBKHome = React.lazy(() => import("./pages/church-bk/Home"));
const ChurchBKInstitutionalStructure = React.lazy(() => import("./pages/church-bk/InstitutionalStructure"));
const ChurchBKMcCarrickMechanism = React.lazy(() => import("./pages/church-bk/McCarrickMechanism"));
const ChurchBKSacramentalData = React.lazy(() => import("./pages/church-bk/SacramentalData"));
const ChurchBKStakeholderAnalysis = React.lazy(() => import("./pages/church-bk/StakeholderAnalysis"));
const ChurchBKTheCardinalate = React.lazy(() => import("./pages/church-bk/TheCardinalate"));
const ChurchBKTheCorporateVeil = React.lazy(() => import("./pages/church-bk/TheCorporateVeil"));

// Landing/Hub Page

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

// Expose Pages
import ExposeLayoutWrapper from "./components/ExposeLayout";
const AppealGrounds = React.lazy(() => import("./pages/expose/AppealGrounds"));
const CheckchioNewOrleans = React.lazy(() => import("./pages/expose/CheckchioNewOrleans"));
const EpsteinNexus = React.lazy(() => import("./pages/expose/EpsteinNexus"));
const KennethMartinexpose = React.lazy(() => import("./pages/expose/KennethMartin"));
const LegalTrumvirate = React.lazy(() => import("./pages/expose/LegalTrumvirate"));
const McCarrickNetworkexpose = React.lazy(() => import("./pages/expose/McCarrickNetwork"));
const NyreDismissal = React.lazy(() => import("./pages/expose/NyreDismissal"));
const Overview = React.lazy(() => import("./pages/expose/Overview"));
const RabnerExhibits = React.lazy(() => import("./pages/expose/RabnerExhibits"));
const ReillyProtection = React.lazy(() => import("./pages/expose/ReillyProtection"));
const WhistleblowerUnmasking = React.lazy(() => import("./pages/expose/WhistleblowerUnmasking"));

// Epstein Pages
import EpsteinLayout from "./components/EpsteinLayout";
const EpsteinHome = React.lazy(() => import("./pages/epstein/Home"));

// Section Layouts (lifted to router level)
import ChurchBKLayout from "./components/ChurchBKLayout";
import EndgameLayout from "./components/EndgameLayout";
import RulingLayout from "./components/Layout";

import "./index.css";

function PageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <>
      <MegaNavigation />
      <Component />
    </>
  );
}

function EndgamePageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <>
      <MegaNavigation />
      <EndgameLayout>
        <Component />
      </EndgameLayout>
    </>
  );
}

function ChurchBKPageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <>
      <MegaNavigation />
      <ChurchBKLayout>
        <Component />
      </ChurchBKLayout>
    </>
  );
}

function RulingPageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <>
      <MegaNavigation />
      <RulingLayout>
        <Component />
      </RulingLayout>
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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background text-primary animate-pulse">Entering the Archives...</div>}>
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
          <EndgamePageLayout component={MartinHome} />
        </Route>
        <Route path={"/endgame/martin/crimes"}>
          <EndgamePageLayout component={MartinCrimes} />
        </Route>
        <Route path={"/endgame/martin/launder"}>
          <EndgamePageLayout component={MartinLaunder} />
        </Route>
        <Route path={"/endgame/martin/chicago"}>
          <EndgamePageLayout component={MartinChicago} />
        </Route>
        <Route path={"/endgame/lorenzo"}>
          <EndgamePageLayout component={LorenzoHome} />
        </Route>
        <Route path={"/endgame/lorenzo/expulsion"}>
          <EndgamePageLayout component={LorenzoExpulsion} />
        </Route>
        <Route path={"/endgame/lorenzo/rehabilitation"}>
          <EndgamePageLayout component={LorenzoRehabilitation} />
        </Route>
        <Route path={"/endgame/lorenzo/elevation"}>
          <EndgamePageLayout component={LorenzoElevation} />
        </Route>
        <Route path={"/endgame/reilly"}>
          <EndgamePageLayout component={ReillyEndgame} />
        </Route>

        {/* McCarrick Sub-pages */}
        <Route path={"/endgame/mccarrick"}>
          <EndgamePageLayout component={McCarrickHome} />
        </Route>
        <Route path={"/endgame/mccarrick/background"}>
          <EndgamePageLayout component={McCarrickBackground} />
        </Route>
        <Route path={"/endgame/mccarrick/profile"}>
          <EndgamePageLayout component={McCarrickProfile} />
        </Route>
        <Route path={"/endgame/mccarrick/the-rise"}>
          <EndgamePageLayout component={McCarrickTheRise} />
        </Route>
        <Route path={"/endgame/mccarrick/the-regime"}>
          <EndgamePageLayout component={McCarrickTheRegime} />
        </Route>
        <Route path={"/endgame/mccarrick/network"}>
          <EndgamePageLayout component={McCarrickNetwork} />
        </Route>
        <Route path={"/endgame/mccarrick/warnings"}>
          <EndgamePageLayout component={McCarrickWarnings} />
        </Route>
        <Route path={"/endgame/mccarrick/mechanisms"}>
          <EndgamePageLayout component={McCarrickMechanisms} />
        </Route>
        <Route path={"/endgame/mccarrick/seton-hall"}>
          <EndgamePageLayout component={McCarrickSetonHall} />
        </Route>
        <Route path={"/endgame/mccarrick/downfall"}>
          <EndgamePageLayout component={McCarrickDownfall} />
        </Route>
        <Route path={"/endgame/mccarrick/the-reckoning"}>
          <EndgamePageLayout component={McCarrickTheReckoning} />
        </Route>
        <Route path={"/endgame/mccarrick/legal"}>
          <EndgamePageLayout component={McCarrickLegal} />
        </Route>
        <Route path={"/endgame/mccarrick/survivors"}>
          <EndgamePageLayout component={McCarrickSurvivors} />
        </Route>
        <Route path={"/endgame/mccarrick/responses"}>
          <EndgamePageLayout component={McCarrickResponses} />
        </Route>
        <Route path={"/endgame/mccarrick/analysis"}>
          <EndgamePageLayout component={McCarrickAnalysis} />
        </Route>
        <Route path={"/endgame/mccarrick/conclusion"}>
          <EndgamePageLayout component={McCarrickConclusion} />
        </Route>

        {/* Checchio Sub-pages */}
        <Route path={"/endgame/checchio"}>
          <EndgamePageLayout component={CheckchioHome} />
        </Route>
        <Route path={"/endgame/checchio/formation"}>
          <EndgamePageLayout component={CheckchioFormation} />
        </Route>
        <Route path={"/endgame/checchio/ascent"}>
          <EndgamePageLayout component={CheckchioAscent} />
        </Route>
        <Route path={"/endgame/checchio/governance"}>
          <EndgamePageLayout component={CheckchioGovernance} />
        </Route>
        <Route path={"/endgame/checchio/controversies"}>
          <EndgamePageLayout component={CheckchioControversies} />
        </Route>
        <Route path={"/endgame/checchio/purge"}>
          <EndgamePageLayout component={CheckchioPurge} />
        </Route>
        <Route path={"/endgame/checchio/status"}>
          <EndgamePageLayout component={CheckchioStatus} />
        </Route>

        {/* Church BK Routes */}
        <Route path={"/church-bk"}>
          <ChurchBKPageLayout component={ChurchBKHome} />
        </Route>
        <Route path={"/church-bk/active-case-dossiers"}>
          <ChurchBKPageLayout component={ChurchBKActiveCaseDossiers} />
        </Route>
        <Route path={"/church-bk/cardinalate-mccarrick"}>
          <ChurchBKPageLayout component={ChurchBKCardinalateAndMcCarrick} />
        </Route>
        <Route path={"/church-bk/clergy-metrics"}>
          <ChurchBKPageLayout component={ChurchBKClergyMetrics} />
        </Route>
        <Route path={"/church-bk/creditor-committee-portal"}>
          <ChurchBKPageLayout component={ChurchBKCreditorCommitteePortal} />
        </Route>
        <Route path={"/church-bk/diocesan-finance"}>
          <ChurchBKPageLayout component={ChurchBKDiocesanFinance} />
        </Route>
        <Route path={"/church-bk/document-library"}>
          <ChurchBKPageLayout component={ChurchBKDocumentLibrary} />
        </Route>
        <Route path={"/church-bk/financial-operating-model"}>
          <ChurchBKPageLayout component={ChurchBKFinancialModel} />
        </Route>
        <Route path={"/church-bk/global-church-metrics"}>
          <ChurchBKPageLayout component={ChurchBKGlobalChurchMetrics} />
        </Route>
        <Route path={"/church-bk/global-growth"}>
          <ChurchBKPageLayout component={ChurchBKGlobalGrowth} />
        </Route>
        <Route path={"/church-bk/institutional-structure"}>
          <ChurchBKPageLayout component={ChurchBKInstitutionalStructure} />
        </Route>
        <Route path={"/church-bk/mccarrick-mechanism"}>
          <ChurchBKPageLayout component={ChurchBKMcCarrickMechanism} />
        </Route>
        <Route path={"/church-bk/sacramental-data"}>
          <ChurchBKPageLayout component={ChurchBKSacramentalData} />
        </Route>
        <Route path={"/church-bk/stakeholder-analysis"}>
          <ChurchBKPageLayout component={ChurchBKStakeholderAnalysis} />
        </Route>
        <Route path={"/church-bk/the-cardinalate"}>
          <ChurchBKPageLayout component={ChurchBKTheCardinalate} />
        </Route>
        <Route path={"/church-bk/the-corporate-veil"}>
          <ChurchBKPageLayout component={ChurchBKTheCorporateVeil} />
        </Route>

        {/* Ruling Routes */}
        <Route path={"/ruling"}>
          <RulingPageLayout component={RulingHome} />
        </Route>
        <Route path={"/ruling/timeline"}>
          <RulingPageLayout component={RulingTimeline} />
        </Route>
        <Route path={"/ruling/evidence"}>
          <RulingPageLayout component={RulingEvidence} />
        </Route>
        <Route path={"/ruling/analysis"}>
          <RulingPageLayout component={RulingAnalysis} />
        </Route>
        <Route path={"/ruling/dirty-dozen"}>
          <RulingPageLayout component={DirtyDozen} />
        </Route>
        <Route path={"/ruling/tobin-hypocrisy"}>
          <RulingPageLayout component={TobinHypocrisy} />
        </Route>
        <Route path={"/ruling/reilly"}>
          <RulingPageLayout component={Reilly} />
        </Route>
        <Route path={"/ruling/beach-house"}>
          <RulingPageLayout component={BeachHouse} />
        </Route>
        <Route path={"/ruling/sheeran-mccarrick"}>
          <RulingPageLayout component={SheeranMcCarrick} />
        </Route>
        <Route path={"/ruling/sanction-plea"}>
          <RulingPageLayout component={SanctionPlea} />
        </Route>
        <Route path={"/ruling/corporate-veil"}>
          <RulingPageLayout component={CorporateVeil} />
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
        <Route path={"/expose/whistleblower-unmasking"}><ExposePageLayout component={WhistleblowerUnmasking} /></Route>
        <Route path={"/expose/appeal-grounds"}><ExposePageLayout component={AppealGrounds} /></Route>

        {/* Epstein Routes */}
        <Route path={"/epstein"}><EpsteinPageLayout component={EpsteinHome} /></Route>

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
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
