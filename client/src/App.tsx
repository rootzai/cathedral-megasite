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
const SuccessionEpilogue = React.lazy(() => import("./pages/SuccessionEpilogue"));
const OpinionsHub = React.lazy(() => import("./pages/opinions/Hub"));
const NoonanEssay = React.lazy(() => import("./pages/opinions/Noonan"));
const CannonEssay = React.lazy(() => import("./pages/opinions/Cannon"));
const MatthewsEssay = React.lazy(() => import("./pages/opinions/Matthews"));
const StephensEssay = React.lazy(() => import("./pages/opinions/Stephens"));



// Epstein Pages
import EpsteinLayout from "./components/EpsteinLayout";
const EpsteinHome = React.lazy(() => import("./pages/epstein/Home"));

// Section Layouts
import ChurchBKLayout from "./components/ChurchBKLayout";
import EndgameLayout from "./components/EndgameLayout";
import RulingLayout from "./components/Layout";
import { BreachLayout, CoverUpLayout, OriginLayout, SuccessionLayout } from "./components/UnifiedSectionLayouts";

import "./index.css";

function PageLayout({ component: Component, theme = "theme-cathedral" }: { component: React.ComponentType; theme?: string }) {
  return (
    <div className={`${theme} min-h-screen bg-background text-foreground transition-colors duration-500`}>
      <Component />
    </div>
  );
}


function EndgamePageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <div className="theme-endgame min-h-screen bg-background text-foreground transition-colors duration-500">
      <EndgameLayout>
        <Component />
      </EndgameLayout>
    </div>
  );
}


function ChurchBKPageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <div className="theme-bankruptcy min-h-screen bg-background text-foreground transition-colors duration-500">
      <ChurchBKLayout>
        <Component />
      </ChurchBKLayout>
    </div>
  );
}


function RulingPageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <div className="theme-ruling min-h-screen bg-background text-foreground transition-colors duration-500">
      <MegaNavigation />
      <RulingLayout>
        <Component />
      </RulingLayout>
    </div>
  );
}

function ExposePageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <div className="theme-expose min-h-screen bg-background text-foreground transition-colors duration-500">
      <MegaNavigation />
      <ExposeLayoutWrapper>
        <Component />
      </ExposeLayoutWrapper>
    </div>
  );
}

function EpsteinPageLayout({ component: Component }: { component: React.ComponentType }) {
  return (
    <div className="theme-epstein min-h-screen bg-background text-foreground transition-colors duration-500">
      <MegaNavigation />
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
        <Route path={"/"}>
          <PageLayout component={LandingPage} />
        </Route>

        {/* -------------------------------------------
            THE ORIGIN (Act 1)
        ------------------------------------------- */}
        <Route path={"/origin"}><OriginLayout><KennethMartinexpose /></OriginLayout></Route>
        <Route path={"/origin/martin"}><OriginLayout><KennethMartinexpose /></OriginLayout></Route>
        <Route path={"/origin/beach-house"}><OriginLayout><BeachHouse /></OriginLayout></Route>
        <Route path={"/origin/network"}><OriginLayout><McCarrickNetworkexpose /></OriginLayout></Route>
        <Route path={"/origin/explosion"}><OriginLayout><McCarrickDownfall /></OriginLayout></Route>

        {/* -------------------------------------------
            THE COVER-UP (Act 2)
        ------------------------------------------- */}
        <Route path={"/coverup"}><CoverUpLayout><ChurchBKMcCarrickMechanism /></CoverUpLayout></Route>
        <Route path={"/coverup/financial"}><CoverUpLayout><ChurchBKMcCarrickMechanism /></CoverUpLayout></Route>
        <Route path={"/coverup/complicity"}><CoverUpLayout><TheyKnew /></CoverUpLayout></Route>
        <Route path={"/coverup/legal"}><CoverUpLayout><LegalTrumvirate /></CoverUpLayout></Route>
        <Route path={"/coverup/epstein"}><CoverUpLayout><EpsteinNexus /></CoverUpLayout></Route>

        {/* -------------------------------------------
            THE BREACH (Act 3)
        ------------------------------------------- */}
        <Route path={"/breach"}><BreachLayout><WhistleblowerUnmasking /></BreachLayout></Route>
        <Route path={"/breach/whistleblowers"}><BreachLayout><WhistleblowerUnmasking /></BreachLayout></Route>
        <Route path={"/breach/courtroom"}><BreachLayout><RulingTimeline /></BreachLayout></Route>
        <Route path={"/breach/rabner"}><BreachLayout><RabnerExhibits /></BreachLayout></Route>
        <Route path={"/breach/forensics"}><BreachLayout><Overview /></BreachLayout></Route>

        {/* -------------------------------------------
            THE SUCCESSION (Act 4)
        ------------------------------------------- */}
        <Route path={"/succession"}><SuccessionLayout><LorenzoHome /></SuccessionLayout></Route>
        <Route path={"/succession/regime"}><SuccessionLayout><LorenzoHome /></SuccessionLayout></Route>
        <Route path={"/succession/checchio"}><SuccessionLayout><CheckchioNewOrleans /></SuccessionLayout></Route>
        <Route path={"/succession/cases"}><SuccessionLayout><ChurchBKActiveCaseDossiers /></SuccessionLayout></Route>
        <Route path={"/succession/horizon"}><SuccessionLayout><ChurchBKGlobalChurchMetrics /></SuccessionLayout></Route>
        <Route path={"/succession/epilogue"}><SuccessionLayout><SuccessionEpilogue /></SuccessionLayout></Route>

        {/* -------------------------------------------
            THE LEDGER (Appendix 1) - The People Index
        ------------------------------------------- */}
        <Route path={"/ledger"}><PageLayout component={TheyKnew} theme="theme-theyknew" /></Route>
        <Route path={"/endgame"}><PageLayout component={TheyKnew} theme="theme-theyknew" /></Route>

        <Route path={"/ledger/martin"}><EndgamePageLayout component={MartinHome} /></Route>
        <Route path={"/ledger/martin/crimes"}><EndgamePageLayout component={MartinCrimes} /></Route>
        <Route path={"/ledger/martin/launder"}><EndgamePageLayout component={MartinLaunder} /></Route>
        <Route path={"/ledger/martin/chicago"}><EndgamePageLayout component={MartinChicago} /></Route>

        <Route path={"/ledger/lorenzo"}><EndgamePageLayout component={LorenzoHome} /></Route>
        <Route path={"/ledger/lorenzo/expulsion"}><EndgamePageLayout component={LorenzoExpulsion} /></Route>
        <Route path={"/ledger/lorenzo/rehabilitation"}><EndgamePageLayout component={LorenzoRehabilitation} /></Route>
        <Route path={"/ledger/lorenzo/elevation"}><EndgamePageLayout component={LorenzoElevation} /></Route>

        <Route path={"/ledger/reilly"}><EndgamePageLayout component={ReillyEndgame} /></Route>

        <Route path={"/ledger/mccarrick"}><EndgamePageLayout component={McCarrickHome} /></Route>
        <Route path={"/ledger/mccarrick/background"}><EndgamePageLayout component={McCarrickBackground} /></Route>
        <Route path={"/ledger/mccarrick/profile"}><EndgamePageLayout component={McCarrickProfile} /></Route>
        <Route path={"/ledger/mccarrick/the-rise"}><EndgamePageLayout component={McCarrickTheRise} /></Route>
        <Route path={"/ledger/mccarrick/the-regime"}><EndgamePageLayout component={McCarrickTheRegime} /></Route>
        <Route path={"/ledger/mccarrick/network"}><EndgamePageLayout component={McCarrickNetwork} /></Route>

        {/* -------------------------------------------
            THE OPINION SECTION (Act 5)
        ------------------------------------------- */}
        <Route path={"/opinion"}><PageLayout component={OpinionsHub} theme="theme-opinion" /></Route>
        <Route path={"/opinion/noonan"}><PageLayout component={NoonanEssay} theme="theme-opinion" /></Route>
        <Route path={"/opinion/cannon"}><PageLayout component={CannonEssay} theme="theme-opinion" /></Route>
        <Route path={"/opinion/matthews"}><PageLayout component={MatthewsEssay} theme="theme-opinion" /></Route>
        <Route path={"/opinion/stephens"}><PageLayout component={StephensEssay} theme="theme-opinion" /></Route>

        <Route path={"/ledger/mccarrick/warnings"}><EndgamePageLayout component={McCarrickWarnings} /></Route>
        <Route path={"/ledger/mccarrick/mechanisms"}><EndgamePageLayout component={McCarrickMechanisms} /></Route>
        <Route path={"/ledger/mccarrick/seton-hall"}><EndgamePageLayout component={McCarrickSetonHall} /></Route>
        <Route path={"/ledger/mccarrick/downfall"}><EndgamePageLayout component={McCarrickDownfall} /></Route>
        <Route path={"/ledger/mccarrick/the-reckoning"}><EndgamePageLayout component={McCarrickTheReckoning} /></Route>
        <Route path={"/ledger/mccarrick/legal"}><EndgamePageLayout component={McCarrickLegal} /></Route>
        <Route path={"/ledger/mccarrick/survivors"}><EndgamePageLayout component={McCarrickSurvivors} /></Route>
        <Route path={"/ledger/mccarrick/responses"}><EndgamePageLayout component={McCarrickResponses} /></Route>
        <Route path={"/ledger/mccarrick/analysis"}><EndgamePageLayout component={McCarrickAnalysis} /></Route>
        <Route path={"/ledger/mccarrick/conclusion"}><EndgamePageLayout component={McCarrickConclusion} /></Route>

        <Route path={"/ledger/checchio"}><EndgamePageLayout component={CheckchioHome} /></Route>
        <Route path={"/ledger/checchio/formation"}><EndgamePageLayout component={CheckchioFormation} /></Route>
        <Route path={"/ledger/checchio/ascent"}><EndgamePageLayout component={CheckchioAscent} /></Route>
        <Route path={"/ledger/checchio/governance"}><EndgamePageLayout component={CheckchioGovernance} /></Route>
        <Route path={"/ledger/checchio/controversies"}><EndgamePageLayout component={CheckchioControversies} /></Route>
        <Route path={"/ledger/checchio/purge"}><EndgamePageLayout component={CheckchioPurge} /></Route>
        <Route path={"/ledger/checchio/status"}><EndgamePageLayout component={CheckchioStatus} /></Route>

        {/* -------------------------------------------
            THE VAULT (Appendix 2) - Raw Evidence & Ledgers
        ------------------------------------------- */}
        <Route path={"/vault"}><ChurchBKPageLayout component={ChurchBKDocumentLibrary} /></Route>
        <Route path={"/vault/documents"}><ChurchBKPageLayout component={ChurchBKDocumentLibrary} /></Route>
        <Route path={"/vault/finances"}><ChurchBKPageLayout component={ChurchBKDiocesanFinance} /></Route>
        <Route path={"/vault/the-corporate-veil"}><ChurchBKPageLayout component={ChurchBKTheCorporateVeil} /></Route>
        <Route path={"/vault/active-case-dossiers"}><ChurchBKPageLayout component={ChurchBKActiveCaseDossiers} /></Route>
        <Route path={"/vault/creditor-committee-portal"}><ChurchBKPageLayout component={ChurchBKCreditorCommitteePortal} /></Route>
        <Route path={"/vault/financial-operating-model"}><ChurchBKPageLayout component={ChurchBKFinancialModel} /></Route>
        <Route path={"/vault/diocesan-finance"}><ChurchBKPageLayout component={ChurchBKDiocesanFinance} /></Route>
        <Route path={"/vault/cardinalate-mccarrick"}><ChurchBKPageLayout component={ChurchBKCardinalateAndMcCarrick} /></Route>
        <Route path={"/vault/institutional-structure"}><ChurchBKPageLayout component={ChurchBKInstitutionalStructure} /></Route>
        <Route path={"/vault/stakeholder-analysis"}><ChurchBKPageLayout component={ChurchBKStakeholderAnalysis} /></Route>
        <Route path={"/vault/global-church-metrics"}><ChurchBKPageLayout component={ChurchBKGlobalChurchMetrics} /></Route>
        <Route path={"/church-bk*"}><ChurchBKPageLayout component={ChurchBKDocumentLibrary} /></Route>
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
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
