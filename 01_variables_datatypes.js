// Datatype - primitves , Non- primitive(object)

// primitves datatypes

let number = 42; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let nothing = null; // Object (Null)
let undefinedVar = undefined; // undefined
let symbolVar = Symbol(); // symbol

// Object (Non- primitves)
let person = {
  name: "hitesh",
  age: 19,
  isStudent: true,
};

let num = "42";
// convert string into number
//let convertedNumber = Number(num);
//let convertedNumber = +num;
let convertedNumber = parseInt(num);

let num1 = "42A";
let convertedNumber1 = Number(num1); // NaN

let str = 123;
// Convert number into string
let convertedString = String(str);

let a = 10;
let b = 3;

// Operations
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

let x = 5;
let y = 10;

console.log(x == y); // Equal to
console.log(x != y); // Not Equal to
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);


// Js - Math, DateTime
// nodejs - crypto, http

console.log(Math.max(5, 10));
console.log(Math.min(5, 10));
console.log(Math.random() * 10);

let firstName = "hitesh";
let lastName = "Choudhary";

//let fullName = `${firstName} ${lastName}`;  // template literal
//let fullName = firstName + lastName; // contactination

let message = "Hello World";

// console.log(message.toUpperCase());
// console.log(message.indexOf("World"));
// console.log(message.slice(0, 5));

