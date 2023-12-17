// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 3)



// We use while when we don't know count of repeat
// We use doWhile when we don't know count of repeat and we want to repeat 1 time minimum

do {
  console.log("Hello");
  // This code will be show on the console, whatever if whe condition of while true or false
} while (1 + 1 === 3) // false, but the Hello string will be show

while (1 + 1 === 3) {
  console.log("Hello");
  // This code will not be show
}

let i = 1;
do {
  if (i % 2) console.log(i);
  i++;
} while (i <= 10)
