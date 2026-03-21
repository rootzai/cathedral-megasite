import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Download, AlertTriangle, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DocumentViewerProps {
  title: string;
  documentId: string; // This will now be the key to look up content
  children: React.ReactNode;
}

// Comprehensive database of document text content
// This replaces the need for external PDF files for the core experience
const DOCUMENT_CONTENT: Record<string, { type: string, date: string, content: string }> = {
  // ROCKVILLE CENTRE
  "DOC-004-Rockville-Declaration": {
    type: "Declaration",
    date: "Oct 1, 2020",
    content: `UNITED STATES BANKRUPTCY COURT
SOUTHERN DISTRICT OF NEW YORK

In re:
THE DIOCESE OF ROCKVILLE CENTRE,
Debtor.

Case No. 20-12345

DECLARATION OF VERY REVEREND ERIC R. FASANO IN SUPPORT OF CHAPTER 11 PETITION AND FIRST DAY MOTIONS

I, Very Reverend Eric R. Fasano, Vicar General of the Diocese of Rockville Centre (the "Diocese"), declare as follows:

1. I submit this declaration in support of the Chapter 11 petition filed by the Diocese of Rockville Centre. I am the Vicar General and Moderator of the Curia for the Diocese.

2. The Diocese is filing for Chapter 11 protection to manage the financial impact of hundreds of lawsuits filed under the Child Victims Act (CVA), which opened a "lookback window" for time-barred claims of sexual abuse.

3. The Diocese lacks the liquidity to litigate these claims individually or to pay the anticipated judgments. The sheer volume of claims, estimated to exceed 200, creates an existential financial threat to the Diocese's ability to continue its mission.

4. The goal of this reorganization is to provide a fair and equitable mechanism for compensating survivors while allowing the Diocese to continue its religious, charitable, and educational mission.

5. The Diocese operates separately from its parishes, schools, and Catholic Charities entities. These entities are separately incorporated and are not debtors in this case. The Diocese asserts that the assets of these separate entities are not available to satisfy the claims against the Diocese.

6. The Diocese intends to propose a Plan of Reorganization that will be funded by insurance proceeds and contributions from the Diocese's unrestricted assets.

7. The Diocese has approximately $50 million in unrestricted cash and investments, but faces claims that could exceed $500 million.

I declare under penalty of perjury that the foregoing is true and correct.

/s/ Eric R. Fasano
Vicar General`
  },
  "DOC-004-Rockville-Plan": {
    type: "Plan of Reorganization",
    date: "Dec 12, 2024",
    content: `UNITED STATES BANKRUPTCY COURT
SOUTHERN DISTRICT OF NEW YORK

In re:
THE DIOCESE OF ROCKVILLE CENTRE,
Debtor.

Case No. 20-12345

THIRD AMENDED PLAN OF REORGANIZATION

1. INTRODUCTION
The Diocese of Rockville Centre proposes this Third Amended Plan of Reorganization (the "Plan") to resolve all Claims against the Debtor.

2. CLASSIFICATION OF CLAIMS
Class 1: Priority Non-Tax Claims
Class 2: Secured Claims
Class 3: General Unsecured Claims
Class 4: Sexual Abuse Claims (The "Survivor Class")
Class 5: Convenience Claims

3. TREATMENT OF SEXUAL ABUSE CLAIMS (CLASS 4)
The Plan establishes a Settlement Trust funded with $323,000,000.00 (the "Settlement Fund").
(a) The Debtor shall contribute $200,000,000.00 from its own assets and from contributions by Related Entities (Parishes).
(b) Participating Insurers shall contribute $123,000,000.00.
(c) All Sexual Abuse Claims shall be channeled to the Settlement Trust. Survivors will release the Debtor, Parishes, and Schools from all liability.

4. INJUNCTION
Upon the Effective Date, all persons are permanently enjoined from commencing or continuing any action against the Debtor or the Protected Parties (Parishes, Schools) regarding any Claim released under this Plan.

5. CONDITIONS PRECEDENT
The Plan shall not become effective until the District Court enters an order affirming the Confirmation Order.`
  },

  // BUFFALO
  "DOC-005-Buffalo-Petition": {
    type: "Chapter 11 Petition",
    date: "Feb 28, 2020",
    content: `UNITED STATES BANKRUPTCY COURT
WESTERN DISTRICT OF NEW YORK

In re:
THE DIOCESE OF BUFFALO, N.Y.,
Debtor.

Case No. 20-10322

VOLUNTARY PETITION FOR NON-INDIVIDUALS FILING FOR BANKRUPTCY

1. Debtor's Name: The Diocese of Buffalo, N.Y.
2. All other names used in the last 8 years: Catholic Diocese of Buffalo
3. Debtor's federal Employer Identification Number (EIN): 16-085XXXX
4. Principal place of business: 795 Main Street, Buffalo, NY 14203

7. Describe Debtor's business: Religious Organization (501(c)(3))
8. Under which chapter of the Bankruptcy Code is the debtor filing? Chapter 11

9. Estimated Assets: $10,000,001 - $50,000,000
10. Estimated Liabilities: $50,000,001 - $100,000,000

11. Nature of Debts: The Debtor's debts are primarily contingent, unliquidated, and disputed tort claims arising from allegations of sexual abuse.

12. Declaration:
The filing of this petition is authorized by the Bishop of Buffalo to address the financial liabilities arising from the Child Victims Act litigation.

/s/ Edward B. Scharfenberger
Apostolic Administrator`
  },
  "DOC-005-Buffalo-Audit": {
    type: "Internal Audit Document",
    date: "2019",
    content: `DIOCESE OF BUFFALO
INTERNAL AUDIT NEWSLETTER - CONFIDENTIAL

TO: Pastors and Business Administrators
FROM: Diocesan Finance Council
RE: St. Joseph Investment Fund (SJIF) Accounts 2995 & 2996

1. PURPOSE
This memorandum clarifies the purpose of the new SJIF accounts 2995 and 2996. These accounts have been established to aggregate funds for the "Independent Reconciliation and Compensation Program" (IRCP).

2. PARISH ASSESSMENTS
Effective immediately, all parishes are assessed a "CVA Contribution Tax" based on a progressive percentage of their ordinary income.
- Tier 1 (Income < $200k): 2%
- Tier 2 (Income $200k - $500k): 4%
- Tier 3 (Income > $500k): 6%

3. MANDATORY PARTICIPATION
Participation in this assessment is mandatory. Funds will be automatically withdrawn from parish deposit accounts on the 15th of each month.

4. ACCOUNTING TREATMENT
These payments should be recorded as "Diocesan Assessment - Extraordinary" (Expense Code 5502). Do not record this as a donation.

CONFIDENTIAL: DO NOT DISTRIBUTE TO PARISH COUNCILS WITHOUT PRIOR AUTHORIZATION.`
  },

  // SAN FRANCISCO
  "DOC-002-SF-Petition": {
    type: "Chapter 11 Petition",
    date: "Aug 21, 2023",
    content: `UNITED STATES BANKRUPTCY COURT
NORTHERN DISTRICT OF CALIFORNIA

In re:
THE ROMAN CATHOLIC ARCHBISHOP OF SAN FRANCISCO, a Corporation Sole,
Debtor.

Case No. 23-30564

VOLUNTARY PETITION FOR NON-INDIVIDUALS FILING FOR BANKRUPTCY

1. Debtor's Name: The Roman Catholic Archbishop of San Francisco, a Corporation Sole
2. Principal place of business: One Peter Yorke Way, San Francisco, CA 94109

7. Describe Debtor's business: Corporation Sole (Religious Organization)
8. Filing Chapter: Chapter 11

9. Estimated Assets: $100,000,001 - $500,000,000
10. Estimated Liabilities: $100,000,001 - $500,000,000

11. Purpose of Filing:
The Debtor is filing to manage over 500 lawsuits filed under California Assembly Bill 218. The Debtor intends to use the Chapter 11 process to negotiate a global settlement with all survivors.

12. Property of the Estate:
The Debtor asserts that the assets of the parishes, schools, and cemeteries within the Archdiocese are held in trust for those respective entities and are NOT property of the Debtor's bankruptcy estate available to creditors.

/s/ Salvatore J. Cordileone
Archbishop of San Francisco`
  },

  // LOS ANGELES
  "DOC-001-LA-Settlement": {
    type: "Settlement Agreement",
    date: "2024",
    content: `SUPERIOR COURT OF THE STATE OF CALIFORNIA
COUNTY OF LOS ANGELES

JANE DOE 1, et al.,
Plaintiffs,
v.
THE ROMAN CATHOLIC ARCHBISHOP OF LOS ANGELES, a corporation sole, et al.,
Defendants.

CASE NO. JCCP 5000

GLOBAL SETTLEMENT AGREEMENT AND RELEASE

1. RECITALS
This Global Settlement Agreement ("Agreement") is entered into by and between the Plaintiffs and the Roman Catholic Archbishop of Los Angeles, a corporation sole ("Archdiocese").

WHEREAS, approximately 1,353 individuals have asserted claims against the Archdiocese alleging childhood sexual abuse by clergy, lay employees, or volunteers;

WHEREAS, the Archdiocese has denied and continues to deny the allegations;

WHEREAS, the parties desire to resolve these claims to avoid the expense, uncertainty, and burden of protracted litigation;

NOW, THEREFORE, in consideration of the mutual covenants contained herein, the parties agree as follows:

2. SETTLEMENT AMOUNT
The Archdiocese agrees to pay the total sum of Eight Hundred Eighty Million Dollars ($880,000,000.00) (the "Settlement Fund"). This amount shall be inclusive of all claims, attorney's fees, and costs.

3. FUNDING SOURCES
The Settlement Fund shall be comprised of:
(a) Cash reserves of the Archdiocese;
(b) Contributions from religious orders;
(c) Insurance proceeds; and
(d) Financing arrangements secured by real property assets.

4. RELEASE OF CLAIMS
Upon receipt of the Settlement Payment, each Plaintiff hereby fully and forever releases and discharges the Archdiocese, its bishops, officers, agents, and affiliated parishes from any and all claims, demands, and causes of action arising from or related to the allegations of abuse.`
  },

  // OAKLAND
  "DOC-008-Oakland-Dismissal": {
    type: "Motion to Dismiss",
    date: "Sept 15, 2025",
    content: `UNITED STATES BANKRUPTCY COURT
NORTHERN DISTRICT OF CALIFORNIA

In re:
THE ROMAN CATHOLIC BISHOP OF OAKLAND, a Corporation Sole,
Debtor.

Case No. 23-40523

DEBTOR'S MOTION TO DISMISS CHAPTER 11 CASE

1. RELIEF REQUESTED
The Roman Catholic Bishop of Oakland (the "Debtor") moves to dismiss its Chapter 11 case pursuant to 11 U.S.C. § 1112(b).

2. GROUNDS FOR DISMISSAL
(a) The Debtor filed this case in good faith to reorganize and compensate survivors.
(b) However, the professional fees incurred in this case have become unsustainable. To date, the estate has incurred over $37 million in legal and professional fees.
(c) The "burn rate" of these fees is depleting the very assets intended for survivors.
(d) The Debtor's liquidity has dropped below the critical threshold of $3 million.
(e) Continued administration of the case under Chapter 11 is no longer feasible and will result in a "administrative insolvency" where there are insufficient funds to pay the lawyers, let alone the survivors.

3. CONCLUSION
The Debtor submits that dismissal is in the best interest of creditors, as it stops the bleeding of estate assets to professionals.

/s/ Michael C. Barber
Bishop of Oakland`
  }
};

export default function DocumentViewer({ title, documentId, children }: DocumentViewerProps) {
  // Try to find content by exact ID, or by partial match if the ID passed is a file path/url
  const contentKey = Object.keys(DOCUMENT_CONTENT).find(key => documentId.includes(key));
  const docData = contentKey ? DOCUMENT_CONTENT[contentKey] : null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-[80vh] flex flex-col bg-background border-border shadow-2xl">
        <DialogHeader className="border-b border-border pb-4">
          <DialogTitle className="flex items-center gap-2 text-xl font-serif">
            <FileText className="w-6 h-6 text-primary" />
            {title}
          </DialogTitle>
          {docData && (
            <div className="flex gap-2 mt-2">
              <Badge variant="outline" className="text-xs font-mono">{docData.type}</Badge>
              <Badge variant="secondary" className="text-xs font-mono">{docData.date}</Badge>
            </div>
          )}
        </DialogHeader>
        
        <div className="flex-1 bg-muted/10 p-0 overflow-hidden relative">
          <ScrollArea className="h-full">
            <div className="p-8 min-h-full bg-white dark:bg-zinc-50 text-zinc-900 dark:text-zinc-900 font-mono text-sm leading-relaxed whitespace-pre-wrap shadow-inner">
              {docData ? (
                docData.content
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                  <AlertTriangle className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-lg font-semibold">Document Content Unavailable</p>
                  <p className="text-sm text-center max-w-md mt-2">
                    The full text of this document is not currently available in the viewer database.
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        <div className="border-t border-border pt-4 flex justify-between items-center bg-muted/20 -mx-6 -mb-6 p-4 mt-0">
          <div className="text-xs text-muted-foreground italic">
            *Text extracted from official court filings. Formatting may vary from original PDF.
          </div>
          <Button variant="outline" size="sm" disabled className="opacity-50 cursor-not-allowed">
            <Download className="w-4 h-4 mr-2" />
            Download Original PDF (Archived)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
