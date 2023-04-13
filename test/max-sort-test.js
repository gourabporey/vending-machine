const testing = require('../lib/testing.js');
const maxSort = require('../lib/sort-utils/max-sort.js');

const assertArrayEqual = testing.assertArrayEqual;
const sort = maxSort.sort;

const runTestsForMaxSort = function() {
  testing.printHeadline("Testing for MaxSort");

  let message = "Should give empty array for array of no element";
  let actual = sort([]);
  let expected = [];
  assertArrayEqual(actual, expected, message);

  message = "Should give same array for array of one element";
  actual = sort([1]);
  expected = [1];
  assertArrayEqual(actual, expected, message);

  message = "Should give a sorted array for array of two elements";
  actual = sort([1, 2]);
  expected = [1, 2];
  assertArrayEqual(actual, expected, message);

  message = "Should give same array for array of same elements";
  actual = sort([2, 2, 2]);
  expected = [2, 2, 2];
  assertArrayEqual(actual, expected, message);

  message = "Should give a sorted array for array of multiple elements";
  actual = sort([1, 3, 2, 5, 4]);
  expected = [1, 2, 3, 4, 5];
  assertArrayEqual(actual, expected, message);

  message = "Should give a sorted array for array with repeated elements";
  actual = sort([1, 3, 2, 2, 4]);
  expected = [1, 2, 2, 3, 4];
  assertArrayEqual(actual, expected, message);

  message = "Should give a sorted array for array with mix of +ve & -ve elements";
  actual = sort([1, -3, -2, 2, 4]);
  expected = [-3, -2, 1, 2, 4];
  assertArrayEqual(actual, expected, message);
}

runTestsForMaxSort();
testing.displayTestSummary();
