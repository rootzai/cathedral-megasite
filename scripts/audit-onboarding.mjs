#!/usr/bin/env node
// Ad-hoc onboarding audit. Captures full-page screenshots of the first-few-pages flow.
import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', '.screenshots', 'audit-onboarding');
const BASE_URL = 'http://localhost:5174';

const ROUTES = [
  ['/', 'root'],           // Triptych gate / entry
  ['/archive', 'archive'],        // RedesignedHome (alt hero)
  ['/prologue', 'prologue'],       // Investigative feature opener
  ['/evidence', 'evidence-map'],   // Map Room (first real click)
  ['/about', 'about'],          // About
  // --- next three pages a visitor commonly reaches ---
  ['/index', 'index'],          // Master Index (top-nav)
  ['/tips', 'tips'],           // Tip Line (top-nav)
  ['/ledger', 'ledger'],         // The Ledger (primary content hub)
];

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  for (const [route, name] of ROUTES) {
    const url = `${BASE_URL}${route}`;
    console.log(`-> ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForLoadState('load', { timeout: 15000 }).catch(() => { });
    await page.waitForTimeout(3000);
    const foldPath = join(OUT_DIR, `${name}_fold.png`);
    const fullPath = join(OUT_DIR, `${name}_full.png`);
    await page.screenshot({ path: foldPath, fullPage: false });
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`   ${foldPath}`);
    console.log(`   ${fullPath}`);
  }

  await browser.close();
  console.log('done.');
}
main().catch((e) => { console.error(e); process.exit(1); });
