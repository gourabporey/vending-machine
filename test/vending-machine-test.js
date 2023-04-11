const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const runTestForVendingMachine = function() {
  testing.assertEqual(vendingMachine.dispenseCoins(0), 0, "Should give nothing for amount of Rs.0");
  testing.assertEqual(vendingMachine.dispenseCoins(1), 1, "Should give 1 coin of 1 rupee for amount of Rs.1");
  testing.assertEqual(vendingMachine.dispenseCoins(2), 1, "Should give 1 coin of 2 rupee for amount of Rs.2");
  testing.assertEqual(vendingMachine.dispenseCoins(5), 1, "Should give 1 coin of 5 rupee for amount of Rs.5");
  testing.assertEqual(vendingMachine.dispenseCoins(10), 1, "Should give 1 coin of 10 rupee for amount of Rs.10");
  testing.assertEqual(vendingMachine.dispenseCoins(13), 3, "Should give 1 coin of 10 rupee, 1 coin each of 1 and 2 rupee for amount of Rs.13");
  testing.assertEqual(vendingMachine.dispenseCoins(35), 4, "Should give 3 coins of 10 rupee, 1 coin of 5 rupee for amount of Rs.35");
}

runTestForVendingMachine();
