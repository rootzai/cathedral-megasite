import EndgameLayout from "@/components/EndgameLayout";
import ImageModal from "@/components/ImageModal";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SectionNav from "@/components/SectionNav";

export default function TheRise() {
  return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
    <SectionHeader
      number="ACT I"
      title="The Rise"
      subtitle="From Priesthood to Power: The Making of a Predator"
    />

    {/* Introduction / Background */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed font-serif">
        <p>
          <span className="font-bold first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">T</span>
          he American Catholic Church’s abuse crisis first gained national attention in 2002, but the seeds were sown decades earlier. Amidst this systemic failure rose Theodore McCarrick, a charismatic cleric whose ascent from a New York priest to a Washington Cardinal was fueled by ambition, fundraising prowess, and a "cult of personality."
        </p>
        <p>
          Born in 1930 and ordained in 1958, McCarrick quickly gained a reputation as an intelligent and ambitious networker. His early career in education and administration paved the way for a rapid rise through the hierarchy: Auxiliary Bishop of New York (1977), Bishop of Metuchen (1981), Archbishop of Newark (1986), and finally Archbishop of Washington D.C. (2000) and Cardinal (2001).
        </p>
      </div>
      <div className="lg:col-span-4">
        <div className="bg-zinc-900 border-2 border-red-900 p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 blur-3xl" />
          <h4 className="font-cinzel font-black uppercase text-xl mb-6 border-b-2 border-red-900 pb-4 tracking-widest text-white">Career Trajectory</h4>
          <ul className="space-y-4 font-mono text-sm tracking-tighter text-white">
            <li className="flex justify-between items-center"><span className="text-red-600 font-black">1958</span> <span className="font-bold">Ordained Priest</span></li>
            <li className="flex justify-between items-center"><span className="text-red-600 font-black">1977</span> <span className="font-bold">Auxiliary Bishop</span></li>
            <li className="flex justify-between items-center"><span className="text-red-600 font-black">1981</span> <span className="font-bold">Bishop of Metuchen</span></li>
            <li className="flex justify-between items-center"><span className="text-red-600 font-black">1986</span> <span className="font-bold">Archbishop of Newark</span></li>
            <li className="flex justify-between items-center"><span className="text-red-600 font-black">2000</span> <span className="font-bold">Archbishop of DC</span></li>
            <li className="flex justify-between items-center bg-red-900/40 p-2 border-l-4 border-red-600"><span className="text-white font-black">2001</span> <span className="font-black text-white italic">ELEVATED TO CARDINAL</span></li>
          </ul>
        </div>
      </div>
    </div>

    {/* The Network & Influence */}
    <div className="border-t-2 border-red-900/30 pt-16">
      <h2 className="font-cinzel font-black text-5xl text-white mb-12 uppercase tracking-tighter text-shadow-blood">The Network of Influence</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Image 1: The Cardinalverse */}
        <div className="space-y-4 group">
          <ImageModal
            src="/assets/McCarricktree.png"
            alt="The Cardinalverse"
            title="The Cardinalverse"
            caption="A satirical look at the infinite web of scandals and cover-ups."
          >
            <div className="aspect-video bg-zinc-900 relative overflow-hidden border-2 border-red-900 group-hover:shadow-[0_0_30px_rgba(139,26,26,0.5)] transition-all duration-500">
              <img
                src="/assets/McCarricktree.png"
                alt="The Cardinalverse"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-black font-mono text-sm uppercase tracking-widest bg-red-900 px-4 py-2 border-2 border-white shadow-2xl">EXPAND FORENSIC</span>
              </div>
            </div>
          </ImageModal>
          <p className="font-mono text-lg font-black text-red-600 uppercase tracking-widest text-center">Fig 1.2: Systemic Corruption</p>
        </div>

        {/* Image 3: Stang of Regents */}
        <div className="space-y-4 group">
          <ImageModal
            src="/assets/SetonShuffle.png"
            alt="The Stang of Regents"
            title="The Stang of Regents"
            caption="The Board of Regents knew, enabled, and was complicit."
          >
            <div className="aspect-video bg-zinc-900 relative overflow-hidden border-2 border-red-900 group-hover:shadow-[0_0_30px_rgba(139,26,26,0.5)] transition-all duration-500">
              <img
                src="/assets/SetonShuffle.png"
                alt="The Stang of Regents"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-black font-mono text-sm uppercase tracking-widest bg-red-900 px-4 py-2 border-2 border-white shadow-2xl">EXPAND FORENSIC</span>
              </div>
            </div>
          </ImageModal>
          <p className="font-mono text-lg font-black text-red-600 uppercase tracking-widest text-center">Fig 1.3: Institutional Complicity</p>
        </div>

      </div>
    </div>

    {/* The "Uncle Ted" Persona */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t-2 border-red-900/30 pt-16">
      <div className="space-y-8 font-serif text-lg leading-relaxed">
        <h2 className="font-cinzel font-black text-4xl text-white uppercase tracking-widest text-shadow-blood">The "Uncle Ted" Persona</h2>
        <p>
          McCarrick cultivated a persona of a benevolent, grandfatherly figure. This "Uncle Ted" image was a key mechanism of his grooming behavior, allowing him to cross boundaries with seminarians and young priests under the guise of mentorship and familial affection.
        </p>
        <p>
          He invited them to his beach house in Sea Girt, NJ—a location that would become central to many abuse allegations. There, the "cult of personality" he built served to silence dissent and normalize his predatory behavior.
        </p>
      </div>
      <div className="relative group border-2 border-red-900 shadow-2xl">
        <ImageModal
          src="/assets/images/grooming_legacy.png"
          alt="Grooming Legacy"
          title="The Method: Power & Predation"
          caption="A visual representation of the grooming tactics used to exploit power dynamics."
        >
          <div className="w-full h-full relative overflow-hidden group cursor-zoom-in aspect-square bg-zinc-900">
            <img
              src="/assets/images/grooming_legacy.png"
              alt="Grooming Legacy"
              className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 text-transparent pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-900/10">
              <span className="bg-red-900 text-white text-sm font-black font-mono px-4 py-2 uppercase tracking-widest border-2 border-white shadow-2xl">EXPAND ARCHIVE</span>
            </div>
          </div>
        </ImageModal>
      </div>
    </div>

    <SectionNav currentHref="/ledger/mccarrick/the-rise" />
  </div>);
}
