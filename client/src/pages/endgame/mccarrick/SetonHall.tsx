import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import RedactedText from "@/components/RedactedText";

export default function SetonHall() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <SectionHeader 
        number="05" 
        title="The Seton Hall Connection" 
        subtitle="The 'Culture of Fear' and the Beach House"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-96 w-full overflow-hidden border border-destructive/30 group">
          <img 
            src="/assets/memes/Seminaryconfidential.png" 
            alt="Seminary Confidential Movie Poster" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">Seminary Confidential</h2>
            <p className="text-sm text-gray-300 italic">"Where every confession is off the record."</p>
          </div>
        </div>
        <div className="relative h-96 w-full overflow-hidden border border-destructive/30 group">
          <img 
            src="/assets/memes/facultyclub.png" 
            alt="Seton Hall Faculty Club Satire" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
            style={{ animationDelay: '3s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">The Faculty Club</h2>
            <p className="text-sm text-gray-300 italic">"Membership has its privileges. Accountability not included."</p>
          </div>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="lead text-xl font-serif border-l-4 border-destructive pl-6 italic text-muted-foreground">
          "The seminary was known as a 'brothel' in the 80s and 90s... McCarrick created a culture of fear and intimidation."
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
          Despite his rising status and eventual move to Washington D.C., McCarrick maintained a disturbing physical presence at Seton Hall. It is documented that he kept a private room at the seminary <strong className="text-white">until 2019</strong>—years after his retirement and well into the period when allegations were becoming public.
        </p>
        <p>
          This room served as a base of operations and a symbol of his lingering influence. Its existence raises serious questions about the university administration's complicity and their failure to sever ties with a known predator.
        </p>

        <h3 className="text-destructive font-display uppercase tracking-widest mt-12 border-b border-border pb-2">The Sea Girt Beach House</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="relative h-96 w-full overflow-hidden border border-destructive/30 group">
            <img 
              src="/assets/memes/Beachhouseonce.png" 
              alt="Reilly Beach House Admission" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-2xl font-display uppercase text-white text-shadow-blood mb-1">"I was only there once"</h2>
              <p className="text-sm text-gray-300 italic">Msgr. Reilly's convenient memory.</p>
            </div>
          </div>
          <div className="relative h-96 w-full overflow-hidden border border-destructive/30 group">
            <img 
              src="/assets/memes/Reillybeachhousedark.png" 
              alt="Reilly Beach House Dark Satire" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
              style={{ animationDelay: '2s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-2xl font-display uppercase text-white text-shadow-blood mb-1">The Upstairs Secret</h2>
              <p className="text-sm text-gray-300 italic">"I went downstairs to bed... knowing what was going on upstairs."</p>
            </div>
          </div>
        </div>

        <div className="relative h-96 w-full overflow-hidden border border-destructive/30 my-8 group">
          <img 
            src="/assets/memes/thepredators.png" 
            alt="Groom Island Satire" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-4xl font-display uppercase text-white text-shadow-blood mb-2">Welcome to Groom Island</h2>
            <p className="text-xl text-gray-300 italic">"Where the rich send predators to get spiritual."</p>
          </div>
        </div>

        <p>
          Central to McCarrick's abuse was the beach house in Sea Girt, New Jersey. Purchased by the Diocese of Metuchen, this property became a notorious site for McCarrick's "grooming" rituals.
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-destructive">
          <li><strong>The "Uncle Ted" Persona:</strong> McCarrick would invite groups of seminarians to the beach house, fostering a casual, "family-like" atmosphere to lower their defenses.</li>
          <li><strong>The Bed Arrangement:</strong> He would often invite more guests than there were beds, creating a pretext to force young men to share a bed with him.</li>
          <li><strong>Joseph Reilly's Role:</strong> Monsignor Joseph Reilly, who served as McCarrick's secretary in 1994, admitted to visiting the beach house. As the gatekeeper to the Archbishop, his presence at this site of abuse is a critical detail in understanding the circle of enablers.</li>
        </ul>

        <div className="bg-secondary/50 p-6 border border-destructive/20 mt-12">
          <h4 className="font-mono text-sm text-destructive uppercase mb-4">Investigative Note</h4>
          <p className="text-sm font-mono">
            The Vatican's 2020 report confirmed that Cardinal O'Connor of New York eventually intervened, questioning the activities at the Sea Girt house, which abruptly ended the "invitations" for seminarians. However, the damage had been done for over a decade.
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-12 border-t border-border">
        <Button variant="outline" className="font-mono uppercase tracking-widest hover:bg-destructive hover:text-white transition-colors" asChild>
          <Link href="/network">← 04. Network</Link>
        </Button>
        <Button variant="outline" className="font-mono uppercase tracking-widest hover:bg-destructive hover:text-white transition-colors" asChild>
          <Link href="/warnings">06. Warnings →</Link>
        </Button>
      </div>
    </div>
  );
}
