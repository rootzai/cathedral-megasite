/**
 * CATHEDRAL MEGASITE: FORENSIC REGISTRY
 * Central source of truth for all investigative actors, rings, and dossier routes.
 * Decouples hard-coded metadata from the UI components.
 */

export interface ForensicActor {
    id: string;
    name: string;
    role: string;
    tags: string[];
}

export interface ShieldRing {
    id: number;
    name: string;
    description: string;
    radius: number; // For SVG mapping
    route: string;
    color: string;
    breach?: boolean;
    act?: string;
}

export const PERPETRATORS: ForensicActor[] = [
    { id: "mccarrick", name: "Theodore McCarrick", role: "Primary Perpetrator", tags: ["core", "clergy"] },
    { id: "critchley", name: "Michael Critchley", role: "The Fixer / Lead Crisis Manager", tags: ["ringleader", "legal-wall", "seton-hall"] },
    { id: "martin", name: "Fr. Kenneth Martin", role: "Unreachable by Design", tags: ["core", "clergy"] },
    { id: "dealmeida", name: "Teresina DeAlmeida", role: "Enabler", tags: ["core"] },
    { id: "marino", name: "Kevin Marino", role: "Counsel / Former Board Chair", tags: ["legal-wall", "sanctioned", "seton-hall"] },
    { id: "porrino", name: "Chris Porrino", role: "Counsel / former NJ AG", tags: ["legal-wall", "seton-hall"] },
    { id: "scrivo", name: "Tom Scrivo", role: "Lead Counsel", tags: ["legal-wall", "sanctioned", "seton-hall"] },
    { id: "lasala", name: "Joe LaSala", role: "Senior Legal Advisor", tags: ["legal-wall", "seton-hall"] },
    { id: "christie", name: "Chris Christie", role: "Former Governor / US Attorney", tags: ["political-nexus"] },
    { id: "stio", name: "Angelo Stio", role: "Compliance Counsel", tags: ["legal-wall"] },
    { id: "linares", name: "Jose Linares", role: "Special Master", tags: ["legal-wall"] },
    { id: "papalia", name: "Patrick Papalia", role: "Discovery Counsel", tags: ["legal-wall"] },
    { id: "reilly", name: "Joseph Reilly", role: "University President", tags: ["machine", "clergy"] },
    { id: "tobin", name: "Cardinal Tobin", role: "Archdiocese Chair", tags: ["machine", "clergy"] }
];

export const FORENSIC_RINGS: ShieldRing[] = [
    { 
        id: 2, 
        name: "LEGAL FORTRESS", 
        description: "The 'Labyrinth' of institutional silence: A decades-long structural defense involving the Newark Export and the 50-year triangular architecture of protection.", 
        radius: 75, 
        route: "/ledger/mccarrick/network",
        color: "rgba(255, 0, 0, 0.15)",
        breach: true,
        act: "ACT II"
    },
    { 
        id: 3, 
        name: "LEGAL APPARATUS", 
        description: "The Scrivo-O'Toole mechanism: Forensic analysis of the 'Sanction Plea' and the strategic withholding of 3,500+ documents from NJ Court discovery.", 
        radius: 100, 
        route: "/ledger/mccarrick/mechanisms",
        color: "rgba(212, 175, 55, 0.1)",
        act: "ACT III"
    },
    { 
        id: 4, 
        name: "THE OUTER WALLS", 
        description: "The Succession: Mapping the Newark-Metuchen bridge and the institutional musical chairs that sanitized the 'Architecture of Protection' for 2026.", 
        radius: 125, 
        route: "/ledger/checchio",
        color: "rgba(255, 255, 255, 0.05)",
        act: "ACT VI"
    },
    { 
        id: 5, 
        name: "VICTIMS & SURVIVORS", 
        description: "The Human Core: Direct witness testimony and the 450+ survivors currently challenging the structural immunity in the Essex County Superior Court.", 
        radius: 155, 
        route: "/ledger/mccarrick/survivors",
        color: "rgba(255, 255, 255, 0.02)"
    }
];
