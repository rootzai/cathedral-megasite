import { JourneyNav } from "@/components/JourneyNav";
import Layout from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { SectionDivider } from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (<div className="space-y-12 animate-in fade-in duration-1000">
        <PageHero
          sectionNumber="01"
          title="The Ruling"
          subtitle="Transparency is Coming. The Wait is Over."
        >

        </PageHero>

        <SectionDivider />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <p className="font-body text-xl leading-relaxed text-foreground/90">
              In a landmark decision that shatters decades of institutional silence, Judge Avion Benjamin has ordered Seton Hall University to release the long-suppressed documents identifying the clergy involved in the sexual abuse scandal.
            </p>

            <p className="font-body text-lg leading-relaxed text-foreground/80">
              The ruling, delivered on November 12, 2025, mandates the immediate disclosure of the names of the clergymen—now known as the "Dirty Dozen"—who were identified in the confidential Latham & Watkins report but were quietly removed, transferred, or protected by the archdiocesan hierarchy.
            </p>

            <div className="bg-muted/10 border border-border p-8 my-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all duration-500 group-hover:w-2"></div>
              <p className="font-heading text-2xl italic text-foreground/90 leading-relaxed relative z-10">
                Judge Benjamin's ruling emphasizes that the public interest in transparency outweighs the institution's desire for privacy, noting that concealing these names serves no legitimate purpose other than to obstruct justice.
              </p>
              <p className="font-mono text-xs tracking-widest text-primary mt-6 uppercase relative z-10">
                — Summary of Ruling, Hon. Avion Benjamin, Nov 12, 2025
              </p>
            </div>

            <p className="font-body text-lg leading-relaxed text-foreground/80">
              This decision marks a turning point in the fight for accountability. For years, the "Dirty Dozen" have remained shadows—some moved to wealthy parishes, others given administrative "sabbaticals," and one even promoted to the presidency of the very university where the cover-up originated.
            </p>

            <div className="flex gap-4 pt-8">
              <Link href="/ruling/dirty-dozen">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-none px-8 py-6 h-auto border border-transparent hover:border-primary/50 transition-all">
                  View The Dirty Dozen
                </Button>
              </Link>
              <Link href="/ruling/tobin-hypocrisy">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono text-xs uppercase tracking-widest rounded-none px-8 py-6 h-auto">
                  Expose The Hypocrisy
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar Data */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-card border border-border rounded-none">
              <CardContent className="p-0">
                <div className="bg-muted/20 p-4 border-b border-border">
                  <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Key Data Points</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase mb-1">Subject</p>
                    <p className="font-heading text-lg text-foreground">The Dirty Dozen</p>
                  </div>
                  <Separator className="opacity-20" />
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase mb-1">Status</p>
                    <p className="font-mono text-sm text-destructive font-bold uppercase">Active / Hidden</p>
                  </div>
                  <Separator className="opacity-20" />
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase mb-1">Key Documents</p>
                    <ul className="space-y-2 mt-2">
                      <li className="font-body text-sm text-foreground/80 border-l border-primary pl-2">Latham Report (Aug 2019)</li>
                      <li className="font-body text-sm text-foreground/80 border-l border-primary pl-2">Gibbons Report (Aug 2019)</li>
                      <li className="font-body text-sm text-foreground/80 border-l border-primary pl-2">
                        <a
                          href="/BenjaminreasonsforreleasingLathamReportdocs.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center gap-1"
                        >
                          Benjamin Ruling (2025)
                          <FileText className="w-3 h-3" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link href="/ruling/analysis">
                      <div className="w-full bg-muted/10 border border-border p-3 flex justify-between items-center group cursor-pointer hover:bg-muted/20 transition-colors">
                        <span className="font-mono text-xs text-primary uppercase tracking-wider">Full Analysis</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <JourneyNav />
      </div>);
}
