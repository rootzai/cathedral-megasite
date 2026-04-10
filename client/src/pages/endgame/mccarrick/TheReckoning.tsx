import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SectionNav from "@/components/SectionNav";
import ImageModal from "@/components/ImageModal";

export default function TheReckoning() {
  return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
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
        <div className="bg-zinc-900 border-2 border-red-900 p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 blur-3xl" />
          <h4 className="font-cinzel font-black uppercase text-xl mb-8 border-b-2 border-red-900 pb-4 tracking-widest text-white">Timeline of Collapse</h4>
          <div className="space-y-8 font-mono text-sm tracking-tight text-white">
            <div className="relative pl-6 border-l-4 border-red-600">
              <span className="block font-black text-red-600 mb-2 text-lg uppercase">JUNE 20, 2018</span>
              <span className="block leading-tight uppercase font-bold">Removed from public ministry.</span>
            </div>
            <div className="relative pl-6 border-l-4 border-red-600">
              <span className="block font-black text-red-600 mb-2 text-lg uppercase">JULY 28, 2018</span>
              <span className="block leading-tight uppercase font-bold">Resigns from College of Cardinals.</span>
            </div>
            <div className="relative pl-6 border-l-4 border-red-600">
              <span className="block font-black text-red-600 mb-2 text-lg uppercase">FEB 16, 2019</span>
              <span className="block leading-tight uppercase font-bold">Laicized by Pope Francis.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Survivor Voices */}
    <div className="border-t-2 border-red-900/30 pt-16">
      <h2 className="font-cinzel font-black text-5xl text-white mb-12 uppercase tracking-tighter text-shadow-blood">Survivor Voices</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-zinc-900 border-l-8 border-red-900 p-10 relative shadow-2xl">
            <span className="absolute top-4 left-6 text-9xl font-cinzel text-red-900/20 pointer-events-none">"</span>
            <p className="italic mb-6 relative z-10 font-serif text-2xl leading-relaxed text-white">
              "He was a father figure to me. I trusted him. And he used that trust to destroy me."
            </p>
            <p className="font-mono text-lg font-black text-red-600 uppercase tracking-widest text-right">— James Grein</p>
          </div>
          <p className="font-serif text-xl leading-relaxed text-zinc-300">
            James Grein and the "Beach House" survivors broke the silence, describing a "cult-like" atmosphere where abuse was normalized under the guise of spiritual mentorship.
          </p>
        </div>
        <div className="relative group border-2 border-red-900 shadow-2xl bg-zinc-900">
          <ImageModal
            src="/assets/images/survivors_protest.jpg"
            alt="Survivors Protest"
            title="Survivor Protest"
            caption="Survivors and advocates demanding justice in Baltimore, MD."
          >
            <div className="w-full h-full relative overflow-hidden group cursor-zoom-in aspect-video">
              <img
                src="/assets/images/survivors_protest.jpg"
                alt="Survivors Protest"
                className="object-cover w-full h-full group-hover:scale-110 transition-all duration-700 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-900/20">
                <span className="bg-red-900 text-white text-sm font-black font-mono px-4 py-2 uppercase tracking-widest border-2 border-white shadow-2xl">EXPAND ARCHIVE</span>
              </div>
            </div>
          </ImageModal>
        </div>
      </div>
    </div>

    {/* Institutional Response & Analysis */}
    <div className="border-t-2 border-red-900/30 pt-16">
      <h2 className="font-cinzel font-black text-5xl text-white mb-12 uppercase tracking-tighter text-shadow-blood">The Aftermath</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-2 space-y-8 font-serif text-xl leading-relaxed text-zinc-300">
          <p>
            The 2020 <strong>McCarrick Report</strong> was an unprecedented act of transparency, admitting that Pope John Paul II was deceived and others failed to act. In response, Pope Francis issued <em>Vos Estis Lux Mundi</em>, establishing new laws for holding bishops accountable.
          </p>
          <p>
            However, systemic flaws remain. The "pass the trash" mentality, clericalism, and the lack of independent lay oversight continue to plague the institution.
          </p>
        </div>
        <div className="bg-zinc-900 border-2 border-red-900 p-4 group hover:shadow-[0_0_30px_rgba(139,26,26,0.3)] transition-all">
          <div className="aspect-[3/4] bg-black relative overflow-hidden mb-6 border border-red-900">
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
                  className="object-cover w-full h-full group-hover:scale-110 transition-all duration-700 brightness-75 group-hover:brightness-110"
                />
                <div className="absolute inset-x-0 bottom-0 py-6 bg-gradient-to-t from-black to-transparent">
                  <span className="block text-center font-mono text-sm font-black text-red-600 uppercase tracking-[0.3em]">VATICAN CITY</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-900/10">
                  <span className="bg-red-900 text-white text-xs font-black font-mono px-4 py-2 border-2 border-white">EXPAND</span>
                </div>
              </div>
            </ImageModal>
          </div>
        </div>
      </div>
    </div>

    {/* Conclusion */}
    <div className="bg-red-900/10 p-12 border-2 border-red-900 mt-16 text-center shadow-[inset_0_0_40px_rgba(139,26,26,0.2)]">
      <h2 className="font-cinzel font-black text-4xl mb-6 uppercase tracking-widest text-white text-shadow-blood">Final Verdict</h2>
      <p className="font-serif text-xl max-w-3xl mx-auto leading-relaxed text-zinc-300">
        The McCarrick scandal forced the Church to confront its darkest failures. While he has been laicized, the structures that protected him—and the men who enabled him—remain a subject of intense scrutiny. This dossier stands as a record of the facts and a testament to the survivors.
      </p>
    </div>

    <SectionNav currentHref="/ledger/mccarrick/the-reckoning" />
  </div>);
}
