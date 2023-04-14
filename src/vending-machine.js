const math = require("../lib/math-utils.js");
const maxSort = require("../lib/sort-utils/max-sort.js");

const add = math.add;
const sort = maxSort.sort;

const countCoinsByDenomination = function(amount, denomination) {
  let amountLeft = amount;
  const noOfCoins = {};

  for (let i = denomination.length - 1; i >= 0; i--) {
    noOfCoins[denomination[i]] = Math.floor(amountLeft / denomination[i]);
    amountLeft = amountLeft % denomination[i];
  }

  return noOfCoins;
}

const countCoins = function(amount, denomination) {
  return add(countCoinsByDenomination(amount, sort(denomination)));
}

exports.countCoins = countCoins;
exports.countCoinsByDenomination = countCoinsByDenomination;
