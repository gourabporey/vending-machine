const maxSort = require("./max-sort.js");
const sort = maxSort.sort;

const addElements = function (numbers) {
  let sum = 0;
  for (keys in numbers) {
    sum += numbers[keys];
  }
  return sum;
}

const determineOptimumNoOfCoins = function(amount, denomination) {
  let amountLeft = amount;
  const noOfCoins = {};

  for (let i = denomination.length - 1; i >= 0; i--) {
    noOfCoins[denomination[i]] = Math.floor(amountLeft / denomination[i]);
    amountLeft = amountLeft % denomination[i];
  }

  return noOfCoins;
}

const dispenseCoins = function(amount, denomination) {
  return addElements(determineOptimumNoOfCoins(amount, sort(denomination)));
}

const dispenseCoinsByDenomination = function(amount, denomination) {
  return determineOptimumNoOfCoins(amount, sort(denomination));
}

exports.dispenseCoins = dispenseCoins;
exports.dispenseCoinsByDenomination = dispenseCoinsByDenomination;
