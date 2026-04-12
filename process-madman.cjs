const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const axios = require('axios');

const JSON_FILE = path.join(__dirname, 'madman-scrape-results.json');
const ASSETS_DIR = path.join(__dirname, 'client/public/assets/madman');
const OUTPUT_DIR = path.join(__dirname, 'client/src/pages/endgame/madman');

const pages = {
  '/': 'Home',
  '/the-machine': 'TheMachine',
  '/exhibit-a': 'ExhibitA',
  '/exhibit-b': 'ExhibitB',
  '/exhibit-c': 'ExhibitC',
  '/exhibit-d': 'ExhibitD',
  '/exhibit-e': 'ExhibitE',
  '/exhibit-f': 'ExhibitF',
  '/emails': 'Emails',
  '/irishman': 'Irishman',
  '/briefing': 'Briefing'
};

async function processData() {
  if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  
  const rawData = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
  
  // 1. Download all images and create URL mapping
  const urlMapping = {};
  
  for (const p of Object.keys(rawData)) {
    const images = rawData[p].images || [];
    for (const imgUrl of images) {
      if (!urlMapping[imgUrl]) {
        try {
          const urlObj = new URL(imgUrl);
          const filename = path.basename(urlObj.pathname);
          const localPath = path.join(ASSETS_DIR, filename);
          
          if (!fs.existsSync(localPath)) {
            console.log(`Downloading ${imgUrl}...`);
            const response = await axios({url: imgUrl, responseType: 'stream'});
            await new Promise((resolve, reject) => {
              const writer = fs.createWriteStream(localPath);
              response.data.pipe(writer);
              writer.on('finish', resolve);
              writer.on('error', reject);
            });
          }
          urlMapping[imgUrl] = `/assets/madman/${filename}`;
        } catch (e) {
          console.error(`Failed to download ${imgUrl}:`, e.message);
        }
      }
    }
  }

  // 2. Clean HTML and generate components
  for (const [routePath, componentName] of Object.entries(pages)) {
    console.log(`Processing ${componentName}...`);
    let html = rawData[routePath]?.html || '';
    
    // Replace absolute image URLs with local logic
    for (const [absUrl, localPath] of Object.entries(urlMapping)) {
      html = html.split(absUrl).join(localPath);
    }
    
    const $ = cheerio.load(html, null, false); // false to avoid wrapping in html/body
    
    // STRIP UNWANTED ELEMENTS
    $('style').remove();
    $('nav').remove();
    $('#mobile-menu').remove();
    $('.ticker-tape').remove(); // Strip out the breaking news ticker
    
    // For footer, the external site has standard layout things we want to drop if it causes issues.
    // The main app footer will provide context. Actually we can leave their footer if it's specialized, 
    // but the task said "strip footer". Let's look for known footer identifiers or just leave custom content.
    $('section.border-t-2.border-red-900\\/30').remove(); // The old React iframe footer if it got caught? No, that was in the Cathedral app.
    
    // Fix class -> className for React compatibility inside dangerouslySetInnerHTML?
    // dangerouslySetInnerHTML doesn't care! It takes regular HTML. 
    // But we need to make sure the root div is clean.
    
    const cleanHtml = $.html();
    
    const tsxCode = `
import React from 'react';
import MadmanLayout from './MadmanLayout';

export default function ${componentName}() {
  return (
    <MadmanLayout>
      <div 
        className="madman-dossier-content"
        dangerouslySetInnerHTML={{ __html: ${JSON.stringify(cleanHtml)} }} 
      />
    </MadmanLayout>
  );
}
`;
    fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.tsx`), tsxCode.trim());
  }
  
  console.log('Complete.');
}

processData();
