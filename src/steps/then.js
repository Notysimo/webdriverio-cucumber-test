const { Then } = require('cucumber');
const { assert } = require('chai');
const homePage = require('../pages/Home.page');
const orderPage = require('../pages/Order.page');

Then(/^a user name is on the top menu$/, () => {
    assert.equal(
        homePage.accountNameTopMenu.getText(),
        'Notysimo lb',
    );
});

Then(/^a dress is in the cart$/, () => {
    browser.url('http://automationpractice.com/index.php?controller=order');
    assert.equal(
        orderPage.orderDressDescription.getText(),
        'Printed Dress'
    );
});

Then(/^a dress is payed by check$/,() => {
    assert.equal(orderPage.orderSuccessDiv.getText(), 'Your order on My Store is complete.');
});