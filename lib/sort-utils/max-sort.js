const math = require("../math-utils.js");
const maxOf = math.maxOf;

const sort = function(numbers) {
  let modifiableArray = numbers.slice(0);
  const sortedArray = [];

  for (let i = 0; i < numbers.length; i++) {
    const maxOfCurrentArray = maxOf(modifiableArray);
    modifiableArray.splice(modifiableArray.indexOf(maxOfCurrentArray), 1);
    sortedArray.unshift(maxOfCurrentArray);
  }

  return sortedArray;
}

exports.sort = sort;
