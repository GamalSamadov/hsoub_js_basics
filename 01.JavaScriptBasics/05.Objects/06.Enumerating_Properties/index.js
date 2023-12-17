function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.hello = function() {
    console.log("Hello world");
  };
};


const person = new Person("Ibrahim", 26, "Male");

for (let key in person) {
  if (typeof person[key] === 'function') continue
  console.log(key, person[key]);
}

const keys = Object.keys(person);
console.log(keys);

if ('name' in person) 
  console.log("The name is", person.name)