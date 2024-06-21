// 13 January 2023
// Mandisa Macleod

// L1T03
// Variables and data types

// Compulsory Task 1

// 1.1

// create variables described in task and assign appropriate values
// output product of the two numerical values
// concatenate the two strings and output the result
// using template literals, output a multiline string which might read as follows:

/*  
The boolean is: true
The first number is: 6
The second nmber is: 5
6 x 5 = 30
The first string is: This is my first string.
The second string is: This is my second string!
These two together make: This is my first string. This is my second string! 
*/


let myFirstNumber = 8; // type is number (integer) due to presence of digit, lack of "" and decimal point
let mySecondNumber = 2; // same note as above
let myFirstString = "Dancing in the moonlight!"; // data type of variable is string due to presene of ""
let mySecondString = "Everybody's feeling warm and bright."; // same as above

console.log("myFirstNumber * mySecondNumber is = " + myFirstNumber*mySecondNumber); // multiply the two numbers
console.log(myFirstString + "\n" + mySecondString); // concatonate the strings and output result

let bool0 = Boolean(myFirstNumber - 8); // Convert the type of any chosen variable to type boolean.
// I chose variable myFirstNumber, which is data typer number/integer.
// I decided to make the boolean value "false". 
// I declared variable "bool0" and assigned it the value inside the brackets, while casting all within the brackets to type boolean.
// Inside the brackets, I subtracted 8 from 8, which is equal to 0, and as a boolean, only 0 is "false", all other numbers are "true".
// (Had I used a string, I could convert a string that is a space.)


let numProduct = myFirstNumber*mySecondNumber; //  the product of num1 and num2


// Now the end result, refactored using template lineals in one multiline console.log()

console.log(`
The boolean is: ${bool0}
My first number is: ${myFirstNumber}
My second number is: ${mySecondNumber}
The product of ${myFirstNumber} * ${mySecondNumber} = ${numProduct}
The first line of the chorus is "${myFirstString}"
The second line of the chorus is "${mySecondString}"
"(Everybody now!) ${myFirstString} (Waw!) ${mySecondString}"`); 

// output value of bool0, which is "true"
// prints to console "My first number is 8"
// prints to console "My second number is 2"
// prints to console "The product of 8 * 2 = 16"
// prints to console "(Everybody now!) Dancing in the moonlight! Everybody's feeling warm and bright."



/* 
Base Source Material: 
Hyperiondev.(2021). Variables and Data Types (L1T03 reading material). 
Retrieved 13 January 2023 via shared Dropbox. 

Additional Sources: 

// How best to structure multiline template literals and how they work. //

MDN Web Docs.(2023). Template Literals (Template Strings). Retrieved on 13 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
FreeCodeCamp.(2022). JavaScript Multiline String – How to Create Multi Line Strings in JS. Retrieved on 13 Januerary 2023 at https://www.freecodecamp.org/news/javascript-multiline-string-how-to-create-multi-line-strings-in-js/
*/




    /*  ----------------------------------------------------------------------------------------------------------------------------- */
    
    /* This is Draft One, consisting of individual console.log() 
   
    console.log(bool0); // output value of bool0, which is "true"
    console.log(`${sentenceNum1} ${myFirstNumber}`); // prints to console "My first number is 8"
    console.log(`${sentenceNum2} ${mySecondNumber}`); // prints to console "My second number is 2"
    console.log(`${sentenceProdNum} ${myFirstNumber} * ${mySecondNumber} = ${numProduct}`); // prints to console "The product of 8 * 2 = 16"
    console.log(`${sentenceCheer} ${myFirstString} ${mySecondString}`); // prints to console "(Everybody now!) Dancing in the moonlight! Everybody's feeling warm and bright."
     */


    /*

    This is Draft Two. I found having packaged even the sentences into ${expressions} made it hard to read the code.
    So in the final Draft, I went back to writing out the sentences within the template literals to provide more context,
    and only used expressions for the variables that one might want to alter (i.e the number values or the myFirstString and mySecondString).


    // to be most succinct and use only ${expressions} in this template literal (is singular the right way to say it?), all sentences will be packaged in a variable of their own.
   
    let sentenceNum1 = "My first number is :"; 
    let sentenceNum2 = "My second number is :";
    let sentenceProdNum = "The product of";
    let sentenceCheer = "(Everybody now!)";

    console.log(`
    ${bool0}
    ${sentenceNum1} ${myFirstNumber}
    ${sentenceNum2} ${mySecondNumber}
    ${sentenceProdNum} ${myFirstNumber} * ${mySecondNumber} = ${numProduct}
    ${sentenceCheer} ${myFirstString} ${mySecondString}`); 
    */
