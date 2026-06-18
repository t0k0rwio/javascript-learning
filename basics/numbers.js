// JS Numbers

let a = 10;
let b = 3.14;

console.log("Integer:", a);
console.log("Float:", b);

// Math operations
console.log("Round:", Math.round(4.6));
console.log("Floor:", Math.floor(4.9));
console.log("Ceil:", Math.ceil(4.1));
console.log("Abs:", Math.abs(-7));
console.log("Sqrt:", Math.sqrt(16));
console.log("Power:", Math.pow(2, 8));
console.log("Max:", Math.max(3, 7, 1, 9));
console.log("Min:", Math.min(3, 7, 1, 9));
console.log("PI:", Math.PI);

// Random number
let random = Math.floor(Math.random() * 10) + 1;
console.log("Random (1-10):", random);

// Number methods
let num = 3.14159;
console.log("toFixed(2):", num.toFixed(2));

// Type conversion
console.log("Number('42'):", Number("42"));
console.log("parseInt('42px'):", parseInt("42px"));
console.log("parseFloat('3.5kg'):", parseFloat("3.5kg"));

// Special values
console.log("isNaN('hello'):", isNaN("hello"));
console.log("isNaN(42):", isNaN(42));