import CaseDetailModal from "@/components/CaseDetailModal";
import Layout from "@/components/ChurchBKLayout";
import DocumentViewer from "@/components/DocumentViewer";
import SectionHeader from "@/components/SectionHeader";
import { SEO } from "@/components/SEO";
import SmartGlossary from "@/components/SmartGlossary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VisualTimeline from "@/components/VisualTimeline";
import bankruptcyNarratives from "@/data/bankruptcyNarratives.json";
import { BankruptcyNarrativesRecord, bankruptcyNarrativesRecordSchema, safeParseData } from "@/schemas/dataSchemas";
import { Activity, ExternalLink, Eye, Filter, Loader2, Scale } from "lucide-react";
import { lazy, Suspense, useMemo, useState } from "react";

const USMap = lazy(() => import("@/components/USMap"));

export default function ActiveCaseDossiers() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("full-list");

  const narrativesRecord: BankruptcyNarrativesRecord = useMemo(() => {
    try {
      return safeParseData(bankruptcyNarrativesRecordSchema, bankruptcyNarratives);
    } catch (e) {
      console.error(e);
      return {};
    }
  }, []);

  // Filter bankruptcy narratives based on selected state
  const filteredNarratives = selectedState
    ? Object.entries(narrativesRecord).filter(([_, data]) => {
      // Extract state code from title, e.g., "Diocese of Rockville Centre (NY)" -> "NY"
      const stateMatch = data.title.match(/\(([A-Z]{2})\)/);
      return stateMatch && stateMatch[1] === selectedState;
    })
    : Object.entries(narrativesRecord);

  // Handle state selection from map
  const handleStateSelect = (state: string | null) => {
    setSelectedState(state);
    if (state) {
      setActiveTab("full-list");
      // Scroll to list
      setTimeout(() => {
        const listElement = document.getElementById('bankruptcy-list');
        if (listElement) listElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <SEO title="Active Case Dossiers" /><SectionHeader
          title="Active Case Dossiers"
          subtitle="Live tracking of major Chapter 11 reorganizations, professional fee burn rates, and strategic asset maneuvering."
        />

        {/* Executive Summary Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Active Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">43</div>
              <p className="text-xs text-muted-foreground mt-1">Dioceses & Orders Filed</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Est. Professional Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">$350M+</div>
              <p className="text-xs text-muted-foreground mt-1">Cumulative <SmartGlossary term="Burn Rate" /></p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Assets in Dispute</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$4.4B+</div>
              <p className="text-xs text-muted-foreground mt-1">Real Estate & Liquid Capital</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Settlement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">18%</div>
              <p className="text-xs text-muted-foreground mt-1">Of Claim Value</p>
            </CardContent>
          </Card>
        </div>

        {/* Visual Timeline */}
        <VisualTimeline />

        {/* Interactive Map */}
        <div className="mb-12">
          <Suspense fallback={<div className="h-[400px] w-full flex items-center justify-center bg-gray-900 animate-pulse rounded-lg border border-border"><Loader2 className="w-8 h-8 animate-spin text-muted-foreground" /></div>}>
            <USMap onStateSelect={handleStateSelect} />
          </Suspense>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar List */}
            <div className="w-full md:w-64 flex-shrink-0">
              <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-2 p-0">
                <TabsTrigger
                  value="full-list"
                  className="w-full justify-start px-4 py-3 border border-border data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/20"
                >
                  <div className="text-left flex items-center gap-2">
                    <div className="font-semibold">View Full List ({Object.keys(narrativesRecord).length})</div>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </TabsTrigger>

                <div className="pt-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
                  Featured Cases
                </div>

                <TabsTrigger
                  value="la"
                  className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20"
                >
                  <div className="text-left">
                    <div className="font-semibold">Los Angeles</div>
                    <div className="text-xs opacity-70">California • Settled 2024</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="sf"
                  className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20"
                >
                  <div className="text-left">
                    <div className="font-semibold">San Francisco</div>
                    <div className="text-xs opacity-70">California • Filed 2023</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="rockville"
                  className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20"
                >
                  <div className="text-left">
                    <div className="font-semibold">Rockville Centre</div>
                    <div className="text-xs opacity-70">New York • Filed 2020</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="buffalo"
                  className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20"
                >
                  <div className="text-left">
                    <div className="font-semibold">Buffalo</div>
                    <div className="text-xs opacity-70">New York • Filed 2020</div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Content Area */}
            <div className="flex-1" id="bankruptcy-list">
              <TabsContent value="full-list" className="mt-0">
                <Card className="bg-card border-border/50">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">
                        {selectedState ? `Bankruptcy Filings in ${selectedState}` : "Full Bankruptcy Index"}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {selectedState
                          ? `Showing ${filteredNarratives.length} case(s) in ${selectedState}`
                          : "Comprehensive list of all 43 diocesan bankruptcy filings"}
                      </p>
                    </div>
                    {selectedState && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedState(null)}
                        className="text-xs h-8 gap-1 text-muted-foreground hover:text-foreground"
                      >
                        <Filter className="w-3 h-3" />
                        Clear Filter
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border border-border">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/50 hover:bg-muted/50">
                            <TableHead className="w-[300px]">Diocese</TableHead>
                            <TableHead>State</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredNarratives.length > 0 ? (
                            filteredNarratives.map(([key, data]) => {
                              // Extract state code safely
                              const stateMatch = data.title.match(/\(([A-Z]{2})\)/);
                              const stateCode = stateMatch ? stateMatch[1] : 'N/A';

                              return (
                                <TableRow key={key} className="hover:bg-muted/5">
                                  <TableCell className="font-medium">
                                    <div className="flex flex-col">
                                      <span>{data.title.split('(')[0].trim()}</span>
                                      <span className="text-xs text-muted-foreground md:hidden">{stateCode}</span>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className="font-mono text-xs">
                                      {stateCode}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    <Badge
                                      variant={data.status.includes("Active") ? "destructive" : "secondary"}
                                      className="text-[10px] whitespace-nowrap"
                                    >
                                      {data.status}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className="text-right">
                                    <CaseDetailModal caseId={key} data={data}>
                                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        <Eye className="h-4 w-4" />
                                        <span className="sr-only">View Dossier</span>
                                      </Button>
                                    </CaseDetailModal>
                                  </TableCell>
                                </TableRow>
                              );
                            })
                          ) : (
                            <TableRow>
                              <TableCell colSpan={4} className="text-center py-12 text-muted-foreground">
                                <div className="flex flex-col items-center gap-2">
                                  <Filter className="w-8 h-8 opacity-20" />
                                  <p>No bankruptcy filings found for {selectedState}.</p>
                                  <Button variant="link" onClick={() => setSelectedState(null)}>
                                    View all cases
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Los Angeles Dossier */}
              <TabsContent value="la" className="mt-0 space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <h2 className="text-2xl font-serif text-foreground">Archdiocese of Los Angeles</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-700">Settled</Badge>
                      <span className="text-sm text-muted-foreground">Largest Settlement in History</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Total Payout</div>
                    <div className="text-xl font-bold text-destructive">$880,000,000</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-card border-border/50">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Activity className="h-4 w-4 text-primary" />
                        Funding Structure
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        The $880 million settlement was funded through a combination of insurance buyouts, accumulated cash reserves, and contributions from religious orders. Notably, the Archdiocese avoided filing for Chapter 11 bankruptcy, opting instead for a global settlement to prevent a public examination of its assets and internal files.
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border/50">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Scale className="h-4 w-4 text-primary" />
                        Key Legal Strategy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        By settling outside of bankruptcy, the Archdiocese avoided the "transparency requirements" of Chapter 11, keeping the details of its "Corporation Sole" asset structure hidden from the public record.
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-end">
                  <DocumentViewer title="LA Settlement Agreement" documentId="DOC-001-LA-Settlement">
                    <Button className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Settlement Agreement
                    </Button>
                  </DocumentViewer>
                </div>
              </TabsContent>

              {/* San Francisco Dossier */}
              <TabsContent value="sf" className="mt-0 space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <h2 className="text-2xl font-serif text-foreground">Archdiocese of San Francisco</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="destructive">Active Litigation</Badge>
                      <span className="text-sm text-muted-foreground">Filed Aug 2023</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Est. Liability</div>
                    <div className="text-xl font-bold text-destructive">$500M+</div>
                  </div>
                </div>

                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-base">The "Corporation Sole" Battleground</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      San Francisco is currently the primary battleground for the "Corporation Sole" defense. The Creditors Committee is arguing that the parishes and schools are not separate legal entities but are merely divisions of the Archdiocese, making their assets available to pay survivors.
                    </p>
                    <div className="flex gap-2">
                      <DocumentViewer title="SF Chapter 11 Petition" documentId="DOC-002-SF-Petition">
                        <Button variant="outline" size="sm" className="gap-2">
                          <ExternalLink className="w-3 h-3" />
                          View Petition
                        </Button>
                      </DocumentViewer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Rockville Centre Dossier */}
              <TabsContent value="rockville" className="mt-0 space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <h2 className="text-2xl font-serif text-foreground">Diocese of Rockville Centre</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">Plan Confirmed</Badge>
                      <span className="text-sm text-muted-foreground">Dec 2024</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Settlement Fund</div>
                    <div className="text-xl font-bold text-destructive">$323,000,000</div>
                  </div>
                </div>

                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-base">Strategic Delay</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Rockville Centre utilized a "strategic delay" tactic, remaining in bankruptcy for over four years. This exhausted the resources of many survivors and forced a settlement that was significantly lower than initial demands.
                    </p>
                    <div className="flex gap-2">
                      <DocumentViewer title="Rockville Plan of Reorganization" documentId="DOC-004-Rockville-Plan">
                        <Button variant="outline" size="sm" className="gap-2">
                          <ExternalLink className="w-3 h-3" />
                          View Plan
                        </Button>
                      </DocumentViewer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Buffalo Dossier */}
              <TabsContent value="buffalo" className="mt-0 space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <h2 className="text-2xl font-serif text-foreground">Diocese of Buffalo</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">Plan Confirmed</Badge>
                      <span className="text-sm text-muted-foreground">Jan 2025</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Settlement Fund</div>
                    <div className="text-xl font-bold text-destructive">$273,900,000</div>
                  </div>
                </div>

                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-base">The "Parish Tax" Revelation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Internal audit documents revealed that the Diocese of Buffalo implemented a "progressive percentage tax" on parishes to fund the settlement, directly contradicting claims that parish assets were separate and untouchable.
                    </p>
                    <div className="flex gap-2">
                      <DocumentViewer title="Buffalo Audit Newsletter" documentId="DOC-005-Buffalo-Audit">
                        <Button variant="outline" size="sm" className="gap-2">
                          <ExternalLink className="w-3 h-3" />
                          View Audit Doc
                        </Button>
                      </DocumentViewer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs></>
  );
}
