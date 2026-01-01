import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ImageModal from "@/components/ImageModal";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <SectionHeader 
          number="01" 
          title="Introduction" 
          subtitle="Theodore McCarrick and the U.S. Catholic Church Sexual Abuse Crisis"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed">
            <p>
              <span className="font-bold first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">T</span>
              he Catholic Church in the United States has been engulfed in a decades-long sexual abuse crisis, with thousands of victims and systematic cover-ups coming to light since the early 2000s. Among the most startling revelations was the case of former Cardinal Theodore Edgar McCarrick, a highly influential churchman whose misconduct spanned decades.
            </p>
            
            <p>
              McCarrick’s fall from grace – from a globe-trotting power-broker to a defrocked cleric facing multiple allegations – has become a central case study in how abuse was enabled and concealed within the church hierarchy.
            </p>

            <div className="bg-muted p-6 border border-border my-8">
              <h3 className="font-mono font-bold uppercase text-sm mb-4 text-destructive tracking-widest">Dossier Objective</h3>
              <p className="font-serif italic">
                This dossier provides a multi-faceted examination of the McCarrick case and the broader ecclesiastical network that facilitated his rise and protected him, despite early warnings.
              </p>
            </div>

            <p>
              Prepared for comprehensive review, this report aggregates findings from the 2020 Vatican McCarrick Report, investigative journalism from The Washington Post and The New York Times, and survivor testimonies.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="border border-border p-4 bg-card">
              <ImageModal 
                src="/assets/images/mccarrick_portrait.jpg" 
                alt="Theodore McCarrick"
                title="Theodore McCarrick"
                caption="Former Cardinal and Archbishop of Washington, D.C., laicized in 2019."
              >
                <div className="aspect-[3/4] bg-muted relative overflow-hidden mb-4 grayscale contrast-125 cursor-zoom-in group">
                  <img 
                    src="/assets/images/mccarrick_portrait.jpg" 
                    alt="Theodore McCarrick" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-destructive/10 mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <span className="bg-black/70 text-white text-xs font-mono px-2 py-1 uppercase tracking-widest">Click to Expand</span>
                  </div>
                </div>
              </ImageModal>
              <div className="font-mono text-xs space-y-2">
                <div className="flex justify-between border-b border-border pb-1">
                  <span className="text-muted-foreground">SUBJECT</span>
                  <span className="font-bold">MCCARRICK, THEODORE E.</span>
                </div>
                <div className="flex justify-between border-b border-border pb-1">
                  <span className="text-muted-foreground">DOB</span>
                  <span className="font-bold">JULY 7, 1930</span>
                </div>
                <div className="flex justify-between border-b border-border pb-1">
                  <span className="text-muted-foreground">STATUS</span>
                  <span className="font-bold text-destructive">LAICIZED (2019)</span>
                </div>
              </div>
            </div>

            <div className="border border-border p-4 bg-card">
              <h4 className="font-mono font-bold uppercase text-xs mb-3">Key Documents</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  <span className="w-2 h-2 bg-destructive" />
                  Vatican McCarrick Report (2020)
                </li>
                <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  <span className="w-2 h-2 bg-destructive" />
                  PA Grand Jury Report (2018)
                </li>
                <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  <span className="w-2 h-2 bg-destructive" />
                  Dallas Charter (2002)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-12">
          <Link href="/background" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 02 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
