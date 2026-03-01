const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'client/src/pages/church-bk');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const f of files) {
    const fg = path.join(pagesDir, f);
    let content = fs.readFileSync(fg, 'utf8');
    content = content.replace(/from "@\/components\/Layout"/g, 'from "@/components/ChurchBKLayout"');
    content = content.replace(/from '@\/components\/Layout'/g, 'from "@/components/ChurchBKLayout"');
    // replace href="/"
    content = content.replace(/href="\/(?!church-bk|cathedral|endgame|images|assets|api)([^"]*)"/g, 'href="/church-bk/$1"');
    content = content.replace(/href="\/church-bk\/"/g, 'href="/church-bk"');
    fs.writeFileSync(fg, content, 'utf8');
}

// Update ChurchBKLayout.tsx
const layoutPath = path.join(__dirname, 'client/src/components/ChurchBKLayout.tsx');
let lc = fs.readFileSync(layoutPath, 'utf8');
lc = lc.replace(/href: "\/(?!church-bk|cathedral|endgame|images|assets|api)([^"]*)"/g, 'href: "/church-bk/$1"');
lc = lc.replace(/href: "\/church-bk\/"/g, 'href: "/church-bk"');
fs.writeFileSync(layoutPath, lc, 'utf8');

const cmps = ["CaseDetailModal.tsx", "DocumentViewer.tsx", "FinancialTooltip.tsx", "KeyMetricCard.tsx", "SmartGlossary.tsx", "USMap.tsx", "VisualTimeline.tsx", "WealthMap.tsx"];
for (const c of cmps) {
    const p = path.join(__dirname, 'client/src/components', c);
    if (fs.existsSync(p)) {
        let cc = fs.readFileSync(p, 'utf8');
        cc = cc.replace(/href="\/(?!church-bk|cathedral|endgame|images|assets|api)([^"]*)"/g, 'href="/church-bk/$1"');
        cc = cc.replace(/href="\/church-bk\/"/g, 'href="/church-bk"');
        fs.writeFileSync(p, cc, 'utf8');
    }
}
console.log("Done");
