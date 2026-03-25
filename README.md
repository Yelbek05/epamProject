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

**Option 1: Generate and serve report (Recommended)**

```bash
allure serve allure-results
```

This will generate the report and start a local server.

**Option 2: Generate static report**

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

**For WSL Users:**

The browser won't open automatically. Use one of these methods:

**Method A: VS Code Live Server (Recommended)** ✅

1. Generate the static report:
   ```bash
   allure generate allure-results --clean -o allure-report
   ```
2. In VS Code, navigate to `allure-report/index.html`
3. Right-click on `index.html` → **"Open with Live Server"**
4. The report will open automatically in your Windows browser

**Method B: Direct file access**

1. Open Windows File Explorer
2. Paste this path in the address bar:
   ```
   \\wsl.localhost\Ubuntu\home\wsly\epamProject\allure-report\index.html
   ```
3. Press Enter and double-click `index.html` to open in browser

**Method C: Manual localhost access**

1. Run `allure open allure-report` or `allure serve allure-results`
2. Copy the URL from terminal (e.g., `Server started at <http://127.0.0.1:45631>`)
3. Try these in your Windows browser (in order):
   - Replace `127.0.0.1` with `localhost`: `http://localhost:45631`
   - Or use your WSL IP: Check `hostname -I` and use `http://<WSL-IP>:45631`
4. Press `Ctrl+C` in terminal when done

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

Reports are displayed in the console using the spec reporter. Screenshots are saved on test failure in the `screenshots/` folder.
