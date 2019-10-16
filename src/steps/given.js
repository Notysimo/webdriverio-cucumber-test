const { Given } = require('cucumber');

const openWebsite = require('../support/action/openWebsite');

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);