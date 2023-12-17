/* 
1) Functions are a values, so we can put it into a variables, we can copy it whenever in our code

2) There are Declaration and Expression functions

3) Declaration Functions will be hosted in the top while interpreting javascript code. So we can use it whenever, before or after creation the function, 

4) Expression Functions are not hosted to the top, so we can not use it before creating the function

*/

// Declaration.
function start() {
  console.log("Start");
}

start();


// Expression
let stop_1 = function stop_1() {
  // Named function expression
  console.log("Stop");
}

let stop = function() {
  // Anonymous function expression
  console.log("Stop");
}

stop();