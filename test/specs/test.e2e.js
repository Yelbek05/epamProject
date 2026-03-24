describe("Dynamic interaction and verifying specific product details", () => {
  // UC-1 Product Details Verification:

  // Login with standard_user
  beforeEach(async () => {
    await browser.url("/");

    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $('input[type="submit"]').click();
    await expect($("#inventory_container")).toBeDisplayed();
  });

  it("Click on a product title", async () => {
    // Click on the first item
    const items = await $$(".inventory_item");
    expect(items.length).toBeGreaterThan(0);

    const name = await items[0].$(".inventory_item_name").getText();
    const desc = await items[0].$(".inventory_item_desc").getText();
    console.log(name);

    await items[0].$(".inventory_item_name").click();

    await $(".inventory_details_name").waitForDisplayed();
    await $(".inventory_details_desc").waitForDisplayed();

    // Validate that the Price and Description on the Details Page match the data from the Inventory Page
    await expect($(".inventory_details_name")).toHaveText(name);
    await expect($(".inventory_details_desc")).toHaveText(desc);

    // "Add the item to the cart from the Details Page"
    await $('button[id^="add-to-cart"]').click();
  });

  // UC-2 Footer & Social Links:
  // Scroll to the footer.
  // (Optional/Bonus)    tab/window.
  it("Scroll to the footer, Verify that the Twitter, Facebook, and LinkedIn links exist.", async () => {
    const footer = await $(".footer");
    await footer.scrollIntoView();

    // Verify that the Twitter, Facebook, and LinkedIn links exist.
    await expect($('a[href*="twitter"]')).toBeExisting();
    await expect($('a[href*="facebook"]')).toBeExisting();
    await expect($('a[href*="linkedin"]')).toBeExisting();
  });
  
  // (Optional/Bonus) Verify that clicking a social link opens the correct URL in a new tab/window
  it("Verify that clicking a social link opens the correct URL in a new tab/window", async () => {
    await $(".footer").scrollIntoView();

    const originalWindow = await browser.getWindowHandle();

    const socialLinks = [
      { selector: 'a[href*="twitter"]', expectedUrl: "x.com" },
      { selector: 'a[href*="facebook"]', expectedUrl: "facebook.com" },
      { selector: 'a[href*="linkedin"]', expectedUrl: "linkedin.com" },
    ];
    for (const link of socialLinks) {
      const element = await $(link.selector);

      await expect(element).toBeExisting(); // element check
      await expect(element).toBeClickable(); // interaction check

      await element.click();

      await browser.waitUntil(
        async () => (await browser.getWindowHandles()).length === 2,
        { timeout: 5000 },
      );

      const windows = await browser.getWindowHandles();
      const newWindow = windows.find((w) => w !== originalWindow);

      await browser.switchToWindow(newWindow);

      await expect(browser).toHaveUrl(
        expect.stringContaining(link.expectedUrl),
      );

      await browser.closeWindow();
      await browser.switchToWindow(originalWindow);
    }
  });
});
