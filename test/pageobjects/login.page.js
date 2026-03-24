// Page Object for login page
class LoginPage {
  async open() {
    await browser.url("/");
  }

  get username() {
    return $("#user-name");
  }

  get password() {
    return $("#password");
  }

  // XPath: submit button
  get submitBtn() {
    return $('//input[@type="submit"]');
  }

  async login(user, pass) {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.submitBtn.click();
  }
}

module.exports = LoginPage;
