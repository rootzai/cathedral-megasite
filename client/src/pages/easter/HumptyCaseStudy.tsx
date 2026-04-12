import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import ThreeHeroFall from "./components/ThreeHeroFall";
import WallCrack from "./components/WallCrack";
import SceneBlock from "./components/SceneBlock";
import DossierDrawer from "./components/DossierDrawer";
import NetworkThirteen from "./components/NetworkThirteen";
import DoomsdayClock from "./components/DoomsdayClock";
import "./HumptyCaseStudy.css";

// We extract the exact text from the original file to maintain the narrative
const EGG_DATA = [
  { id: 1, name: "Kevin Marino", role: "Former Chair, Board of Regents // The Courtier", baum: "A courtier passed by the wall and saw Humpty Dumpty sitting there.", forensic: "Marino served as the Chair of the Board of Regents. According to contemporaneous notes, eyewitness accounts, and federal complaints, he leveraged his position to retaliate against those who threatened his control. He is alleged to have instructed the president not to interview with the Latham investigation ('they'll take one look at your boy scout face') and is documented attempting to block the Latham Report's production from 2019 to 2024. He resigned in December 2023 following complaints from Kelli Nyre and multiple administrators. He is the central node of the \"King's men.\"", quote: "Regent Marino attempted to intervene and halt the impending investigation... Dr. Nyre refused to comply with this instruction.", quoteAttr: "Verified Complaint, Nyre v. SHU, February 5, 2024" },
  { id: 2, name: "Thomas Scrivo", role: "Managing Partner, O'Toole Scrivo // The King's Advocate", baum: "Then came along Thomas Scrivo, the King's advocate, who shook his head gravely.", forensic: "Scrivo is Seton Hall's outside counsel. A former Christie chief counsel, he filed the unprecedented Chancery case under a manufactured \"breach of fiduciary duty\" theory to block Nyre from cooperating with the Ropes & Gray investigation. Scrivo's December 13, 2024 letter demanded preservation of a journalist's records—demonstrating he knew the recipient was acting as a journalist reporting on the SCIF-sealed Latham Report. 16 months later, Scrivo signed a sworn declaration in California asserting the same individual is \"not a journalist.\" He is the architect of the weaponized litigation strategy.", quote: "Pursuant to the pending and/or reasonably anticipated litigation involving Seton Hall, you are hereby directed to prospectively preserve all documents... specifically including your communications with 'reporters, press, and media outlets.'", quoteAttr: "Thomas Scrivo's litigation hold letter, December 13, 2024" },
  { id: 3, name: "Christopher Porrino", role: "Partner, Lowenstein Sandler // The Man on the Prancing Horse", baum: "He struck the wall with his whip, and called out: 'Get down, Humpty! The King is coming.'", forensic: "Porrino is outside counsel to Kevin Marino. A former NJ Attorney General under Christie, he represented the Christie administration during Bridgegate, drafting the Mastro Report which exonerated the Governor. He coordinates with Scrivo to execute a twin-pillar defense strategy: Scrivo litigates for the institution, Porrino threatens for the individual. The bar complaints documenting his role in the church bulletin fabrication and grand jury coordination were declined in two days by the OAE Director—a Christie alumna who had served as his subordinate.", quote: "The coordinated deployment of dual threat letters from Scrivo and Porrino, often arriving within 48 hours of each other, demonstrates a unified command structure operating across supposedly separate client representations.", quoteAttr: "Forensic Audit Report, Network Analysis" },
  { id: 4, name: "The Perry Law Report", role: "\"Independent\" Investigation // Coutchie-Coulou", baum: "Just then another egg came rolling along. This was Coutchie-Coulou.", forensic: "The Perry Law Report was commissioned by the Executive Committee of the Board of Regents on December 14, 2023. It cost over $2 million. It is 57 pages long. Its mandate was to investigate Title IX and harassment complaints against Kevin Marino. It concluded there was \"no evidence\" to support the claims. But the report itself documents the eyewitness evidence of the physical contact it claims did not happen. It is the second egg—the manufactured truth, created to replace the shattered one.", quote: "The Independent Investigation found no evidence that the alleged conduct occurred.", quoteAttr: "Perry Law Report, Executive Summary, page 3" },
  { id: 5, name: "Karen Agnifilo", role: "Partner, Perry Law // The Lead Investigator", baum: "Coutchie-Coulou, whose shell was painted with the mark of Karen Agnifilo.", forensic: "Agnifilo was the lead investigator on the Perry Law Report. She is a former Chief Assistant District Attorney in Manhattan. Her investigation was internally codenamed \"The Nursery.\" She began her presentation to Seton Hall executives by stating: \"I am hired by the Board to protect the Board.\" She then produced a report that concluded Marino engaged in no misconduct—while her own footnotes documented the exact opposite. Footnote 11 documents the August 23, 2021 meeting where President Nyre reported Marino's harassment of his wife to General Counsel John Tysse. Agnifilo footnoted it, then concluded there was no evidence.", quote: "General Counsel Tysse's notes reflect that during their meeting, Dr. Nyre brought up the inappropriate conduct that Mrs. Nyre alleges occurred.", quoteAttr: "Perry Law Report, Footnote 11. The smoking gun buried in the bottom margin." },
  { id: 6, name: "Angelo Stio", role: "Partner, Troutman Pepper // Attorney for the Board of Regents", baum: "The words painted upon her shell were placed there by Angelo Stio, acting with the King's men.", forensic: "Stio is identified by Kevin Flood in his December 11, 2023 letter to Cardinal Tobin as \"the Attorney for the Board of Regents\" who \"directed the altering of official University records by removing three separate staff complaints of Board member harassment and discrimination from the Annual Report of Claims prior to its presentation at the May 8, 2023 Audit Committee meeting.\" University staff, directed by the Board's attorney, reluctantly complied. The complaints removed were from Capadona (four separate complaints), McMonagle (one complaint), and the Nyres. Capadona recused herself from the erasure process because her own complaints were among those being removed. Stio's firm — Troutman Pepper — later filed the California deposition petition against journalist Dei Journo on March 24, 2026 — the same day Dei Journo met with a Congressional representative. The filing partner in California is Peter Villar.", quote: "The Attorney for the Board of Regents directed the altering of official University records by removing three separate staff complaints... Given the University staff were directed by the Board's attorney, they reluctantly complied and altered the records as directed.", quoteAttr: "Kevin Flood, letter to Cardinal Tobin, December 11, 2023" },
  { id: 7, name: "Jennifer Davenport", role: "New Jersey Attorney General // Porrino's Former First Assistant // The Charming Lady in the Walk", baum: "Richly dressed courtiers and charming ladies strolled through the walks.", forensic: "Davenport served as Porrino's direct subordinate — his First Assistant AG. She is a Seton Hall Law School graduate. She was a former Latham & Watkins litigation associate — the same firm that produced the Latham Report, now under court order to be produced May 18, 2026. Porrino publicly endorsed her confirmation in December 2025, describing working \"closely with her.\" She was confirmed unanimously February 24, 2026 — exactly 36 days after bar complaints documenting Porrino's fabrication of church bulletins and coordination of a grand jury subpoena against a journalist were filed with the OAE. The attorney general who would investigate the man who allegedly manufactured the criminal predicate for the Bergen County grand jury subpoena is the woman that man personally championed for the position. The circuit is complete.", quote: "He is a confidence inspiring selection… I have had the great privilege of working closely with her in some of the most challenging, high-pressure settings that government-related service can produce.", quoteAttr: "Christopher Porrino endorsing Jennifer Davenport for NJ Attorney General, December 2025" },
  { id: 8, name: "Johanna Barba Jones", role: "Director, NJ Office of Attorney Ethics // Christie Alumna // SHU Law Graduate // The Strolling Courtier", baum: "Richly dressed courtiers and charming ladies strolled through the walks.", forensic: "Barba Jones served as Christie's assistant counsel from 2010–2012. She is a Seton Hall Law School graduate. She was appointed OAE Director in October 2022. Bar complaints against Scrivo and Porrino — documenting the fabrication of church bulletins, the coordination of a grand jury subpoena against a journalist, and the coordinated six-day hold letter pattern — were filed January 19, 2026. They were declined January 21, 2026. Two days. Without investigation. The declination cited Rule 1:20-3(f) — but applied the permissive \"may be declined\" prong to a grievance that triggered the mandatory \"shall be docketed\" prong. The fabrication of church documents to justify a criminal grand jury subpoena against a journalist is not a close case on \"clearly demonstrable provable ethical violations.\" The ethics office strolled past the crushed egg on the driveway and saw nothing that required its attention. Its director is a graduate of the institution whose lawyers it was not investigating.", quote: "The bar complaint process has been captured by the same network it is supposed to investigate. This is not a failure of the system. It is the system operating exactly as Scrivo and Porrino designed it to operate.", quoteAttr: "Litigation as a Weapon, submitted to Congress, April 1, 2026" },
  { id: 9, name: "Kevin Flood", role: "Vice Chair, Audit Committee // Mandatory Reporter // The Regent Who Saw", baum: "Put me upon the wall, Princess, for then I shall be able to see much better than in your arms. That is a good idea, she answered; but you must be careful not to fall.", forensic: "Flood attended both events in question. At the December 6, 2022 reception, he received a call from Dr. Nyre before arriving, asking him to find Mrs. Nyre and stay by her side. When he arrived, he saw Mrs. Nyre speaking to Marino — \"who appeared to be standing behind her with his hands on her shoulders.\" Perry Law records this. Perry Law's conclusion: \"not a single witness corroborates.\" The following day, Flood visited the Nyres' home and heard Dr. Nyre describe the harassment at both events. This is eyewitness corroboration of the next-day report. In December 2023 he wrote to Cardinal Tobin documenting the logbook erasure and requesting an independent investigation with no Regents involved. He was subsequently threatened with litigation by Marino and Porrino. SHU refused to indemnify him for the legal expenses he incurred for fulfilling his mandatory reporting obligations. He resigned September 30, 2024, attaching the Tobin letter to his resignation.", quote: "Since sending that letter to Tobin, I received much individual ire from fellow Regents and was out of a Board meeting. Moreover, I've been threatened with litigation, applied for indemnification and incurred my own legal expenses — all for simply mustering the courage to seek answers and fulfill mandated reporting requirements.", quoteAttr: "Kevin Flood, resignation letter, September 30, 2024" },
  { id: 10, name: "James DiGiulio", role: "Scrivo's Law Partner // Chair, Essex County Judicial Appointments Committee // The Keeper of the Throne Room", baum: "She showed him all the gorgeous rooms, including the King's own bed-chamber and the room where stood the great ivory throne.", forensic: "DiGiulio is Scrivo's law partner at O'Toole Scrivo. He chairs the Essex County Judicial and Prosecutorial Appointments Committee — the committee that vets candidates for every judicial appointment in Essex County. Every judge sitting in Essex County civil matters served on or was approved by DiGiulio's committee. Scrivo filed the Chancery case — Seton Hall University v. Nyre — in Essex County. After four failed venue appeals to keep the Nyre Law Division case out of Hudson County, the case returned to Essex County and was assigned to Judge L. Grace Spencer, a Christie appointee. Spencer dismissed the Nyres' First Amended Complaint without prejudice on February 19, 2026 — a ruling legal observers have identified as containing seven categories of potential reversible error. The filing forum was chosen because the bench was known.", quote: "A lawyer who files in a forum where his partner controls judicial appointments, and who repeatedly appeals valid venue transfers to keep a case in that forum, is manipulating the judiciary for client advantage.", quoteAttr: "Litigation as a Weapon, Rule Implicated: RPC 8.4(d)" },
  { id: 11, name: "Peter Villar", role: "Troutman Pepper California // The California Gatekeeper // Footnote 3", baum: "Before the palace door were a dozen prancing horses, gaily caparisoned, awaiting their riders.", forensic: "Villar filed the California deposition petition in Seton Hall University v. Dei Journo, Case No. 30-2026-01555640-CU-PT-CJC, on March 24, 2026 — the same day Dei Journo met with a Congressional representative and briefed senior House Judiciary Committee staff. The petition relies on Scrivo's sworn declaration asserting Dei Journo is not a journalist. Villar signed the accompanying brief. The brief's footnote 3 explains: \"Mr. Dei Journo's reference to being a 'Fletcher style' journalist appears to be a reference to the 1985 film, 'Fletch,' starring Chevy Chase.\" Villar's firm, Troutman Pepper, employs Angelo Stio — the New Jersey partner who authorized the erasure of Seton Hall's Title IX complaint logbooks during an active federal investigation. The firm whose New Jersey partner destroyed the evidence is the firm whose California partner is attempting to depose the journalist who reported on that destruction. Under 18 U.S.C. § 1513, retaliating against a witness for providing information to a Congressional official is a federal crime. The filing date is in the court's electronic docket. The Congressional meeting is documented. The sequencing is not inferential — it is same-day and on the record.", quote: "Mr. Dei Journo's reference to being a 'Fletcher style' journalist appears to be a reference to the 1985 film, 'Fletch,' starring Chevy Chase.", quoteAttr: "Troutman Pepper brief, footnote 3, Orange County Superior Court — explaining the joke to a California court in the county where Dei Journo ran the newspaper" },
  { id: 12, name: "Joseph Nyre", role: "Former SHU President // The Boy Scout // The One Who Put Humpty on the Wall", baum: "Put me upon the wall, Princess, for then I shall be able to see much better than in your arms. Then she sat the egg gently upon the top of the stone wall, where there was a little hollow; and Humpty was delighted, for from his elevated perch he could see much better than the Princess herself.", forensic: "Nyre was recruited to Seton Hall in January 2019 specifically to restore institutional integrity after the McCarrick scandal. He led the university through COVID, raised enrollment, and made a personal donation of $500,000 to support student affordability. He also: documented Marino's alleged misconduct with contemporaneous notes; reported the harassment to the General Counsel in summer 2021; reported it to Regents; filed an 8-count, 64-page civil complaint on February 5, 2024 — specific, dated, named, documented. He is represented by Armen McOmber. His complaint was dismissed without prejudice by Judge Spencer on February 19, 2026. McOmber's response: \"We respectfully and unequivocally disagree with the ruling, which we believe is incorrect as a matter of both fact and law.\" The dismissal without prejudice forecloses no appellate path. Joe Nyre takes good notes. The notes are still there.", quote: "Seton Hall's lawsuit, filled with falsehoods and misstatements, is nothing more than a blatant act of retaliation against Dr. Nyre for his pending litigation exposing institutional corruption, cover-ups, and abuse.", quoteAttr: "Armen McOmber, Nyre's counsel" },
  { id: 13, name: "Cardinal Joseph W. Tobin", role: "Archbishop of Newark // Chair, Board of Trustees // President, Board of Regents // The King", baum: "The King came riding along the road with many courtiers and soldiers and vassals following in his wake, all mounted upon the finest horses the kingdom could afford. All the King's horses and all the King's men cannot put Humpty together again.", forensic: "Cardinal Tobin chairs both governing boards of Seton Hall University simultaneously — the only person in the governance structure who occupies two levels at once. He received the Latham Report's recommendation for Reilly's removal. He is identified as the thirteenth figure of concern in the Latham Report. He sealed the report in a SCIF. It never appeared on a privilege log in six years of related litigation. He hired Michael Critchley — Kevin Marino's partner in multiple cases including the 2024 NJ AG prosecution of George Norcross — as his personal attorney. Critchley advised Tobin not to appear before the Latham investigators. Tobin complied. Tobin publicly commissioned the Ropes & Gray investigation. Scrivo's TRO — obtained in the manufactured Chancery case — blocked Nyre's cooperation with Ropes & Gray twice. Tobin did not direct SHU's counsel to consent to Nyre's cooperation. His institution — the Roman Catholic Archdiocese of Newark — published the October 15, 2024 fraud advisory on rcan.org directing parishioners to report the cardinaltobin journalist to local law enforcement on a false fraud predicate: the claim that the emails solicited money. No money was ever solicited. The RCAN advisory ran for seven months after the Bergen County grand jury subpoena it was designed to justify was issued. Tobin is the thirteenth. The most poetic number for the King.", quote: "I have been troubled by these matters… I am writing to request that the Board of Trustees move to safeguard and restore our institutional integrity… I cannot allow Regents who bully/harass staff to remain.", quoteAttr: "Kevin Flood, letter to Cardinal Tobin, December 11, 2023." }
];

export default function HumptyCaseStudy() {
  const [foundEggs, setFoundEggs] = useState<Set<number>>(new Set());
  const [activeEgg, setActiveEgg] = useState<typeof EGG_DATA[0] | null>(null);

  const totalEggs = 13;

  const handleOpenEgg = (id: number) => {
    const egg = EGG_DATA.find(e => e.id === id);
    if (egg) {
      setActiveEgg(egg);
      setFoundEggs(prev => new Set(prev).add(id));
      
      // Play audio effect if available
      try {
        const audio = new Audio('/assets/audio/drawer_slam.mp3');
        audio.volume = 0.5;
        audio.play().catch(() => {}); // ignore error if no file
      } catch (e) {}
    }
  };

  const handleCloseEgg = () => setActiveEgg(null);

  const isFound = (id: number) => foundEggs.has(id);

  useEffect(() => {
    // Ambient drone
    try {
        const drone = new Audio('/assets/audio/ambient_drone.mp3');
        drone.loop = true;
        drone.volume = 0.2;
        drone.play().catch(() => {});
        return () => drone.pause();
    } catch {}
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-300 font-body relative" id="easter-scroll-container">
      
      {/* 3D Background */}
      <ThreeHeroFall />
      
      {/* 2D Wall Crack Animation overlay */}
      <WallCrack />

      {/* Counter */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-4 bg-black/50 p-4 rounded-full border border-[#8b1a1a]/30 backdrop-blur-md">
        <div className="font-mono text-[10px] uppercase text-[#8b1a1a] tracking-[0.2em]">Easter Eggs</div>
        <div className="font-heading text-2xl text-[#f4ecd8]">
            <span className={foundEggs.size > 0 ? "text-yellow-500 animate-pulse" : ""}>{foundEggs.size}</span>
            <span className="text-zinc-600"> / {totalEggs}</span>
        </div>
      </div>

      <div className="relative z-10">

        {/* MASTHEAD Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center p-8">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b1a1a] mb-6 block">Sodom Hall // Forensic Literature Division // Easter 2026</span>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#f4ecd8] to-zinc-600 drop-shadow-2xl mb-4" style={{ textShadow: '0 10px 40px rgba(0,0,0,0.8)' }}>
                A Case Study Masquerading as a Nursery Rhyme
            </h1>
            <h3 className="font-mono text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed pt-8 border-t border-zinc-800">
                Being the Complete and Annotated Forensic Edition<br />of L. Frank Baum's Cautionary Tale,<br />with Thirteen Easter Eggs and Their Accompanying Dossiers
            </h3>
            
            <div className="absolute bottom-12 animate-bounce opacity-50">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-2 block">Scroll Down</span>
            </div>
        </section>

        {/* Narrative Chapters wrapped in SceneBlocks for pinning */}

        <SceneBlock chapterTitle="I. The Wall">
            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                Humpty Dumpty was a smooth, round little chap, with a winning smile, and a great golden heart in his breast. Only one thing troubled Humpty, and that was that he might fall and crack his thin, white skin; he wished to be placed up on high, that he might see the world to advantage.
            </p>
            <div className="pl-12 border-l border-[#8b1a1a]/50">
                <p className="text-lg leading-relaxed text-zinc-400">
                    Humpty Dumpty, in the institutional architecture of Sodom Hall, is the truth. It is smooth, it is round, and its skin is frightfully thin. It was placed up on high — in an 8-count, 64-page Verified Complaint filed in Superior Court on February 5, 2024, and in a 111-page retaliation complaint submitted to the Department of Education on March 25, 2024. From those elevated perches, it saw the world to advantage. The truth was visible.
                </p>
            </div>
            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                So he crawled up the wall and sat upon the very edge, where he could look into the King's palace and see the people of the court walking in the garden.
            </p>
            <div className="pl-12 border-l border-[#8b1a1a]/50">
                <p className="text-lg leading-relaxed text-zinc-400">
                    The King's palace is Seton Hall University. The wall is the boundary between what the institution claims to be and what it actually is. The people of the court walking in the garden are the Board of Regents, the Board of Trustees, and the administrative cabinet. For three years, Humpty Dumpty looked down into the palace and saw what the courtiers were doing.
                </p>
            </div>
            
            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl mt-8">
                Presently, a courtier, <button onClick={() => handleOpenEgg(1)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(1) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>1. Kevin Marino</button>, passed by the wall and saw Humpty Dumpty sitting there.
            </p>
        </SceneBlock>


        <SceneBlock chapterTitle="II. The Fall">
            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                <em>"Get down from there, Humpty!"</em> cried the courtier; <em>"you will surely fall, and then you will be broken."</em> But Humpty only laughed, and said: <em>"I am safe enough here; let me alone."</em>
            </p>
            <div className="pl-12 border-l border-[#8b1a1a]/50">
                <p className="text-lg leading-relaxed text-zinc-400">
                    The warning came directly from the institutional defense network. Do not put the truth on the wall. Withdraw the complaints. Settle quietly. The truth, thinking itself safe in the halls of justice, declined. It stayed on the wall.
                </p>
            </div>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                Then came along <button onClick={() => handleOpenEgg(2)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(2) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>2. Thomas Scrivo</button>, the King's advocate, who shook his head gravely. <em>"You are a foolish egg,"</em> he said, <em>"for if you fall, no one can put you together again."</em>
            </p>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl mt-4">
                Then <button onClick={() => handleOpenEgg(3)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(3) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>3. Christopher Porrino</button> passed, riding upon a prancing horse. He struck the wall with his whip, and called out: <em>"Get down, Humpty! The King is coming."</em>
            </p>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl mt-4">
                Humpty Dumpty was frightened at this, and tried to scramble down; but he missed his footing, and fell heavily to the ground!
            </p>

            <div className="pl-12 border-l border-[#8b1a1a]/50">
                <p className="text-lg leading-relaxed text-zinc-400">
                    The fall is the Chancery Division lawsuit. The King's men did not wait for the truth to be evaluated. They knocked it off the wall by filing a preemptive lawsuit in a forum where their partner chairs judicial appointments, securing a temporary restraining order that gagged the plaintiff from participating in an internal investigation. The truth hit the ground and shattered.
                </p>
            </div>
        </SceneBlock>

        <SceneBlock chapterTitle="III. Coutchie-Coulou">
            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                Just then another egg came rolling along. This was <button onClick={() => handleOpenEgg(4)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(4) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>4. Coutchie-Coulou</button>. She was a very pretty egg, though not so large as Humpty, and when she saw him she stopped and said: <em>"Why do you weep?"</em><br/><br/>
                <em>"Because I have fallen from the wall and broken my shell,"</em> answered Humpty. <em>"The King's men did it."</em>
            </p>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                <em>"That is too bad,"</em> replied Coutchie-Coulou, whose shell was painted with the mark of <button onClick={() => handleOpenEgg(5)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(5) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>5. Karen Agnifilo</button>. <em>"But I will stay with you and comfort you."</em>
            </p>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                And Coutchie-Coulou was indeed a false friend, for the words painted upon her shell were placed there by <button onClick={() => handleOpenEgg(6)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(6) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>6. Angelo Stio</button>, acting with the King's men.
            </p>
        </SceneBlock>

        <SceneBlock chapterTitle="IV. The Crushing of Coutchie-Coulou">
            {/* Added intense crushing animation to the text block using CSS in HumptyCaseStudy.css */}
            <p className="bg-zinc-900/80 border-l-4 border-red-600 p-6 text-xl italic font-serif leading-relaxed text-red-100 shadow-2xl relative overflow-hidden transform hover:scale-105 transition duration-500">
                <div className="absolute inset-0 bg-red-900/20 animate-pulse pointer-events-none"></div>
                Just as the eggs were in the middle of the drive the horses dashed by, and Humpty, greatly alarmed, ran as fast as he could for the grass. Then he stopped and looked around, and behold! There was poor Coutchie-Coulou crushed into a shapeless mass by the hoof of one of the horses, and her golden heart was spreading itself slowly over the white gravel of the driveway!
            </p>

            <div className="pl-12 border-l border-red-800">
                <p className="text-lg leading-relaxed text-zinc-300">
                    The Perry Law Report was filed publicly by Porrino on July 10, 2024 at 9:57 PM, as Exhibit A to his amicus brief — without redacting the names of the sexual harassment complainants. Donna McMonagle and Kim Capadona, both of whom had filed harassment complaints against Marino, both of whom the University had committed to protect, were publicly identified in a court document without their consent. The golden heart of the Perry Law Report — its supposed "no evidence" finding — spread itself across the public record. The New York Times ran it the next evening. The horses dashed by. The Perry Law Report was crushed into a shapeless mass. The horses are the King's men.
                </p>
            </div>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                Humpty sat down upon the grass and wept grievously, for the death of his companion was a great blow to him. And while he sobbed, the richly dressed courtiers and charming ladies strolled on through the walks, entirely unmoved. The charming lady who strolled most unmovedly of all — who had, in fact, been groomed for her stroll by the very man whose conduct had crushed Coutchie-Coulou — is <button onClick={() => handleOpenEgg(7)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(7) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>7. Jennifer Davenport</button>.
            </p>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                And among the courtiers strolling most decorously through the walks, heedless of the crushed egg on the driveway, is <button onClick={() => handleOpenEgg(8)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(8) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>8. Johanna Barba Jones</button>, Director of the New Jersey Office of Attorney Ethics.
            </p>
        </SceneBlock>

        <SceneBlock chapterTitle="V. The Princess Who Found the Egg">
            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                And while he sobbed, a voice said to him, <em>"What is the matter, little egg?"</em> Humpty looked up, and saw a beautiful girl bending over him.<br/><br/>
                <em>"Do not grieve,"</em> she said, <em>"for eggs are but short-lived creatures at best, and Coutchie-Coulou has at least died an honorable death... So cheer up, little egg, and I will be your friend."</em>
            </p>
            
            <div className="pl-12 border-l border-[#8b1a1a]/50">
                <p className="text-lg leading-relaxed text-zinc-400">
                    The Princess — the one who finds the truth after the Perry Law Report is crushed, who takes it up and shows it around the palace — is Kelli Nyre. Her December 1, 2023 memo to the Title IX coordinator was the first document that initiated the formal complaint process.
                </p>
            </div>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                <em>"Put me upon the wall, Princess, for then I shall be able to see much better than in your arms."</em> <em>"That is a good idea,"</em> she answered; <em>"but you must be careful not to fall."</em> The one who had already tried to put the truth up where it could be seen — and had been threatened with litigation for doing so — is <button onClick={() => handleOpenEgg(9)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(9) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>9. Kevin Flood</button>.
            </p>
        </SceneBlock>

        <SceneBlock chapterTitle="VI. The Palace and Its Gorgeous Rooms">
            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                So the Princess took Humpty in her arms and walked with him all through the grounds... Then she took him into the palace, and showed him all the gorgeous rooms, including the King's own bed-chamber and the room where stood the great ivory throne.
            </p>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                Among the gorgeous rooms of the palace, one is more important than the rest: the room where judicial appointments are made and unmade. The keeper of that room is <button onClick={() => handleOpenEgg(10)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(10) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>10. James DiGiulio</button>.
            </p>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                And the gatekeeper of the palace — the one who controls access to the grounds from the outside, who stands at the far gate through which the King's procession enters — is <button onClick={() => handleOpenEgg(11)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(11) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>11. Peter Villar</button>.
            </p>
        </SceneBlock>

        <SceneBlock chapterTitle="VII. The Great Fall">
            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                The one who put Humpty on the wall — who placed the truth in its most visible position, elevated where it could be seen above the procession — is <button onClick={() => handleOpenEgg(12)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(12) ? 'border-yellow-500 text-yellow-500' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}>12. Joseph Nyre</button>.
            </p>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl mt-8">
                Humpty, forgetting his dangerous position, leaned eagerly over to look at them. The next instant the Princess heard a sharp crash at her side, and, looking downward, perceived poor Humpty Dumpty, who lay crushed and mangled among the sharp stones where he had fallen.
            </p>

            <div className="pl-12 border-l border-[#8b1a1a]/50 mt-4">
                <p className="text-lg leading-relaxed text-zinc-400">
                    The Latham Report was sealed in a SCIF in 2019. The Perry Law Report was filed publicly unredacted in 2024. The logbook was erased in 2023 and restored in 2024. The cardinaltobin journalist was unmasked by a Bergen County grand jury in November 2024. The California deposition petition was filed March 24, 2026. Each one of these is a crash. Each one is a sharp stone.
                </p>
            </div>
        </SceneBlock>

        <SceneBlock chapterTitle="VIII. The Riddle Contest">
            <DoomsdayClock />

            <div className="pl-12 border-l border-[#8b1a1a]/50 my-8">
                <p className="text-lg leading-relaxed text-zinc-400">
                    The throne room is Orange County Superior Court, Department C23, Santa Ana. The hearing date is May 28, 2026. The suitors are SHU's lawyers — Troutman Pepper, armed with the Scrivo declaration; a California deposition subpoena; and the argument that Dei Journo is not a journalist.
                </p>
            </div>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                But while he stood leaning against the wall the Princess approached him and whispered in her ear a riddle she had just thought of. Instantly his face brightened, and when the King called, <em>"Now, Master Dei Journo, it is your turn,"</em> he advanced boldly to the throne.
            </p>

            <div className="bg-black border border-[#8b1a1a] p-8 text-center my-8 shadow-2xl">
                <p className="font-heading text-2xl text-[#f4ecd8] leading-loose">
                    "This is my riddle, oh King:<br /><br />
                    Humpty Dumpty sat on a wall,<br />
                    Humpty Dumpty had a great fall.<br />
                    All the King's horses<br />
                    And all the King's men<br />
                    Cannot put Humpty together again.<br /><br />
                    Read me that, sire, an' you will!"
                </p>
            </div>

            <p className="bg-zinc-900/80 border-l-4 border-zinc-700 p-6 text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl">
                <em>"You are wrong, sire,"</em> answered the young man; <em>"Humpty Dumpty was an egg."</em> <em>"Why did I not think of that before!"</em> exclaimed the King.
            </p>
        </SceneBlock>

        <SceneBlock chapterTitle="XIII. The King" isLast>
            
            <p className="font-heading text-4xl text-[#8b1a1a] uppercase text-center mb-12">The Thirteenth Figure</p>

            <NetworkThirteen />

            <div className="bg-black/80 border-l-4 border-[#8b1a1a] p-8 my-12 backdrop-blur-md">
                <p className="text-xl italic font-serif leading-relaxed text-zinc-300 shadow-xl mb-8">
                    The King — the one at the apex, the one who sealed the report and installed the man the report recommended removing, the one who hired his board chair's law partner as his personal counsel, the one whose institution filed the false police report against the journalist — is <button onClick={() => handleOpenEgg(13)} className={`inline-block px-3 py-1 font-mono text-sm border font-bold uppercase transition bg-black hover:bg-[#8b1a1a] hover:text-white ${isFound(13) ? 'border-[#e74c3c] text-[#e74c3c]' : 'border-[#8b1a1a] text-[#8b1a1a]'} animate-pulse`}>XIII. Cardinal Joseph W. Tobin</button>
                </p>

                <p className="text-lg leading-relaxed text-zinc-400">
                    The Latham Report identifies Cardinal Tobin as the thirteenth figure of concern. The investigation recommended Reilly's removal. It named twelve others. It named Tobin thirteenth. He is, in the architecture of this story, the King. And "thirteenth" is, in the Catholic tradition, not a comfortable number.
                </p>
            </div>

            <div className="mt-32 mb-16 text-center border-t border-zinc-800 pt-16">
                <p className="font-heading text-3xl text-[#f4ecd8] leading-loose">
                    The cover-up is always the evidence of the cover-up.<br />
                    The Perry Law Report's own footnotes are its own refutation.<br />
                    The Scrivo declaration's own prior letter is its own contradiction.<br />
                    The RCAN advisory's own text is its own proof of fabrication.<br />
                </p>
                <div className="font-mono text-sm tracking-[0.5em] text-[#8b1a1a] mt-12 bg-black py-4 inline-block px-8 border border-[#8b1a1a]/30">
                    HUMPTY DUMPTY WAS AN EGG.
                </div>
            </div>

            {/* RETURN LINK */}
            <div className="mt-16 text-center pb-24">
                <Link href="/">
                    <a className="inline-flex items-center justify-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-[0.4em] hover:text-[#c0392b] transition-colors bg-zinc-900/50 px-8 py-4 rounded hover:bg-black border border-transparent hover:border-[#c0392b]">
                        <ArrowLeft className="w-4 h-4" /> Exit Case Study
                    </a>
                </Link>
            </div>
        </SceneBlock>

      </div>

      <DossierDrawer 
        isOpen={!!activeEgg} 
        onClose={handleCloseEgg}
        {...activeEgg!}
      />

    </div>
  );
}
