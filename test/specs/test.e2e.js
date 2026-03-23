describe("Dynamic interaction and verifying specific product details", () => {
  // UC-1 Product Details Verification:

  it("Login with standard_user", async () => {
    await browser.url("/");

    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");

    await $('input[type="submit"]').click();

    await expect($("#inventory_container")).toBeDisplayed();
  });

  it("Click on a product title", async () => {
    // Click on the first item
    const name = await $$(".inventory_item .inventory_item_name")[0].getText();
    const desc = await $$(".inventory_item .inventory_item_desc")[0].getText();
    console.log(name);

    await $$(".inventory_item_name")[0].click();

    await $(".inventory_details_name").waitForDisplayed();
    await $(".inventory_details_desc").waitForDisplayed();

    // Validate that the Price and Description on the Details Page match the data from the Inventory Page
    await expect($(".inventory_details_name")).toHaveText(name);
    await expect($(".inventory_details_desc")).toHaveText(desc);
  });

  it("Add the item to the cart from the Details Page", async () => {
    await $("#add-to-cart").click();
  });

  // UC-2 Footer & Social Links:
  // Scroll to the footer.
  // (Optional/Bonus) Verify that clicking a social link opens the correct URL in a new tab/window.
  it("Scroll to the footer, Verify that the Twitter, Facebook, and LinkedIn links exist.", async () => {
    await $(".left_component #back-to-products").click();
    const footer = await $(".footer");
    await footer.scrollIntoView();

    // Verify that the Twitter, Facebook, and LinkedIn links exist.
    await expect($('a[href*="twitter"]')).toBeExisting();
    await expect($('a[href*="facebook"]')).toBeExisting();
    await expect($('a[href*="linkedin"]')).toBeExisting();

    // (Optional/Bonus) Verify that clicking a social link opens the correct URL in a new tab/window
  });
});
