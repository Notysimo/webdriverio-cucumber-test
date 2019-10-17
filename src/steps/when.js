const { When } = require('cucumber');

const setInputField = require('../support/action/setInputField');
const loginPage = require('../pages/Login.page');
const dressPage = require('../pages/Dress.page');
const context = require('../../data/Context');

When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setInputField
);

When(/^I log in with a notysimo user$/, () => {
    loginPage.login(context.logins.user);
});

When(/^I add a dress to the cart$/,() =>{
    dressPage.addADressToCart()
});