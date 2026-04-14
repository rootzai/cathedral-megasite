const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const htmlToDocx = require('html-to-docx');

async function convertMarkdownToDocx() {
  const mdPath = 'C:\\Users\\ejspi\\.gemini\\antigravity\\brain\\50ff48d7-9d94-45f0-8241-a55b98fcf8d3\\implementation_plan.md';
  const outDir = path.join(__dirname, 'docs', 'architecture');
  const outPath = path.join(outDir, 'Gameplay_Design_Document.docx');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const markdownContent = fs.readFileSync(mdPath, 'utf8');
  
  const md = new MarkdownIt();
  const htmlContent = md.render(markdownContent);
  
  const styledHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Gameplay Design Document</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12pt; }
            h1 { color: #8b1a1a; border-bottom: 2px solid #8b1a1a; padding-bottom: 5px; }
            h2 { color: #555555; }
            h3 { color: #333333; }
            p { line-height: 1.5; }
            strong { color: #222222; }
        </style>
    </head>
    <body>
        ${htmlContent}
    </body>
    </html>
  `;

  try {
    const fileBuffer = await htmlToDocx(styledHtml, null, {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
    });
    
    fs.writeFileSync(outPath, fileBuffer);
    console.log('Successfully generated ' + outPath);
  } catch (error) {
    console.error('Error generating docx:', error);
  }
}

convertMarkdownToDocx();
