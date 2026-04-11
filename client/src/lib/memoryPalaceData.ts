export type ChamberKey = 'foyer' | 'vestibule' | 'nave' | 'chancery' | 'transept' | 'eastwing' | 'catacombs';

export interface LocusNode {
    id: string;
    title: string;
    mnemonicAnchor: string; // The physical description (The Straightjacket, The Bloody Blueprint)
    route: string;
    shape: 'monolith' | 'shard' | 'orb' | 'ring' | 'pyramid' | 'cube'; // Abstract 3D shape
    positionOffset: [number, number, number]; // Vector3 offset from the chamber center
}

export interface ChamberData {
    id: ChamberKey;
    title: string;
    description: string;
    fogColor: string;
    baseShape: 'void' | 'ruins' | 'platform' | 'mirror'; // The environment ground
    loci: LocusNode[];
}

export const MEMORY_PALACE: Record<ChamberKey, ChamberData> = {
    foyer: {
        id: 'foyer',
        title: 'I. The Foyer',
        description: 'The monumental entryway establishing the parameters of this investigation.',
        fogColor: '#0a0a0a',
        baseShape: 'void',
        loci: [
            { id: 'foyer-home', title: 'The Homepage Portal', mnemonicAnchor: 'The Obsidian Doors', route: '/', shape: 'monolith', positionOffset: [0, 0, 0] },
            { id: 'foyer-prologue', title: 'Investigation Prologue', mnemonicAnchor: 'The Stone Plaque', route: '/prologue', shape: 'cube', positionOffset: [-3, 1, -2] },
            { id: 'foyer-axis', title: 'The Power Axis', mnemonicAnchor: 'The Compass Rose', route: '/axis', shape: 'ring', positionOffset: [3, 0, -3] },
            { id: 'foyer-tips', title: 'Whistleblower Tip Line', mnemonicAnchor: 'The Brass Mailbox', route: '/tips', shape: 'shard', positionOffset: [-2, -1, 3] },
            { id: 'foyer-dedication', title: 'The Dedication', mnemonicAnchor: 'The Engraving', route: '/dedication', shape: 'pyramid', positionOffset: [2, 2, 2] },
            { id: 'foyer-about', title: 'About the Investigation', mnemonicAnchor: 'The Charter', route: '/about', shape: 'cube', positionOffset: [0, -2, -4] },
        ]
    },
    vestibule: {
        id: 'vestibule',
        title: 'II. The Vestibule',
        description: 'The antechamber where the foundational blueprints of corruption were drawn.',
        fogColor: '#1a0505',
        baseShape: 'platform',
        loci: [
            { id: 'vest-madman', title: 'Madman Secretary', mnemonicAnchor: 'The Straightjacket', route: '/madman', shape: 'shard', positionOffset: [-2, 1, 1] },
            { id: 'vest-martin', title: 'The Martin Blueprint', mnemonicAnchor: 'The Bloody Blueprint', route: '/ledger/martin', shape: 'monolith', positionOffset: [0, 0, -2] },
            { id: 'vest-chicago', title: 'Chicago Complicity', mnemonicAnchor: 'The Baptismal Font', route: '/ledger/martin/chicago', shape: 'orb', positionOffset: [3, -1, -1] },
            { id: 'vest-beach', title: 'The Beach House', mnemonicAnchor: 'The Sand-Filled Closet', route: '/origin/beach-house', shape: 'cube', positionOffset: [-3, 0, -3] },
            { id: 'vest-humpty', title: 'Humpty Case Study', mnemonicAnchor: 'The Eggshell Mosaic', route: '/humpty', shape: 'pyramid', positionOffset: [2, 2, 2] },
        ]
    },
    nave: {
        id: 'nave',
        title: 'III. The Nave (McCarrick Network)',
        description: 'The massive central corridor representing the undisputed seat of the regime.',
        fogColor: '#0f0505',
        baseShape: 'ruins',
        loci: [
            { id: 'nave-profile', title: 'McCarrick Profile', mnemonicAnchor: 'The Aisle Runner', route: '/ledger/mccarrick/profile', shape: 'monolith', positionOffset: [0, 0, 0] },
            { id: 'nave-network', title: 'The Network', mnemonicAnchor: 'The Smugglers Map', route: '/ledger/mccarrick/network', shape: 'orb', positionOffset: [-4, 2, -1] },
            { id: 'nave-rise', title: 'The Rise & Regime', mnemonicAnchor: 'The High Throne', route: '/ledger/mccarrick/the-regime', shape: 'pyramid', positionOffset: [4, 1, -2] },
            { id: 'nave-popes', title: 'McCarrick & The Popes', mnemonicAnchor: 'The Tarnished Ring', route: '/ledger/mccarrick/popes', shape: 'ring', positionOffset: [0, 3, -4] },
            { id: 'nave-sec', title: 'The Secretaries', mnemonicAnchor: 'The Choir Stalls', route: '/ledger/mccarrick/secretaries', shape: 'cube', positionOffset: [-2, -1, 3] },
            { id: 'nave-lorenzo', title: 'The Lorenzo Expulsions', mnemonicAnchor: 'The Defaced Pillars', route: '/ledger/lorenzo', shape: 'shard', positionOffset: [3, 0, 3] },
        ]
    },
    chancery: {
        id: 'chancery',
        title: 'IV. The Chancery (Mechanisms)',
        description: 'The windowless, administrative nerve center powering the cover-up.',
        fogColor: '#050a1a', // Cold blue logic
        baseShape: 'mirror',
        loci: [
            { id: 'chan-legal', title: 'The Legal Triumvirate', mnemonicAnchor: 'The Iron Vault Door', route: '/coverup/legal', shape: 'monolith', positionOffset: [-3, 0, -1] },
            { id: 'chan-scrivo', title: 'The Scrivo-OToole Machine', mnemonicAnchor: 'The Fixers Table', route: '/ledger/mccarrick/mechanisms', shape: 'orb', positionOffset: [3, 1, -2] },
            { id: 'chan-critchley', title: 'Michael Critchley Dossier', mnemonicAnchor: 'The Tipped Scales', route: '/ledger/critchley', shape: 'pyramid', positionOffset: [0, -1, 3] },
            { id: 'chan-seton', title: 'Seton Hall Complicity', mnemonicAnchor: 'The Boardroom Table', route: '/ledger/mccarrick/seton-hall', shape: 'cube', positionOffset: [-4, 2, 2] },
            { id: 'chan-warnings', title: 'Warnings Ignored', mnemonicAnchor: 'The Roaring Shredder', route: '/ledger/mccarrick/warnings', shape: 'shard', positionOffset: [4, 0, 1] },
            { id: 'chan-biglie', title: 'The Big Lie Hierarchy', mnemonicAnchor: 'The Blueprint Wall', route: '/coverup/big-lie', shape: 'monolith', positionOffset: [0, 3, -3] },
            { id: 'chan-epstein', title: 'The Epstein Nexus', mnemonicAnchor: 'The Black Ledger', route: '/coverup/epstein', shape: 'ring', positionOffset: [-2, -2, -4] },
        ]
    },
    transept: {
        id: 'transept',
        title: 'V. The Ruined Transept (The Breach)',
        description: 'The architecture here is suddenly and violently destroyed by legal exposure.',
        fogColor: '#1a0505',
        baseShape: 'ruins',
        loci: [
            { id: 'tran-whistle', title: 'Whistleblower Unmasking', mnemonicAnchor: 'The Shattered Glass', route: '/breach/whistleblowers', shape: 'shard', positionOffset: [-2, 3, 0] },
            { id: 'tran-timeline', title: 'Courtroom Timeline', mnemonicAnchor: 'The Rusted Clock', route: '/breach/courtroom', shape: 'ring', positionOffset: [3, 2, -2] },
            { id: 'tran-rabner', title: 'The Rabner Exhibits', mnemonicAnchor: 'The Broken Pedestal', route: '/breach/rabner', shape: 'cube', positionOffset: [-4, 0, -3] },
            { id: 'tran-sanction', title: 'The Sanction Plea', mnemonicAnchor: 'The Subpoena Spike', route: '/breach/sanction-plea', shape: 'pyramid', positionOffset: [4, -1, 1] },
            { id: 'tran-veil', title: 'Corporate Veil & Dirty Dozen', mnemonicAnchor: 'The Torn Tapestry', route: '/breach/corporate-veil', shape: 'monolith', positionOffset: [0, 0, 3] },
            { id: 'tran-tobin', title: 'Tobins Hypocrisy', mnemonicAnchor: 'The Split Mirror', route: '/breach/tobin-hypocrisy', shape: 'orb', positionOffset: [-3, -2, 2] },
            { id: 'tran-downfall', title: 'Downfall & Reckoning', mnemonicAnchor: 'The Chalk Outline', route: '/ledger/mccarrick/downfall', shape: 'shard', positionOffset: [0, -3, -1] },
            { id: 'tran-sheeran', title: 'Sheeran VS McCarrick', mnemonicAnchor: 'The Broken Gauntlet', route: '/breach/sheeran-mccarrick', shape: 'cube', positionOffset: [2, 1, 4] },
            { id: 'tran-forensics', title: 'Analysis & Forensics', mnemonicAnchor: 'The Dust Prints', route: '/breach/forensics', shape: 'orb', positionOffset: [-1, 2, -5] },
        ]
    },
    eastwing: {
        id: 'eastwing',
        title: 'VI. The East Wing (Succession)',
        description: 'A pristine, heavily guarded corridor meant to replace what was lost.',
        fogColor: '#0a0a0a',
        baseShape: 'mirror',
        loci: [
            { id: 'east-checchio', title: 'James Checchio', mnemonicAnchor: 'The Clean Portrait', route: '/ledger/checchio', shape: 'monolith', positionOffset: [-3, 1, -1] },
            { id: 'east-reilly', title: 'The Joseph Reilly Presidency', mnemonicAnchor: 'The Golden Desk', route: '/ledger/reilly', shape: 'cube', positionOffset: [3, 0, 0] },
            { id: 'east-nyre', title: 'The Nyre Dismissal', mnemonicAnchor: 'The Overturned Chair', route: '/expose/nyre-dismissal', shape: 'shard', positionOffset: [-1, -2, 3] },
            { id: 'east-appeals', title: 'Active Appeal Grounds', mnemonicAnchor: 'The Waiting Room', route: '/expose/appeal-grounds', shape: 'ring', positionOffset: [4, 2, 2] },
            { id: 'east-epilogue', title: 'The Millstone Epilogue', mnemonicAnchor: 'The Obituary Plaque', route: '/succession/epilogue', shape: 'pyramid', positionOffset: [-4, 0, -4] },
            { id: 'east-conclusion', title: 'Responses & Conclusion', mnemonicAnchor: 'The Post-Script File', route: '/ledger/mccarrick/conclusion', shape: 'orb', positionOffset: [0, 3, -3] },
        ]
    },
    catacombs: {
        id: 'catacombs',
        title: 'VII. The Catacombs (The Vault)',
        description: 'The deep, subterranean level where raw data and meta-analysis rests.',
        fogColor: '#050505',
        baseShape: 'void',
        loci: [
            { id: 'cata-vault', title: 'Confidential Legal Findings', mnemonicAnchor: 'The Iron Lockbox', route: '/vault', shape: 'cube', positionOffset: [0, -1, 0] },
            { id: 'cata-survivors', title: '450+ Survivors Registry', mnemonicAnchor: 'The Stone Carvings', route: '/ledger/mccarrick/survivors', shape: 'monolith', positionOffset: [-3, 1, -2] },
            { id: 'cata-record', title: 'The Record & Fact-Check', mnemonicAnchor: 'The Red Pen', route: '/the-record', shape: 'shard', positionOffset: [3, -2, 1] },
            { id: 'cata-method', title: 'The Intelligent Method', mnemonicAnchor: 'The Magnifying Glass', route: '/method', shape: 'orb', positionOffset: [-2, 2, 3] },
            { id: 'cata-opinion', title: 'The Opinions Hub', mnemonicAnchor: 'The Editorial Stack', route: '/opinion', shape: 'pyramid', positionOffset: [4, 1, -3] },
            { id: 'cata-easter', title: 'The Dei Journo Protocol', mnemonicAnchor: 'The Secret Hatch', route: '/deijourno', shape: 'ring', positionOffset: [0, -4, -4] },
        ]
    }
};

export const CHAMBER_ORDER: ChamberKey[] = [
    'foyer', 'vestibule', 'nave', 'chancery', 'transept', 'eastwing', 'catacombs'
];
