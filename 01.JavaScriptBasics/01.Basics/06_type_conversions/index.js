// alert(1); ==> converts to string while showing

// To String
let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value)

// To Number
console.log("10" / "2"); 
// converts to Number automatically that's why shows 5 line number in console

let str = '123';
console.log(typeof str);

let num = Number(str);
console.log(typeof num)

str = 'Jamol';
console.log(typeof str);

num = Number(str);
console.log(num); // NaN ==> not a number
console.log(typeof num) // NaN ==> not a number

// to Boolean
console.log(Boolean(1)); // true
console.log(Boolean(10)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
