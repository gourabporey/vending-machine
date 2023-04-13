const add = function (numbers) {
  let sum = 0;
  for (keys in numbers) {
    sum += numbers[keys];
  }
  return sum;
}

exports.add = add;
