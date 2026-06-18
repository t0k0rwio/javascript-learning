// JS RegExp
// RegExp = pattern to search/match text

// Basic test
let pattern = /hello/i;  // i = ignore case
console.log(pattern.test("Hello World"));  // true
console.log(pattern.test("Hi World"));     // false

// Match
let text = "My phone is 9876543210 and 8765432109";
let phones = text.match(/\d{10}/g);  // g = find all
console.log("Phones found:", phones);

// Email validation
let email = "ram@gmail.com";
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("Valid email:", emailPattern.test(email));       // true
console.log("Invalid email:", emailPattern.test("notvalid")); // false

// Replace with regex
let messy = "Hello   World   JS";
let clean = messy.replace(/\s+/g, " ");
console.log("Cleaned:", clean);

// Extract numbers
let price = "The price is 500 rupees and 300 paise";
let numbers = price.match(/\d+/g);
console.log("Numbers:", numbers);

// Split with regex
let sentence = "one1two2three3four";
let words = sentence.split(/\d/);
console.log("Split:", words);