import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Formation() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="02" 
          title="Forged in Newark" 
          subtitle="1988–1992: Surviving the Grooming Ground"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 font-serif text-lg leading-relaxed">
            <p>
              Born in Camden, NJ, to an Italian-American Catholic family, Checchio entered St. Charles Borromeo Seminary in 1984. However, it was his transfer to Seton Hall's Immaculate Conception Seminary (ICS) in 1988 that placed him directly in Theodore McCarrick's orbit.
            </p>
            <p>
              During this period (1988–1992), McCarrick was Archbishop of Newark and Chair of the Seton Hall Board. The seminary was known for its "loose" atmosphere, later described by some as resembling a "brothel."
            </p>
            
            <div className="bg-secondary/50 p-6 border border-destructive/20 my-8">
              <h4 className="font-mono text-sm text-destructive uppercase mb-4">The "Resister" Myth</h4>
              <p className="text-sm font-mono mb-4">
                Checchio was invited 3–5 times to McCarrick's Sea Girt beach house. While he refused the "bed-sharing" routine—citing the lack of beds as a pretext—he did not report the behavior.
              </p>
              <p className="text-sm font-mono">
                He heard peer rumors of "cuddling" and fondling but remained silent, fearing ordination denial in McCarrick's domain. This silence exemplifies the "culture of fear" that protected McCarrick.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-80 w-full overflow-hidden border border-destructive/30 group">
              <img 
                src="/assets/images/seminary_shadows.png" 
                alt="Seminary Shadows" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 animate-ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 text-right">
                <span className="block text-destructive font-mono text-sm uppercase tracking-widest">Seton Hall ICS</span>
                <span className="block text-white font-display text-xl">Learning the Code of Silence</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/checchio" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/checchio/ascent" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 03 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
