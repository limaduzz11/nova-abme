import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/browser',
  timeout: 30_000,
  fullyParallel: true,
  reporter: [['list']],
  outputDir: './test-results/browser',
  use: {
    baseURL: 'http://127.0.0.1:4322',
    browserName: 'firefox',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run preview:static',
    url: 'http://127.0.0.1:4322/',
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
