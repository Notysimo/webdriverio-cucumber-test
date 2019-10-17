class HomePage {
    get accountNameTopMenu() {
        return $('#header > div.nav > div > div > nav > div:nth-child(1) > a > span');
    }
}

module.exports = new HomePage();