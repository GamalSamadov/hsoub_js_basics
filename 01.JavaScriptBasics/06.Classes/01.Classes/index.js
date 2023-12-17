// Ecma Script 5 and older version to create objects
function PersonOld(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.hello = function() {
    console.log("Hello world");
  }
};

console.log(typeof PersonOld) // function

// ES6 new way
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  hello(){
    console.log("Hello world");
  }
}

const person = new Person("Ibrahim", 26, "Male");
console.log(person);
console.log(person.name);
person.hello();

console.log(typeof Person); // ==> function, same with old way
