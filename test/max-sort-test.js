const testing = require('../lib/testing.js');
const maxSort = require('../lib/sort-utils/max-sort.js');

const assertArrayEqual = testing.assertArrayEqual;
const sort = maxSort.sort;

const runTestsForMaxSort = function() {
  testing.printHeadline("Testing for MaxSort");
  assertArrayEqual(sort([]), [], "Should give empty array for array of no element");
  assertArrayEqual(sort([1]), [1], "Should give same array for array of one element");
  assertArrayEqual(sort([1, 2]), [1, 2], "Should give a sorted array for array of two elements");
  assertArrayEqual(sort([2, 2, 2]), [2, 2, 2], "Should give same array for array of same elements");
  assertArrayEqual(sort([1, 3, 2, 5, 4]), [1, 2, 3, 4, 5], "Should give a sorted array for array of multiple elements");
  assertArrayEqual(sort([1, 3, 2, 2, 4]), [1, 2, 2, 3, 4], "Should give a sorted array for array with repeated elements");
  assertArrayEqual(sort([1, -3, -2, 2, 4]), [-3, -2, 1, 2, 4], "Should give a sorted array for array with mix of +ve & -ve elements");
}

runTestsForMaxSort();
testing.displayTestSummary();
