/**
 * CATHEDRAL MEGASITE: UNIVERSAL REGISTRY
 * 
 * The Global Sorting System ("The Matrix")
 * This registry acts as the architectural foundation bridging disparate objects:
 * Persons, Board Groups, Narrative Routes, Evidence Documents, and Timeline Events.
 */

import { 
  boardOfTrustees, 
  boardOfRegents, 
  boardOfVisitors, 
  KEY_DATES,
  investigativeFirms,
  shuLawyers,
  rcanLawyers 
} from "./data";

export type EntityCategory = 
  | "PERSON" 
  | "BOARD_OR_FIRM" 
  | "DOCUMENT" 
  | "EVENT" 
  | "NARRATIVE_ROUTE"; // Handles UI pages/orphaned routes

export interface GlobalSortKeys {
  /** 
   * Local ranking within its own category. 
   * e.g., A primary architect (McCarrick) = 1, Peripheral enabler = 5
   */
  categoryRank: number;
  
  /** 
   * Global weighting factor across all categories. Allows the system or UI 
   * to multiply or dynamically elevate a specific object over another across domains.
   * Higher = more gravity/importance systemically.
   */
  globalWeight: number; 
}

export interface UniversalNode {
  id: string;              // Primary key (slug)
  category: EntityCategory;
  name: string;
  description: string;
  dateStr?: string;        // Specific event/doc timestamp if applicable
  tags: string[];          // Matrix filter vectors (e.g. ['cover-up', 'clergy'])
  
  // The dual-layer ranking logic
  rankings: GlobalSortKeys;
  
  // Connective tissue
  routeUrl: string;        // Resolves the orphan page dilemma
  relatedUiNodes?: string[]; // Edge mapping to other node IDs
}

// ============================================================================
// THE ROOT DATASET (Sample instantiation of the roots)
// ============================================================================

export const UNIVERSAL_REGISTRY: UniversalNode[] = [
  // --- NARRATIVE ROUTES (Re-integrating Orphans) ---
  {
    id: "route-prologue",
    category: "NARRATIVE_ROUTE",
    name: "The Crawford Thread (Prologue)",
    description: "The originating investigation starting with Mark Crawford's suppression.",
    tags: ["narrative", "core"],
    rankings: { categoryRank: 1, globalWeight: 100 },
    routeUrl: "/prologue"
  },
  {
    id: "route-method",
    category: "NARRATIVE_ROUTE",
    name: "Forensic Methodology",
    description: "How the open-source investigation constructs the architecture of complicity.",
    tags: ["narrative", "meta"],
    rankings: { categoryRank: 2, globalWeight: 80 },
    routeUrl: "/method"
  },
  {
    id: "route-madman",
    category: "NARRATIVE_ROUTE",
    name: "Madman McCarrick Archive",
    description: "The restructured 6-part deep dive on Theodore McCarrick.",
    tags: ["narrative", "core", "dossier"],
    rankings: { categoryRank: 1, globalWeight: 95 },
    routeUrl: "/madman"
  },
  {
    id: "route-ledger",
    category: "NARRATIVE_ROUTE",
    name: "The Ledger (Governing Boards)",
    description: "Visualizer of the specific human architecture blocking justice.",
    tags: ["data", "boards"],
    rankings: { categoryRank: 1, globalWeight: 90 },
    routeUrl: "/ledger"
  },
  {
    id: "route-opinion",
    category: "NARRATIVE_ROUTE",
    name: "Independent Opinions",
    description: "Columnists, journalists, and survivor perspectives.",
    tags: ["narrative", "external"],
    rankings: { categoryRank: 3, globalWeight: 70 },
    routeUrl: "/opinion"
  },

  // --- PERSONS (Sourced from data.ts / registry.ts context) ---
  {
    id: "person-mccarrick",
    category: "PERSON",
    name: "Theodore McCarrick",
    description: "The architect of the patronage network. Defrocked 2019.",
    tags: ["clergy", "primary-perpetrator", "succeeded"],
    rankings: { categoryRank: 1, globalWeight: 100 },
    routeUrl: "/madman"
  },
  {
    id: "person-martin",
    category: "PERSON",
    name: "Fr. Kenneth Martin",
    description: "The 'Madman Secretary' managing the shadow ledger.",
    tags: ["clergy", "fixer", "secret archives"],
    rankings: { categoryRank: 2, globalWeight: 90 },
    routeUrl: "/origin/martin" // Points to his specific ledger route
  },
  {
    id: "person-scrivo",
    category: "PERSON",
    name: "Thomas Scrivo",
    description: "Lead outside counsel executing the legal suppression strategy.",
    tags: ["legal", "fixer", "seton-hall"],
    rankings: { categoryRank: 1, globalWeight: 95 },
    routeUrl: "/ledger" 
  },
  {
    id: "person-reilly",
    category: "PERSON",
    name: "Msgr. Joseph R. Reilly",
    description: "Current University President acting as successor proxy.",
    tags: ["clergy", "successor", "seton-hall"],
    rankings: { categoryRank: 2, globalWeight: 85 },
    routeUrl: "/succession/regime" 
  },

  // --- DOCUMENTS / EVIDENCE ---
  {
    id: "doc-latham",
    category: "DOCUMENT",
    name: "The Latham & Watkins Report",
    description: "The 24,000-page internal investigation detailing systemic complicity, hidden under attorney-client privilege.",
    dateStr: "August 2019",
    tags: ["evidence", "cover-up", "vault"],
    rankings: { categoryRank: 1, globalWeight: 100 },
    routeUrl: "/vault"
  },
  {
    id: "doc-politico",
    category: "DOCUMENT",
    name: "Politico Exposed Document",
    description: "Leaked internal memo proving awareness among the Archdiocese and Seton Hall operational hierarchy.",
    dateStr: "2020",
    tags: ["evidence", "leak"],
    rankings: { categoryRank: 2, globalWeight: 85 },
    routeUrl: "/evidence/politico-report"
  },
  {
    id: "route-reilly-irishman",
    category: "NARRATIVE_ROUTE",
    name: "Msgr. Reilly: Irishman of the Year",
    description: "Satirical but true examination of the elevation of Msgr. Reilly to 'Irishman of the Year' while under the cloud of the Latham Report.",
    tags: ["narrative", "reilly", "essex-county", "satire"],
    rankings: { categoryRank: 4, globalWeight: 60 },
    routeUrl: "/ledger/reilly/irishman"
  },
  {
    id: "route-epstein-emails",
    category: "NARRATIVE_ROUTE",
    name: "Evidence: The Ruemmler Epstein Emails",
    description: "Documentation of Kathryn Ruemmler's extensive meetings with Jeffrey Epstein during the exact period she was running Seton Hall's McCarrick coverup.",
    tags: ["narrative", "vault", "evidence", "latham", "epstein"],
    rankings: { categoryRank: 2, globalWeight: 85 },
    routeUrl: "/vault/epstein-emails"
  },
  {
    id: "route-press-briefing",
    category: "NARRATIVE_ROUTE",
    name: "Press Briefing: The Architecture of Protection",
    description: "A summary briefing breaking down the current Cathedral scandal for the media.",
    tags: ["narrative", "press", "journalism", "summary"],
    rankings: { categoryRank: 3, globalWeight: 75 },
    routeUrl: "/expose/press-briefing"
  }
];

// Helper to reliably cast any array to our mapping structure without fighting type rigidity
function generateDynamicNodes(): UniversalNode[] {
  const dynamic: UniversalNode[] = [];
  
  // 1. Boards Mapping
  const boards = [boardOfTrustees, boardOfRegents, boardOfVisitors];
  boards.forEach(board => {
    // Add the Board entity itself
    dynamic.push({
      id: `board-${board.id}`,
      category: "BOARD_OR_FIRM",
      name: board.title,
      description: board.description || "University governing body.",
      tags: ["institutional-layer", board.id],
      rankings: { categoryRank: 1, globalWeight: 90 },
      routeUrl: "/ledger"
    });

    // Add individuals within the board
    const allMembers = [
      ...(board.leadership || []),
      ...(board.members || []),
      ...(board.clergy || [])
    ];

    allMembers.forEach(m => {
      // Avoid duplicating people like McCarrick or Scrivo if they are already in the STATIC roots
      if (UNIVERSAL_REGISTRY.some(n => n.name.toLowerCase() === m.name.toLowerCase())) return;

      const isLatham = (m.badges || []).includes("latham");
      const isChair = m.role.toLowerCase().includes("chair");
      
      dynamic.push({
        id: `person-${m.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}-${board.id}`,
        category: "PERSON",
        name: m.name,
        description: `${m.role} (${m.tenure}). ${m.note || ""}`,
        tags: [...(m.badges || []), board.id],
        rankings: { 
          categoryRank: isChair ? 2 : 3, 
          // Boost global weight for the highly relevant 2019 coverup cohort
          globalWeight: isLatham ? 75 : 55 
        },
        routeUrl: "/they-knew"
      });
    });
  });

  // 2. Map Key Dates
  KEY_DATES.forEach((d, i) => {
    dynamic.push({
      id: `event-timeline-${i}`,
      category: "EVENT",
      name: d.date,
      description: d.event,
      dateStr: d.date,
      tags: ["timeline"],
      rankings: { categoryRank: 1, globalWeight: 50 },
      routeUrl: "/breach/courtroom"
    });
  });

  // 3. Map Law Firms
  const allFirms = [...investigativeFirms, ...shuLawyers, ...rcanLawyers];
  allFirms.forEach((firm, i) => {
    dynamic.push({
      id: `firm-${i}`,
      category: "BOARD_OR_FIRM",
      name: firm.firm,
      description: firm.role,
      tags: ["legal-wall"],
      rankings: { categoryRank: 2, globalWeight: 65 },
      routeUrl: "/they-knew"
    });
    
    // Also add their key attorneys
    firm.people.forEach((p: any) => {
      if (UNIVERSAL_REGISTRY.some(n => n.name.toLowerCase() === p.name.toLowerCase())) return;
      
      dynamic.push({
        id: `lawyer-${p.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}`,
        category: "PERSON",
        name: p.name,
        description: `Attorney at ${firm.firm}. ${p.title || ""} ${p.note || ""}`,
        tags: ["legal-wall"],
        rankings: { categoryRank: 2, globalWeight: 70 },
        routeUrl: "/they-knew"
      });
    });
  });

  return dynamic;
}

/**
 * Utility function to sort the matrix across categories.
 * Calculates an aggregate relevance score for pure data-table presentation.
 */
export const getSortedRegistry = (): UniversalNode[] => {
  const completeRegistry = [...UNIVERSAL_REGISTRY, ...generateDynamicNodes()];
  
  return completeRegistry.sort((a, b) => {
    // 1. Prioritize cross-category Global Weight (Descending)
    if (b.rankings.globalWeight !== a.rankings.globalWeight) {
      return b.rankings.globalWeight - a.rankings.globalWeight;
    }
    // 2. If global weights match, prioritize their standing within their own category (Ascending, where 1 is highest rank)
    if (a.rankings.categoryRank !== b.rankings.categoryRank) {
      return a.rankings.categoryRank - b.rankings.categoryRank;
    }
    // 3. Fallback alpha sort
    return a.name.localeCompare(b.name);
  });
};
