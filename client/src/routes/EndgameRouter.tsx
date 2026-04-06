import React from "react";
import { Route } from "wouter";
import EndgameLayout from "../components/EndgameLayout";
import TheyKnew from "../pages/TheyKnew";

function EndgamePageLayout({ component: Component }: { component: React.ComponentType }) {
    return (
        <div className="theme-endgame min-h-screen bg-background text-foreground transition-colors duration-500">
            <EndgameLayout>
                <Component />
            </EndgameLayout>
        </div>
    );
}

// Endgame Portal and overarching pages
const EndgamePortal = React.lazy(() => import("../pages/endgame/Portal"));

// McCarrick Pages
const McCarrickAnalysis = React.lazy(() => import("../pages/endgame/mccarrick/Analysis"));
const McCarrickBackground = React.lazy(() => import("../pages/endgame/mccarrick/Background"));
const McCarrickConclusion = React.lazy(() => import("../pages/endgame/mccarrick/Conclusion"));
const McCarrickDownfall = React.lazy(() => import("../pages/endgame/mccarrick/Downfall"));
const McCarrickHome = React.lazy(() => import("../pages/endgame/mccarrick/Home"));
const McCarrickLegal = React.lazy(() => import("../pages/endgame/mccarrick/Legal"));
const McCarrickMechanisms = React.lazy(() => import("../pages/endgame/mccarrick/Mechanisms"));
const McCarrickNetwork = React.lazy(() => import("../pages/endgame/mccarrick/Network"));
const McCarrickProfile = React.lazy(() => import("../pages/endgame/mccarrick/Profile"));
const McCarrickResponses = React.lazy(() => import("../pages/endgame/mccarrick/Responses"));
const McCarrickSetonHall = React.lazy(() => import("../pages/endgame/mccarrick/SetonHall"));
const McCarrickSurvivors = React.lazy(() => import("../pages/endgame/mccarrick/Survivors"));
const McCarrickTheReckoning = React.lazy(() => import("../pages/endgame/mccarrick/TheReckoning"));
const McCarrickTheRegime = React.lazy(() => import("../pages/endgame/mccarrick/TheRegime"));
const McCarrickTheRise = React.lazy(() => import("../pages/endgame/mccarrick/TheRise"));
const McCarrickWarnings = React.lazy(() => import("../pages/endgame/mccarrick/Warnings"));
const McCarrickThePopes = React.lazy(() => import("../pages/endgame/mccarrick/ThePopes"));

// Checchio Pages
const CheckchioAscent = React.lazy(() => import("../pages/endgame/checchio/Ascent"));
const CheckchioControversies = React.lazy(() => import("../pages/endgame/checchio/Controversies"));
const CheckchioFormation = React.lazy(() => import("../pages/endgame/checchio/Formation"));
const CheckchioGovernance = React.lazy(() => import("../pages/endgame/checchio/Governance"));
const CheckchioHome = React.lazy(() => import("../pages/endgame/checchio/Home"));
const CheckchioPurge = React.lazy(() => import("../pages/endgame/checchio/Purge"));
const CheckchioStatus = React.lazy(() => import("../pages/endgame/checchio/Status"));

// Lorenzo Pages
const LorenzoElevation = React.lazy(() => import("../pages/endgame/lorenzo/Elevation"));
const LorenzoExpulsion = React.lazy(() => import("../pages/endgame/lorenzo/Expulsion"));
const LorenzoHome = React.lazy(() => import("../pages/endgame/lorenzo/Home"));
const LorenzoRehabilitation = React.lazy(() => import("../pages/endgame/lorenzo/Rehabilitation"));

// Martin Pages
const MartinChicago = React.lazy(() => import("../pages/endgame/martin/ChicagoConnection"));
const MartinCrimes = React.lazy(() => import("../pages/endgame/martin/Crimes"));
const MartinHome = React.lazy(() => import("../pages/endgame/martin/Home"));
const MartinLaunder = React.lazy(() => import("../pages/endgame/martin/TheLaunder"));

// Reilly Pages
const ReillyEndgame = React.lazy(() => import("../pages/endgame/Reilly"));

function PageLayout({ component: Component, theme = "theme-cathedral" }: { component: React.ComponentType; theme?: string }) {
    return (
        <div className={`${theme} min-h-screen bg-background text-foreground transition-colors duration-500`}>
            <Component />
        </div>
    );
}

export const EndgameRoutes = [
    <Route key="ledger" path={"/ledger"}><PageLayout component={TheyKnew} theme="theme-theyknew" /></Route>,
    <Route key="endgame" path={"/endgame"}><PageLayout component={TheyKnew} theme="theme-theyknew" /></Route>,

    <Route key="martin" path={"/ledger/martin"}><EndgamePageLayout component={MartinHome} /></Route>,
    <Route key="martin-crimes" path={"/ledger/martin/crimes"}><EndgamePageLayout component={MartinCrimes} /></Route>,
    <Route key="martin-launder" path={"/ledger/martin/launder"}><EndgamePageLayout component={MartinLaunder} /></Route>,
    <Route key="martin-chicago" path={"/ledger/martin/chicago"}><EndgamePageLayout component={MartinChicago} /></Route>,

    <Route key="lorenzo" path={"/ledger/lorenzo"}><EndgamePageLayout component={LorenzoHome} /></Route>,
    <Route key="lorenzo-expulsion" path={"/ledger/lorenzo/expulsion"}><EndgamePageLayout component={LorenzoExpulsion} /></Route>,
    <Route key="lorenzo-rehab" path={"/ledger/lorenzo/rehabilitation"}><EndgamePageLayout component={LorenzoRehabilitation} /></Route>,
    <Route key="lorenzo-elevation" path={"/ledger/lorenzo/elevation"}><EndgamePageLayout component={LorenzoElevation} /></Route>,

    <Route key="reilly" path={"/ledger/reilly"}><EndgamePageLayout component={ReillyEndgame} /></Route>,

    <Route key="mccarrick" path={"/ledger/mccarrick"}><EndgamePageLayout component={McCarrickHome} /></Route>,
    <Route key="mccarrick-bg" path={"/ledger/mccarrick/background"}><EndgamePageLayout component={McCarrickBackground} /></Route>,
    <Route key="mccarrick-profile" path={"/ledger/mccarrick/profile"}><EndgamePageLayout component={McCarrickProfile} /></Route>,
    <Route key="mccarrick-rise" path={"/ledger/mccarrick/the-rise"}><EndgamePageLayout component={McCarrickTheRise} /></Route>,
    <Route key="mccarrick-regime" path={"/ledger/mccarrick/the-regime"}><EndgamePageLayout component={McCarrickTheRegime} /></Route>,
    <Route key="mccarrick-network" path={"/ledger/mccarrick/network"}><EndgamePageLayout component={McCarrickNetwork} /></Route>,
    <Route key="mccarrick-popes" path={"/ledger/mccarrick/popes"}><EndgamePageLayout component={McCarrickThePopes} /></Route>,
    <Route key="mccarrick-warn" path={"/ledger/mccarrick/warnings"}><EndgamePageLayout component={McCarrickWarnings} /></Route>,
    <Route key="mccarrick-mech" path={"/ledger/mccarrick/mechanisms"}><EndgamePageLayout component={McCarrickMechanisms} /></Route>,
    <Route key="mccarrick-seton" path={"/ledger/mccarrick/seton-hall"}><EndgamePageLayout component={McCarrickSetonHall} /></Route>,
    <Route key="mccarrick-downfall" path={"/ledger/mccarrick/downfall"}><EndgamePageLayout component={McCarrickDownfall} /></Route>,
    <Route key="mccarrick-reckoning" path={"/ledger/mccarrick/the-reckoning"}><EndgamePageLayout component={McCarrickTheReckoning} /></Route>,
    <Route key="mccarrick-legal" path={"/ledger/mccarrick/legal"}><EndgamePageLayout component={McCarrickLegal} /></Route>,
    <Route key="mccarrick-survivors" path={"/ledger/mccarrick/survivors"}><EndgamePageLayout component={McCarrickSurvivors} /></Route>,
    <Route key="mccarrick-responses" path={"/ledger/mccarrick/responses"}><EndgamePageLayout component={McCarrickResponses} /></Route>,
    <Route key="mccarrick-analysis" path={"/ledger/mccarrick/analysis"}><EndgamePageLayout component={McCarrickAnalysis} /></Route>,
    <Route key="mccarrick-conclusion" path={"/ledger/mccarrick/conclusion"}><EndgamePageLayout component={McCarrickConclusion} /></Route>,

    <Route key="checchio" path={"/ledger/checchio"}><EndgamePageLayout component={CheckchioHome} /></Route>,
    <Route key="checchio-form" path={"/ledger/checchio/formation"}><EndgamePageLayout component={CheckchioFormation} /></Route>,
    <Route key="checchio-ascent" path={"/ledger/checchio/ascent"}><EndgamePageLayout component={CheckchioAscent} /></Route>,
    <Route key="checchio-gov" path={"/ledger/checchio/governance"}><EndgamePageLayout component={CheckchioGovernance} /></Route>,
    <Route key="checchio-cont" path={"/ledger/checchio/controversies"}><EndgamePageLayout component={CheckchioControversies} /></Route>,
    <Route key="checchio-purge" path={"/ledger/checchio/purge"}><EndgamePageLayout component={CheckchioPurge} /></Route>,
    <Route key="checchio-status" path={"/ledger/checchio/status"}><EndgamePageLayout component={CheckchioStatus} /></Route>
];
