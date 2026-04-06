import os
import re

# 1. Define valid routes from the routers
# This is a manual extract of the routers' logic for comparison
VALID_ROUTES = {
    "/", "/evidence", "/breach", "/ledger", "/vault", "/about", "/tips",
    "/origin", "/coverup", "/succession", "/the-record", "/corrections",
    "/opinion", "/opinion/noonan", "/opinion/cannon", "/opinion/matthews", "/opinion/stephens",
    "/vault/findings", "/vault/bankruptcy", "/vault/documents", "/vault/finances",
    "/vault/the-corporate-veil", "/vault/active-case-dossiers", "/vault/creditor-committee",
    "/vault/institutional-structure", "/vault/forensic-model", "/vault/stakeholder-analysis",
    "/vault/the-cardinalate", "/vault/global-growth", "/vault/sacramental-data",
    "/vault/clergy-metrics", "/vault/intelligence",
    "/origin/root", "/origin/martin", "/origin/beach-house", "/origin/network", "/origin/explosion",
    "/coverup/big-lie", "/coverup/financial", "/coverup/complicity", "/coverup/legal",
    "/coverup/triumvirate", "/coverup/epstein",
    "/breach/whistleblowers", "/breach/courtroom", "/breach/analysis", "/breach/dirty-dozen",
    "/breach/sanction-plea", "/breach/tobin-hypocrisy", "/breach/sheeran-mccarrick",
    "/breach/corporate-veil", "/breach/evidence-meta", "/breach/rabner", "/breach/forensics",
    "/succession/regime", "/succession/checchio", "/succession/cases", "/succession/horizon", "/succession/epilogue",
    "/headline-news", "/ledger/martin", "/ledger/martin/crimes", "/ledger/martin/launder", "/ledger/martin/chicago",
    "/ledger/lorenzo", "/ledger/lorenzo/expulsion", "/ledger/lorenzo/rehabilitation", "/ledger/lorenzo/elevation",
    "/ledger/reilly", "/ledger/mccarrick", "/ledger/mccarrick/background", "/ledger/mccarrick/profile",
    "/ledger/mccarrick/the-rise", "/ledger/mccarrick/the-regime", "/ledger/mccarrick/network",
    "/ledger/mccarrick/warnings", "/ledger/mccarrick/mechanisms", "/ledger/mccarrick/seton-hall",
    "/ledger/mccarrick/downfall", "/ledger/mccarrick/the-reckoning", "/ledger/mccarrick/legal",
    "/ledger/mccarrick/survivors", "/ledger/mccarrick/responses", "/ledger/mccarrick/analysis", "/ledger/mccarrick/conclusion",
    "/ledger/checchio", "/ledger/checchio/formation", "/ledger/checchio/ascent", "/ledger/checchio/governance",
    "/ledger/checchio/controversies", "/ledger/checchio/purge", "/ledger/checchio/status",
    "/expose/kenneth-martin", "/expose/mccarrick-network", "/expose/legal-triumvirate",
    "/expose/epstein-nexus", "/expose/epstein-pivot", "/expose/reilly-protection",
    "/expose/reilly-ascent", "/expose/rabner-exhibits", "/expose/appeal-grounds",
    "/expose/nyre-dismissal", "/expose/checchio-new-orleans", "/expose"
}

# 2. Extract links from the codebase
SRC_DIR = r"c:\Projects\Cathedral_Megasite\sodomhall-project\client\src"
LINK_REGEX = re.compile(r'href=["\']([^"\']+)["\']')

dead_links = []

for root, dirs, files in os.walk(SRC_DIR):
    for file in files:
        if file.endswith((".tsx", ".ts", ".js", ".jsx")):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                links = LINK_REGEX.findall(content)
                for link in links:
                    # Ignore external links and fragments/placeholders
                    if link.startswith(("http", "mailto", "tel", "javascript", "#")) or link == "{ring.route}":
                        continue
                    
                    if link not in VALID_ROUTES:
                        dead_links.append((path, link))

# 3. Report
print(f"--- Forensic Link Crawl Results ---")
if not dead_links:
    print("Zero dead links detected in source code.")
else:
    print(f"Found {len(dead_links)} potential dead links:")
    for path, link in dead_links:
        print(f"PATH: {path}")
        print(f"DEAD LINK: {link}")
        print("---")
