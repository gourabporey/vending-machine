const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const runTestForVendingMachine = function() {
  testing.assertEqual(vendingMachine.value, 0, "Should be 0");
  testing.assertEqual(vendingMachine.value, 4, "Should be 4");
}

runTestForVendingMachine();
