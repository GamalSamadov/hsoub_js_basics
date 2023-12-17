"use strict";

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

  log() {
    console.log(this);
  }
}

const person = new Person("Ibrahim", 26, "Male");

// This two thing are same
console.log(person.log());
console.log(person);

const log = person.log;
log(); // undefined

function PersonOld(name) {
  this.name = name;

  this.hello = function() {
    console.log("Hello world!");
  };

  this.log = function() {
    console.log(this);
  };
}

const personOld = new PersonOld("Ibrahim");
console.log(personOld.log());

let logOld = personOld.log;
logOld(); // Gives Window if the strict mode was't activated

// JS has strict mode, when this mode will be activated this errors will not be shown