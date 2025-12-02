import { Streamdown } from 'streamdown';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Search as SearchIcon } from 'lucide-react';
import { SocialShare } from '@/components/SocialShare';
import { PerryLawTimeline } from '@/components/PerryLawTimeline';
import { EvidenceCard } from '@/components/EvidenceCard';
import { Search } from '@/components/Search';
import Citation from '@/components/Citation';
import NetworkDiagram from '@/components/NetworkDiagram';

// Collapsible Section Component
function CollapsibleSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-8 border-l-4 border-red-600 pl-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xl font-bold mb-4 hover:text-red-500 transition-colors w-full text-left"
      >
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        {title}
      </button>
      {isOpen && <div className="prose prose-invert prose-lg max-w-none">{children}</div>}
    </div>
  );
}

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}
      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto">
          🚨 BREAKING: Judge Orders Release of Hidden Seton Hall Reports — The Vault Opens November 2025
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-gradient-to-b from-gray-900 to-black text-white py-12 border-b-4 border-red-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center gap-4 mb-4">
            <a href="/documents" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">Documents</a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-semibold">About</a>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              <SearchIcon className="w-4 h-4" />
              <span className="text-sm font-semibold">Search</span>
            </button>
          </div>
          <div className="text-center mb-6">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">SPECIAL INVESTIGATION</p>
            <h1 className="text-7xl font-bold mb-4 tracking-tight">SODOM HALL</h1>
            <h2 className="text-3xl mb-6 text-gray-300 font-light">The Cathedral of Documents</h2>
            <p className="text-lg italic text-gray-400 max-w-3xl mx-auto mb-8">
              How Seton Hall University and NJ's Catholic Political Elite Protected Sexual Predators for Decades
            </p>
            <div className="flex justify-center">
              <SocialShare />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-black text-white">
        
        {/* Hero Section with Millstone */}
        <section 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/70"
          style={{ backgroundImage: 'url(/assets/millstone/vintage_millstone.jpg)' }}
        >
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="prose prose-invert prose-xl max-w-none">
              <blockquote className="border-l-4 border-red-600 pl-8 italic text-2xl mb-12 bg-black/80 p-8 rounded">
                "It were better for him that a millstone were hanged about his neck, and he cast into the sea, than that he should offend one of these little ones."
                <footer className="text-gray-400 mt-4 text-lg">— Luke 17:2</footer>
              </blockquote>

              <Streamdown>{`
In the Gospel of Matthew, Christ warns those who would harm children: better to have a millstone tied around your neck and be cast into the sea.

For decades, a different kind of stone has been sinking — not into water, but into the institutional memory of the Roman Catholic Church and New Jersey's political establishment.

This is the story of that stone, and the men who tried to hold it underwater.

**For the victims:**

Kim Capadona • Donna McMonagle • Lara McKeever and her sisters • TM • The innocent young boys of Delbarton • The seminarians from Immaculate Conception and St. Andrew's • The seminarians McCarrick called his "nephews" • Mark Crawford and the SNAP survivors • The 450 plaintiffs in Judge Benjamin's case • Joe and Kelli Nyre who demanded truth • Those still silenced by fear • Those denied justice • The children betrayed • For truth still emerging
`}</Streamdown>
            </div>
          </div>
        </section>

        {/* Act VIII - THE VAULT OPENS (BREAKING NEWS) */}
        <section 
          id="act-viii" 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/80"
          style={{ backgroundImage: 'url(/assets/vault/archive_storage.jpg)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg border-4 border-red-600">
              <h2 className="text-6xl font-bold mb-4 text-red-500">Act VIII</h2>
              <h3 className="text-5xl font-bold mb-4">The Vault Opens</h3>
              <p className="text-2xl text-gray-400 mb-12">November 12, 2025</p>

              <div className="prose prose-invert prose-xl max-w-none mb-12">
                <Streamdown>{`
On November 12, 2025, Judge Avion Benjamin ordered the release of two sealed investigations—Latham & Watkins and Gibbons—plus 20,500 pages of evidence Seton Hall buried for six years.

**The vault is opening.**
`}</Streamdown>
              </div>

              <CollapsibleSection title="Breaking News Coverage" defaultOpen={true}>
                <Streamdown>{`
On November 17, Judge Benjamin's ruling made national headlines. The NY Post and Politico both covered the story:

**Key quotes from coverage:**

**Judge Benjamin:** "There is a legitimate need for the evidence. The evidence is material and relevant."

**Mark Crawford (SNAP NJ):** "For far too long, survivors and the public have been denied access to information that is essential for truth, accountability, and healing."

**John Baldante (Attorney for Survivors):** "Survivors are entitled to know what this investigation revealed and what, if anything, Seton Hall did to protect children."

**Read the full coverage:**
- [NY Post: "Seton Hall sex abuse report ordered to be released by judge"](https://nypost.com/2025/11/17/us-news/seton-hall-sex-abuse-report-ordered-to-be-released-by-judge/) (Peter Senzamici)
- [Politico: "Seton Hall must turn over clergy abuse documents, judge says"](https://www.politico.com/news/2025/11/17/seton-hall-clergy-abuse-documents-00654168) (Dustin Racioppi)
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="The Order & Timeline">
                <Streamdown>{`
Judge Benjamin's ruling is surgical and devastating. She reviewed 20,500 pages of documents in camera—meaning she personally examined every page that Seton Hall claimed was privileged.

**Timeline of Exposure:**

- **November 26, 2025**: Search terms finalized
- **Late November 2025**: Document production begins (Seton Hall will appeal and lose, delaying by ~30 days)
- **January 2026**: First major revelations as documents become public
- **February-May 2026**: Depositions under oath (Tobin, Reilly, Lorenzo, Marino)
- **May 18, 2026**: Discovery deadline—all evidence must be disclosed
- **Summer 2026**: Criminal referrals, federal investigations, media firestorm

The appeal will fail. The documents will flow. The truth will emerge.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="How the Cover-Up Died">
                <Streamdown>{`
In her Statement of Reasons, Judge Benjamin systematically demolished every privilege claim:

### 1. The Fatal Disclaimer

Latham & Watkins explicitly stated in their report: **"the University has never been a Latham client."**

You cannot claim attorney-client privilege without a client relationship. This alone destroys Seton Hall's primary defense.

### 2. The Kozloz Test

Even if privilege existed, New Jersey law allows it to be pierced when three conditions are met:

1. **The party seeking discovery has a substantial need** → The survivors need this evidence
2. **The materials are material and relevant** → These documents are the core evidence
3. **No other source exists** → Seton Hall has buried this for six years

All three prongs satisfied. Privilege pierced.

### 3. Pre-Existing Documents Are Never Privileged

Judge Benjamin found **thousands of pages** of documents that existed before the investigation:

- Employment files for Reilly, Lorenzo, and the other ten
- Seminary policies on abuse reporting
- The grievance policy logbook (before and after erasure)
- Email chains between administrators

Black-letter law in New Jersey: **you cannot make existing documents privileged by giving them to your lawyer.**

### 4. Why the Appeal Will Fail

1. **The disclaimer is fatal** — Latham said SHU wasn't their client
2. **The Kozloz test is satisfied** — All three prongs met
3. **Pre-existing documents are never privileged** — Settled law
4. **Judge Benjamin reviewed everything** — She knows exactly what she's ordering

The appeal will delay by ~30 days. But it will not stop the truth.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="What the Documents Will Reveal" defaultOpen={true}>
                <Streamdown>{`
### The Dirty Dozen

The Latham Report names **twelve clergymen** who enabled or concealed abuse. For six years, Seton Hall has hidden their identities.

**Who are the twelve?**

We know two names:
- **Monsignor Joseph Reilly** (Seminary Rector, now SHU President)
- One other whose identity remains sealed

**Where are they now?**

This is the question that should terrify every diocese in America. When the twelve names are revealed, we will learn which parishes, schools, and dioceses are unknowingly harboring men who enabled predators.

### The Thirteenth Name: Cardinal Tobin

The most shocking revelation is in the **Gibbons Report:**

**According to sources familiar with the investigation, Cardinal Joseph Tobin's level of cooperation with investigators became a point of concern.**

Seton Hall enforced a cooperation standard through explicit termination threats based on the vague "Cooperation" clause (Policy Against Sexual Misconduct, Section IV.D). The Board fired Teresina DeAlmeida for refusing to cooperate. But when it came to the Cardinal?

### Everyone Knew the Cardinal Was Compromised

The documents will reveal something even more damning: **Board Risk Committee minutes proving that everyone in leadership knew the Cardinal was compromised.**

The Board of Regents discussed the question explicitly: If the Cardinal is caught, do we go adverse to the Archdiocese of Newark?

Their answer: **Yes.**

They knew. They knew Tobin was vulnerable. They knew he could be exposed. And they planned for it.

### Marino's Leverage

How did this happen? How did a university Board Chair secure a Cardinal's support despite the Cardinal's knowledge of institutional failures?

The answer lies in the institutional dynamics and the power of legal counsel. Marino, as Board Chair, had significant influence over university decisions that affected the Archdiocese's relationship with Seton Hall.

Silence.

### The Automatic Termination Hypocrisy

**The Standard:** Failure to cooperate = removal from positions

Seton Hall enforced this standard through explicit termination threats based on a broad interpretation of the university's vague "Cooperation" clause (Policy Against Sexual Misconduct, Section IV.D), despite the fact that the Grievance Procedure explicitly prohibits compelling witnesses to participate.

**The Enforcement:**

- **Teresina DeAlmeida**, a university employee, refused to sit for investigators. She was fired.
- **Monsignor Reilly** received two termination threat letters (November: warning to cooperate; February: acknowledging he complied). He appeared for investigators.
- **The twelve clergymen** named in the Latham Report for enabling or concealing abuse faced removal from their positions.

**The Exception:**

- **Cardinal Tobin's** cooperation became a concern. He faced no consequences.

The subordinate understood she was subject to the rules. The subordinates understood they were subject to the rules. The Cardinal believed he was above them.

### The Irony of Counsel

Here's the devastating irony: **The same RCAN (Roman Catholic Archdiocese of Newark) lawyers who advised Reilly to resist, then comply, were also the lawyers advising Tobin.**

They told Reilly: "You must cooperate or face automatic termination."

They told Tobin: "You can refuse. There will be no consequences."

The same legal team. The same institutional protection network. Different rules for different ranks.

This wasn't just hypocrisy—it was coordinated institutional strategy to protect the powerful while sacrificing the expendable.

### The Policy Contradiction

Seton Hall's enforcement of cooperation requirements was based on a fundamental contradiction in its own policies.

**The Policy Against Sexual Misconduct (Section IV.D)** contains a vague "Cooperation" clause:

> "All members of the University community have an obligation to cooperate in achieving the University's goal of an environment free of sexual harassment, sexual misconduct, domestic violence, dating violence, stalking, and retaliation."

### 20,500 Pages of Evidence

**What's NOT Protected:**
- The Latham Report (except legal conclusions)
- Employment files for all twelve clergymen
- Emails between SHU administrators
- Pre-existing documents (policies, grievance policy records)
- Third-party communications

**What IS Protected (Very Little):**
- Emails with BOTH Gibbons AND SHU on the chain
- Latham's legal advice and conclusions

The vault isn't just opening. It's being demolished.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="The Disinfectant of Sunlight">
                <Streamdown>{`
Justice Louis Brandeis wrote: "Sunlight is said to be the best of disinfectants."

For six years, Seton Hall has operated in darkness. The Board of Regents met in secret. The Latham Report was locked in a vault. The names were hidden. The evidence was buried.

On November 12, 2025, Judge Benjamin turned on the lights.

The documents are coming. The depositions are coming. The truth is coming.

For the survivors who have waited six years for justice: **vindication is coming.**

For those who enabled predators and then hid behind privilege claims: **accountability is coming.**

The vault is opening. The millstone is rising. And nothing can stop it now.

---

*Note: Seton Hall will appeal this order. The appeal will delay document production by approximately 30 days but will not prevent disclosure.*
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="A Plea to Judge Benjamin: Sanction Tom Scrivo">
                <Streamdown>{`
## The Discovery Abuse Must Be Punished

Your Honor, the conduct of Thomas Scrivo in this case demands sanctions under New Jersey Court Rules.

### The Double Crime

Mr. Scrivo and his co-counsel engaged in a calculated scheme of discovery abuse:

**Crime One: Hiding the Latham Report**

For six years, Seton Hall concealed the Latham Report as if it never existed. When survivors sought discovery, Scrivo's team:
- Failed to disclose the report's existence
- Claimed attorney-client privilege when finally forced to acknowledge it
- Fought tooth and nail to prevent its production

This was not negligence. This was **planned, deliberate concealment**.

**Crime Two: Suing Joe Nyre for "Leaking" It

Simultaneously, Mr. Scrivo's firm sued whistleblower Joe Nyre for allegedly disclosing information from that same Latham Report.

Let that sink in: **They claimed the report was privileged and couldn't be produced, while simultaneously suing someone for disclosing it.**

This is an admission. By suing Nyre for "leaking" the Latham Report, Scrivo admitted:
1. The report existed (contradicting their concealment)
2. The information was disclosed (contradicting their privilege claims)
3. They knew what was in it (contradicting their claims of ignorance)

You cannot have it both ways. You cannot claim something is privileged AND sue someone for disclosing it. That's not legal strategy—that's fraud on the court.

### New Jersey Precedent for Sanctions

Under **R. 1:4-8** and **R. 4:23**, New Jersey courts have broad authority to sanction discovery abuse, including:

**Monetary sanctions** for willful failure to comply with discovery obligations (*Abtrax Pharms., Inc. v. Elkins-Sinn, Inc.*, 139 N.J. 499 (1995))

**Adverse inferences** when a party destroys or conceals evidence (*Rosenblit v. Zimmerman*, 166 N.J. 391 (2001))

**Dismissal or default** for egregious discovery violations (*Abouzahr v. Matera Concrete Prods., Inc.*, 303 N.J. Super. 134 (App. Div. 1997))

**Attorney fee awards** against counsel personally when discovery abuse is willful and in bad faith (*Pressler & Verniero, Current N.J. Court Rules*)

### Bad Faith Litigation

The lawsuit against Joe Nyre was not just discovery abuse—it was **bad faith litigation** designed to intimidate a whistleblower and chill future disclosures.

New Jersey recognizes that abuse of process claims lie when legal proceedings are used for an improper purpose (*LoBiondo v. Schwartz*, 199 N.J. 62 (2009)).

Suing a whistleblower for disclosing the very documents you're hiding in discovery is textbook abuse of process.

### The Sanction Must Fit the Crime

Your Honor, Tom Scrivo is not just any lawyer. He's:
- Former Chief Counsel to Governor Chris Christie
- Chair of the New Jersey Economic Development Authority  
- Partner at a prominent New Jersey law firm
- A graduate of Seton Hall Law School

He knew better. He knew the rules. He violated them anyway.

The sanction must be:
1. **Monetary** — Scrivo and his firm should pay the survivors' attorney fees for all discovery motions related to the Latham Report
2. **Professional** — A referral to the Office of Attorney Ethics for investigation of his conduct
3. **Evidentiary** — An adverse inference that the concealed documents contain evidence of Seton Hall's knowledge and complicity

### For the Record

Tom Scrivo is a creep. Not because of his legal tactics—though those are reprehensible—but because he used the law as a weapon against abuse survivors.

He hid evidence of predator-enablers. He sued a whistleblower for telling the truth. He turned the legal system into a tool of institutional oppression.

That is not advocacy. That is betrayal of the profession.

Your Honor, you have the power to send a message: **Discovery abuse in cases involving child sexual abuse will not be tolerated.**

Sanction Tom Scrivo. Make it hurt. Make it public. Make it a warning to every lawyer who thinks they can hide evidence of abuse behind privilege claims while simultaneously weaponizing the courts against survivors.

Justice demands it.
`}</Streamdown>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Act I - THE VAULT */}
        <section 
          id="act-i" 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/80"
          style={{ backgroundImage: 'url(/assets/symbols/scales_justice_dark.jpg)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg">
              <h2 className="text-6xl font-bold mb-4 text-red-500">Act I</h2>
              <h3 className="text-5xl font-bold mb-4">The Vault</h3>
              <p className="text-2xl text-gray-400 mb-12">August 27, 2019</p>

              <div className="prose prose-invert prose-xl max-w-none mb-8">
                <Streamdown>{`
In a closed executive session, the Board of Regents for Seton Hall University receives the findings of the Latham Report. Thirty-five regents are present. They hear a list of twelve priests named for enabling or concealing abuse.

Among the twelve names: **Monsignor Joseph Reilly**, the powerful seminary rector.
`}</Streamdown>
              </div>

              <CollapsibleSection title="In the Room: The Architects">
                <Streamdown>{`
**Kevin Marino**

Chair of the Board of Regents. The abusive orchestrator. Center of Chris Christie's Seton Hall Law School legal cabal. Criminal defense attorney who represents New Jersey's most powerful: George Norcross, Bill Stepien (Bridgegate). The man who architected the gaslighting of the century—getting the New York Times to rewrite history based on a sham investigation.

**Tom Scrivo**

Seton Hall Law School graduate—"the best in New Jersey," just ask Tony Soprano. Chris Christie's Chief Counsel (2015-2017), Chair of NJ Economic Development Authority. Partner at O'Toole Scrivo. The institutional insider who designs the communications plan to bury the news.

**Cardinal Joseph Tobin**

Archbishop of Newark. The ultimate decider.

The room waits. Thirty-five regents have just heard the devastating findings. Twelve priests named. Reilly among them.

Marino speaks first:

> "We've been through difficult situations before. The key is unity and discretion. Trust me—I know how to manage these matters. The Cardinal and I are aligned."
> 
> — Kevin Marino

The room relaxes. Marino's tone is calm, measured, authoritative. No drama. No panic. Just quiet confidence. If Marino says it's handled, it's handled. If the Cardinal is aligned, there's nothing to worry about.

**The Inner Circle**

But five people in that room know something the other thirty don't:

- **Kevin Marino** (Board Chair)
- **Tom Scrivo** (lawyer/strategist)
- **Joseph LaSala** (task force chair)
- **Patrick Murray**
- **Bishop James Checchio**

They're on the Board leadership. They're on the response task force. And they've seen something the others haven't: **Cardinal Tobin's testimony is absent from the Latham Report.**

Why? Because Tobin **refused to sit with the Latham investigators**. On advice of his counsel—the same RCAN lawyers who advised Reilly.

The Gibbons Report documents this refusal. The inner circle knows what it means: Tobin is compromised. He's been protecting the network. And now he needs their protection.

**This is leverage.** This is control. And they know exactly what needs to be done.

The other thirty regents? They're in the dark. They don't know about the Gibbons material. They don't know about questions regarding Tobin's cooperation. They trust Marino. They trust the Cardinal.

**The inner circle is already planning something far more sophisticated than a simple cover-up. They're planning a controlled demolition of the truth.**

The vault door closes. The secrets stay buried. For now.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="Three Things Got Done at the Meeting">
                <Streamdown>{`
**1. Latham attorneys read the verdicts aloud**

The Latham Report attorneys read the verdicts for each of the twelve clergymen. One by one, renditions of the crimes each man committed.

**2. Unanimous vote to accept and enforce the Responsive Action Plan**

The Board unanimously voted to accept the plan requiring all the men to be removed from the Board and let go from their jobs. They could no longer serve in leadership positions.

**3. Regents agreed on the communications plan concocted by Tom Scrivo**

"Bury the news." Completely ignore the twelve clergymen and only announce that McCarrick was guilty. Hope no one is paying attention. The material went into a Vault or SCIF "Secured Confidential Information Facility" where regents could sign in and review. This lasted for two weeks in September. Then the letters went out to the punished 12 clergymen, amid rancor and complaints of unfairness.
`}</Streamdown>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Navigation to Other Acts */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold mb-12 text-center">The Complete Investigation</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="#act-ii" className="block p-6 bg-black border-2 border-gray-700 hover:border-red-600 transition-colors rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-red-500">Act II</h3>
                <p className="text-xl mb-2">The Labyrinth</p>
                <p className="text-gray-400">How the McCarrick network was built (1987-2020)</p>
              </a>

              <a href="#act-iii" className="block p-6 bg-black border-2 border-gray-700 hover:border-red-600 transition-colors rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-red-500">Act III</h3>
                <p className="text-xl mb-2">The Concealment</p>
                <p className="text-gray-400">The network of silence (2020-2023)</p>
              </a>

              <a href="#act-iv" className="block p-6 bg-black border-2 border-gray-700 hover:border-red-600 transition-colors rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-red-500">Act IV</h3>
                <p className="text-xl mb-2">The Courtroom</p>
                <p className="text-gray-400">Survivors, judges, and the reckoning (2023-2025)</p>
              </a>

              <a href="#act-v" className="block p-6 bg-black border-2 border-gray-700 hover:border-red-600 transition-colors rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-red-500">Act V</h3>
                <p className="text-xl mb-2">Rome Knew</p>
                <p className="text-gray-400">The Vatican connection (2020-2025)</p>
              </a>

              <a href="#act-vi" className="block p-6 bg-black border-2 border-gray-700 hover:border-red-600 transition-colors rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-red-500">Act VI</h3>
                <p className="text-xl mb-2">The Witch of En-Dor</p>
                <p className="text-gray-400">The prophecy and the sword (2024-2025)</p>
              </a>

              <a href="#act-vii" className="block p-6 bg-black border-2 border-gray-700 hover:border-red-600 transition-colors rounded-lg">
                <h3 className="text-2xl font-bold mb-2 text-red-500">Act VII</h3>
                <p className="text-xl mb-2">The Succession</p>
                <p className="text-gray-400">Who inherits the cathedral? (2027)</p>
              </a>
            </div>

            <div className="mt-12 p-8 bg-black/50 border-2 border-yellow-600 rounded-lg text-center">
              <p className="text-xl mb-4">
                <strong>Note:</strong> Each Act contains detailed evidence, documents, and testimony. Click any Act above to explore the full story, or continue scrolling for the complete narrative.
              </p>
              <p className="text-gray-400">This is a cathedral of documents. You can skim the surface or descend into the archives.</p>
            </div>
          </div>
        </section>

        {/* Act II - THE LABYRINTH */}
        <section 
          id="act-ii" 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/85"
          style={{ backgroundImage: 'url(/assets/vatican/vatican_archives_shelves.jpg)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg">
              <h2 className="text-6xl font-bold mb-4 text-red-500">Act II</h2>
              <h3 className="text-5xl font-bold mb-4">The Labyrinth</h3>
              <p className="text-2xl text-gray-400 mb-12">How the Network Was Built (1987-2020)</p>

              <div className="prose prose-invert prose-xl max-w-none mb-8">
                <Streamdown>{`
In 1986, Theodore McCarrick became the Archbishop of Newark. His first act was to shape the future of his Archdiocese. In 1987, two men graduated from Seton Hall seminaries: **Joseph Reilly** and **Elias Lorenzo**. McCarrick ordained them together. McCarrick immediately placed them—like twins—sending Reilly to Seton Hall Prep and Lorenzo to Delbarton.

By 1994, just seven years after ordination, Reilly had proven his loyalty. McCarrick made him **his personal secretary**. An archbishop's secretary is always present. Always aware. As McCarrick's personal secretary during the papal nuncio investigations, Reilly was positioned to know about the abuse allegations and the 1995 papal visit preparations.

They were not just classmates; they were the foundation of a network built to protect the powerful. And Reilly was McCarrick's right hand from the very beginning.
`}</Streamdown>
              </div>

              <CollapsibleSection title="1987: The Ordination & Strategic Placement">
                <Streamdown>{`
**Monsignor Joseph Reilly**

Sent to Seton Hall Prep, the feeder school for the seminary. After 15 years at the Prep (1987-2001), he was promoted to Rector of the two Seton Hall seminaries—first St. Andrew's (2002), then Immaculate Conception.

For over two decades (2002-2024), Reilly oversaw the seminaries' dramatic reduction in size and influence. What was once a powerhouse of priestly formation withered under his leadership.

**Bishop Elias Lorenzo**

Sent to the elite Delbarton School, a Benedictine monastery. Here, he would learn the ways of power, privilege, and protection among New Jersey's elite.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title='"Uncle Ted": The McCarrick System'>
                <Streamdown>{`
Before there was a Latham Report, before there was a Gibbons investigation, before Tobin arrived in Newark—there was Theodore McCarrick. The architect. The predator. The man whose pattern of abuse created the template for institutional protection that persists today.

**The New York Times, July 16, 2018:**

"He Preyed on Men Who Wanted to Be Priests. Then He Became a Cardinal."

By Laurie Goodstein and Sharon Otterman | [Read the full investigation](https://www.nytimes.com/2018/07/16/us/cardinal-mccarrick-abuse-priest.html?unlocked_article_code=1.1k8.DwkP.W_W9dkmD2eL8&smid=url-share)

### The Beach House at Sea Girt

As Bishop of Metuchen in the 1980s, McCarrick had the diocese purchase a small beach house in Sea Girt, New Jersey. He would invite select seminarians—his "nephews"—for overnight trips. Four or five young men at a time. Pizza and beers. Then lights out.

McCarrick would assign sleeping arrangements. One seminarian would share his room. One bed. The pattern was always the same: shoulder rubs that became unwanted touching. Manipulation disguised as mentorship. Abuse cloaked in spiritual authority.

**Reilly's Sea Girt Lie**

Years later, when questioned about the Sea Girt beach house, Monsignor Joseph Reilly—McCarrick's personal secretary from 1994—admitted he visited the beach house.

**Once.**

Just once. That's his story.

Think about that. An archbishop's secretary is **always present** with the archbishop. If McCarrick was taking seminarians to Sea Girt regularly throughout the 1980s and 1990s, his secretary knew. His secretary was there. His secretary helped arrange it.

The "once" claim isn't just a lie. It's an insult to every victim. It's gaslighting at its most brazen.

Reilly wasn't an innocent bystander. He was McCarrick's right hand. And now we're supposed to believe he's a "good guy" who just happened to be in the wrong place at the wrong time—once?

**Bullshit.**

### The "Adult" Lie

Here's what the church wants you to believe: McCarrick "primarily abused adults"—seminarians in their 20s, young priests seeking advancement. This distinction became his shield.

**But it's a lie. They were abusing children the whole time.**

Before Vatican II reforms in the 1960s, boys entered New Jersey seminaries at ages 12-14. Immaculate Conception Seminary—where Reilly would later become Rector—accepted preteens starting in 1860.

Even after reforms shifted entry ages to 18+, McCarrick had access to the feeder schools: Seton Hall Prep and Delbarton—both filled with teenage boys aspiring to priesthood.

McCarrick called his victims his "nephews" because they were boys he had to explain being in close proximity to. He allegedly "adopted" a family with the surname McCarrick to create this ruse.

When complaints surfaced, the church deployed the "adult" narrative: "These were adults, not children. Different rules apply."

**Bullshit.** They were abusing children, then changing the definition to protect themselves.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="Decades of Warnings, Decades of Silence">
                <Streamdown>{`
**1990s:** Several anonymous letters alluding to minor abuse received by cardinals and the nunciature in Washington. The Vatican Report (2020) admits these existed but claims they were "regrettably considered to be not credible."

**1994:** First documented complaint to Bishop of Metuchen about McCarrick's abuse

**1995:** Pope John Paul II visits Newark—McCarrick hosts, no consequences

**2000:** Fr. Boniface Ramsey warns Vatican before McCarrick's appointment to Washington—ignored

**2000:** McCarrick promoted to Archbishop of Washington, made Cardinal three months later

**2005:** $80,000 settlement paid to Robert Ciolek for abuse—McCarrick remains in power

**2007:** $100,000 settlement paid to second priest—still no consequences

**2008:** Richard Sipe writes to Pope Benedict XVI detailing decades of abuse—no response
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="2006: The Seton Hall Apartment">
                <Streamdown>{`
Even after the settlements, even after the warnings, McCarrick's institutional protection continued. In 2006, he sought an apartment at Seton Hall University.

**Archbishop John Myers opposed it.**

<EvidenceCard
  title="Vatican Report: Page 245"
  date="April 3, 2006"
  source="Archbishop John Myers memorandum to Monsignor Robert Sheeran"
  findings={[
    "Myers opposed McCarrick's request for apartment at Seton Hall University",
    "Stated: 'I will take no responsibility for his presence on campus, especially should that become embarrassing.'",
    "Threatened: 'I will make the facts in the matter public' if McCarrick's presence became embarrassing",
    "Myers was aware of abuse concerns that would make McCarrick's presence 'embarrassing'",
    "Warning was never sent to the Nuncio or Holy See"
  ]}
  outcome="Sheeran gave McCarrick the apartment anyway. McCarrick kept it until Spring 2019 - a full year AFTER the 2018 scandal broke."
/>

Myers knew. He warned. He threatened to expose the truth.

**But Sheeran gave McCarrick the apartment anyway.**

McCarrick was assigned a small apartment in Gerety Hall, an eight-unit condominium building on the Seton Hall campus. He moved in. He stayed.

And here's the most damning part: **McCarrick kept that apartment until Spring 2019**—a full year AFTER the 2018 scandal broke, after the New York Times investigation, after he was defrocked.

Only in Spring 2019 did Seton Hall finally pack up his possessions and remove them from campus.

**The institutional protection was so deep that even after global exposure, McCarrick still had a home at Seton Hall.**

Myers' memo was never sent to the Nuncio or the Holy See. The warning stayed buried. The apartment stayed occupied. The protection network stayed intact.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="1994: Reilly's First Cover-Up">
                <Streamdown>{`
In 1994, just seven years after his ordination, Joseph Reilly was serving McCarrick as **his personal secretary**. An archbishop's secretary is always present. Always aware. Always complicit.

That year, McCarrick's sexual abuse of seminarians was known to church officials. Papal nuncios were investigating. Complaints were surfacing. The walls were closing in.

**As McCarrick's personal secretary, Reilly was aware of these investigations yet failed to report what he knew to proper authorities.**

In 1995—the very next year—Pope John Paul II visited New Jersey. McCarrick was the host. Reilly, as his secretary, helped orchestrate the visit. The papal visit was a triumph. No scandal. No consequences. McCarrick's reputation was protected, and his rise continued unchecked.

**Reilly's failure to report what he knew allowed the papal visit to proceed without scandal.**

On February 21, 2001, both Theodore McCarrick and Jorge Mario Bergoglio (later Pope Francis) knelt together in the Vatican, receiving their red birettas from Pope John Paul II. Same day. Same ring. Same rank.

Twenty-five years after protecting McCarrick, Cardinal Tobin would not just protect Reilly—he would reward him. Using the exact same playbook Reilly used to protect McCarrick, Tobin extended Reilly's contract, shielded him from consequences, and ultimately made him president of Seton Hall University in 2024.

**The cycle of protection became a cycle of promotion.**
`}</Streamdown>
              </CollapsibleSection>



              <CollapsibleSection title="2017: The Inheritance">
                <Streamdown>{`
When Cardinal Joseph Tobin was appointed Archbishop of Newark in 2017, he inherited more than just a title. He inherited McCarrick's entire network—the strategic placements, the culture of secrecy, and the skeletons in the closet.

He had a choice: dismantle the machine or become its new operator.

He chose to become its operator.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="Eight Days of Defiance (February 18-27, 2020)">
                <Streamdown>{`
**February 18, 2020**

Supplemental Notice to Monsignor Reilly:

"Reilly violated the University's grievance policies by failing to report sexual harassment allegations in 2012"

"The Responsive Action Plan recommends that the Archbishop of Newark remove you from your position as Rector"

"Cardinal Tobin has sole canonical authority to act"

**February 27, 2020 — Nine Days Later**

Pope Francis appoints Elias Lorenzo as Auxiliary Bishop of Newark.

Cardinal Tobin extends Reilly's contract by two years and offers him a sabbatical.

**This is the smoking gun.**

Eight days between the final warning and the reward. Eight days that prove the choice was deliberate. Eight days that show the network protecting itself.
`}</Streamdown>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Act III - THE CONCEALMENT */}
        <section 
          id="act-iii" 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/85"
          style={{ backgroundImage: 'url(/assets/symbols/gavel_scales.png)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg">
              <h2 className="text-6xl font-bold mb-4 text-red-500">Act III</h2>
              <h3 className="text-5xl font-bold mb-4">The Concealment</h3>
              <p className="text-2xl text-gray-400 mb-12">The Network of Silence (2020-2023)</p>

              <div className="prose prose-invert prose-xl max-w-none mb-8">
                <Streamdown>{`
After the McCarrick scandal still smoldered, Seton Hall announced its savior: Dr. Joseph E. Nyre. After a yearlong national search, the Board voted "overwhelmingly" to appoint Nyre as the University's 21st president.

What they didn't tell him—what they were already hiding—was that the same men who hired him were about to bury a report that would expose sexual harassment and institutional cover-ups at the highest levels.

The perfect president would become their perfect scapegoat.
`}</Streamdown>
              </div>

              <CollapsibleSection title="The Perfect President (August 2019)">
                <Streamdown>{`
After a yearlong national search led by Kevin Marino (Chair) and Mark Ganton (Vice Chair), the Board of Regents voted "overwhelmingly" to appoint Nyre. The praise was effusive:

**Patrick Murray (Board Chair):** "An experienced leader, a bold visionary... the perfect choice to lead Seton Hall into the highest echelon of American Catholic universities."

**Kevin Marino:** "Distinguished service... transformational higher education leadership... will help guide and propel Seton Hall to even greater national prominence."

**Cardinal Tobin:** "An excellent choice to guide Seton Hall."

Nyre's credentials were impeccable: a nationally recognized psychologist, former president of Iona College who had tripled its endowment, launched new programs, and achieved record fundraising.

**The Price Tag:**

Seton Hall made Nyre the highest-paid university president in New Jersey—more than Princeton's president. His 2020 compensation exceeded $1.7 million.

They spared no expense. They praised him to the heavens. They called him perfect.

**The Outsider:**

To the insiders—the priests, the lawyers, the Board members who had protected each other for decades—Nyre was a threat. An outsider. A reformer coming to ruin the party.

**The Room (August 2019)**

Somewhere in the formal proceedings of August 2019, a meeting took place. The details are murky, but the participants are known:

- Tom Scrivo (the lawyer)
- Kevin Marino (Board Chair)
- Mark Masharelli (Board member)
- Anthony D'Alessandro (Board member)

To Masharelli and D'Alessandro, it seemed like a routine board discussion. Formal. Procedural. Subtle.

But Scrivo and Marino understood something the others didn't. They exchanged glances. They spoke in code. They connived on a plan that only they fully grasped.

Masharelli and D'Alessandro were patsies—present but oblivious to the real agenda being set in motion.

The trap was being prepared. But the trigger wouldn't be pulled until February 2020.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="The Scapegoat (October 2019 - February 2020)">
                <Streamdown>{`
**September 2019: The Report Arrives**

After the material sat in the Vault/SCIF for two weeks in September, letters were finally sent to the twelve clergymen in October 2019. Each letter listed their crimes and their uniform punishment: removal from the Board of Regents, termination from university positions, permanent ban from leadership roles.

Cardinal Joseph Tobin was also included in the report for failing to appear before investigators. Everyone knew. But they chose to ignore it—too politically inconvenient.

**The Priest Rebellion**

The response was immediate and furious. Priests in the seminary protested. They felt the punishment was unfair, the process unjust. And they needed someone to blame.

They blamed Joe Nyre.

The outsider. The reformer. Surely he was behind this crackdown. They didn't know—or didn't want to know—that the architects were Marino, Scrivo, and Tobin.

**January 2020: Reilly's Second Letter**

Msgr. Robert Reilly, rector of Immaculate Conception Seminary, sent his second letter to the Board. The message was clear: the priests were in revolt, and Joe Nyre had to go.

Reilly was positioning himself. He wanted his contract extended. He wanted to remain in power. And he knew exactly who to blame for the chaos.

**February 2020: The Cardinal's Decision**

On February 27, 2020, Pope Francis appointed Elias Lorenzo as Auxiliary Bishop of Newark. This was the moment Cardinal Tobin had been waiting for.

With Lorenzo now a bishop, Tobin could execute his long-term plan:
- Extend Reilly's contract and position him as the next president of Seton Hall
- Groom Lorenzo as the next Archbishop of Newark
- Maintain complete ecclesiastical control over both institutions

And Joe Nyre? He was no longer needed.

**March 2020: The Coverup Decision**

**This was when the coverup truly began.** Not in August 2019 at the Board meeting—that was just Marino and Scrivo positioning themselves, assuring everyone they had it "under control."

The actual decision to protect Reilly and remove Nyre came in **March 2020**, after two critical events:
1. Lorenzo's elevation to auxiliary bishop (February 27, 2020)
2. Reilly's second task force letter demanding Nyre's removal (January 2020)

**The Ecclesiastical Purpose**

The decision wasn't just about protecting Reilly. It was about **returning a priest president to Seton Hall**. With Lorenzo now elevated to auxiliary bishop, the succession plan was clear:

**Reilly** → President of Seton Hall (returning priest president to the university)

**Lorenzo** → Archbishop of Newark (succeeding Tobin)

**Birds of a feather.** Both ordained by McCarrick in 1987. Both planted as "twins" to control the institutions. The cycle of protection becomes a cycle of promotion.

But there was one problem: **Joe Nyre**. Too much of a boy scout. Too committed to accountability. The turd in the punch bowl.

With Lorenzo elevated and Reilly demanding action, Cardinal Tobin made his choice: **protect the network, sacrifice the reformer, execute the long-term plan.**

**The Regents Subcommittee: "I Will Take Care of Joe Nyre"**

Shortly after the Cardinal's decision, a critical meeting took place:

- Joseph LaSala - Chair of the special task force
- Bishop James Checchio
- Kevin Marino - Board Chair
- Cardinal Joseph Tobin
- Tom Scrivo - The lawyer
- Patrick Murray
- Msgr. Joseph Cerny
- Jim Collins

"We don't want to fire him because then we'd owe him millions."

"Let's see if we can get him to quit."

**Kevin Marino:** "I will take care of Joe Nyre. I know how to do it."

**Early 2020: The Sidelining**

Soon after, Nyre was assigned to a new program: training priests in university administration to identify potential future priest-presidents.

It was a demotion disguised as an initiative. A way to sideline him while they prepared Lorenzo's ascension.

The trap was set. The scapegoat was chosen. The cover-up would continue.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="The Lawyers: Architects of Deceit">
                <Streamdown>{`
The cover-up required a network of lawyers willing to destroy evidence, manipulate records, and silence victims.

**Tom Scrivo**

Seton Hall Law School graduate. Christie's Chief Counsel (2015-2017), Chair of NJ Economic Development Authority. Partner at O'Toole Scrivo.

The document destroyer. Made the Latham Report disappear into a secure facility. Orchestrated the burial of the Gibbons Report. Now represents Seton Hall in their countersuit against Joe Nyre—for leaking the Latham Report. The same document Scrivo has been concealing.

**Chris Porrino**

Seton Hall Law School alumnus. Charter member of Christie's mafia. Former New Jersey Attorney General (60th AG). Previously served as Christie's Chief Counsel.

Now head of litigation at Lowenstein Sandler. Represents Kevin Marino (not Seton Hall) in matters related to the Nyre lawsuit, even though Marino is not named as a defendant.

**Angelo Stio**

Troutman Pepper attorney. Enabled the erasure of the grievance policy abuse complaint logbook in May 2023 on behalf of Kevin Marino.

This logbook documented harassment complaints against Marino and other board members. Its erasure was cited by Regent Kevin Flood in his resignation letter (Politico, Sept 2024).

**Judge Jose Linares**

Corrupt former federal judge at McCarter & English. Released confidential Perry Law Report to Kevin Marino with excuse he "also gave it to Joe Nyre."

Compromised: his father was a priest abuser.

**Kevin Marino**

Board Chair. Sexual harasser. Christie ally. The man who orchestrated the entire cover-up while being investigated for his own misconduct.

Accused of harassment by four different people: General Counsel Kim Capadona, CFO Donna McMonagle, President's wife Kelli Nyre, and another woman.

Their complaints were erased from the grievance policy logbook. Resigned mid-term at an emergency Christmas holiday Regents meeting (December 2023).

**Karen Friedman Agnifilo**

Perry Law attorney who wrote the sham report exonerating Marino. Later represented Luigi Mangione. No longer lists Perry Law on her resume.

The third law firm in six months—the others weren't "pliable" enough.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="The Perry Law Whitewash">
                <Streamdown>{`
In what may be the most audacious manipulation of the press in this entire saga, Kevin Marino orchestrated a masterclass in gaslighting—getting the New York Times itself to rewrite the narrative in his favor.

**The Setup**

Marino was under fire. The grievance policy logbook had been erased on his behalf—Angelo Stio authorized it, Jim Masharelli made it happen. Regents were resigning. Joe Nyre was blowing the whistle. The walls were closing in.

So Marino did what powerful men in New Jersey do: attack first, hire the right lawyer, and manipulate the right reporter.
`}</Streamdown>

                <div className="my-8 p-6 bg-red-50 border-l-4 border-red-600">
                  <h4 className="font-bold text-lg mb-4">Marino's Preemptive Strike: The Setonian Editorial</h4>
                  <p className="mb-4"><strong>February 16, 2024</strong> — Before the Perry Law whitewash, Marino used the student newspaper to defame Nyre.</p>
                  <p className="mb-4"><strong>Headline:</strong> "Former Regents Chair Kevin Marino's response to Nyre's lawsuit: <span className="font-bold text-red-700">Desperate and pathetic attempt will fail</span>"</p>
                  <div className="space-y-2 text-sm">
                    <p>• Calls lawsuit "rife with false and defamatory statements"</p>
                    <p>• Accuses Nyre of "gross mishandling" of law school embezzlement investigation</p>
                    <p>• Calls Kelli Nyre's harassment claims "disgraceful" and "false in every respect. That never happened, and she knows it."</p>
                    <p>• Claims he has "provided ample evidence to the EEO Office" and expects "to be fully exonerated"</p>
                    <p>• Accuses Nyre of "attempting to rehabilitate his tarnished reputation and secure another undeserved payout"</p>
                    <p>• Ends with: "I am confident that desperate and pathetic attempt will fail."</p>
                  </div>
                  <p className="mt-4"><a href="https://www.thesetonian.com/article/2024/02/marino-responds" target="_blank" className="text-red-600 hover:text-red-500 font-bold">→ Read Marino's Full Setonian Editorial</a></p>
                </div>

                <Streamdown>{`
**The Perry Law Report: A Fabricated Document**

Five months after Marino's editorial attack, Seton Hall hired Perry Law—the **third law firm in six months**—to investigate Marino's conduct. The first firm (Dechert LLP) was deemed "less than pliable." The second (a small PA firm) was "jettisoned quickly." Finally, they landed at the nascent, female-led Perry Law Group.

Perry Law assigned **Karen Friedman Agnifilo** to write the report. Former Manhattan ADA, former deputy chief of sex crimes unit. Now: defender of Luigi Mangione (accused of killing UnitedHealthcare CEO). And someone who **no longer lists Perry Law on her resume**.

Completed July 2, 2024. Released July 10, 2024.

<a href="/Perry-lawSHU.pdf" target="_blank" className="text-red-500 hover:text-red-400 font-bold">→ Read the Full Perry Law Report (PDF)</a>

**The Conclusion**

The report explicitly states it was written **"at the University's direction"** to conclude:

> "There is no evidence to support that Mr. Marino sexually harassed Mrs. Nyre, or that the University intentionally ignored or diminished any such allegations made by the Nyres."

This is not an investigation. **It's a commissioned whitewash.**

**But the Report ITSELF Contradicts This Conclusion**

The Perry Law Report claims "not a single witness corroborates the alleged instances of harassment." This is a lie. The report **ADMITS**:

1. **Regent Kevin Flood corroborates Kelli Nyre's December 6, 2022 harassment claim:**
   - Flood saw "Mrs. Nyre speaking to Mr. Marino, who appeared to be standing behind her with his hands on her shoulders"
   - This matches Kelli's account exactly
   - Perry Law buries this, pretending "no corroboration exists"

2. **Joe Nyre complained in December 2022:**
   - Flew to Florida to inform Audit Committee Chair about Marino's conduct
   - Report admits Seton Hall knew of complaints since 2022

3. **March 2023: THREE complaints filed against Marino:**
   - 3.23.2023: "intimidation and hostile work environment"
   - 3.25.2023: "hostile work environment based on gender and discrimination"
   - 3.28.2023: "toxic, abusive and hostile work environment"

4.4. **Kim Capadona complained repeatedly:**
   - November 2022, December 2022, March 2023, April 2023
   - Report dismisses these because "confidential settlement negotiation"
   - Capadona settled by insisting Marino resign as Regent

5. **Donna McMonagle complained March 2023:**
   - Verbally reported to J. Nyre about Marino harassing her
   - March 23, 2023: complained about "uncomfortable and aggressive interaction" with Marino

6. **May 2023: Logbook erasure BEFORE Perry Law investigation:**
   - Anthony Masherelli ordered complaints REMOVED from Seton Hall University Confidential Log
   - Report admits this happened

7. **June 6, 2023: Email proves SHU knew:**
   - J. Nyre emailed Capadona about announcement, noting "pending internal complaints against Chairman Marino relating to his retaliatory conduct and multiple violations of University policies"

**The report says "no evidence" while ADMITTING evidence on every page.**

<EvidenceCard
  title="Perry Law Report: Key Excerpts"
  date="July 2, 2024"
  source="Karen Friedman Agnifilo investigation commissioned by Seton Hall"
  findings={[
    "Report Conclusion: 'At the University's direction, [we] conclude there is no evidence of sexual harassment'",
    "BUT Report ADMITS: Kevin Flood saw Marino's hands on Kelli Nyre's shoulders (corroborating physical contact)",
    "BUT Report ADMITS: Kim Capadona filed complaints November 2022, December 2022, March 2023, April 2023",
    "BUT Report ADMITS: Donna McMonagle complained March 2023 about 'uncomfortable and aggressive interaction' with Marino",
    "BUT Report ADMITS: Kelli Nyre filed multiple grievance complaints (March 23, 25, 28, 2023) about 'toxic, abusive and hostile work environment'",
    "BUT Report ADMITS: June 6, 2023 email proves SHU knew about 'pending internal complaints against Chairman Marino'",
    "Report dismisses all complaints as 'confidential settlement negotiation' or because Nyres 'refused to meet' (they declined via counsel per NJ RPC 4.2)"
  ]}
  outcome="Report concludes 'no evidence' despite admitting corroborating witness, multiple complaints, and documented hostile environment. Third law firm in six months. Released illegally to Marino (the accused) by Judge Linares. Filed publicly unredacted by Porrino, outing victims. Parroted by NYT's Christopher Maag."
/>

**The Irregularities: A Crime Scene**

**1. "At the University's Direction"**

The report explicitly states it was written to reach a predetermined conclusion. Not an investigation—a whitewash.

**2. Third Firm in Six Months**

Marino's team shopped for a compliant firm. Perry Law was chosen because they would write what Marino wanted.

**3. Linares' Illegal Leak**

On July 10, 2024, former Judge **Jose Linares** allowed the confidential report—marked **"Privileged & Confidential"** and **"Attorney-Client Communication"**—to be released to:
- Kevin Marino (the accused!)
- Joe Nyre
- Plaintiffs' counsel
- SHU officials

**This is unprecedented.** Universities don't hand accused parties sensitive probes. This violates:
- Seton Hall's confidentiality code
- NJ law (N.J.S.A. 18A:6-8.1, grievance policy privacy)

**Marino, the only beneficiary, likely architected this breach.** Linares' ruling reeks of corruption—judges don't greenlight such leaks absent pressure. No precedent exists for this.

**4. Porrino's Public Filing**

Hours before the NYT article, **Chris Porrino** (Marino's lawyer, Christie's Legal Network) filed the **unredacted report** in an amicus brief, **outing Donna McMonagle and Kim Capadona by name**.

Greenlit by Linares. Reeking of illegality.

**5. Agnifilo Scrubs Her CV**

Karen Friedman Agnifilo **no longer includes Perry Law on her work history**. She knows her Perry Law work is shameful.

**Christopher Maag and the New York Times' Corrupt Collusion**

On July 11, 2024, Christopher Maag published in the New York Times:

**"Investigators Find No Evidence of Sexual Harassment in Seton Hall Case"**

<a href="https://www.nytimes.com/2024/07/11/nyregion/seton-hall-sexual-harassment-case.html" target="_blank" className="text-red-500 hover:text-red-400 font-bold">→ Read Maag's NYT Article</a>

The article parrots the Perry Law report. Presents Marino as a victim. Downplays the logbook erasure. Frames Nyre's whistleblowing as a vendetta.

**What Maag Got Wrong (or Deliberately Ignored):**

1. **"Nyres Refused to Meet"**: Shameless distortion. Nyres declined via counsel citing their February 2024 lawsuit—a standard legal move under N.J. RPC 4.2. The report admits "several attempts to contact them through their counsel," proving communication occurred. Maag spins this as stonewalling.

2. **Ignored Flood's Corroboration**: Flood's testimony—hands on shoulders—alone destroys "no evidence." Maag skipped this entirely.

3. **Swallowed the Vacation Lie**: Porrino claims "cozy Nyre-Marino bond, including fabricated Martha's Vineyard vacation." Grotesque lie. Kelli avoided Marino post-June 2021, using buffers at events. Flood's testimony confirms tension. **No vacation ever happened.** Maag gulps the lie whole.

4. **Ignored Linares' Breach**: Maag didn't question how Marino got a "secret" report when Seton Hall never releases anything. The unredacted McMonagle/Capadona outing? Zero mention.

5. **Ignored the Report's Doublespeak**: Evidence aplenty (Flood, Capadona, McMonagle), yet "no evidence" is blatant. Maag didn't read past the headline.

**The Tip-Off**

The July 11 story came on an urgent tip from Marino's team. Porrino's hotline to Maag, prepped PR—not journalism. Linares' illegal release to Marino should've sparked outrage. The NYT's silence suggests Marino's team had editorial pull—**corruption, not incompetence.**

**The Irony**

This is the same New York Times that broke the McCarrick story in 2018. The same paper whose investigative journalism by [Laurie Goodstein](https://www.nytimes.com/2018/07/16/us/cardinal-mccarrick-abuse-priest.html) exposed decades of abuse.

But in 2024, the Times became a tool of the cover-up. Because Marino knew the game: attack first (Setonian editorial), hire the right lawyer (Perry Law), produce the right report ("at the University's direction"), leak it illegally (Linares), file it publicly (Porrino), and feed it to the right reporter (Maag).

**The gaslighting of the century.**

This is how institutional power works: not by hiding the truth, but by rewriting it.
`}</Streamdown>

                <PerryLawTimeline />
              </CollapsibleSection>

              <CollapsibleSection title="The Christie Connection: Christie's Legal Network">
                <Streamdown>{`
Among the Regents sat Mary Pat Christie, wife of former New Jersey Governor Chris Christie. Her presence symbolized the deep political protection surrounding Seton Hall's leadership.

Chris Christie himself is a central figure in what can only be called **Christie's Legal Network:**

- **Chris Porrino** — Former NJ Attorney General, now head of litigation at Lowenstein Sandler
- **Tom Scrivo** — Christie's Chief Counsel (2015-2017), Chair of NJ EDA, Partner at O'Toole Scrivo
- **Kevin Marino** — Christie ally and Board Chair who led the cover-up

The same network that ran New Jersey's government became the architects of Seton Hall's concealment.
`}
                </Streamdown>
                
                <NetworkDiagram />
                
                <Streamdown>{`
**Mary Pat Christie: Recruited, Resigned, Regretted**

In November 2022, Mary Pat Christie was announced as a new member of the Board of Regents. She was recruited by Kevin Marino, a social friend and Christie ally.

Regents serve three-year terms beginning July 1. But Mary Pat Christie is no longer listed as a member. She resigned abruptly, without explanation, after serving one full term (July 2022 - July 2025)—walking away from the scandal as it intensified.

Her resignation drew her husband back into the mess. In July 2025, Chris Christie publicly defended Reilly in a [Politico article](https://subscriber.politicopro.com/article/2025/07/chris-christie-backs-seton-hall-president-amid-clergy-abuse-investigation-00465310):

> "I think that these things that have been reported on have been, in my opinion, completely mischaracterized and mischaracterized him. I think the university is partly at fault for that for a lack of transparency."
> 
> "Nonetheless, I support the president. I think he's a good man. And I suspect he'll be there for quite some time."
> 
> — Chris Christie, July 21, 2025 (Politico)

**The Denial Chorus: Christie and D'Alessandro**

Both men used nearly identical language to dismiss the Politico reporting:

**Chris Christie:** "completely mischaracterized and mischaracterized him"

**Hank D'Alessandro:** "falsely and unfairly portrayed"

Neither man addressed the substance of the allegations: that Reilly knew about McCarrick's abuse and failed to report it.

Mary Pat walked away. Chris stayed to defend the indefensible. The Christie name is now permanently tied to the cover-up.
`}</Streamdown>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Act IV - THE COURTROOM */}
        <section 
          id="act-iv" 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/85"
          style={{ backgroundImage: 'url(/assets/symbols/scales_justice_light.jpg)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg">
              <h2 className="text-6xl font-bold mb-4 text-red-500">Act IV</h2>
              <h3 className="text-5xl font-bold mb-4">The Courtroom</h3>
              <p className="text-2xl text-gray-400 mb-12">2023-2025 — The Reckoning</p>

              <div className="prose prose-invert prose-xl max-w-none mb-8">
                <Streamdown>{`
While institutions chose silence, individuals chose courage. Some spoke publicly. Others remain anonymous, unable to believe their eyes that someone is finally coming for these evil men who cloak themselves in righteousness and loyalty to the order.

Your pain won't disappear, but perhaps you'll find an errant smile or two when you think of these days.
`}</Streamdown>
              </div>

              <CollapsibleSection title="The Survivors">
                <Streamdown>{`
**Dr. Joseph Nyre**

President who commissioned the Latham Report and sent it to the Vatican and NJ Attorney General. Faced retaliation, lost health insurance, filed whistleblower lawsuit.

**Kelli Nyre**

Survived Kevin Marino's sexual harassment. Stood with her husband against coordinated retaliation from the university and Archdiocese.

**Lara McKeever**

Confronted Cardinal Tobin with prophetic truth about his failures and the institutional cover-up.

**Mark Crawford**

Survivor and advocate who refused to let the truth be buried.

**Bob Hoatson**

Tireless advocate for survivors, speaking truth to power for decades.

**SNAP**

Survivors Network of those Abused by Priests—the organization that refuses to let the Church forget.

**TM**

Anonymous survivor whose story matters, whose courage counts.

**All the Anonymous Survivors**

Those who cannot yet speak publicly but who witness this moment with hope. Someone is finally coming for these evil men.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="February 2025: The Denial">
                <Streamdown>{`
As pressure mounted, the Chairman of the Board of Regents, Hank D'Alessandro, sent a university-wide email. In it, he made a stunning and false claim: Monsignor Reilly had "never been subject to formal review."

> "We had full access to every relevant piece of information. We knew the full contents of the Latham Report and were satisfied that Monsignor Reilly had demonstrated maturity, service, and readiness to lead."

This was a calculated deception. D'Alessandro and the board had been briefed on the Latham Report in 2019. They knew Reilly was not only named, but was a central figure.

By sending this email, D'Alessandro may have committed **wire fraud**, using electronic communications to disseminate materially false information in furtherance of the cover-up.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="The Judges">
                <Streamdown>{`
**Judge Avion Benjamin**

In a landmark March 2025 ruling, she ordered Seton Hall to produce the full, unredacted Latham Report for review, piercing the veil of secrecy.

On November 12, 2025, she issued the order that ended the six-year cover-up: **The vault must open.**

**Judge Jose Linares**

The corrupt former federal judge who works for McCarter & English. Linares released the confidential Perry Law Report to Kevin Marino with the excuse that he "also gave it to Joe Nyre"—weaponizing transparency to protect the powerful.

Linares is compromised: his father was a priest abuser, a fact he desperately wants to keep hidden.

**Judge Cynthia Santomauro**

The Chancery Court judge who should not have taken the case—there's already litigation pending. She is being blatantly manipulated by Tom Scrivo, who helped her get appointed as a judge.

Scrivo employs her star former clerk, [Gianna D'Onofrio](https://www.oslaw.com/attorneys/gianna-d-onofrio), at O'Toole Scrivo.

Blatant corruption. The judge is compromised by the very lawyer orchestrating the cover-up.
`}</Streamdown>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Act V - ROME KNEW */}
        <section 
          id="act-v" 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/85"
          style={{ backgroundImage: 'url(/assets/vatican/st_peters_interior_1.jpg)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg">
              <h2 className="text-6xl font-bold mb-4 text-red-500">Act V</h2>
              <h3 className="text-5xl font-bold mb-4">Rome Knew</h3>
              <p className="text-2xl text-gray-400 mb-12">2020-2025 — The Vatican Connection</p>

              <div className="prose prose-invert prose-xl max-w-none mb-8">
                <Streamdown>{`
Joe Nyre, President of Seton Hall University, makes a decision that will change everything. He sends the Latham Report — all of it — directly to the Holy See.

"We believe you should be aware of these findings."

**From this moment forward, Rome cannot claim ignorance.**
`}</Streamdown>
              </div>

              <CollapsibleSection title="September 2019: The Letter to Rome">
                <Streamdown>{`
With those words, the Vatican receives documentation of:

→ Twelve abusers at Seton Hall seminaries
→ Decades of systematic concealment
→ Monsignor Joseph Reilly's involvement
→ The culture of protection over accountability

From this moment forward, **Rome cannot claim ignorance.**
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="November 2020: The McCarrick Report">
                <Streamdown>{`
Fourteen months after receiving the Latham Report, the Vatican releases its own investigation into Cardinal Theodore McCarrick's decades of abuse and cover-up.

**Read:** [The McCarrick Report (Vatican PDF)](https://www.vatican.va/resources/resources_rapporto-card-mccarrick_20201110_en.pdf)

**The Connection**

The Vatican's McCarrick Report draws directly from the Latham Report. The same seminaries. The same culture of concealment. The same archdiocese. The same patterns of institutional protection.

Rome knew because Joe Nyre told them. And they used that knowledge to build their own investigation.

But the McCarrick Report is silent on one crucial detail: sources familiar with the investigation say Cardinal Joseph Tobin's level of cooperation became a point of concern. His recommendation of Lorenzo to Pope Francis despite warnings. His protection of Reilly.

**Rome knew.**
**Rome used the information.**
**Rome said nothing.**
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="Bishop James Checchio: The Reward System">
                <Streamdown>{`
**Bishop James Checchio**

Member of the Regent Task Force that wrote the warning letters to Reilly and Tobin in February 2020. He knew the standard. He knew the violations. He knew Tobin defied the task force.

**November 25, 2019:** First Notice to Reilly - LaSala Committee letter signed by Checchio

**February 11, 2020:** Checchio signs task force letter - "Failure to cooperate = immediate removal"

**February 26-27, 2020:** Tobin defies the task force - Extends Reilly's contract, recommends Lorenzo (Pope Francis appoints him Feb 27)

**2025:** Pope Leo appoints Checchio as Archbishop of New Orleans

**A promotion. A reward. A message.**

The man who set the standard is promoted despite watching it be violated.

This is not ignorance. This is not oversight. **This is a reward for institutional loyalty.**

### The Reward System

Protection equals promotion. Cover-up equals career advancement.

**Monsignor Joseph Reilly**
- Protected: McCarrick (1994) + Seton Hall seminaries reputation
- Reward: President of Seton Hall University (2024)

**Bishop Elias Lorenzo**
- Protected: Delbarton monks from exposure
- Reward: Auxiliary Bishop of Newark (2019), groomed for next SHU president (2027)

**Bishop James Checchio**
- Protected: Cardinal Tobin + diocesan establishment
- Reward: Archbishop of New Orleans (2025)

This is not a church. **This is a patronage network.**
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="The Papal Succession of Complicity">
                <Streamdown>{`
Four popes. Thirty years. One unbroken chain of institutional protection.

**I. Pope John Paul II (1994)**

McCarrick covers up abuse with Reilly's help. Papal nuncios investigate but are stonewalled. JP II visits New Jersey with McCarrick as host. No consequences. McCarrick's rise continues.

**II. Pope Benedict XVI (2005-2013)**

Knew about McCarrick's abuse. Did nothing. On the same day Francis was elected (2013), McCarrick was elevated to Cardinal.

**III. Pope Francis (2013-2024)**

Received the Latham Report (2019). Received warnings about Tobin. Knew Tobin defied the task force. Appointed Lorenzo as Auxiliary Bishop (Dec 2019) despite the McCarrick connection. Let Tobin remain in power as Cardinal.

**IV. Pope Leo XIV (2025-present)**

Inherits all the reports. Knows the full history. Champions press freedom in Peru. Appoints Checchio (who protected Tobin) as Archbishop of New Orleans.

**The Hypocrisy:**

Pope Leo delivers fiery defense of freedom of the press, supports Peruvian journalists exposing corruption—while simultaneously rewarding the man who helped bury the Seton Hall scandal.

Press freedom abroad. Protection of abusers at home.

**From McCarrick to Pope Leo XIV**

The thread is unbroken. Each pope inherits the cover-up. Each pope perpetuates it.
`}</Streamdown>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Act VI - THE WITCH OF EN-DOR */}
        <section 
          id="act-vi" 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/85"
          style={{ backgroundImage: 'url(/assets/saul/saul_witch_endor_1.jpg)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg">
              <h2 className="text-6xl font-bold mb-4 text-red-500">Act VI</h2>
              <h3 className="text-5xl font-bold mb-4">The Witch of En-Dor</h3>
              <p className="text-2xl text-gray-400 mb-12">2024-2025 — The Prophecy</p>

              <div className="prose prose-invert prose-xl max-w-none mb-8">
                <Streamdown>{`
From 1 Samuel 28: On the eve of battle, King Saul — abandoned by God, desperate for guidance — disguises himself and visits the witch of En-Dor. He asks her to summon the prophet Samuel from the dead.

Samuel's ghost rises. And he speaks the truth Saul cannot escape:

> "The Lord has torn the kingdom out of your hand... Tomorrow you and your sons will be with me."

The next day, Saul falls on his own sword.

A king who refused to face the truth. A prophet who spoke it anyway. A sword that waited.
`}</Streamdown>
              </div>

              <CollapsibleSection title="The Modern Seer of Truth">
                <Streamdown>{`
Lara is not a witch. She is a **seer of truth**. A modern prophet who sees through the lies, the cover-ups, the institutional gaslighting. A survivor who refuses to be silenced. And when Cardinal Tobin comes to her — desperate, defensive, seeking absolution — she speaks the truth he cannot escape.

**Who is Lara?**

A survivor. An advocate. A voice for those who were silenced. She has seen the documents. She knows the names. She understands the network. And she will not let the institution hide behind protocol.

But more than that: **she can see the lies**. When others were fooled by Tobin's carefully crafted statements, his rehearsed empathy, his institutional double-speak — Lara saw through it all.

**Her Gift: Seeing Through the Lies**

When Tobin would tell a lie — when he would claim ignorance, when he would deflect responsibility, when he would hide behind "canonical processes" and "ongoing investigations" — Lara would respond with a single, devastating phrase:

> **"I'll pray for you."**

Not a blessing. Not forgiveness. A judgment.

**A declaration that she saw the truth, and he knew it.**

It was the most powerful thing she could say. Because Tobin knew — in that moment — that he had been seen. Not by the press, not by the lawyers, not by the Vatican bureaucrats who would rubber-stamp his excuses.

**Seen by someone who knew.**

A modern seer of truth. A prophet in the biblical sense: someone who speaks truth to power, who refuses to be deceived, who calls out the lies even when the entire institution stands behind the liar.

**The Confrontation**

When Tobin finally came to her — desperate, defensive, seeking absolution — she spoke the truth he cannot escape:

> Lara: "You know what you've done."

And when he tried to lie, to deflect, to hide:

> Lara: "I'll pray for you."

**The judgment of a seer. The truth he cannot escape.**
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="The Sword">
                <Streamdown>{`
King Saul fell on his own sword. He chose death over facing the consequences of his failures. He chose the blade over accountability.

Will Cardinal Tobin fall on his sword?

Will he resign before 2027, admitting his failures?

Will he face the grand jury, the courts, the truth?

Or will he cling to power until Rome forces his hand?

**The sword is waiting.**

Unlike Saul, Tobin still has a choice.

He can face the truth. He can resign with dignity. He can cooperate with investigators.

He can choose accountability over the sword.

But the millstone is rising.
`}</Streamdown>
              </CollapsibleSection>

              <div className="mt-12 text-center">
                <img src="/Saulonsword.png" alt="Saul on his sword" className="w-full max-w-xl mx-auto rounded-lg shadow-2xl border-4 border-red-600" />
                <p className="text-sm text-gray-400 mt-4 italic">Saul on His Sword</p>
              </div>
            </div>
          </div>
        </section>

        {/* Act VII - THE SUCCESSION */}
        <section 
          id="act-vii" 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/85"
          style={{ backgroundImage: 'url(/assets/vatican/st_peters_interior_2.jpg)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg">
              <h2 className="text-6xl font-bold mb-4 text-red-500">Act VII</h2>
              <h3 className="text-5xl font-bold mb-4">The Succession</h3>
              <p className="text-2xl text-gray-400 mb-12">2027 — Who Inherits the Cathedral?</p>

              <div className="prose prose-invert prose-xl max-w-none mb-8">
                <Streamdown>{`
**2027**

Cardinal Joseph Tobin turns 75. Canon law requires him to submit his resignation to the Pope.

The question becomes: who inherits the scandal?
`}</Streamdown>
              </div>

              <CollapsibleSection title="Three Possible Futures">
                <Streamdown>{`
**Scenario 1: Resignation Accepted**

Pope Leo accepts Tobin's resignation. A new Archbishop is appointed. The question becomes: who inherits the scandal?

Will the new Archbishop cooperate with investigators? Will they release the documents? Will they choose transparency?

**Scenario 2: Resignation Delayed**

The Pope asks Tobin to stay on temporarily. The succession is postponed. The grand jury investigation continues. The pressure builds.

This is the institutional play: delay, deflect, wait for the news cycle to move on.

**Scenario 3: Forced Removal**

The grand jury report is released. Criminal charges are filed. The Pope has no choice but to remove Tobin before 2027.

This is the sword. This is Saul's fate. This is accountability enforced.
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="Who Could Succeed Tobin?">
                <Streamdown>{`
**Bishop Elias Lorenzo**

The obvious choice for **Archbishop of Newark**. Tobin's protégé. McCarrick's 1987 "twin" (ordained with Reilly). Currently Auxiliary Bishop of Newark.

✓ Knows the system intimately
✓ Loyal to Tobin
✓ Groomed for this role since 2020
✗ Appointed despite task force warnings
✗ Part of the concealment network

**Meanwhile, Monsignor Reilly** - Lorenzo's 1987 twin and McCarrick's former personal secretary (1994) - becomes **President of Seton Hall University** in 2024, returning a priest president to the institution.

**Birds of a feather.** The dual succession plan: Lorenzo inherits the cathedral, Reilly inherits the university. Both McCarrick's protégés. Both protected despite the scandal. Reilly went from McCarrick's secretary (aware of abuse allegations during the 1995 papal visit preparations) to university president. The protection-to-promotion pipeline in action.

Would this be continuity or complicity?

**An Outsider**

Someone with no connection to the scandal. A reformer. Someone committed to transparency.

✓ Fresh start for the archdiocese
✓ No loyalty to the old network
✓ Could cooperate with investigators
✗ Would face resistance from within

Would Rome choose reform over continuity?

**The choice of successor will reveal Rome's priorities.**
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="What Hangs in the Balance">
                <Streamdown>{`
**For Survivors**

Will the next Archbishop acknowledge their pain? Will he release the documents? Will he cooperate with investigations? Will he choose truth over institutional protection?

**For the Archdiocese**

Will the next Archbishop restore trust? Will he reform the seminary system? Will he break the cycle of concealment? Will he choose transparency?

**For the Catholic Church**

Will Rome demonstrate that accountability matters? Will they show that refusal to cooperate has consequences? Will they choose reform over protection?

**For Justice**

Will the grand jury report be released? Will criminal charges be filed? Will those who concealed abuse face consequences? Will the system change?

**2027 is not just a succession. It's a referendum on institutional accountability.**

Will the cathedral choose truth, or will it choose protection?

Who will inherit the cathedral?

Someone who will open the vault? Or someone who will keep it closed?

The millstone is rising. The answer is coming.
`}</Streamdown>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Social Sharing Section */}
        <section id="share" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-5xl font-bold mb-4 text-center">Share the Truth</h2>
            <p className="text-xl text-gray-400 text-center mb-12">Download and share these images. The truth deserves to go viral.</p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* The Unholy Trinity */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/Unholy.png" alt="The Unholy Trinity" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">The Unholy Trinity</h3>
                <a href="/Unholy.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Bless Me Father */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/Blessmefather.png" alt="Bless Me Father" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Bless Me Father</h3>
                <a href="/Blessmefather.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Better Call Scrivo */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/BetterScrivocall.png" alt="Better Call Scrivo" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Better Call Scrivo</h3>
                <a href="/BetterScrivocall.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Most Likely */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/Mostlikely.png" alt="Most Likely" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Most Likely</h3>
                <a href="/Mostlikely.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>            {/* Hall of Shame */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/HallofShame.png" alt="Hall of Shame" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Hall of Shame</h3>
                <a href="/HallofShame.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Pyramid Scheme */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/pyramidscheme.png" alt="Pyramid Scheme" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Pyramid Scheme</h3>
                <a href="/pyramidscheme.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Goddamn Right */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/goddamnright.png" alt="Goddamn Right" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Goddamn Right</h3>
                <a href="/goddamnright.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Devil Likes Your Work */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/Devillikesyourwork.png" alt="Devil Likes Your Work" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Devil Likes Your Work</h3>
                <a href="/Devillikesyourwork.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Let Us Pray */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/letuspray.png" alt="Let Us Pray" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Let Us Pray</h3>
                <a href="/letuspray.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Who Speaks Scrivo */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/who_speaks_scrivo.png" alt="Who Speaks for Scrivo" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Who Speaks for Scrivo</h3>
                <a href="/who_speaks_scrivo.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* In Practice */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/inpractice.png" alt="In Practice" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">In Practice</h3>
                <a href="/inpractice.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Canon Law 404 */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/canonlaw404.png" alt="Canon Law 404" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Canon Law 404</h3>
                <a href="/canonlaw404.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Beach House Once */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/Beachhouseonce.png" alt="Beach House Once" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Beach House Once</h3>
                <a href="/Beachhouseonce.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Bridge Closing */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/Bridgeclosing.png" alt="Bridge Closing" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Bridge Closing</h3>
                <a href="/Bridgeclosing.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Degree in Denial */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/degreeindenial.png" alt="Degree in Denial" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Degree in Denial</h3>
                <a href="/degreeindenial.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Incense and Holy Water */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/Incenseandholywater.png" alt="Incense and Holy Water" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Incense & Holy Water</h3>
                <a href="/Incenseandholywater.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Truth Latham Report */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/truth_latham_report.png" alt="Truth Latham Report" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Truth: Latham Report</h3>
                <a href="/truth_latham_report.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Smoking Gun */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/smoking-gun-clean.png" alt="Smoking Gun" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Smoking Gun</h3>
                <a href="/smoking-gun-clean.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Saul on Sword */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/Saulonsword.png" alt="Saul on Sword" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Saul on Sword</h3>
                <a href="/Saulonsword.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* McCarrick with JPII */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/mccarrick_with_jpii.png" alt="McCarrick with Pope John Paul II" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">McCarrick with JPII</h3>
                <a href="/mccarrick_with_jpii.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* JPII with Cardinals */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/jpii_with_cardinals.png" alt="Pope John Paul II with Cardinals" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">JPII with Cardinals</h3>
                <a href="/jpii_with_cardinals.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Pope Francis with Religious Leaders */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/pope_francis_religious_leaders.png" alt="Pope Francis with Religious Leaders" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Pope Francis</h3>
                <a href="/pope_francis_religious_leaders.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Pope JPII at Giants Stadium */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <img src="/pope_jpii_giants_stadium.png" alt="Pope John Paul II at Giants Stadium" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">JPII at Giants Stadium</h3>
                <a href="/pope_jpii_giants_stadium.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>


            </div>

            <div className="mt-16 p-8 bg-black/50 border-2 border-red-600 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">How to Share</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl mb-2">📱</p>
                  <p className="font-bold mb-2">Social Media</p>
                  <p className="text-gray-400">Post on Twitter, Facebook, Instagram. Tag journalists and advocates.</p>
                </div>
                <div>
                  <p className="text-4xl mb-2">✉️</p>
                  <p className="font-bold mb-2">Email</p>
                  <p className="text-gray-400">Send to your diocese, local news, elected officials. Demand accountability.</p>
                </div>
                <div>
                  <p className="text-4xl mb-2">🗣️</p>
                  <p className="font-bold mb-2">Word of Mouth</p>
                  <p className="text-gray-400">Tell your parish. Tell your community. The truth spreads person to person.</p>
                </div>
              </div>
              <p className="text-center mt-8 text-gray-400">
                Use hashtags: <span className="text-red-500">#SodomHall #ChurchAccountability #SurvivorsFirst</span>
              </p>
            </div>
          </div>
        </section>

        {/* Epilogue */}
        <section 
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/80"
          style={{ backgroundImage: 'url(/assets/millstone/ancient_millstone.jpg)' }}
        >
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg border-4 border-red-600">
              <h2 className="text-5xl font-bold mb-8 text-center">Epilogue</h2>
              <h3 className="text-4xl font-bold mb-12 text-center">The Millstone Rises</h3>

              <div className="prose prose-invert prose-xl max-w-none">
                <Streamdown>{`
> "But whoso shall offend one of these little ones... it were better for him that a millstone were hanged about his neck, and that he were drowned in the depth of the sea."
> 
> — Matthew 18:6

For six years, the millstone has been sinking — weighted by institutional silence, pulled down by concealment, dragged into darkness by those who chose protection over justice.

But millstones do not stay underwater forever.

**The truth is rising.**

The stone that was meant to sink has risen. The vault that was meant to stay closed is opening. The truth that was meant to stay buried is emerging.

For the survivors.

For those who spoke.

For those still silent.

For justice delayed.

For truth emerging.

**The cathedral of documents stands open.**

**The millstone has risen.**

**The reckoning continues.**

---

*This investigation is based on public court documents, news reports, and the Latham Report sent to the Vatican and NJ Attorney General in September 2019. All claims are sourced and verifiable.*

**For survivors seeking support:** RAINN National Sexual Assault Hotline 1-800-656-4673

**sodomhall.com | An investigation into institutional betrayal**
`}</Streamdown>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
