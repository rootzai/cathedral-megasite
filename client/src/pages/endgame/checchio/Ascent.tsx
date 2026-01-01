import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Ascent() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="03" 
          title="The Pipeline" 
          subtitle="1992–2016: Rising on McCarrick's Shoulders"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6 font-serif text-lg leading-relaxed">
            <p>
              Checchio's rise through the ecclesiastical ranks was rapid and heavily influenced by the McCarrick network. He was ordained in 1992 by Bishop James T. McHugh, a close McCarrick ally.
            </p>
            <p>
              After serving in various administrative roles in the Diocese of Camden, he was appointed Vice Rector of the Pontifical North American College (NAC) in Rome in 2003, a position endorsed by McCarrick.
            </p>
            <p>
              In 2005, he was named Rector of the NAC by Pope Benedict XVI. During his tenure (2005–2016), he managed over 250 U.S. seminarians and hosted numerous high-profile visitors.
            </p>
          </div>
          
          <div className="relative h-[500px] w-full overflow-hidden border border-destructive/30 group">
            <img 
              src="/assets/images/checchio_pope.jpg" 
              alt="Checchio with Pope Francis" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">The Rome Outpost</h2>
              <p className="text-sm text-gray-300 italic">"Normalizing the Predator at the NAC."</p>
            </div>
          </div>
        </div>

        <div className="space-y-8 border-t border-border pt-8">
          <h3 className="font-display font-bold text-2xl">The 2013 Conclave Incident</h3>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div className="font-mono text-destructive font-bold uppercase tracking-widest text-sm">
              March 2013
            </div>
            <div className="space-y-4 font-serif text-lg">
              <p>
                Despite widespread whispers about McCarrick's behavior, Checchio hosted the cardinal at the NAC during the 2013 conclave that elected Pope Francis.
              </p>
              <p>
                This act of hospitality towards a known predator—at a time when rumors were rampant in Rome—underscores Checchio's role in normalizing McCarrick's presence and influence within the highest levels of the Church.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/formation" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/governance" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 04 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
