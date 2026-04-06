# [AUDIT] Cathedral Megasite Navigation & Flow (v2.0)

This document provides a page-by-page mapping of the site's navigation architecture to ensure a seamless "walkthrough" experience.

## Narrative Mapping: Rings vs. Acts

To reconcile the "Shield" metaphor with the "Investigation" flow, the following mapping is established:

| Ring (Shield) | Name | Narrative Act | Key Dossier Hub |
| :--- | :--- | :--- | :--- |
| **Ring 5** (Outer) | VICTIMS & SURVIVORS | **Act IV / VII** | `/evidence/victims` |
| **Ring 4** | THE OUTER WALLS | **Act VI / VIII** | `/ledger/checchio` |
| **Ring 3** | LEGAL APPARATUS | **Act III** | `/ledger/mccarrick/mechanisms` |
| **Ring 2** | LEGAL FORTRESS | **Act II (Labyrinth)** | `/ledger/mccarrick/network` |
| **Ring 1** (Inner) | SECRET ARCHIVES | **Act I (Origin)** | `/evidence/origin` |

---

## Page-by-Page Navigation Audit

### 1. THE HUB (Home)
*   **Path**: `/`
*   **Tip-top (Global)**: `PrimaryNavigation` (Visible)
*   **Top (Context)**: Hero Narrative + Video Background.
*   **Bottom**: `HomeNavigation` (Act I-IX grid).
*   **Status**: Healthy. Entry point for "The Descent".

### 2. THE EVIDENCE (Hub)
*   **Path**: `/evidence`
*   **Tip-top (Global)**: `PrimaryNavigation` (Visible)
*   **Top (Context)**: `EvidenceSubNavigation` (Archives, Board, Lawyers).
*   **Bottom**: `JourneyNav` (Manual sequence).
*   **Status**: **Warning**. The "Begin Act I" CTA should point to Ring 1 (Origin) for narrative consistency.

### 3. THE LABYRINTH (Act II)
*   **Path**: `/ledger/mccarrick/network` (Primary Mapping)
*   **Tip-top (Global)**: `PrimaryNavigation` (Visible)
*   **Top (Context)**: `EndgameLayout` Sidebar (McCarrick Dossier).
*   **Bottom**: **Broken**. `JourneyNav` is missing or the path is incorrectly indexed in `JourneyNav.tsx`.
*   **Action**: Re-integrate `JourneyNav` and add path to registry.

### 4. THE BREACH (Portal)
*   **Path**: `/breach`
*   **Tip-top (Global)**: `PrimaryNavigation` (Visible)
*   **Top (Context)**: Forensic Metrics.
*   **Bottom**: `JourneyNav`.
*   **Status**: Healthy.

### 5. THE LEDGER (Investigative Hub)
*   **Path**: `/ledger`
*   **Tip-top (Global)**: `PrimaryNavigation` (Visible)
*   **Top (Context)**: Character selection (McCarrick, Checchio, Lorenzo).
*   **Bottom**: `JourneyNav`.
*   **Status**: Healthy.

---

## Technical Recommendations

1.  **Unify `JourneyNav.tsx`**: Expand the `ROUTES` array to include every sub-page in the `/ledger/mccarrick` and `/ledger/checchio` dossiers.
2.  **Standardize Breadcrumbs**: Implement a `ForensicBreadcrumbs` component for the "Top" navigation space to show `SH > EVIDENCE > RING 2 > LABYRINTH`.
3.  **Refactor `EvidenceHub.tsx`**: Update the 6-ring grid to map logically to the 5-ring Shield Registry to avoid user confusion.
