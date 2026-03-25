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

## Allure Reports

This project uses Allure for generating detailed test reports.

### Prerequisites

Install Allure CLI globally (if not already installed):

```bash
npm install -g allure-commandline
```

### Generating Reports

After running tests, Allure results are automatically saved to the `allure-results/` directory.

**Option 1: Generate and serve report (Most Common)** ⭐

```bash
allure serve allure-results
```

Generates the report and starts a local server automatically.

**Option 2: Generate static HTML report**

```bash
allure generate allure-results --clean -o allure-report
```

Creates a static report in the `allure-report/` folder.

### Opening Reports (For WSL/Linux Users)

**Using VS Code Live Server (Recommended)** ✅

If you're using VS Code with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer):

1. Generate the static report:

   ```bash
   allure generate allure-results --clean -o allure-report
   ```

2. In VS Code Explorer, navigate to `/allure-report/index.html`

3. Right-click on `index.html` → Select **"Open with Live Server"**

4. The report opens automatically in your default browser at `http://127.0.0.1:5500/allure-report/index.html`

**Alternative: Direct File Access**

Open Windows File Explorer and paste:

```
\\wsl.localhost\Ubuntu\home\wsly\epamProject\allure-report\index.html
```

### Viewing Reports

The Allure report provides:

- Test execution timeline
- Test case details with steps
- Screenshots on failures
- Browser and environment information
- Historical trends (when running multiple test executions)

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
$(".inventory_item_price");
$('a[href*="twitter"]');
```

### XPath Selectors

```javascript
$('//button[starts-with(@id,"add-to-cart")]');
$('//div[text()="Product Name"]/ancestor::div[@class="inventory_item"]');
```

## Test Reports

This project uses **Allure Reporter** for detailed HTML reports and **Spec Reporter** for console output during test execution.

- **Console Output:** Test results are displayed in real-time using the spec reporter
- **Screenshots:** Automatically saved on test failure in the `screenshots/` folder
- **Allure Reports:** Comprehensive HTML reports with test history, screenshots, and step-by-step execution details (see Allure Reports section above)

---

## 📋 Task Description

> **"Dynamic Content" Flow**
>
> **Focus:** Dynamic interaction and verifying specific product details.
>
> **Launch URL:** [https://www.saucedemo.com/](https://www.saucedemo.com/)

### UC-1 Product Details Verification:
- Login with `standard_user`.
- Click on a product title (parametrize this, e.g., "Sauce Labs Fleece Jacket") to go to the Product Details Page.
- Validate that the Price and Description on the Details Page match the data from the Inventory Page.
- Add the item to the cart from the Details Page.

### UC-2 Footer & Social Links:
- Scroll to the footer.
- Verify that the Twitter, Facebook, and LinkedIn links exist.
- (Optional/Bonus) Verify that clicking a social link opens the correct URL in a new tab/window.

### Technical Requirements:
- **Tool:** WebDriverIO.
- **Browsers:** Edge, Firefox (Run in Parallel).
- **Pattern:** Page Object Model (POM).
- **Locators:** Mix of CSS and XPath (demonstrate knowledge of both).
- **Logging:** Implement a custom logger (or console log) that tracks which product is being verified.
- **Documentation:** Add a README.md explaining how to run the tests and generate the report.
