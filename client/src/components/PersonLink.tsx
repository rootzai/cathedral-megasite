import { Link } from "wouter";

/**
 * PersonLink — inline cross-reference for names mentioned in prose.
 * Maps known persons to their profile/dossier pages.
 * Falls back to rendering the name as plain text if no route is known.
 */

const PERSON_ROUTES: Record<string, string> = {
  "michael critchley": "/whos-who#critchley",
  "critchley": "/whos-who#critchley",
  "kevin marino": "/coverup/legal#kevin-marino",
  "marino": "/coverup/legal#kevin-marino",
  "thomas scrivo": "/coverup/legal#thomas-p-scrivo",
  "thomas p. scrivo": "/coverup/legal#thomas-p-scrivo",
  "scrivo": "/coverup/legal#thomas-p-scrivo",
  "christopher porrino": "/coverup/legal#christopher-s-porrino",
  "porrino": "/coverup/legal#christopher-s-porrino",
  "kathryn ruemmler": "/coverup/legal#kathryn-ruemmler",
  "ruemmler": "/coverup/legal#kathryn-ruemmler",
  "theodore mccarrick": "/ledger/mccarrick",
  "mccarrick": "/ledger/mccarrick",
  "joseph reilly": "/ledger/reilly",
  "msgr. reilly": "/ledger/reilly",
  "reilly": "/ledger/reilly",
  "cardinal tobin": "/ledger/mccarrick/succession",
  "joseph tobin": "/ledger/mccarrick/succession",
  "james checchio": "/ledger/checchio",
  "bishop checchio": "/ledger/checchio",
};

export function PersonLink({ name, className }: { name: string; className?: string }) {
  const route = PERSON_ROUTES[name.toLowerCase()];

  if (!route) {
    return <span className={className}>{name}</span>;
  }

  return (
    <Link
      href={route}
      className={`underline decoration-red-900/40 hover:decoration-red-500 hover:text-white transition-colors cursor-pointer ${className || ""}`}
    >
      {name}
    </Link>
  );
}
