function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.hello = function() {
    console.log("Hello world");
  };
};


let person1 = new Person("Mohammad", 11, "Male"); // new ==> creates a empty object {}

let person2 = new Person("Ahmad", 12, "Male");


let persons = [
  new Person("Ahmad", 12, "Male"),
  new Person("Mohammad", 11, "Male"),
];

