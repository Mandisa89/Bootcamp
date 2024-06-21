// 28 January 2023
// Mandisa Macleod

// L1T11 - Using Built-In Functions and Defining your own Functions

// Compulsory Task 3

// --- DECLARE ALL FUNCTIONS AT THE TOP --- //

// Function: Addition //

function add(a, b) {

    return a + b;
}


// Function: Subtraction //

function subtract(a, b) {

    return a - b;
    
}

// Function: Multiply //

function multiply(a, b) {

    return a * b;
}


// Function: Divide //

function divide(a, b) {

    return a / b;
    
}





// PROGRAMME //

// Prompt for the input of number 1, number 2, and what operation to perform
let num1;
let num2;
let operator;


// request valid input for num1

do {

    num1 = Number(prompt(`Give me your first number: `));

    if (isNaN(num1)) {

        alert(`That is not a number. Please try again.`);
    }
    else {
        break;
    }

} while (isNaN(num1));



// request valid input for num2

do {
    num2 =  Number(prompt(`Give me your second number: `));

    if (isNaN(num2)) {

        alert(`That is not a number. Please try again.`);
    }
    else {
        break;
    }

} while (isNaN(num2));



// request valid input from provided range of operators

do {

    operator =  prompt(`What operation would you like to perform on these two numbers?\nChoose:\n+      (add)\n-       (subtract)\n*       (multiply)\n/       (divide)`);
    
    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
        break;

    }
    else {
        alert(`That is not a valid option. Please try again.`);
    }

} while (operator != "+" || operator != "-" || operator != "*" || operator != "/")



// depending on which operator value was provided, output correct calculation and result

switch(operator) {

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







// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T11 - Beginner Data Structures — Arrays and Maps. (L1T11 reading material). 
// Retrieved 25 January 2023 via shared Dropbox. 

