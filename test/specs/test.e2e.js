const LoginPage = require("../pageobjects/login.page.js");
const InventoryPage = require("../pageobjects/inventory.page.js");
const ProductPage = require("../pageobjects/productDetails.page.js");
const FooterComponent = require("../components/footer.component.js");
const Logger = require("../utils/logger.js");

const loginPage = new LoginPage();
const productPage = new ProductPage();
const inventoryPage = new InventoryPage();
const footerComponent = new FooterComponent();
const logger = new Logger();

// Test data - change this to test different products
const TEST_PRODUCT = "Sauce Labs Fleece Jacket";

describe("Dynamic Content Flow", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await expect($("#inventory_container")).toBeDisplayed();
    logger.step("User logged in");
  });

  describe("UC-1: Product Details Verification", () => {
    it("should match product details between inventory and details page", async () => {
      // Get product data from inventory
      const inventoryData = await inventoryPage.getProductData(TEST_PRODUCT);
      logger.product(inventoryData.name);
      logger.log(`Price: ${inventoryData.price}`);

      // Navigate to product details
      await inventoryPage.openProduct(TEST_PRODUCT);

      // Verify all details match
      await expect(productPage.name).toHaveText(inventoryData.name);
      await expect(productPage.desc).toHaveText(inventoryData.desc);
      await expect(productPage.price).toHaveText(inventoryData.price);
      logger.step("Details verified: name, description, price");

      await productPage.addToCart();
      logger.step("Added to cart");
    });
  });

  describe("UC-2: Footer & Social Links", () => {
    it("should have Twitter, Facebook, and LinkedIn links in footer", async () => {
      await footerComponent.scrollToFooter();

      await expect(footerComponent.twitter).toBeExisting();
      await expect(footerComponent.facebook).toBeExisting();
      await expect(footerComponent.linkedin).toBeExisting();
      logger.step("Social links verified");
    });

    it("(Bonus) should open correct URLs when clicking social links", async () => {
      await footerComponent.scrollToFooter();
      const originalWindow = await browser.getWindowHandle();
      const links = footerComponent.getSocialLinks();

      for (const link of links) {
        logger.log(`Testing: ${link.url}`);
        await link.el.click();

        // Wait for new tab
        await browser.waitUntil(
          async () => (await browser.getWindowHandles()).length === 2,
          { timeout: 5000 },
        );

        const windows = await browser.getWindowHandles();
        const newWindow = windows.find((w) => w !== originalWindow);

        await browser.switchToWindow(newWindow);
        await expect(browser).toHaveUrl(expect.stringContaining(link.url));

        await browser.closeWindow();
        await browser.switchToWindow(originalWindow);
      }
      logger.step("All social links open correct URLs");
    });
  });
});
