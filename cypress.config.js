const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '26eu85',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/e2e/Other/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://vizzitt.onrender.com/",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 120000,
    trashAssetsBeforeRuns: true,
    video: false,
    screenshotOnRunFailure: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    env: {
      first_name: "Sarah",
      webdriver_uni_homepage: "http://www.webdriveruniversity.com"
    }
  },
});
