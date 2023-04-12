const testing = require('../lib/testing.js');
const maxSort = require('../src/max-sort.js');

const assertArrayEqual = testing.assertArrayEqual;

const runTestForMaxSort = function() {
  testing.printHeadline("Testing for MaxSort");
  assertArrayEqual(maxSort.sort([1]), [1], "Shoulde give [1] for input [1]");
  assertArrayEqual(maxSort.sort([1, 2]), [1, 2], "Shoulde give [1, 2] for input [1, 2]");
  assertArrayEqual(maxSort.sort([1, 3, 2]), [1, 2, 3], "Shoulde give [1, 2, 3] for input [1, 3, 2]");
}

runTestForMaxSort();
testing.displayTestSummary();
