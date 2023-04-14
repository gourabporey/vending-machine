const add = function (numbers) {
  let sum = 0;
  for (keys in numbers) {
    sum += numbers[keys];
  }
  return sum;
}

const maxOf = function(numbers) {
  if (numbers.length === 1) return numbers[0];
  return Math.max(numbers[0], maxOf(numbers.slice(1)));
}

exports.add = add;
exports.maxOf = maxOf;
