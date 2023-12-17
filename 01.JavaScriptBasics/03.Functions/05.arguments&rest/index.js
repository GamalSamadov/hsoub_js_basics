function sum(num1, num2) {
  // console.log(arguments);
  let total = 0;
  for (let num of arguments) total += num;
  return total;
}

function sum(first, ...numbers) {
  // console.log(numbers);
  let total = first;
  for (let num of numbers) total += num;
  return total;
}

console.log(
  sum(4,5,6)
)

