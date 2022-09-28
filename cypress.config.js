const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
  },
  component: {
    testFiles: "**/*.test.{js,ts,jsx,tsx}",
    componentFolder: "src"
  }
});