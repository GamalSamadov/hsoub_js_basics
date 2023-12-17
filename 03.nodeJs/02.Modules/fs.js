// File System Module

const fs = require('fs');


// reading file

// console.log("before");

// fs.readFile('hello.txt', 'utf8', (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// console.log('after'); // nodeJs is non blocked and works asynchonally not line by line. That's why this code will be run before the readFile callback function!

console.log("Before")
const content = fs.readFileSync('hello.txt', 'utf8');
console.log(content);
console.log("After"); // will be run after readFileSync

// // writing to the file
// fs.writeFile('hello.txt', "NodeJS", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   // File written successfully
// })


/*
writeFile(pathOfFile, "String wo write it", {flag: "letter"}, callback function)

flag: "a" ==> it's for whiting without deleting all content of the file
*/