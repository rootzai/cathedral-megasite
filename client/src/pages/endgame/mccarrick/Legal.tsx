import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Legal() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="08" 
          title="Legal Actions" 
          subtitle="Civil Lawsuits, Criminal Charges, and Posthumous Developments"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-96 w-full overflow-hidden border border-destructive/30 group">
            <img 
              src="/assets/memes/Reillyrides.png" 
              alt="Reilly Rides a Stang Satire" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">Reilly Rides a Stang</h2>
              <p className="text-sm text-gray-300 italic">"The wild ride of cover-ups."</p>
            </div>
          </div>
          <div className="relative h-96 w-full overflow-hidden border border-destructive/30 group">
            <img 
              src="/assets/memes/demandaction.png" 
              alt="Demand Action Poster" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
              style={{ animationDelay: '2s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">Demand Action</h2>
              <p className="text-sm text-gray-300 italic">"Tobin conspired to cover up Reilly's crimes!"</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 font-serif text-lg leading-relaxed">
            <section>
              <h3 className="font-display font-bold text-2xl mb-4">Criminal Charges</h3>
              <p>
                In July 2021, McCarrick was charged criminally in Massachusetts with three counts of indecent assault and battery on a person over 14. The charges stemmed from an alleged assault on a 16-year-old boy during a wedding reception at Wellesley College in 1974.
              </p>
              <p className="mt-4">
                This marked the first time a U.S. cardinal (former or current) had faced criminal charges for sexual abuse. However, in August 2023, the case was dismissed after a judge ruled that McCarrick, then 93 and suffering from dementia, was not competent to stand trial.
              </p>
            </section>

            <section>
              <h3 className="font-display font-bold text-2xl mb-4">Civil Lawsuits</h3>
              <p>
                Numerous civil lawsuits have been filed against McCarrick and the dioceses he led (Newark, Metuchen) under "lookback window" laws in New Jersey and New York. These laws temporarily suspended the statute of limitations, allowing older victims to sue.
              </p>
              <p className="mt-4">
                These lawsuits have resulted in significant financial settlements and have forced the release of internal church documents that further corroborated the cover-up.
              </p>
            </section>
          </div>

          <div className="space-y-6">
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
                <span className="font-bold text-destructive">VIDEO EVIDENCE 01</span>
                <span className="block text-muted-foreground mt-1">Cardinal McCarrick's history in DC, the Catholic Church</span>
              </div>
            </div>

            <div className="bg-card border border-border p-1">
              <div className="aspect-video bg-black relative group cursor-pointer overflow-hidden">
                <iframe 
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  src="https://www.youtube.com/embed/videoseries?list=PLg6K56Gg7i4j4J7q8y9z1k2l3m4n5o6p" // Placeholder for PBS video if direct embed fails, using generic playlist or similar
                  title="PBS NewsHour - Former Cardinal McCarrick charged"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
                {/* Note: PBS video embed might need specific handling, using iframe for now */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="bg-black/50 text-white px-2 py-1 font-mono text-xs">PBS NEWSHOUR ARCHIVE</span>
                </div>
              </div>
              <div className="p-3 font-mono text-xs border-t border-border">
                <span className="font-bold text-destructive">VIDEO EVIDENCE 02</span>
                <span className="block text-muted-foreground mt-1">Former Cardinal McCarrick charged with sexual assault</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/downfall" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/survivors" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 09 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
