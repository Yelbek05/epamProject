// Custom logger for test tracking
class Logger {
  log(message) {
    console.log(`[LOG] ${message}`);
  }

  product(productName) {
    console.log(`[PRODUCT] Verifying: ${productName}`);
  }

  step(stepDescription) {
    console.log(`[STEP] ${stepDescription}`);
  }
}

module.exports = Logger;
