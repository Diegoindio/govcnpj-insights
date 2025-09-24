const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://brasilapi.com.br/api",
    specPattern: "cypress-tests/e2e/**/*.cy.js",
    fixturesFolder: "cypress-tests/fixtures",
    supportFile: false
  },
});
