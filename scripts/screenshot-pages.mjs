#!/usr/bin/env node
/**
 * Screenshot verification tool.
 * Captures real screenshots of the running dev server at http://localhost:5174
 * so visual changes can be verified before pushing.
 *
 * Usage:
 *   node scripts/screenshot-pages.mjs              # screenshots all default pages
 *   node scripts/screenshot-pages.mjs /about /tips # screenshots specific routes
 *
 * Output: .screenshots/<route>.png
 */
import { chromium } from '@playwright/test';
import { mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', '.screenshots');
const BASE_URL = process.env.SCREENSHOT_BASE_URL || 'http://localhost:5174';

const DEFAULT_ROUTES = [
  '/',                          // 1  Landing / EvidenceHub
  '/evidence',                  // 2  Map Room / ArchitectureMap
  '/about',                     // 3  About
  '/opinion',                   // 4  Opinions Hub (NOT /opinions)
  '/corrections',               // 5  Corrections
  '/maproom',                   // 6  Maproom (SCIF)
  '/vault',                     // 7  Vault / LegalFindings
  '/vault/slush-fund',          // 8  SlushFund
  '/breach/hub',                // 9  BreachHub
  '/ledger',                    // 10 Ledger
  '/ledger/critchley',          // 11 MichaelCritchley
  '/ledger/mccarrick',          // 12 McCarrick dossier
  '/ledger/reilly',             // 13 Reilly dossier
  '/ledger/lorenzo',            // 14 Lorenzo dossier
  '/ledger/martin',             // 15 Martin dossier
  '/tips',                      // 16 Tips
  '/whos-who',                  // 17 Who's Who
  '/method',                    // 18 The Method
  '/easter',                    // 19 The Nursery
  '/prologue',                  // 20 Prologue
  '/the-record',                // 21 The Record
  '/dedication',                // 22 Dedication
  '/updates',                   // 23 Updates
  '/press',                     // 24 Press
  '/endgame',                   // 25 TheyKnew
];

const MIN_REQUIRED = 25;

async function resolveRoutes() {
  const args = process.argv.slice(2);
  if (args[0] === '--all') {
    const file = join(__dirname, 'all-routes.txt');
    const text = await readFile(file, 'utf8');
    return text.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  }
  if (args.length > 0) return args;
  return DEFAULT_ROUTES;
}

async function main() {
  const routes = await resolveRoutes();
  if (routes.length < MIN_REQUIRED) {
    console.error(`\nERROR: Must screenshot at least ${MIN_REQUIRED} routes. Got ${routes.length}.`);
    console.error(`Run without args for default 25, --all for every route, or pass \u2265 ${MIN_REQUIRED} routes.\n`);
    process.exit(2);
  }

  if (!existsSync(OUT_DIR)) {
    await mkdir(OUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  let successCount = 0;
  const failures = [];

  for (const route of routes) {
    const url = `${BASE_URL}${route}`;
    const filename = route === '/' ? 'root' : route.replace(/^\//, '').replace(/\//g, '_');
    const filepath = join(OUT_DIR, `${filename}.png`);

    try {
      console.log(`-> ${url}`);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForLoadState('load', { timeout: 10000 }).catch(() => { });
      await page.waitForTimeout(2500); // let animations/images settle
      await page.screenshot({ path: filepath, fullPage: false });
      console.log(`   saved: ${filepath}`);
      successCount++;
    } catch (err) {
      console.error(`   FAILED ${url}: ${err.message}`);
      failures.push({ url, error: err.message });
    }
  }

  await browser.close();

  console.log(`\n=== SCREENSHOT VERIFICATION SUMMARY ===`);
  console.log(`  Captured: ${successCount}/${routes.length}`);
  console.log(`  Output:   ${OUT_DIR}`);
  if (failures.length > 0) {
    console.log(`  Failures:`);
    failures.forEach(f => console.log(`    - ${f.url}: ${f.error.split('\n')[0]}`));
  }

  if (successCount < MIN_REQUIRED) {
    console.error(`\nFAIL: Only ${successCount} screenshots captured. Minimum ${MIN_REQUIRED} required for visual verification.`);
    process.exit(1);
  }
  console.log(`\nPASS: ≥ ${MIN_REQUIRED} screenshots captured. Now VIEW each one before claiming verification.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
