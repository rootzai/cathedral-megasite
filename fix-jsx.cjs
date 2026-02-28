const fs = require('fs');
let content = fs.readFileSync('client/src/pages/epstein/Home.tsx', 'utf8');

// Fix unclosed hr tags with className
content = content.replace(/<hr className="section-rule">/g, '<hr className="section-rule" />');

// Fix unclosed vanilla hr tags
content = content.replace(/<hr>/g, '<hr />');

// Fix unclosed br tags
content = content.replace(/<br>/g, '<br />');

fs.writeFileSync('client/src/pages/epstein/Home.tsx', content);
console.log("Fixed JSX unclosed tags.");
