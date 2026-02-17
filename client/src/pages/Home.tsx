import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <div className="relative w-full max-w-[1240px] aspect-[1.55] bg-black shadow-2xl overflow-hidden border border-zinc-800">
          <img
            src="/bosch_triptych_user.png"
            alt="Sodom Hall Triptych"
            className="w-full h-full object-contain pointer-events-none"
          />

          {/* Hotspots */}

          {/* The Cathedral - Top Left */}
          <Link href="/about">
            <a
              className="absolute hotspot bg-white/0 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20"
              style={{ top: '29%', left: '6%', width: '18%', height: '5%' }}
              title="The Cathedral"
            />
          </Link>

          {/* The Ruling - Bottom Left */}
          <Link href="/ruling">
            <a
              className="absolute hotspot bg-white/0 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20"
              style={{ top: '35%', left: '9%', width: '15%', height: '5%' }}
              title="The Ruling"
            />
          </Link>

          {/* The Endgame - Top Right */}
          <Link href="/endgame/mccarrick">
            <a
              className="absolute hotspot bg-white/0 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20"
              style={{ top: '30%', right: '6%', width: '18%', height: '5%' }}
              title="The Endgame"
            />
          </Link>

          {/* The Academy - Bottom Right */}
          <Link href="/academy">
            <a
              className="absolute hotspot bg-white/0 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/20"
              style={{ top: '36%', right: '9%', width: '15%', height: '5%' }}
              title="The Academy"
            />
          </Link>

          {/* Branding Overlay */}
          <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white/90 drop-shadow-2xl">SODOM HALL</h1>
              <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.5em] text-zinc-400">The Cathedral of Documents</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section (kept for SEO/accessibility but less prominent) */}
      <div className="max-w-4xl mx-auto py-24 px-4 space-y-24 border-t border-zinc-800/30">
        <section className="max-w-2xl mx-auto space-y-12 text-zinc-400 font-serif text-lg leading-loose text-justify">
          <p className="first-letter:text-7xl first-letter:font-black first-letter:text-white first-letter:mr-4 first-letter:float-left first-letter:font-serif">
            In the Gospel of Matthew, Christ warns those who would harm children: better to have a millstone tied around your neck and be cast into the sea.
          </p>
          <p>
            For decades, a different kind of stone has been sinking — not into water, but into the institutional memory of the Roman Catholic Church and New Jersey's political establishment.
          </p>
          <p>
            This is the story of that stone, and the men who tried to hold it underwater.
          </p>
        </section>
      </div>
    </Layout>
  );
}

