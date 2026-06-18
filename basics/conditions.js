// JS If Conditions

// Basic if
let age = 20;
if (age >= 18) {
  console.log("You are an adult");
}

// if else
let marks = 45;
if (marks >= 50) {
  console.log("Passed!");
} else {
  console.log("Failed!");
}

// if else if else
let score = 72;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// switch
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week!");
    break;
  case "Friday":
    console.log("Weekend coming!");
    break;
  default:
    console.log("Normal day");
}

// Ternary shorthand
let isLoggedIn = true;
let msg = isLoggedIn ? "Welcome back!" : "Please login";
console.log(msg);