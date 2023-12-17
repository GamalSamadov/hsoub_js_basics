// Local storage
localStorage.setItem("name", "Jamal");
localStorage.setItem("pass", "Password");

let name = localStorage.getItem("name");
console.log(name);

// To remove item from local storage
localStorage.removeItem("pass");

// To clear the local storage
localStorage.clear();



// Session storage

sessionStorage.setItem("email", "mail@mail.com");
sessionStorage.setItem("name", "Xonjon");

name = sessionStorage.getItem("name");
console.log(name);
let email = sessionStorage.getItem("email");
console.log(email);

sessionStorage.removeItem("name");

sessionStorage.clear();