export type DndClassification = "OPEN" | "UNCLASSIFIED" | "CONFIDENTIAL" | "SECRET" | "TOP SECRET" | "COMPARTMENTED";

export interface AtomizedShell {
  id: string;
  title: string;
  group: string;
  narrative: string;
  visualFeatures: string;
  symbol: string;
  stats: {
    classification: DndClassification;
    exposureIndex: string;
    dataVolume: string;
    activeDefenses: string;
    vectors: string[];
  };
  people: {
    primary: string[];
    secondary: string[];
  };
  link: string; // the actual routing link
}

export const atomizedShells: AtomizedShell[] = [
  // GROUP I: Structural Mechanics
  {
    id: "01",
    title: "Foundation Engine",
    group: "Structural Mechanics",
    narrative: "The genesis agreements, original doctrinal structures, and the foundational logic that built the institutional machine.",
    visualFeatures: "A monolithic, slowly rotating architectural keystone. Hover states unseal original diocesan charters in glowing, high-contrast monospace text.",
    symbol: "The Keystone Node",
    stats: {
      classification: "CONFIDENTIAL",
      exposureIndex: "5.5",
      dataVolume: "1.2 GB",
      activeDefenses: "Institutional Inertia, Historical Obfuscation",
      vectors: ["Doctrinal Analysis", "Origin Schematics"]
    },
    people: { primary: ["The Institution", "The Archbishops"], secondary: ["Historical Precedents", "Unnamed Clergy"] },
    link: "/ledger/foundation",
  },
  {
    id: "02",
    title: "Humpty Paradox",
    group: "Structural Mechanics",
    narrative: "The systemic flaw in the machine. A visual demonstration of how a self-reinforcing hierarchy protects its apex at the cost of its foundation.",
    visualFeatures: "A dark 3D GSAP-animated sequence of intersecting rings that physically shatter when interacted with, revealing Dr. Seuss parallels.",
    symbol: "The Fractured Ring",
    stats: {
      classification: "SECRET",
      exposureIndex: "8.5",
      dataVolume: "24 GB",
      activeDefenses: "Complex Bureaucratic Logic, Willful Ignorance",
      vectors: ["The Perry Law Report", "Structural Analysis"]
    },
    people: { primary: ["Donna McMonagle", "Kim Capadona"], secondary: ["Christopher Porrino", "John Myers"] },
    link: "/humpty",
  },
  {
    id: "03",
    title: "The Machine",
    group: "Structural Mechanics",
    narrative: "The chilling reality of calendar management. How ordinary men facilitated systemic abuse simply by booking hotel rooms and dinners.",
    visualFeatures: "A repeating sequence of calendar dates and task lists that visually corrupt onto the screen. Hovering over a 'mundane' task reveals the abuse it facilitated.",
    symbol: "Interlocking Clockwork",
    stats: {
      classification: "COMPARTMENTED",
      exposureIndex: "8.8",
      dataVolume: "10 GB",
      activeDefenses: "Plausible Deniability, Compartmentalization",
      vectors: ["Secretarial Testimony", "The Waldorf Logs"]
    },
    people: { primary: ["19 Priest Secretaries", "Theodore McCarrick"], secondary: ["The Nephews", "James Grein"] },
    link: "/madman",
  },

  // GROUP II: The Architects
  {
    id: "04",
    title: "The Patriarch",
    group: "The Architects",
    narrative: "The apex predator at the center of the mechanism. The man who built the slush fund, compromised the hierarchy, and reigned untouched.",
    visualFeatures: "A blood-red dossier terminal. Brutalist typography lists his ascensions and the corresponding victims chronologically in a harsh ticker.",
    symbol: "The Broken Crosier",
    stats: {
      classification: "TOP SECRET",
      exposureIndex: "10.0",
      dataVolume: "115 GB",
      activeDefenses: "Papal Directives, Cult of Personality",
      vectors: ["The Sea Girt Manifests", "Settlement Payments"]
    },
    people: { primary: ["Theodore McCarrick"], secondary: ["Pope John Paul II", "John Myers"] },
    link: "/ledger/mccarrick",
  },
  {
    id: "05",
    title: "The Administrator",
    group: "The Architects",
    narrative: "The bureaucrat tasked with managing the fallout and maintaining the silence. Precision execution of the cover-up.",
    visualFeatures: "Extremely sterile, clinical white-on-black interface prioritizing raw data tables and internal memos over narrative text.",
    symbol: "Faceless Geometric Bust",
    stats: {
      classification: "SECRET",
      exposureIndex: "9.2",
      dataVolume: "45 GB",
      activeDefenses: "Administrative Delay, Internal Audits",
      vectors: ["The Purge Directives", "Governance Overrides"]
    },
    people: { primary: ["James Checchio"], secondary: ["Theodore McCarrick", "Ex-Seminarians"] },
    link: "/ledger/checchio",
  },
  {
    id: "06",
    title: "The Irishman",
    group: "The Architects",
    narrative: "The ex-police director running the institutional defense. The bridge between secular law enforcement and church corruption.",
    visualFeatures: "A radar-style UI mimicking law enforcement databases. Deep greens and teals with flashing redaction bars replacing names.",
    symbol: "Teal Crosshairs",
    stats: {
      classification: "COMPARTMENTED",
      exposureIndex: "9.4",
      dataVolume: "30 GB",
      activeDefenses: "Law Enforcement Ties, Coercion",
      vectors: ["Latham Protocols", "Police Intercepts"]
    },
    people: { primary: ["Garry Reilly"], secondary: ["Thomas McCormick", "Patrick Wall"] },
    link: "/ledger/reilly",
  },
  {
    id: "07",
    title: "The Fixer",
    group: "The Architects",
    narrative: "The logistics handler. He operated in the shadows, rehabilitating compromised assets and ensuring silence was maintained.",
    visualFeatures: "Static-heavy terminal screens. Images distort on scroll. Text is partially obscured until directly interacted with.",
    symbol: "Redacted Seal",
    stats: {
      classification: "SECRET",
      exposureIndex: "8.0",
      dataVolume: "18 GB",
      activeDefenses: "Data Erasure, Exile",
      vectors: ["Rehabilitation Memos", "Expulsion Records"]
    },
    people: { primary: ["Anthony Lorenzo"], secondary: ["Compromised Clergy", "Legal Fixers"] },
    link: "/ledger/lorenzo",
  },
  {
    id: "08",
    title: "The Launderer",
    group: "The Architects",
    narrative: "The financial architect. Tracing the flow of the slush fund through shell accounts and 'charitable' fronts.",
    visualFeatures: "A cascading ledger of numbers. Endless scrolling rows of financial transactions where specific, anomalous payouts glow gold.",
    symbol: "The Blank Ledger page",
    stats: {
      classification: "TOP SECRET",
      exposureIndex: "9.5",
      dataVolume: "65 GB",
      activeDefenses: "Forensic Laundering, Fiduciary Locks",
      vectors: ["Chicago Connection", "The Wire Transfers"]
    },
    people: { primary: ["Paul Martin"], secondary: ["Archbishop Cupich", "McCarrick Account Handlers"] },
    link: "/ledger/martin",
  },
  {
    id: "09",
    title: "The Attack Dog",
    group: "The Architects",
    narrative: "The lead external litigation attorney who turned the legal system into a meat grinder for survivors.",
    visualFeatures: "Aggressive, high-contrast red and black layout. Court dockets smash onto the screen like physical stamps.",
    symbol: "Geometric Portcullis",
    stats: {
      classification: "COMPARTMENTED",
      exposureIndex: "9.9",
      dataVolume: "88 GB",
      activeDefenses: "Ruthless Litigation, Gag Orders",
      vectors: ["The Deposition Transcripts", "Summary Judgments"]
    },
    people: { primary: ["Michael Critchley, Sr."], secondary: ["Robert McKeever", "Judge Wigenton"] },
    link: "/ledger/critchley",
  },
  {
    id: "10",
    title: "Roster Index",
    group: "The Architects",
    narrative: "The complete index of the institutional network. Everyone who knew, everyone who covered it up, everyone who stayed silent.",
    visualFeatures: "A massive, dense grid of dossier cards that forces the user to confront the sheer scale of the complicity. Black backgrounds, gold accents.",
    symbol: "Corrupted Triquetra",
    stats: {
      classification: "OPEN",
      exposureIndex: "ACTV",
      dataVolume: "5 GB",
      activeDefenses: "Sheer Volume, Anonymity in Numbers",
      vectors: ["Full Network Graph", "Complicity Index"]
    },
    people: { primary: ["The Enablers"], secondary: ["All 24 Nodes"] },
    link: "/ledger",
  },

  // GROUP III: The Vault Data
  {
    id: "11",
    title: "Slush Fund Ledger",
    group: "The Vault Data",
    narrative: "The raw forensic data unsealing the financial mechanism used to pay off victims and purchase silence.",
    visualFeatures: "Interactive timeline of financial data synced with survivor abuse dates. Shows the exact correlation between payouts and threats.",
    symbol: "Crossed Papal Keys",
    stats: {
      classification: "TOP SECRET",
      exposureIndex: "10.0",
      dataVolume: "120 GB",
      activeDefenses: "Encrypted Accounts, Offshore Routing",
      vectors: ["The Check Imagery", "Audit Logs"]
    },
    people: { primary: ["The Fund Managers", "Paul Martin"], secondary: ["The Archbishops", "Settlement Recipients"] },
    link: "/vault/slush-fund",
  },
  {
    id: "12",
    title: "Epstein Emails",
    group: "The Vault Data",
    narrative: "The suppressed Latham & Watkins communications. Proof of the tactical crossover between high-powered defense firms.",
    visualFeatures: "Raw email viewer UI. A stark recreation of Outlook, but corrupted. Highlighting specific phrases triggers analytical breakdowns of the legalese.",
    symbol: "The Redaction Block",
    stats: {
      classification: "COMPARTMENTED",
      exposureIndex: "9.9",
      dataVolume: "4 GB",
      activeDefenses: "Attorney-Client Privilege, Trade Secrets",
      vectors: ["The Sept 29 Intercept", "Ruemmler Directives"]
    },
    people: { primary: ["Kathryn Ruemmler", "Jeffrey Epstein"], secondary: ["Latham Attorneys", "Garry Reilly"] },
    link: "/vault/epstein",
  },
  {
    id: "13",
    title: "McKeever Study",
    group: "The Vault Data",
    narrative: "An isolated, terrifying look at exactly how the machine crushes a single, specific threat to its existence.",
    visualFeatures: "A linear, breathless scroll forcing the user through the exact chronological steps of a cover-up, side-by-side with the victim's timeline.",
    symbol: "The Solitary Node",
    stats: {
      classification: "SECRET",
      exposureIndex: "8.2",
      dataVolume: "15 GB",
      activeDefenses: "NDAs, Character Assassination",
      vectors: ["The Secret Settlement", "Medical Records"]
    },
    people: { primary: ["Robert McKeever", "Rev. Fugee"], secondary: ["Michael Critchley, Sr.", "Archbishop Myers"] },
    link: "/vault/mckeever",
  },
  {
    id: "14",
    title: "Legal Shield",
    group: "The Vault Data",
    narrative: "The unbreachable dome. A mapping of the exact legal statutes, maneuvers, and loop-holes utilized to defend the apex predator.",
    visualFeatures: "Brutalist architecture UI. Text blocks look like concrete slabs. Legal jargon is crossed out in red when exposed as a lie.",
    symbol: "Heavy Concrete Barrier",
    stats: {
      classification: "CONFIDENTIAL",
      exposureIndex: "9.0",
      dataVolume: "200 GB",
      activeDefenses: "Statute of Limitations, Sovereign Immunity",
      vectors: ["Court Filings", "Affidavits"]
    },
    people: { primary: ["General Counsel", "Thomas McCormick"], secondary: ["The Plaintiffs", "Defense Teams"] },
    link: "/vault/legal-shield",
  },

  // GROUP IV: The Collapse Timeline (Madman)
  {
    id: "15",
    title: "Exhibit A: The World Before",
    group: "The Collapse Timeline",
    narrative: "The baseline operational environment. How the machine hummed effortlessly before the New York Times article struck.",
    visualFeatures: "A serene, symmetrical layout. Pristine whitespace and elegant serif fonts masking the underlying terror. The 'calm before'.",
    symbol: "Perfect Hexagon",
    stats: {
      classification: "OPEN",
      exposureIndex: "1.0",
      dataVolume: "2 GB",
      activeDefenses: "Ignorance, Complacency",
      vectors: ["Status Quo Metrics", "Gala Invitations"]
    },
    people: { primary: ["The Board of Trustees", "Unknowing Public"], secondary: ["The 19 Priest Secretaries"] },
    link: "/madman/world-before",
  },
  {
    id: "16",
    title: "Exhibit B: The Crisis Point",
    group: "The Collapse Timeline",
    narrative: "The exact moment of structural failure. The unsealing of the initial reports and the chaotic first 24 hours of exposure.",
    visualFeatures: "A fractured, erratic UI. Tickers run too fast. Text elements occasionally glitch or duplicate. The panic is visual.",
    symbol: "Vibrating Fractured Vector",
    stats: {
      classification: "CONFIDENTIAL",
      exposureIndex: "8.9",
      dataVolume: "12 GB",
      activeDefenses: "Denial, Immediate Scapegoating",
      vectors: ["The 2018 Exposé", "Internal Panic Emails"]
    },
    people: { primary: ["The New York Times", "Breaking News Desks"], secondary: ["The Complicit Hierarchy"] },
    link: "/madman/crisis-point",
  },
  {
    id: "17",
    title: "Exhibit C: The Pivot",
    group: "The Collapse Timeline",
    narrative: "The machine catches its breath and reorganizes. The immediate strategic shift from denial to limited, managed containment.",
    visualFeatures: "Sharp, angular transitions. The erratic UI hardens into rigid, unyielding columns. The defense is forming.",
    symbol: "Intersecting Red Lines",
    stats: {
      classification: "SECRET",
      exposureIndex: "8.5",
      dataVolume: "22 GB",
      activeDefenses: "Strategic Sacrifices, The 'One Bad Apple' Defense",
      vectors: ["The Resignation Letter", "Initial Press Statements"]
    },
    people: { primary: ["Crisis Management Firms", "Spokesmen"], secondary: ["Disgraced Clerics"] },
    link: "/madman/pivot",
  },
  {
    id: "18",
    title: "Exhibit D: The Deployment",
    group: "The Collapse Timeline",
    narrative: "The full mobilization of resources. Millions of dollars in PR firms, crisis managers, and litigation teams flood the zone.",
    visualFeatures: "An overwhelming flood of data. Progress bars, legal expenses, and PR firm invoices load sequentially to show the sheer scale of deployed power.",
    symbol: "Expanding Grid Web",
    stats: {
      classification: "TOP SECRET",
      exposureIndex: "9.6",
      dataVolume: "85 GB",
      activeDefenses: "Financial Overwhelm, Crisis PR Deployment",
      vectors: ["Edelman Contracts", "Latham Billings", "Fixer Deployment"]
    },
    people: { primary: ["Latham & Watkins", "Edelman PR"], secondary: ["Funding Streams", "Foundation Grants"] },
    link: "/madman/deployment",
  },
  {
    id: "19",
    title: "Exhibit E: The Collapse",
    group: "The Collapse Timeline",
    narrative: "The massive, public failure of the containment strategy. The independent investigators pierce the veil and the narrative shatters.",
    visualFeatures: "The strict alignment breaks entirely. The background color shifts to pure red. The data floods the screen uncontrollably.",
    symbol: "Shattered Lattice",
    stats: {
      classification: "SECRET",
      exposureIndex: "10.0",
      dataVolume: "150 GB",
      activeDefenses: "None. Complete System Failure.",
      vectors: ["The Vatican Report", "Grand Jury Summaries"]
    },
    people: { primary: ["Investigation Units", "The Independent Press"], secondary: ["The Victims", "Ousted Leadership"] },
    link: "/madman/collapse",
  },
  {
    id: "20",
    title: "Exhibit F: Terminal Logic",
    group: "The Collapse Timeline",
    narrative: "The horrifying logical terminus. To admit the truth of the apex predator means the entire hierarchy from bottom to top is invalid.",
    visualFeatures: "A complete blackout. A single, infinitely descending line of text forcing the user downward into the unavoidable, terrifying conclusion.",
    symbol: "Singularity Well",
    stats: {
      classification: "COMPARTMENTED",
      exposureIndex: "FATAL",
      dataVolume: "1 TB+",
      activeDefenses: "Total Architectural Collapse Resistance",
      vectors: ["The Final Proof", "The Inevitable Conclusion"]
    },
    people: { primary: ["The Entire System"], secondary: ["Society at Large"] },
    link: "/madman/terminal",
  },

  // GROUP V: Meta & Narrative Scope
  {
    id: "21",
    title: "Press Blanket",
    group: "Meta & Narrative Scope",
    narrative: "The weaponization of the media. How the institution turned supposedly objective journalists into passive mouthpieces and unmasked whistleblowers.",
    visualFeatures: "Audio waveform visualizations that literally flatline when redaction bars slide over them. Simulated clipping of news broadcasts.",
    symbol: "Violently Redacted Waveform",
    stats: {
      classification: "SECRET",
      exposureIndex: "8.8",
      dataVolume: "55 GB",
      activeDefenses: "Access Journalism, Burned Sources",
      vectors: ["The Politico Misfire", "Source Unmasking"]
    },
    people: { primary: ["Compliant Journalists"], secondary: ["Unmasked Whistleblowers", "Press Liaisons"] },
    link: "/press-briefing",
  },
  {
    id: "22",
    title: "Editorial Proxies",
    group: "Meta & Narrative Scope",
    narrative: "The volunteer defense force. Pundits and columnists mobilized—with or without prompting—to defend the 'idea' of the institution against the facts.",
    visualFeatures: "Collages of op-eds heavily marked up in red pen, exposing the logical fallacies and emotional manipulation utilized in print.",
    symbol: "Severed Classical Column",
    stats: {
      classification: "OPEN",
      exposureIndex: "7.5",
      dataVolume: "10 GB",
      activeDefenses: "Appeals to Tradition, Ad Hominem Attacks",
      vectors: ["Noonan's WSJ Pieces", "Cannon Op-Eds"]
    },
    people: { primary: ["Peggy Noonan", "Carl Cannon", "Chris Matthews"], secondary: ["Readers", "The Defended Hierarchy"] },
    link: "/editorial",
  },
  {
    id: "23",
    title: "Methodology Engine",
    group: "Meta & Narrative Scope",
    narrative: "The blueprint of our own investigation. How we bypassed the defense perimeter, scraped the unsealed networks, and constructed this digital panopticon.",
    visualFeatures: "A pure 'developer' view. Monospace fonts, terminal cursors, JSON data streams, and raw scraping methodology exposed to the user.",
    symbol: "The Panopticon Lens",
    stats: {
      classification: "UNCLASSIFIED",
      exposureIndex: "0.0",
      dataVolume: "8 GB",
      activeDefenses: "Open Source Transparency",
      vectors: ["The Scripts", "Data Conversion Protocols"]
    },
    people: { primary: ["The Investigators", "The Code"], secondary: ["Patrick Wall", "Forensic Analysts"] },
    link: "/methodology",
  },
  {
    id: "24",
    title: "Memory Palace",
    group: "Meta & Narrative Scope",
    narrative: "The complete Level 3 visualization. An interactive, navigable 3D construct mapping every node, connection, and data point into a unified digital space.",
    visualFeatures: "Full-screen WebGL canvas. A dark, wireframe void where the user freely flies through the interconnected nodes previously explored in 2D.",
    symbol: "A Rotating Tesseract",
    stats: {
      classification: "COMPARTMENTED",
      exposureIndex: "MAX",
      dataVolume: "500 GB+",
      activeDefenses: "Information Overload",
      vectors: ["The Entire Archive", "3D Spatial Navigation"]
    },
    people: { primary: ["The User"], secondary: ["The Ghost of the Unknown Survivor (GOTUS)"] },
    link: "/axis",
  }
];
