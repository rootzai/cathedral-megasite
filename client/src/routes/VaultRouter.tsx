import React from "react";
import { Route } from "wouter";
import ChurchBKLayout from "../components/ChurchBKLayout";

// Church BK Pages
const ChurchBKActiveCaseDossiers = React.lazy(() => import("../pages/church-bk/ActiveCaseDossiers"));
const ChurchBKCardinalateAndMcCarrick = React.lazy(() => import("../pages/church-bk/CardinalateAndMcCarrick"));
const ChurchBKClergyMetrics = React.lazy(() => import("../pages/church-bk/ClergyMetrics"));
const ChurchBKCreditorCommitteePortal = React.lazy(() => import("../pages/church-bk/CreditorCommitteePortal"));
const ChurchBKDiocesanFinance = React.lazy(() => import("../pages/church-bk/DiocesanFinance"));
const ChurchBKDocumentLibrary = React.lazy(() => import("../pages/church-bk/DocumentLibrary"));
const ChurchBKFinancialModel = React.lazy(() => import("../pages/church-bk/FinancialOperatingModel"));
const ChurchBKGlobalChurchMetrics = React.lazy(() => import("../pages/church-bk/GlobalChurchMetrics"));
const ChurchBKGlobalGrowth = React.lazy(() => import("../pages/church-bk/GlobalGrowth"));
const ChurchBKHome = React.lazy(() => import("../pages/church-bk/Home"));
const ChurchBKInstitutionalStructure = React.lazy(() => import("../pages/church-bk/InstitutionalStructure"));
const ChurchBKMcCarrickMechanism = React.lazy(() => import("../pages/church-bk/McCarrickMechanism"));
const ChurchBKSacramentalData = React.lazy(() => import("../pages/church-bk/SacramentalData"));
const ChurchBKStakeholderAnalysis = React.lazy(() => import("../pages/church-bk/StakeholderAnalysis"));
const ChurchBKTheCardinalate = React.lazy(() => import("../pages/church-bk/TheCardinalate"));
const ChurchBKTheCorporateVeil = React.lazy(() => import("../pages/church-bk/TheCorporateVeil"));
const LegalFindings = React.lazy(() => import("../pages/vault/LegalFindings"));
const ForensicIntelligence = React.lazy(() => import("../pages/church-bk/ForensicIntelligence"));

function ChurchBKPageLayout({ component: Component }: { component: React.ComponentType }) {
    return (
        <div className="theme-bankruptcy min-h-screen bg-background text-foreground transition-colors duration-500">
            <ChurchBKLayout>
                <Component />
            </ChurchBKLayout>
        </div>
    );
}

export const VaultRoutes = [
    <Route key="v1" path={"/vault"}><ChurchBKPageLayout component={LegalFindings} /></Route>,
    <Route key="v1-findings" path={"/vault/findings"}><ChurchBKPageLayout component={LegalFindings} /></Route>,
    <Route key="v1-bk" path={"/vault/bankruptcy"}><ChurchBKPageLayout component={ChurchBKHome} /></Route>,
    <Route key="v2" path={"/vault/documents"}><ChurchBKPageLayout component={ChurchBKDocumentLibrary} /></Route>,
    <Route key="v3" path={"/vault/finances"}><ChurchBKPageLayout component={ChurchBKDiocesanFinance} /></Route>,
    <Route key="v4" path={"/vault/the-corporate-veil"}><ChurchBKPageLayout component={ChurchBKTheCorporateVeil} /></Route>,
    <Route key="v5" path={"/vault/active-case-dossiers"}><ChurchBKPageLayout component={ChurchBKActiveCaseDossiers} /></Route>,
    <Route key="v6" path={"/vault/creditor-committee"}><ChurchBKPageLayout component={ChurchBKCreditorCommitteePortal} /></Route>,
    <Route key="v7" path={"/vault/institutional-structure"}><ChurchBKPageLayout component={ChurchBKInstitutionalStructure} /></Route>,
    <Route key="v8" path={"/vault/forensic-model"}><ChurchBKPageLayout component={ChurchBKFinancialModel} /></Route>,
    <Route key="v9" path={"/vault/stakeholder-analysis"}><ChurchBKPageLayout component={ChurchBKStakeholderAnalysis} /></Route>,
    <Route key="v10" path={"/vault/the-cardinalate"}><ChurchBKPageLayout component={ChurchBKTheCardinalate} /></Route>,
    <Route key="v11" path={"/vault/global-growth"}><ChurchBKPageLayout component={ChurchBKGlobalGrowth} /></Route>,
    <Route key="v12" path={"/vault/sacramental-data"}><ChurchBKPageLayout component={ChurchBKSacramentalData} /></Route>,
    <Route key="v14" path={"/vault/clergy-metrics"}><ChurchBKPageLayout component={ChurchBKClergyMetrics} /></Route>,
    <Route key="v-intel" path={"/vault/intelligence"}><ChurchBKPageLayout component={ForensicIntelligence} /></Route>,
    <Route key="v13" path={"/church-bk*"}><ChurchBKPageLayout component={ChurchBKDocumentLibrary} /></Route>
];
