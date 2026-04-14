import MemoryGate from "@/components/MemoryGate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Users, ShieldAlert, FileText, Globe, Building } from "lucide-react";

interface Secretary {
  name: string;
  years: string;
  role: string;
  career: string;
  implication: string;
  status: string;
}

const secretaries: Secretary[] = [
  {
    name: "Rev. George R. Trabold",
    years: "1988–1997",
    role: "Secretary for Development & Canonical Affairs",
    career: "Key archdiocesan fundraiser",
    implication: "Permanently removed from ministry after being credibly accused of child sexual abuse",
    status: "Removed 2016",
  },
  {
    name: "Rev. Kenneth L. Martin",
    years: "1991–1993",
    role: "Secretary to the Archbishop",
    career: "Assigned to St. Andrew's and Sacred Heart Cathedral",
    implication: "Managed chancery logistics during peak abuse years before assignments abruptly ceased in disgrace in 1996",
    status: "Barred 2008",
  },
  {
    name: "Rev. James Dente",
    years: "1997",
    role: "Secretary to the Archbishop",
    career: "Parochial Vicar; Associate Director of the Office of Divine Worship",
    implication: "Maintained the chancery facade during the late 90s as external rumors regarding McCarrick intensified",
    status: "Active",
  },
  {
    name: "Msgr. Joseph Reilly",
    years: "1994",
    role: "Priest Secretary to McCarrick",
    career: "Seminary Rector; Named President of Seton Hall University in 2024",
    implication: "A 2019 secret report exposed his failure to report abuse, leading to massive 2025 scandal, court orders, and a new investigation surrounding his presidency",
    status: "Subject of Pending Litigation 2025",
  },
  {
    name: "Msgr. Thomas P. Nydegger",
    years: "1995–1996",
    role: "Secretary to Archbishop McCarrick",
    career: "Vocations Director; Vice Rector; Vicar General (2014)",
    implication: "As Vicar General, he ironically managed the fallout of abuse cases but actively canceled parish-level healing programs for victims, ultimately leading to his removal from prominence",
    status: "Removed from Curia",
  },
];

export default function Secretaries() {
  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative border-b border-border pb-16">
        <img src="/assets/vatican/vatican_archives_document.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] select-none pointer-events-none" />
        {/* Π — The Secretariat Vault. 6 secretaries, 1 apparatus */}
        <div className="absolute bottom-3 right-3 text-white/[0.04] hover:text-white/20 text-5xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">Π</div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <ShieldAlert className="w-96 h-96 text-destructive animate-pulse" />
        </div>

        <div className="max-w-5xl space-y-6 z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
            <AlertTriangle className="w-3 h-3" />
            The Architecture of Complicity
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-foreground leading-tight">
            The Secretarial Apparatus: <br />
            <span className="text-destructive">McCarrick's Inner Circle (1986-2000)</span>
          </h1>
          <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-3xl">
            The legacy of Theodore Edgar McCarrick represents one of the most profound institutional failures in the history of the modern episcopate. At the epicenter of the chancery was the "priest secretary"—a role that acted as the ultimate gatekeeper, schedule manager, and confidant. In McCarrick's Newark, the secretariat was transformed into a logistical apparatus that sustained his double life.
          </p>
        </div>
      </section>

      {/* The Ecclesiological Role */}
      <section className="space-y-8">
        <Card className="border-border/50 bg-muted/5">
          <CardHeader>
            <CardTitle className="font-heading text-2xl flex items-center gap-3">
              <Building className="w-6 h-6 text-destructive" />
              The Ecclesiological and Operational Role of the Priest Secretary
            </CardTitle>
          </CardHeader>
          <CardContent className="font-body text-lg text-foreground/80 space-y-4">
            <p>
              In the administrative structure of the Roman Catholic Church, a priest appointed as the personal secretary (often referred to as the <em>segretario particolare</em>) to an archbishop is typically a young, highly intelligent, and ambitious cleric selected for his discretion, efficiency, and unwavering loyalty. The position is widely understood within clerical culture as an apprenticeship for higher ecclesiastical office.
            </p>
            <p>
              The operational duties are exhaustive: managing correspondence, traveling domestically and internationally, coordinating liturgical and social schedules, overseeing domestic logistics of the episcopal residence, and acting as the primary liaison between the archbishop and the broader curia. The secretary possesses an unparalleled vantage point—virtually nothing occurs without his knowledge or logistical facilitation.
            </p>
            <p className="text-destructive font-semibold border-l-4 border-destructive pl-4">
              When the bishop is a charismatic, highly manipulative narcissist—as the Vatican Report suggests McCarrick was—the secretary is subjected to intense grooming to prioritize loyalty above all moral obligations. This transforms the secretary from an administrator into an operational buffer, shielding the archbishop from scrutiny while executing the logistical demands of his private life.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* The Nephew Network */}
      <section className="space-y-8">
        <h2 className="font-heading text-4xl text-foreground uppercase flex items-center gap-3">
          <Users className="w-8 h-8 text-destructive" />
          The Logistical Orchestration of the "Nephew" Network
        </h2>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6 font-body">
          <p>
            During his tenure as Archbishop of Newark from 1986 to 2000, McCarrick utilized his immense institutional power to groom young men, primarily seminarians and junior clergy, whom he affectionately dubbed his "nephews," insisting they call him "Uncle Ted". As an only child, McCarrick possessed no actual nephews, rendering the moniker a transparently manipulative construct utilized to groom victims and their families.
          </p>

          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 my-8">
            <blockquote className="italic text-xl text-foreground/90 border-l-4 border-destructive pl-4">
              "There was always one of the nephews at these dinners. And the dinners were always five times a month. If someone cancelled, you had to find a replacement."
            </blockquote>
            <cite className="text-sm text-muted-foreground mt-2 block">— Former priest secretary to McCarrick, testimony to Vatican investigators</cite>
          </div>

          <p>
            This revelation is critical: the priest secretary was not a passive observer but was actively tasked with sourcing "replacements" to ensure the Archbishop's predatory social ecosystem remained undisturbed. The secretary described these events as "very orchestrated, very punctual," indicating that the secretaries were drawn into the grooming process, acting as social coordinators who ensured McCarrick always had access to his preferred demographic.
          </p>

          <p>
            When McCarrick traveled—another aspect managed exclusively by his secretaries—he was rarely alone. He infamously brought James Grein, a victim he had abused since childhood, to the Vatican in 1988 to meet Pope John Paul II. Similarly, "Priest 2" (Robert Ciolek) was frequently taken on trips and vacations, including to Puerto Rico. The secretaries booked these flights, packed the bags, managed the itineraries, and ensured the Archbishop's "favorites" were seamlessly integrated into his professional travel schedule.
          </p>
        </div>
      </section>

      {/* Chronological Roster */}
      <section className="space-y-8">
        <h2 className="font-heading text-4xl text-foreground uppercase flex items-center gap-3">
          <FileText className="w-8 h-8 text-destructive" />
          Chronological Roster of Priest Secretaries (1986–2000)
        </h2>

        <div className="grid gap-4">
          {secretaries.map((sec, idx) => (
            <Card key={idx} className="border-border/50 hover:border-destructive/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="font-heading text-xl">{sec.name}</CardTitle>
                  <span className="font-mono text-xs text-destructive uppercase tracking-wider">{sec.years}</span>
                </div>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">{sec.role}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm"><strong>Career:</strong> {sec.career}</p>
                <p className="text-sm text-destructive/90"><strong>Systemic Implication:</strong> {sec.implication}</p>
                <p className="text-xs font-mono text-muted-foreground uppercase">Status: {sec.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/20 border border-border rounded-lg p-6">
          <h3 className="font-heading text-xl mb-4">Complete Historical Directories (1986-2000)</h3>
          <div className="font-mono text-xs space-y-1 text-muted-foreground columns-2 md:columns-3">
            <p>1986: Rev. John E. Doran</p>
            <p>1987: Rev. Robert J. Furman, Rev. Frank Del Prete</p>
            <p>1988-97: Rev. George R. Trabold (Development)</p>
            <p>1989: Rev. Robert J. Furman, Rev. Joseph C. Doyle</p>
            <p>1990: Rev. Anthony Ziccardi, Rev. Robert Emery</p>
            <p>1991: Rev. Robert Emery, Rev. Kenneth L. Martin, Rev. Frank Del Prete</p>
            <p>1992: Rev. Kenneth L. Martin, Rev. James S. Choma</p>
            <p>1993: Rev. James S. Choma, Rev. Warren R. Hall</p>
            <p>1994: Rev. Joseph Reilly, Rev. Anthony Figueiredo</p>
            <p>1995-96: Rev. Robert G. Templeton, Rev. Thomas P. Nydegger</p>
            <p>1997: Rev. Thomas A. Dente, Rev. Christopher M. Ciccarino</p>
            <p>1998: Rev. Eugene J. Field, Rev. Robert E. Emery</p>
            <p>1999: Rev. Richard Corbett</p>
            <p>2000: Rev. James V. Teti (sede vacante)</p>
          </div>
        </div>
      </section>

      {/* Key Figures Detail */}
      <section className="space-y-8">
        <h2 className="font-heading text-4xl text-foreground uppercase">Key Figures: From Secretaries to Power</h2>

        <div className="space-y-8">
          <Card className="border-destructive/30">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-destructive">Msgr. Joseph Reilly: From Secretary to Seton Hall President</CardTitle>
            </CardHeader>
            <CardContent className="font-body text-lg text-foreground/80 space-y-4">
              <p>
                Reilly served as priest secretary to McCarrick in 1994 alongside Father Anthony Figueiredo. Like many of McCarrick's favored administrators, Reilly was entrusted with the formation of future priests, serving as Rector of the College Seminary at St. Andrew's Hall from 2012 to 2022.
              </p>
              <p>
                In 2024, the Seton Hall Board of Regents appointed him as the 22nd President of Seton Hall University, championing his "leadership and management style."
              </p>
              <p className="text-destructive">
                However, leaked details from the confidential 2019 Latham Report revealed that Msgr. Reilly was explicitly implicated as having prior knowledge of sexual abuse and harassment allegations involving McCarrick and seminarians at Immaculate Conception Seminary, but actively failed to report them, violating Title IX policies. The investigation noted Reilly had visited McCarrick's beach house but deliberately chose to stay in a downstairs bedroom because he was already aware of rumors that McCarrick was sharing a bed with seminarians upstairs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/30">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-destructive">Msgr. Thomas P. Nydegger: The Enforcer's Fall</CardTitle>
            </CardHeader>
            <CardContent className="font-body text-lg text-foreground/80 space-y-4">
              <p>
                Ordained in 1992, Nydegger served as Secretary to Archbishop McCarrick in 1995-1996 alongside Rev. Robert G. Templeton. Both were prominently named in the 2019 Latham Report investigating the cover-up culture at Seton Hall.
              </p>
              <p>
                He was appointed Archdiocesan Vocations Director, Vice Rector of Immaculate Conception Seminary, and eventually, in 2014, Archbishop John J. Myers appointed Nydegger to the supreme curial post of Vicar General and Moderator of the Curia.
              </p>
              <p className="text-destructive">
                As Vicar General, Nydegger became the principal deputy for administrative authority, wielding immense executive power. His tenure was marked by controversy and tone-deaf management. In 2019, as the McCarrick scandal broke, Nydegger actively suppressed parish-level healing initiatives, inexplicably canceling a scheduled "Healing Our Church" program designed to support victims of clerical sexual abuse.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Rome Connection */}
      <section className="space-y-8">
        <h2 className="font-heading text-4xl text-foreground uppercase flex items-center gap-3">
          <Globe className="w-8 h-8 text-destructive" />
          The Macro-Parallel: The Vatican Secretariat and Stanisław Dziwisz
        </h2>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6 font-body">
          <p>
            The dynamics of complicity, gatekeeping, and institutional blindness observed within the Newark secretariat were not unique to New Jersey; they were fractally mirrored at the very highest levels of the universal Church in Rome. Just as McCarrick's local priest secretaries managed his environment, the personal secretary to Pope John Paul II—Bishop (later Cardinal) Stanisław Dziwisz—played a pivotal role in shielding McCarrick from Vatican-level accountability.
          </p>

          <p>
            By the late 1990s, Cardinal John O'Connor compiled a devastating letter on October 28, 1999, summarizing the specific accusations of pedophilia. This led to the conclusion that transferring McCarrick to a higher See would be "highly imprudent and dangerous." Bishop Edward Hughes stated unequivocally that it would be "unwise to consider the Archbishop for any promotion or additional honor."
          </p>

          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 my-8">
            <p className="italic text-lg text-foreground/90">
              Faced with the imminent derailment of his career, McCarrick wrote a direct, handwritten letter to Bishop Dziwisz on August 6, 2000:
            </p>
            <blockquote className="mt-4 italic text-xl text-destructive border-l-4 border-destructive pl-4">
              "In the seventy years of my life, I have never had sexual relations with any person, male or female, young or old, cleric or lay, nor have I ever abused another person or treated them with disrespect."
            </blockquote>
            <p className="mt-4 text-muted-foreground">
              McCarrick perjured himself in this letter, weaponizing manufactured humility and appealing directly to the man who controlled access to the Pontiff.
            </p>
          </div>

          <p className="text-destructive font-semibold">
            Dziwisz, acting as the ultimate gatekeeper, intercepted the objections from other American cardinals and the Nuncio, delivering McCarrick's fraudulent denial directly to John Paul II. The Pope appointed McCarrick as Archbishop of Washington on November 21, 2000, and created him a cardinal on February 21, 2001. The elevation of McCarrick to the cardinalate was the direct result of a secretarial intervention that prioritized personal relationships, financial utility, and institutional momentum over truth and accountability.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-6 border-t border-border pt-12">
        <h2 className="font-heading text-3xl text-foreground uppercase">Conclusion: The Bureaucratization of Evil</h2>
        <p className="font-body text-xl text-foreground/80 leading-relaxed">
          The tenure of Theodore McCarrick as Archbishop of Newark was a devastatingly effective masterclass in the exploitation of institutional architecture. The priest secretaries who served under him—whether explicitly identified figures like Msgr. Nydegger, Msgr. Reilly, and Rev. Kenneth Martin—were the essential logistical cogs in a complex machine designed to protect the powerful and exploit the vulnerable.
        </p>
        <p className="font-body text-xl text-foreground/80 leading-relaxed">
          By fracturing the predatory behavior into banal logistical tasks—booking a hotel room, inviting a specific seminarian to dinner, managing the guest list for a weekend at the beach house—the horror of the abuse was deeply bureaucratized. The secretaries were transformed into logistical engineers of a predatory system, their consciences anesthetized by the routine nature of their administrative duties and the prestige of their office.
        </p>
        <p className="font-body text-xl text-destructive leading-relaxed border-l-4 border-destructive pl-4">
          The ultimate tragedy is not merely that Theodore McCarrick was a prolific predator, but that the very administrative structures designed to support the pastoral mission of the Church were seamlessly, efficiently repurposed to facilitate his predation. The 2020 Vatican Report and McCarrick's unprecedented laicization serve as a permanent testament to the dangers of unchecked hierarchical power and the devastating, generational cost of institutional silence.
        </p>
      </section>

      <MemoryGate registryId="person-mccarrick" />
    </div>
  );
}
