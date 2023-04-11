const determineOptimumNoOfCoins = function(amount) {
  let amountLeft = amount;

  const fiveRupeeCoins = Math.floor(amountLeft / 5);
  amountLeft = amountLeft % 5;

  const twoRupeeCoins = Math.floor(amountLeft / 2);
  amountLeft = amountLeft % 2;

  return fiveRupeeCoins + twoRupeeCoins + amountLeft;
}

const dispenseCoins = function(amount) {
  return determineOptimumNoOfCoins(amount);
}

exports.dispenseCoins = dispenseCoins;
