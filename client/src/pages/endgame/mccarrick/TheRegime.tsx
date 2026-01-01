import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import RedactedText from "@/components/RedactedText";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ImageModal from "@/components/ImageModal";

export default function TheRegime() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="ACT II" 
          title="The Regime" 
          subtitle="Warnings, Cover-ups, and the Mechanisms of Abuse"
        />

        {/* Warnings & Cover-ups */}
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none font-serif">
            <p className="lead text-xl">
              The tragedy of the McCarrick case is not just the abuse itself, but the fact that it was an "open secret" for decades. Numerous warnings were issued, complaints were filed, and settlements were paid—yet he continued to rise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-border">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-destructive rounded-full" />
                <h3 className="font-display font-bold text-2xl mb-2">1980s–1990s: Initial Complaints</h3>
                <p className="font-serif text-lg mb-4">
                  Rumors about McCarrick's behavior with seminarians began almost immediately. Priests whispered about his insistence on sharing a bed with young men at his beach house.
                </p>
                <div className="bg-muted p-4 font-mono text-sm border border-border">
                  <p className="mb-2 font-bold uppercase text-destructive">Anonymous Letter (c. 1990s)</p>
                  <p>"He shares his bed with seminarians. Everyone knows it. It is a scandal waiting to happen."</p>
                </div>
              </div>

              <div className="relative pl-8 border-l border-border">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-destructive rounded-full" />
                <h3 className="font-display font-bold text-2xl mb-2">Internal Communications</h3>
                <div className="bg-black text-white p-6 font-mono text-sm leading-loose">
                  <p className="mb-4 uppercase text-destructive font-bold border-b border-white/20 pb-2">CONFIDENTIAL MEMO: O'CONNOR TO NUNCIO</p>
                  <p>
                    In 1999, Cardinal John O'Connor of New York wrote a letter warning against McCarrick's promotion, citing <RedactedText>credible allegations of sexual misconduct</RedactedText>.
                  </p>
                  <p className="mt-4">
                    Despite this, Pope John Paul II—convinced by McCarrick's denial and political utility—<RedactedText>approved the appointment</RedactedText>.
                  </p>
                </div>
              </div>
            </div>

            {/* Satirical/Visual Commentary */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <ImageModal
                    src="/assets/memes/Reillyrides.png"
                    alt="Reilly Rides a Stang"
                    title="Reilly Rides a Stang"
                    caption="The wild ride of cover-ups and complicity."
                  >
                    <div className="aspect-square bg-muted relative overflow-hidden border border-border group cursor-zoom-in">
                      <img 
                        src="/assets/memes/Reillyrides.png" 
                        alt="Reilly Rides a Stang" 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 text-white font-mono text-xs uppercase tracking-widest bg-black/70 px-2 py-1">Expand</span>
                      </div>
                    </div>
                  </ImageModal>
                </div>
                <div className="space-y-2">
                  <ImageModal
                    src="/assets/memes/demandaction.png"
                    alt="Demand Action"
                    title="Demand Action"
                    caption="Tobin conspired to cover up Reilly's crimes!"
                  >
                    <div className="aspect-square bg-muted relative overflow-hidden border border-border group cursor-zoom-in">
                      <img 
                        src="/assets/memes/demandaction.png" 
                        alt="Demand Action" 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 text-white font-mono text-xs uppercase tracking-widest bg-black/70 px-2 py-1">Expand</span>
                      </div>
                    </div>
                  </ImageModal>
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground text-center">Fig 2.1: Satirical representations of the cover-up culture.</p>
            </div>
          </div>
        </div>

        {/* Mechanisms of Abuse */}
        <div className="border-t border-border pt-12">
          <h3 className="font-display font-bold text-3xl mb-8 uppercase">Mechanisms of Control</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-6 hover:border-destructive transition-colors duration-500 group">
              <div className="font-mono text-4xl font-bold text-destructive mb-4 opacity-50 group-hover:opacity-100">01</div>
              <h3 className="font-display font-bold text-xl mb-3 uppercase">Clericalism</h3>
              <p className="font-serif text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                An exaggerated respect for the clergy that places priests and bishops above criticism, discouraging victims from coming forward.
              </p>
            </div>
            <div className="bg-card border border-border p-6 hover:border-destructive transition-colors duration-500 group">
              <div className="font-mono text-4xl font-bold text-destructive mb-4 opacity-50 group-hover:opacity-100">02</div>
              <h3 className="font-display font-bold text-xl mb-3 uppercase">Power Dynamics</h3>
              <p className="font-serif text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                McCarrick held the power to ordain or end careers. This imbalance made consent impossible, even if interactions appeared "consensual."
              </p>
            </div>
            <div className="bg-card border border-border p-6 hover:border-destructive transition-colors duration-500 group">
              <div className="font-mono text-4xl font-bold text-destructive mb-4 opacity-50 group-hover:opacity-100">03</div>
              <h3 className="font-display font-bold text-xl mb-3 uppercase">Grooming</h3>
              <p className="font-serif text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                By feigning paternal affection and offering special privileges, he desensitized victims and blurred professional boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Video Evidence */}
        <div className="border-t border-border pt-12">
          <h3 className="font-display font-bold text-3xl mb-8 uppercase">Video Evidence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-1">
              <div className="aspect-video bg-black relative group cursor-pointer overflow-hidden">
                <iframe 
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  src="https://www.youtube.com/embed/8uPSR4ysAaw" 
                  title="Cardinal McCarrick's history in DC"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="p-3 font-mono text-xs border-t border-border">
                <span className="font-bold text-destructive">EVIDENCE 01</span>
                <span className="block text-muted-foreground mt-1">Cardinal McCarrick's history in DC</span>
              </div>
            </div>
            <div className="bg-card border border-border p-1">
              <div className="aspect-video bg-black relative group cursor-pointer overflow-hidden">
                <iframe 
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  src="https://www.youtube.com/embed/videoseries?list=PLg6K56Gg7i4j4J7q8y9z1k2l3m4n5o6p" 
                  title="PBS NewsHour - Former Cardinal McCarrick charged"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="p-3 font-mono text-xs border-t border-border">
                <span className="font-bold text-destructive">EVIDENCE 02</span>
                <span className="block text-muted-foreground mt-1">PBS NewsHour: McCarrick Charged</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/mccarrick/rise" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Act I: The Rise
            </Button>
          </Link>
          <Link href="/mccarrick/reckoning" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Act III: The Reckoning <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
