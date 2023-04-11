const determineOptimumNoOfCoins = function(amount) {
  let amountLeft = amount;

  const tenRupeeCoins = Math.floor(amountLeft / 10);
  amountLeft = amountLeft % 10;

  const fiveRupeeCoins = Math.floor(amountLeft / 5);
  amountLeft = amountLeft % 5;

  const twoRupeeCoins = Math.floor(amountLeft / 2);
  amountLeft = amountLeft % 2;

  return tenRupeeCoins + fiveRupeeCoins + twoRupeeCoins + amountLeft;
}

const dispenseCoins = function(amount) {
  return determineOptimumNoOfCoins(amount);
}

exports.dispenseCoins = dispenseCoins;
