class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(
      `Hello, my name is: ${this.name}, and I am ${this.age} years old`
    )
  }
}

class Student extends Person {

  constructor(name, age, level) {
    super(name, age);
    this.level = level;
  }

  hello() {
    console.log(
      `Hello, I am a student!`
    )
  }

}

const person = new Person("Jamal", 24);
const student = new Student("Kamal", 40, 6);

console.log(typeof person); // object
console.log(typeof student); // object

console.log(student instanceof Student); // true

console.log(student instanceof Person); // true

console.log(student instanceof Object); // true

let arr = [];
console.log(arr instanceof Array); // true

arr = "";
console.log(arr instanceof Array); // false
