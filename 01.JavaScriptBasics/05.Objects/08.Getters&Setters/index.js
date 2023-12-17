function Person(name, age, gender) {
  let id = Math.floor(Math.random() * 10);
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.hello = function() {
      console.log("Hello world");
  };

  // this.getId = function() {
  //   return id;
  // }; // Neeeh way :)

  Object.defineProperty(this, 'id', {
    get: function() { return id },
    set: function(value) { 
      if (!value) throw new Error("Invalid ID");
      id = value
    },
  });

};


const person = new Person("Ibrahim", 26, "Male");

console.log(person);
console.log(person.id);