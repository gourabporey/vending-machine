const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const assertEqual = testing.assertEqual;
const assertArrayEqual = testing.assertArrayEqual;
const assertObjectsEqual = testing.assertObjectsEqual;
const dispenseCoins = vendingMachine.dispenseCoins;
const dispenseCoinsByDenomination = vendingMachine.dispenseCoinsByDenomination;

const runTestForVendingMachine = function() {
  testing.printHeadline("Testing for vending machine");

  const testMsgForNoDenomination = "Should give nothing for no denomination";
  assertEqual(dispenseCoins(1, []), 0, testMsgForNoDenomination);

  const testMsgForZeroAmount = "Should give nothing for amount of Rs.0";
  assertEqual(dispenseCoins(0, [1]), 0, testMsgForZeroAmount );

  const testMsgForOneRupee = "Should give 1 coin of 1 rupee for amount of Rs.1 and denomination of 1";
  assertEqual(dispenseCoins(1, [1]), 1, testMsgForOneRupee);

  assertEqual(dispenseCoins(2, [1,2]), 1, "Should give 1 coin of 2 rupee for amount of Rs.2 and denomination of 1, 2 ");
  assertEqual(dispenseCoins(5, [1,2,5]), 1, "Should give 1 coin of 5 rupee for amount of Rs.5 and denomination of 1, 2, 5");
  assertEqual(dispenseCoins(10, [2,5,10]), 1, "Should give 1 coin of 10 rupee for amount of Rs.10 and denomination of 2, 5, 10");
  assertEqual(dispenseCoins(13, [1,2,5,10]), 3, "Should give 1 coin of 10 rupee, 1 coin each of 1 and 2 rupee for amount of Rs.13 and denomination of 1, 2, 5, 10");
  assertEqual(dispenseCoins(35, [1,2,5,10]), 4, "Should give 3 coins of 10 rupee, 1 coin of 5 rupee for amount of Rs.35 and denomination of 1, 2, 5, 10");
  assertEqual(dispenseCoins(13, [1,4,7]), 4, "Should give 1 coin of 7 rupee, 1 coin of 4 rupee, 2 coin of 1 rupee for amount of Rs.13 and denomination of 1, 4, 7");
  assertEqual(dispenseCoins(13, [1,7,2]), 4, "Should give 1 coin of 7 rupee, 3 coins of 2 rupee for amount of Rs.13 and denomination of 1, 7, 2");
  assertEqual(dispenseCoins(18, [1,7,10,2]), 3, "Should give 1 coin of 10 rupee, 1 coin of 7 rupee, 1 coin of 1 rupee for amount of Rs.18 and denomination of 1, 7, 10, 2");
}

const runTestForDispenseCoinsByDenomination = function() {
  testing.printHeadline("Testing for Dispense coins by denomination");
  assertObjectsEqual(dispenseCoinsByDenomination(0, [1]), {1: 0}, "Should give {1:0} for Rs.1 & denomination is [1]");
  assertObjectsEqual(dispenseCoinsByDenomination(1, [1]), {1: 1}, "Should give {1:1} for Rs.1 & denomination is [1]");
  assertObjectsEqual(dispenseCoinsByDenomination(2, [1]), {1: 2}, "Should give {1:2} for Rs.2 & denomination is [1]");
  assertObjectsEqual(dispenseCoinsByDenomination(3, [1, 2]), {1: 1, 2: 1}, "Should give {1:2,2:1} for Rs.3 & denomination is [1, 2]");
  assertObjectsEqual(dispenseCoinsByDenomination(5, [1, 2, 5]), {1: 0, 2: 0, 5: 1}, "Should give {1:0,2:0,5:1} for Rs.5 & denomination is [1, 2, 5]");
}

runTestForVendingMachine();
runTestForDispenseCoinsByDenomination();
testing.displayTestSummary();
