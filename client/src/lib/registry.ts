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
}

export const PERPETRATORS: ForensicActor[] = [
    { id: "mccarrick", name: "Theodore McCarrick", role: "Primary Perpetrator", tags: ["core", "clergy"] },
    { id: "martin", name: "Fr. Kenneth Martin", role: "Unreachable by Design", tags: ["core", "clergy"] },
    { id: "dealmeida", name: "Teresina DeAlmeida", role: "Enabler", tags: ["core"] },
    { id: "marino", name: "Kevin Marino", role: "Counsel / Former Board Chair", tags: ["legal-wall", "sanctioned"] },
    { id: "porrino", name: "Chris Porrino", role: "Counsel / former NJ AG", tags: ["legal-wall"] },
    { id: "scrivo", name: "Tom Scrivo", role: "Lead Counsel", tags: ["legal-wall", "sanctioned"] },
    { id: "stio", name: "Angelo Stio", role: "Compliance Counsel", tags: ["legal-wall"] },
    { id: "linares", name: "Jose Linares", role: "Special Master", tags: ["legal-wall"] },
    { id: "papalia", name: "Patrick Papalia", role: "Discovery Counsel", tags: ["legal-wall"] },
    { id: "reilly", name: "Joseph Reilly", role: "University President", tags: ["machine", "clergy"] },
    { id: "tobin", name: "Cardinal Tobin", role: "Archdiocese Chair", tags: ["machine", "clergy"] }
];

export const FORENSIC_RINGS: ShieldRing[] = [
    { 
        id: 1, 
        name: "SECRET ARCHIVES", 
        description: "The core investigative target: a subterranean repository of 24,000 buried documents, including the definitive Latham Report on clerical predation and the $628,000 'unreachable' slush fund used to incentivize silence.", 
        radius: 12, 
        route: "/vault",
        color: "rgba(255, 0, 0, 0.2)",
        breach: true
    },
    { 
        id: 2, 
        name: "LEGAL FORTRESS", 
        description: "The primary protective silo: a complex network of canonical privilege claims and NDA-backed non-disclosure mechanisms designed to spike discovery and isolate high-value clerical assets from civilian legal process.", 
        radius: 24, 
        route: "/breach",
        color: "rgba(255, 0, 0, 0.15)",
        breach: true
    },
    { 
        id: 3, 
        name: "LEGAL APPARATUS", 
        description: "The operational machine: corporate legal entities and 'white-shoe' firms (Gibbons, Latham) leveraged to weaponize the NJ Court system, falsify administrative timelines, and neutralize whistleblowers via sanctioned litigation.", 
        radius: 36, 
        route: "/ledger",
        color: "rgba(212, 175, 55, 0.1)"
    },
    { 
        id: 4, 
        name: "THE OUTER WALLS", 
        description: "The institutional facade: the Newark Archdiocese (RCAN) and Seton Hall University. This layer presents the public-facing 'Architecture of Protection' while facilitating the movement of clergy through the triangular system of silence.", 
        radius: 48, 
        route: "/evidence/machine",
        color: "rgba(255, 255, 255, 0.05)"
    },
    { 
        id: 5, 
        name: "VICTIMS & SURVIVORS", 
        description: "The outermost layer: individuals and advocacy networks whose testimony was methodically scrubbed from the official record to preserve the institutional shielding. This is the origin point of the breach.", 
        radius: 60, 
        route: "/evidence/victims",
        color: "rgba(255, 255, 255, 0.02)"
    }
];
