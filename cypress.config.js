const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://magento.softwaretestingboard.com/',

      chromeWebSecurity: false,
      video: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
