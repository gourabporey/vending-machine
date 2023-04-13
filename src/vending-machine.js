const math = require("../lib/math-utils.js");
const maxSort = require("../lib/sort-utils/max-sort.js");

const add = math.add;
const sort = maxSort.sort;

const dispenseCoinsByDenomination = function(amount, denomination) {
  let amountLeft = amount;
  const noOfCoins = {};

  for (let i = denomination.length - 1; i >= 0; i--) {
    noOfCoins[denomination[i]] = Math.floor(amountLeft / denomination[i]);
    amountLeft = amountLeft % denomination[i];
  }

  return noOfCoins;
}

const dispenseCoins = function(amount, denomination) {
  return add(dispenseCoinsByDenomination(amount, sort(denomination)));
}

exports.dispenseCoins = dispenseCoins;
exports.dispenseCoinsByDenomination = dispenseCoinsByDenomination;
