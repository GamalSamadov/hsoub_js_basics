let total = 0;

while (true) {
  let value = +prompt("Enter a number: ");
  if (value == 0) break;
  if (isNaN(value)) continue;
  total += value;
}

alert(`Your total is: ${total}`);