class OrderPage{
    get orderDressDescription(){
        return $('#product_3_13_0_227829 > td.cart_description > p > a');
    }
}
module.exports = new OrderPage();