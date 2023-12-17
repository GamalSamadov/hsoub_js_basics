function greetings(name) {
  console.log("Hello " + name);
}

greetings("Jamal");

// function sum(num1, num2) {
//   if (!num1) num1 = 0;
//   if (!num2) num2 = 0;
//   console.log(num1 + num2);
// }


function sum(num1, num2 = 0) {
  return num1 + num2;
}

let resault = sum(4, 5);
console.log(resault);