const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://brasilapi.com.br/api",
    specPattern: "cypress-tests/e2e/**/*.cy.js",
    fixturesFolder: "cypress-tests/fixtures",
    supportFile: "cypress-tests/support/e2e.js",
    setupNodeEvents(on, config) {
      require('cypress-allure-plugin/writer')(on, config);
      return config;
    },
    env: {
      allure: true,
      allureResultsPath: "allure-results" // pasta onde os resultados serão gerados
    }
  }
});
