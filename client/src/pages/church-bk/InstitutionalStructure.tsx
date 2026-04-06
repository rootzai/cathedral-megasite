import Layout from "@/components/ChurchBKLayout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Search } from "lucide-react";

export default function InstitutionalStructure() {
  return (
    <div className="space-y-12 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="prose prose-slate max-w-none text-muted-foreground">
          <p className="text-lg font-light text-foreground mb-6">
            The Catholic Church operates as the world's oldest and largest non-governmental organization. Its structure is both hierarchical and decentralized, allowing for global unity while maintaining local adaptability.
          </p>
          <p className="mb-4">
            At the core of this structure is the <strong>Diocese</strong>, led by a Bishop. The 20.7% growth in the number of Bishops over the last 30 years reflects the creation of new dioceses to serve growing populations in the Global South.
          </p>
          <p className="mb-8">
            Below the diocesan level, the <strong>Parish</strong> remains the fundamental unit of community life. While the number of priests has stagnated globally (-1.3% over 15 years), the number of "pastoral centers" and mission stations has exploded, particularly in Africa and Asia, indicating a shift towards more flexible, lay-supported models of ministry.
          </p>

          <div className="mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group cursor-zoom-in border rounded-lg overflow-hidden shadow-sm bg-black/20 hover:border-accent transition-colors">
                  <img
                    src="/assets/seton-hall-hierarchy.png"
                    alt="Seton Hall Governance Hierarchy"
                    className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold">
                      <Search className="w-4 h-4" />
                      Inspect Hierarchy
                    </div>
                  </div>
                  <div className="p-3 bg-muted/30 text-xs text-center text-muted-foreground italic border-t">
                    Figure 1.1: The Interlocking Governance Hierarchy of Seton Hall and the Archdiocese.
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] bg-[#0a0a0c] border-white/10 p-0 overflow-hidden">
                <DialogHeader className="p-6 border-b border-white/5 bg-black/40">
                  <DialogTitle className="text-2xl font-serif text-[#c8bdb0] uppercase tracking-widest">
                    Seton Hall Governance Ledger
                  </DialogTitle>
                </DialogHeader>
                <div className="p-4 overflow-auto flex items-center justify-center">
                  <img
                    src="/assets/seton-hall-hierarchy.png"
                    alt="Seton Hall Governance Hierarchy"
                    className="max-w-full h-auto"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="border-l-4 border-l-accent bg-muted/10">
            <CardContent className="p-6">
              <h3 className="font-serif font-bold text-lg text-primary mb-2">The Episcopal College</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold">5,430</span>
                <span className="text-sm text-emerald-700 font-medium">+20.7% (30yr)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Bishops worldwide. Growth indicates administrative expansion to manage larger populations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary bg-muted/10">
            <CardContent className="p-6">
              <h3 className="font-serif font-bold text-lg text-primary mb-2">The Priesthood</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold">406,996</span>
                <span className="text-sm text-slate-600 font-medium">+0.5% (30yr)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Diocesan and Religious priests. Effectively flat growth, requiring higher efficiency per priest.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground p-8 rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-serif font-bold text-accent mb-2">1.4B</div>
            <div className="text-sm font-medium uppercase tracking-wider opacity-80">Members</div>
          </div>
          <div className="border-l border-primary-foreground/20">
            <div className="text-4xl font-serif font-bold text-accent mb-2">~3,000</div>
            <div className="text-sm font-medium uppercase tracking-wider opacity-80">Dioceses</div>
          </div>
          <div className="border-l border-primary-foreground/20">
            <div className="text-4xl font-serif font-bold text-accent mb-2">~220k</div>
            <div className="text-sm font-medium uppercase tracking-wider opacity-80">Parishes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
