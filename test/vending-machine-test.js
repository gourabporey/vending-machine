const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const printHeadline = testing.printHeadline;
const assertEqual = testing.assertEqual;
const assertArrayEqual = testing.assertArrayEqual;
const assertObjectsEqual = testing.assertObjectsEqual;
const countCoins = vendingMachine.countCoins;
const countCoinsByDenomination = vendingMachine.countCoinsByDenomination;

const testForDispenseCoins = function() {
  const it = function(testName, testData) {
    assertEqual(testData.actual, testData.expected, testName);
  }

  printHeadline("Testing for vending machine");

  it("Should give nothing for no denomination", {
    actual: countCoins(1, []),
    expected: 0,
  });

  it("Should give nothing for no amount provided", {
    actual: countCoins(0, [1]),
    expected: 0,
  });

  it("Should give same number of coins for any amount and denomination of 1", {
    actual: countCoins(6, [1]),
    expected: 6,
  });

  it("Should give one coin for amount to be same as any denomination", {
    actual: countCoins(2, [1,2]),
    expected: 1,
  });

  it("Should give number of denominations when amount is sum of all the denomination", {
    actual: countCoins(18, [1,2,5,10]),
    expected: 4,
  });

  it("Should give total coins when denominations are provided in ascending order", {
    actual: countCoins(35, [1,2,5,10]),
    expected: 4,
  });

  it("Should give total coins when denominations are provided in descending order", {
    actual: countCoins(35, [10,5,2,1]),
    expected: 4,
  });

  it("Should give total coins when denominations are provided in random order", {
    actual: countCoins(13, [1,7,2]),
    expected: 4,
  });
}

const testForDispenseCoinsByDenomination = function() {
  const it = function(testName, testData) {
    assertObjectsEqual(testData.actual, testData.expected, testName);
  }

  printHeadline("Testing for Dispense coins by denomination");

  it("Should give {1:0} for Rs.1 & denomination is [1]", {
    actual: countCoinsByDenomination(0, [1]),
    expected: {1: 0},
  });

  it("Should give {1:1} for Rs.1 & denomination is [1]", {
    actual: countCoinsByDenomination(1, [1]),
    expected: {1: 1},
  });

  it("Should give {1:2} for Rs.2 & denomination is [1]", {
    actual: countCoinsByDenomination(2, [1]),
    expected: {1: 2},
  });

  it("Should give {1:2,2:1} for Rs.3 & denomination is [1, 2]", {
    actual: countCoinsByDenomination(3, [1, 2]),
    expected: {1: 1, 2: 1},
  });

  it("Should give {1:0,2:0,5:1} for Rs.5 & denomination is [1, 2, 5]", {
    actual: countCoinsByDenomination(5, [1, 2, 5]),
    expected: {1: 0, 2: 0, 5: 1},
  });
}

const testVendingMachine = function() {
  testForDispenseCoins();
  testForDispenseCoinsByDenomination();
  testing.displayTestSummary();
}

testVendingMachine();
