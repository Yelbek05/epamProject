// Component for footer section
class FooterComponent {
  get container() {
    return $(".footer");
  }

  get twitter() {
    return $('a[href*="twitter"]');
  }

  get facebook() {
    return $('a[href*="facebook"]');
  }

  get linkedin() {
    return $('a[href*="linkedin"]');
  }

  async scrollToFooter() {
    await this.container.scrollIntoView();
  }

  // Returns social links with expected URL patterns
  getSocialLinks() {
    return [
      { el: this.twitter, url: "x.com" },
      { el: this.facebook, url: "facebook" },
      { el: this.linkedin, url: "linkedin" },
    ];
  }
}

module.exports = FooterComponent;
