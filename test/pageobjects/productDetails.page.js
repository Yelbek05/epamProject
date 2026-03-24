// Page Object for product details page
class ProductPage {
  get name() {
    return $(".inventory_details_name");
  }

  get desc() {
    return $(".inventory_details_desc");
  }

  get price() {
    return $(".inventory_details_price");
  }

  // XPath: matches any add-to-cart button regardless of product
  get addToCartBtn() {
    return $('//button[starts-with(@id,"add-to-cart")]');
  }

  get backBtn() {
    return $('//button[@id="back-to-products"]');
  }

  async getDetails() {
    return {
      name: await this.name.getText(),
      desc: await this.desc.getText(),
      price: await this.price.getText(),
    };
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}

module.exports = ProductPage;
