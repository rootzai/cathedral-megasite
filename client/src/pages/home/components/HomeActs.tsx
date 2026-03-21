import NetworkDiagram from '@/components/NetworkDiagram';
import { PerryLawTimeline } from '@/components/PerryLawTimeline';
import { Search } from '@/components/Search';
import { SmartImage } from "@/components/SmartImage";
import { ChevronDown, ChevronUp, Search as SearchIcon } from 'lucide-react';

import { useState } from 'react';
import { Streamdown } from 'streamdown';
import { Link } from 'wouter';

// Collapsible Section Component
function CollapsibleSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-8 border-l-4 border-zinc-300 pl-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xl font-bold mb-4 hover:text-zinc-600 transition-colors w-full text-left"
      >
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        {title}
      </button>
      {isOpen && <div className="prose prose-invert prose-lg max-w-none">{children}</div>}
    </div>
  );
}


// Tooltip Component for 8th-grade explanations
function Term({ word, definition }: { word: string; definition: string }) {
  return (
    <span className="group relative inline-block border-b border-dashed border-zinc-500 cursor-help text-zinc-800">
      {word}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-zinc-200 text-zinc-800 text-sm rounded shadow-xl border border-zinc-300 pointer-events-none z-50 text-left font-sans font-normal leading-relaxed">
        <strong>What does this mean?</strong><br />{definition}
      </span>
    </span>
  );
}

export function HomeActs() {
  const toc = [
    { id: 'section-vii', title: 'VII: The Reckoning of May' },
    { id: 'section-viii', title: 'VIII: The Vault Opens' },
    { id: 'section-ix', title: 'IX: The Rabner Dossier' },
    { id: 'section-vi', title: 'VI: The Succession' },
    { id: 'section-v', title: 'V: The Sanction' },
    { id: 'section-iv', title: 'IV: Title IX Suppression' },
    { id: 'section-iii', title: 'III: A Hierarchy of Protection' },
    { id: 'section-ii', title: 'II: Architecture of Silence' },
    { id: 'section-i', title: 'I: The Origin' }
  ];

  return (
    <div className="flex flex-col xl:flex-row w-full bg-zinc-50">
      {/* Sidebar TOC */}
      <aside className="hidden xl:block w-72 flex-shrink-0 border-r border-zinc-300 sticky top-0 h-screen overflow-y-auto p-8 relative">
        <div className="flex justify-between items-center mb-8">
          <h4 className="font-bold text-zinc-900 uppercase tracking-widest text-sm">Table of Contents</h4>
        </div>
        <button
          onClick={() => {
            document.documentElement.classList.toggle('reading-mode');
            const main = document.getElementById('home-acts-main');
            if (main) main.classList.toggle('reading-mode-active');
          }}
          className="w-full mb-8 py-2 px-4 border border-zinc-300 rounded text-xs text-zinc-800 font-mono tracking-widest hover:bg-zinc-200 transition-colors uppercase"
        >
          Toggle Reading View
        </button>
        <nav className="flex flex-col gap-4 text-sm font-serif">
          <a href="#executive-summary" className="text-zinc-600 hover:text-zinc-900 transition-colors">Executive Summary (TL;DR)</a>
          {toc.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-zinc-600 hover:text-zinc-800 transition-colors">
              {item.title}
            </a>
          ))}
        </nav>
      </aside>

      <main id="home-acts-main" className="flex-1 min-w-0 transition-colors duration-500">
        {/* Executive Summary */}
        <section id="executive-summary" className="py-12 sm:py-16 md:py-24 bg-zinc-100 border-y border-zinc-300/50">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-zinc-900 tracking-tight">Executive Summary</h2>
            <div className="bg-zinc-200/50 p-6 sm:p-8 rounded-lg border border-zinc-300 shadow-xl">
              <p className="text-xl font-bold text-zinc-800 mb-6 font-serif">
                The "Sodom Hall" investigation reveals how Seton Hall University and the Archdiocese of Newark worked together for 40 years to hide abusive priests from the public and the police.
              </p>
              <ul className="space-y-4 text-zinc-800 text-lg">
                <li><strong className="text-zinc-900">The Secret Files:</strong> Lawyers kept two sets of records—one for the public, and a highly secret "vault" holding 24,000 pages of true reports.</li>
                <li><strong className="text-zinc-900">The Network:</strong> A small group of powerful men made sure certain accused individuals were never punished. They used a legal strategy to ensure lawsuits never exposed the truth.</li>
                <li><strong className="text-zinc-900">The Breakthrough:</strong> A judge finally forced the university to hand over the secret files in May 2026, blowing the cover-up wide open.</li>
              </ul>
              <div className="mt-8 pt-4 border-t border-zinc-300/50 text-sm text-zinc-600 italic">
                This summary uses simple language to ensure the facts are understandable to everyone. Select a section from the Table of Contents to read the full source evidence.
              </div>
            </div>
          </div>
        </section>


        {/* SECTION VII - THE RECKONING OF MAY (May 18, 2026) */}
        <section id="section-vii" className="py-16 sm:py-24 md:py-32 bg-zinc-50 border-y border-zinc-300/50 relative">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-red-900/30" />
              <span className="font-mono text-zinc-600 font-bold tracking-[0.3em]">PRIMARY LEAD</span>
              <div className="h-px flex-1 bg-red-900/30" />
            </div>

            <div className="bg-zinc-50 border-2 sm:border-4 border-zinc-300 p-6 sm:p-10 md:p-16 rounded-lg relative overflow-hidden group shadow-2xl shadow-zinc-900/50">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-6xl sm:text-9xl font-bold text-red-900/10 select-none">VII</span>
              </div>

              <h2 className="text-zinc-600 font-bold text-lg sm:text-xl mb-4 font-mono tracking-widest">SECTION VII</h2>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8 tracking-tighter text-zinc-900">The Reckoning of May</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 font-light">May 18, 2026 — The Final Deadline</p>

              <div className="prose prose-invert prose-lg sm:prose-xl md:prose-2xl max-w-none mb-8 sm:mb-12">
                <Streamdown>{`
The discovery deadline has passed. 24,000 pages of previously suppressed records—Title IX logs, witness rosters, and Board Risk Committee minutes—are now in the hands of investigators.

**Institutional Collapse:**
For 40 years, the "Architecture of Silence" held. It was built by McCarrick, maintained by his protégés, and defended by a "Closed Loop" of New Jersey legal and judicial power. 

**The Production Includes:**
1. <div className="my-8 bg-zinc-100 border border-zinc-300 p-4 rounded-md">
              <strong className="text-zinc-900 text-sm uppercase tracking-widest block mb-2">💡 Plain English Explanation: "Closed Loop"</strong>
              <p className="text-zinc-600 text-sm mt-0">A "Closed Loop" means that the people investigating a crime are the exact same people who committed or covered up the crime. They keep the investigation "in the family" so the police never find out.</p>
            </div>
**The Scrivo Connection**: Exhibits proving direct coordination between University Counsel and the Archdiocese.
2. **The 100% Disclosure**: Full, unredacted identities of the seminarians and the "twelve clergymen."
3. **The Audit Leak**: Evidence that Board leadership leaked confidential reports to the accused.
`}</Streamdown>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/vault">
                  <a className="px-8 py-4 bg-zinc-200 hover:bg-zinc-700 text-zinc-900 font-bold transition-all uppercase tracking-widest text-sm shadow-lg shadow-zinc-900/50">Review Exhibits</a>
                </Link>
                <Link href="/breach">
                  <a className="px-8 py-4 border border-zinc-300 hover:border-zinc-300 text-gray-400 hover:text-zinc-900 transition-all uppercase tracking-widest text-sm">The Benjamin Order</a>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION VIII - THE VAULT OPENS (Nov 12, 2025) */}
        <section id="section-viii" className="py-12 sm:py-16 md:py-24 bg-zinc-50 border-y border-zinc-300/50">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4">
            <div className="bg-zinc-50 p-6 sm:p-8 md:p-12 rounded-lg border-l-4 border-zinc-300 shadow-xl">
              <h2 className="text-zinc-600 font-bold text-base sm:text-lg mb-2 font-mono tracking-widest uppercase">SECTION VIII</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-zinc-900">The Vault Opens</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 italic font-serif">November 12, 2025 — Superior Court of New Jersey</p>

              <div className="prose prose-invert prose-lg sm:prose-xl max-w-none mb-8 sm:mb-12">
                <Streamdown>{`
**Breaking News: Judge Avion Benjamin orders production of the Latham Report.**

After six years of litigation, the veil is pierced. The court finds that the "deliberate concealment" of the report by University leadership was not an accident, but a strategy. 

> "The University cannot use the shield of religious privilege to hide evidence of sexual harassment and institutional fraud."

**The November Production:**
- **The Maag Investigation**: Christopher Maag reports on the "Cathedral of Documents."
- **Exhibits 1-19**: The first wave of unsealed records showing McCarrick's "nephew" roster.
- <div className="my-8 bg-zinc-100 border border-zinc-300 p-4 rounded-md">
              <strong className="text-zinc-900 text-sm uppercase tracking-widest block mb-2">💡 Plain English Explanation: "Sanctioned"</strong>
              <p className="text-zinc-600 text-sm mt-0">When a judge "sanctions" a lawyer, it means the lawyer is being officially punished for breaking the rules—like lying to the court or hiding evidence.</p>
            </div>
**The Scrivo Sanction**: Court records regarding the withholding of 22,000 internal documents.
`}</Streamdown>
              </div>

              <CollapsibleSection title="The Maag Investigation (July 2011)">
                <Streamdown>{`
**Christopher Maag | July 11, 2024**
"Seton Hall Whistleblower Case: The documents that weren't supposed to exist."

The investigation revealed that for years, University counsel had maintained Two sets of records: one for the public, and one for the vault. The Perry Law Report—commissioned to whitewash the scandal—was leaked to Marino just days before the scheduled disclosure.
`}</Streamdown>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* SECTION IX - THE RABNER DOSSIER (Feb 13, 2026) */}
        <section id="section-ix" className="py-12 sm:py-16 md:py-24 bg-zinc-50 border-y border-zinc-300/50">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4">
            <div className="bg-zinc-50 p-6 sm:p-8 md:p-12 rounded-lg border-r-4 border-zinc-300 text-right shadow-xl">
              <h2 className="text-zinc-600 font-bold text-base sm:text-lg mb-2 font-mono tracking-widest uppercase">SECTION IX</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-zinc-900">The Rabner Dossier</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 italic font-serif">February 13, 2026 — Supreme Court Referral</p>

              <div className="prose prose-invert prose-lg sm:prose-xl max-w-none mb-8 sm:mb-12 text-left bg-zinc-100/50 p-4 sm:p-6 md:p-8 rounded border border-zinc-300">
                <Streamdown>{`
**A Criminal Referral to the Chief Justice.**

Evidence of "Closed Loop" legal fraud has been submitted to NJ Chief Justice Stuart Rabner. The dossier documents how O'Toole Scrivo and Lowenstein Sandler built New Jersey's judiciary—appointing over 75 sitting judges—and then deployed that network to protect Seton Hall from civil and criminal accountability.

**The Seven Grounds:**
- Improper fact-finding on a motion to dismiss.
- Misapplication of the religious exemption in NJLAD.
- Material breach of the Nyre release agreement.
`}</Streamdown>
              </div>
              <div className="flex justify-end">
                <Link href="/breach">
                  <a className="px-6 py-3 border border-zinc-300 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 font-bold transition-all uppercase tracking-widest text-xs">Examine The Referral</a>
                </Link>
              </div>

            </div>
          </div>
        </section>



        {/* SECTION VI - THE SUCCESSION */}
        <section
          id="section-vi"
          className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative bg-cover bg-center bg-blend-overlay bg-zinc-50"
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-zinc-50 p-6 sm:p-8 md:p-12 rounded-lg border-2 sm:border-4 border-zinc-300">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-zinc-600">SECTION VI</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Succession</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12">2027 — Who Inherits the Cathedral?</p>

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

        {/* SECTION V - ROME KNEW */}
        <section
          id="section-v"
          className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative bg-cover bg-center bg-blend-overlay bg-zinc-50"
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-zinc-50 p-6 sm:p-8 md:p-12 rounded-lg border-2 sm:border-4 border-zinc-300">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-zinc-600">SECTION V</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Rome Knew</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12">2020-2025 — The Vatican Connection</p>

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

        {/* SECTION IV - THE COURTROOM */}
        <section
          id="section-iv"
          className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative bg-cover bg-center bg-blend-overlay bg-zinc-50"
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-zinc-50 p-6 sm:p-8 md:p-12 rounded-lg border-2 sm:border-4 border-zinc-300">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-zinc-600">SECTION IV</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Courtroom</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12">2023-2025 — The Reckoning</p>

              <div className="prose prose-invert prose-xl max-w-none mb-8">
                <Streamdown>{`
While institutions chose silence, individuals chose courage. Some spoke publicly. Others remain anonymous, unable to believe their eyes that someone is finally holding accountable those who cloak themselves in righteousness and loyalty to the order.

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

Those who cannot yet speak publicly but who witness this moment with hope. Someone is finally holding these individuals accountable.
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

In a landmark November 2025 ruling, she ordered Seton Hall to produce the full, unredacted Latham Report for review, piercing the veil of secrecy.

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

        {/* SECTION III - THE CONCEALMENT */}
        <section
          id="section-iii"
          className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative bg-cover bg-center bg-blend-overlay bg-zinc-50"
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-zinc-50 p-6 sm:p-8 md:p-12 rounded-lg border-2 sm:border-4 border-zinc-300">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-zinc-600">SECTION III</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Concealment</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12">The Network of Silence (2020-2023)</p>

              <div className="prose prose-invert prose-xl max-w-none mb-8">
                <Streamdown>{`
After the McCarrick scandal still smoldered, Seton Hall announced its savior: Dr. Joseph E. Nyre. After a yearlong national search, the Board voted "overwhelmingly" to appoint Nyre as the University's 21st president.

What they didn't tell him—what they were already hiding—was that the same men who hired him were about to bury a report that would expose sexual harassment and institutional cover-ups at the highest levels.

The university president was positioned to bear the institutional blame.
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

              <CollapsibleSection title="The Perry Law Whitewash">
                <Streamdown>{`
Seton Hall commissioned a sham report from Perry Law Group to reach a predetermined conclusion: exonerate Kevin Marino.

**The report says "no evidence" while ADMITTING evidence on every page.**

<EvidenceCard
  title="Perry Law Report: Key Excerpts"
  date="July 2, 2024"
  source="Karen Friedman Agnifilo investigation commissioned by Seton Hall"
  documentUrl="/assets/perry_law_report.pdf"
  findings={[
    "Report Conclusion: 'At the University's direction, [we] conclude there is no evidence of sexual harassment'",
    "BUT Report ADMITS: Kevin Flood saw Marino's hands on Kelli Nyre's shoulders (corroborating physical contact)",
    "BUT Report ADMITS: Kim Capadona filed complaints November 2022, December 2022, March 2023, April 2023",
    "BUT Report ADMITS: Donna McMonagle complained March 2023 about 'uncomfortable and aggressive interaction' with Marino",
    "BUT Report ADMITS: Kelli Nyre filed multiple grievance complaints (March 23, 25, 28, 2023) about 'toxic, abusive and hostile work environment'",
    "BUT Report ADMITS: June 6, 2023 email proves SHU knew about 'pending internal complaints against Chairman Marino'"
  ]}
  outcome="Report concludes 'no evidence' despite admitting corroborating witness, multiple complaints, and documented hostile environment. Released illegally to Marino by Judge Linares."
/>

**The Irregularities: A Crime Scene**

**1. Linares' Illegal Leak**

On July 10, 2024, former Judge **Jose Linares** allowed the confidential report to be released to Kevin Marino (the accused!).

**2. Porrino's Public Filing**

Hours before the NYT article, **Chris Porrino** (Marino's lawyer) filed the **unredacted report** in an amicus brief, **outing Donna McMonagle and Kim Capadona by name**.

**3. Maag and the New York Times**

On July 11, 2024, Christopher Maag published an article parroting the Perry Law report's "no evidence" headline while ignoring the corroborating testimony of Board members like Kevin Flood.
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
              </CollapsibleSection>
            </div>
          </div>
        </section>
















        {/* SECTION II - THE LABYRINTH */}
        <section
          id="section-ii"
          className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative bg-cover bg-center bg-blend-overlay bg-zinc-50"
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-zinc-50 p-6 sm:p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-zinc-600">SECTION II</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Labyrinth</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12">How the Network Was Built (1987-2020)</p>

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
  documentUrl="/assets/vatican_report.pdf"
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
            </div>
          </div>
        </section>

        {/* SECTION I - THE VAULT */}
        <section
          id="section-i"
          className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative bg-cover bg-center bg-blend-overlay bg-zinc-50"
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-zinc-50 p-6 sm:p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-zinc-600">SECTION I</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Vault</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12">August 27, 2019</p>

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

      </main>
    </div>
  );
}