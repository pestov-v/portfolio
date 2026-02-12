import { test, expect } from '@playwright/test';

test.describe('Project Modal', () => {
  test('modal should be centered on screen', async ({ page }) => {
    // Navigate to the portfolio page
    await page.goto('http://localhost:3000');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Scroll to projects section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Find and click on OschadPay project card
    const oschadPayCard = page.locator('text=OschadPay - Payment Processing System').first();
    await oschadPayCard.click();

    // Wait for modal to appear
    const modal = page.locator('[role="dialog"], .modal, text=Case Study').first();
    await modal.waitFor({ state: 'visible', timeout: 5000 });

    // Get viewport and modal dimensions
    const viewport = page.viewportSize();
    const modalBox = await modal.boundingBox();

    if (!viewport || !modalBox) {
      throw new Error('Could not get viewport or modal dimensions');
    }

    // Calculate center position
    const viewportCenterY = viewport.height / 2;
    const modalCenterY = modalBox.y + modalBox.height / 2;

    console.log('Viewport height:', viewport.height);
    console.log('Viewport center Y:', viewportCenterY);
    console.log('Modal top:', modalBox.y);
    console.log('Modal height:', modalBox.height);
    console.log('Modal center Y:', modalCenterY);
    console.log('Difference from center:', Math.abs(modalCenterY - viewportCenterY));

    // Check if modal is approximately centered (within 50px tolerance)
    const tolerance = 50;
    const isCentered = Math.abs(modalCenterY - viewportCenterY) < tolerance;

    expect(isCentered).toBe(true);

    // Take screenshot for visual verification
    await page.screenshot({ path: 'modal-centered.png', fullPage: true });

    // Close modal
    const closeButton = page.locator('button[aria-label="Close modal"], .closeButton').first();
    await closeButton.click();

    // Verify modal is closed
    await expect(modal).not.toBeVisible();
  });

  test('modal should remain centered after scrolling page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Scroll down the page
    await page.evaluate(() => window.scrollTo(0, 1000));

    // Click on a project card
    await page.locator('#projects').scrollIntoViewIfNeeded();
    const projectCard = page.locator('text=OschadPay - Payment Processing System').first();
    await projectCard.click();

    // Check modal position
    const modal = page.locator('text=Case Study').first();
    await modal.waitFor({ state: 'visible' });

    const viewport = page.viewportSize();
    const modalBox = await modal.boundingBox();

    if (!viewport || !modalBox) {
      throw new Error('Could not get dimensions');
    }

    // Modal should be centered relative to viewport, not page
    const viewportCenterY = viewport.height / 2;
    const modalCenterY = modalBox.y + modalBox.height / 2;

    console.log('After scroll - Viewport center Y:', viewportCenterY);
    console.log('After scroll - Modal center Y:', modalCenterY);

    const tolerance = 100;
    expect(Math.abs(modalCenterY - viewportCenterY)).toBeLessThan(tolerance);
  });
});
