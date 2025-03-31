import { test, expect } from '@playwright/test';

test.describe('AI Recommended Button Functionality', () => {
  test('should navigate to the recommended destination when the AI button is clicked', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('http://localhost:5173/');

    // Ensure the AI-recommended button is visible
    const aiButton = page.locator('text=Explore AI Recommendation');
    await expect(aiButton).toBeVisible();

    // Click the AI-recommended button
    await aiButton.click();

    // Wait for navigation to complete
    await page.waitForLoadState('networkidle');

    // Verify that the user is redirected to the recommended destination page
    // Replace '/recommended-destination' with the actual path of the recommended page
    await expect(page).toHaveURL(/\/eiffel_tower|\/colosseum|\/great_wall|\/machu_picchu|\/grand_canyon|\/santorini|\/tokyo_tower|\/sydney_opera/);

    // Verify that the destination page contains relevant content
    const destinationHeader = page.locator('h1');
    await expect(destinationHeader).toBeVisible();
    await expect(destinationHeader).toContainText('Welcome to');
  });
});