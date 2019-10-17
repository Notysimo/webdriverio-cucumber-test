class DressPage {
    open() {
        browser.url('/index.php?id_category=8&controller=category');
    }

    get printedDressImage(){
        return $('img[title="Printed Dress"][src="http://automationpractice.com/img/p/8/8-home_default.jpg"]');
    }

    get addToCartButton(){
        return $('#add_to_cart > button > span');
    }

    get proceedToCheckOutButton(){
        return $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a');
    }

    addADressToCart(){
        if (this.printedDressImage.isExisting()) {
            this.printedDressImage.click();
            this.addToCartButton.waitForEnabled();
            this.addToCartButton.click();
            this.addToCartButton.click();
            this.addToCartButton.click();
        }
    }
}
module.exports = new DressPage();