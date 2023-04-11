const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const runTestForVendingMachine = function() {
  testing.assertEqual(vendingMachine.dispenseCoins(0), 0, "Should give nothing for amount of Rs.0");
  testing.assertEqual(vendingMachine.dispenseCoins(1), 1, "Should give 1 coin for amount of Rs.1");
  testing.assertEqual(vendingMachine.dispenseCoins(2), 2, "Should give 2 coins for amount of Rs.2");
}

runTestForVendingMachine();
