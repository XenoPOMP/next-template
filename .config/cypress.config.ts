import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: '.config/cypress/fixtures',
  supportFolder: '.config/cypress/support',
  e2e: {
    supportFile: false,
    /** Implement node.js events that will be available in the browser. */
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    specPattern: '__tests__/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
