import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, ExternalLink, FileText, Filter, Search } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";

const evidenceList = [
  {
    id: "DOC-001",
    title: "Latham & Watkins Report (Redacted)",
    date: "2019-02-15",
    type: "Official Report",
    source: "Politico Leak",
    description: "The primary investigative report commissioned by the Archdiocese of Newark. Leaked in Nov 2025.",
    link: "/evidence/DOC-001_Latham_Report_Redacted.pdf"
  },
  {
    id: "DOC-002",
    title: "IRS Form 990 (2019)",
    date: "2020-05-15",
    type: "Financial Record",
    source: "ProPublica",
    description: "Tax filings showing the removal of Msgr. Ziccardi and Msgr. Nydegger from the Board of Trustees.",
    link: "/evidence/DOC-002_IRS_Form_990_2019.pdf"
  },
  {
    id: "DOC-003",
    title: "Vatican McCarrick Report",
    date: "2020-11-10",
    type: "Official Report",
    source: "Holy See",
    description: "Comprehensive report on the institutional knowledge of Theodore McCarrick's misconduct.",
    link: "/evidence/DOC-003_Vatican_McCarrick_Report.pdf"
  },
  {
    id: "DOC-004",
    title: "Seton Hall Announcement: Msgr. Reilly",
    date: "2024-04-02",
    type: "Press Release",
    source: "SHU.edu",
    description: "Official announcement appointing Msgr. Joseph Reilly as the 22nd President of Seton Hall.",
    link: "/evidence/DOC-004_SHU_Announcement_Reilly.pdf"
  },
  {
    id: "DOC-005",
    title: "Sea Girt Property Deed",
    date: "1981-06-12",
    type: "Public Record",
    source: "Monmouth County",
    description: "Original purchase deed for 300 Ocean Avenue by the Archdiocese of Newark.",
    link: "/evidence/DOC-005_Sea_Girt_Deed.pdf"
  },
  {
    id: "DOC-006",
    title: "Archdiocese Statement on Sale",
    date: "2019-01-08",
    type: "Press Release",
    source: "RCAN.org",
    description: "Statement confirming the sale of the Sea Girt residence for $1.6 million.",
    link: "/evidence/DOC-006_RCAN_Statement_Sale.pdf"
  }
];

export default function Evidence() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvidence = evidenceList.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-16 animate-in fade-in duration-1000">
        
        <PageHero 
          sectionNumber="08" 
          title="Evidence" 
          titleHighlight="Repository"
        >
          <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl">
            The primary source documents, financial records, and official reports that form the basis of this investigation.
          </p>
        </PageHero>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between sticky top-0 z-20 bg-background/95 backdrop-blur py-4 border-b border-border">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search by ID, Title, or Keyword..." 
              className="pl-10 bg-secondary/50 border-border focus:border-destructive/50 transition-colors font-mono text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="font-mono text-xs uppercase tracking-wider">
            <Filter className="w-4 h-4 mr-2" />
            Filter Type
          </Button>
        </div>

        {/* Evidence Table */}
        <Card className="bg-card border-border">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="font-mono text-xs uppercase tracking-wider text-muted-foreground w-[100px]">ID</TableHead>
                <TableHead className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Document Title</TableHead>
                <TableHead className="font-mono text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">Date</TableHead>
                <TableHead className="font-mono text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">Type</TableHead>
                <TableHead className="font-mono text-xs uppercase tracking-wider text-muted-foreground text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvidence.map((doc) => (
                <TableRow key={doc.id} className="border-border hover:bg-muted/50 transition-colors group">
                  <TableCell className="font-mono text-xs text-destructive font-bold">{doc.id}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-heading text-lg text-foreground group-hover:text-destructive transition-colors">{doc.title}</div>
                      <div className="font-body text-xs text-muted-foreground line-clamp-1">{doc.description}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground hidden md:table-cell">{doc.date}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="secondary" className="font-mono text-[10px] uppercase">{doc.type}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost" className="hover:text-destructive hover:bg-destructive/10" asChild>
                      <a href={doc.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        <span className="sr-only">View</span>
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <JourneyNav />
      </div>
    </Layout>
  );
}
