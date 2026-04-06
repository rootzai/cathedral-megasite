import React, { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import "./HumptyCaseStudy.css";
import { heroImageBase64 } from "./humptyImage";

export default function HumptyCaseStudy() {
  const [foundEggs, setFoundEggs] = useState<Set<number>>(new Set());
  const [openEgg, setOpenEgg] = useState<number | null>(null);

  const totalEggs = 13;

  const handleOpenEgg = (n: number) => {
    if (openEgg === n) {
      setOpenEgg(null);
    } else {
      setOpenEgg(n);
      setFoundEggs(prev => {
        const next = new Set(prev);
        next.add(n);
        return next;
      });
      setTimeout(() => {
        const panel = document.getElementById('egg-' + n);
        if (panel) {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 50);
    }
  };

  const handleCloseEgg = (n: number) => {
    if (openEgg === n) {
      setOpenEgg(null);
    }
  };

  const isFound = (n: number) => foundEggs.has(n);
  const isOpen = (n: number) => openEgg === n;

  return (
    <div className="humpty-container">

      <div className="egg-counter">
        <span className="egg-counter-label">Easter Eggs Found</span>
        <div><span className="egg-count">{foundEggs.size}</span> <span style={{color: "rgba(245,237,216,0.3)", fontSize: "14px"}}>/ 13</span></div>
      </div>

      <div className="book">

        {/* MASTHEAD */}
        <div className="masthead">
          <span className="masthead-label">Sodom Hall // Forensic Literature Division // Easter 2026</span>
          <h1>A Case Study Masquerading as a Nursery Rhyme</h1>
          <h2>Humpty Dumpty<br />Had a Great Fall</h2>
          <h3>Being the Complete and Annotated Forensic Edition<br />of L. Frank Baum's Cautionary Tale,<br />with Thirteen Easter Eggs and Their Accompanying Dossiers</h3>
          <span className="masthead-byline">After Baum (1897) // Perry Law Report (2024) // Primary Sources Throughout</span>
        </div>

        {/* IMAGE */}
        <img className="hero-image" src={heroImageBase64} alt="Humpty Dumpty" />

        {/* NURSERY RHYME BLOCK */}
        <div className="nursery-rhyme">
          <p>
            Humpty Dumpty sat on a wall,<br />
            Humpty Dumpty had a great fall.<br />
            All the King's horses,<br />
            And all the King's men,<br />
            Cannot put Humpty together again.
          </p>
        </div>

        <span className="forensic-header">Forensic Commentary & Narrative Parallel</span>

        <div className="narrative">
          
          {/* CHAPTER I */}
          <span className="chapter-head">I. The Wall</span>

          <p className="baum">
            Humpty Dumpty was a smooth, round little chap, with a winning smile, and a great golden heart in his breast. Only one thing troubled Humpty, and that was that he might fall and crack his thin, white skin; he wished to be placed up on high, that he might see the world to advantage.
          </p>

          <div className="forensic">
            Humpty Dumpty, in the institutional architecture of Sodom Hall, is the truth. It is smooth, it is round, and its skin is frightfully thin. It was placed up on high — in an 8-count, 64-page Verified Complaint filed in Superior Court on February 5, 2024, and in a 111-page retaliation complaint submitted to the Department of Education on March 25, 2024. From those elevated perches, it saw the world to advantage. The truth was visible.
          </div>

          <p className="baum">
            So he crawled up the wall and sat upon the very edge, where he could look into the King's palace and see the people of the court walking in the garden.
          </p>

          <div className="forensic">
            The King's palace is Seton Hall University. The wall is the boundary between what the institution claims to be and what it actually is. The people of the court walking in the garden are the Board of Regents, the Board of Trustees, and the administrative cabinet. For three years, Humpty Dumpty looked down into the palace and saw what the courtiers were doing.
          </div>

          {/* EASTER EGG 1: MARINO */}
          <p className="baum">
            Presently, a courtier, <button className={`egg-trigger ${isFound(1) ? 'found' : ''}`} onClick={() => handleOpenEgg(1)} id="trigger-1">1</button> <em>Kevin Marino</em>, passed by the wall and saw Humpty Dumpty sitting there. 
          </p>

          <div id="egg-1" className={`egg-panel ${isOpen(1) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(1)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 1 //</span>
              <div className="egg-name">Kevin Marino</div>
              <div className="egg-role">Former Chair, Board of Regents // The Courtier</div>
              <p className="egg-baum-parallel">"A courtier passed by the wall and saw Humpty Dumpty sitting there."</p>
              <p className="egg-forensic">Marino served as the Chair of the Board of Regents. According to contemporaneous notes, eyewitness accounts, and federal complaints, he leveraged his position to retaliate against those who threatened his control. He is alleged to have instructed the president not to interview with the Ropes & Gray investigation ("they'll take one look at your boy scout face") and is documented attempting to block the Latham Report's production from 2019 to 2024. He resigned in December 2023 following complaints from Kelli Nyre and multiple administrators. He is the central node of the "King's men."</p>
              <div className="egg-quote">
                "Regent Marino attempted to intervene and halt the impending investigation... Dr. Nyre refused to comply with this instruction."
                <span className="egg-quote-attr">— Verified Complaint, Nyre v. SHU, February 5, 2024</span>
              </div>
            </div>
          </div>

          <div className="ornament">✦ ✦ ✦</div>

          {/* CHAPTER II */}
          <span className="chapter-head">II. The Fall</span>

          <p className="baum">
            <em>"Get down from there, Humpty!"</em> cried the courtier; <em>"you will surely fall, and then you will be broken."</em> But Humpty only laughed, and said: <em>"I am safe enough here; let me alone."</em>
          </p>

          <div className="forensic">
            The warning came directly from the institutional defense network. Do not put the truth on the wall. Withdraw the complaints. Settle quietly. The truth, thinking itself safe in the halls of justice, declined. It stayed on the wall.
          </div>

          {/* EASTER EGG 2: SCRIVO */}
          <p className="baum">
            Then came along <button className={`egg-trigger ${isFound(2) ? 'found' : ''}`} onClick={() => handleOpenEgg(2)} id="trigger-2">2</button> <em>Thomas Scrivo</em>, the King's advocate, who shook his head gravely. <em>"You are a foolish egg,"</em> he said, <em>"for if you fall, no one can put you together again."</em>
          </p>

          <div id="egg-2" className={`egg-panel ${isOpen(2) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(2)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 2 //</span>
              <div className="egg-name">Thomas Scrivo</div>
              <div className="egg-role">Managing Partner, O'Toole Scrivo // The King's Advocate</div>
              <p className="egg-baum-parallel">"Then came along Thomas Scrivo, the King's advocate, who shook his head gravely."</p>
              <p className="egg-forensic">Scrivo is Seton Hall's outside counsel. A former Christie chief counsel, he filed the unprecedented Chancery case under a manufactured "breach of fiduciary duty" theory to block Nyre from cooperating with the Ropes & Gray investigation. Scrivo's December 13, 2024 letter demanded preservation of a journalist's records—demonstrating he knew the recipient was acting as a journalist reporting on the SCIF-sealed Latham Report. 16 months later, Scrivo signed a sworn declaration in California asserting the same individual is "not a journalist." He is the architect of the weaponized litigation strategy.</p>
              <div className="egg-quote">
                "Pursuant to the pending and/or reasonably anticipated litigation involving Seton Hall, you are hereby directed to prospectively preserve all documents... specifically including your communications with 'reporters, press, and media outlets.'"
                <span className="egg-quote-attr">— Thomas Scrivo's litigation hold letter, December 13, 2024</span>
              </div>
            </div>
          </div>

          {/* EASTER EGG 3: PORRINO */}
          <p className="baum">
            Then <button className={`egg-trigger ${isFound(3) ? 'found' : ''}`} onClick={() => handleOpenEgg(3)} id="trigger-3">3</button> <em>Christopher Porrino</em> passed, riding upon a prancing horse. He struck the wall with his whip, and called out: <em>"Get down, Humpty! The King is coming."</em>
          </p>

          <div id="egg-3" className={`egg-panel ${isOpen(3) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(3)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 3 //</span>
              <div className="egg-name">Christopher Porrino</div>
              <div className="egg-role">Partner, Lowenstein Sandler // The Man on the Prancing Horse</div>
              <p className="egg-baum-parallel">"He struck the wall with his whip, and called out: 'Get down, Humpty! The King is coming.'"</p>
              <p className="egg-forensic">Porrino is outside counsel to Kevin Marino. A former NJ Attorney General under Christie, he represented the Christie administration during Bridgegate, drafting the Mastro Report which exonerated the Governor. He coordinates with Scrivo to execute a twin-pillar defense strategy: Scrivo litigates for the institution, Porrino threatens for the individual. The bar complaints documenting his role in the church bulletin fabrication and grand jury coordination were declined in two days by the OAE Director—a Christie alumna who had served as his subordinate.</p>
              <div className="egg-quote">
                "The coordinated deployment of dual threat letters from Scrivo and Porrino, often arriving within 48 hours of each other, demonstrates a unified command structure operating across supposedly separate client representations."
                <span className="egg-quote-attr">— Forensic Audit Report, Network Analysis</span>
              </div>
            </div>
          </div>

          <p className="baum">
            Humpty Dumpty was frightened at this, and tried to scramble down; but he missed his footing, and fell heavily to the ground!
          </p>

          <div className="forensic">
            The fall is the Chancery Division lawsuit. The King's men did not wait for the truth to be evaluated. They knocked it off the wall by filing a preemptive lawsuit in a forum where their partner chairs judicial appointments, securing a temporary restraining order that gagged the plaintiff from participating in an internal investigation. The truth hit the ground and shattered.
          </div>

          <div className="ornament">✦ ✦ ✦</div>

          {/* CHAPTER III */}
          <span className="chapter-head">III. Coutchie-Coulou</span>

          <p className="baum">
            Just then another egg came rolling along. This was <button className={`egg-trigger ${isFound(4) ? 'found' : ''}`} onClick={() => handleOpenEgg(4)} id="trigger-4">4</button> <em>Coutchie-Coulou</em>. She was a very pretty egg, though not so large as Humpty, and when she saw him she stopped and said: <em>"Why do you weep?"</em>
          </p>

          <div id="egg-4" className={`egg-panel ${isOpen(4) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(4)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 4 //</span>
              <div className="egg-name">The Perry Law Report</div>
              <div className="egg-role">"Independent" Investigation // Coutchie-Coulou</div>
              <p className="egg-baum-parallel">"Just then another egg came rolling along. This was Coutchie-Coulou."</p>
              <p className="egg-forensic">The Perry Law Report was commissioned by the Executive Committee of the Board of Regents on December 14, 2023. It cost over $2 million. It is 57 pages long. Its mandate was to investigate Title IX and harassment complaints against Kevin Marino. It concluded there was "no evidence" to support the claims. But the report itself documents the eyewitness evidence of the physical contact it claims did not happen. It is the second egg—the manufactured truth, created to replace the shattered one.</p>
              <div className="egg-quote">
                "The Independent Investigation found no evidence that the alleged conduct occurred."
                <span className="egg-quote-attr">— Perry Law Report, Executive Summary, page 3</span>
              </div>
            </div>
          </div>

          <p className="baum">
            <em>"Because I have fallen from the wall and broken my shell,"</em> answered Humpty. <em>"The King's men did it."</em>
          </p>

          {/* EASTER EGG 5: AGNIFILO */}
          <p className="baum">
            <em>"That is too bad,"</em> replied Coutchie-Coulou, whose shell was painted with the mark of <button className={`egg-trigger ${isFound(5) ? 'found' : ''}`} onClick={() => handleOpenEgg(5)} id="trigger-5">5</button> <em>Karen Agnifilo</em>. <em>"But I will stay with you and comfort you."</em>
          </p>

          <div id="egg-5" className={`egg-panel ${isOpen(5) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(5)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 5 //</span>
              <div className="egg-name">Karen Agnifilo</div>
              <div className="egg-role">Partner, Perry Law // The Lead Investigator</div>
              <p className="egg-baum-parallel">"Coutchie-Coulou, whose shell was painted with the mark of Karen Agnifilo."</p>
              <p className="egg-forensic">Agnifilo was the lead investigator on the Perry Law Report. She is a former Chief Assistant District Attorney in Manhattan. Her investigation was internally codenamed "The Nursery." She began her presentation to Seton Hall executives by stating: "I am hired by the Board to protect the Board." She then produced a report that concluded Marino engaged in no misconduct—while her own footnotes documented the exact opposite. Footnote 11 documents the August 23, 2021 meeting where President Nyre reported Marino's harassment of his wife to General Counsel John Tysse. Agnifilo footnoted it, then concluded there was no evidence.</p>
              <div className="egg-quote">
                "General Counsel Tysse's notes reflect that during their meeting, Dr. Nyre brought up the inappropriate conduct that Mrs. Nyre alleges occurred."
                <span className="egg-quote-attr">— Perry Law Report, Footnote 11. The smoking gun buried in the bottom margin.</span>
              </div>
            </div>
          </div>

          {/* EASTER EGG 6: STIO */}
          <p className="baum">
            And Coutchie-Coulou was indeed a false friend, for the words painted upon her shell were placed there by <button className={`egg-trigger ${isFound(6) ? 'found' : ''}`} onClick={() => handleOpenEgg(6)} id="trigger-6">6</button> <em>Angelo Stio</em>, acting with the King's men.
          </p>

          <div id="egg-6" className={`egg-panel ${isOpen(6) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(6)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 6 //</span>
              <div className="egg-name">Angelo Stio</div>
              <div className="egg-role">Partner, Troutman Pepper // Attorney for the Board of Regents</div>
              <p className="egg-baum-parallel">"The words painted upon her shell were placed there by Angelo Stio, acting with the King's men."</p>
              <p className="egg-forensic">Stio is identified by Kevin Flood in his December 11, 2023 letter to Cardinal Tobin as "the Attorney for the Board of Regents" who "directed the altering of official University records by removing three separate staff complaints of Board member harassment and discrimination from the Annual Report of Claims prior to its presentation at the May 8, 2023 Audit Committee meeting." University staff, directed by the Board's attorney, reluctantly complied. The complaints removed were from Capadona (four separate complaints), McMonagle (one complaint), and the Nyres. Capadona recused herself from the erasure process because her own complaints were among those being removed. Stio's firm — Troutman Pepper — later filed the California deposition petition against journalist Eric Spitz on March 24, 2026 — the same day Spitz met with Congressman Issa. The filing partner in California is Peter Villar.</p>
              <div className="egg-quote">
                "The Attorney for the Board of Regents directed the altering of official University records by removing three separate staff complaints... Given the University staff were directed by the Board's attorney, they reluctantly complied and altered the records as directed."
                <span className="egg-quote-attr">— Kevin Flood, letter to Cardinal Tobin, December 11, 2023</span>
              </div>
            </div>
          </div>

          <div className="ornament">✦ ✦ ✦</div>

          {/* CHAPTER IV */}
          <span className="chapter-head">IV. The Crushing of Coutchie-Coulou</span>

          <p className="baum">
            Just as the eggs were in the middle of the drive the horses dashed by, and Humpty, greatly alarmed, ran as fast as he could for the grass. Then he stopped and looked around, and behold! There was poor Coutchie-Coulou crushed into a shapeless mass by the hoof of one of the horses, and her golden heart was spreading itself slowly over the white gravel of the driveway!
          </p>

          <div className="forensic">
            The Perry Law Report was filed publicly by Porrino on July 10, 2024 at 9:57 PM, as Exhibit A to his amicus brief — without redacting the names of the sexual harassment complainants. Donna McMonagle and Kim Capadona, both of whom had filed harassment complaints against Marino, both of whom the University had committed to protect, were publicly identified in a court document without their consent. The golden heart of the Perry Law Report — its supposed "no evidence" finding — spread itself across the public record the same evening. The New York Times ran it the following day. The horses dashed by. The Perry Law Report was crushed into a shapeless mass. The horses are the King's men.
          </div>

          {/* EASTER EGG 7: DAVENPORT */}
          <p className="baum">
            Humpty sat down upon the grass and wept grievously, for the death of his companion was a great blow to him. And while he sobbed, the richly dressed courtiers and charming ladies strolled on through the walks, entirely unmoved. The charming lady who strolled most unmovedly of all — who had, in fact, been groomed for her stroll by the very man whose conduct had crushed Coutchie-Coulou — is <button className={`egg-trigger ${isFound(7) ? 'found' : ''}`} onClick={() => handleOpenEgg(7)} id="trigger-7">7</button> <em>Jennifer Davenport.</em> New Jersey Attorney General. Porrino's former First Assistant AG. Seton Hall Law School graduate. Former Latham & Watkins litigation associate. Confirmed unanimously February 24, 2026 — 36 days after bar complaints against Porrino were filed with the OAE. The attorney general who would investigate Christopher Porrino is the woman Christopher Porrino publicly championed for the position. She strolled through the walks. The charming lady. Richly dressed.
          </p>

          <div id="egg-7" className={`egg-panel ${isOpen(7) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(7)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 7 //</span>
              <div className="egg-name">Jennifer Davenport</div>
              <div className="egg-role">New Jersey Attorney General // Porrino's Former First Assistant // The Charming Lady in the Walk</div>
              <p className="egg-baum-parallel">"Richly dressed courtiers and charming ladies strolled through the walks."</p>
              <p className="egg-forensic">Davenport served as Porrino's direct subordinate — his First Assistant AG. She is a Seton Hall Law School graduate. She was a former Latham & Watkins litigation associate — the same firm that produced the Latham Report, now under court order to be produced May 18, 2026. Porrino publicly endorsed her confirmation in December 2025, describing working "closely with her." She was confirmed unanimously February 24, 2026 — exactly 36 days after bar complaints documenting Porrino's fabrication of church bulletins and coordination of a grand jury subpoena against a journalist were filed with the OAE. The attorney general who would investigate the man who allegedly manufactured the criminal predicate for the Bergen County grand jury subpoena is the woman that man personally championed for the position. The circuit is complete.</p>
              <div className="egg-quote">
                "He is a confidence inspiring selection… I have had the great privilege of working closely with her in some of the most challenging, high-pressure settings that government-related service can produce."
                <span className="egg-quote-attr">— Christopher Porrino endorsing Jennifer Davenport for NJ Attorney General, December 2025</span>
              </div>
            </div>
          </div>

          {/* EASTER EGG 8: BARBA JONES */}
          <p className="baum">
            And among the courtiers strolling most decorously through the walks, heedless of the crushed egg on the driveway, is <button className={`egg-trigger ${isFound(8) ? 'found' : ''}`} onClick={() => handleOpenEgg(8)} id="trigger-8">8</button> <em>Johanna Barba Jones,</em> Director of the New Jersey Office of Attorney Ethics. Christie administration alumna. Seton Hall Law School graduate. The ethics office director is a Seton Hall Law graduate who worked for Christie. She declined to investigate Seton Hall Law graduates Scrivo and Porrino. Twice. In two days. Citing the wrong prong of the rule. The mandatory "shall be docketed" prong was not applied. The discretionary "may be declined" prong was misused. The ethics office, like the beautiful courtier, strolled through the walk and saw nothing that required her attention.
          </p>

          <div id="egg-8" className={`egg-panel ${isOpen(8) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(8)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 8 //</span>
              <div className="egg-name">Johanna Barba Jones</div>
              <div className="egg-role">Director, NJ Office of Attorney Ethics // Christie Alumna // SHU Law Graduate // The Strolling Courtier</div>
              <p className="egg-baum-parallel">"Richly dressed courtiers and charming ladies strolled through the walks."</p>
              <p className="egg-forensic">Barba Jones served as Christie's assistant counsel from 2010–2012. She is a Seton Hall Law School graduate. She was appointed OAE Director in October 2022. Bar complaints against Scrivo and Porrino — documenting the fabrication of church bulletins, the coordination of a grand jury subpoena against a journalist, and the coordinated six-day hold letter pattern — were filed January 19, 2026. They were declined January 21, 2026. Two days. Without investigation. The declination cited Rule 1:20-3(f) — but applied the permissive "may be declined" prong to a grievance that triggered the mandatory "shall be docketed" prong. The fabrication of church documents to justify a criminal grand jury subpoena against a journalist is not a close case on "clearly demonstrable provable ethical violations." The ethics office strolled past the crushed egg on the driveway and saw nothing that required its attention. Its director is a graduate of the institution whose lawyers it was not investigating.</p>
              <div className="egg-quote">
                "The bar complaint process has been captured by the same network it is supposed to investigate. This is not a failure of the system. It is the system operating exactly as Scrivo and Porrino designed it to operate."
                <span className="egg-quote-attr">— Litigation as a Weapon, submitted to Congressman Issa, April 1, 2026</span>
              </div>
            </div>
          </div>

          <div className="ornament">✦ ✦ ✦</div>

          {/* CHAPTER V */}
          <span className="chapter-head">V. The Princess Who Found the Egg</span>

          <p className="baum">
            And while he sobbed, a voice said to him, <em>"What is the matter, little egg?"</em> Humpty looked up, and saw a beautiful girl bending over him. <em>"One of the horses has stepped upon Coutchie-Coulou,"</em> he said; <em>"and now she is dead, and I have no friend in all the world."</em>
          </p>

          <div className="forensic">
            The Princess — the one who finds the truth after the Perry Law Report is crushed, who takes it up and shows it around the palace — is Kelli Nyre. Her December 1, 2023 memo to the Title IX coordinator was the first document that initiated the formal complaint process. On December 18, 2023, she met with Lori Brown, the Title IX coordinator. Lori Brown's notes record: "Mrs. Nyre seemed genuinely upset and her eyes teared up when telling Ms. Brown what happened." Brown memorialized what Mrs. Nyre told her in notes that Mrs. Nyre herself reviewed, edited, and approved. Three documents from the Nyres exist in the Perry Law Report. The Perry Law Report's conclusion: the Nyres "never provided any documents to support their claims."
          </div>

          <p className="baum">
            The girl laughed. <em>"Do not grieve,"</em> she said, <em>"for eggs are but short-lived creatures at best, and Coutchie-Coulou has at least died an honorable death and saved herself from being fried in a pan or boiled in her own shell. So cheer up, little egg, and I will be your friend — at least so long as you remain fresh."</em>
          </p>

          <div className="forensic">
            Kelli Nyre's December 18 meeting with Lori Brown is the moment the truth was taken up. Brown's notes record that Mrs. Nyre explained she had come forward now — after two and a half years — because she was frustrated that Dr. Nyre's other complaints against Marino were not being addressed. The Princess found the egg not in the abstract but in a specific moment: when the institution had failed to act on everything else. The Perry Law Report notes this and uses it against her. It suggests that coming forward at the moment your husband's complaints are ignored is evidence of fabrication. Baum understood the logic differently: sometimes you come forward because the time has finally come, and you have no friend in all the world, and a voice asks what is the matter.
          </div>

          {/* EASTER EGG 9: FLOOD */}
          <p className="baum">
            <em>"Put me upon the wall, Princess, for then I shall be able to see much better than in your arms."</em> <em>"That is a good idea,"</em> she answered; <em>"but you must be careful not to fall."</em> The one who had already tried to put the truth up where it could be seen — and had been threatened with litigation for doing so — is <button className={`egg-trigger ${isFound(9) ? 'found' : ''}`} onClick={() => handleOpenEgg(9)} id="trigger-9">9</button> <em>Kevin Flood.</em> Vice Chair of the Audit Committee. The Regent who saw Marino standing behind Mrs. Nyre with his hands on her shoulders at the December 6, 2022 reception. The Regent who heard the next-day report from Dr. Nyre. The Regent who wrote to Cardinal Tobin in December 2023 documenting the logbook erasure. The Regent who was told he must be careful not to fall — and then fell anyway, threatened, unindemnified, and resigned.
          </p>

          <div id="egg-9" className={`egg-panel ${isOpen(9) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(9)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 9 //</span>
              <div className="egg-name">Kevin Flood</div>
              <div className="egg-role">Vice Chair, Audit Committee // Mandatory Reporter // The Regent Who Saw</div>
              <p className="egg-baum-parallel">"Put me upon the wall, Princess, for then I shall be able to see much better than in your arms. That is a good idea, she answered; but you must be careful not to fall."</p>
              <p className="egg-forensic">Flood attended both events in question. At the December 6, 2022 reception, he received a call from Dr. Nyre before arriving, asking him to find Mrs. Nyre and stay by her side. When he arrived, he saw Mrs. Nyre speaking to Marino — "who appeared to be standing behind her with his hands on her shoulders." Perry Law records this. Perry Law's conclusion: "not a single witness corroborates." The following day, Flood visited the Nyres' home and heard Dr. Nyre describe the harassment at both events. This is eyewitness corroboration of the next-day report. In December 2023 he wrote to Cardinal Tobin documenting the logbook erasure and requesting an independent investigation with no Regents involved. He was subsequently threatened with litigation by Marino and Porrino. SHU refused to indemnify him for the legal expenses he incurred for fulfilling his mandatory reporting obligations. He resigned September 30, 2024, attaching the Tobin letter to his resignation.</p>
              <div className="egg-quote">
                "Since sending that letter to Tobin, I received much individual ire from fellow Regents and was out of a Board meeting. Moreover, I've been threatened with litigation, applied for indemnification and incurred my own legal expenses — all for simply mustering the courage to seek answers and fulfill mandated reporting requirements."
                <span className="egg-quote-attr">— Kevin Flood, resignation letter, September 30, 2024</span>
              </div>
              <div className="egg-quote">
                "Regent Flood saw Mrs. Nyre speaking to Mr. Marino, who appeared to be standing behind her with his hands on her shoulders. Regent Flood did not think anything of their interaction."
                <span className="egg-quote-attr">— Perry Law Report, page 7. Flood's corroborating testimony. Not mentioned in the conclusion.</span>
              </div>
            </div>
          </div>

          <div className="ornament">✦ ✦ ✦</div>

          {/* CHAPTER VI */}
          <span className="chapter-head">VI. The Palace and Its Gorgeous Rooms</span>

          <p className="baum">
            So the Princess took Humpty in her arms and walked with him all through the grounds, letting him see the fountains and the golden fish that swam in their waters, the beds of lilies and roses, and the pools where the swans floated. Then she took him into the palace, and showed him all the gorgeous rooms, including the King's own bed-chamber and the room where stood the great ivory throne.
          </p>

          <div className="forensic">
            Joseph Nyre was recruited to Seton Hall in January 2019 specifically because the university needed to recover from the McCarrick scandal. Nyre showed the university's community what integrity might look like — what the gorgeous rooms could contain if properly governed. He then discovered what the gorgeous rooms actually contained: a logbook being falsified, a Board Chairman allegedly harassing the president's wife and intimidating staff, a Latham Report sealed in a SCIF, and a network of Christie-era lawyers deployed to ensure none of it ever reached the King's own bedchamber. The great ivory throne belongs to Cardinal Tobin. He chairs both governing boards.
          </div>

          {/* EASTER EGG 10: DIGIULIO */}
          <p className="baum">
            Among the gorgeous rooms of the palace, one is more important than the rest: the room where judicial appointments are made and unmade. The keeper of that room — the one who decides which courtiers sit on which thrones in Essex County — is <button className={`egg-trigger ${isFound(10) ? 'found' : ''}`} onClick={() => handleOpenEgg(10)} id="trigger-10">10</button> <em>James DiGiulio.</em> Scrivo's law partner. Chair of the Essex County Judicial and Prosecutorial Appointments Committee. The man through whom Scrivo's professional network vetted every judge sitting in Essex County civil matters. When Scrivo filed the Chancery case in Essex County — a courthouse where his partner controls judicial appointments — the assignment of Judge L. Grace Spencer (Christie appointee) was not coincidental. The outcome was engineered before the first brief was filed.
          </p>

          <div id="egg-10" className={`egg-panel ${isOpen(10) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(10)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 10 //</span>
              <div className="egg-name">James DiGiulio</div>
              <div className="egg-role">Scrivo's Law Partner // Chair, Essex County Judicial Appointments Committee // The Keeper of the Throne Room</div>
              <p className="egg-baum-parallel">"She showed him all the gorgeous rooms, including the King's own bed-chamber and the room where stood the great ivory throne."</p>
              <p className="egg-forensic">DiGiulio is Scrivo's law partner at O'Toole Scrivo. He chairs the Essex County Judicial and Prosecutorial Appointments Committee — the committee that vets candidates for every judicial appointment in Essex County. Every judge sitting in Essex County civil matters served on or was approved by DiGiulio's committee. Scrivo filed the Chancery case — Seton Hall University v. Nyre — in Essex County. After four failed venue appeals to keep the Nyre Law Division case out of Hudson County, the case returned to Essex County and was assigned to Judge L. Grace Spencer, a Christie appointee. Spencer dismissed the Nyres' First Amended Complaint without prejudice on February 19, 2026 — a ruling legal observers have identified as containing seven categories of potential reversible error. The filing forum was chosen because the bench was known.</p>
              <div className="egg-quote">
                "A lawyer who files in a forum where his partner controls judicial appointments, and who repeatedly appeals valid venue transfers to keep a case in that forum, is manipulating the judiciary for client advantage."
                <span className="egg-quote-attr">— Litigation as a Weapon, Rule Implicated: RPC 8.4(d)</span>
              </div>
            </div>
          </div>

          {/* EASTER EGG 11: VILLAR */}
          <p className="baum">
            And the gatekeeper of the palace — the one who controls access to the grounds from the outside, who stands at the far gate through which the King's procession enters — is <button className={`egg-trigger ${isFound(11) ? 'found' : ''}`} onClick={() => handleOpenEgg(11)} id="trigger-11">11</button> <em>Peter Villar.</em> Troutman Pepper California partner. The lawyer who filed the deposition petition in Orange County Superior Court on March 24, 2026 — the same day Eric Spitz met with Congressman Issa. The lawyer whose footnote 3 explained to the California court what the 1985 film <em>Fletch</em> is. The lawyer who signed the brief claiming that the former President of Freedom Communications, contributor to the Wall Street Journal and RealClearPolitics, had "no formal relationship with any publications." A California lawyer. In Orange County. Where Spitz ran the dominant newspaper.
          </p>

          <div id="egg-11" className={`egg-panel ${isOpen(11) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(11)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 11 //</span>
              <div className="egg-name">Peter Villar</div>
              <div className="egg-role">Troutman Pepper California // The California Gatekeeper // Footnote 3</div>
              <p className="egg-baum-parallel">"Before the palace door were a dozen prancing horses, gaily caparisoned, awaiting their riders."</p>
              <p className="egg-forensic">Villar filed the California deposition petition in Seton Hall University v. Eric Spitz, Case No. 30-2026-01555640-CU-PT-CJC, on March 24, 2026 — the same day Spitz met with Congressman Issa and briefed House Judiciary Democratic Staff Director Arthur Ewenczyk. The petition relies on Scrivo's sworn declaration asserting Spitz is not a journalist. Villar signed the accompanying brief. The brief's footnote 3 explains: "Mr. Spitz's reference to being a 'Fletcher style' journalist appears to be a reference to the 1985 film, 'Fletch,' starring Chevy Chase." Villar's firm, Troutman Pepper, employs Angelo Stio — the New Jersey partner who authorized the erasure of Seton Hall's Title IX complaint logbooks during an active federal investigation. The firm whose New Jersey partner destroyed the evidence is the firm whose California partner is attempting to depose the journalist who reported on that destruction. Under 18 U.S.C. § 1513, retaliating against a witness for providing information to a Congressional official is a federal crime. The filing date is in the court's electronic docket. The Congressional meeting is documented. The sequencing is not inferential — it is same-day and on the record.</p>
              <div className="egg-quote">
                "Mr. Spitz's reference to being a 'Fletcher style' journalist appears to be a reference to the 1985 film, 'Fletch,' starring Chevy Chase."
                <span className="egg-quote-attr">— Troutman Pepper brief, footnote 3, Orange County Superior Court — explaining the joke to a California court in the county where Spitz ran the newspaper</span>
              </div>
            </div>
          </div>

          <div className="ornament">✦ ✦ ✦</div>

          {/* CHAPTER VII */}
          <span className="chapter-head">VII. The Great Fall</span>

          <p className="baum">
            <em>"After this,"</em> he said, <em>"I am content to accept any fate that may befall me, for surely no egg before me ever saw so many beautiful sights."</em> <em>"That is true,"</em> answered the Princess; <em>"but now I have one more sight to show you which will be grander than all the others; for the King will be riding home shortly with all his horses and men at his back, and I will take you to the gates and let you see them pass by."</em>
          </p>

          {/* EASTER EGG 12: NYRE */}
          <p className="baum">
            The one who put Humpty on the wall — who placed the truth in its most visible position, elevated where it could be seen above the procession — is <button className={`egg-trigger ${isFound(12) ? 'found' : ''}`} onClick={() => handleOpenEgg(12)} id="trigger-12">12</button> <em>Joseph Nyre.</em> Seton Hall's former President. The boy scout. The one who takes good notes. His 64-page civil complaint is the wall. Every date is accurate. Every allegation is named, located, and documented with contemporaneous record. He placed the truth where it could see the King's procession approaching. He said: look at what is coming toward us. The Princess warned: you must be careful not to fall. Nyre has not fallen. The dismissal was without prejudice. Every appellate path remains open.
          </p>

          <div id="egg-12" className={`egg-panel ${isOpen(12) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(12)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. 12 //</span>
              <div className="egg-name">Joseph Nyre</div>
              <div className="egg-role">Former SHU President // The Boy Scout // The One Who Put Humpty on the Wall</div>
              <p className="egg-baum-parallel">"Put me upon the wall, Princess, for then I shall be able to see much better than in your arms. Then she sat the egg gently upon the top of the stone wall, where there was a little hollow; and Humpty was delighted, for from his elevated perch he could see much better than the Princess herself."</p>
              <p className="egg-forensic">Nyre was recruited to Seton Hall in January 2019 specifically to restore institutional integrity after the McCarrick scandal. He led the university through COVID, raised enrollment, and made a personal donation of $500,000 to support student affordability. He also: documented Marino's alleged misconduct with contemporaneous notes; reported the harassment to the General Counsel in summer 2021; reported it to Regents; filed an 8-count, 64-page civil complaint on February 5, 2024 — specific, dated, named, documented. He is represented by Armen McOmber. His complaint was dismissed without prejudice by Judge Spencer on February 19, 2026. McOmber's response: "We respectfully and unequivocally disagree with the ruling, which we believe is incorrect as a matter of both fact and law." The dismissal without prejudice forecloses no appellate path. Joe Nyre takes good notes. The notes are still there.</p>
              <div className="egg-quote">
                "Instead of addressing their own failures, Seton Hall is now attempting to go after the alleged whistle-blower."
                <span className="egg-quote-attr">— NJ Monitor editorial, February 21, 2025</span>
              </div>
              <div className="egg-quote">
                "Seton Hall's lawsuit, filled with falsehoods and misstatements, is nothing more than a blatant act of retaliation against Dr. Nyre for his pending litigation exposing institutional corruption, cover-ups, and abuse."
                <span className="egg-quote-attr">— Armen McOmber, Nyre's counsel</span>
              </div>
            </div>
          </div>

          <p className="baum">
            Humpty, forgetting his dangerous position, leaned eagerly over to look at them. The next instant the Princess heard a sharp crash at her side, and, looking downward, perceived poor Humpty Dumpty, who lay crushed and mangled among the sharp stones where he had fallen. The Princess sighed, for she had taken quite a fancy to the egg; but she knew it was impossible to gather it up again or mend the matter in any way, and therefore she returned thoughtfully to the palace.
          </p>

          <div className="forensic">
            The Latham Report was sealed in a SCIF in 2019. The Perry Law Report was filed publicly unredacted in 2024. The logbook was erased in 2023 and restored in 2024. The cardinaltobin journalist was unmasked by a Bergen County grand jury in November 2024. The California deposition petition was filed March 24, 2026. Each one of these is a crash. Each one is a sharp stone. All the King's horses and all the King's men cannot put Humpty together again — because Humpty is the truth, and the truth, once witnessed, cannot be unwitnessed. The Princess returned thoughtfully to the palace. The May 18, 2026 court order for the Latham Report's production is the thoughtful return.
          </div>

          <div className="ornament">✦ ✦ ✦</div>

          {/* CHAPTER VIII */}
          <span className="chapter-head">VIII. The Riddle Contest — May 28, 2026</span>

          <p className="baum">
            Now it happened that upon this evening several young men of the kingdom, who were all of high rank, had determined to ask the King for the hand of the Princess; so they assembled in the throne room and demanded that the King choose which of them was most worthy.
          </p>

          <div className="forensic">
            The throne room is Orange County Superior Court, Department C23, Santa Ana. The hearing date is May 28, 2026. The suitors are SHU's lawyers — Troutman Pepper, armed with the Scrivo declaration; a California deposition subpoena; and the argument that Eric Spitz is not a journalist. The King is the court itself. The Princess — the thing being sought — is Spitz's testimony, his sources, his documents.
          </div>

          <p className="baum">
            <em>"The one who shall ask me a riddle I cannot guess, can marry my daughter."</em> At this the young men looked thoughtful, and began to devise riddles that his Majesty should be unable to guess. But the King was a shrewd monarch, and each one of the riddles presented to him he guessed with ease.
          </p>

          <div className="forensic">
            SHU's legal arguments are the riddles the court has already heard: the discovery petition, the deposition subpoena, the assertion of non-journalistic status. The court has seen these arguments before. They are not novel. They are the institutional playbook exported to California.
          </div>

          <p className="baum">
            But while he stood leaning against the wall the Princess approached him and whispered in her ear a riddle she had just thought of. Instantly his face brightened, and when the King called, <em>"Now, Master Dei Journo, it is your turn,"</em> he advanced boldly to the throne.
          </p>

          <div className="forensic">
            Master Dei Journo — the young man the Princess favors, the one with the riddle the King cannot guess — is Eric Spitz. The riddle the Princess whispered is the anti-SLAPP motion under CCP § 425.16 with mandatory fee-shifting. It is the California Shield Law under Evidence Code § 1070. It is the false declaration by Scrivo directly contradicted by Scrivo's own December 2024 litigation hold letter demanding preservation of Spitz's communications with "reporters, press, and media outlets." It is Spitz's Wall Street Journal byline. His RealClearPolitics archive. His presidency of Freedom Communications and the Orange County Register — filed in Orange County. The riddle is not complex. It is, in Baum's sense, the simplest thing in the world. It was always the simplest thing in the world. Master Dei Journo just had to say it.
          </div>

          <p className="baum">
            With downcast eyes, he knelt before the throne and spoke:
          </p>

          <div className="baum-quote">
            "This is my riddle, oh King:<br /><br />
            Humpty Dumpty sat on a wall,<br />
            Humpty Dumpty had a great fall.<br />
            All the King's horses<br />
            And all the King's men<br />
            Cannot put Humpty together again.<br /><br />
            Read me that, sire, an' you will!"
          </div>

          <p className="baum">
            The King thought earnestly for a long time, and he slapped his head and rubbed his ears and walked the floor in great strides; but guess the riddle he could not. <em>"You are a humbug, sir!"</em> he cried out at last; <em>"there is no answer to such a riddle."</em>
          </p>

          <div className="forensic">
            SHU's response to the anti-SLAPP motion will be: there is no answer. The journalist has no shield. He has no formal relationship with publications. He has no protected activity. There is no riddle here — only a witness who must be deposed. This is the institutional position. It is also directly contradicted by Scrivo's own prior written correspondence, by Spitz's published bylines, and by SHU's own Verified Complaint's acknowledgment that confidential documents were being disseminated to reporters. A Google search for "Eric Spitz journalist" returns, on the first page of results, the presidency of Freedom Communications. Filed in Orange County. Where Spitz ran the dominant newspaper.
          </div>

          <p className="baum">
            <em>"You are wrong, sire,"</em> answered the young man; <em>"Humpty Dumpty was an egg."</em> <em>"Why did I not think of that before!"</em> exclaimed the King.
          </p>

          <div className="forensic">
            The answer has always been: it is an egg. The Perry Law Report's "no evidence" conclusion is contradicted by the report's own testimony. The grand jury subpoena's fraud predicate is contradicted by the five cardinaltobin emails, none of which solicited money. The Scrivo declaration's "not a journalist" assertion is contradicted by Scrivo's own hold letter. The cover-up is contradicted by the cover-up itself. The Latham Report has been under court order since February 27, 2026. It will be produced May 18. Ten days before the California hearing. Humpty Dumpty was an egg.
          </div>

          <div className="ornament">✦ ✦ ✦</div>

          {/* THE THIRTEENTH EGG */}
          <span className="chapter-head" style={{color: "var(--crimson)"}}>XIII. The King — The Thirteenth Figure</span>

          <p className="baum">
            Now who is the King? Who is the monarch so shrewd that every riddle presented to him has been guessed with ease — until the last one? The King who rides with <em>"all his horses and men at his back"</em>? The King whose procession, riding home, crushed poor Coutchie-Coulou on the gravel driveway? The King who cannot put Humpty together again?
          </p>

          <div className="forensic">
            The Latham Report identifies Cardinal Tobin as the <strong>thirteenth figure of concern</strong>. The investigation recommended Reilly's removal. It named twelve others. It named Tobin thirteenth. He is, in the architecture of this story, the King. And "thirteenth" is, in the Catholic tradition, not a comfortable number.
          </div>

          {/* EASTER EGG 13: TOBIN */}
          <p className="baum">
            The King — the one at the apex, the one who sealed the report and installed the man the report recommended removing, the one who hired his dependent's partner as his personal counsel, the one whose institution filed the false police report against the journalist — is <button className={`egg-trigger thirteenth ${isFound(13) ? 'found' : ''}`} onClick={() => handleOpenEgg(13)} id="trigger-13">XIII</button> <em>Cardinal Joseph W. Tobin,</em> Archbishop of Newark. Chairman of the Board of Trustees. President of the Board of Regents. The thirteenth figure of concern in a 24,000-page report he sealed in a SCIF and never disclosed in six years of related litigation. He chairs both governing boards simultaneously — the only person in Seton Hall's governance structure who occupies two levels at once. He received the task force's removal recommendation for Reilly. He ignored it. He installed Reilly anyway. He hired Critchley — Marino's partner — to advise him not to appear before the Latham investigators. He allowed Scrivo's TRO to block Nyre's cooperation with the Ropes & Gray investigation Tobin himself had commissioned. His institution published the RCAN fraud advisory directing parishioners to report the cardinaltobin journalist to local law enforcement. He is the King. He is the thirteenth. He rides home with all his horses and men at his back.
          </p>

          <div id="egg-13" className={`egg-panel thirteenth-panel ${isOpen(13) ? 'open' : ''}`}>
            <button className="egg-close" onClick={() => handleCloseEgg(13)}>✕</button>
            <div className="egg-panel-inner">
              <span className="egg-number">// Easter Egg No. XIII — The Thirteenth Figure //</span>
              <div className="egg-name">Cardinal Joseph W. Tobin</div>
              <div className="egg-role">Archbishop of Newark // Chair, Board of Trustees // President, Board of Regents // The King</div>
              <p className="egg-baum-parallel">"The King came riding along the road with many courtiers and soldiers and vassals following in his wake, all mounted upon the finest horses the kingdom could afford. All the King's horses and all the King's men cannot put Humpty together again."</p>
              <p className="egg-forensic">Cardinal Tobin chairs both governing boards of Seton Hall University simultaneously — the only person in the governance structure who occupies two levels at once. He received the Latham Report's recommendation for Reilly's removal. He is identified as the thirteenth figure of concern in the Latham Report. He sealed the report in a SCIF. It never appeared on a privilege log in six years of related litigation. He hired Michael Critchley — Kevin Marino's partner in multiple cases including the 2024 NJ AG prosecution of George Norcross — as his personal attorney. Critchley advised Tobin not to appear before the Latham investigators. Tobin complied. Tobin publicly commissioned the Ropes & Gray investigation. Scrivo's TRO — obtained in the manufactured Chancery case — blocked Nyre's cooperation with Ropes & Gray twice. Tobin did not direct SHU's counsel to consent to Nyre's cooperation. His institution — the Roman Catholic Archdiocese of Newark — published the October 15, 2024 fraud advisory on rcan.org directing parishioners to report the cardinaltobin journalist to local law enforcement on a false fraud predicate: the claim that the emails solicited money. No money was ever solicited. The RCAN advisory ran for seven months after the Bergen County grand jury subpoena it was designed to justify was issued. Tobin is the thirteenth. The most poetic number for the King.</p>
              <div className="egg-quote">
                "The Archdiocese of Newark has been made aware of an email account impersonating Cardinal Joseph W. Tobin, C.Ss.R. Please be advised that Cardinal Tobin and the Archdiocese will never request personal information or money via unsolicited emails… please report it to your local law enforcement department."
                <span className="egg-quote-attr">— RCAN Advisory, rcan.org, October 15, 2024 — published 36 days before the Bergen County grand jury subpoena. Every factual assertion is false as applied to the cardinaltobin emails.</span>
              </div>
              <div className="egg-quote">
                "I have been troubled by these matters… I am writing to request that the Board of Trustees move to safeguard and restore our institutional integrity… I cannot allow Regents who bully/harass staff to remain. I cannot allow a Regent with pending allegations to hinder the process."
                <span className="egg-quote-attr">— Kevin Flood, letter to Cardinal Tobin, December 11, 2023. The Cardinal received this letter. He did not act on it independently of the network that produced the conduct it described.</span>
              </div>
              <div className="egg-quote">
                "All the King's horses and all the King's men cannot put Humpty together again."
                <span className="egg-quote-attr">— L. Frank Baum, Mother Goose in Prose, 1897. The Latham Report production is ordered for May 18, 2026. The California hearing is May 28, 2026.</span>
              </div>
            </div>
          </div>

          <div className="ornament">✦ ✦ ✦</div>

          {/* CODA */}
          <span className="chapter-head">Coda: And Thus Did Humpty Dumpty Repay the Kindness</span>

          <p className="baum">
            <em>"Thus did Humpty Dumpty, even in his death, repay the kindness of the fair girl who had shown him such sights as an egg seldom sees."</em>
          </p>

          <div className="forensic">
            The Perry Law Report, even in the form in which it was published — crushed, unredacted, spread across the white gravel of the public record — contained the evidence that breaks its own conclusion. Footnote 10. Footnote 11. The summer 2021 harassment report. The hands on shoulders. The eyewitness who corroborated the physical contact. The investigator who found it, footnoted it, declined to engage with it, and concluded no evidence. The institution that commissioned it, distributed it to the accused, and used it to occupy the public record before the May 18 Latham Report production. The document repays its own kindness. The document is the evidence that it is not what it claims to be. That is what eggs do, even in their death, when the King's men have laid them where the King needed them.
          </div>

          <div className="riddle-answer">
            <p>
              The cover-up is always the evidence of the cover-up.<br />
              The Perry Law Report's own footnotes are its own refutation.<br />
              The Scrivo declaration's own prior letter is its own contradiction.<br />
              The RCAN advisory's own text is its own proof of fabrication.<br />
              The grand jury subpoena's own return date is three days after Scrivo already knew the answer.<br /><br />
              Humpty Dumpty was an egg.<br />
              Why did they not think of that before.
            </p>
          </div>

          {/* CONCLUSION BOX */}
          <div className="conclusion">
            <div className="conclusion-crimson">
              she found it. she footnoted it.<br />
              she declined to engage with it.<br />
              she concluded no evidence.<br />
              the witnesses understood the goal and direction.<br /><br />
              all the king's horses and all the king's men<br />
              cannot put humpty together again.
            </div>
            <div className="conclusion-fine">
              Latham Report Production Ordered: May 18, 2026 &nbsp;|&nbsp; California Hearing: May 28, 2026
            </div>
          </div>

          <span className="fine" style={{marginTop: "48px"}}>
            After Baum, L. Frank. "Humpty Dumpty." Mother Goose in Prose. Chicago: Way & Williams, 1897.<br />
            All Easter egg content derived from primary source documents. Sodom Hall // Easter 2026.
          </span>

        </div>{/* /narrative */}

        {/* RETURN LINK */}
        <div className="mt-16 text-center">
            <Link href="/easter">
                <a className="inline-flex items-center gap-3 text-[10px] font-courier text-zinc-500 uppercase tracking-[0.4em] hover:text-[#c0392b] transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Exit Case Study
                </a>
            </Link>
        </div>

      </div>{/* /book */}

      <div className={`all-found-banner ${foundEggs.size === totalEggs ? 'open' : ''}`} id="allFoundBanner">
        ✦ &nbsp; All Thirteen Easter Eggs Found &nbsp; — &nbsp; Cannot Put Humpty Together Again &nbsp; ✦
      </div>

    </div>
  );
}
