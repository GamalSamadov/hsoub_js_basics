class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Instance Method
  hello(){
    console.log("Hello world");
  }

  static staticMethodExample() {
    console.log("Hello from static method");
  }
}

const person = new Person("Ibrahim", 26, "Male");
person.hello();

Person.staticMethodExample();


class MyMath {
  static sum(...args){
    let total = 0;
    for (let num of args) total += num;
    return total;
  }

  static multiply(...args) {
    let total = 1;
    for (let num of args) total *= num;
    return total;
  }
}

console.log(MyMath.sum(1, 2, 3, 5)); // 11
console.log(MyMath.multiply(1, 2, 3, 20)); // 120