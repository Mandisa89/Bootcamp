// 23 January 2023
// Mandisa Macleod

// L1T09 Towards Defensive Programming I

// Compulsory Task 2

// Write a program with two compilation errors, a runtime error and a logical error.

// add a string and a number
// access and index outside the array
// 


let userName = 'Gregory'; // Compilation Error, used two different types of quotation marks to open and close the string
let nameLength : userName.length; // Compilation Error: used colon instead of assigning with =
                                // also note: name length here is 7


if (true){
    console.log(`${userName}'s child has a name that starts with ${userName}'s last letter ${userName[nameLength]}.`); 
    // Runtime Error (Type Error): to access the last letter of Gregory, the index would have to be index of [nameLength - 1], since we index from 0

}
else { 
    console.log(`This will never run.`); 
    // Logical Error: this will never run because there is nothing in this code that would render anything false. 
    // There is no comparison, and no booleans, so the if statement will always be true, and the else statement will never run.
}
