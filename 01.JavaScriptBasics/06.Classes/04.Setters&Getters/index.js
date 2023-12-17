class Person {
  constructor(name, age) {
    this.name = name;
    
    // Old way
    // this.age = age;
    // Object.defineProperty(this, "age", {
    // })

    this._age = age;
  }

  get age() {
    return this._age;
  }

  // set age(v){
  //   if(v < 1) throw new Error("Invalid age!");
  //   this._age = v;
  // }
}

const person = new Person("Ibrahim", 26);

person.age = 20;
console.log(person.age);