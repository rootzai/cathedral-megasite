/*
 * DATA: The Boards & The Lawyers — SodomHall.com
 * Seton Hall University Clergy Abuse Scandal
 * Gothic Ecclesiastical Noir — "The Cathedral of Complicity"
 *
 * Format: Firm name first, attorney name below.
 * All board members framed as regents/trustees during the scandal,
 * complicit in electing Reilly knowing he was unfit.
 */

export type Badge = "latham" | "reilly" | "tobin" | "christie" | "resigned" | "clergy" | "emeritus" | "nyre" | "epstein" | "sanctioned";

export interface Person {
  name: string;
  role: string;
  tenure: string;
  badges: Badge[];
  note?: string;
}

export interface BoardSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  leadership: Person[];
  exOfficio: Person[];
  members: Person[];
  clergy?: Person[];
}

export interface LawyerFirm {
  firm: string;
  role: string;
  attorneys: {
    name: string;
    title: string;
    note?: string;
    badges?: Badge[];
  }[];
  description: string;
}

export const BADGE_LABELS: Record<Badge, string> = {
  latham: "Heard Latham Report (Aug 27, 2019)",
  reilly: "Voted for Reilly (2024)",
  tobin: "Received Cardinal Tobin Letters",
  christie: "Christie Network",
  resigned: "Resigned",
  clergy: "Clergy",
  emeritus: "Emeritus",
  nyre: "Named in Nyre Case (Lucciola, D'Alessandro, et al.)",
  epstein: "Documented Jeffrey Epstein Connection",
  sanctioned: "Court Sanctioned for Discovery Misconduct",
};

export const KEY_DATES = [
  { date: "Aug 2018", event: "Seton Hall University retains Gibbons P.C. and Latham & Watkins to investigate McCarrick-era abuse at the seminary" },
  { date: "Sept 29, 2018", event: "Kathryn Ruemmler (Latham) presents preliminary findings to Seton Hall board (confirmed via Epstein email)" },
  { date: "Aug 1, 2019", event: "Joe Nyre starts as president" },
  { date: "Aug 27, 2019", event: "Latham Report findings formally presented to Seton Hall Board of Regents & Board of Trustees — identifies 12 clergymen" },
  { date: "Late 2019", event: "LaSala Task Force reviews Latham Report, recommends Msgr. Reilly's removal — recommendations are ignored by the Board. After Lasal tast force, Kevin Marino takes over as Chariman of Regents." },
  { date: "May 2023", event: "Marino instructs the erasure of Title IX abuse logbook entries that accuse him of abusing 4 people citing multiple incidents." },
  { date: "2023", event: "Dr. Joseph Nyre departs as Seton Hall president" },
  { date: "Dec 2023", event: "Marino resigns from board as part of the settlement agreement with one of his alleged victims." },
  { date: "Feb 2024", event: "Prior to R&G Gov. Phil Murphy calls for transparebncy and the release of the Latham Report. Then congresswoman Sherrill (SHU is in her district) also came out for release." },
  { date: "March 2024", event: "The logbook entries are restored." },
  { date: "March 2024", event: "Nyre lawsuit in NJ Court." },
  { date: "June 1, 2024", event: "Reilly's first day." },
  { date: "June 10, 2024", event: "Perry Law Report is unsealed and forwarded to the accused man, Kevin Marino, whose personal counsel, former NJ AG Chris Porrino, promptly leaks it to the NYT." },
  { date: "June 11, 2024", event: "Article in NYT.", link: { url: "https://www.nytimes.com/2024/06/11/nyregion/seton-hall-sexual-assault-nyre-marino.html", label: "Read the article" } },
  { date: "Sept 2024", event: "Resignation of Regent Kevin Flood." },
  { date: "Nov 3, 2024", event: "Investiture of Reilly." },
  { date: "Dec 21, 2024", event: "Politico reveals existence of suppressed Latham Report — the cover-up begins to unravel" },
  { date: "Jan 2025", event: "Judge Avion Benjamin firts read about the Politico story and scolded Seton Hall and Scrivo." },
  { date: "Early 2025", event: "Judge Avion Benjamin ordered the delivery of the 24,000 to her in camera view." },
  { date: "Feb 10, 2025", event: "Cardinal Tobin hires Ropes & Gray for independent review of Seton Hall abuse findings" },
  { date: "Feb 20, 2025", event: "Seton Hall sues former President Nyre for 'leaking' the very report they were hiding" },
  { date: "May 2025", event: "Tom Scrivo blocks Nyre from cooperating with Ropes & Gray investigation (first time)" },
  { date: "July 2025", event: "Mary Pat Christie and others leave Seton Hall Board of Regents amid scandal" },
  { date: "Oct 15, 2025", event: "Oral arguments in the Nyre v. Seton Hall case (the Benjamin case). Judge Avion Benjamin questions the validity of privilege claims over reports commissioned by third parties." },
  { date: "Oct 22, 2025", event: "Seton Hall and Tom Scrivo submit supplemental briefs defending the Latham Report's privilege." },
  { date: "Nov 12, 2025", event: "Final hearing on document production. Judge Benjamin delivers her 'Statement of Reasons' and orders the release of 20,500 pages." },
  { date: "Nov 25, 2025", event: "The official order is signed, mandating production within 30 days. Seton Hall signals intent to appeal." },
  { date: "Feb 2026", event: "Gov. Mikie Sherrill names Jennifer Davenport (Porrino's former First Assistant) as NJ Attorney General" },
  { date: "Early 2026", event: "Recent dismissal of the Nyre case nearly two years after it was filed and with no evidence presented." }
];

export const boardOfTrustees: BoardSection = {
  id: "trustees",
  title: "Board of Trustees",
  subtitle: "Seton Hall University — The Fiduciary Board",
  description: "The 16-member board dominated by archdiocesan leadership, holding legal and Catholic mission authority over Seton Hall University. This body has ultimate fiduciary responsibility and approved the decisions that enabled the cover-up.",
  leadership: [
    {
      name: "Cardinal Joseph W. Tobin, C.Ss.R.",
      role: "Chair",
      tenure: "2017–Present",
      badges: ["latham", "tobin", "clergy"],
      note: "Instructed Gibbons to hire Kathryn Ruemmler (Latham & Watkins) to do an internal investigation in 2018. Failed to appear before Latham & Watkins investigators (Kathryn Ruemmler). Hired Karen Friedman Agnifilo (Perry Law Group) to do an internal investigation in 2024. Hired Ropes & Gray in Feb 2025.",
    },
  ],
  exOfficio: [
    {
      name: "Msgr. Joseph R. Reilly",
      role: "University President",
      tenure: "2024–Present",
      badges: ["reilly", "clergy"],
      note: "McCarrick's secretary in 1994. Admitted visiting Sea Girl beach house. Latham Report found he knew of abuse allegations.",
    },
    {
      name: "Dr. Joseph E. Nyre",
      role: "Former University President",
      tenure: "2019–2023",
      badges: ["latham"],
      note: "Sued by Seton Hall for 'leaking' the Latham Report. Blocked from cooperating with Ropes & Gray by Scrivo.",
    },
    {
      name: "Dr. Mary Meehan",
      role: "Interim University President",
      tenure: "2017–2019",
      badges: [],
    },
    {
      name: "Dr. A. Gabriel Esteban",
      role: "University President",
      tenure: "2011–2017",
      badges: [],
    },
    {
      name: "Archbishop John J. Myers",
      role: "Former Chair",
      tenure: "Retired 2016",
      badges: [],
    },
  ],
  members: [
    {
      name: "Most Reverend James F. Checchio",
      role: "Member",
      tenure: "Active",
      badges: ["latham", "reilly", "clergy"],
      note: "Only individual known to sit on both Regents and Trustees.",
    },
    {
      name: "Very Rev. John J. Chadwick",
      role: "Member",
      tenure: "Active",
      badges: ["clergy"],
    },
    {
      name: "Msgr. Gerard McCarren",
      role: "Rector, Immaculate Conception Seminary",
      tenure: "Active",
      badges: ["clergy"],
    },
  ],
  clergy: [],
};

export const boardOfRegents: BoardSection = {
  id: "regents",
  title: "Board of Regents",
  subtitle: "Seton Hall University — The Operational Board",
  description: "The operational governing body that heard the Latham Report on August 27, 2019, ignored the LaSala Task Force recommendations, and voted to elect Msgr. Reilly as Seton Hall president in 2024 — knowing he was unfit to serve.",
  leadership: [
    {
      name: "Kevin H. Marino",
      role: "Chair (2019–2023)",
      tenure: "Regent prior to 2019",
      badges: ["latham", "reilly", "christie"],
      note: "Chairman of Marino, Tortorella & Boyle. Presided over the board that received LaSala's recommendations and chose to promote Reilly anyway. Former colleague of LaSala at Robinson, Wayne, Riccio & LaSala.",
    },
    {
      name: "Henry F. D'Alessandro",
      role: "Chair (2023–Present)",
      tenure: "2015–Present",
      badges: ["latham", "reilly", "nyre"],
      note: "Vice Chair 2020–2023. Presided over the vote to elect Reilly. Named defendant in Nyre v. Seton Hall (2024).",
    },
    {
      name: "Patrick Murray",
      role: "Former Chair (until ~2019)",
      tenure: "Until ~2019",
      badges: ["latham"],
      note: "Led the search committee that hired Dr. Nyre.",
    },
    {
      name: "Matthew W. Wright",
      role: "Vice Chair (2023–Present)",
      tenure: "2015–Present",
      badges: ["latham", "reilly"],
    },
    {
      name: "Stephen P. Loughrey",
      role: "Secretary",
      tenure: "Active",
      badges: ["reilly"],
    },
    {
      name: "Mark Ganton",
      role: "Vice Chair, 2019 Presidential Search Committee",
      tenure: "Active ~2019",
      badges: ["latham"],
    },
  ],
  exOfficio: [
    {
      name: "Cardinal Joseph W. Tobin, C.Ss.R.",
      role: "President of the Board",
      tenure: "2017–Present",
      badges: ["latham", "tobin", "clergy"],
      note: "Instructed Gibbons to hire Kathryn Ruemmler (Latham & Watkins) to do an internal investigation in 2018. Failed to appear before Latham & Watkins investigators (Kathryn Ruemmler). Hired Karen Friedman Agnifilo (Perry Law Group) to do an internal investigation in 2024. Hired Ropes & Gray in Feb 2025.",
    },
    {
      name: "Msgr. Joseph R. Reilly",
      role: "University President",
      tenure: "2024–Present",
      badges: ["clergy"],
      note: "McCarrick's secretary. Latham Report implicated him.",
    },
    {
      name: "Dr. Joseph E. Nyre",
      role: "Former University President",
      tenure: "2019–2023",
      badges: ["latham"],
    },
    {
      name: "Dr. Mary Meehan",
      role: "Interim University President",
      tenure: "2017–2019",
      badges: [],
    },
    {
      name: "Dr. A. Gabriel Esteban",
      role: "University President",
      tenure: "2011–2017",
      badges: [],
    },
  ],
  members: [
    { name: "Robert S. Basso", role: "Regent", tenure: "Active 2020s", badges: ["reilly"], note: "Provided sworn certification in 2024 Perry Law investigation." },
    { name: "Mark Benjamin", role: "Regent", tenure: "Appointed 2017", badges: ["latham", "reilly"] },
    { name: "Edward Cerny", role: "Regent", tenure: "Appointed 2017", badges: ["latham", "reilly", "nyre"], note: "Not a Monsignor. Named defendant in Nyre v. Seton Hall (2024)." },
    { name: "Mary Pat Christie", role: "Regent", tenure: "Appointed 2022", badges: ["reilly", "christie", "resigned"], note: "Wife of Gov. Chris Christie. Left Board July 2025 amid scandal." },
    { name: "James Edward Collins", role: "Regent", tenure: "Active", badges: ["reilly", "nyre"], note: "Named defendant in Nyre v. Seton Hall (2024)." },
    { name: "Patrick A. Cozza", role: "Regent", tenure: "Active", badges: ["reilly"] },
    { name: "Ryan K. Duffy", role: "Regent", tenure: "Appointed 2015", badges: ["latham", "reilly"] },
    { name: "Bonnie Evans", role: "Regent", tenure: "Appointed 2022", badges: ["reilly"] },
    { name: "Brian Fitzpatrick", role: "Regent", tenure: "Appointed 2022", badges: ["reilly"] },
    { name: "David L. Flood", role: "Regent", tenure: "Appointed 2025", badges: [] },
    { name: "Kevin Flood", role: "Regent", tenure: "Resigned Sept 2024", badges: ["latham", "resigned"], note: "Resigned citing threats after raising concerns about handling of misconduct complaints." },
    { name: "Richard A. Giuditta, Jr.", role: "Regent", tenure: "Appointed 2019", badges: ["latham", "reilly"] },
    { name: "Stephanie Redish Hofmann", role: "Regent", tenure: "Appointed 2019", badges: ["latham", "reilly"] },
    { name: "Joseph J. Hughes", role: "Regent", tenure: "Appointed 2023", badges: ["reilly"] },
    { name: "Alan Kirshenbaum", role: "Regent", tenure: "Appointed 2025", badges: [] },
    { name: "Joseph P. LaSala", role: "Regent Emeritus", tenure: "Appointed Emeritus 2019", badges: ["latham", "emeritus", "christie"], note: "Chaired task force that reviewed Latham Report. Recommended Reilly's removal. Recommendations were ignored. Partner at McElroy Deutsch — Scrivo's former firm." },
    { name: "Michael J. Lucciola", role: "Regent", tenure: "Active", badges: ["reilly", "nyre"], note: "Named defendant in Nyre v. Seton Hall (2024)." },
    { name: "Anthony Masherelli", role: "Regent", tenure: "Appointed 2019", badges: ["latham", "reilly", "nyre"], note: "Named defendant in Nyre v. Seton Hall (2024)." },
    { name: "Kevin J. McMahon", role: "Regent", tenure: "~2014–2024", badges: ["latham", "reilly"] },
    { name: "Juan Simón Mendoza Gimenez", role: "Regent", tenure: "Appointed 2025", badges: [] },
    { name: "Nicole Mouskondis", role: "Regent", tenure: "Appointed 2025", badges: [] },
    { name: "Alisa Coren Norris", role: "Regent", tenure: "Appointed 2023", badges: ["reilly"] },
    { name: "Dr. Amy Novak", role: "Regent", tenure: "Active", badges: ["reilly"] },
    { name: "James O'Brien", role: "Regent", tenure: "Appointed 2015", badges: ["latham", "reilly"] },
    { name: "Jeffrey Pagano", role: "Regent", tenure: "Active", badges: ["reilly"] },
    { name: "Thomas J. Sharkey", role: "Regent", tenure: "Appointed 2015", badges: ["latham", "reilly"] },
    { name: "Joseph Sheridan", role: "Regent", tenure: "Appointed 2017", badges: ["latham", "reilly"] },
    { name: "Robert Sloan", role: "Regent", tenure: "Appointed 2015", badges: ["latham", "reilly"] },
    { name: "Sister Margaret Stallmeyer", role: "Regent", tenure: "Appointed 2015", badges: ["latham", "reilly", "clergy"] },
    { name: "John F. Swift", role: "Regent", tenure: "Appointed 2015", badges: ["latham", "reilly"] },
    { name: "Thomas L. Tran", role: "Regent", tenure: "Appointed 2023", badges: ["reilly"] },
    { name: "Paul Tyahla", role: "Regent", tenure: "Active", badges: ["reilly"] },
    { name: "Stephen G. Waldis", role: "Regent", tenure: "Active", badges: ["reilly"] },
    { name: "Patrick Walsh", role: "Regent", tenure: "Appointed 2023", badges: ["reilly"] },
    { name: "Leo J. Zatta", role: "Regent", tenure: "Appointed 2015", badges: ["latham", "reilly"] },
  ],
  clergy: [
    { name: "Most Reverend James F. Checchio", role: "Clergy Regent", tenure: "Active", badges: ["latham", "reilly", "clergy"], note: "Only individual known to sit on both Regents and Trustees." },
    { name: "Most Reverend Kurt R. Burnette", role: "Clergy Regent", tenure: "Active", badges: ["clergy"] },
    { name: "Very Rev. John J. Chadwick", role: "Clergy Regent", tenure: "Active", badges: ["clergy"] },
    { name: "Rev. Brian Muzas", role: "Clergy Regent", tenure: "Active", badges: ["clergy"] },
    { name: "Most Reverend Kevin J. Sweeney", role: "Clergy Regent", tenure: "Active", badges: ["clergy"] },
    { name: "Most Reverend Joseph A. Williams", role: "Clergy Regent", tenure: "Appointed March 2025", badges: ["clergy"] },
  ],
};

export const boardOfVisitors: BoardSection = {
  id: "visitors",
  title: "Board of Visitors",
  subtitle: "Seton Hall Law School — The Legal & Political Network",
  description: "This advisory board lacks university-wide operational power but is a hub of legal and political influence in New Jersey. It is a self-reinforcing network of Seton Hall alumni, Christie administration veterans, and former law firm colleagues.",
  leadership: [
    { name: "Elaine A. Rocha", role: "Current Chair", tenure: "Active", badges: [] },
    { name: "Suzanne C. Midlige", role: "Current Vice Chair", tenure: "Active", badges: [] },
    { name: "Paul M. da Costa", role: "Current Secretary", tenure: "Active", badges: [] },
    { name: "Wendy Johnson Lario", role: "Former Chair", tenure: "Active", badges: [] },
    { name: "Lynn Fontaine Newsome", role: "Former Chair", tenure: "Active", badges: [] },
    { name: "Patrick C. Dunican Jr.", role: "Former Chair", tenure: "Active", badges: [] },
    { name: "Kathleen M. Boozang", role: "Dean of the Law School", tenure: "2015–2023", badges: [] },
    { name: "Ronald H. Weich", role: "Dean of the Law School", tenure: "Appointed July 2024", badges: [] },
  ],
  exOfficio: [],
  members: [
    { name: "Louis J. Andreozzi", role: "Member", tenure: "Active", badges: [] },
    { name: "Mitch F. Baumeister", role: "Member", tenure: "Active", badges: ["emeritus"] },
    { name: "Paulette Brown", role: "Member", tenure: "Active", badges: [] },
    { name: "Joseph Brucchieri", role: "Member", tenure: "Active", badges: [] },
    { name: "Frank T. Cannone", role: "Member", tenure: "Active", badges: [] },
    { name: "Craig Carpenito", role: "Member", tenure: "Active", badges: ["christie"], note: "Former U.S. Attorney for NJ (2018–2020). Christie appointee. Now at King & Spalding — same firm as Scrivo's son T.J." },
    { name: "Hon. Michael A. Chagares", role: "Member", tenure: "Active", badges: [] },
    { name: "Christopher J. Christie", role: "Member", tenure: "Active", badges: ["christie"], note: "Former Governor of NJ. His wife Mary Pat sat on Board of Regents. His AG Porrino also on this board." },
    { name: "John T. Crisan", role: "Member", tenure: "Active", badges: [] },
    { name: "Michael Critchley", role: "Member", tenure: "Active", badges: ["christie"], note: "Also represents RCAN (Archdiocese of Newark) through Critchley, Kinum & Denoia. Dual loyalty conflict." },
    { name: "Joseph M. DeCotiis", role: "Member", tenure: "Active", badges: [] },
    { name: "Anthony P. DiTommaso, Jr.", role: "Member", tenure: "Active", badges: [] },
    { name: "Kathryn P. Duva", role: "Member", tenure: "Active", badges: [] },
    { name: "Todd M. Galante", role: "Member", tenure: "Active", badges: [] },
    { name: "Rev. Nicholas S. Gengaro", role: "Member", tenure: "Active", badges: ["clergy"] },
    { name: "Francis J. Giantomasi", role: "Member", tenure: "Active", badges: [] },
    { name: "Hon. Katharine S. Hayden", role: "Member", tenure: "Active", badges: [] },
    { name: "Sanjay P. Ibrahim", role: "Member", tenure: "Active", badges: [] },
    { name: "Alfred F. Jablonski", role: "Member", tenure: "Active", badges: [] },
    { name: "Marc Larkins", role: "Member", tenure: "Active", badges: [] },
    { name: "Joseph P. LaSala", role: "Member", tenure: "Active", badges: ["emeritus", "christie"], note: "Also Regent Emeritus. Chaired task force that recommended Reilly's removal." },
    { name: "Craig Leach", role: "Member", tenure: "Active", badges: [] },
    { name: "Joseph Lubertazzi, Jr.", role: "Member", tenure: "Active", badges: [] },
    { name: "James McClammy", role: "Member", tenure: "Active", badges: [] },
    { name: "Scott G. McLester", role: "Member", tenure: "Active", badges: [] },
    { name: "Steve McManus", role: "Member", tenure: "Active", badges: [] },
    { name: "Hon. Raj Mukherji", role: "Member", tenure: "Active", badges: [] },
    { name: "Robert F. Perry", role: "Member", tenure: "Active", badges: [] },
    { name: "Christopher S. Porrino", role: "Member", tenure: "Active", badges: ["christie"], note: "Former NJ Attorney General under Christie. Now at Lowenstein Sandler. Accused of coordinating legal threats against whistleblowers. Mentor to new AG Jennifer Davenport." },
    { name: "Lt. Gen. Stuart W. Risch", role: "Member", tenure: "Active", badges: [] },
    { name: "Shoshana Schiff", role: "Member", tenure: "Active", badges: [] },
    { name: "Ricardo Solano, Jr.", role: "Member", tenure: "Active", badges: [] },
    { name: "Remi Spencer", role: "Member", tenure: "Active", badges: [] },
    { name: "Peter St. Phillip, Jr.", role: "Member", tenure: "Active", badges: [] },
    { name: "Leroy A. Tice", role: "Member", tenure: "Active", badges: [] },
    { name: "Justin P. Walder", role: "Member", tenure: "Active", badges: [] },
    { name: "Kevin G. Walsh", role: "Member", tenure: "Active", badges: [] },
    { name: "Liza M. Walsh", role: "Member", tenure: "Active", badges: [] },
  ],
};

/* ===== LAWYERS ===== */

export const shuLawyers: LawyerFirm[] = [
  {
    firm: "O'Toole Scrivo, LLC",
    role: "Lead Outside Counsel for Seton Hall University",
    attorneys: [
      {
        name: "Thomas P. Scrivo",
        title: "Managing Partner",
        note: "Former Chief Counsel to Gov. Christie. Former Chair of SHU Law Board of Visitors. Fellow, American College of Trial Lawyers. Blocked Nyre from cooperating with Ropes & Gray.",
        badges: ["christie", "sanctioned", "latham", "reilly"] as Badge[]
      },
      {
        name: "Kevin J. O'Toole",
        title: "Founding Partner",
        note: "Former NJ State Senator. Chairman of the Port Authority. Met Scrivo first day of law school in 1986.",
        badges: ["christie"] as Badge[]
      },
    ],
    description: "The firm leading Seton Hall's legal defense in the clergy abuse litigation. Accused of concealing the Latham Report, suing the whistleblower (Nyre), and blocking witnesses from the Ropes & Gray investigation.",
  },
  {
    firm: "Archer & Greiner, P.C.",
    role: "Co-Counsel for Seton Hall University",
    attorneys: [
      { name: "Patrick Papalia", title: "Partner", note: "Admitted in court that 3,500+ documents (24,000 pages) were withheld from discovery." },
    ],
    description: "Serves as co-counsel alongside O'Toole Scrivo in the Seton Hall clergy abuse litigation. Papalia is the attorney who acknowledged the massive discovery withholding in open court.",
  },
  {
    firm: "Troutman Pepper Hamilton Sanders LLP",
    role: "Title IX & Compliance Counsel for Seton Hall",
    attorneys: [
      { name: "Angelo A. Stio III", title: "Partner", note: "Triple Seton Hall graduate (undergrad, MPA, law). Accused of coordinating the May 2023 erasure of Title IX complaints and managing a 'shadow compliance channel' to protect powerful regents." },
    ],
    description: "Handled Title IX compliance matters for Seton Hall. Stio is accused of orchestrating the erasure of misconduct complaints.",
  },
  {
    firm: "McCarter & English, LLP",
    role: "Special Master / Former Federal Judge",
    attorneys: [
      { name: "Hon. Jose L. Linares", title: "Of Counsel (Former Chief Judge, U.S. District Court for NJ)", note: "Authorized unredacted release of Perry Law Report. Report was used in court filings within 6 hours to expose whistleblowers." },
    ],
    description: "Linares served as Special Master in the litigation. His release of the unredacted Perry Law Report raised concerns about whistleblower exposure.",
  },
  {
    firm: "Lowenstein Sandler LLP",
    role: "Former NJ Attorney General's Firm",
    attorneys: [
      {
        name: "Christopher S. Porrino",
        title: "Partner",
        note: "Former NJ Attorney General (2016–2018) under Christie. Sits on SHU Law Board of Visitors. Accused of coordinating legal threats against whistleblowers. Wrote op-ed endorsing Davenport as AG.",
        badges: ["christie", "latham"] as Badge[]
      },
    ],
    description: "Porrino's current firm. He serves as a bridge between the Christie administration, the Board of Visitors, and the new Attorney General's office through his protégé Jennifer Davenport.",
  },
];

export const investigativeFirms: LawyerFirm[] = [
  {
    firm: "Gibbons P.C.",
    role: "Special Counsel — Oversaw the Investigation",
    attorneys: [
      { name: "Christine A. Amalfe", title: "Co-Chair, Employment and Labor Law", note: "Retained as special counsel to oversee the review. Hired Latham & Watkins to conduct the actual investigation." },
      { name: "Peter J. Torcicollo", title: "Managing Director", note: "Stated Gibbons would assist Ropes & Gray's review." },
    ],
    description: "Retained by Seton Hall in 2018 as special counsel. Gibbons then hired Latham & Watkins to conduct the actual investigation. Two Gibbons partners sit on the Board of Visitors — a conflict of interest.",
  },
  {
    firm: "Latham & Watkins LLP",
    role: "Conducted the 2018–2019 Investigation (The Latham Report)",
    attorneys: [
      {
        name: "Kathryn Ruemmler",
        title: "Former Global Co-Chair, White Collar Defense",
        note: "Former White House Counsel to President Obama. In frequent contact with Jeffrey Epstein during the investigation (100+ emails). Received gifts from Epstein. Resigned from Goldman Sachs Feb 2026 over Epstein ties.",
        badges: ["latham", "epstein"] as Badge[]
      },
      { name: "Jonathan Su", title: "Partner, White Collar Defense", note: "Described the investigation as 'one of the most unique and challenging of his career.' Both Su and Ruemmler presented findings to the Seton Hall board on Aug 27, 2019." },
    ],
    description: "Conducted the investigation that produced the Latham Report — the document Seton Hall has fought to suppress for six years. The report identified 12 clergymen and found McCarrick created a 'culture of fear and intimidation.'",
  },
  {
    firm: "Perry Law LLC",
    role: "Investigation of Misconduct Complaints",
    attorneys: [
      { name: "Karen Friedman Agnifilo", title: "Partner", note: "Former Chief of the Trial Division, Manhattan DA's Office. Conducted investigation into misconduct complaints at Seton Hall. The resulting Perry Law Report was released unredacted by Judge Linares." },
    ],
    description: "Retained to investigate misconduct complaints at Seton Hall. The Perry Law Report's unredacted release exposed whistleblowers and became a flashpoint in the litigation.",
  },
  {
    firm: "Ropes & Gray LLP",
    role: "Independent Review — Hired by Cardinal Tobin (Feb 2025)",
    attorneys: [
      { name: "Attorney Not Publicly Named", title: "Partner", note: "The specific attorney leading the review has not been publicly identified. Ropes & Gray is known for handling the Boston Archdiocese clergy abuse cases." },
    ],
    description: "Hired by Cardinal Tobin in February 2025 to conduct a 'comprehensive third-party review' of the Latham Report findings. Seton Hall (via Scrivo) has twice blocked witnesses from cooperating.",
  },
];

export const rcanLawyers: LawyerFirm[] = [
  {
    firm: "Critchley, Kinum & Denoia LLC",
    role: "Counsel for RCAN (Archdiocese of Newark)",
    attorneys: [
      { name: "Michael Critchley Sr.", title: "Founding Partner", note: "One of NJ's most prominent white-collar defense attorneys. Also sits on the Seton Hall Law Board of Visitors — a dual loyalty conflict." },
    ],
    description: "Represents the Roman Catholic Archdiocese of Newark (RCAN) in the clergy abuse litigation. Critchley's simultaneous membership on the Board of Visitors creates an inherent conflict of interest.",
  },
  {
    firm: "Carella, Byrne, Cecchi, Olstein, Brody & Agnello, P.C.",
    role: "Defense Counsel for RCAN (Archdiocese of Newark)",
    attorneys: [
      { name: "Megan A. Natale", title: "Attorney", note: "Appeared on recent briefs and arguments for the Archdiocese." },
      { name: "Sean M. Kiley", title: "Attorney", note: "Appeared on recent briefs and arguments for the Archdiocese." },
      { name: "Christopher H. Westrick", title: "Attorney", note: "Appeared on recent briefs and arguments for the Archdiocese." },
      { name: "John G. Esmerado", title: "Attorney", note: "Appeared on recent briefs and arguments for the Archdiocese." },
    ],
    description: "Primary defense firm representing RCAN in the clergy abuse litigation. Multiple attorneys from this firm have appeared on recent briefs and oral arguments defending the Archdiocese.",
  },
  {
    firm: "Paul, Weiss, Rifkind, Wharton & Garrison LLP",
    role: "Bankruptcy Counsel for Newark Diocese",
    attorneys: [
      { name: "Bankruptcy Team", title: "Restructuring Department", note: "Retained as bankruptcy counsel for the Newark Diocese. Paul Weiss is one of the most powerful law firms in the country." },
    ],
    description: "Retained as bankruptcy counsel that RCAN keeps threatening to bring in. Bankruptcy is a standard tactic used by dioceses to limit payouts to abuse survivors — the Camden Diocese used Cole Schotz for its Chapter 11 filing ($87.5M in 2024, additional $180M in Feb 2026).",
  },
  {
    firm: "Cole Schotz P.C.",
    role: "Bankruptcy Counsel (Camden Diocese Model)",
    attorneys: [
      { name: "Bankruptcy Team", title: "Bankruptcy & Corporate Restructuring", note: "Handled the Camden Diocese Chapter 11 bankruptcy — the model RCAN could follow." },
    ],
    description: "The firm that handled the Camden Diocese bankruptcy — the playbook RCAN keeps threatening to use. Bankruptcy is a standard tactic used by dioceses to limit payouts to abuse survivors.",
  },
];

export const njagConnection = {
  title: "The Attorney General Connection",
  description: "The new NJ Attorney General was the direct subordinate of a man accused of coordinating legal threats against whistleblowers in the Seton Hall scandal. The chain of command: Christie → Porrino → Davenport.",
  people: [
    { name: "Jennifer Davenport", role: "NJ Attorney General (Feb 2026–Present)", note: "Seton Hall Law graduate. Served twice as First Assistant AG — including under Porrino (2016–2018). Nominated by Gov. Mikie Sherrill. Both worked at the U.S. Attorney's Office under Paul Fishman." },
    { name: "Christopher S. Porrino", role: "Former NJ Attorney General (2016–2018)", note: "Christie appointee. Sits on SHU Law Board of Visitors. Now at Lowenstein Sandler. Accused of coordinating legal threats. Wrote op-ed endorsing Davenport." },
    { name: "Gov. Mikie Sherrill", role: "Governor of New Jersey", note: "Former federal prosecutor at U.S. Attorney's Office under Paul Fishman (2008–2012). Nominated Davenport as AG." },
  ],
};

export const victimsAttorneys = {
  title: "For the Survivors",
  people: [
    { name: "Greg McOmber", firm: "McOmber McOmber & Luber, P.C.", role: "Victims' Attorney", note: "Lead attorney for the 450+ clergy abuse survivors in the Seton Hall litigation." },
    { name: "John Baldante", firm: "Baldante & Rubenstein", role: "Victims' Attorney", note: "Successfully petitioned the court to unseal the Latham Report. Vocal advocate in the ongoing clergy abuse litigation in Essex County." },
    { name: "Gabriel Magee", firm: "Baldante & Rubenstein", role: "Victims' Attorney", note: "Works alongside Baldante representing survivors and plaintiffs in the clergy abuse litigation." },
    { name: "TM", firm: "", role: "Delbarton Victim", note: "A Delbarton abuse survivor whose case is connected to the broader NJ clergy abuse scandal." },
  ],
};

/* ===== HELPER: Get all people across all boards for filtering ===== */
export function getAllBoardMembers(): (Person & { board: string })[] {
  const all: (Person & { board: string })[] = [];

  const addFromBoard = (board: BoardSection, boardName: string) => {
    board.leadership.forEach(p => all.push({ ...p, board: boardName }));
    board.exOfficio.forEach(p => all.push({ ...p, board: boardName }));
    board.members.forEach(p => all.push({ ...p, board: boardName }));
    if (board.clergy) board.clergy.forEach(p => all.push({ ...p, board: boardName }));
  };

  addFromBoard(boardOfTrustees, "Board of Trustees");
  addFromBoard(boardOfRegents, "Board of Regents");
  addFromBoard(boardOfVisitors, "Board of Visitors");

  return all;
}

/* Deduplicate by name (some people sit on multiple boards) */
export function getUniqueMembers(members: (Person & { board: string })[]): (Person & { boards: string[] })[] {
  const map = new Map<string, Person & { boards: string[] }>();
  members.forEach(m => {
    const existing = map.get(m.name);
    if (existing) {
      if (!existing.boards.includes(m.board)) existing.boards.push(m.board);
      // Merge badges
      m.badges.forEach(b => { if (!existing.badges.includes(b)) existing.badges.push(b); });
      // Keep the more detailed note
      if (m.note && (!existing.note || m.note.length > existing.note.length)) existing.note = m.note;
    } else {
      map.set(m.name, { ...m, boards: [m.board] });
    }
  });
  return Array.from(map.values());
}
