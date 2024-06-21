// 16 May 2023
// Mandisa Macleod

// L1T29 - Closures and Arrow Functions
// Rewrite L1T11 Compulsory Task 3 as arrow functions

// ----------------- //
//     Addition      //
// ----------------- //

// Traditional Function: Addition //

// function add(a, b) {
//   return a + b;
// }

// Arrow Function: Addition //

const add = (a, b) => a + b;

// ----------------- //
//    Subtraction    //
// ----------------- //

// Traditional Function: Subtraction //

// function subtract(a, b) {
//   return a - b;
// }

// Arrow Function:Subtraction //

const subtract = (a, b) => a - b;

// ----------------- //
//      Multiply     //
// ----------------- //

// Traditional Function: Multiply //

// function multiply(a, b) {
//   return a * b;
// }

// Arrow Function: Multiply //

const multiply = (a, b) => a * b;

// ----------------- //
//       Divide      //
// ----------------- //

// Traditional Function: Divide //

// function divide(a, b) {
//   return a / b;
// }

// Arrow Function: Divide //

const divide = (a, b) => a / b;

// ------------------- //
//    THE PROGRAMME    //
// ------------------- //

// Prompt for the input of number 1, number 2, and what operation to perform
let num1;
let num2;
let operator;

// request valid input for num1

do {
  num1 = Number(prompt(`Give me your first number: `));

  if (isNaN(num1)) {
    alert(`That is not a number. Please try again.`);
  } else {
    break;
  }
} while (isNaN(num1));

// request valid input for num2

do {
  num2 = Number(prompt(`Give me your second number: `));

  if (isNaN(num2)) {
    alert(`That is not a number. Please try again.`);
  } else {
    break;
  }
} while (isNaN(num2));

// request valid input from provided range of operators

do {
  operator = prompt(
    `What operation would you like to perform on these two numbers?\nChoose:\n+      (add)\n-       (subtract)\n*       (multiply)\n/       (divide)`
  );

  if (
    operator == "+" ||
    operator == "-" ||
    operator == "*" ||
    operator == "/"
  ) {
    break;
  } else {
    alert(`That is not a valid option. Please try again.`);
  }
} while (
  operator != "+" ||
  operator != "-" ||
  operator != "*" ||
  operator != "/"
);

// depending on which operator value was provided, output correct calculation and result

switch (operator) {
  case "+":
    alert(`${num1} ${operator} ${num2} = ${add(num1, num2)}`);
    break;

  case "-":
    alert(`${num1} ${operator} ${num2} = ${subtract(num1, num2)}`);
    break;

  case "*":
    alert(`${num1} ${operator} ${num2} = ${multiply(num1, num2)}`);
    break;

  case "/":
    alert(`${num1} ${operator} ${num2} = ${divide(num1, num2)}`);
    break;

  default:
    alert(`Something has gone wrong. Please reload and try again.`);
}

// --------------------------- //
// ---------  L1T29  --------- //
// --------------------------- //

// REFERENCES //

// Base Source Material:

// Hyperiondev.(2021). WD L1T29 - Closures and Arrow Functions.pdf. Retrieved 16 May 2023 via shared Dropbox
// Hyperiondev.(2021). WD L1T11 - Beginner Data Structures — Arrays and Maps. Retrieved 25 January 2023 via shared Dropbox.
// MDN Web Docs.2023. Arrow Function Expressions. Retrieved on 21 May 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Web Dev Simplified. 2020. Javascript ES6 Arrow Functions Tutorial. Retrieved on 21 May 2023 at https://www.youtube.com/watch?v=h33Srr5J9nY&ab_channel=WebDevSimplified
