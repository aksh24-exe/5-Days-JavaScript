const obj = {
  personName: "Mukul",
  greet: function () {
    console.log(`Hello ${this.personName}`);
  },
};

// console.log("Hello from js");

// setTimeout(obj.greet, 5* 1000);

// console.log("Bye Bye");

// console.log("Hi");

// obj.greet();
// setTimeout(obj.greet.bind(obj), 5* 1000);

// console.log("Byee");

// Starvation = Jab bhaut sara chizz micro task queue ma hota hai hai and task queue  ma bhi per priority micro task queue karta hai then starvation hota hai

// Interview Question - Write your own eventloop, write your own promises

// HLD = High level Design
// LLD = Low level Design

// test();

// var test = function () {
//     console.log("I am Inside Test Function");
    
// }
// console.log("Age is", Age);
// var Age = 24;


// GEC = Global Execution Context   =>  This all process is Hoisting
// Global Execution Context push hota hai call stack ma
// ---------------------------------
// Memory Phase       Code phase
// age = undefine    console.log("Age is", Age);      Age is Undefine
// age =24           var age = 24;
//                   console.log("Age is", Age);      Age is 24

//------------------------------

console.log('Age is ', Age);

// DEAD ZONE
// let Age = 24

// let, const variable ka sath hosting nhi ho raha
// let and const both hosting hota hai per access nhi kar sakta kyu ki let and const Temporal Dead Zone ma rhata hai
// Temporal Dead Zone ka concept hota hai 

//ReferenceError: Age is not defined
// Cannot access 'Age' before initialization