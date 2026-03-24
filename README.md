# EPAM WebDriverIO Test Automation Project

Automated testing project for [SauceDemo](https://www.saucedemo.com/) using WebDriverIO with Page Object Model pattern.

## Project Structure

```
epamProject/
├── test/
│   ├── specs/
│   │   └── test.e2e.js          # Test specifications
│   ├── pageobjects/
│   │   ├── login.page.js        # Login page object
│   │   ├── inventory.page.js    # Inventory page object
│   │   └── productDetails.page.js # Product details page object
│   ├── components/
│   │   └── footer.component.js  # Footer component
│   └── utils/
│       └── logger.js            # Custom logger
├── wdio.conf.js                 # WebDriverIO configuration
├── package.json
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- npm
- Firefox browser
- Microsoft Edge browser

## Installation

```bash
npm install
```

## Running Tests

Run tests on both Firefox and Edge in parallel:

```bash
npm run wdio
```

## Test Cases

### UC-1: Product Details Verification
- Login with standard_user
- Click on parametrized product (e.g., "Sauce Labs Fleece Jacket")
- Validate Price, Name, and Description match between Inventory and Details page
- Add item to cart

### UC-2: Footer & Social Links
- Scroll to footer
- Verify Twitter, Facebook, and LinkedIn links exist
- (Bonus) Verify clicking opens correct URL in new tab

## Technical Details

- **Tool:** WebDriverIO v9
- **Browsers:** Firefox, Microsoft Edge (parallel execution)
- **Pattern:** Page Object Model (POM)
- **Locators:** Mix of CSS and XPath selectors
- **Logging:** Custom logger for tracking test actions

## Locator Examples

### CSS Selectors
```javascript
$(".inventory_item_price")
$('a[href*="twitter"]')
```

### XPath Selectors
```javascript
$('//button[starts-with(@id,"add-to-cart")]')
$('//div[text()="Product Name"]/ancestor::div[@class="inventory_item"]')
```

## Test Reports

Reports are displayed in the console using the spec reporter. Screenshots are saved on test failure in the `screenshots/` folder.
