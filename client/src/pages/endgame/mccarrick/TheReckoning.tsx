import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ImageModal from "@/components/ImageModal";

export default function TheReckoning() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="ACT III" 
          title="The Reckoning" 
          subtitle="Exposure, Downfall, and the Path Forward"
        />

        {/* Downfall Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8 font-serif text-lg leading-relaxed">
            <p>
              In 2017, the Archdiocese of New York received a credible allegation that McCarrick had abused a minor in the 1970s. This "smoking gun" finally triggered a formal canonical process, ending decades of impunity.
            </p>
            <p>
              On June 20, 2018, the Vatican announced his removal from public ministry. By July, he had resigned from the College of Cardinals—the first to do so for abuse. On February 16, 2019, Pope Francis confirmed his laicization. Theodore McCarrick was now simply "Mr. McCarrick."
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-muted p-6 border border-border">
              <h4 className="font-mono font-bold uppercase text-sm mb-4 border-b border-border pb-2">Timeline of Collapse</h4>
              <div className="space-y-6 font-mono text-xs">
                <div className="relative pl-4 border-l border-destructive">
                  <span className="block font-bold text-destructive mb-1">JUNE 20, 2018</span>
                  <span className="block text-muted-foreground">Removed from ministry.</span>
                </div>
                <div className="relative pl-4 border-l border-destructive">
                  <span className="block font-bold text-destructive mb-1">JULY 28, 2018</span>
                  <span className="block text-muted-foreground">Resigns as Cardinal.</span>
                </div>
                <div className="relative pl-4 border-l border-destructive">
                  <span className="block font-bold text-destructive mb-1">FEB 16, 2019</span>
                  <span className="block text-muted-foreground">Laicized by Pope Francis.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Survivor Voices */}
        <div className="border-t border-border pt-12">
          <h3 className="font-display font-bold text-3xl mb-8 uppercase">Survivor Voices</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-muted p-8 border-l-4 border-destructive relative">
                <span className="absolute top-4 left-4 text-6xl font-display text-destructive/20">"</span>
                <p className="italic mb-4 relative z-10 font-serif text-lg">
                  "He was a father figure to me. I trusted him. And he used that trust to destroy me."
                </p>
                <p className="font-mono text-sm font-bold text-destructive uppercase text-right">— James Grein</p>
              </div>
              <p className="font-serif text-lg">
                James Grein and the "Beach House" survivors broke the silence, describing a "cult-like" atmosphere where abuse was normalized under the guise of spiritual mentorship.
              </p>
            </div>
            <div className="relative h-64 bg-muted border border-border p-1">
              <ImageModal
                src="/assets/images/survivors_protest.jpg"
                alt="Survivors Protest"
                title="Survivor Protest"
                caption="Survivors and advocates demanding justice in Baltimore, MD."
              >
                <div className="w-full h-full relative overflow-hidden group cursor-zoom-in">
                  <img 
                    src="/assets/images/survivors_protest.jpg" 
                    alt="Survivors Protest" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <span className="bg-black/70 text-white text-xs font-mono px-2 py-1 uppercase tracking-widest">Click to Expand</span>
                  </div>
                </div>
              </ImageModal>
            </div>
          </div>
        </div>

        {/* Institutional Response & Analysis */}
        <div className="border-t border-border pt-12">
          <h3 className="font-display font-bold text-3xl mb-8 uppercase">The Aftermath</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 space-y-6 font-serif text-lg">
              <p>
                The 2020 <strong>McCarrick Report</strong> was an unprecedented act of transparency, admitting that Pope John Paul II was deceived and others failed to act. In response, Pope Francis issued <em>Vos Estis Lux Mundi</em>, establishing new laws for holding bishops accountable.
              </p>
              <p>
                However, systemic flaws remain. The "pass the trash" mentality, clericalism, and the lack of independent lay oversight continue to plague the institution.
              </p>
            </div>
            <div className="bg-card border border-border p-6">
              <div className="aspect-[3/2] bg-muted relative overflow-hidden mb-4 border border-border">
                 <ImageModal
                    src="/assets/images/vatican_exterior.jpg"
                    alt="The Vatican"
                    title="The Vatican"
                    caption="St. Peter's Basilica, Vatican City."
                  >
                    <div className="w-full h-full relative overflow-hidden group cursor-zoom-in">
                      <img 
                        src="/assets/images/vatican_exterior.jpg" 
                        alt="The Vatican" 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                        <span className="bg-black/70 text-white text-xs font-mono px-2 py-1 uppercase tracking-widest">Click to Expand</span>
                      </div>
                    </div>
                  </ImageModal>
              </div>
              <div className="font-mono text-xs text-center text-muted-foreground">
                VATICAN CITY
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-muted p-8 border border-border mt-8 text-center">
          <h3 className="font-display font-bold text-2xl mb-4 uppercase">Final Verdict</h3>
          <p className="font-serif text-lg max-w-3xl mx-auto">
            The McCarrick scandal forced the Church to confront its darkest failures. While he has been laicized, the structures that protected him—and the men who enabled him—remain a subject of intense scrutiny. This dossier stands as a record of the facts and a testament to the survivors.
          </p>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/mccarrick/regime" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Act II: The Regime
            </Button>
          </Link>
          <Link href="/" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Return to Portal <span className="ml-2">⌂</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
