// JS Arrays

let fruits = ["Apple", "Banana", "Mango"];

// Basic
console.log("Array:", fruits);
console.log("Length:", fruits.length);
console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);

// Adding & Removing
fruits.push("Grapes");       // add to end
fruits.unshift("Strawberry"); // add to start
console.log("After add:", fruits);

fruits.pop();                 // remove from end
fruits.shift();               // remove from start
console.log("After remove:", fruits);

// Finding
console.log("indexOf:", fruits.indexOf("Mango"));
console.log("includes:", fruits.includes("Banana"));

// Transforming
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);
console.log("map:", doubled);

let evens = numbers.filter(n => n % 2 === 0);
console.log("filter:", evens);

let total = numbers.reduce((sum, n) => sum + n, 0);
console.log("reduce:", total);

// Sorting
let scores = [5, 3, 8, 1, 9];
scores.sort((a, b) => a - b);
console.log("sorted:", scores);

// Spread
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("spread:", combined);