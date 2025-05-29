// playwright.config.js
// Basic Playwright config for JavaScript
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'http://localhost:3001',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};

module.exports = config;
