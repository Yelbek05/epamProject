describe("Dynamic interaction and verifying specific product details", () => {
  // Product Details Verification
  it("Login with standard_user", async () => {
    await browser.url("/");

    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");

    await $('input[type="submit"]').click();

    await browser.pause("5000");
  });
});
