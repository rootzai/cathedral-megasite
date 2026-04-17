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
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', '.screenshots');
const BASE_URL = process.env.SCREENSHOT_BASE_URL || 'http://localhost:5174';

const DEFAULT_ROUTES = [
  '/',
  '/evidence',
  '/about',
  '/opinions',
  '/corrections',
  '/maproom',
  '/vault/slush-fund',
  '/breach/hub',
  '/ledger',
  '/tips',
];

const routes = process.argv.slice(2).length > 0
  ? process.argv.slice(2)
  : DEFAULT_ROUTES;

async function main() {
  if (!existsSync(OUT_DIR)) {
    await mkdir(OUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

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
    } catch (err) {
      console.error(`   FAILED ${url}: ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\nDone. Screenshots in: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
