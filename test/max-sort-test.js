const testing = require('../lib/testing.js');
const maxSort = require('../lib/sort-utils/max-sort.js');

const assertArrayEqual = testing.assertArrayEqual;
const sort = maxSort.sort;

const runTestsForMaxSort = function() {
  testing.printHeadline("Testing for MaxSort");
  assertArrayEqual(sort([1]), [1], "Should give [1] for input [1]");
  assertArrayEqual(sort([1, 2]), [1, 2], "Should give [1, 2] for input [1, 2]");
  assertArrayEqual(sort([1, 3, 2]), [1, 2, 3], "Should give [1, 2, 3] for input [1, 3, 2]");
}

runTestsForMaxSort();
testing.displayTestSummary();
