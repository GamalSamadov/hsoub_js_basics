// try.. catch

// try {
//   hello;
//   alert("try");
// } catch (error) {
//   console.log(error);
//   alert("catch");
// }

function area(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is now a number");
  }

  return width * height;
}


console.log(area(2, 2));
console.log(area(2, "Hello"));