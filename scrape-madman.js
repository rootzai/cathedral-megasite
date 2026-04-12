import puppeteer from 'puppeteer';
import fs from 'fs';

const URLS = [
  '/',
  '/the-machine',
  '/exhibit-a',
  '/exhibit-b',
  '/exhibit-c',
  '/exhibit-d',
  '/exhibit-e',
  '/exhibit-f',
  '/emails',
  '/irishman',
  '/briefing'
];

const BASE_URL = 'https://madmansec-nuaqskqw.manus.space';

async function extract() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const results = {};
  
  for (const path of URLS) {
    console.log(`Scraping ${path}...`);
    try {
      await page.goto(`${BASE_URL}${path}`, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait for content to render
      await new Promise(r => setTimeout(r, 2000));
      
      // Extract main content
      const content = await page.evaluate(() => {
        const root = document.getElementById('root');
        if (!root) return null;
        
        // Basic extraction 
        return {
          html: root.innerHTML,
          text: root.innerText,
          images: Array.from(root.querySelectorAll('img')).map(img => img.src)
        };
      });
      
      results[path] = content;
    } catch (e) {
      console.log(`Failed to scrape ${path}:`, e.message);
    }
  }
  
  await browser.close();
  
  fs.writeFileSync('C:/Projects/Cathedral_Megasite/sodomhall-project/madman-scrape-results.json', JSON.stringify(results, null, 2));
  console.log('Extraction complete. Saved to madman-scrape-results.json');
}

extract();
