// 23 January 2023
// Mandisa Macleod

// I see now this was the "before" in the example case. That's alright, this was quite fun.

// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program.
// Now look at the error messages, and find and fix the errors.
 
let firstName = "Tim"; // VSCode was crossing "name" out when it was being called as a template literal in declaring fullMessage. It suggested nesting it inside a do while loop, which made no sense, so I googled what the problem might be.
                        // (StackOverflow, 2019) "name" is a special global variable in the browser, to be treated like a reserved word, so one should not use it to name a variable with. The code will execute fine, but only up to a point.

let surname = "Jones"; // I removed the space from the front of the string
age = 21;

let fullMessage = `${firstName} ${surname} is ${age} years old.`; /* ReferenceError: variable "is" is not declared anywhere, so I shall turn it into the string it was probably meant to be*/ 
                                                        // VSCode also suggested I turn the concatenated string into a template string, which I did.
                                                        // I also added a missing semicolon

console.log(fullMessage); // SyntaxError: missing brackets around variable of which the value is to be printed



// REFERENCES

// StackOverflow.(2019) Why does my variable show it's deprecated? Retrieved on 23 January 2023 at https://stackoverflow.com/questions/65379554/why-does-my-variable-show-its-deprecated