# Broken Items & Inconsistencies Report

## 1. Financial Data Inconsistencies (Newark)
*   **CardinalateAndMcCarrick.tsx:** Lists Newark Enterprise Value as **$2B+**.
*   **DiocesanFinance.tsx:** Lists Newark Enterprise Value as **$4.0B+**.
*   **TheCardinalate.tsx:** Lists Newark Enterprise Value as **$4B+**.
*   **Action:** Standardize Newark to **$4.0B+** across all pages to reflect the "McCarrick Mechanism" fundraising value and infrastructure assets.

## 2. Broken Buttons & Links
*   **Active Case Dossiers:** "View Dossier" buttons for minor cases (e.g., Syracuse, Rochester) may not have specific narratives yet.
*   **Home Page:** "Executive Summary" cards need to link to specific anchors, not just pages.
*   **Document Library:** "Download" buttons for some files are placeholders if the PDF doesn't exist in `public/documents`.

## 3. Placeholders
*   **DiocesanFinance.tsx:** Contains `[Interactive Wealth Map Placeholder]`.
*   **ActiveCaseDossiers.tsx:** The "Visual Timeline" is a static component, needs to be interactive.

## 4. Missing "Show Your Work"
*   Financial estimates (EV) for NY, Chicago, Boston, and Newark lack a breakdown of *how* the number was calculated (Real Estate + Cash + Insurance + Art).

**Remediation Plan:**
1.  Fix Newark data to $4.0B+ everywhere.
2.  Implement "Show Your Work" tooltips for all EV numbers.
3.  Replace Wealth Map placeholder with a D3.js or Recharts visualization.
4.  Ensure every single "View Dossier" button opens a modal with content.
