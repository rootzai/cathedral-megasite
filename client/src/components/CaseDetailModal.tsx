import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, AlertTriangle } from "lucide-react";
import React from "react";

interface CaseDetailModalProps {
  caseId: string;
  data: {
    title: string;
    filingDate: string;
    status: string;
    settlementAmount: string;
    narrative: string;
    keyTactics: string[];
    documents: { title: string; url: string }[];
  };
  children: React.ReactNode;
}

export default function CaseDetailModal({ caseId, data, children }: CaseDetailModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif font-bold text-primary flex items-center gap-2 flex-wrap">
            {data.title}
            <Badge variant={data.status.includes("Active") ? "destructive" : "secondary"} className="ml-2 text-xs">
              {data.status}
            </Badge>
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Filing Date: <span className="font-semibold text-foreground">{data.filingDate}</span> | 
            Settlement: <span className="font-semibold text-foreground">{data.settlementAmount}</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <div className="space-y-6 py-4">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Case Narrative</h4>
                <p className="text-foreground leading-relaxed">
                  {data.narrative}
                </p>
              </div>

              <div className="bg-muted/30 p-4 rounded-md border border-border/50">
                <h4 className="text-sm font-bold uppercase tracking-wider text-destructive mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Key Legal Tactics
                </h4>
                <ul className="space-y-2">
                  {data.keyTactics.map((tactic, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Key Filings</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.documents && data.documents.length > 0 ? (
                    data.documents.map((doc, i) => (
                      <Button key={i} variant="outline" className="justify-start h-auto py-3 px-4 w-full" asChild>
                        <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                          <FileText className="w-4 h-4 text-primary shrink-0" />
                          <div className="text-left overflow-hidden w-full">
                            <div className="font-semibold text-sm truncate" title={doc.title}>{doc.title}</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              View Document <ExternalLink className="w-3 h-3" />
                            </div>
                          </div>
                        </a>
                      </Button>
                    ))
                  ) : (
                    <div className="text-sm text-muted-foreground italic col-span-2">
                      No specific documents linked for this case yet.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
