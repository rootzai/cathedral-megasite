import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Purge() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="05" 
          title="The Purge" 
          subtitle="The 'Dirty Dozen' and the One Who Got Away"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6 font-serif text-lg leading-relaxed">
            <p className="lead text-xl font-serif border-l-4 border-destructive pl-6 italic text-muted-foreground">
              "They removed twelve to save one."
            </p>
            <p>
              In the wake of the McCarrick scandal, Seton Hall University commissioned an internal investigation led by Latham & Watkins. The probe, known as the "12 Letters" investigation, identified a group of clergy with credible allegations or failures to report abuse. They became known as the "Dirty Dozen."
            </p>
            <p>
              Between August 2019 and March 2020, these twelve priests were quietly removed from ministry or forced into retirement. Yet, one name flagged by investigators for removal was protected: Msgr. Joseph Reilly.
            </p>
            <p>
              Bishop Checchio, serving on the three-man task force overseeing the report, played a pivotal role in this selective purge. While others fell, Reilly was shielded, his "Title IX violations" and failure to report abuse reclassified as "nuance."
            </p>
          </div>
          
          <div className="relative h-[500px] w-full overflow-hidden border border-destructive/30 group">
            <img 
              src="/assets/images/checchio_closeup.jpg" 
              alt="Bishop Checchio" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">The Architect of the Save</h2>
              <p className="text-sm text-gray-300 italic">"Nuance is the tool of the cover-up."</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="font-display font-bold text-2xl border-b border-border pb-2">Timeline of the Purge</h3>
          
          <div className="relative border-l-2 border-destructive/30 ml-4 space-y-12 pb-12">
            {/* The Dirty Dozen Grid */}
            <div className="relative pl-8 mb-16">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-destructive border-4 border-background"></div>
              <h4 className="font-bold text-xl mb-6 text-destructive">The "Dirty Dozen" Identified</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Reilly */}
                <div className="bg-destructive/10 border border-destructive p-4 rounded-sm">
                  <Badge className="bg-destructive text-destructive-foreground mb-2">THE SURVIVOR</Badge>
                  <h5 className="font-bold">Msgr. Joseph R. Reilly</h5>
                  <p className="text-xs font-mono text-muted-foreground">Former Rector</p>
                  <p className="text-sm mt-2">The only one to survive and thrive. Protected by Checchio/Tobin task force.</p>
                </div>
                {/* 2. Ziccardi */}
                <div className="bg-secondary/50 border border-border p-4 rounded-sm opacity-75">
                  <Badge variant="outline" className="mb-2">DEMOTED</Badge>
                  <h5 className="font-bold">Msgr. C. Anthony Ziccardi</h5>
                  <p className="text-xs font-mono text-muted-foreground">Former VP for Mission</p>
                  <p className="text-sm mt-2">Stripped of Cabinet-level executive power.</p>
                </div>
                {/* 3. Nydegger */}
                <div className="bg-secondary/50 border border-border p-4 rounded-sm opacity-75">
                  <Badge variant="outline" className="mb-2">REMOVED</Badge>
                  <h5 className="font-bold">Msgr. Thomas P. Nydegger</h5>
                  <p className="text-xs font-mono text-muted-foreground">Former Vicar General</p>
                  <p className="text-sm mt-2">Removed from #2 official role and SHU Board.</p>
                </div>
                {/* 4. Harahan */}
                <div className="bg-secondary/50 border border-border p-4 rounded-sm opacity-75">
                  <Badge variant="outline" className="mb-2">FORCED RETIREMENT</Badge>
                  <h5 className="font-bold">Msgr. Robert J. Harahan</h5>
                  <p className="text-xs font-mono text-muted-foreground">Former Headmaster</p>
                  <p className="text-sm mt-2">McCarrick's former secretary.</p>
                </div>
                {/* 5. Bermúdez */}
                <div className="bg-secondary/50 border border-border p-4 rounded-sm opacity-75">
                  <Badge variant="outline" className="mb-2">TRANSFERRED</Badge>
                  <h5 className="font-bold">Rev. Duverney Bermúdez</h5>
                  <p className="text-xs font-mono text-muted-foreground">Former Vice Rector</p>
                  <p className="text-sm mt-2">Leadership team decapitated.</p>
                </div>
                {/* 6. Doran */}
                <div className="bg-secondary/50 border border-border p-4 rounded-sm opacity-75">
                  <Badge variant="outline" className="mb-2">EXILED</Badge>
                  <h5 className="font-bold">Msgr. John E. Doran</h5>
                  <p className="text-xs font-mono text-muted-foreground">Former Vicar General</p>
                  <p className="text-sm mt-2">The 'Missing Man' of the original rumors.</p>
                </div>
              </div>
              <p className="text-xs font-mono text-muted-foreground mt-4 italic">
                *Partial list based on the "Benjamin Ruling" leaks. Full list includes Rev. Ciccarino, Msgr. McCarren, Rev. Chadwick, Msgr. Suszko, Msgr. Ivany, and redacted subjects.
              </p>
            </div>

            {/* Timeline Item 1 */}
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-destructive border-4 border-background"></div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <Badge variant="outline" className="w-fit font-mono text-destructive border-destructive/50">AUG 27, 2019</Badge>
                <h4 className="font-bold text-lg">The Findings Delivered</h4>
              </div>
              <p className="text-muted-foreground">
                Latham & Watkins investigators present their verbal findings to the Board of Regents. They identify 13 priests, including Msgr. Reilly, for removal due to abuse allegations or failure to report.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-600 border-4 border-background"></div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <Badge variant="outline" className="w-fit font-mono text-muted-foreground">SEP 2019</Badge>
                <h4 className="font-bold text-lg">The Task Force Formed</h4>
              </div>
              <p className="text-muted-foreground">
                A three-man task force is assembled to review the findings: Cardinal Tobin, Bishop Checchio, and one other. Their mandate is to determine the fate of the accused.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-600 border-4 border-background"></div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <Badge variant="outline" className="w-fit font-mono text-muted-foreground">OCT 2019 - FEB 2020</Badge>
                <h4 className="font-bold text-lg">The "12 Letters" Sent</h4>
              </div>
              <p className="text-muted-foreground">
                One by one, twelve priests receive letters informing them of their removal from ministry or forced retirement. The "Dirty Dozen" are quietly purged to sanitize the university's image.
              </p>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-destructive border-4 border-background"></div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <Badge variant="outline" className="w-fit font-mono text-destructive border-destructive/50">MAR 2020</Badge>
                <h4 className="font-bold text-lg">The "Save" Executed</h4>
              </div>
              <p className="text-muted-foreground">
                While the others are removed, the task force intervenes for Msgr. Reilly. Despite the investigators' recommendation for removal, Checchio and Tobin argue for "nuance," citing his "impeccable honesty." Reilly remains.
              </p>
            </div>

            {/* Timeline Item 5 */}
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-600 border-4 border-background"></div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <Badge variant="outline" className="w-fit font-mono text-muted-foreground">MID-2020</Badge>
                <h4 className="font-bold text-lg">The Whitewash Complete</h4>
              </div>
              <p className="text-muted-foreground">
                The "Dirty Dozen" are gone. The report is buried. Reilly is not only saved but positioned for future elevation. The "whitewashing of the century" is successful.
              </p>
            </div>
          </div>
        </div>

          <div className="bg-card border border-destructive/20 p-8 rounded-sm space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl mb-4 text-destructive">The Checchio Standard</h3>
              <p className="font-serif text-lg leading-relaxed mb-6">
                As the legal mind on the three-man task force, Bishop Checchio personally reviewed the files of every priest on the "Dirty Dozen" list. He applied a ruthless calculus: <strong>expendability vs. utility.</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background p-6 border-l-4 border-gray-500">
                  <h4 className="font-bold uppercase text-sm mb-2 text-gray-400">The Sacrificed</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Ziccardi, Nydegger, Harahan.</strong>
                  </p>
                  <p className="text-sm">
                    Men with decades of service were discarded because their continued presence was a liability. Checchio signed off on their removals to create the appearance of a "clean sweep," satisfying the optics of reform without touching the core of the power structure.
                  </p>
                </div>
                <div className="bg-background p-6 border-l-4 border-destructive">
                  <h4 className="font-bold uppercase text-sm mb-2 text-destructive">The Saved</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Msgr. Joseph Reilly.</strong>
                  </p>
                  <p className="text-sm">
                    Despite facing the <em>exact same</em> findings of "failure to report" as the others, Reilly was spared. Checchio argued that Reilly's failures were "nuanced"—a legal fiction created to protect the one man essential to the regime's future.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border pt-6">
              <h4 className="font-mono font-bold text-sm uppercase mb-2">The Verdict</h4>
              <blockquote className="font-serif text-lg italic text-muted-foreground border-l-2 border-destructive pl-4">
                "Checchio didn't just sign the letters; he drafted the logic. He decided who was 'dirty' and who was 'nuanced.' The blood of the purge is on his hands, but so is the survival of the virus."
              </blockquote>
              <p className="text-right text-sm font-mono mt-4 text-gray-500">- Source close to the investigation</p>
            </div>
          </div>
      </div>
    </Layout>
  );
}
