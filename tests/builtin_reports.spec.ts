import { test, expect } from '@playwright/test';
// process.env.PLAYWRIGHT_LIST_PRINT_STEPS = '0';
// process.env.FORCE_COLOR = '0';
// process.env.PLAYWRIGHT_FORCE_TTY = '0';


test('has title', async ({ page}) => {
  await page.goto('https://playwright.dev/');
  // console.log(workerInfo.parallelIndex);
  // Expect a title "to contain" a substring.
  // console.log(process.env.TEST_WORKER_INDEX );
  // console.log(process.env.PLAYWRIGHT_FORCE_TTY,process.env.FORCE_COLOR,process.env.PLAYWRIGHT_LIST_PRINT_STEPS);
  
  await expect(page).toHaveTitle(/Playwight/);
});

test('get started link', async ({ page}) => {
  await page.goto('https://playwright.dev/');
  // console.log(workerInfo.parallelIndex);
  // console.log(testInfo.workerIndex);
  // console.log(process.env.TEST_WORKER_INDEX );
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
