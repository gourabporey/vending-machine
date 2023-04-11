const addElements = function (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + addElements(numbers.slice(1));
}

const determineOptimumNoOfCoins = function(amount) {
  let amountLeft = amount;
  const denomination = [10, 5, 2, 1];
  const noOfCoins = [];

  for (let i = 0; i < denomination.length; i++) {
    noOfCoins.push(Math.floor(amountLeft / denomination[i]));
    amountLeft = amountLeft % denomination[i];
  }

  return addElements(noOfCoins);
}

const dispenseCoins = function(amount) {
  return determineOptimumNoOfCoins(amount);
}

exports.dispenseCoins = dispenseCoins;
