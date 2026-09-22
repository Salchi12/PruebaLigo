import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests', timeout: 30000, fullyParallel: true, forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    reporter: [['html', {outputFolder: '../reports/web/playwright-report', open: 'never'}], ['list']],
    use: {
        baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        testIdAttribute: 'data-test'
    },
    projects: [{name: 'chromium', use: {...devices['Desktop Chrome']}}]
});
