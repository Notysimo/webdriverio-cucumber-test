class OrderPage{
    get orderDressDescription(){
        return $('#product_3_13_0_227829 > td.cart_description > p > a');
    }

    get checkOutButton(){
        return $('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span');
    }

    get addressCheckOutButton(){
        return $('#center_column > form > p > button > span');
    }

    get checkBoxCheckOut(){
        return $('#cgv');
    }

    get check2OutButton(){
        return $('#form > p > button > span');
    }

    get payCheckOutButton(){
        return $('#HOOK_PAYMENT > div:nth-child(2) > div > p > a');
    }

    get confirmCheckOutButton(){
        return $('#cart_navigation > button > span');
    }

    get orderSuccessDiv(){
        return $('#center_column > p.alert.alert-success');
    }

    checkOutOrder(){
        if (this.checkOutButton.isExisting()) {
            this.checkOutButton.waitForExist();
            this.checkOutButton.click();
            this.addressCheckOutButton.waitForExist();
            this.addressCheckOutButton.click();
            this.checkBoxCheckOut.waitForExist();
            this.checkBoxCheckOut.click();
            this.check2OutButton.click();
            this.payCheckOutButton.waitForExist();
            this.payCheckOutButton.click();
            this.confirmCheckOutButton.waitForExist();
            this.confirmCheckOutButton.click();
            this.orderSuccessDiv.waitForExist();
        }
    }
}
module.exports = new OrderPage();