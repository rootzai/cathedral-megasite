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
      {/* News Ticker */}
      <div className="bg-red-600 text-white py-2 overflow-hidden sticky top-0 z-50 shadow-lg border-b border-red-900/50">
        <div className="whitespace-nowrap flex animate-ticker">
          {[
            "🚨 MAY 18, 2026: Final Court Deadline for 100% Document Production.",
            "📄 RABNER DOSSIER: Criminal Referral for 'Closed Loop' Legal Fraud.",
            "🏛️ VAULT UNSEALED: 24,000 pages of withheld records ordered released.",
            "🏦 BK EXPOSURE: McCarrick 'Nephew' network identified in financial ledger.",
            "⚖️ SCRIVO SANCTIONED: Judge cites 'Deliberate Concealment'.",
            "🕵️ EPSTEIN NEXUS: Investigation expands to Shared Counsel.",
          ].map((text, i) => (
            <span key={i} className="mx-8 font-bold tracking-tight inline-flex items-center">
              {text}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "🚨 MAY 18, 2026: Final Court Deadline for 100% Document Production.",
            "📄 RABNER DOSSIER: Criminal Referral for 'Closed Loop' Legal Fraud.",
            "🏛️ VAULT UNSEALED: 24,000 pages of withheld records ordered released.",
            "🏦 BK EXPOSURE: McCarrick 'Nephew' network identified in financial ledger.",
            "⚖️ SCRIVO SANCTIONED: Judge cites 'Deliberate Concealment'.",
            "🕵️ EPSTEIN NEXUS: Investigation expands to Shared Counsel.",
          ].map((text, i) => (
            <span key={i + 6} className="mx-8 font-bold tracking-tight inline-flex items-center">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-gradient-to-b from-gray-900 to-black text-white py-20 border-b-4 border-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/vault/archive_storage.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
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
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.5em] text-red-500 mb-6 font-mono">Special Forensic Investigation</p>
            <h1 className="text-8xl font-bold mb-4 tracking-tighter">SODOM <span className="text-red-600">HALL</span></h1>
            <h2 className="text-3xl mb-8 text-gray-400 font-light tracking-widest uppercase">The Cathedral of Documents</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-black text-white">
        {/* Leading Reckoning Section */}
        <section className="py-24 px-4 border-b border-red-900/10">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <blockquote className="border-l-4 border-red-600 pl-8 italic text-3xl mb-12 bg-zinc-950 p-12 rounded-r-lg shadow-2xl">
                  "The vault is no longer accidental. It is deliberate. And on May 18, 2026, it becomes a crime."
                  <footer className="text-gray-500 mt-4 text-sm font-mono uppercase tracking-widest">— Forensic Note: Exhibit 00</footer>
                </blockquote>
              </div>
              <div className="prose prose-invert prose-xl">
                <p className="text-2xl font-bold text-red-500 mb-6 leading-tight">
                  For six years, the Latham Report was a ghost.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As of May 2026, the institutional memory of New Jersey's Catholic political elite is no longer protected by privilege. Judge Avion Benjamin's unsealing order has fundamentally breached the cathedral walls.
                </p>
                <p className="text-gray-300">
                  This is the reckoning. The unmasked identities of the "twelve clergymen" are now flowing into the public record. The following dossier maps the active collapse of the silence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Act VII - THE RECKONING OF MAY (May 18, 2026) */}
        <section id="act-vii" className="py-32 bg-zinc-950 border-y border-red-900/20 relative">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-red-900/30" />
              <span className="font-mono text-red-600 font-bold tracking-[0.3em]">PRIMARY LEAD</span>
              <div className="h-px flex-1 bg-red-900/30" />
            </div>

            <div className="bg-black border border-red-900/30 p-16 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-9xl font-bold text-red-900/10 select-none">VII</span>
              </div>

              <h2 className="text-red-500 font-bold text-xl mb-4 font-mono tracking-widest">ACT VII</h2>
              <h3 className="text-6xl font-bold mb-8 tracking-tighter">The Reckoning of May</h3>
              <p className="text-3xl text-gray-500 mb-12 font-light">May 18, 2026</p>

              <div className="prose prose-invert prose-2xl max-w-none mb-12">
                <Streamdown>{`
The discovery deadline has passed. 24,000 pages of previously suppressed records—Title IX logs, witness rosters, and Board Risk Committee minutes—are now in the hands of investigators.

** The highlights of the production include:**

1. **The "Closed Loop" Unmasked**: Exhibits proving Thomas Scrivo's direct coordination between the University and the RCAN.
2. **The 100% Disclosure**: Full identities of the McCarrick network confirmed.
3. **The Rabner Dossier**: Evidence of institutional fraud against the State.
`}</Streamdown>
              </div>
              <div className="flex gap-4">
                <Link href="/documents">
                  <a className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold transition-all uppercase tracking-widest text-sm">Review Exhibits</a>
                </Link>
                <Link href="/ruling">
                  <a className="px-8 py-4 border border-zinc-700 hover:border-red-600 text-gray-400 hover:text-white transition-all uppercase tracking-widest text-sm">The Benjamin Order</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other Acts (I-VI) - Navigation Grid */}
        <section className="py-24 bg-gray-900 border-y border-red-900/10">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-4xl font-bold mb-4 text-center tracking-tight uppercase">The Descent</h2>
            <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.3em] mb-12 text-center underline decoration-red-600/50 underline-offset-8">Complete Forensic Investigation</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="#act-vii" className="block p-6 bg-black border border-gray-800 hover:border-red-600 transition-all rounded-lg group">
                <h3 className="text-xl font-bold mb-2 text-red-500 group-hover:text-red-400">Act VII</h3>
                <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Reckoning</p>
                <p className="text-gray-400 text-sm italic">May 18, 2026: Final Deadline</p>
              </a>

              <a href="#act-vi" className="block p-6 bg-black border border-gray-800 hover:border-red-600 transition-all rounded-lg group">
                <h3 className="text-xl font-bold mb-2 text-red-500 group-hover:text-red-400">Act VI</h3>
                <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Succession</p>
                <p className="text-gray-400 text-sm italic">2027: Who Inherits the Cathedral?</p>
              </a>

              <a href="#act-v" className="block p-6 bg-black border border-gray-800 hover:border-red-600 transition-all rounded-lg group">
                <h3 className="text-xl font-bold mb-2 text-red-500 group-hover:text-red-400">Act V</h3>
                <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Breach</p>
                <p className="text-gray-400 text-sm italic">Nov 2025: The Court Orders Disclosure</p>
              </a>

              <a href="#act-iv" className="block p-6 bg-black border border-gray-800 hover:border-red-600 transition-all rounded-lg group">
                <h3 className="text-xl font-bold mb-2 text-red-500 group-hover:text-red-400">Act IV</h3>
                <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Courtroom</p>
                <p className="text-gray-400 text-sm italic">2023-25: Survivors & The Reckoning</p>
              </a>

              <a href="#act-iii" className="block p-6 bg-black border border-gray-800 hover:border-red-600 transition-all rounded-lg group">
                <h3 className="text-xl font-bold mb-2 text-red-500 group-hover:text-red-400">Act III</h3>
                <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Concealment</p>
                <p className="text-gray-400 text-sm italic">2020-23: The Network of Silence</p>
              </a>

              <a href="#act-ii" className="block p-6 bg-black border border-gray-800 hover:border-red-600 transition-all rounded-lg group">
                <h3 className="text-xl font-bold mb-2 text-red-500 group-hover:text-red-400">Act II</h3>
                <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Labyrinth</p>
                <p className="text-gray-400 text-sm italic">1987-2020: Building the Network</p>
              </a>

              <a href="#act-i" className="block p-6 bg-black border border-gray-800 hover:border-red-600 transition-all rounded-lg lg:col-span-3 text-center group">
                <h3 className="text-xl font-bold mb-2 text-red-500 group-hover:text-red-400">Act I</h3>
                <p className="text-lg mb-2 font-bold uppercase tracking-wider">The Vault</p>
                <p className="text-gray-400 text-sm italic">August 27, 2019: The Secret Meeting</p>
              </a>
            </div>
          </div>
        </section>

        {/* Act VI - THE ARCHITECTURE OF SILENCE & SUCCESSION */}
        <section
          id="act-vi"
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/85"
          style={{ backgroundImage: 'url(/assets/symbols/blueprint_scales.png)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg border-4 border-zinc-500">
              <h2 className="text-6xl font-bold mb-4 text-zinc-500">Act VI</h2>
              <h3 className="text-5xl font-bold mb-4">The Architecture of Silence</h3>
              <p className="text-2xl text-gray-400 mb-12">February 13, 2026</p>

              <div className="prose prose-invert prose-xl max-w-none mb-12">
                <Streamdown>{`
On February 13, 2026, a formal dossier—**Exhibit 00**—was submitted to New Jersey Chief Justice Stuart Rabner. 

The letter demanded the appointment of a **Special Prosecutor** to investigate the "Closed Loop" of judicial and legal corruption that has protected the McCarrick network for four decades.

**The dossier documents:**
- The coordinated unmasking of whistleblowers
- The systematic withholding of 24,000 pages of evidence
- The conflict of interest involving former NJ Attorney Generals sitting on the University's Board
- The failure of the Current AG's office to act against their mentors and former law firm colleagues
`}</Streamdown>
              </div>

              <CollapsibleSection title="The Closed Loop" defaultOpen={true}>
                <Streamdown>{`
The "Architecture of Silence" is a structural failure of justice. 

**The Christie Network:**
1. **Chris Christie**: Former Governor, mentor to the legal cabal.
2. **Christopher Porrino**: Former AG under Christie, now Lowenstein Sandler partner (SHU Board).
3. **Jennifer Davenport**: Former First Assistant to Porrino, now the Current AG nominating by Gov. Sherrill.

This loop ensures that no one investigates the investigators. When Seton Hall hides reports, and the AG's office is filled with the friends and colleagues of the men hiding the reports, **the system fails.**
`}</Streamdown>
              </CollapsibleSection>

              <CollapsibleSection title="The Succession: 2027">
                <Streamdown>{`
Cardinal Joseph Tobin turns 75 in 2027. Canon law requires him to submit his resignation to the Pope. The question becomes: who inherits the scandal?

**Three Possible Futures:**

**1. Resignation Accepted**: Pope Leo accepts Tobin's resignation. A new Archbishop is appointed.
**2. Resignation Delayed**: The Pope asks Tobin to stay on temporarily.
**3. Forced Removal**: The grand jury report is released. Criminal charges are filed.

**Who Succeeds?**
Bishop Elias Lorenzo—Tobin's protégé—is the obvious choice. Meanwhile, Monsignor Reilly returned as President of SHU in 2024. The dual succession: Lorenzo inherits the cathedral, Reilly inherits the university. Both McCarrick's protégés.
`}</Streamdown>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        {/* Act V - THE BREACH & ROME KNEW */}
        <section
          id="act-v"
          className="py-20 px-4 relative bg-cover bg-center bg-blend-overlay bg-black/80"
          style={{ backgroundImage: 'url(/assets/vault/archive_storage.jpg)' }}
        >
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="bg-black/90 p-12 rounded-lg border-4 border-blue-600">
              <h2 className="text-6xl font-bold mb-4 text-blue-500">Act V</h2>
              <h3 className="text-5xl font-bold mb-4">The Breach</h3>
              <p className="text-2xl text-gray-400 mb-12">November 12, 2025</p>

              <div className="prose prose-invert prose-xl max-w-none mb-12">
                <Streamdown>{`
On November 12, 2025, Judge Avion Benjamin ordered the release of two sealed investigations—Latham & Watkins and Gibbons—plus 20,500 pages of evidence Seton Hall buried for six years.

**The vault is opening.**
`}</Streamdown>
              </div>

              <CollapsibleSection title="Breaking News Coverage" defaultOpen={true}>
                <Streamdown>{`
On November 17, Judge Benjamin's ruling made national headlines. 

**Judge Benjamin:** "There is a legitimate need for the evidence. The evidence is material and relevant."

**Mark Crawford (SNAP NJ):** "For far too long, survivors and the public have been denied access to information that is essential for truth, accountability, and healing."

**Joe Nyre's Decision:** President Nyre sent the Latham Report directly to the Holy See in 2019. "We believe you should be aware of these findings." Rome has known everything since the beginning.
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

              <CollapsibleSection title="The Judges">
                <Streamdown>{`
**Judge Avion Benjamin**: Ordered Seton Hall to produce the full, unredacted Latham Report in November 2025. "The vault must open."

**Judge Jose Linares**: Corrupt former federal judge who released the Perry Law Report to Kevin Marino while his father was a priest abuser.

**Judge Cynthia Santomauro**: Chancery Court judge blatant manipulated by Tom Scrivo.
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
After the McCarrick scandal still smoldered, Seton Hall hired its outsider president, Dr. Joseph Nyre. But the network was already preparing its defense.

**The Christie Legal Network:**
- **Tom Scrivo**: The document destroyer.
- **Chris Porrino**: Former NJ Attorney General, now Lowenstein Sandler partner.
- **Kevin Marino**: The abusive Board Chair who leads the cover-up.

**The Perry Law Whitewash:**
Seton Hall commissioned a sham report to exonerate Marino, release it illegally to him, and then got the New York Times to parrot its conclusions. "No evidence" despite corroborating witnesses like Regent Kevin Flood.
`}</Streamdown>
              </div>
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

        {/* Social Sharing Section */}
        <section id="share" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-5xl font-bold mb-4 text-center">Share This Report</h2>
            <p className="text-xl text-gray-400 text-center mb-12">Download and share these images. The truth deserves to go viral.</p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* The Unholy Trinity */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/Unholy.png" alt="The Unholy Trinity" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">The Unholy Trinity</h3>
                <a href="/assets/Unholy.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Bless Me Father */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/Blessmefather.png" alt="Bless Me Father" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Bless Me Father</h3>
                <a href="/assets/Blessmefather.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Better Call Scrivo */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/BetterScrivocall.png" alt="Better Call Scrivo" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Better Call Scrivo</h3>
                <a href="/assets/BetterScrivocall.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Most Likely */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/Mostlikely.png" alt="Most Likely" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Most Likely</h3>
                <a href="/assets/Mostlikely.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>            {/* Hall of Shame */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/HallofShame.png" alt="Hall of Shame" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Hall of Shame</h3>
                <a href="/assets/HallofShame.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Pyramid Scheme */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/pyramidscheme.png" alt="Pyramid Scheme" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Pyramid Scheme</h3>
                <a href="/assets/pyramidscheme.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Goddamn Right */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/goddamnright.png" alt="Goddamn Right" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Goddamn Right</h3>
                <a href="/assets/goddamnright.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Devil Likes Your Work */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/Devillikesyourwork.png" alt="Devil Likes Your Work" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Devil Likes Your Work</h3>
                <a href="/assets/Devillikesyourwork.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Let Us Pray */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/letuspray.png" alt="Let Us Pray" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Let Us Pray</h3>
                <a href="/assets/letuspray.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Who Speaks Scrivo */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/who_speaks_scrivo.png" alt="Who Speaks for Scrivo" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Who Speaks for Scrivo</h3>
                <a href="/assets/who_speaks_scrivo.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* In Practice */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/inpractice.png" alt="In Practice" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">In Practice</h3>
                <a href="/assets/inpractice.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Canon Law 404 */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/canonlaw404.png" alt="Canon Law 404" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Canon Law 404</h3>
                <a href="/assets/canonlaw404.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Beach House Once */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/Beachhouseonce.png" alt="Beach House Once" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Beach House Once</h3>
                <a href="/assets/Beachhouseonce.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Bridge Closing */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/Bridgeclosing.png" alt="Bridge Closing" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Bridge Closing</h3>
                <a href="/assets/Bridgeclosing.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Degree in Denial */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/degreeindenial.png" alt="Degree in Denial" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Degree in Denial</h3>
                <a href="/assets/degreeindenial.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Incense and Holy Water */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/Incenseandholywater.png" alt="Incense and Holy Water" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Incense & Holy Water</h3>
                <a href="/assets/Incenseandholywater.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Truth Latham Report */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/truth_latham_report.png" alt="Truth Latham Report" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Truth: Latham Report</h3>
                <a href="/assets/truth_latham_report.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Smoking Gun */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/smoking-gun-clean.png" alt="Smoking Gun" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Smoking Gun</h3>
                <a href="/assets/smoking-gun-clean.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Saul on Sword */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/Saulonsword.png" alt="Saul on Sword" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Saul on Sword</h3>
                <a href="/assets/images/Saulonsword.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* McCarrick with JPII */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/mccarrick_with_jpii.png" alt="McCarrick with Pope John Paul II" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">McCarrick with JPII</h3>
                <a href="/assets/mccarrick_with_jpii.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* JPII with Cardinals */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/jpii_with_cardinals.png" alt="Pope John Paul II with Cardinals" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">JPII with Cardinals</h3>
                <a href="/assets/jpii_with_cardinals.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Pope Francis with Religious Leaders */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/pope_francis_religious_leaders.png" alt="Pope Francis with Religious Leaders" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">Pope Francis</h3>
                <a href="/assets/pope_francis_religious_leaders.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>

              {/* Pope JPII at Giants Stadium */}
              <div className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-red-600 transition-all">
                  <SmartImage src="/assets/pope_jpii_giants_stadium.png" alt="Pope John Paul II at Giants Stadium" className="w-full transform group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-lg font-bold mb-2">JPII at Giants Stadium</h3>
                <a href="/assets/pope_jpii_giants_stadium.png" download className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors">
                  Download
                </a>
              </div>


            </div>

            <div className="mt-16 p-8 bg-zinc-950 border-2 border-red-900/20 rounded-lg text-center">
              <p className="text-gray-400 italic">
                This investigation persists through the preservation of primary source documents.
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
    </div >
  );
}
