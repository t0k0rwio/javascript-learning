// JS Operators

// Arithmetic
let a = 10, b = 3;
console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);

// Assignment
let x = 5;
x += 3;  console.log("x += 3 :", x);
x -= 2;  console.log("x -= 2 :", x);
x *= 2;  console.log("x *= 2 :", x);

// Comparison
console.log("5 == '5' :", 5 == "5");    // true  (ignores type)
console.log("5 === '5' :", 5 === "5");  // false (checks type)
console.log("10 > 3 :", 10 > 3);
console.log("10 < 3 :", 10 < 3);

// Logical
console.log("true && false :", true && false);
console.log("true || false :", true || false);
console.log("!true :", !true);

// Ternary (shorthand if-else)
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log("Ternary:", result);