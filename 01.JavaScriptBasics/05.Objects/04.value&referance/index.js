// Primitive Types (String - Number - Boolean - undefined - null)
// Reference Types (Object - Function - Array)

let x = 10;
let y = x;
x = 20;

console.log(x);
console.log(y);

let a = {name: "Ahmad"};
let b = a;
a.name = "Samar";
console.log(a); 
console.log(b); 

// Why both items was changed??? 
// When we create an object this object will be saved in memory. But the variable just refers to the place with the object was saved. So the second variable refers too. And if we change any arguments of the object, the changing will be show in both of variables. So in this case we have a to variables that are refering to the same object. 
// So primitive types when we create an variable, the variable will be the box that be save this primitive type into. But Refrance types when we create a variable, the variable will refer to the type, not saves it into. 

function increase(number) {
  number++;
};

let number = 1;
increase(number);
console.log(number); // shows 1
// Because the increase func made changes and created a new value with the number 2, that is why the variable by the name number was not changed, the changes was made, but did't saved anywhere

function increase_obj(obj) {
  obj.value++;
};
let obj_number = { value: 1 };
increase_obj(obj_number);
console.log(obj_number); // shows value: 2.
// 