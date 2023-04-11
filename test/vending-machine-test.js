const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const runTestForVendingMachine = function() {
  testing.assertEqual(vendingMachine.dispenseCoins(12, []), 0, "Should give nothing for no denomination");
  testing.assertEqual(vendingMachine.dispenseCoins(0, [1,2]), 0, "Should give nothing for amount of Rs.0");
  testing.assertEqual(vendingMachine.dispenseCoins(1, [1]), 1, "Should give 1 coin of 1 rupee for amount of Rs.1 and denomination of 1");
  testing.assertEqual(vendingMachine.dispenseCoins(2, [1,2]), 1, "Should give 1 coin of 2 rupee for amount of Rs.2 and denomination of 1, 2 ");
  testing.assertEqual(vendingMachine.dispenseCoins(5, [1,2,5]), 1, "Should give 1 coin of 5 rupee for amount of Rs.5 and denomination of 1, 2, 5");
  testing.assertEqual(vendingMachine.dispenseCoins(10, [2,5,10]), 1, "Should give 1 coin of 10 rupee for amount of Rs.10 and denomination of 2, 5, 10");
  testing.assertEqual(vendingMachine.dispenseCoins(13, [1,2,5,10]), 3, "Should give 1 coin of 10 rupee, 1 coin each of 1 and 2 rupee for amount of Rs.13 and denomination of 1, 2, 5, 10");
  testing.assertEqual(vendingMachine.dispenseCoins(35, [1,2,5,10]), 4, "Should give 3 coins of 10 rupee, 1 coin of 5 rupee for amount of Rs.35 and denomination of 1, 2, 5, 10");
}

runTestForVendingMachine();
testing.displayTestSummary();
