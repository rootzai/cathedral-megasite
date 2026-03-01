import Layout from "@/components/ChurchBKLayout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, ExternalLink, Search, Filter, Eye } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocumentViewer from "@/components/DocumentViewer";

interface Document {
  id: string;
  title: string;
  category: "Court Filing" | "Financial Report" | "Investigative Report" | "Legal Ruling" | "Plan of Reorganization";
  date: string;
  source: string;
  description: string;
  url: string;
  caseRef?: string;
}

const documents: Document[] = [
  // Los Angeles
  {
    id: "DOC-001-LA-Settlement",
    title: "Archdiocese of Los Angeles Settlement Agreement",
    category: "Legal Ruling",
    date: "2024-10-16",
    source: "Superior Court of California",
    description: "Official settlement agreement detailing the $880 million payout structure and funding sources including insurance reserves and accumulated assets.",
    url: "/documents/DOC-001-LA-Settlement.pdf",
    caseRef: "Los Angeles"
  },
  
  // San Francisco
  {
    id: "DOC-002-SF-Petition",
    title: "San Francisco Chapter 11 Petition",
    category: "Court Filing",
    date: "2023-08-21",
    source: "US Bankruptcy Court (NDCA)",
    description: "Initial bankruptcy petition filing for the Archdiocese of San Francisco, listing estimated assets and liabilities.",
    url: "/documents/DOC-002-SF-Petition.pdf",
    caseRef: "San Francisco"
  },

  // Rockville Centre
  {
    id: "DOC-004-Rockville-Declaration",
    title: "Rockville Centre First Day Declaration",
    category: "Court Filing",
    date: "2020-10-01",
    source: "US Bankruptcy Court (SDNY)",
    description: "Declaration of the Very Reverend Eric R. Fasano in support of Chapter 11 petitions, outlining the diocese's financial structure.",
    url: "/documents/DOC-004-Rockville-Declaration.pdf",
    caseRef: "Rockville Centre"
  },
  {
    id: "DOC-004-Rockville-Plan",
    title: "Rockville Centre Plan of Reorganization",
    category: "Plan of Reorganization",
    date: "2024-12-15",
    source: "US Bankruptcy Court (SDNY)",
    description: "Confirmed plan establishing a $323 million trust for survivors and detailing the contribution structure.",
    url: "/documents/DOC-004-Rockville-Plan.pdf",
    caseRef: "Rockville Centre"
  },

  // Buffalo
  {
    id: "DOC-005-Buffalo-Petition",
    title: "Buffalo Chapter 11 Petition",
    category: "Court Filing",
    date: "2020-02-28",
    source: "US Bankruptcy Court (WDNY)",
    description: "Initial bankruptcy petition for the Diocese of Buffalo following the Child Victims Act window opening.",
    url: "/documents/DOC-005-Buffalo-Petition.pdf",
    caseRef: "Buffalo"
  },
  {
    id: "DOC-005-Buffalo-Audit",
    title: "Buffalo Internal Audit Newsletter (Parish Tax)",
    category: "Financial Report",
    date: "2025-07-15",
    source: "Diocese of Buffalo Internal Audit",
    description: "Internal document revealing the 'progressive percentage' tax on parishes (Accounts 2995/2996) to fund the settlement.",
    url: "/documents/DOC-005-Buffalo-Audit.pdf",
    caseRef: "Buffalo"
  },

  // Oakland
  {
    id: "DOC-008-Oakland-Dismissal",
    title: "Oakland Motion to Dismiss",
    category: "Court Filing",
    date: "2025-09-15",
    source: "US Bankruptcy Court (NDCA)",
    description: "Motion by the Diocese to dismiss its own bankruptcy case, citing excessive professional fees.",
    url: "/documents/DOC-008-Oakland-Dismissal.pdf",
    caseRef: "Oakland"
  }
];

export default function DocumentLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.caseRef?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? doc.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(documents.map(d => d.category)));

  return (
    <Layout>
      <SectionHeader 
        title="Document Library" 
        subtitle="Primary source repository of bankruptcy filings, court orders, internal financial audits, and settlement agreements."
      />

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search documents by title, case, or keyword..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          <Button 
            variant={selectedCategory === null ? "default" : "outline"} 
            onClick={() => setSelectedCategory(null)}
            className="whitespace-nowrap"
          >
            All Documents
          </Button>
          {categories.map(category => (
            <Button 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"} 
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <Card key={doc.id} className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs font-mono">{doc.id}</Badge>
                      <Badge variant="secondary" className="text-xs">{doc.category}</Badge>
                      {doc.caseRef && (
                        <Badge variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                          {doc.caseRef}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 max-w-3xl">
                      {doc.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Filed: <span className="font-mono text-foreground">{doc.date}</span></span>
                      <span>Source: <span className="font-semibold text-foreground">{doc.source}</span></span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-2 min-w-[140px]">
                    <DocumentViewer title={doc.title} documentId={doc.id}>
                      <Button className="w-full gap-2">
                        <Eye className="w-4 h-4" />
                        View Document
                      </Button>
                    </DocumentViewer>
                    <Button variant="outline" className="w-full gap-2" disabled title="Download unavailable in preview">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12 bg-muted/10 rounded-lg border border-dashed border-border">
            <Filter className="w-12 h-12 mx-auto text-muted-foreground opacity-20 mb-4" />
            <h3 className="text-lg font-semibold text-foreground">No documents found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            <Button 
              variant="link" 
              onClick={() => { setSearchQuery(""); setSelectedCategory(null); }}
              className="mt-2"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
