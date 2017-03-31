exports.config = {
  // De capabilities zijn alleen nodig wanneer er rechten issues zijn met chrome.
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--no-sandbox']
    }
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['**/*.js']
}
