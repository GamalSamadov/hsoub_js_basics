// SetTimeout
// SetInterval

// setTimeout(funcIcode, [delay], [arg1], [arg2]...)

function hello() {
  console.log("Hello world!");
}

hello();

setTimeout(hello, 1000);
// setTimeout(hello(), 1000); ==> does not work!

function hello_2(name) {
  console.log(`Hello ${name}`);
}

setTimeout(hello_2, 1000, "Jamal");


// SetIntervel(funcIcode, [delay], [arg1], [arg2]...); ==> reapeat the func in the given time

// reapets the hello function every 3 seconds
// setInterval(hello, 3000);

// repeats the tick function and then waits 3 seconds
// setTimeout(function tick(){
//   console.log("Tick");
//   setTimeout(tick, 3000);
// })

