import Layout from "@/components/Layout";

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

