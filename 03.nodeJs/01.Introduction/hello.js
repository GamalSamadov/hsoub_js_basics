console.log("Hello world");

// alert() does not work in NodeJs

// Global scope
// Local scope

/* 
Js has global scopes (objects). In browser we can use window like a global scope. 
For example alert() is a global object. we can use it like this: window.alert(); This thing does same thing.

But NodeJs has't global object that calls window. It has object calls global which is same with "window".

So we can type: global.console.log() or create variable: var name = "Jamal"; and use it like this: global.name;
*/

global.console.log("Hello world from global"); // prints this string

var name = "Jamol";
console.log(global.name); // prints undefined
/* 
So why it prints undefined?

Because in nodeJs the global command gets objects from all files from projects. To get access for variables globally we could do: global.name = name; So then we can use it globally.

But in normal JS variables gets access in the window command by default. This is the defiance between window and global.
*/

global.name = name;
console.log(global.name);