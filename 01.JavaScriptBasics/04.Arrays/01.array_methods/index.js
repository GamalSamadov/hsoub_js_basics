let fruits = ["Apple", "Orange", "Banana"];

console.log(fruits);

// Add to start
fruits.unshift("Pear");


// Add to end.
// fruits[4] = "Srtawberries"; // if we know length of array
// fruits[fruits.length] = 'Greep'; // using length

// Adding items to the end of array
fruits.push("Srtawberries", "Greep");

// Add to the middle
fruits.splice(3, 0, "Palm", "Pineapple"); // 0 means delete 0 item



// Remove from start
const first = fruits.shift();
console.log(first);

const last = fruits.pop();
console.log(last);


fruits.splice(2, 1); // 1 means remove 1 item from index number 2

console.log(fruits);
