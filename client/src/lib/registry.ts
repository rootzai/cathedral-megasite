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
        description: "The inner sanctum containing the 24,000-page Latham Report and the $628k slush fund records.", 
        radius: 12, 
        route: "#act-i",
        color: "rgba(255, 0, 0, 0.2)",
        breach: true
    },
    { 
        id: 2, 
        name: "LEGAL FORTRESS", 
        description: "The secondary barrier comprised of high-level canonical privilege claims and NDA-backed silos.", 
        radius: 24, 
        route: "#act-ii",
        color: "rgba(255, 0, 0, 0.15)",
        breach: true
    },
    { 
        id: 3, 
        name: "LEGAL APPARATUS", 
        description: "The operational machinery (Gibbons, Latham, NJ Govt) used to process and neutralize discovery threats.", 
        radius: 36, 
        route: "#act-ii",
        color: "rgba(212, 175, 55, 0.1)"
    },
    { 
        id: 4, 
        name: "THE OUTER WALLS", 
        description: "The institutional facade (Seton Hall University, RCAN) that presents the public-facing 'Architecture of Protection'.", 
        radius: 48, 
        route: "#act-iii",
        color: "rgba(255, 255, 255, 0.05)"
    },
    { 
        id: 5, 
        name: "VICTIMS & SURVIVORS", 
        description: "The outermost layer of the system, comprising those whose silence was suppressed and whose voices were scrubbed.", 
        radius: 60, 
        route: "#act-0",
        color: "rgba(255, 255, 255, 0.02)"
    }
];
