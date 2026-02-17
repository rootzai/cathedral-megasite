import fs from 'fs';
import path from 'path';

const projectRoot = 'c:/Projects/Cathedral_Megasite/sodomhall-project';
const clientSrc = path.join(projectRoot, 'client/src');
const publicDir = path.join(projectRoot, 'client/public');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });
    return arrayOfFiles;
}

const tsxFiles = getAllFiles(clientSrc).filter(f => f.endsWith('.tsx'));
const publicFiles = getAllFiles(publicDir).map(f => f.replace(publicDir, '').replace(/\\/g, '/'));

console.log(`Auditing ${tsxFiles.length} tsx files...`);

tsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /(src|href)=["'](\/?[^"']+)["']/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const assetPath = match[2];
        if (assetPath.startsWith('http') || assetPath.startsWith('#') || assetPath.includes('mailto:')) continue;

        // Normalize path
        let normalizedPath = assetPath.startsWith('/') ? assetPath : '/' + assetPath;

        // Quick fix for common redirect or routing paths which are not 404s but routes
        if (normalizedPath === '/' || normalizedPath === '/ruling' || normalizedPath === '/endgame' || normalizedPath === '/academy' || normalizedPath === '/about' || normalizedPath === '/documents') continue;
        if (normalizedPath.startsWith('/ruling/') || normalizedPath.startsWith('/endgame/') || normalizedPath.startsWith('/academy/')) continue;

        if (!publicFiles.includes(normalizedPath)) {
            console.log(`Potential 404 in ${path.basename(file)}: ${assetPath}`);
        }
    }
});
