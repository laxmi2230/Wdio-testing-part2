//Login page


// load the axe-core script
const axeSource = require('axe-core').source;
const assert = require('assert');

describe('axe test', function () {
  it('should return results', function () {
    browser.url('https://content.werally.com/');

    // inject the script
    browser.execute(axeSource);
    // browser.debug();
    //var theOptions;
   // theOptions = {runOnly: {type: "rule", values: ['link-name']}};
    // run inside browser and get results
    let results = browser.executeAsync(function (done) {
      axe.run(function (err, results) {
        if (err) done(err);
        done(results);
      });
    });


    // assert there are no violations
    //console.log(results.value, 'values')
    //console.log(results.value.violations, 'vol')
    //console.log(results.value.violations.length, 'len')
    //assert.strictEqual(results.value.violations.length, 0, 'Expected no a11y violations');
  })
})
describe('axe test', function () {
  it('should return results', function () {
    browser.url('https://content.werally.com/search?topic=Health');

    // inject the script
    browser.execute(axeSource);
    // browser.debug();
    //var theOptions;
   // theOptions = {runOnly: {type: "rule", values: ['link-name']}};
    // run inside browser and get results
    let results = browser.executeAsync(function (done) {
      axe.run(function (err, results) {
        if (err) done(err);
        done(results);
      });
    });

  })
})
describe('axe test', function () {
  it('should return results', function () {
    browser.url('https://content.werally.com/login');

    // inject the script
    browser.execute(axeSource);
    // browser.debug();
    //var theOptions;
   // theOptions = {runOnly: {type: "rule", values: ['link-name']}};
    // run inside browser and get results
    let results = browser.executeAsync(function (done) {
      axe.run(function (err, results) {
        if (err) done(err);
        done(results);
      });
    });

    // assert there are no violations
    //console.log(results.value, 'values')
    //console.log(results.value.violations, 'vol')
    //console.log(results.value.violations.length, 'len')
    //assert.strictEqual(results.value.violations.length, 0, 'Expected no a11y violations');
  })
})
