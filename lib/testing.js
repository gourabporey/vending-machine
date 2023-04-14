const style = require("./style.js");
const redFg = style.redFg;
const greenFg = style.greenFg;
const yellowFg = style.yellowFg;
const bold = style.bold;

const isExactlySame = function(actualValue, expectedValue) {
  return expectedValue === actualValue;
}

const isAlmostSame = function(actualValue, expectedValue, precision) {
  return (expectedValue >= actualValue - precision) && (expectedValue <= actualValue + precision);
}

const isSame = function(actualValue, expectedValue) {
  if (isExactlySame(actualValue, expectedValue)) {
    return true;
  }
  return isAlmostSame(actualValue, expectedValue, 0.01);
}

const printHeadline = function(headline) {
  console.log(bold(yellowFg(headline)));
}

const formatTestResultDetail = function(actual, expected) {
  const line1 = greenFg("\n\tExpected:  " + expected);
  const line2 =   redFg("\n\t  Actual:  " + actual);
  return line1 + line2;
}

const formatAssertionsMessage = function(result, actual, expected, message) {
  const icon = result ? "✅" : "❌";
  const summary = icon + " " + message;
  const details = formatTestResultDetail (actual, expected);

  return result ? summary : summary + details;
}

let totalAssertions = 0;
let passedAssertions = 0;
const testLog = [];

const getTotalAssertions = function() {
  return totalAssertions;
}

const getPassedAssertions = function() {
  return passedAssertions;
}

const updateAssertionCount = function(result) {
  totalAssertions += 1;
  passedAssertions += (result ? 1 : 0);
}

const addLog = function (testData) {
  testLog.push(testData);
}

const assertEqual = function(actual, expected, message) {
  const result = isSame(actual, expected);
  const currenttestdata = {
    testcase: message,
    result: result,
    actual: actual,
    expected: expected
  }
  addLog(currenttestdata);

  updateAssertionCount(result);
  console.log(formatAssertionsMessage(result, actual, expected, message));
  return result;
}

const assertArrayEqual = function(actual, expected, message) {
  let result = true;

  if (actual.length !== expected.length) {
    result = false;
  } else {
    for (index in actual) {
      if (actual[index] !== expected[index]) {
        result = false;
      }
    }
  }

  updateAssertionCount(result);
  console.log(formatAssertionsMessage(result, actual, expected, message));
  return result;
}

const assertObjectsEqual = function(actual, expected, message) {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  let result = true;

  if (actualKeys.length !== expectedKeys.length) {
    result = false;
  } else {
    for (key in expectedKeys) {
      if (actual[key] !== expected[key]) {
        result = false;
      }
    }
  }

  updateAssertionCount(result);
  console.log(formatAssertionsMessage(result, actual, expected, message));
  return result;
}

const displayTestSummary = function() {
  let  message = "\nSummary: ";
  message += getPassedAssertions() + " / " + getTotalAssertions();
  message += " passed";
  console.log(message);
}

exports.printHeadline = printHeadline;
exports.assertEqual = assertEqual;
exports.assertArrayEqual = assertArrayEqual;
exports.assertObjectsEqual = assertObjectsEqual;
exports.displayTestSummary = displayTestSummary;
