// 26 January 2023
// Mandisa Macleod

// L1T11 - Using Built-In Functions and Defining your own Functions

// Compulsory Task 2


// ● Write a program that starts by asking the user to input a word.
// ● The program should log the following manipulations to the console:
// o The word where every second character is replaced with a ’!’. 
// o The word reversed.
// o The word where every 6th letter is uppercase.
// o An array of the ascii values for each character in the word.


// ---- DECLARE ALL FUNCTIONS TO BE USED IN THE PROGRAMME ---- //

//  Function to replace every second character with '!' //


function repSecCharWithExclam(word) {

    // create new empty string to store values in
    let exclamWord = "";

    // the interval at which characters should be altered
    const positionInterval = 2;

    for (let i = 0; i < word.length; i++) {

        // adjust i to target the position you want, since letter 1 != index[1], it is index[0]
        const charPosition = (i + 1)

        // if the position of the letter divided by the positionInterval == 0, 
        // then replace that char with "!""
        if (charPosition % positionInterval == 0) {
            
            exclamWord = exclamWord + "!";
        }

        // otherwise, add the original character found at word[i] to the new string
        else {
            
            exclamWord = exclamWord + word[i];
        }
    }
    return exclamWord;
}


//  Function: Reverse the word //

function reverseWord(word) {

    // declare new array to push characters to
    let reverseOrderChars = [];

    for (let i = 0; i < word.length; i++) {

        // add the last character to the beginning of a new variable, iterating forwards through the index
         reverseOrderChars.push(word[word.length - i - 1]);  
    }
    
    let reverseOrderWord = reverseOrderChars.join("");
    return reverseOrderWord;
}



// Function: Return word with every 6th character turned to uppercase //
// Thank you for the revision notes, Johan JvJ

function sixthCharToUppercase(word) {

    // declare temporary string
    let tempString = "";

    // the interval at which characters should be altered
    const positionInterval = 6;

        for (let i = 0; i < word.length; i++) {
           
            // adjust i to target the position you want, since letter 1 != index[1], it is index[0]
            const charPosition = (i + 1);

            // if the placement of the letter modulus the chosen interval at which to alter is == 0, then alter the character found at that index to uppercase
            if (charPosition % positionInterval == 0) {

                // add that altered character to the new string
                tempString = tempString + word[i].toUpperCase();
            }
            else {
                // add the original character to the new string
                tempString = tempString + word[i];
            }        
        }
    return tempString;
}



// Function: Return array of ASCII values for each character of the word //

function toAsciiValues(word) {

    // declare array to collect the ascii values in
    let tempArray = [];

    for (let i = 0; i < word.length; i++) {

        let asciiChar = word.charCodeAt(i);
        tempArray.push(asciiChar);
    }
    return tempArray;
}



// ---- RUN THE PROGRAMME ---- //

// get input from user 
let userWord = prompt(`Give me a word:`);

// output user's word altered by replacing every second character with "!"
console.log(repSecCharWithExclam(userWord));

// output user's word spelled backwards
console.log(reverseWord(userWord));

// output the user's word with every sixth character turned to uppercase
console.log(sixthCharToUppercase(userWord));

// output the user's word as an array with each character of the word represented by ASCII values
console.log(toAsciiValues(userWord));







// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T11 - Beginner Data Structures — Arrays and Maps. (L1T11 reading material). 
// Retrieved 25 January 2023 via shared Dropbox. 

// Additional Material:
// MDN Docs.(2022). Math.min(). Retrieved on 25 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// MDN Docs.(2022). Math.round(). Retrieved on 25 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// W3C Schools.(2022). JavaScript: Get the median of an array of numbers. Retrieved on 25 January 2023 at https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-88.php
// MDN Docs.(2022). Array.prototype.sort(). Retrieved on 25 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#try_it
// Pop, Florin.(2021). sort Array Method | Javascript Tutorial. Retrieved on 26 January 2023 at https://www.youtube.com/watch?v=RsFBsBep-hA
// StackOverflow.(2018). Calculating Median - Javascript. Retrieved on 26 January 2023 at https://stackoverflow.com/questions/45309447/calculating-median-javascript
// MDN Docs.(2022). Array.from(). Retrieved on 26 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Mastering JS.(2022). Calculate the Median of an Array in JavaScript. Retrieved on 26 January 2023 at https://masteringjs.io/tutorials/fundamentals/median

// Used Calculator.net to check the results of my programme against. Retrieved 26 January 2023 at https://www.calculator.net/