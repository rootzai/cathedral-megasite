import { test } from '@playwright/test';

test('debug crash', async ({ page }) => {
    page.on('pageerror', err => {
        console.log('PAGE ERROR NAME:', err.name);
        console.log('PAGE ERROR MESSAGE:', err.message);
        console.log('PAGE ERROR STACK:', err.stack);
    });
    
    page.on('console', msg => {
        if (msg.type() === 'error') {
            const location = msg.location();
            console.log(`CONSOLE ERROR [${location.url}:${location.lineNumber}]:`, msg.text());
        }
    });

    await page.goto('http://localhost:3002/evidence', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(4000);
});
