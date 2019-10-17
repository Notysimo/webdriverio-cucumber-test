const { Given } = require('cucumber');

const openWebsite = require('../support/action/openWebsite');
const dressPage = require('../pages/Dress.page');

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^I am on the dress page$/,
    dressPage.open
);