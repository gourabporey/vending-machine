const testing = require('../lib/testing.js');
const maxSort = require('../lib/sort-utils/max-sort.js');

const assertArrayEqual = testing.assertArrayEqual;
const sort = maxSort.sort;

const runTestsForMaxSort = function() {
  const it = function(testName, testData) {
    assertArrayEqual(testData.actual, testData.expected, testName);
  }

  testing.printHeadline("Testing for MaxSort");

  it("Should give empty array for array of no element", {
    actual: sort([]),
    expected: [],
  });

  it("Should give same array for array of one element", {
    actual: sort([1]),
    expected: [1],
  });

  it("Should give a sorted array for array of two elements", {
    actual: sort([1, 2]),
    expected: [1, 2],
  });

  it("Should give same array for array of same elements", {
    actual: sort([2, 2, 2]),
    expected: [2, 2, 2],
  });

  it("Should give a sorted array for array of multiple elements", {
    actual: sort([1, 3, 2, 5, 4]),
    expected: [1, 2, 3, 4, 5],
  });

  it("Should give a sorted array for array with repeated elements", {
    actual: sort([1, 3, 2, 2, 4]),
    expected: [1, 2, 2, 3, 4],
  });

  it("Should give a sorted array for array with mix of +ve & -ve elements", {
    actual: sort([1, -3, -2, 2, 4]),
    expected: [-3, -2, 1, 2, 4],
  });
}

runTestsForMaxSort();
testing.displayTestSummary();
