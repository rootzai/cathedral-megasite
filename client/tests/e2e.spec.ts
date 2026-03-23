import { expect, test } from '@playwright/test';

test.describe('Cathedral Megasite Critical Path', () => {
    test('Home page loads successfully without crashing', async ({ page }) => {
        await page.goto('/');

        // Check for standard navigation elements
        await expect(page.getByRole('navigation')).toBeVisible();

        // There shouldn't be an error boundary text
        await expect(page.locator('text=An unexpected error occurred')).not.toBeVisible();
    });

    test('Active Case Dossiers load cleanly', async ({ page }) => {
        await page.goto('/church-bk/active-case-dossiers');

        // Verify our data schemas parse correctly without white-screening
        await expect(page.locator('text=An unexpected error occurred')).not.toBeVisible();

        // Verify list renders some content
        const listLocator = page.locator('text=Archdiocese of San Francisco');
        await expect(listLocator.first()).toBeVisible();
    });

    test('Endgame portal renders and sub-navigates', async ({ page }) => {
        await page.goto('/endgame');

        await expect(page.locator('text=Endgame')).toBeVisible();
        await expect(page.locator('text=An unexpected error occurred')).not.toBeVisible();
    });

    test('McCarrick Network Map (Situation Room) loads', async ({ page }) => {
        await page.goto('/network');

        await expect(page.locator('text=The McCarrick Network Map')).toBeVisible();
        await expect(page.locator('text=An unexpected error occurred')).not.toBeVisible();
        
        // Check for node visualization
        await expect(page.locator('text=Cardinal McCarrick')).toBeVisible();
    });
});
