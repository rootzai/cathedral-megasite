import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ChevronDown, Check } from "lucide-react";
import "./HumptyCaseStudy.css";
import { humptyImage as heroImageBase64 } from "./humptyImage";
import { cn } from "@/lib/utils";

export default function HumptyCaseStudy() {
  const [foundEggs, setFoundEggs] = useState<Set<number>>(new Set());
  const [openEgg, setOpenEgg] = useState<number | null>(null);

  const totalEggs = 13;

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const handleOpenEgg = (n: number) => {
    if (openEgg === n) {
      setOpenEgg(null);
    } else {
      setOpenEgg(n);
      setFoundEggs((prev) => {
        const next = new Set(prev);
        next.add(n);
        return next;
      });
      setTimeout(() => {
        const panel = document.getElementById("egg-" + n);
        if (panel) {
          panel.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 50);
    }
  };

  const isFound = (n: number) => foundEggs.has(n);
  const isOpen = (n: number) => openEgg === n;

  // Components for styling
  const BaumText = ({ children }: { children: React.ReactNode }) => (
    <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#c0bba5] mb-8 relative pl-6 indent-8 tracking-wide">
      {children}
    </p>
  );

  const ForensicText = ({ children }: { children: React.ReactNode }) => (
    <div className="font-mono text-sm md:text-base leading-relaxed text-zinc-300 bg-[#0d0d0f] border-l-4 border-[#8b1a1a] p-6 mb-16 shadow-lg shadow-black/50">
      <div className="text-[#8b1a1a] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
        // Forensic Annotation
      </div>
      {children}
    </div>
  );

  const ChapterHead = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-4 mb-10 mt-20">
      <div className="h-px bg-zinc-800 flex-1" />
      <h3 className="font-serif text-2xl text-white uppercase tracking-[0.3em] font-light">
        {children}
      </h3>
      <div className="h-px bg-zinc-800 flex-1" />
    </div>
  );

  const EggTrigger = ({
    num,
    name,
    roman = false,
  }: {
    num: number;
    name: React.ReactNode;
    roman?: boolean;
  }) => (
    <button
      id={`trigger-${num}`}
      onClick={() => handleOpenEgg(num)}
      className={cn(
        "inline-flex items-center gap-2 px-2 py-0.5 mx-1 transition-all group font-serif italic text-lg lg:text-xl",
        isFound(num)
          ? "text-[#8b1a1a] border-b border-[#8b1a1a]"
          : "text-white bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 cursor-pointer"
      )}
    >
      <span
        className={cn(
          "font-mono text-xs font-bold not-italic px-1.5 py-0.5",
          isFound(num) ? "bg-[#8b1a1a] text-white" : "bg-white/20 text-white"
        )}
      >
        {roman ? "XIII" : String(num).padStart(2, "0")}
      </span>
      {name}
    </button>
  );

  const EggPanel = ({
    num,
    name,
    role,
    parallel,
    forensic,
    quote,
    attr,
    quote2,
    attr2,
    quote3,
    attr3,
    roman = false,
  }: {
    num: number;
    name: string;
    role: string;
    parallel: string;
    forensic: React.ReactNode;
    quote?: string;
    attr?: string;
    quote2?: string;
    attr2?: string;
    quote3?: string;
    attr3?: string;
    roman?: boolean;
  }) => {
    if (!isOpen(num)) return null;

    return (
      <div
        id={`egg-${num}`}
        className="my-8 animate-in slide-in-from-top-4 fade-in duration-500 overflow-hidden"
      >
        <div className="relative bg-[#050505] border border-[#8b1a1a]/50 border-t-[4px] border-t-[#8b1a1a] p-8 md:p-12 shadow-2xl">
          <button
            onClick={() => handleOpenEgg(num)}
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-2"
            title="Close Dossier"
          >
            ✕
          </button>

          <header className="mb-8 border-b border-white/10 pb-6">
            <div className="font-mono text-xs text-[#8b1a1a] tracking-[0.3em] font-bold uppercase mb-4">
              // Easter Egg No. {roman ? "XIII" : String(num).padStart(2, "0")}{" "}
              {roman && "— The Thirteenth Figure "} //
            </div>
            <h4 className="font-serif text-4xl md:text-5xl text-white mb-2 uppercase tracking-tight">
              {name}
            </h4>
            <div className="font-mono text-sm text-zinc-400 tracking-wider">
              {role}
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-1">
              <div className="bg-[#0a0a0a] p-6 border border-white/5 h-full">
                <div className="text-[10px] text-zinc-500 font-mono tracking-[0.2em] uppercase mb-4">
                  The Metaphor
                </div>
                <p className="font-serif text-sm text-[#e0ddc8] italic leading-relaxed">
                  "{parallel}"
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="text-[10px] text-[#8b1a1a] font-mono tracking-[0.2em] uppercase mb-4">
                  Forensic Reality
                </div>
                <div className="font-mono text-sm leading-relaxed text-zinc-300 space-y-4">
                  {forensic}
                </div>
              </div>

              {quote && (
                <div className="border-l-2 border-zinc-700 pl-6 py-2 mt-8">
                  <p className="font-serif text-lg text-white mb-3 italic">
                    "{quote}"
                  </p>
                  {attr && (
                    <div className="font-mono text-xs text-[#8b1a1a] tracking-wider uppercase">
                      — {attr}
                    </div>
                  )}
                </div>
              )}

              {quote2 && (
                <div className="border-l-2 border-zinc-700 pl-6 py-2 mt-4">
                  <p className="font-serif text-lg text-white mb-3 italic">
                    "{quote2}"
                  </p>
                  {attr2 && (
                    <div className="font-mono text-xs text-[#8b1a1a] tracking-wider uppercase">
                      — {attr2}
                    </div>
                  )}
                </div>
              )}

              {quote3 && (
                <div className="border-l-2 border-zinc-700 pl-6 py-2 mt-4">
                  <p className="font-serif text-lg text-white mb-3 italic">
                    "{quote3}"
                  </p>
                  {attr3 && (
                    <div className="font-mono text-xs text-[#8b1a1a] tracking-wider uppercase">
                      — {attr3}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#8b1a1a] selection:text-white pb-32">
      {/* Floating Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/">
          <button className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Return to Cathedral</span>
          </button>
        </Link>

        {/* Counter Badge */}
        <div className="flex items-center gap-4 bg-black border border-white/10 px-4 py-1.5 rounded-full shadow-lg">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            Easter Eggs Found
          </span>
          <div className="font-mono font-bold text-sm">
            <span
              className={cn(
                foundEggs.size === totalEggs ? "text-[#8b1a1a]" : "text-white"
              )}
            >
              {String(foundEggs.size).padStart(2, "0")}
            </span>
            <span className="text-zinc-600"> / {totalEggs}</span>
          </div>
          {foundEggs.size === totalEggs && (
            <div className="w-2 h-2 rounded-full bg-[#8b1a1a] animate-pulse" />
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-32 px-4 md:px-8">
        {/* MASTHEAD */}
        <header className="mb-20 text-center">
          <div className="font-mono text-[#8b1a1a] text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Sodom Hall // Forensic Literature Division // Easter 2026
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ded8c4] uppercase tracking-widest leading-tight mb-8">
            <span className="block text-lg sm:text-xl md:text-2xl text-zinc-500 font-light tracking-[0.4em] mb-4">
              A Case Study Masquerading as a Nursery Rhyme
            </span>
            Humpty Dumpty
            <br />
            <span className="font-black">Had a Great Fall</span>
          </h1>

          <div className="h-px w-24 bg-[#8b1a1a] mx-auto mb-8" />

          <h2 className="font-serif text-base sm:text-lg md:text-xl text-zinc-400 uppercase tracking-widest leading-relaxed mb-6 max-w-2xl mx-auto">
            Being the Complete and Annotated Forensic Edition<br />
            of L. Frank Baum's Cautionary Tale,<br />
            with Thirteen Easter Eggs and Their Accompanying Dossiers
          </h2>

          <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
            After Baum (1897) // Perry Law Report (2024) // Primary Sources
            Throughout
          </div>
        </header>

        {/* HERO IMAGE */}
        <figure className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#8b1a1a]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <img
            src={heroImageBase64}
            alt="Humpty Dumpty Original Illustration"
            className="w-full relative z-10 border border-white/5 grayscale saturate-50 contrast-125 sepia-[.1] brightness-90 shadow-2xl"
          />
          <figcaption className="text-right mt-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            Fig 01. The Fall of the Foundational Truth
          </figcaption>
        </figure>

        {/* THE NURSERY RHYME */}
        <div className="bg-[#111111] p-10 md:p-16 mb-24 border border-zinc-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 font-serif text-[12rem] leading-none pointer-events-none">
            "
          </div>
          <p className="font-serif text-2xl md:text-4xl leading-[2] text-[#f4ecd8] tracking-wider uppercase font-light relative z-10">
            Humpty Dumpty sat on a wall,
            <br />
            Humpty Dumpty had a great fall.
            <br />
            All the King's horses,
            <br />
            And all the King's men,
            <br />
            Cannot put Humpty together again.
          </p>
          <div className="absolute bottom-0 left-0 p-8 opacity-5 font-serif text-[12rem] leading-none pointer-events-none rotate-180">
            "
          </div>
        </div>

        {/* BEGIN NARRATIVE SECTION */}
        <div className="text-center mb-16">
          <div className="font-mono text-zinc-500 tracking-[0.3em] text-sm uppercase">
            Forensic Commentary & Narrative Parallel
          </div>
          <ChevronDown className="w-5 h-5 text-[#8b1a1a] mx-auto mt-4 animate-bounce" />
        </div>

        {/* CHAPTER I */}
        <ChapterHead>I. The Wall</ChapterHead>

        <BaumText>
          <span className="float-left text-7xl leading-none pr-3 font-black text-[#ded8c4]">
            H
          </span>
          umpty Dumpty was a smooth, round little chap, with a winning smile,
          and a great golden heart in his breast. Only one thing troubled
          Humpty, and that was that he might fall and crack his thin, white
          skin; he wished to be placed up on high, that he might see the world
          to advantage.
        </BaumText>

        <ForensicText>
          Humpty Dumpty, in the institutional architecture of Sodom Hall, is the
          truth. It is smooth, it is round, and its skin is frightfully thin. It
          was placed up on high — in an 8-count, 64-page Verified Complaint
          filed in Superior Court on February 5, 2024, and in a 111-page
          retaliation complaint submitted to the Department of Education on
          March 25, 2024. From those elevated perches, it saw the world to
          advantage. The truth was visible.
        </ForensicText>

        <BaumText>
          So he crawled up the wall and sat upon the very edge, where he could
          look into the King's palace and see the people of the court walking in
          the garden.
        </BaumText>

        <ForensicText>
          The King's palace is Seton Hall University. The wall is the boundary
          between what the institution claims to be and what it actually is. The
          people of the court walking in the garden are the Board of Regents,
          the Board of Trustees, and the administrative cabinet. For three
          years, Humpty Dumpty looked down into the palace and saw what the
          courtiers were doing.
        </ForensicText>

        <BaumText>
          Presently, a courtier,{" "}
          <EggTrigger num={1} name={<em>Kevin Marino</em>} />, passed by the
          wall and saw Humpty Dumpty sitting there.
        </BaumText>

        <EggPanel
          num={1}
          name="Kevin Marino"
          role="Former Chair, Board of Regents // The Courtier"
          parallel="A courtier passed by the wall and saw Humpty Dumpty sitting there."
          forensic="Marino served as the Chair of the Board of Regents. According to contemporaneous notes, eyewitness accounts, and federal complaints, he leveraged his position to retaliate against those who threatened his control. He is alleged to have instructed the president not to interview with the Latham investigation ('they'll take one look at your boy scout face') and is documented attempting to block the Latham Report's production from 2019 to 2024. He resigned in December 2023 following complaints from Kelli Nyre and multiple administrators. He is the central node of the 'King's men.'"
          quote="Regent Marino attempted to intervene and halt the impending investigation... Dr. Nyre refused to comply with this instruction."
          attr="Verified Complaint, Nyre v. SHU, February 5, 2024"
        />

        {/* CHAPTER II */}
        <ChapterHead>II. The Fall</ChapterHead>

        <BaumText>
          <em>"Get down from there, Humpty!"</em> cried the courtier;{" "}
          <em>"you will surely fall, and then you will be broken."</em> But
          Humpty only laughed, and said:{" "}
          <em>"I am safe enough here; let me alone."</em>
        </BaumText>

        <ForensicText>
          The warning came directly from the institutional defense network. Do
          not put the truth on the wall. Withdraw the complaints. Settle
          quietly. The truth, thinking itself safe in the halls of justice,
          declined. It stayed on the wall.
        </ForensicText>

        <BaumText>
          Then came along{" "}
          <EggTrigger num={2} name={<em>Thomas Scrivo</em>} />, the King's
          advocate, who shook his head gravely. <em>"You are a foolish egg,"</em>{" "}
          he said,{" "}
          <em>"for if you fall, no one can put you together again."</em>
        </BaumText>

        <EggPanel
          num={2}
          name="Thomas Scrivo"
          role="Managing Partner, O'Toole Scrivo // The King's Advocate"
          parallel="Then came along Thomas Scrivo, the King's advocate, who shook his head gravely."
          forensic="Scrivo is Seton Hall's outside counsel. A former Christie chief counsel, he filed the unprecedented Chancery case under a manufactured 'breach of fiduciary duty' theory to block Nyre from cooperating with the Ropes & Gray investigation. Scrivo's December 13, 2024 letter demanded preservation of a journalist's records—demonstrating he knew the recipient was acting as a journalist reporting on the SCIF-sealed Latham Report. 16 months later, Scrivo signed a sworn declaration in California asserting the same individual is 'not a journalist.' He is the architect of the weaponized litigation strategy."
          quote="Pursuant to the pending and/or reasonably anticipated litigation involving Seton Hall, you are hereby directed to prospectively preserve all documents... specifically including your communications with 'reporters, press, and media outlets.'"
          attr="Thomas Scrivo's litigation hold letter, December 13, 2024"
        />

        <BaumText>
          Then{" "}
          <EggTrigger num={3} name={<em>Christopher Porrino</em>} /> passed,
          riding upon a prancing horse. He struck the wall with his whip, and
          called out: <em>"Get down, Humpty! The King is coming."</em>
        </BaumText>

        <EggPanel
          num={3}
          name="Christopher Porrino"
          role="Partner, Lowenstein Sandler // The Man on the Prancing Horse"
          parallel="He struck the wall with his whip, and called out: 'Get down, Humpty! The King is coming.'"
          forensic={<>Porrino is outside counsel to Kevin Marino. A former NJ Attorney General under Christie, he represented the Christie administration during Bridgegate, drafting the Mastro Report which exonerated the Governor. He coordinates with Scrivo to execute a twin-pillar defense strategy: Scrivo litigates for the institution, Porrino threatens for the individual. The bar complaints documenting his role in the church bulletin fabrication and grand jury coordination were declined in two days by the OAE Director—a Christie alumna who had served as his subordinate.</>}
          quote="The coordinated deployment of dual threat letters from Scrivo and Porrino, often arriving within 48 hours of each other, demonstrates a unified command structure operating across supposedly separate client representations."
          attr="Forensic Audit Report, Network Analysis"
        />

        <BaumText>
          Humpty Dumpty was frightened at this, and tried to scramble down; but
          he missed his footing, and fell heavily to the ground!
        </BaumText>

        <ForensicText>
          The fall is the Chancery Division lawsuit. The King's men did not wait
          for the truth to be evaluated. They knocked it off the wall by filing
          a preemptive lawsuit in a forum where their partner chairs judicial
          appointments, securing a temporary restraining order that gagged the
          plaintiff from participating in an internal investigation. The truth
          hit the ground and shattered.
        </ForensicText>

        {/* CHAPTER III */}
        <ChapterHead>III. Coutchie-Coulou</ChapterHead>

        <BaumText>
          Just then another egg came rolling along. This was{" "}
          <EggTrigger num={4} name={<em>Coutchie-Coulou</em>} />. She was a
          very pretty egg, though not so large as Humpty, and when she saw him
          she stopped and said: <em>"Why do you weep?"</em>
        </BaumText>

        <EggPanel
          num={4}
          name="The Perry Law Report"
          role="Independent Investigation // Coutchie-Coulou"
          parallel="Just then another egg came rolling along. This was Coutchie-Coulou."
          forensic="The Perry Law Report was commissioned by the Executive Committee of the Board of Regents on December 14, 2023. It cost over $2 million. It is 57 pages long. Its mandate was to investigate Title IX and harassment complaints against Kevin Marino. It concluded there was 'no evidence' to support the claims. But the report itself documents the eyewitness evidence of the physical contact it claims did not happen. It is the second egg—the manufactured truth, created to replace the shattered one."
          quote="The Independent Investigation found no evidence that the alleged conduct occurred."
          attr="Perry Law Report, Executive Summary, page 3"
        />

        <BaumText>
          <em>"Because I have fallen from the wall and broken my shell,"</em>{" "}
          answered Humpty. <em>"The King's men did it."</em>
        </BaumText>

        <BaumText>
          <em>"That is too bad,"</em> replied Coutchie-Coulou, whose shell was
          painted with the mark of{" "}
          <EggTrigger num={5} name={<em>Karen Agnifilo</em>} />.{" "}
          <em>"But I will stay with you and comfort you."</em>
        </BaumText>

        <EggPanel
          num={5}
          name="Karen Agnifilo"
          role="Partner, Perry Law // The Lead Investigator"
          parallel="Coutchie-Coulou, whose shell was painted with the mark of Karen Agnifilo."
          forensic="Agnifilo was the lead investigator on the Perry Law Report. She is a former Chief Assistant District Attorney in Manhattan. Her investigation was internally codenamed 'The Nursery.' She began her presentation to Seton Hall executives by stating: 'I am hired by the Board to protect the Board.' She then produced a report that concluded Marino engaged in no misconduct—while her own footnotes documented the exact opposite. Footnote 11 documents the August 23, 2021 meeting where President Nyre reported Marino's harassment of his wife to General Counsel John Tysse. Agnifilo footnoted it, then concluded there was no evidence."
          quote="General Counsel Tysse's notes reflect that during their meeting, Dr. Nyre brought up the inappropriate conduct that Mrs. Nyre alleges occurred."
          attr="Perry Law Report, Footnote 11. The smoking gun buried in the bottom margin."
        />

        <BaumText>
          And Coutchie-Coulou was indeed a false friend, for the words painted
          upon her shell were placed there by{" "}
          <EggTrigger num={6} name={<em>Angelo Stio</em>} />, acting with the
          King's men.
        </BaumText>

        <EggPanel
          num={6}
          name="Angelo Stio"
          role="Partner, Troutman Pepper // Attorney for the Board of Regents"
          parallel="The words painted upon her shell were placed there by Angelo Stio, acting with the King's men."
          forensic="Stio is identified by Kevin Flood in his December 11, 2023 letter to Cardinal Tobin as 'the Attorney for the Board of Regents' who 'directed the altering of official University records by removing three separate staff complaints of Board member harassment and discrimination from the Annual Report of Claims prior to its presentation at the May 8, 2023 Audit Committee meeting.' University staff, directed by the Board's attorney, reluctantly complied. The complaints removed were from Capadona (four separate complaints), McMonagle (one complaint), and the Nyres. Capadona recused herself from the erasure process because her own complaints were among those being removed. Stio's firm — Troutman Pepper — later filed the California deposition petition against journalist Dei Journo on March 24, 2026 — the same day Dei Journo met with a Congressional representative. The filing partner in California is Peter Villar."
          quote="The Attorney for the Board of Regents directed the altering of official University records by removing three separate staff complaints... Given the University staff were directed by the Board's attorney, they reluctantly complied and altered the records as directed."
          attr="Kevin Flood, letter to Cardinal Tobin, December 11, 2023"
        />

        {/* CHAPTER IV */}
        <ChapterHead>IV. The Crushing of Coutchie-Coulou</ChapterHead>

        <BaumText>
          Just as the eggs were in the middle of the drive the horses dashed
          by, and Humpty, greatly alarmed, ran as fast as he could for the
          grass. Then he stopped and looked around, and behold! There was poor
          Coutchie-Coulou crushed into a shapeless mass by the hoof of one of
          the horses, and her golden heart was spreading itself slowly over the
          white gravel of the driveway!
        </BaumText>

        <ForensicText>
          The Perry Law Report was filed publicly by Porrino on July 10, 2024 at
          9:57 PM, as Exhibit A to his amicus brief — without redacting the
          names of the sexual harassment complainants. Donna McMonagle and Kim
          Capadona, both of whom had filed harassment complaints against Marino,
          both of whom the University had committed to protect, were publicly
          identified in a court document without their consent. The golden heart
          of the Perry Law Report — its supposed "no evidence" finding — spread
          itself across the public record. The New York Times ran it the next
          evening. The horses dashed by. The Perry Law Report was crushed into a
          shapeless mass. The horses are the King's men.
        </ForensicText>

        <BaumText>
          Humpty sat down upon the grass and wept grievously, for the death of
          his companion was a great blow to him. And while he sobbed, the richly
          dressed courtiers and charming ladies strolled on through the walks,
          entirely unmoved. The charming lady who strolled most unmovedly of all
          — who had, in fact, been groomed for her stroll by the very man whose
          conduct had crushed Coutchie-Coulou — is{" "}
          <EggTrigger num={7} name={<em>Jennifer Davenport</em>} />. New Jersey
          Attorney General. Porrino's former First Assistant AG. Seton Hall Law
          School graduate. Former Latham & Watkins litigation associate.
          Confirmed unanimously February 24, 2026 — 36 days after bar complaints
          against Porrino were filed with the OAE. The attorney general who
          would investigate Christopher Porrino is the woman Christopher Porrino
          publicly championed for the position. She strolled through the walks.
          The charming lady. Richly dressed.
        </BaumText>

        <EggPanel
          num={7}
          name="Jennifer Davenport"
          role="New Jersey Attorney General // Porrino's Former First Assistant // The Charming Lady in the Walk"
          parallel="Richly dressed courtiers and charming ladies strolled through the walks."
          forensic="Davenport served as Porrino's direct subordinate — his First Assistant AG. She is a Seton Hall Law School graduate. She was a former Latham & Watkins litigation associate — the same firm that produced the Latham Report, now under court order to be produced May 18, 2026. Porrino publicly endorsed her confirmation in December 2025, describing working 'closely with her.' She was confirmed unanimously February 24, 2026 — exactly 36 days after bar complaints documenting Porrino's fabrication of church bulletins and coordination of a grand jury subpoena against a journalist were filed with the OAE. The attorney general who would investigate the man who allegedly manufactured the criminal predicate for the Bergen County grand jury subpoena is the woman that man personally championed for the position. The circuit is complete."
          quote="He is a confidence inspiring selection… I have had the great privilege of working closely with her in some of the most challenging, high-pressure settings that government-related service can produce."
          attr="Christopher Porrino endorsing Jennifer Davenport for NJ Attorney General, December 2025"
        />

        <BaumText>
          And among the courtiers strolling most decorously through the walks,
          heedless of the crushed egg on the driveway, is{" "}
          <EggTrigger num={8} name={<em>Johanna Barba Jones</em>} />,
          Director of the New Jersey Office of Attorney Ethics. Christie
          administration alumna. Seton Hall Law School graduate. The ethics
          office director is a Seton Hall Law graduate who worked for Christie.
          She declined to investigate Seton Hall Law graduates Scrivo and
          Porrino. Twice. In two days. Citing the wrong prong of the rule. The
          mandatory "shall be docketed" prong was not applied. The discretionary
          "may be declined" prong was misused. The ethics office, like the
          beautiful courtier, strolled through the walk and saw nothing that
          required her attention.
        </BaumText>

        <EggPanel
          num={8}
          name="Johanna Barba Jones"
          role="Director, NJ Office of Attorney Ethics // Christie Alumna // SHU Law Graduate"
          parallel="Richly dressed courtiers and charming ladies strolled through the walks."
          forensic="Barba Jones served as Christie's assistant counsel from 2010–2012. She is a Seton Hall Law School graduate. She was appointed OAE Director in October 2022. Bar complaints against Scrivo and Porrino — documenting the fabrication of church bulletins, the coordination of a grand jury subpoena against a journalist, and the coordinated six-day hold letter pattern — were filed January 19, 2026. They were declined January 21, 2026. Two days. Without investigation. The declination cited Rule 1:20-3(f) — but applied the permissive 'may be declined' prong to a grievance that triggered the mandatory 'shall be docketed' prong. The fabrication of church documents to justify a criminal grand jury subpoena against a journalist is not a close case on 'clearly demonstrable provable ethical violations.' The ethics office strolled past the crushed egg on the driveway and saw nothing that required its attention. Its director is a graduate of the institution whose lawyers it was not investigating."
          quote="The bar complaint process has been captured by the same network it is supposed to investigate. This is not a failure of the system. It is the system operating exactly as Scrivo and Porrino designed it to operate."
          attr="Litigation as a Weapon, submitted to Congress, April 1, 2026"
        />

        {/* CHAPTER V */}
        <ChapterHead>V. The Princess Who Found the Egg</ChapterHead>

        <BaumText>
          And while he sobbed, a voice said to him,{" "}
          <em>"What is the matter, little egg?"</em> Humpty looked up, and saw
          a beautiful girl bending over him.{" "}
          <em>"One of the horses has stepped upon Coutchie-Coulou,"</em> he
          said;{" "}
          <em>"and now she is dead, and I have no friend in all the world."</em>
        </BaumText>

        <ForensicText>
          The Princess — the one who finds the truth after the Perry Law Report
          is crushed, who takes it up and shows it around the palace — is Kelli
          Nyre. Her December 1, 2023 memo to the Title IX coordinator was the
          first document that initiated the formal complaint process. On
          December 18, 2023, she met with Lori Brown, the Title IX coordinator.
          Lori Brown's notes record: "Mrs. Nyre seemed genuinely upset and her
          eyes teared up when telling Ms. Brown what happened." Brown
          memorialized what Mrs. Nyre told her in notes that Mrs. Nyre herself
          reviewed, edited, and approved. Three documents from the Nyres exist
          in the Perry Law Report. The Perry Law Report's conclusion: the Nyres
          "never provided any documents to support their claims."
        </ForensicText>

        <BaumText>
          The girl laughed.{" "}
          <em>"Do not grieve,"</em> she said,{" "}
          <em>
            "for eggs are but short-lived creatures at best, and Coutchie-Coulou
            has at least died an honorable death and saved herself from being
            fried in a pan or boiled in her own shell. So cheer up, little egg,
            and I will be your friend — at least so long as you remain fresh."
          </em>
        </BaumText>

        <ForensicText>
          Kelli Nyre's December 18 meeting with Lori Brown is the moment the
          truth was taken up. Brown's notes record that Mrs. Nyre explained she
          had come forward now — after two and a half years — because she was
          frustrated that Dr. Nyre's other complaints against Marino were not
          being addressed. The Princess found the egg not in the abstract but in
          a specific moment: when the institution had failed to act on
          everything else. The Perry Law Report notes this and uses it against
          her. It suggests that coming forward at the moment your husband's
          complaints are ignored is evidence of fabrication. Baum understood the
          logic differently: sometimes you come forward because the time has
          finally come, and you have no friend in all the world, and a voice
          asks what is the matter.
        </ForensicText>

        <BaumText>
          <em>
            "Put me upon the wall, Princess, for then I shall be able to see
            much better than in your arms."
          </em>{" "}
          <em>"That is a good idea,"</em> she answered;{" "}
          <em>"but you must be careful not to fall."</em> The one who had
          already tried to put the truth up where it could be seen — and had
          been threatened with litigation for doing so — is{" "}
          <EggTrigger num={9} name={<em>Kevin Flood</em>} />. Vice Chair of
          the Audit Committee. The Regent who saw Marino standing behind Mrs.
          Nyre with his hands on her shoulders at the December 6, 2022
          reception. The Regent who heard the next-day report from Dr. Nyre. The
          Regent who wrote to Cardinal Tobin in December 2023 documenting the
          logbook erasure. The Regent who was told he must be careful not to
          fall — and then fell anyway, threatened, unindemnified, and resigned.
        </BaumText>

        <EggPanel
          num={9}
          name="Kevin Flood"
          role="Vice Chair, Audit Committee // Mandatory Reporter // The Regent Who Saw"
          parallel="Put me upon the wall, Princess, for then I shall be able to see much better than in your arms. That is a good idea, she answered; but you must be careful not to fall."
          forensic="Flood attended both events in question. At the December 6, 2022 reception, he received a call from Dr. Nyre before arriving, asking him to find Mrs. Nyre and stay by her side. When he arrived, he saw Mrs. Nyre speaking to Marino — 'who appeared to be standing behind her with his hands on her shoulders.' Perry Law records this. Perry Law's conclusion: 'not a single witness corroborates.' The following day, Flood visited the Nyres' home and heard Dr. Nyre describe the harassment at both events. This is eyewitness corroboration of the next-day report. In December 2023 he wrote to Cardinal Tobin documenting the logbook erasure and requesting an independent investigation with no Regents involved. He was subsequently threatened with litigation by Marino and Porrino. SHU refused to indemnify him for the legal expenses he incurred for fulfilling his mandatory reporting obligations. He resigned September 30, 2024, attaching the Tobin letter to his resignation."
          quote="Since sending that letter to Tobin, I received much individual ire from fellow Regents and was out of a Board meeting. Moreover, I've been threatened with litigation, applied for indemnification and incurred my own legal expenses — all for simply mustering the courage to seek answers and fulfill mandated reporting requirements."
          attr="Kevin Flood, resignation letter, September 30, 2024"
          quote2="Regent Flood saw Mrs. Nyre speaking to Mr. Marino, who appeared to be standing behind her with his hands on her shoulders. Regent Flood did not think anything of their interaction."
          attr2="Perry Law Report, page 7. Flood's corroborating testimony. Not mentioned in the conclusion."
        />

        {/* CHAPTER VI */}
        <ChapterHead>VI. The Palace and Its Gorgeous Rooms</ChapterHead>

        <BaumText>
          So the Princess took Humpty in her arms and walked with him all
          through the grounds, letting him see the fountains and the golden fish
          that swam in their waters, the beds of lilies and roses, and the pools
          where the swans floated. Then she took him into the palace, and showed
          him all the gorgeous rooms, including the King's own bed-chamber and
          the room where stood the great ivory throne.
        </BaumText>

        <ForensicText>
          Joseph Nyre was recruited to Seton Hall in January 2019 specifically
          because the university needed to recover from the McCarrick scandal.
          Nyre showed the university's community what integrity might look like
          — what the gorgeous rooms could contain if properly governed. He then
          discovered what the gorgeous rooms actually contained: a logbook being
          falsified, a Board Chairman allegedly harassing the president's wife
          and intimidating staff, a Latham Report sealed in a SCIF, and a
          network of Christie-era lawyers deployed to ensure none of it ever
          reached the King's own bedchamber. The great ivory throne belongs to
          Cardinal Tobin. He chairs both governing boards.
        </ForensicText>

        <BaumText>
          Among the gorgeous rooms of the palace, one is more important than the
          rest: the room where judicial appointments are made and unmade. The
          keeper of that room — the one who decides which courtiers sit on which
          thrones in Essex County — is{" "}
          <EggTrigger num={10} name={<em>James DiGiulio</em>} />. Scrivo's law
          partner. Chair of the Essex County Judicial and Prosecutorial
          Appointments Committee. The man through whom Scrivo's professional
          network vetted every judge sitting in Essex County civil matters. When
          Scrivo filed the Chancery case in Essex County — a courthouse where
          his partner controls judicial appointments — the assignment of Judge L.
          Grace Spencer (Christie appointee) was not coincidental. The outcome
          was engineered before the first brief was filed.
        </BaumText>

        <EggPanel
          num={10}
          name="James DiGiulio"
          role="Scrivo's Law Partner // Chair, Essex County Judicial Appointments Committee"
          parallel="She showed him all the gorgeous rooms, including the King's own bed-chamber and the room where stood the great ivory throne."
          forensic="DiGiulio is Scrivo's law partner at O'Toole Scrivo. He chairs the Essex County Judicial and Prosecutorial Appointments Committee — the committee that vets candidates for every judicial appointment in Essex County. Every judge sitting in Essex County civil matters served on or was approved by DiGiulio's committee. Scrivo filed the Chancery case — Seton Hall University v. Nyre — in Essex County. After four failed venue appeals to keep the Nyre Law Division case out of Hudson County, the case returned to Essex County and was assigned to Judge L. Grace Spencer, a Christie appointee. Spencer dismissed the Nyres' First Amended Complaint without prejudice on February 19, 2026 — a ruling legal observers have identified as containing seven categories of potential reversible error. The filing forum was chosen because the bench was known."
          quote="A lawyer who files in a forum where his partner controls judicial appointments, and who repeatedly appeals valid venue transfers to keep a case in that forum, is manipulating the judiciary for client advantage."
          attr="Litigation as a Weapon, Rule Implicated: RPC 8.4(d)"
        />

        <BaumText>
          And the gatekeeper of the palace — the one who controls access to the
          grounds from the outside, who stands at the far gate through which the
          King's procession enters — is{" "}
          <EggTrigger num={11} name={<em>Peter Villar</em>} />. Troutman Pepper
          California partner. The lawyer who filed the deposition petition in
          Orange County Superior Court on March 24, 2026 — the same day Dei
          Journo met with a Congressional representative. The lawyer whose
          footnote 3 explained to the California court what the 1985 film{" "}
          <em>Fletch</em> is. The lawyer who signed the brief claiming that the
          former President of Freedom Communications, contributor to the Wall
          Street Journal and RealClearPolitics, had "no formal relationship with
          any publications." A California lawyer. In Orange County. Where Dei
          Journo ran the dominant newspaper.
        </BaumText>

        <EggPanel
          num={11}
          name="Peter Villar"
          role="Troutman Pepper California // The California Gatekeeper // Footnote 3"
          parallel="Before the palace door were a dozen prancing horses, gaily caparisoned, awaiting their riders."
          forensic="Villar filed the California deposition petition in Seton Hall University v. Dei Journo, Case No. 30-2026-01555640-CU-PT-CJC, on March 24, 2026 — the same day Dei Journo met with a Congressional representative and briefed senior House Judiciary Committee staff. The petition relies on Scrivo's sworn declaration asserting Dei Journo is not a journalist. Villar signed the accompanying brief. The brief's footnote 3 explains: 'Mr. Dei Journo's reference to being a \'Fletcher style\' journalist appears to be a reference to the 1985 film, \'Fletch,\' starring Chevy Chase.' Villar's firm, Troutman Pepper, employs Angelo Stio — the New Jersey partner who authorized the erasure of Seton Hall's Title IX complaint logbooks during an active federal investigation. The firm whose New Jersey partner destroyed the evidence is the firm whose California partner is attempting to depose the journalist who reported on that destruction. Under 18 U.S.C. § 1513, retaliating against a witness for providing information to a Congressional official is a federal crime. The filing date is in the court's electronic docket. The Congressional meeting is documented. The sequencing is not inferential — it is same-day and on the record."
          quote="Mr. Dei Journo's reference to being a 'Fletcher style' journalist appears to be a reference to the 1985 film, 'Fletch,' starring Chevy Chase."
          attr="Troutman Pepper brief, footnote 3, Orange County Superior Court — explaining the joke to a California court in the county where Dei Journo ran the newspaper"
        />

        {/* CHAPTER VII */}
        <ChapterHead>VII. The Great Fall</ChapterHead>

        <BaumText>
          <em>"After this,"</em> he said,{" "}
          <em>
            "I am content to accept any fate that may befall me, for surely no
            egg before me ever saw so many beautiful sights."
          </em>{" "}
          <em>"That is true,"</em> answered the Princess;{" "}
          <em>
            "but now I have one more sight to show you which will be grander
            than all the others; for the King will be riding home shortly with
            all his horses and men at his back, and I will take you to the gates
            and let you see them pass by."
          </em>
        </BaumText>

        <BaumText>
          The one who put Humpty on the wall — who placed the truth in its most
          visible position, elevated where it could be seen above the procession
          — is <EggTrigger num={12} name={<em>Joseph Nyre</em>} />. Seton
          Hall's former President. The boy scout. The one who takes good notes.
          His 64-page civil complaint is the wall. Every date is accurate. Every
          allegation is named, located, and documented with contemporaneous
          record. He placed the truth where it could see the King's procession
          approaching. He said: look at what is coming toward us. The Princess
          warned: you must be careful not to fall. Nyre has not fallen. The
          dismissal was without prejudice. Every appellate path remains open.
        </BaumText>

        <EggPanel
          num={12}
          name="Joseph Nyre"
          role="Former SHU President // The Boy Scout // The One Who Put Humpty on the Wall"
          parallel="Put me upon the wall, Princess, for then I shall be able to see much better than in your arms. Then she sat the egg gently upon the top of the stone wall, where there was a little hollow; and Humpty was delighted, for from his elevated perch he could see much better than the Princess herself."
          forensic="Nyre was recruited to Seton Hall in January 2019 specifically to restore institutional integrity after the McCarrick scandal. He led the university through COVID, raised enrollment, and made a personal donation of $500,000 to support student affordability. He also: documented Marino's alleged misconduct with contemporaneous notes; reported the harassment to the General Counsel in summer 2021; reported it to Regents; filed an 8-count, 64-page civil complaint on February 5, 2024 — specific, dated, named, documented. He is represented by Armen McOmber. His complaint was dismissed without prejudice by Judge Spencer on February 19, 2026. McOmber's response: 'We respectfully and unequivocally disagree with the ruling, which we believe is incorrect as a matter of both fact and law.' The dismissal without prejudice forecloses no appellate path. Joe Nyre takes good notes. The notes are still there."
          quote="Instead of addressing their own failures, Seton Hall is now attempting to go after the alleged whistle-blower."
          attr="NJ Monitor editorial, February 21, 2025"
          quote2="Seton Hall's lawsuit, filled with falsehoods and misstatements, is nothing more than a blatant act of retaliation against Dr. Nyre for his pending litigation exposing institutional corruption, cover-ups, and abuse."
          attr2="Armen McOmber, Nyre's counsel"
        />

        <BaumText>
          Humpty, forgetting his dangerous position, leaned eagerly over to look
          at them. The next instant the Princess heard a sharp crash at her side,
          and, looking downward, perceived poor Humpty Dumpty, who lay crushed
          and mangled among the sharp stones where he had fallen. The Princess
          sighed, for she had taken quite a fancy to the egg; but she knew it was
          impossible to gather it up again or mend the matter in any way, and
          therefore she returned thoughtfully to the palace.
        </BaumText>

        <ForensicText>
          The Latham Report was sealed in a SCIF in 2019. The Perry Law Report
          was filed publicly unredacted in 2024. The logbook was erased in 2023
          and restored in 2024. The cardinaltobin journalist was unmasked by a
          Bergen County grand jury in November 2024. The California deposition
          petition was filed March 24, 2026. Each one of these is a crash. Each
          one is a sharp stone. All the King's horses and all the King's men
          cannot put Humpty together again — because Humpty is the truth, and
          the truth, once witnessed, cannot be unwitnessed. The Princess
          returned thoughtfully to the palace. The May 18, 2026 court order for
          the Latham Report's production is the thoughtful return.
        </ForensicText>

        {/* CHAPTER VIII */}
        <ChapterHead>VIII. The Riddle Contest — May 28, 2026</ChapterHead>

        <BaumText>
          Now it happened that upon this evening several young men of the kingdom,
          who were all of high rank, had determined to ask the King for the hand
          of the Princess; so they assembled in the throne room and demanded that
          the King choose which of them was most worthy.
        </BaumText>

        <ForensicText>
          The throne room is Orange County Superior Court, Department C23, Santa
          Ana. The hearing date is May 28, 2026. The suitors are SHU's lawyers —
          Troutman Pepper, armed with the Scrivo declaration; a California
          deposition subpoena; and the argument that Dei Journo is not a
          journalist. The King is the court itself. The Princess — the thing
          being sought — is Dei Journo's testimony, his sources, his documents.
        </ForensicText>

        <BaumText>
          <em>
            "The one who shall ask me a riddle I cannot guess, can marry my
            daughter."
          </em>{" "}
          At this the young men looked thoughtful, and began to devise riddles
          that his Majesty should be unable to guess. But the King was a shrewd
          monarch, and each one of the riddles presented to him he guessed with
          ease.
        </BaumText>

        <ForensicText>
          SHU's legal arguments are the riddles the court has already heard: the
          discovery petition, the deposition subpoena, the assertion of
          non-journalistic status. The court has seen these arguments before. They
          are not novel. They are the institutional playbook exported to
          California.
        </ForensicText>

        <BaumText>
          But while he stood leaning against the wall the Princess approached him
          and whispered in her ear a riddle she had just thought of. Instantly his
          face brightened, and when the King called,{" "}
          <em>"Now, Master Dei Journo, it is your turn,"</em> he advanced boldly
          to the throne.
        </BaumText>

        <ForensicText>
          Master Dei Journo — the young man the Princess favors, the one with the
          riddle the King cannot guess — is Dei Journo. The riddle the Princess
          whispered is the anti-SLAPP motion under CCP § 425.16 with mandatory
          fee-shifting. It is the California Shield Law under Evidence Code
          § 1070. It is the false declaration by Scrivo directly contradicted by
          Scrivo's own December 2024 litigation hold letter demanding
          preservation of Dei Journo's communications with "reporters, press, and
          media outlets." It is Dei Journo's Wall Street Journal byline. His
          RealClearPolitics archive. His presidency of Freedom Communications and
          the Orange County Register — filed in Orange County. The riddle is not
          complex. It is, in Baum's sense, the simplest thing in the world. It
          was always the simplest thing in the world. Master Dei Journo just had
          to say it.
        </ForensicText>

        <BaumText>
          With downcast eyes, he knelt before the throne and spoke:
        </BaumText>

        <div className="bg-[#111111] border border-zinc-800 p-8 my-10 font-serif text-xl leading-loose text-center text-[#ded8c4]">
          "This is my riddle, oh King:<br />
          <br />
          Humpty Dumpty sat on a wall,
          <br />
          Humpty Dumpty had a great fall.
          <br />
          All the King's horses
          <br />
          And all the King's men
          <br />
          Cannot put Humpty together again.
          <br />
          <br />
          Read me that, sire, an' you will!"
        </div>

        <BaumText>
          The King thought earnestly for a long time, and he slapped his head and
          rubbed his ears and walked the floor in great strides; but guess the
          riddle he could not. <em>"You are a humbug, sir!"</em> he cried out at
          last; <em>"there is no answer to such a riddle."</em>
        </BaumText>

        <ForensicText>
          SHU's response to the anti-SLAPP motion will be: there is no answer. The
          journalist has no shield. He has no formal relationship with
          publications. He has no protected activity. There is no riddle here —
          only a witness who must be deposed. This is the institutional position.
          It is also directly contradicted by Scrivo's own prior written
          correspondence, by Dei Journo's published bylines, and by SHU's own
          Verified Complaint's acknowledgment that confidential documents were
          being disseminated to reporters. A Google search for "Dei Journo
          journalist" returns, on the first page of results, the presidency of
          Freedom Communications. Filed in Orange County. Where Dei Journo ran the
          dominant newspaper.
        </ForensicText>

        <BaumText>
          <em>"You are wrong, sire,"</em> answered the young man;{" "}
          <em>"Humpty Dumpty was an egg."</em>{" "}
          <em>"Why did I not think of that before!"</em> exclaimed the King.
        </BaumText>

        <ForensicText>
          The answer has always been: it is an egg. The Perry Law Report's "no
          evidence" conclusion is contradicted by the report's own testimony. The
          grand jury subpoena's fraud predicate is contradicted by the five
          cardinaltobin emails, none of which solicited money. The Scrivo
          declaration's "not a journalist" assertion is contradicted by Scrivo's
          own hold letter. The cover-up is contradicted by the cover-up itself.
          The Latham Report has been under court order since February 27, 2026. It
          will be produced May 18. Ten days before the California hearing. Humpty
          Dumpty was an egg.
        </ForensicText>

        {/* THE THIRTEENTH EGG */}
        <ChapterHead>
          <span className="text-[#8b1a1a] font-bold">
            XIII. The King — The Thirteenth Figure
          </span>
        </ChapterHead>

        <BaumText>
          Now who is the King? Who is the monarch so shrewd that every riddle
          presented to him has been guessed with ease — until the last one? The
          King who rides with <em>"all his horses and men at his back"</em>? The
          King whose procession, riding home, crushed poor Coutchie-Coulou on
          the gravel driveway? The King who cannot put Humpty together again?
        </BaumText>

        <ForensicText>
          The Latham Report identifies Cardinal Tobin as the{" "}
          <strong>thirteenth figure of concern</strong>. The investigation
          recommended Reilly's removal. It named twelve others. It named Tobin
          thirteenth. He is, in the architecture of this story, the King. And
          "thirteenth" is, in the Catholic tradition, not a comfortable number.
        </ForensicText>

        <BaumText>
          The King — the one at the apex, the one who sealed the report and
          installed the man the report recommended removing, the one who hired his
          board chair's law partner as his personal counsel, the one whose
          institution filed the false police report against the journalist — is{" "}
          <EggTrigger num={13} roman name={<em>Cardinal Joseph W. Tobin</em>} />
          , Archbishop of Newark. Chairman of the Board of Trustees. President of
          the Board of Regents. The thirteenth figure of concern in a 24,000-page
          report he sealed in a SCIF and never disclosed in six years of
          related litigation. He chairs both governing boards simultaneously — the
          only person in Seton Hall's governance structure who occupies two levels
          at once. He received the task force's removal recommendation for Reilly.
          He ignored it. He installed Reilly anyway. He hired Critchley — Marino's
          partner — to advise him not to appear before the Latham investigators. He
          allowed Scrivo's TRO to block Nyre's cooperation with the Ropes & Gray
          investigation Tobin himself had commissioned. His institution published
          the RCAN fraud advisory directing parishioners to report the
          cardinaltobin journalist to local law enforcement. He is the King. He is
          the thirteenth. He rides home with all his horses and men at his back.
        </BaumText>

        <EggPanel
          num={13}
          roman
          name="Cardinal Joseph W. Tobin"
          role="Archbishop of Newark // Chair, Board of Trustees // President, Board of Regents // The King"
          parallel="The King came riding along the road with many courtiers and soldiers and vassals following in his wake, all mounted upon the finest horses the kingdom could afford. All the King's horses and all the King's men cannot put Humpty together again."
          forensic="Cardinal Tobin chairs both governing boards of Seton Hall University simultaneously — the only person in the governance structure who occupies two levels at once. He received the Latham Report's recommendation for Reilly's removal. He is identified as the thirteenth figure of concern in the Latham Report. He sealed the report in a SCIF. It never appeared on a privilege log in six years of related litigation. He hired Michael Critchley — Kevin Marino's partner in multiple cases including the 2024 NJ AG prosecution of George Norcross — as his personal attorney. Critchley advised Tobin not to appear before the Latham investigators. Tobin complied. Tobin publicly commissioned the Ropes & Gray investigation. Scrivo's TRO — obtained in the manufactured Chancery case — blocked Nyre's cooperation with Ropes & Gray twice. Tobin did not direct SHU's counsel to consent to Nyre's cooperation. His institution — the Roman Catholic Archdiocese of Newark — published the October 15, 2024 fraud advisory on rcan.org directing parishioners to report the cardinaltobin journalist to local law enforcement on a false fraud predicate: the claim that the emails solicited money. No money was ever solicited. The RCAN advisory ran for seven months after the Bergen County grand jury subpoena it was designed to justify was issued. Tobin is the thirteenth. The most poetic number for the King."
          quote="The Archdiocese of Newark has been made aware of an email account impersonating Cardinal Joseph W. Tobin, C.Ss.R. Please be advised that Cardinal Tobin and the Archdiocese will never request personal information or money via unsolicited emails… please report it to your local law enforcement department."
          attr="RCAN Advisory, rcan.org, October 15, 2024 — published 36 days before the Bergen County grand jury subpoena. Every factual assertion is false as applied to the cardinaltobin emails."
          quote2="I have been troubled by these matters… I am writing to request that the Board of Trustees move to safeguard and restore our institutional integrity… I cannot allow Regents who bully/harass staff to remain. I cannot allow a Regent with pending allegations to hinder the process."
          attr2="Kevin Flood, letter to Cardinal Tobin, December 11, 2023. The Cardinal received this letter. He did not act on it independently of the network that produced the conduct it described."
          quote3="All the King's horses and all the King's men cannot put Humpty together again."
          attr3="L. Frank Baum, Mother Goose in Prose, 1897. The Latham Report production is ordered for May 18, 2026. The California hearing is May 28, 2026."
        />

        {/* CODA */}
        <ChapterHead>
          Coda: And Thus Did Humpty Dumpty Repay the Kindness
        </ChapterHead>

        <BaumText>
          <em>
            "Thus did Humpty Dumpty, even in his death, repay the kindness of
            the fair girl who had shown him such sights as an egg seldom sees."
          </em>
        </BaumText>

        <ForensicText>
          The Perry Law Report, even in the form in which it was published —
          crushed, unredacted, spread across the white gravel of the public
          record — contained the evidence that breaks its own conclusion. Footnote
          10. Footnote 11. The summer 2021 harassment report. The hands on
          shoulders. The eyewitness who corroborated the physical contact. The
          investigator who found it, footnoted it, declined to engage with it, and
          concluded no evidence. The institution that commissioned it, distributed
          it to the accused, and used it to occupy the public record before the
          May 18 Latham Report production. The document repays its own kindness.
          The document is the evidence that it is not what it claims to be. That
          is what eggs do, even in their death, when the King's men have laid
          them where the King needed them.
        </ForensicText>

        <div className="bg-[#8b1a1a]/10 border-l-[6px] border-[#8b1a1a] p-10 my-16 shadow-2xl">
          <p className="font-mono text-zinc-300 leading-relaxed text-sm tracking-wide">
            The cover-up is always the evidence of the cover-up.
            <br />
            The Perry Law Report's own footnotes are its own refutation.
            <br />
            The Scrivo declaration's own prior letter is its own contradiction.
            <br />
            The RCAN advisory's own text is its own proof of fabrication.
            <br />
            The grand jury subpoena's own return date is three days after Scrivo
            already knew the answer.
            <br />
            <br />
            <span className="font-bold text-white text-base">
              Humpty Dumpty was an egg.
              <br />
              Why did they not think of that before.
            </span>
          </p>
        </div>

        {/* CONCLUSION BOX */}
        <div className="border border-zinc-800 p-8 md:p-12 mb-16 text-center shadow-black/80 shadow-2xl bg-black">
          <div className="font-serif text-[#8b1a1a] text-xl md:text-2xl leading-loose mb-8 tracking-widest lowercase">
            she found it. she footnoted it.
            <br />
            she declined to engage with it.
            <br />
            she concluded no evidence.
            <br />
            the witnesses understood the goal and direction.
            <br />
            <br />
            <span className="font-bold text-white uppercase text-2xl md:text-3xl tracking-widest">
              all the king's horses and all the king's men
              <br />
              cannot put humpty together again.
            </span>
          </div>

          <div className="h-px bg-zinc-800 w-full mb-8" />

          <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Latham Report Production Ordered: May 18, 2026 &nbsp;|&nbsp;
            California Hearing: May 28, 2026
          </div>
        </div>

        <div className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 border-t border-zinc-800 pt-16">
          After Baum, L. Frank. "Humpty Dumpty." Mother Goose in Prose. Chicago:
          Way & Williams, 1897.
          <br />
          All Easter egg content derived from primary source documents. Sodom
          Hall // Easter 2026.
        </div>

        {/* RETURN LINK */}
        <div className="mt-24 text-center">
          <Link href="/">
            <button className="inline-flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-[0.4em] hover:text-[#8b1a1a] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Exit Case Study
            </button>
          </Link>
        </div>
      </div>

      {/* ALL FOUND BANNER */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 bg-[#8b1a1a] text-white p-4 text-center font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold transform transition-transform duration-700 z-50",
          foundEggs.size === totalEggs ? "translate-y-0" : "translate-y-full"
        )}
      >
        <span className="inline-flex items-center gap-4">
          ✦ All Thirteen Easter Eggs Found <Check className="w-4 h-4" /> Cannot
          Put Humpty Together Again ✦
        </span>
      </div>
    </div>
  );
}
