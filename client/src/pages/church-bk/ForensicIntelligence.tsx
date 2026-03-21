import React, { useState, Suspense, lazy } from 'react';
import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Globe, Users, Landmark, Wallet, Crown } from "lucide-react";

// Lazy load the sub-sections
const FinancialModel = lazy(() => import("./FinancialOperatingModel"));
const GlobalChurchMetrics = lazy(() => import("./GlobalChurchMetrics"));
const StakeholderAnalysis = lazy(() => import("./StakeholderAnalysis"));
const InstitutionalStructure = lazy(() => import("./InstitutionalStructure"));
const CardinalateAndMcCarrick = lazy(() => import("./CardinalateAndMcCarrick"));

export default function ForensicIntelligence() {
    const [activeTab, setActiveTab] = useState("structure");

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="mb-12">
                <div className="inline-block px-3 py-1 mb-4 bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest">
                    Forensic Intelligence Vault
                </div>
                <h1 className="text-4xl font-serif font-bold mb-4">Research & Intelligence Index</h1>
                <p className="text-zinc-600 max-w-2xl leading-relaxed">
                    A consolidated repository of institutional research, financial modeling, and stakeholder analysis
                    mapping the systemic infrastructure of the Sodom Hall investigation.
                </p>
            </header>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 h-auto bg-zinc-100 p-1 border-b border-zinc-200">
                    <TabsTrigger value="structure" className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 px-4 flex items-center gap-2">
                        <Landmark size={14} />
                        Structure
                    </TabsTrigger>
                    <TabsTrigger value="stakeholders" className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 px-4 flex items-center gap-2">
                        <Users size={14} />
                        Stakeholders
                    </TabsTrigger>
                    <TabsTrigger value="financial" className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 px-4 flex items-center gap-2">
                        <Wallet size={14} />
                        Financials
                    </TabsTrigger>
                    <TabsTrigger value="metrics" className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 px-4 flex items-center gap-2">
                        <Globe size={14} />
                        Metrics
                    </TabsTrigger>
                    <TabsTrigger value="cardinalate" className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 px-4 flex items-center gap-2">
                        <Crown size={14} />
                        The Hub
                    </TabsTrigger>
                </TabsList>

                <div className="min-h-[600px] border-t border-zinc-50 pt-8">
                    <Suspense fallback={
                        <div className="flex flex-col items-center justify-center py-40 text-zinc-400 gap-4">
                            <Loader2 className="animate-spin" size={32} />
                            <p className="text-sm font-mono uppercase tracking-widest">Loading Forensic Data...</p>
                        </div>
                    }>
                        <TabsContent value="structure" className="m-0 focus-visible:outline-none">
                            <InstitutionalStructure />
                        </TabsContent>
                        <TabsContent value="stakeholders" className="m-0 focus-visible:outline-none">
                            <StakeholderAnalysis />
                        </TabsContent>
                        <TabsContent value="financial" className="m-0 focus-visible:outline-none">
                            <FinancialModel />
                        </TabsContent>
                        <TabsContent value="metrics" className="m-0 focus-visible:outline-none">
                            <GlobalChurchMetrics />
                        </TabsContent>
                        <TabsContent value="cardinalate" className="m-0 focus-visible:outline-none">
                            <CardinalateAndMcCarrick />
                        </TabsContent>
                    </Suspense>
                </div>
            </Tabs>
        </div>
    );
}
