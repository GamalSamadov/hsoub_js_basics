// Splice

let arr = ["I", "study", "javascript", 'right', "now"];

// splice
// arr.splice(1, 2); // 2 means remove 2 item starting form 1

console.log(arr);

// arr.splice(2, 1, "ruby", "and", "js");
// console.log(arr);

// Slice
let part = arr.slice(1, 3); // ending does not count
console.log(part);

let copy = arr.slice(); // copy with a new refrance
console.log(copy);

// concat
let numbers = [1, 2];
console.log(numbers.concat([3, 4], [5, 6]));
