const maxSort = require("./max-sort.js");
const sort = maxSort.sort;

const addElements = function (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + addElements(numbers.slice(1));
}

const determineOptimumNoOfCoins = function(amount, denomination) {
  let amountLeft = amount;
  const noOfCoins = [];

  for (let i = denomination.length - 1; i >= 0; i--) {
    noOfCoins.push(Math.floor(amountLeft / denomination[i]));
    amountLeft = amountLeft % denomination[i];
  }

  return addElements(noOfCoins);
}

const dispenseCoins = function(amount, denomination) {
  return determineOptimumNoOfCoins(amount, sort(denomination));
}

exports.dispenseCoins = dispenseCoins;
