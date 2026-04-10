import { ReillySectionNav } from "@/components/SectionNav";
import SectionHeader from "@/components/SectionHeader";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Image as ImageIcon } from "lucide-react";

const memeGallery = [
  {
    src: "/assets/memes/reilly/beach-house-once.png",
    title: "The Denial",
    caption: "Reilly's claim of visiting the McCarrick beach house 'only once' — juxtaposed against the Supplemental Task Force Notice documenting what he knew.",
  },
  {
    src: "/assets/memes/reilly/reilly-beach-house-dark.png",
    title: "The Admission",
    caption: "'I immediately went downstairs to bed… knowing what was going on upstairs.' The beach house visit Reilly admitted to — and its full implications.",
  },
  {
    src: "/assets/memes/reilly/devil-likes-your-work.png",
    title: "The Rector's Throne",
    caption: "18 years. 6 violations. 0 consequences. 'You don't stay rector for nearly two decades unless the devil likes your work.'",
  },
  {
    src: "/assets/memes/reilly/bless-me-father.png",
    title: "The Confession",
    caption: "'Bless me Father, for I protected a predator.' The Church said: 'Your penance is a promotion.' Reilly didn't need forgiveness — he got a presidential suite.",
  },
  {
    src: "/assets/memes/reilly/reilly-cap-gown.png",
    title: "The Graduation",
    caption: "Academic Year 2023–2024: Promoted by the same Regents who were told to remove him.",
  },
  {
    src: "/assets/memes/reilly/hall-of-shame.png",
    title: "Seton Hall of Shame",
    caption: "Cardinal Tobin: 'You're the right person at the right time for Seton Hall.' Luke 17:2: 'It would be better for him to have a millstone around his neck…'",
  },
  {
    src: "/assets/memes/reilly/apply-through-reilly.png",
    title: "Club Maxwell",
    caption: "'How to Join Club Maxwell: Orientation starts with a background check. Don't worry — yours won't matter. Apply now through Msgr. Reilly.'",
  },
  {
    src: "/assets/memes/reilly/reilly-rides-stang.png",
    title: "Reilly Rides a Stang",
    caption: "McCarrick. Reilly. Tobin. The lineage of protection — three men, one system, riding the same institutional beast.",
  },
  {
    src: "/assets/memes/reilly/wheres-reilly.png",
    title: "Where's Reilly?",
    caption: "Still hiding. Still in charge. The question the Board of Regents refuses to answer.",
  },
  {
    src: "/assets/memes/reilly/reilly-tobin-doesnt-speak.png",
    title: "Does Not Speak for Seton Hall",
    caption: "Cardinal Tobin 'does not speak for Seton Hall' — but his hand-picked president runs it.",
  },
  {
    src: "/assets/memes/reilly/accountability.png",
    title: "The Cost of Accountability",
    caption: "Penn State & Michigan State: Presidents went to jail for significantly less. Seton Hall: Promotion, Praise, Presidential medallion.",
  },
  {
    src: "/assets/memes/reilly/commencement-ceremony.png",
    title: "Commencement Ceremony",
    caption: "School of Crisis Containment. 'They don't just cover up — they credential it.' Bachelor of Silence, Seton Hall.",
  },
  {
    src: "/assets/memes/reilly/honor-roll.png",
    title: "The Honor Roll",
    caption: "Chris Christie: Exceptional Obstruction. Mary Pat: Financial Faithfulness. Kevin Marino: Legal Limbo Excellence. 'When shame buys naming rights.'",
  },
  {
    src: "/assets/memes/reilly/deny-deny.png",
    title: "Wire Fraud 101",
    caption: "Guest Lecture by Hank D'Alessandro. Rule #1: When in doubt, send a mass email. Deny you ever read the attachments.",
  },
  {
    src: "/assets/memes/reilly/doomers.png",
    title: "Qui Tacent",
    caption: "'Qui Tacent, Condemnare Possunt' — Those who are silent consent to be condemned. 'If God sees that the righteous can protest, and they do not protest, He seizes them first.'",
  },
];

export default function Memes() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <SectionHeader
        number="05"
        title="The Court of Public Opinion"
        subtitle="Satirical Commentary and Investigative Art"
      />

      <div className="bg-zinc-900/50 border border-border p-8 space-y-4">
        <div className="flex items-center gap-3">
          <ImageIcon className="w-6 h-6 text-destructive" />
          <h3 className="font-heading text-xl text-foreground">About This Gallery</h3>
        </div>
        <p className="font-body text-muted-foreground leading-relaxed">
          These images represent the growing body of satirical commentary that has emerged around the Seton Hall scandal. Created by whistleblowers, survivors' advocates, and investigative artists, they distill complex institutional corruption into visceral, shareable truths. Each piece draws directly from documented facts — the Latham Report, the Task Force removal recommendations, the beach house admissions, and the 18-day whistleblower hunt.
        </p>
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
          Click any image to view full size
        </p>
      </div>

      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memeGallery.map((meme) => (
          <Dialog key={meme.src}>
            <DialogTrigger asChild>
              <div className="group relative cursor-pointer overflow-hidden border border-border bg-card transition-all hover:border-destructive/50 hover:shadow-lg hover:shadow-destructive/10">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={meme.src}
                    alt={meme.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h4 className="font-heading text-lg text-white">{meme.title}</h4>
                  <p className="font-mono text-xs text-zinc-400 mt-1 line-clamp-2">{meme.caption}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl bg-zinc-950 border-destructive/20">
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl text-destructive">{meme.title}</DialogTitle>
              </DialogHeader>
              <div className="relative aspect-auto max-h-[75vh] w-full overflow-hidden rounded-md">
                <img
                  src={meme.src}
                  alt={meme.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="font-body text-sm text-zinc-400 mt-2 leading-relaxed">{meme.caption}</p>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <ReillySectionNav currentHref="/ledger/reilly/memes" />
    </div>
  );
}
