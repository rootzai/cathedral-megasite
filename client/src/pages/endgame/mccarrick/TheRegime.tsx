import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import RedactedText from "@/components/RedactedText";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ImageModal from "@/components/ImageModal";

export default function TheRegime() {
  return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
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
                <div className="bg-white text-zinc-900 p-6 font-mono text-sm leading-loose">
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
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ImageModal
                    src="/assets/images/sh_succession_cathedral.png"
                    alt="The Corrupted Cathedral"
                    title="The Façade of Piety"
                    caption="The exploitation of ecclesiastical authority to shield perpetrators from civil justice."
                  >
                    <div className="aspect-square bg-zinc-900 relative overflow-hidden border-2 border-red-900 group cursor-zoom-in shadow-[0_0_30px_rgba(139,26,26,0.2)]">
                      <img 
                        src="/assets/images/sh_succession_cathedral.png" 
                        alt="The Corrupted Cathedral" 
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-black font-cinzel text-xl uppercase tracking-tighter text-shadow-blood">THE CORRUPTED CATHEDRAL</span>
                      </div>
                      <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 text-white font-black font-mono text-sm uppercase tracking-widest bg-red-900 px-4 py-2 shadow-2xl">EXPAND ARCHIVE</span>
                      </div>
                    </div>
                  </ImageModal>
                </div>
                <div className="space-y-4">
                  <ImageModal
                    src="/assets/images/corporate-veil-abstract.png"
                    alt="Corporate Veil"
                    title="The Corporate Veil"
                    caption="The mechanisms of legal attrition used by the Board of Regents to bury the Latham Archives."
                  >
                    <div className="aspect-square bg-zinc-900 relative overflow-hidden border-2 border-red-900 group cursor-zoom-in shadow-[0_0_30px_rgba(139,26,26,0.2)]">
                      <img 
                        src="/assets/images/corporate-veil-abstract.png" 
                        alt="Corporate Veil" 
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-black font-cinzel text-xl uppercase tracking-tighter text-shadow-blood">THE CORPORATE VEIL</span>
                      </div>
                      <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 text-white font-black font-mono text-sm uppercase tracking-widest bg-red-900 px-4 py-2 shadow-2xl">EXPAND ARCHIVE</span>
                      </div>
                    </div>
                  </ImageModal>
                </div>
              </div>
              <p className="font-mono text-lg font-black text-red-600 text-center uppercase tracking-widest">Fig 2.1: The systemic breakdown of ethical governance.</p>
            </div>
          </div>
        </div>

        {/* Mechanisms of Abuse */}
        <div className="border-t-2 border-red-900/30 pt-16">
          <h2 className="font-cinzel font-black text-5xl text-white mb-12 uppercase tracking-tighter text-shadow-blood">Mechanisms of Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { id: "01", title: "Clericalism", desc: "An exaggerated respect for the clergy that places bishops above criticism, discouraging victims from speaking." },
              { id: "02", title: "Power Dynamics", desc: "McCarrick held absolute power to ordain or end careers, making true consent impossible." },
              { id: "03", title: "Grooming", desc: "Feigning paternal affection and offering privileges to desensitize victims and blur boundaries." }
            ].map((mechanism) => (
              <div key={mechanism.id} className="bg-zinc-900/50 border-l-4 border-red-900 p-8 hover:bg-zinc-900 transition-all duration-500 group relative">
                <div className="font-mono text-6xl font-black text-red-600 mb-6 group-hover:scale-110 origin-left transition-transform duration-500">{mechanism.id}</div>
                <h3 className="font-cinzel font-black text-2xl text-white mb-4 uppercase tracking-widest">{mechanism.title}</h3>
                <p className="font-serif text-lg leading-relaxed text-zinc-400 group-hover:text-white transition-colors">
                  {mechanism.desc}
                </p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-900/5 blur-2xl group-hover:bg-red-900/10" />
              </div>
            ))}
          </div>
        </div>

        {/* Video Evidence */}
        <div className="border-t-2 border-red-900/30 pt-16">
          <h2 className="font-cinzel font-black text-5xl text-white mb-12 uppercase tracking-tighter text-shadow-blood">Forensic Video Archive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: "01", title: "McCarrick's history in DC", src: "https://www.youtube.com/embed/8uPSR4ysAaw" },
              { id: "02", title: "PBS NewsHour: McCarrick Charged", src: "https://www.youtube.com/embed/gT53J-7Xv7A" }
            ].map((video) => (
              <div key={video.id} className="bg-black border border-red-900/30 p-2 group hover:border-red-900 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <iframe 
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    src={video.src} 
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
                <div className="p-6 bg-zinc-900/30">
                  <span className="font-mono text-sm font-black text-red-600 uppercase tracking-widest">EXHIBIT {video.id}</span>
                  <h4 className="block text-white font-cinzel text-xl mt-2 uppercase tracking-tighter">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/ledger/mccarrick/the-rise" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Act I: The Rise
            </Button>
          </Link>
          <Link href="/ledger/mccarrick/the-reckoning" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Act III: The Reckoning <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>);
}
