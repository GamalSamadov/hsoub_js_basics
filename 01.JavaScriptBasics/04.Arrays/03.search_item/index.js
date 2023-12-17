let numbers = [52, 4, 73, 4, 89];

// includes ==> true if includes else false
console.log(numbers.includes(4));

console.log(numbers.indexOf(4)); // gives -1 if does not includes given index, shows first of given multi index

console.log(numbers.lastIndexOf(4)); // gives last index if the array includes more then 1 given items

// findIndex
let index = numbers.findIndex(item => item > 70);
console.log(index);

let resault = numbers.find(item => item > 70);
console.log(resault)

let filtered = numbers.filter(item => item > 70);
console.log(filtered);

