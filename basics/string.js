// JS Strings

let str = "Hello JavaScript";

// Basic
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// Accessing characters
console.log("First char:", str[0]);
console.log("Last char:", str[str.length - 1]);

// Searching
console.log("indexOf:", str.indexOf("Java"));
console.log("includes:", str.includes("Hello"));
console.log("startsWith:", str.startsWith("Hello"));
console.log("endsWith:", str.endsWith("!"));

// Extracting
console.log("slice(6, 16):", str.slice(6, 16));

// Replacing
console.log("replace:", str.replace("JavaScript", "World"));

// Splitting
let csv = "Ram,Priya,Kavi,Arjun";
let names = csv.split(",");
console.log("split:", names);
console.log("join:", names.join(" - "));

// Trim
let padded = "   rhello   ";
console.log("trim:", padded.trim());

// Template literals
let name = "Ram";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old`);