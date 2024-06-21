// 15 May 2023
// Mandisa Macleod

// L1T29 - Closures and Arrow Functions

/* This project is going to have you make use of closures to create a very
simple multiplication application.
*/
// ● Your project should have one main number that will be used to multiply all
//other numbers (for example, 10).
// ● Your program should then loop through 10 numbers and push them into
// the inner scope of your callback function.

// "Anything on the inside has access to the things on the inside of its scope - it's parent's scope, and it's parent's parent's scope." - Kyle (Web Dev Simplified)

// ---------------------------- //
//         FINAL SOLUTION       //
// ---------------------------- //

// the variables are defined globally as opposed to inside the function.
// the fact that the inner workings of the function has access to these variables outside of its own scope
// and modifies these variables with each iteration, makes this a closure.
let mainNumber = 10;
let b = 0; // initialize variable "b" to 0
let result = ""; // initialize variable "result" as a string

const mulitplyByMainNumber = (a) => {
  while (b <= mainNumber) {
    result += `${a} * ${b} = ${a * b}\n`; // update the string, adding a new line of string at each iteration to make it one big string of many lines
    b++; // increment value of variable "b" by one after every iteration
  }
  return result; // EXPLICITLY return string "result" since block body syntax is used
};

// console.log the output of the function call
console.log(mulitplyByMainNumber(12));

// Expected Output:
// 10 * 0 = 0
// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
// 10 * 4 = 40
// 10 * 5 = 50
// 10 * 6 = 60
// 10 * 7 = 70
// 10 * 8 = 80
// 10 * 9 = 90
// 10 * 10 = 100

// ---------------------------- //
// WORK THAT LED TO MY SOLUTION //
// ---------------------------- //

// Starting with a simple arrow function with two set arguments (a and b)

let multiply = (a) => (b) => `${a} * ${b} = ${a * b}`;

// console.log the output of the function call
console.log(multiply(2)(5));
// Output: "2 * 5 = 10"

// ----------------------------------------------------------------------- //

// Same code as above, but with syntax of anonymous function returning

let multiply2 = function (a) {
  return function (b) {
    return `${a} * ${b} = ${a * b}`;
  };
};

console.log(multiply2(6)(3));
// Output: "6 * 3 = 18"

// ----------------------------------------------------------------------- //

// ALMOST THE SOLUTION, WITH A TRAILING "UNDEFINED" AT END OF CONSOLE.LOG
// I could not figure out the reason, but chatGPT explained that the reason was that the function was not returning something explicitly.
// I had been under the impression that "return" is not necessary when using arrow functions, but then read up on MDN that that what is returned is implicit only for concise body syntax, and needs to be explicit for block body syntax as I used in the above code.
// It also recommended I concatenate the various strings into one, and then output that result once, instead of logging the result with each iteration of the while loop
// This advice, combined with looking at the "mapper function" in the example code provided in the notes of L1T29 solved the problem of the trailing "undefined"

let mainNumber2 = 10;

const mulitplyByMainNumber2 = (a) => {
  let b = 0; // initialize variable "b" to 0
  let result = ""; // initialize variable "result" as a string

  while (b <= mainNumber2) {
    result = `${a} * ${b} = ${a * b}`; // update the string
    console.log(result); // log the result string
    b++; // increment value of variable "b" by one after every iteration
  }
};

// console.log the output of the function call
console.log(mulitplyByMainNumber2(12));

// Output:
// 10 * 0 = 0
// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
// 10 * 4 = 40
// 10 * 5 = 50
// 10 * 6 = 60
// 10 * 7 = 70
// 10 * 8 = 80
// 10 * 9 = 90
// 10 * 10 = 100
// undefined

// RERERENCES //

// Hyperiondev.(2021). WD L1T29 - Closures and Arrow Functions.pdf. Retrieved 16 May 2023 via shared Dropbox
// MDN Web Docs.2023. Parameter (vs argument). Retrieved on 16 May 2023 at https://developer.mozilla.org/en-US/docs/Glossary/Parameter
// Web Dev Simplified.2020.[Youtube] Learn Closures in 7 minutes. Retrieved on 21 May 2023 at https://www.youtube.com/watch?v=3a0I8ICR1Vg&ab_channel=WebDevSimplified
// MDN Web Docs.2023. Arrow Function Expressions. Retrieved on 21 May 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
