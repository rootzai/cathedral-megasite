import { test, expect } from '@playwright/test';

test('capture evidence hub crash', async ({ page }) => {
    // Capture page errors
    const errors: string[] = [];
    page.on('pageerror', exception => {
        errors.push(`Uncaught exception: ${exception}`);
        console.log(`Uncaught exception: ${exception}`);
    });
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(`Console error: ${msg.text()}`);
            console.log(`Console error: ${msg.text()}`);
        }
    });

    await page.goto('http://localhost:3001/evidence', { waitUntil: 'networkidle' });
    
    // Wait a bit to see if it crashes
    await page.waitForTimeout(3000);
    
    if (errors.length > 0) {
        console.log('CRASH LOG:', errors);
        throw new Error('Page crashed!');
    }
    
    console.log('No crash detected.');
});
