const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const runTestForVendingMachine = function() {
  testing.assert(vendingMachine.value, 0, "Should be 0");
}

runTestForVendingMachine();
