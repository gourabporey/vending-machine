const determineOptimumNoOfCoins = function(amount) {
  const twoRupeeCoins = Math.floor(amount / 2);
  const amountLeft = amount % 2;
  return twoRupeeCoins + amountLeft;
}

const dispenseCoins = function(amount) {
  return determineOptimumNoOfCoins(amount);
}

exports.dispenseCoins = dispenseCoins;
