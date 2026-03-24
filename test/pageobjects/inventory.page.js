// Page Object for inventory/products list page
class InventoryPage {
  get items() {
    return $$(".inventory_item");
  }

  // XPath: finds product card by its title text
  getProductByName(productName) {
    return $(`//div[text()="${productName}"]/ancestor::div[@class="inventory_item"]`);
  }

  async getProductData(productName) {
    const item = await this.getProductByName(productName);
    return {
      name: await item.$(".inventory_item_name").getText(),
      desc: await item.$(".inventory_item_desc").getText(),
      price: await item.$(".inventory_item_price").getText(),
    };
  }

  async openProduct(productName) {
    const item = await this.getProductByName(productName);
    await item.$(".inventory_item_name").click();
  }
}

module.exports = InventoryPage;
