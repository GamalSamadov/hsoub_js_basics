// OS
// require() ==> gets the given module

const os = require('os');

console.log(os.arch());
// console.log(os.cpus());

console.log(os.freemem()); // prints free memory in bytes


// GetFreeMemory
const freeMemory = os.freemem() / Math.pow(10, 9)
console.log(freeMemory + "GB");

// Get Home Directory
console.log(os.homedir());

// Host name
console.log(os.hostname());

// Platform
console.log(os.platform());

