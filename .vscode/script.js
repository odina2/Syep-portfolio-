
// Logical AND: Both conditions must be true
console.log((7 > 3) && (5 > 2));

// Logical OR: Only one condition must be true
console.log((10 > 3) || (10 > 12));

// Logical NOT
console.log(!(5 > 3));

// Function that introduces someone
function introduction(name, age) {
    console.log("Hello, my name is " + name + " and I am " + age + " years old.");
}

// Call the introduction function
introduction("Odin", 14);

// Determine the time of day and set greeting
const hour = new Date().getHours();
let greeting = "";

if (hour < 12) {
    greeting = "Good morning";
} else if (hour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

// Display greeting on the page if the element exists
const greetingElement = document.getElementById("greeting");
if (greetingElement) {
    greetingElement.innerText = greeting;
} else {
    console.log("Greeting:", greeting); // fallback for environments without a DOM
}