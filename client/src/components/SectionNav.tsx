import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface Section {
  href: string;
  label: string;
}

interface DossierNavProps {
  currentHref: string;
  sections: Section[];
  returnTo?: { href: string; label: string };
}

function DossierNav({ currentHref, sections, returnTo = { href: "/ledger", label: "Return to Ledger" } }: DossierNavProps) {
  const idx = sections.findIndex((s) => s.href === currentHref);
  const prev = idx > 0 ? sections[idx - 1] : null;
  const next = idx < sections.length - 1 ? sections[idx + 1] : null;

  return (
    <div className="mt-12 pt-8 border-t border-border space-y-6">
      {/* Prev / Next */}
      <div className="flex justify-between items-center">
        {prev ? (
          <Link href={prev.href} asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> {prev.label}
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={next.href} asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              {next.label} <span className="ml-2">→</span>
            </Button>
          </Link>
        ) : (
          <Link href={returnTo.href} asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              {returnTo.label} <span className="ml-2">⌂</span>
            </Button>
          </Link>
        )}
      </div>

      {/* Jump to section */}
      <details className="group">
        <summary className="font-mono text-xs uppercase tracking-widest text-zinc-500 cursor-pointer hover:text-white transition-colors select-none">
          Jump to section ▾
        </summary>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
          {sections.map((s, i) => (
            <Link key={s.href} href={s.href}>
              <span
                className={`block px-3 py-2 font-mono text-xs uppercase tracking-wider border transition-colors cursor-pointer ${s.href === currentHref
                  ? "border-red-700 bg-red-900/20 text-white"
                  : "border-white/5 text-zinc-500 hover:text-white hover:border-white/20"
                  }`}
              >
                {String(i + 1).padStart(2, "0")}. {s.label}
              </span>
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}

// ─── MCCARRICK ──────────────────────────────────────────
const MCCARRICK_SECTIONS: Section[] = [
  { href: "/ledger/mccarrick", label: "Introduction" },
  { href: "/ledger/mccarrick/background", label: "Background" },
  { href: "/ledger/mccarrick/profile", label: "Profile" },
  { href: "/ledger/mccarrick/the-rise", label: "The Rise" },
  { href: "/ledger/mccarrick/the-regime", label: "The Regime" },
  { href: "/ledger/mccarrick/network", label: "The Network" },
  { href: "/ledger/mccarrick/warnings", label: "Warnings Ignored" },
  { href: "/ledger/mccarrick/mechanisms", label: "Mechanisms" },
  { href: "/ledger/mccarrick/seton-hall", label: "Seton Hall" },
  { href: "/ledger/mccarrick/popes", label: "The Popes" },
  { href: "/ledger/mccarrick/secretaries", label: "The Secretariat" },
  { href: "/ledger/mccarrick/downfall", label: "Downfall" },
  { href: "/ledger/mccarrick/the-reckoning", label: "The Reckoning" },
  { href: "/ledger/mccarrick/legal", label: "Legal Actions" },
  { href: "/ledger/mccarrick/survivors", label: "Survivors" },
  { href: "/ledger/mccarrick/responses", label: "Responses" },
  { href: "/ledger/mccarrick/analysis", label: "Analysis" },
  { href: "/ledger/mccarrick/conclusion", label: "Conclusion" },
];

export default function SectionNav({ currentHref }: { currentHref: string }) {
  return <DossierNav currentHref={currentHref} sections={MCCARRICK_SECTIONS} />;
}

// ─── CHECCHIO ───────────────────────────────────────────
const CHECCHIO_SECTIONS: Section[] = [
  { href: "/ledger/checchio", label: "Introduction" },
  { href: "/ledger/checchio/formation", label: "Formation" },
  { href: "/ledger/checchio/ascent", label: "The Ascent" },
  { href: "/ledger/checchio/governance", label: "Governance" },
  { href: "/ledger/checchio/purge", label: "The Purge" },
  { href: "/ledger/checchio/controversies", label: "Controversies" },
  { href: "/ledger/checchio/status", label: "Current Status" },
];

export function CheckchioSectionNav({ currentHref }: { currentHref: string }) {
  return <DossierNav currentHref={currentHref} sections={CHECCHIO_SECTIONS} />;
}

// ─── LORENZO ────────────────────────────────────────────
const LORENZO_SECTIONS: Section[] = [
  { href: "/ledger/lorenzo", label: "Introduction" },
  { href: "/ledger/lorenzo/expulsion", label: "Expulsion" },
  { href: "/ledger/lorenzo/rehabilitation", label: "Rehabilitation" },
  { href: "/ledger/lorenzo/elevation", label: "Elevation" },
];

export function LorenzoSectionNav({ currentHref }: { currentHref: string }) {
  return <DossierNav currentHref={currentHref} sections={LORENZO_SECTIONS} />;
}

// ─── MARTIN ─────────────────────────────────────────────
const MARTIN_SECTIONS: Section[] = [
  { href: "/ledger/martin", label: "Introduction" },
  { href: "/ledger/martin/crimes", label: "The Crimes" },
  { href: "/ledger/martin/launder", label: "The Launder" },
  { href: "/ledger/martin/chicago", label: "Chicago Connection" },
];

export function MartinSectionNav({ currentHref }: { currentHref: string }) {
  return <DossierNav currentHref={currentHref} sections={MARTIN_SECTIONS} />;
}

// ─── REILLY ─────────────────────────────────────────────
const REILLY_SECTIONS: Section[] = [
  { href: "/ledger/reilly", label: "Introduction" },
  { href: "/ledger/reilly/secretary", label: "The Secretary" },
  { href: "/ledger/reilly/latham", label: "The Latham Report" },
  { href: "/ledger/reilly/presidency", label: "The Presidency" },
  { href: "/ledger/reilly/memes", label: "Court of Opinion" },
  { href: "/ledger/reilly/reckoning", label: "The Reckoning" },
  { href: "/ledger/reilly/status", label: "Current Status" },
];

export function ReillySectionNav({ currentHref }: { currentHref: string }) {
  return <DossierNav currentHref={currentHref} sections={REILLY_SECTIONS} />;
}

// ─── LEDGER-LEVEL NAV (for single-page dossiers) ───────
const DOSSIER_INDEX: Section[] = [
  { href: "/ledger/mccarrick", label: "McCarrick Dossier" },
  { href: "/ledger/checchio", label: "Checchio Dossier" },
  { href: "/ledger/martin", label: "Martin Dossier" },
  { href: "/ledger/lorenzo", label: "Lorenzo Dossier" },
  { href: "/ledger/reilly", label: "Reilly Dossier" },
];

export function LedgerNav() {
  return (
    <div className="mt-12 pt-8 border-t border-border space-y-6">
      <div className="flex justify-center">
        <Link href="/ledger" asChild>
          <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
            Return to Ledger <span className="ml-2">⌂</span>
          </Button>
        </Link>
      </div>
      <details className="group">
        <summary className="font-mono text-xs uppercase tracking-widest text-zinc-500 cursor-pointer hover:text-white transition-colors select-none">
          Jump to dossier ▾
        </summary>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
          {DOSSIER_INDEX.map((s, i) => (
            <Link key={s.href} href={s.href}>
              <span className="block px-3 py-2 font-mono text-xs uppercase tracking-wider border border-white/5 text-zinc-500 hover:text-white hover:border-white/20 transition-colors cursor-pointer">
                {String(i + 1).padStart(2, "0")}. {s.label}
              </span>
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
