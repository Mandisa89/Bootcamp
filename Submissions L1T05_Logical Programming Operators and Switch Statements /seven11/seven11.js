// 15 January 2023
// Mandisa Macleod

// L1T05: Logical Programming - Operators and Switch Statements

// Compulsory Task 1

/*
Create a program to determine if a number input by the user is divisible by
7 and 11, either 7 or 11, or neither.
 
● Output the answer, depending on the result, with one of the following statements:
○ “[input]is divisible by both 7 and 11.”
○ “[input]is divisible by 11.”
○ “[input]is divisible by 7.”
○ “[input]is divisible by neither 7 nor 11.” 


Notes:
MODULUS!
*/

let input = prompt("Give me a number.");

// See if input remainder is equal to 0 in type and value. Perhaps user entered a string that is NaN.
numberInput = Number(input);
console.log(typeof numberInput);

if (!Number.isInteger(numberInput)) { // if numberInput is NOT a number
    alert(`${input} is not a number. Please reload page.`);
}
else if (numberInput%7 === 0 && numberInput%11 === 0) { // if numberInput is divisible by both 
    alert(`${numberInput} is divisible by both 7 and 11.`);
}
else if (numberInput%7 === 0) { // if divisible by 7
    alert(`${numberInput} is divisible by 7.`);
}
else if (numberInput%11 === 0) { // if divisible by 11
    alert(`${numberInput} is divisible by 11.`);
}
else {
    alert(`${numberInput} is divisible by neither 7 nor 11.`); // if divisible by neither
}



/* Switch statement attempt ???

// DID NOT WORK, went straight to default. Passed the wrong value to case, should have used "case true" and "case false" since I set the variables up as type boolean...
// Will think about it some more, should probably change type of variables to string or number and set up cases to check for those

let input1 = prompt("Give me a number.");

input1 = Number(input1); // convert string to number if possible
console.log(typeof input1); // number

let num1 = 7;
let num2 = 11;

let isNotANumber = !Number.isInteger(input1);  // if NaN is true and execute
console.log(`${input1} is not a Number.`); 

let divisibleByNum1 = input1%num1 === 0; // boolean
console.log(`divisibleByNum1 is` + divisibleByNum1);
let divisibleByNum2 = input1%num2 === 0; // true
console.log(divisibleByNum2);
let divisibleByNum1Num2 = divisibleByNum1 && divisibleByNum2; // true && true
console.log(divisibleByNum1Num2);

switch (input1) {
    case isNotANumber:
        alert(`${input1} is not a number. Please reload page.`);
        break;
    case divisibleByNum1Num2:
        alert(`${input1} is divisible by both 7 and 11.`);
        break;
    
    case divisibleByNum1:
        alert(`${input1} is divisible by 7.`);
        break;

    case divisibleByNum2:
        alert(`${input1} is divisible by 11.`);
        break;

    default:
        alert(`${input1} is divisible by neither 7 nor 11.`); // if divisible by neither
}





*/

/* 
Base Source Material: 
Hyperiondev.(2021). L1T05: Logical Programming - Operators and Switch Statements. (L1T05 reading material). 
Retrieved 15 January 2023 via shared Dropbox. 

Additional:

MDN Web Docs.(2022). Switch. Retrieved 15 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch


*/