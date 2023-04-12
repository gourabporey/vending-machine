const maxOf = function(numbers) {
  if (numbers.length === 1) return numbers[0];
  return Math.max(numbers[0], maxOf(numbers.slice(1)));
}

const ejectAt = function(element, array) {
  const index = array.indexOf(element);
  return array.slice(0,index).concat(array.slice(index + 1, array.length));
}

const sort = function(numbers) {
  let modifiableArray = numbers.slice(0);
  const sortedArray = [];

  for (let i = 0; i < numbers.length; i++) {
    const maxOfCurrentArray = maxOf(modifiableArray);
    modifiableArray = ejectAt(maxOfCurrentArray, modifiableArray);
    sortedArray.unshift(maxOfCurrentArray);
  }

  return sortedArray;
}

exports.sort = sort;
