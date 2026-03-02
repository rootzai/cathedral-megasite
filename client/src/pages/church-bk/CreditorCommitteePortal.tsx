import SectionHeader from "@/components/SectionHeader";
import SmartGlossary from "@/components/SmartGlossary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ExternalLink, FileText, Gavel, ShieldAlert, Users, Vote } from "lucide-react";

export default function CreditorCommitteePortal() {
  return (
    <>
      <SectionHeader
        title="Creditor Committee Portal"
        subtitle="A guide for survivors and creditors on navigating the Chapter 11 reorganization process, voting rights, and the 'Cramdown' mechanism."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Guide Column */}
        <div className="lg:col-span-2 space-y-8">

          {/* Immediate Action Alert */}
          <Card className="bg-destructive/10 border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="w-5 h-5" />
                Critical: The "Bar Date" Deadline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                In every Chapter 11 case, the court sets a strict deadline called the <SmartGlossary term="Bar Date" definition="The absolute deadline by which a creditor must file a proof of claim. Missing this date typically results in a total loss of rights to compensation.">Bar Date</SmartGlossary>.
                If you are a survivor of abuse and do not file a "Proof of Claim" by this date, you will be <strong>permanently barred</strong> from receiving any compensation or voting on the reorganization plan.
              </p>
              <div className="flex gap-4">
                <Button variant="destructive" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Download Proof of Claim Form
                </Button>
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Check Active Bar Dates
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* The Committee Structure */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                The Official Committee of Unsecured Creditors (UCC)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The <SmartGlossary term="UCC" definition="Official Committee of Unsecured Creditors. A body appointed by the US Trustee to represent the interests of all unsecured creditors (survivors) in the bankruptcy case.">UCC</SmartGlossary> is the primary body representing survivors.
                It is typically composed of 3-7 survivors selected by the US Trustee. The UCC hires its own lawyers and financial advisors, paid for by the Diocese's estate.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-muted/30 rounded-md border border-border/50">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-accent" />
                    Powers of the UCC
                  </h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Investigate diocese finances</li>
                    <li>Challenge fraudulent asset transfers</li>
                    <li>Negotiate the settlement trust size</li>
                    <li>Oppose the reorganization plan</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/30 rounded-md border border-border/50">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-accent" />
                    Fiduciary Duty
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Committee members have a legal duty to represent <em>all</em> survivors, not just their own interests. They cannot make side deals for themselves.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Voting Process & Cramdown */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Vote className="w-5 h-5 text-primary" />
                Voting & The "Cramdown" Threat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                To exit bankruptcy, the Diocese must propose a <SmartGlossary term="Plan of Reorganization" definition="A legal document that classifies claims and specifies how they will be treated (paid). It must be approved by the court and voted on by creditors.">Plan of Reorganization</SmartGlossary>.
                Survivors vote on this plan.
              </p>

              <div className="space-y-4 mt-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold text-foreground">Consensual Plan</h4>
                  <p className="text-sm text-muted-foreground">
                    The UCC and the Diocese agree on a settlement amount. Survivors vote to accept it. This is the fastest path to payment.
                  </p>
                </div>

                <div className="border-l-2 border-destructive pl-4">
                  <h4 className="font-bold text-destructive">Non-Consensual "Cramdown"</h4>
                  <p className="text-sm text-muted-foreground">
                    If the UCC rejects the offer, the Diocese may try to <SmartGlossary term="Cramdown" definition="A legal mechanism allowing a bankruptcy court to approve a reorganization plan over the objection of creditors, provided it is 'fair and equitable' and does not discriminate unfairly.">Cramdown</SmartGlossary> the plan.
                    This forces a settlement on survivors against their will. The Diocese must prove the plan is "fair and equitable" and that they are paying all disposable assets.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Sidebar Resources */}
        <div className="space-y-6">
          <Card className="bg-sidebar border-sidebar-border">
            <CardHeader>
              <CardTitle className="text-base">Key Legal Concepts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { term: "Automatic Stay", def: "An injunction that immediately stops all lawsuits and collection actions against the debtor upon filing for bankruptcy." },
                { term: "Fraudulent Conveyance", def: "The illegal transfer of assets (like real estate or cash) to a third party (like a Trust) to keep them out of reach of creditors." },
                { term: "Channeling Injunction", def: "A court order that permanently channels all future abuse claims to a specific Settlement Trust, protecting the Diocese from future lawsuits." },
                { term: "Absolute Priority Rule", def: "A bankruptcy rule stating that shareholders (or the Bishop) cannot retain any property unless unsecured creditors (survivors) are paid in full." }
              ].map((item, i) => (
                <div key={i} className="text-sm">
                  <span className="font-bold text-primary block mb-1">{item.term}</span>
                  <span className="text-muted-foreground">{item.def}</span>
                </div>
              ))}
            </CardContent>
          </Card>


        </div>
      </div>
    </>
  );
}
