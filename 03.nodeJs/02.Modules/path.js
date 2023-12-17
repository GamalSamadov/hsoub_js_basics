const path = require("path");

const notes = "/users/joe/notes.txt";

// dirname ==> gives name of the director of file or dir
console.log(path.dirname(notes));

// basename ==> gives name of the name of file or dir
console.log(path.basename(notes));

// extname ==> gives extension of the given file
console.log(path.extname(notes))

// join() ==> joining path names
const name = "joe";
console.log(
  path.join("users", name, "notes.txt")
);

// parse() ==> infos by this path
console.log(path.parse(notes));

// isAbsolute() 
console.log(path.isAbsolute(notes));