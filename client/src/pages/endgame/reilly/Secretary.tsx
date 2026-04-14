import MemoryGate from "@/components/MemoryGate";
import { ReillySectionNav } from "@/components/SectionNav";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import ImageModal from "@/components/ImageModal";

export default function Secretary() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <SectionHeader
        number="02"
        title="The Archbishop's Shadow"
        subtitle="1994: What It Means to Be McCarrick's Secretary"
      />

      {/* What the Role Entails */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <h3 className="font-heading text-2xl text-foreground border-b border-border pb-2">The Role of a Bishop's Secretary</h3>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            In the Catholic Church, the role of a bishop's personal secretary is not ceremonial. The secretary manages the bishop's calendar, correspondence, and access. He is present at virtually all meetings. He screens visitors, drafts communications, and serves as the institutional memory of the bishop's office. He is, in the truest sense, the bishop's shadow.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Monsignor Joseph Reilly served as Archbishop Theodore McCarrick's personal secretary in <strong className="text-white">1994</strong> — the year before Pope John Paul II's historic visit to New Jersey in 1995. Reilly played a direct role in enabling and organizing that papal visit. The proximity required by that role — the daily, intimate access to McCarrick's schedule, his guests, his private communications — makes Reilly's subsequent claims of ignorance regarding McCarrick's conduct extraordinarily difficult to sustain.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative h-80 w-full overflow-hidden border-2 border-destructive/50 group">
            <img
              src="/assets/images/sea_girt_night.png"
              alt="Sea Girt Beach House"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="font-mono text-xs text-destructive mb-1">DOCUMENTED ABUSE SITE</div>
              <h4 className="font-heading text-xl text-white">The Sea Girt Beach House</h4>
              <p className="text-sm text-zinc-400 mt-1">McCarrick's "retreat" where seminarians were groomed</p>
            </div>
          </div>
          <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg">
            <h4 className="font-mono text-sm text-destructive uppercase mb-2">The Admission</h4>
            <p className="font-body text-sm text-muted-foreground">
              Reilly admitted visiting McCarrick's notorious Sea Girt beach house — even claiming it was only once. The Sea Girt property was the documented site of McCarrick's sexual abuse of seminarians. The Vatican's own 2020 report identified it as a primary location of abuse. For a man who served as the archbishop's secretary — whose professional role required near-constant proximity — to claim only a single visit strains credulity.
            </p>
          </div>
        </div>
      </div>

      {/* The Secretarial Apparatus */}
      <div className="space-y-8">
        <h3 className="font-heading text-2xl text-foreground border-b border-border pb-2">The Secretarial Apparatus</h3>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          The Madman McCarrick dossier — a comprehensive investigation into the logistical and administrative infrastructure that sustained McCarrick's predatory operations — identifies the role of priest secretaries as operational buffers. These men managed the "nephew" network, organized beach house visits, and maintained the systemic normalization of abuse within the highest echelons of diocesan power.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-sm text-destructive uppercase">Rev. George R. Trabold</h4>
              <Badge variant="outline" className="text-destructive border-destructive/50 font-mono text-xs">Removed 2016</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Secretary for Development & Canonical Affairs (1988–1997). Key archdiocesan fundraiser. Permanently removed from ministry after being credibly accused of child sexual abuse.</p>
          </div>
          <div className="bg-card border border-border p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-sm text-destructive uppercase">Rev. Kenneth L. Martin</h4>
              <Badge variant="outline" className="text-destructive border-destructive/50 font-mono text-xs">Barred 2008</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Secretary to the Archbishop (1991–1993). Managed chancery logistics during peak abuse years before assignments abruptly ceased in disgrace in 1996. Arrested for child sex abuse in Delaware.</p>
          </div>
          <div className="bg-card border border-border p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-sm text-destructive uppercase">Msgr. Joseph Reilly</h4>
              <Badge variant="outline" className="text-white border-white/50 font-mono text-xs">SHU President 2024</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Priest Secretary (1994). The only McCarrick secretary to be promoted rather than removed. A 2019 secret report exposed his failure to report abuse, leading to the 2025 scandal surrounding his presidency.</p>
          </div>
          <div className="bg-card border border-border p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-mono text-sm text-destructive uppercase">Msgr. Thomas P. Nydegger</h4>
              <Badge variant="outline" className="text-zinc-400 border-zinc-600 font-mono text-xs">Active</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Secretary (1995–1996). Currently serving as Vicar General of the Archdiocese of Newark. Oversaw the transition period during which McCarrick's power consolidated.</p>
          </div>
        </div>
      </div>

      {/* The 1995 Papal Whitewash */}
      <div className="space-y-6">
        <h3 className="font-heading text-2xl text-foreground border-b border-border pb-2">The 1995 Papal Whitewash</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              The year 1995 was a defining moment. As Theodore McCarrick prepared to host Pope John Paul II at Giants Stadium, the administrative team — led by figures including Reilly — worked to neutralize the growing "open secret" of McCarrick's operations.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Between 1992 and 1994, multiple warnings reached the U.S. Nunciature, including a direct report from Mother Mary Quentin Sheridan regarding McCarrick's behavior with seminarians. These warnings were treated as "defamatory libel" by the Newark administration. Reilly oversaw a culture where seminarians were instructed to be silent about McCarrick's beach house visits, where the Archbishop famously shared beds with adult men. This environment ensured that everyone in the inner circle was compromised.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              The successful execution of the papal visit — despite the internal knowledge of McCarrick's predation — represented the system's greatest achievement: a public display of holiness masking the institutional rot within.
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative h-64 w-full overflow-hidden border-2 border-border group">
              <img
                src="/assets/pope-giants-stadium.jpg"
                alt="Pope John Paul II at Giants Stadium, 1995"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-mono text-xs text-zinc-400">Giants Stadium, October 1995</p>
              </div>
            </div>
            <p className="font-mono text-xs text-zinc-500 italic">
              The papal visit that Reilly helped organize — while McCarrick's abuse was an "open secret" among the administrative inner circle.
            </p>
          </div>
        </div>
      </div>

      <MemoryGate registryId="person-reilly" />
    </div>
  );
}
