import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ImageModal from "@/components/ImageModal";
import SectionNav from "@/components/SectionNav";

export default function Home() {
  return (<div className="space-y-8">
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

        <div className="p-10 border-2 border-red-900 bg-zinc-900 shadow-2xl my-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 blur-3xl pointer-events-none" />
          <h3 className="font-mono font-black uppercase text-base mb-6 text-red-600 tracking-[0.3em]">DOSSIER OBJECTIVE</h3>
          <p className="font-serif italic text-2xl text-white leading-relaxed">
            This report provides a multi-faceted forensic examination of the McCarrick case and the broader ecclesiastical network that facilitated his rise and protected him, despite decades of early warnings.
          </p>
        </div>

        <p>
          Prepared for comprehensive review, this report aggregates findings from the 2020 Vatican McCarrick Report, investigative journalism from The Washington Post and The New York Times, and survivor testimonies.
        </p>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="border-2 border-red-900 p-2 bg-zinc-900 group shadow-2xl transition-all">
          <ImageModal
            src="/assets/images/mccarrick_portrait.jpg"
            alt="Theodore McCarrick"
            title="Theodore McCarrick"
            caption="Former Cardinal and Archbishop of Washington, D.C., laicized in 2019."
          >
            <div className="aspect-[3/4] bg-black relative overflow-hidden mb-6 border border-red-900 cursor-zoom-in">
              <img
                src="/assets/images/mccarrick_portrait.jpg"
                alt="Theodore McCarrick"
                className="object-cover w-full h-full brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply pointer-events-none group-hover:bg-transparent" />
              <div className="absolute inset-x-0 bottom-0 py-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="block text-center text-white text-xs font-black uppercase tracking-[0.3em]">Click to Expand Forensic Record</span>
              </div>
            </div>
          </ImageModal>
          <div className="font-mono text-sm space-y-3 px-4 pb-4">
            <div className="flex justify-between border-b border-red-900/30 pb-2">
              <span className="text-red-600 font-black uppercase">SUBJECT</span>
              <span className="font-black text-white">MCCARRICK, THEODORE E.</span>
            </div>
            <div className="flex justify-between border-b border-red-900/30 pb-2">
              <span className="text-red-600 font-black uppercase">DOB</span>
              <span className="font-black text-white">JULY 7, 1930</span>
            </div>
            <div className="flex justify-between border-b border-red-900/30 pb-2">
              <span className="text-red-600 font-black uppercase">STATUS</span>
              <span className="font-black text-red-500 shadow-[0_0_10px_rgba(220,38,38,0.3)]">LAICIZED (2019)</span>
            </div>
          </div>
        </div>

        <div className="border-2 border-red-900 p-8 bg-zinc-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 blur-2xl pointer-events-none" />
          <h4 className="font-cinzel font-black uppercase text-base mb-6 border-b-2 border-red-900 pb-4 tracking-widest text-white">Evidence Archive</h4>
          <ul className="space-y-4 text-sm font-mono font-black uppercase">
            <li className="flex items-center gap-3 text-red-500 hover:text-white transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              Vatican McCarrick Report (2020)
            </li>
            <li className="flex items-center gap-3 text-red-500 hover:text-white transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              PA Grand Jury Report (2018)
            </li>
            <li className="flex items-center gap-3 text-red-500 hover:text-white transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              Dallas Charter (2002)
            </li>
          </ul>
        </div>
      </div>
    </div>



    <SectionNav currentHref="/ledger/mccarrick" />
  </div>);
}
