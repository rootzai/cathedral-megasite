import { Link } from "wouter";
import SectionNav from "@/components/SectionNav";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import RedactedText from "@/components/RedactedText";
import GovernanceHierarchy from "@/components/GovernanceHierarchy";

export default function SetonHall() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <SectionHeader
        number="07"
        title="The Seton Hall Connection"
        subtitle="The 'Culture of Fear' and the Beach House"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="relative h-96 w-full overflow-hidden border-4 border-red-900 group shadow-[0_0_50px_rgba(139,26,26,0.4)] bg-gradient-to-b from-zinc-900 to-black flex flex-col justify-end p-8">
          <div className="absolute top-4 right-4 bg-red-900 text-white font-mono text-xs px-3 py-1 font-black uppercase tracking-widest border border-white">INVESTIGATIVE ART</div>
          <h2 className="text-4xl font-cinzel font-black uppercase text-white text-shadow-blood mb-2 tracking-tighter">SEMINARY CONFIDENTIAL</h2>
          <p className="text-lg text-red-500 font-black italic">"WHERE EVERY CONFESSION IS OFF THE RECORD."</p>
        </div>
        <div className="relative h-96 w-full overflow-hidden border-4 border-red-900 group shadow-[0_0_50px_rgba(139,26,26,0.4)] bg-gradient-to-b from-zinc-900 to-black flex flex-col justify-end p-8">
          <div className="absolute top-4 right-4 bg-red-900 text-white font-mono text-xs px-3 py-1 font-black uppercase tracking-widest border border-white">FORENSIC SATIRE</div>
          <h2 className="text-4xl font-cinzel font-black uppercase text-white text-shadow-blood mb-2 tracking-tighter">THE FACULTY CLUB</h2>
          <p className="text-lg text-red-500 font-black italic">"MEMBERSHIP HAS ITS PRIVILEGES."</p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-2xl font-serif border-l-8 border-red-900 pl-10 italic text-white bg-zinc-900/50 py-10 shadow-2xl">
          "The seminary was known as a 'brothel' in the 80s and 90s... McCarrick created a culture of fear and intimidation."
          <span className="block mt-4 text-red-600 font-mono text-sm uppercase font-black">— INTERNAL INVESTIGATIVE RECORD</span>
        </p>

        <h3 className="text-destructive font-display uppercase tracking-widest mt-12 border-b border-border pb-2">The "Brothel" Allegations</h3>
        <p>
          Credible reports and testimonies from former seminarians describe the Immaculate Conception Seminary at Seton Hall University during the 1980s and 1990s as a place rife with sexual misconduct. One former seminarian explicitly described the environment as resembling a <RedactedText>brothel</RedactedText>, where boundaries were non-existent and predatory behavior was normalized.
        </p>
        <p>
          This "culture of fear and intimidation," as later described by the university's own investigation, was directly cultivated by Theodore McCarrick. He used his power to silence dissent and groom young men for his own purposes.
        </p>

        <h3 className="text-destructive font-display uppercase tracking-widest mt-12 border-b border-border pb-2">The Room at the Seminary</h3>
        <p>
          Despite his rising status and eventual move to Washington D.C., McCarrick maintained a disturbing physical presence at Seton Hall. It is documented that he kept a private room at the seminary <strong className="text-zinc-900">until 2019</strong>—years after his retirement and well into the period when allegations were becoming public.
        </p>
        <p>
          This room served as a base of operations and a symbol of his lingering influence. Its existence raises serious questions about the university administration's complicity and their failure to sever ties with a known predator.
        </p>

        <h3 className="text-destructive font-display uppercase tracking-widest mt-12 border-b border-border pb-2">The Sea Girt Beach House</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
          <div className="relative h-96 w-full overflow-hidden border-4 border-red-900 group shadow-[0_0_50px_rgba(139,26,26,0.4)]">
            <img
              src="/assets/Beachhouseonce.png"
              alt="Satirical graphic about Monsignor Reilly's testimony regarding visits to McCarrick's beach house"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-cinzel font-black uppercase text-white mb-2 tracking-tighter">"I WAS ONLY THERE ONCE"</h2>
              <p className="text-lg text-red-500 font-black italic bg-black/60 px-2 py-1 inline-block">MSGR. REILLY'S CONVENIENT MEMORY.</p>
            </div>
          </div>
          <div className="relative h-96 w-full overflow-hidden border-4 border-red-900 group shadow-[0_0_50px_rgba(139,26,26,0.4)]">
            <img
              src="/assets/Reillybeachhousedark.png"
              alt="Satirical graphic depicting the reported abuse at McCarrick's Sea Girt beach house"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-cinzel font-black uppercase text-white mb-2 tracking-tighter">THE UPSTAIRS SECRET</h2>
              <p className="text-lg text-red-500 font-black italic bg-black/60 px-2 py-1 inline-block">"I WENT DOWNSTAIRS TO BED..."</p>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] w-full overflow-hidden border-8 border-red-900 my-16 group shadow-[0_0_100px_rgba(139,26,26,0.6)]">
          <img
            src="/assets/thepredators.png"
            alt="Satirical graphic depicting McCarrick's beach house as a site of systematic grooming of seminarians"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-12 w-full bg-gradient-to-t from-black to-transparent">
            <h2 className="text-6xl font-cinzel font-black uppercase text-white text-shadow-blood mb-4 tracking-tighter">WELCOME TO GROOM ISLAND</h2>
            <p className="text-2xl text-red-500 font-black italic uppercase tracking-widest bg-black/60 px-4 py-2 inline-block shadow-2xl">"WHERE THE RICH SEND PREDATORS TO GET SPIRITUAL."</p>
          </div>
          <div className="absolute top-8 right-8 bg-red-900 text-white font-mono text-sm px-6 py-2 font-black uppercase tracking-[0.4em] border-2 border-white shadow-2xl">KEY FORENSIC ASSET</div>
        </div>

        <p>
          Central to McCarrick's abuse was the beach house in Sea Girt, New Jersey. Purchased by the Diocese of Metuchen, this property became a notorious site for McCarrick's "grooming" rituals.
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-destructive">
          <li><strong>The "Uncle Ted" Persona:</strong> McCarrick would invite groups of seminarians to the beach house, fostering a casual, "family-like" atmosphere to lower their defenses.</li>
          <li><strong>The Bed Arrangement:</strong> He would often invite more guests than there were beds, creating a pretext to force young men to share a bed with him.</li>
          <li><strong>Joseph Reilly's Role:</strong> Monsignor Joseph Reilly, who served as McCarrick's secretary in 1994, admitted to visiting the beach house. As the gatekeeper to the Archbishop, his presence at this site of abuse is a critical detail in understanding the circle of enablers.</li>
        </ul>

        <div className="bg-red-900 p-10 border-4 border-white/20 shadow-2xl mt-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl pointer-events-none" />
          <h4 className="font-mono font-black text-sm text-white uppercase mb-4 tracking-[0.4em] border-b border-white/30 pb-2">Investigative Note</h4>
          <p className="text-lg font-serif italic text-white leading-relaxed">
            The Vatican's 2020 report confirmed that Cardinal O'Connor of New York eventually intervened, questioning the activities at the Sea Girt house, which abruptly ended the "invitations" for seminarians. However, the damage had been done for over a decade.
          </p>
        </div>
      </div>

      {/* Governance Hierarchy — Board Members */}
      <section className="mt-20 pt-16 border-t border-border">
        <h3 className="text-destructive font-display uppercase tracking-widest mb-8 border-b border-border pb-2">The Boards: Who Knew</h3>
        <p className="text-lg font-serif italic text-muted-foreground mb-8">
          The governance hierarchy of Seton Hall University during the period of concealment. Every individual listed below sat in a position of authority while the Latham Report was suppressed.
        </p>
        <GovernanceHierarchy />
      </section>

      <SectionNav currentHref="/ledger/mccarrick/seton-hall" />
    </div>
  );
}
