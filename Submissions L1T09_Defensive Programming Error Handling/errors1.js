// 23 January 2023
// Mandisa Macleod

// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.

console.log("Welcome to the error program"); //  SyntaxError: missing brackets around string
console.log("\n");      //  SyntaxError: missing brackets around string
                        //  ReferenceError: console misspelled with a capital C, error of course only thrown at runtime, after all SyntaxErrors were corrected

let ageStr = "24";  //  SytaxError: == ("equal to in value") had been used instead of one = to assign a value to the variable
                    // Logical Error: deleted all of the string that was not a number so as not to throw a NaN error

age = Number(ageStr) // missed a semicolon but threw no error
                        //  ReferenceError: Integer is not defined, replaced it with Number

console.log("I'm "+age+" years old."); // added spaces within strings
let three = Number("3"); // Logical Error: variable "three" was still of type string and needed to be converted to a number to successfully attempt the sum in the next line

let answerYears = age + three + 0.5; // now this is a sum of two numbers, not a number + a string type variable
                                    // Logical Error: the 6 months had been left out of the equation. 6 months = 0.5 years

console.log("The total number of years:" + answerYears); // SyntaxError: missing brackets around string
answerMonths = answerYears*12 //  ReferenceError: "answer" did not exist, only "answerYears". Also missed a semicolon
console.log("In 3 years and 6 months, I'll be " + answerMonths + " months old."); // SyntaxError: missing brackets around string

//HINT, 330 months is the correct answer