import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ImageModal from "@/components/ImageModal";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="01" 
          title="The Newark Export" 
          subtitle="Not 'Lily White': The Compromised Choice for New Orleans"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6 font-serif text-lg leading-relaxed">
            <p className="lead text-xl font-serif border-l-4 border-destructive pl-6 italic text-muted-foreground">
              "Rewarding discretion over disclosure."
            </p>
            <p>
              Bishop James Francis Checchio (born April 21, 1966) is a New Jersey Catholic prelate whose career reflects institutional loyalty amid the Theodore McCarrick abuse scandal. From his time as a seminarian at Seton Hall to his role as Rector of the Pontifical North American College (NAC) and Bishop of Metuchen, Checchio's trajectory is shadowed by his ties to McCarrick.
            </p>
            <p>
              Now appointed Coadjutor Archbishop of New Orleans, Checchio embodies the "McCarrick pipeline"—a system that rewards silence and protects the institution at the expense of transparency.
            </p>
          </div>
          
          <ImageModal
            src="/assets/images/checchio_portrait.jpg"
            alt="Bishop James Francis Checchio"
            title="Leo's Calculated Risk"
            caption="A Newark product for a New Orleans crisis. Bishop Checchio's career reflects institutional loyalty amid the McCarrick scandal."
          >
            <div className="relative h-[500px] w-full overflow-hidden border border-destructive/30 group cursor-zoom-in">
              <img 
                src="/assets/images/checchio_portrait.jpg" 
                alt="Bishop James Francis Checchio" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">Leo's Calculated Risk</h2>
                <p className="text-sm text-gray-300 italic">"A Newark product for a New Orleans crisis."</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <span className="bg-black/70 text-white text-xs font-mono px-2 py-1 uppercase tracking-widest">Click to Expand</span>
              </div>
            </div>
          </ImageModal>
        </div>

        <div className="space-y-8">
          <h3 className="font-display font-bold text-2xl border-b border-border pb-2">Key Findings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 hover:border-destructive/50 transition-colors">
              <h4 className="font-mono text-destructive uppercase text-sm mb-2">The Pipeline</h4>
              <p className="text-sm text-muted-foreground">
                Ordained by a McCarrick ally, appointed NAC Rector by Benedict XVI, and consecrated Bishop by McCarrick himself. His career is inextricably linked to the disgraced cardinal.
              </p>
            </div>
            <div className="bg-card border border-border p-6 hover:border-destructive/50 transition-colors">
              <h4 className="font-mono text-destructive uppercase text-sm mb-2">The Silence</h4>
              <p className="text-sm text-muted-foreground">
                Despite hearing rumors of abuse and rejecting beach house invitations as a seminarian, Checchio remained silent for decades, speaking out only after the scandal broke in 2018.
              </p>
            </div>
            <div className="bg-card border border-border p-6 hover:border-destructive/50 transition-colors">
              <h4 className="font-mono text-destructive uppercase text-sm mb-2">The Cover-up</h4>
              <p className="text-sm text-muted-foreground">
                As a member of the Seton Hall task force, he advocated for "nuance" to save Msgr. Joseph Reilly from removal, despite findings of Title IX violations.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-12 pt-8 border-t border-border">
          <Link href="/checchio/formation" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 02 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
