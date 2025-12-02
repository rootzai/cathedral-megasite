import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Eye, FileText, Search, UserX, Cross } from "lucide-react";
import { useState } from "react";

import { clergyList } from "@/data/clergy";
import { PageHero } from "@/components/PageHero";
import { SectionDivider } from "@/components/SectionDivider";

export default function DirtyDozen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const filteredClergy = clergyList.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? member.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <Layout>
      <div className="space-y-16 animate-in fade-in duration-1000">
        
        <PageHero 
          sectionNumber="02" 
          title="The Dirty" 
          titleHighlight="Dozen"
        >
          <div className="space-y-6 max-w-4xl">
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              The Latham Report identified 13 clergy members with credible knowledge of priest sexual abuse at the Seton Hall seminaries. Each of these men failed to report multiple incidents to the authorities, instead taking care of matters internally.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              These are the information we have collected on them and why we believe they are guilty and deserve to be outed as the perverts, creeps, and leches they've proven themselves to be.
            </p>
            
            {/* Methodology Inset Box */}
            <div className="mt-8 p-6 bg-card/50 border border-border/50 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-destructive/50" />
              <div className="flex items-start gap-4">
                <div className="p-2 bg-background rounded-md border border-border shadow-sm">
                  <Search className="w-5 h-5 text-destructive" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-lg text-foreground tracking-wide">Methodology of Identification</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Our identification process relies on cross-referencing the redacted Latham Report with public employment records, sudden resignations (the "2020 Purge"), and leaked internal memos. By tracking the "missing men"—those who vanished from leadership roles simultaneously with the report's release—we have reconstructed the list of those implicated in the cover-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageHero>

        <SectionDivider />

        {/* Search and Filter Section */}
        <div className="sticky top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 border-b border-border">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search the dossier..." 
                className="pl-10 bg-secondary/50 border-border focus:border-destructive/50 transition-colors font-mono text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {["Removed", "Promoted", "Active", "Deceased"].map((status) => (
                <Badge 
                  key={status}
                  variant={filterStatus === status ? "default" : "outline"}
                  className={`cursor-pointer font-mono uppercase tracking-wider transition-all hover:border-destructive/50 ${
                    filterStatus === status ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""
                  }`}
                  onClick={() => setFilterStatus(filterStatus === status ? null : status)}
                >
                  {status}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* The Dirty Dozen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredClergy.map((member) => (
            <Dialog key={member.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer bg-card border-border hover:border-destructive/50 transition-all duration-500 hover:shadow-2xl hover:shadow-destructive/10 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <Eye className="w-6 h-6 text-destructive" />
                  </div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                    <div className="absolute top-4 left-4">
                      <Cross className="w-6 h-6 text-white/50 rotate-180" />
                    </div>
                  </div>

                  <CardHeader className="space-y-4 -mt-12 relative z-10">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className={`font-mono uppercase tracking-widest ${
                        member.status === "Promoted" ? "text-destructive border-destructive/50 bg-destructive/10" :
                        member.status === "Removed" ? "text-orange-500 border-orange-500/50 bg-orange-500/10" :
                        "text-muted-foreground"
                      }`}>
                        {member.status}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-2xl group-hover:text-destructive transition-colors">
                      {member.name}
                    </CardTitle>
                    <p className="font-mono text-sm text-muted-foreground">{member.role}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <Separator className="my-4 bg-border/50" />
                    <p className="font-body text-muted-foreground line-clamp-3 group-hover:text-foreground transition-colors">
                      {member.details}
                    </p>
                    
                    <div className="mt-6 flex items-center text-xs font-mono text-muted-foreground group-hover:text-destructive transition-colors">
                      <FileText className="w-4 h-4 mr-2" />
                      CLICK TO VIEW FULL DOSSIER
                    </div>
                  </CardContent>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-destructive transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl bg-black border-destructive/20">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="font-mono uppercase tracking-widest text-destructive border-destructive/50">
                      CONFIDENTIAL DOSSIER
                    </Badge>
                    <Badge variant="outline" className="font-mono uppercase tracking-widest">
                      ID: {member.id.toUpperCase()}
                    </Badge>
                  </div>
                  <DialogTitle className="font-heading text-4xl text-white mb-1">{member.name}</DialogTitle>
                  <DialogDescription className="font-mono text-lg text-muted-foreground">
                    {member.role} | {member.location}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 py-4">
                  <div className="flex items-center justify-between bg-destructive/10 p-4 rounded border border-destructive/20">
                    <span className="font-mono text-sm uppercase tracking-widest text-destructive">Probability of Implication</span>
                    <span className="font-heading text-2xl text-white">{member.probability}</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-destructive">Role at Incident</h4>
                    <p className="font-body text-foreground leading-relaxed border-l-2 border-destructive/30 pl-4">
                      {member.incidentRole}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-destructive">Connection to Non-Reporting</h4>
                    <p className="font-body text-foreground leading-relaxed border-l-2 border-destructive/30 pl-4">
                      {member.nonReportingConnection}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-destructive">Evidence of Outcome</h4>
                    <p className="font-body text-foreground leading-relaxed border-l-2 border-destructive/30 pl-4">
                      {member.outcomeEvidence}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-destructive">Key Evidence</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.evidenceKeys.map((key, i) => (
                        <Badge key={i} variant="secondary" className="font-mono text-xs">
                          {key}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end pt-4 border-t border-border/50">
                  <Button variant="ghost" className="font-mono text-xs text-muted-foreground hover:text-destructive">
                    <UserX className="w-4 h-4 mr-2" />
                    REPORT NEW EVIDENCE
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <JourneyNav />
      </div>
    </Layout>
  );
}
