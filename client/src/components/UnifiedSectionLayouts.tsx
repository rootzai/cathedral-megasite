import React from "react";
import UnifiedLayout from "./UnifiedLayout";

// --- THE ORIGIN (Act 1) ---
const originNavItems = [
    { id: "1.1", label: "The Founding Template", path: "/origin/martin" },
    { id: "1.2", label: "The Beach House", path: "/origin/beach-house" },
    { id: "1.3", label: "The Labyrinth", path: "/origin/network" },
    { id: "1.4", label: "The Explosion", path: "/origin/explosion" },
];

export function OriginLayout({ children }: { children: React.ReactNode }) {
    return (
        <UnifiedLayout
            title="The Origin"
            subtitle="The Construction of the Machine (1980s - 2018)"
            caseFile="01-ORIGIN"
            themeClass="theme-cathedral"
            navItems={originNavItems}
        >
            {children}
        </UnifiedLayout>
    );
}

// --- THE COVER-UP (Act 2) ---
const coverUpNavItems = [
    { id: "2.1", label: "Financial Mechanism", path: "/coverup/financial" },
    { id: "2.2", label: "The Matrix of Complicity", path: "/coverup/complicity" },
    { id: "2.3", label: "The Legal Network", path: "/coverup/legal" },
    { id: "2.4", label: "The Epstein Nexus", path: "/coverup/epstein" },
];

export function CoverUpLayout({ children }: { children: React.ReactNode }) {
    return (
        <UnifiedLayout
            title="The Cover-Up"
            subtitle="The Protection of the Machine (2018 - 2024)"
            caseFile="02-COVERUP"
            themeClass="theme-theyknew"
            navItems={coverUpNavItems}
        >
            {children}
        </UnifiedLayout>
    );
}

// --- THE BREACH (Act 3) ---
const breachNavItems = [
    { id: "3.1", label: "The Whistleblowers", path: "/breach/whistleblowers" },
    { id: "3.2", label: "The Courtroom", path: "/breach/courtroom" },
    { id: "3.3", label: "The Rabner Dossier", path: "/breach/rabner" },
    { id: "3.4", label: "Forensic Summary", path: "/breach/forensics" },
];

export function BreachLayout({ children }: { children: React.ReactNode }) {
    return (
        <UnifiedLayout
            title="The Breach"
            subtitle="The Collapse of the Machine (2024 - 2026)"
            caseFile="03-BREACH"
            themeClass="theme-expose"
            navItems={breachNavItems}
        >
            {children}
        </UnifiedLayout>
    );
}

// --- THE SUCCESSION (Act 4) ---
const successionNavItems = [
    { id: "4.1", label: "The Current Regime", path: "/succession/regime" },
    { id: "4.2", label: "Musical Chairs", path: "/succession/checchio" },
    { id: "4.3", label: "Active Litigations", path: "/succession/cases" },
    { id: "4.4", label: "The 2027 Horizon", path: "/succession/horizon" },
    { id: "4.5", label: "The Millstone Rises", path: "/succession/epilogue" },
];


export function SuccessionLayout({ children }: { children: React.ReactNode }) {
    return (
        <UnifiedLayout
            title="The Succession"
            subtitle="The Survival of the Machine (2026 - Beyond)"
            caseFile="04-SUCCESSION"
            themeClass="theme-endgame"
            navItems={successionNavItems}
        >
            {children}
        </UnifiedLayout>
    );
}
