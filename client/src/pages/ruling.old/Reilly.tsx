import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, ArrowRight, Eye, Image as ImageIcon, Siren } from "lucide-react";

const memeGallery = [
  { src: "/Blessmefather.png", alt: "Bless Me Father Meme", title: "The Confession" },
  { src: "/MsgrJP1.png", alt: "Msgr Joe Paterno Meme 1", title: "The Comparison" },
  { src: "/MsgrJP2.png", alt: "Msgr Joe Paterno Meme 2", title: "The Legacy" },
  { src: "/Unholy3.png", alt: "The Unholy Trinity Meme", title: "The Trinity" },
  { src: "/Beachhouseonce.png", alt: "Beach House Once Meme", title: "The Denial" },
  { src: "/Devillikesyourwork.png", alt: "Devil Likes Your Work Meme", title: "The Promotion" },
];

export default function Reilly() {
  return (
    <Layout>
      <div className="space-y-16 animate-in fade-in duration-1000">
        
        {/* Hero Section: The Reilly Focus */}
        <section className="relative border-b border-border pb-16">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <Siren className="w-96 h-96 text-destructive animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
                <AlertTriangle className="w-3 h-3" />
                Primary Target Identified
              </div>
              <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none">
                The Face of <br/>
                <span className="text-destructive">Impunity</span>
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl">
                Msgr. Joseph Reilly was named in the Latham Report. Instead of removal, he was rewarded with the presidency of Seton Hall University.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-mono uppercase tracking-widest group" asChild>
                  <a href="https://www.politico.com/news/2025/11/17/seton-hall-clergy-abuse-documents-00654168" target="_blank" rel="noopener noreferrer">
                    Read the Politico Exposé
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer perspective-1000">
                  <div className="absolute inset-0 bg-destructive/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                  <div className="relative transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                    <div className="aspect-[4/5] bg-black border-2 border-destructive/50 overflow-hidden relative shadow-2xl shadow-destructive/20">
                      <img 
                        src="/reilly-portrait.png" 
                        alt="Msgr. Joseph Reilly" 
                        className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="font-mono text-xs text-destructive mb-2">STATUS: PROMOTED</div>
                        <h2 className="font-heading text-3xl text-white">Msgr. Joseph Reilly</h2>
                        <p className="font-mono text-sm text-gray-400 mt-2">President, Seton Hall University</p>
                        <div className="mt-4 flex items-center text-xs font-mono text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-4 h-4 mr-2" />
                          CLICK TO EXPAND
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black border-destructive/20">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-destructive">Msgr. Joseph Reilly</DialogTitle>
                </DialogHeader>
                <div className="relative aspect-auto max-h-[80vh] w-full overflow-hidden rounded-md">
                  <img 
                    src="/reilly-portrait.png" 
                    alt="Msgr. Joseph Reilly" 
                    className="h-full w-full object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Meme Gallery Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-heading text-3xl text-foreground flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-destructive" />
              The Court of Public Opinion
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memeGallery.map((meme, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-destructive/50 hover:shadow-lg hover:shadow-destructive/10">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={meme.src} 
                        alt={meme.alt} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <p className="font-heading text-xl text-white">{meme.title}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-black border-destructive/20">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-destructive">{meme.title}</DialogTitle>
                  </DialogHeader>
                  <div className="relative aspect-auto max-h-[80vh] w-full overflow-hidden rounded-md">
                    <img 
                      src={meme.src} 
                      alt={meme.alt} 
                      className="h-full w-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Detailed Dossier Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-heading text-3xl text-foreground flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              The "Survivor" Dossier
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-2xl text-destructive">High-Confidence Implication</h3>
                  <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">PROBABILITY: 100%</Badge>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Core Role (2019)</h4>
                  <p className="font-body text-lg">Rector/Dean, ICSST (2012–2022); Board of Trustees Member.</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Implication Details</h4>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Knew of ≥3 abuse/harassment cases (2012 seminarian assault; 2014 St. Andrew's incident; McCarrick rumors, including 1994 beach house avoidance). Handled 2012 case "in-house" (dismissed offender but bypassed Title IX/Archdiocese formal channels). Report recommended removal from leadership/boards.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Viability Assessment</h4>
                  <p className="font-body text-muted-foreground leading-relaxed border-l-2 border-destructive/30 pl-4">
                    Direct leaks confirm; exemplifies institutional favoritism. No canonical action; SHU claims "internal resolution."
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                <h3 className="font-heading text-2xl text-foreground">Career Timeline & Changes</h3>
                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                    <h4 className="font-mono text-sm text-destructive mb-1">Pre-2019</h4>
                    <p className="font-body text-muted-foreground">Ordained 1987; McCarrick secretary (1994); ICSST faculty (2002+).</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                    <h4 className="font-mono text-sm text-destructive mb-1">2020–2022</h4>
                    <p className="font-body text-muted-foreground">Retained as Rector despite recommendation; removed from Board (replaced by Msgr. McCarren).</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                    <h4 className="font-mono text-sm text-destructive mb-1">2022–2023</h4>
                    <p className="font-body text-muted-foreground">Sabbatical (Rome/private).</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                    <h4 className="font-mono text-sm text-destructive mb-1">2023–2024</h4>
                    <p className="font-body text-muted-foreground">Vice Provost for Academics & Catholic Identity.</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-destructive border-4 border-background animate-pulse" />
                    <h4 className="font-mono text-sm text-destructive mb-1">2024–Present</h4>
                    <p className="font-body text-foreground font-bold">SHU President (unanimous Board vote, ignoring report).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg">
                <h3 className="font-heading text-xl text-destructive mb-4">Key Evidence</h3>
                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    Named in Latham Report leaks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    IRS Form 990s confirmation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    Politico Exposé (Nov 2025)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    Admitted knowledge of "Beach House" rumors (1994)
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="font-heading text-xl text-foreground mb-4">Post-Report Outcome</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Protected and promoted. Drew NJ lawmakers' calls for resignation (Jan. 2025). Ropes & Gray review (Feb. 2025) ongoing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <JourneyNav />
      </div>
    </Layout>
  );
}
