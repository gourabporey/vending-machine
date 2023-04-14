const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const assertEqual = testing.assertEqual;
const assertArrayEqual = testing.assertArrayEqual;
const assertObjectsEqual = testing.assertObjectsEqual;
const countCoins = vendingMachine.countCoins;
const countCoinsByDenomination = vendingMachine.countCoinsByDenomination;

const runTestForVendingMachine = function() {
  testing.printHeadline("Testing for vending machine");

  let message = "Should give nothing for no denomination provided";
  let actual = countCoins(1, []);
  let expected = 0;
  assertEqual(actual, expected, message);

  message = "Should give nothing for no amount provided";
  actual = countCoins(0, [1]);
  expected = 0;
  assertEqual(actual, expected, message);

  message = "Should give same number of coins for any amount and denomination of 1";
  actual = countCoins(1, [1]);
  expected = 1;
  assertEqual(actual, expected, message);

  message = "Should give 1 coin of 2 rupee for amount of Rs.2 and denomination of 1, 2 ";
  actual = countCoins(2, [1,2]);
  expected = 1;
  assertEqual(actual, expected, message);
  message = "Should give 1 coin of 5 rupee for amount of Rs.5 and denomination of 1, 2, 5";
  actual = countCoins(5, [1,2,5]);
  expected = 1;
  assertEqual(actual, expected, message);
  message = "Should give 1 coin of 10 rupee for amount of Rs.10 and denomination of 2, 5, 10";
  actual = countCoins(10, [2,5,10]);
  expected = 1;
  assertEqual(actual, expected, message);
  message = "Should give 1 coin of 10 rupee, 1 coin each of 1 and 2 rupee for amount of Rs.13 and denomination of 1, 2, 5, 10";
  actual = countCoins(13, [1,2,5,10]);
  expected = 3;
  assertEqual(actual, expected, message);
  message = "Should give 3 coins of 10 rupee, 1 coin of 5 rupee for amount of Rs.35 and denomination of 1, 2, 5, 10";
  actual = countCoins(35, [1,2,5,10]);
  expected = 4;
  assertEqual(actual, expected, message);
  message = "Should give 1 coin of 7 rupee, 1 coin of 4 rupee, 2 coin of 1 rupee for amount of Rs.13 and denomination of 1, 4, 7";
  actual = countCoins(13, [1,4,7]);
  expected = 4;
  assertEqual(actual, expected, message);
  message = "Should give 1 coin of 7 rupee, 3 coins of 2 rupee for amount of Rs.13 and denomination of 1, 7, 2";
  actual = countCoins(13, [1,7,2]);
  expected = 4;
  assertEqual(actual, expected, message);
  message = "Should give 1 coin of 10 rupee, 1 coin of 7 rupee, 1 coin of 1 rupee for amount of Rs.18 and denomination of 1, 7, 10, 2";
  actual = countCoins(18, [1,7,10,2]);
  expected = 3;
  assertEqual(actual, expected, message);
}

const runTestForDispenseCoinsByDenomination = function() {
  testing.printHeadline("Testing for Dispense coins by denomination");
  assertObjectsEqual(countCoinsByDenomination(0, [1]), {1: 0}, "Should give {1:0} for Rs.1 & denomination is [1]");
  assertObjectsEqual(countCoinsByDenomination(1, [1]), {1: 1}, "Should give {1:1} for Rs.1 & denomination is [1]");
  assertObjectsEqual(countCoinsByDenomination(2, [1]), {1: 2}, "Should give {1:2} for Rs.2 & denomination is [1]");
  assertObjectsEqual(countCoinsByDenomination(3, [1, 2]), {1: 1, 2: 1}, "Should give {1:2,2:1} for Rs.3 & denomination is [1, 2]");
  assertObjectsEqual(countCoinsByDenomination(5, [1, 2, 5]), {1: 0, 2: 0, 5: 1}, "Should give {1:0,2:0,5:1} for Rs.5 & denomination is [1, 2, 5]");
}

runTestForVendingMachine();
runTestForDispenseCoinsByDenomination();
testing.displayTestSummary();
