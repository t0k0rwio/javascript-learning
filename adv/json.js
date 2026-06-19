// JS JSON
// JSON = JavaScript Object Notation
// Used to send and receive data from APIs

// Object to JSON string
const user = {
  name: "Ram",
  age: 25,
  city: "Chennai",
  skills: ["JavaScript", "HTML", "CSS"],
  isStudent: false
};

const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);
console.log("Type:", typeof jsonString);  // string

// Pretty print
const pretty = JSON.stringify(user, null, 2);
console.log("\nPretty JSON:");
console.log(pretty);

// JSON string to Object
const jsonData = '{"name":"Priya","age":22,"city":"Mumbai"}';
const obj = JSON.parse(jsonData);
console.log("\nParsed Object:", obj);
console.log("Name:", obj.name);
console.log("Type:", typeof obj);  // object

// Real world example - saving and loading data
console.log("\n--- Real World Example ---");

const students = [
  { id: 1, name: "Ram", grade: "A" },
  { id: 2, name: "Priya", grade: "B" },
  { id: 3, name: "Kavi", grade: "A" }
];

// Convert to JSON (like sending to server)
const saved = JSON.stringify(students);
console.log("Saved:", saved);

// Convert back (like receiving from server)
const loaded = JSON.parse(saved);
loaded.forEach(s => {
  console.log(`${s.id}. ${s.name} - Grade: ${s.grade}`);
});