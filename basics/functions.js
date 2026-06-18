// JS Functions

// Regular function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Ram"));
console.log(greet("Priya"));

// Arrow function
const add = (a, b) => a + b;
console.log("Add:", add(3, 4));

const square = x => x * x;
console.log("Square:", square(5));

// Default parameters
function welcome(name = "Guest") {
  return "Welcome, " + name;
}
console.log(welcome("Ram"));
console.log(welcome());        // uses default

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log("Sum:", sum(1, 2, 3));
console.log("Sum:", sum(10, 20, 30, 40));

// Returning object
function createUser(name, age, city) {
  return { name, age, city };
}
let user = createUser("Ram", 25, "Chennai");
console.log("User:", user);