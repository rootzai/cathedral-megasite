import React from "react";
import { Route } from "wouter";
import { BreachLayout, CoverUpLayout, OriginLayout, SuccessionLayout, RulingLayout } from "../components/UnifiedSectionLayouts";
import TheyKnew from "../pages/TheyKnew";
import LorenzoHome from "../pages/endgame/lorenzo/Home";
const HeadlineNews = React.lazy(() => import("../pages/HeadlineNews"));

// Church BK
const ChurchBKActiveCaseDossiers = React.lazy(() => import("../pages/church-bk/ActiveCaseDossiers"));
const ChurchBKGlobalChurchMetrics = React.lazy(() => import("../pages/church-bk/GlobalChurchMetrics"));
const ChurchBKMcCarrickMechanism = React.lazy(() => import("../pages/church-bk/McCarrickMechanism"));

// Ruling
const RulingHome = React.lazy(() => import("../pages/ruling/Home"));
const BeachHouse = React.lazy(() => import("../pages/ruling/BeachHouse"));
const RulingTimeline = React.lazy(() => import("../pages/ruling/Timeline"));
const RulingDirtyDozen = React.lazy(() => import("../pages/ruling/DirtyDozen"));
const RulingTobinHypocrisy = React.lazy(() => import("../pages/ruling/TobinHypocrisy"));
const RulingAnalysis = React.lazy(() => import("../pages/ruling/Analysis"));
const RulingReilly = React.lazy(() => import("../pages/ruling/Reilly"));
const RulingCorporateVeil = React.lazy(() => import("../pages/ruling/CorporateVeil"));
const RulingSanctionPlea = React.lazy(() => import("../pages/ruling/SanctionPlea"));
const RulingSheeranMcCarrick = React.lazy(() => import("../pages/ruling/SheeranMcCarrick"));
const RulingEvidence = React.lazy(() => import("../pages/ruling/Evidence"));

// Expose
const CheckchioNewOrleans = React.lazy(() => import("../pages/expose/CheckchioNewOrleans"));
const EpsteinNexus = React.lazy(() => import("../pages/expose/EpsteinNexus"));
const KennethMartinexpose = React.lazy(() => import("../pages/expose/KennethMartin"));
const LegalTrumvirate = React.lazy(() => import("../pages/expose/LegalTrumvirate"));
const McCarrickNetworkexpose = React.lazy(() => import("../pages/expose/McCarrickNetwork"));
const Overview = React.lazy(() => import("../pages/expose/Overview"));
const RabnerExhibits = React.lazy(() => import("../pages/expose/RabnerExhibits"));
const WhistleblowerUnmasking = React.lazy(() => import("../pages/expose/WhistleblowerUnmasking"));
const ExposePortal = React.lazy(() => import("../pages/expose/Portal"));
const SuccessionEpilogue = React.lazy(() => import("../pages/SuccessionEpilogue"));
const ReillyProtection = React.lazy(() => import("../pages/expose/ReillyProtection"));
const AppealGrounds = React.lazy(() => import("../pages/expose/AppealGrounds"));

// Endgame
const McCarrickDownfall = React.lazy(() => import("../pages/endgame/mccarrick/Downfall"));

export const ExposeRoutes = [
    // THE ORIGIN (Act 1)
    <Route key="e1" path={"/origin/root"}><ExposePortal /></Route>,
    <Route key="e2" path={"/origin/martin"}><OriginLayout><KennethMartinexpose /></OriginLayout></Route>,
    <Route key="e2-alias" path={"/expose/kenneth-martin"}><OriginLayout><KennethMartinexpose /></OriginLayout></Route>,
    <Route key="e3" path={"/origin/beach-house"}><OriginLayout><BeachHouse /></OriginLayout></Route>,
    <Route key="e4" path={"/origin/network"}><OriginLayout><McCarrickNetworkexpose /></OriginLayout></Route>,
    <Route key="e4-alias" path={"/expose/mccarrick-network"}><OriginLayout><McCarrickNetworkexpose /></OriginLayout></Route>,
    <Route key="e5" path={"/origin/explosion"}><OriginLayout><McCarrickDownfall /></OriginLayout></Route>,

    // THE COVER-UP (Act 2)
    <Route key="e6" path={"/coverup"}><CoverUpLayout><ChurchBKMcCarrickMechanism /></CoverUpLayout></Route>,
    <Route key="e7" path={"/coverup/financial"}><CoverUpLayout><ChurchBKMcCarrickMechanism /></CoverUpLayout></Route>,
    <Route key="e8" path={"/coverup/complicity"}><CoverUpLayout><TheyKnew /></CoverUpLayout></Route>,
    <Route key="e9" path={"/coverup/legal"}><CoverUpLayout><LegalTrumvirate /></CoverUpLayout></Route>,
    <Route key="e9-alias" path={"/coverup/triumvirate"}><CoverUpLayout><LegalTrumvirate /></CoverUpLayout></Route>,
    <Route key="e9-expose" path={"/expose/legal-triumvirate"}><CoverUpLayout><LegalTrumvirate /></CoverUpLayout></Route>,
    <Route key="e10" path={"/coverup/epstein"}><EpsteinNexus /></Route>,
    <Route key="e10-expose" path={"/expose/epstein-nexus"}><EpsteinNexus /></Route>,
    <Route key="e-reilly" path={"/expose/reilly-protection"}><CoverUpLayout><ReillyProtection /></CoverUpLayout></Route>,
    <Route key="e-reilly-ascent" path={"/expose/reilly-ascent"}><CoverUpLayout><ReillyProtection /></CoverUpLayout></Route>,

    // THE BREACH (Act 3)
    <Route key="e11" path={"/breach"}><BreachLayout><WhistleblowerUnmasking /></BreachLayout></Route>,
    <Route key="e12" path={"/breach/whistleblowers"}><BreachLayout><WhistleblowerUnmasking /></BreachLayout></Route>,
    <Route key="e13" path={"/breach/courtroom"}><BreachLayout><RulingTimeline /></BreachLayout></Route>,
    <Route key="e14" path={"/breach/rabner"}><BreachLayout><RabnerExhibits /></BreachLayout></Route>,
    <Route key="e14-expose" path={"/expose/rabner-exhibits"}><BreachLayout><RabnerExhibits /></BreachLayout></Route>,
    <Route key="e15" path={"/breach/forensics"}><BreachLayout><Overview /></BreachLayout></Route>,
    <Route key="e-appeal" path={"/expose/appeal-grounds"}><BreachLayout><AppealGrounds /></BreachLayout></Route>,
    <Route key="e-nyre" path={"/expose/nyre-dismissal"}><CoverUpLayout><Overview /></CoverUpLayout></Route>,

    // THE SUCCESSION (Act 4)
    <Route key="e16" path={"/succession"}><SuccessionLayout><LorenzoHome /></SuccessionLayout></Route>,
    <Route key="e17" path={"/succession/regime"}><SuccessionLayout><LorenzoHome /></SuccessionLayout></Route>,
    <Route key="e18" path={"/succession/checchio"}><SuccessionLayout><CheckchioNewOrleans /></SuccessionLayout></Route>,
    <Route key="e18-expose" path={"/expose/checchio-new-orleans"}><SuccessionLayout><CheckchioNewOrleans /></SuccessionLayout></Route>,
    <Route key="e19" path={"/succession/cases"}><SuccessionLayout><ChurchBKActiveCaseDossiers /></SuccessionLayout></Route>,
    <Route key="e20" path={"/succession/horizon"}><SuccessionLayout><ChurchBKGlobalChurchMetrics /></SuccessionLayout></Route>,
    <Route key="e21" path={"/succession/epilogue"}><SuccessionLayout><SuccessionEpilogue /></SuccessionLayout></Route>,

    // HEADLINE NEWS
    <Route key="headline-news" path={"/headline-news"}><HeadlineNews /></Route>,

    // Portals
    <Route key="portal" path={"/expose"}><ExposePortal /></Route>,
    <Route key="origin-root" path={"/origin"}><ExposePortal /></Route>,

    // THE RULING
    <Route key="r1" path={"/ruling"}><RulingLayout><RulingHome /></RulingLayout></Route>,
    <Route key="r2" path={"/ruling/dirty-dozen"}><RulingLayout><RulingDirtyDozen /></RulingLayout></Route>,
    <Route key="r3" path={"/ruling/tobin-hypocrisy"}><RulingLayout><RulingTobinHypocrisy /></RulingLayout></Route>,
    <Route key="r4" path={"/ruling/analysis"}><RulingLayout><RulingAnalysis /></RulingLayout></Route>,
    <Route key="r5" path={"/ruling/reilly"}><RulingLayout><RulingReilly /></RulingLayout></Route>,
    <Route key="r6" path={"/ruling/corporate-veil"}><RulingLayout><RulingCorporateVeil /></RulingLayout></Route>,
    <Route key="r7" path={"/ruling/sanction-plea"}><RulingLayout><RulingSanctionPlea /></RulingLayout></Route>,
    <Route key="r8" path={"/ruling/sheeran-mccarrick"}><RulingLayout><RulingSheeranMcCarrick /></RulingLayout></Route>,
    <Route key="r9" path={"/ruling/evidence"}><RulingLayout><RulingEvidence /></RulingLayout></Route>
];
