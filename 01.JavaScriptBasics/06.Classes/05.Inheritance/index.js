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
  // Bad usage
  // constructor(name, age, level) {
  //   this.name = name;
  //   this.age = age;
  //   this.level = level;
  // }

  constructor(name, age, level) {
    super(name, age);
    this.level = level;
  }

  print() {
    console.log(`${this.name} ${this.age} ${this.level}`)
  }
}

const person = new Person("Jamal", 24);
person.hello();

const student = new Student("Kamal", 40, 6);
student.hello();
student.print();