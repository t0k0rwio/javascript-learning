// JS Dates

const now = new Date();
console.log("Now:", now);

// Getting parts of date
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);  // 0 indexed!
console.log("Day:", now.getDate());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// Formatting
console.log("Date String:", now.toDateString());
console.log("Local Date:", now.toLocaleDateString("en-IN"));
console.log("Local Time:", now.toLocaleTimeString("en-IN"));

// Specific date
const birthday = new Date("2000-07-15");
console.log("Birthday:", birthday.toDateString());

// Date math
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log("Tomorrow:", tomorrow.toDateString());

// Difference between two dates
const start = new Date("2025-01-01");
const end = new Date("2025-12-31");
const diffMs = end - start;
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log("Days in 2025:", diffDays);