function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.hello = function() {
    console.log("Hello world");
  };
};

console.log(Person.name)
console.log(Person.length)
console.log(Person.constructor)

const Person1 = new Function("name", 'age', "gender", `
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function() {
      console.log("Hello world");
    };
`)

const person1 = new Person1("Mohammad", 11, "male");

console.log(person1.name)

// so Functions are objects!

// same with creating objects using new
Person.call({}, "Mohammad", 11, 'male'); // {} same with new, 2 of them creats a {} empty object

Person.apply({}, ["Mohammad", 11, 'male']); // same with call but using array with args

