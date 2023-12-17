function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.hello = function() {
    // if (this.canTalk()) // public
    if (canTalk()) // private
      console.log("Hello world");
  };
  // this.canTalk = function() {
  //   return age > 3;
  // }; // Public
  
  let canTalk = function() {
    return age > 3;
  }; // Private

};


const person = new Person("Ibrahim", 26, "Male");

person.hello();
// console.log(person.canTalk()); // if private gives error