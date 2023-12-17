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

const p = new Person("Jamal", 24);
const s = new Student("Kamal", 40, 6);

p.hello();
s.hello();
