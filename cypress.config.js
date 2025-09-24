const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://brasilapi.com.br/api",
    specPattern: "cypress-tests/e2e/**/*.cy.js",
    fixturesFolder: "cypress-tests/fixtures",
    supportFile: "cypress-tests/support/e2e.js",
    retries: { runMode: 2, openMode: 0 },
    setupNodeEvents(on, config) {
    allureWriter(on, config);
            return config;
    },
    env: {
      allure: true,
      allureResultsPath: "allure-results" // pasta onde os resultados serão gerados
    }
  }
});
