export interface ClergyMember {
  id: string;
  name: string;
  role: string;
  status: "Removed" | "Promoted" | "Deceased" | "Active" | "Protected" | "Demoted" | "Forced Retirement" | "Transferred" | "Exiled" | "Rehabilitated" | "Survivor" | "Quietly Moved" | "Named Posthumously";
  location: string;
  details: string;
  incidentRole: string;
  nonReportingConnection: string;
  outcomeEvidence: string;
  probability: string;
  evidenceKeys: string[];
  image: string;
}

export const clergyList: ClergyMember[] = [
  {
    id: "reilly",
    name: "Msgr. Joseph Reilly",
    role: "President, Seton Hall University",
    status: "Promoted",
    location: "South Orange, NJ",
    details: "Former Rector of the College Seminary. Despite being named in the Latham Report, he was elevated to the presidency of the university.",
    incidentRole: "Rector/Dean, ICSST (2012–2022); Board of Trustees Member.",
    nonReportingConnection: "Knew of ≥3 abuse/harassment cases (2012 seminarian assault; 2014 St. Andrew's incident; McCarrick rumors). Handled 2012 case 'in-house' but bypassed Title IX/Archdiocese formal channels.",
    outcomeEvidence: "Promoted to President of Seton Hall University in 2024, despite the findings of the Latham Report.",
    probability: "100%",
    evidenceKeys: ["Leaks/990s", "Politico Exposé", "Admitted Knowledge"],
    image: "/images/dirty-dozen/reilly.png"
  },
  {
    id: "ziccardi",
    name: "Msgr. C. Anthony Ziccardi",
    role: "The Board Purge",
    status: "Demoted",
    location: "South Orange, NJ (Academic Role)",
    details: "Former VP for Mission. Stripped of Cabinet-level executive power.",
    incidentRole: "VP for Mission & Ministry; Secretary, Board of Regents.",
    nonReportingConnection: "As seminary-university liaison, aware of 2012/2014 incidents via formation oversight; failed to enforce Title IX bridging. Report cited 'leadership bridge' non-reporting.",
    outcomeEvidence: "Demoted; stripped of Cabinet/governance roles but retained faculty status. Removed as VP in Sept 2020.",
    probability: "100%",
    evidenceKeys: ["IRS filings", "Action Plan Alignment"],
    image: "/images/dirty-dozen/ziccardi.png"
  },
  {
    id: "nydegger",
    name: "Msgr. Thomas P. Nydegger",
    role: "The Board Purge",
    status: "Removed",
    location: "Westfield, NJ (Pastor, St. Helen's)",
    details: "Former Vicar General. Removed from #2 official role and SHU Board.",
    incidentRole: "Vicar General, Archdiocese of Newark (#2 official).",
    nonReportingConnection: "Oversaw clergy personnel; consulted on 2012 dismissal and McCarrick-era placements. Report flagged Vicar General liability for seminary non-escalation.",
    outcomeEvidence: "Demoted to Pastor, St. Helen’s Church, Westfield (July 2020). Removed from chancery; no promotions.",
    probability: "100%",
    evidenceKeys: ["rcan.org announcement", "Timing post-Latham"],
    image: "/images/dirty-dozen/nydegger.png"
  },
  {
    id: "harahan",
    name: "Msgr. Robert J. Harahan",
    role: "Seminary Staff Purge",
    status: "Forced Retirement",
    location: "Retired (Forced)",
    details: "Former Headmaster, Seton Hall Prep. McCarrick's former secretary.",
    incidentRole: "Headmaster, Seton Hall Prep; ICSST Board Overseer.",
    nonReportingConnection: "McCarrick's former secretary (1980s); knew of beach house misconduct as Rector (1990–1995). Report cited 'prime target' for historical knowledge.",
    outcomeEvidence: "Abrupt removal from Prep/ICSST roles (Sept 2019). Fired from education; reassigned to parish.",
    probability: "95%",
    evidenceKeys: ["Sudden exit", "Vatican Report"],
    image: "/images/dirty-dozen/harahan.png"
  },
  {
    id: "bermudez",
    name: "Rev. Duverney Bermúdez",
    role: "Seminary Staff Purge",
    status: "Transferred",
    location: "Elizabeth, NJ (Pastor, Immaculate Conception)",
    details: "Former Vice Rector, St. Andrew's. Leadership team decapitated.",
    incidentRole: "Vice Rector, St. Andrew’s College Seminary.",
    nonReportingConnection: "Second-in-command during 2014 harassment; failed to report to Rector Chadwick/Reilly chain. Report extended findings to college seminary leadership.",
    outcomeEvidence: "Removed from formation; lateral to parish (Sept 2021). Full leadership decapitation of St. Andrew’s.",
    probability: "95%",
    evidenceKeys: ["Appointments", "Leadership Decapitation"],
    image: "/images/dirty-dozen/bermudez.png"
  },
  {
    id: "doran",
    name: "Msgr. John E. Doran",
    role: "Seminary Staff Purge",
    status: "Exiled",
    location: "Pastor / Retired",
    details: "Former Vicar General. The 'Missing Man' of the original rumors.",
    incidentRole: "Vice Rector/Business Manager, ICSST (2012–2020).",
    nonReportingConnection: "Oversaw operations during 2012 assault; report explicitly cited for 'chain-of-command' non-reporting. As McCarrick-era holdover, aware of historical patterns.",
    outcomeEvidence: "Removed as Vice Rector (July 2020); reassigned to parish. Barred from seminary.",
    probability: "90%",
    evidenceKeys: ["Leaks", "2013 History", "Operational Liability"],
    image: "/images/dirty-dozen/doran.png"
  },
  {
    id: "mccarren",
    name: "Msgr. Gerard H. McCarren",
    role: "Rector",
    status: "Active",
    location: "South Orange, NJ",
    details: "Current Rector of the Seminary. Implicated in the cover-up culture.",
    incidentRole: "Academic Dean/Spiritual Director, ICSST.",
    nonReportingConnection: "Formation oversight during 2014 incident; report noted 'dean-level' awareness but 'cooperative' stance led to temporary sidelining.",
    outcomeEvidence: "Temporarily sidelined (2020-2022); rehabilitated/promoted to Rector (2022).",
    probability: "85%",
    evidenceKeys: ["SHU announcements", "Rehabilitation Arc"],
    image: "/images/dirty-dozen/mccarren.png"
  },
  {
    id: "serratelli",
    name: "Bishop Arthur J. Serratelli",
    role: "The Board Purge",
    status: "Removed",
    location: "Emeritus, Clifton, NJ",
    details: "Former Board Member. McCarrick consecrator.",
    incidentRole: "Board of Regents/Trustees; ICSST Overseer/Alumnus.",
    nonReportingConnection: "Taught at ICSST (1977–2000); McCarrick consecrator (2000); knew beach house rumors as Rector, St. Andrew’s (1997–2000).",
    outcomeEvidence: "Resignation accepted (April 2020); quiet exit from governance. SHU boards omitted in 2020 990s.",
    probability: "90%",
    evidenceKeys: ["Board omission", "Timing"],
    image: "/images/dirty-dozen/serratelli.png"
  },
  {
    id: "ciccarino",
    name: "Rev. Christopher Ciccarino",
    role: "Seminary Staff Purge",
    status: "Removed",
    location: "Parish Priest (No Academic Role)",
    details: "Former Associate Dean. Removed from academic integrity role.",
    incidentRole: "Vice Rector/Formation Faculty, ICSST (2018–2020).",
    nonReportingConnection: "Involved in 2014 St. Andrew’s response; report cited 'faculty non-escalation' during his tenure.",
    outcomeEvidence: "Removed from Vice Rector (2020); full seminary exit. Demoted to adjunct/low-formation.",
    probability: "80%",
    evidenceKeys: ["Roster changes", "Leaks"],
    image: "/images/dirty-dozen/ciccarino.png"
  },
  {
    id: "chadwick",
    name: "Rev. John J. Chadwick",
    role: "Seminary Staff Purge",
    status: "Promoted",
    location: "Vicar General, Archdiocese of Newark",
    details: "Former Rector, St. Andrew's. Promoted to Vicar General.",
    incidentRole: "Rector, St. Andrew’s (2014–2020).",
    nonReportingConnection: "Oversaw 2014 incident; report cleared direct fault but noted chain awareness.",
    outcomeEvidence: "Promoted to Vicar General (Aug 2020), replacing Nydegger. Elevated as 'solution' figure.",
    probability: "60%",
    evidenceKeys: ["Vicar General Promotion", "Cleared Status"],
    image: "/images/dirty-dozen/chadwick.png"
  },
  {
    id: "ivany",
    name: "Msgr. Thomas P. Ivany",
    role: "Seminary Staff Purge",
    status: "Quietly Moved",
    location: "Parish Pastor",
    details: "Vocations Director. Cited for 'negligent vetting'.",
    incidentRole: "Former Vocations Director; ICSST Placement Advisor.",
    nonReportingConnection: "Placed 'at-risk' seminarians during McCarrick era; leaks cite for 'vocations pipeline' failures enabling abuse access.",
    outcomeEvidence: "Quiet reassignment from any advisory (2020). Sidelined via attrition.",
    probability: "85%",
    evidenceKeys: ["Vocations leaks", "Old Guard Purge"],
    image: "/images/dirty-dozen/ivany.png"
  },
  {
    id: "suszko",
    name: "Msgr. Robert Suszko",
    role: "Seminary Staff Purge",
    status: "Survivor",
    location: "Still in Role",
    details: "Business Manager. Named regarding 'financial opacity'.",
    incidentRole: "Vice Rector/Business Manager, ICSST.",
    nonReportingConnection: "Admin support for 2012/2014; 'should have known' per report.",
    outcomeEvidence: "Retained as Business Manager (Vice Rector stripped). Partial demotion; operational continuity.",
    probability: "50%",
    evidenceKeys: ["Title strip", "Retention"],
    image: "/images/dirty-dozen/suszko.png"
  },
  {
    id: "miller",
    name: "Rev. Frederick L. Miller",
    role: "Senior Official",
    status: "Named Posthumously",
    location: "Deceased",
    details: "Spiritual Director. Confidentiality shield.",
    incidentRole: "Spiritual Director, St. Andrew’s.",
    nonReportingConnection: "Confidentiality shield (confessional knowledge?); tangential to 2014.",
    outcomeEvidence: "Deceased (Sept 2022). Untouched; honored legacy.",
    probability: "10%",
    evidenceKeys: ["Deceased", "Peripheral"],
    image: "/images/dirty-dozen/miller.png"
  }
];
