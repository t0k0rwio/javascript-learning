// JS Data Types

// 7 primitive types
console.log("=== Types ===");
console.log(typeof "hello");        // string
console.log(typeof 42);             // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object (JS bug!)
console.log(typeof Symbol("id"));   // symbol
console.log(typeof 42n);            // bigint

// String
let name = "Ram";
let name2 = 'Priya';
let name3 = `Hello ${name}`;
console.log("\n=== String ===");
console.log(name, name2, name3);

// Number
console.log("\n=== Number ===");
console.log(42, 3.14, -10, Infinity, NaN);

// Boolean
console.log("\n=== Boolean ===");
console.log(true, false);

// Falsy values
console.log("\n=== Falsy values ===");
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Truthy values
console.log("\n=== Truthy values ===");
console.log(Boolean(1));          // true
console.log(Boolean("hello"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true

// Type conversion
console.log("\n=== Conversion ===");
console.log(Number("42"));        // 42
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(String(42));          // "42"
console.log(Boolean(0));          // false