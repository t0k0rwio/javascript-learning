// JS Output - Different ways to show data

console.log("Normal message");
console.warn("This is a warning!");
console.error("This is an error!");

console.log("String:", "hello");
console.log("Number:", 42);
console.log("Boolean:", true);
console.log("Array:", [1, 2, 3]);

let students = [
  { name: "Ram", grade: "A" },
  { name: "Priya", grade: "B" }
];
console.table(students);