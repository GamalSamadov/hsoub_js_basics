function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.hello = function() {
    console.log("Hello world");
  };
};


const person = new Person("Ibrahim", 26, "Male");

// Dot Notation
console.log(person.name);

// Bracket Notation
const attribute = 'name';
console.log(person[attribute]);

person.age = 27;
person.address = "Italy, Rome";

console.log(person)

delete person.address;
console.log(person);