function Person1(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
};

Person1.prototype.hello = function() {
  console.log("Hello There");
};

const person1 = new Person1("Ibrahim", 26, "Male");
const person2 = new Person1("Mohammad", 23, "Male");

// Prototype is the father of all object except Object, this Object is the grandfather of all Prototypes and objects

// Reference Types in prototype will be changed in all objects
// Primitive Types will not

let x = {};
console.log(x);

function Person2(){

};

Person2.prototype.name = "";
Person2.prototype.age = 0;
Person2.prototype.friends = [];
Person2.prototype.hello = function() {
  console.log("Hello There");
};

const person3 = new Person2();
const person4 = new Person2();

person3.name = 'Ibrahim';
console.log(person3.name, "name3"); // Ibrahim
console.log(person4.name, "name3"); // Empty, Because name is Primitive Type

person3.friends.push("Mohammad");
console.log(person3.friends, "Friends2"); // ['Mohammad']
console.log(person4.friends, "Friends2"); // ['Mohammad'] PROBLEM

// Solving this problem
function Person3(name, age) {
  this.name = name;
  this.age = age;
  this.friends = [];
};

Person3.prototype.hello = function() {
  console.log("Hello There");
};

const person5 = new Person3("Ibrahim", 26);
const person6 = new Person3("Mohammad", 22);

person5.friends.push("Mohammad");
console.log(person5.friends, "Friends3");
console.log(person6.friends, "Friends3");