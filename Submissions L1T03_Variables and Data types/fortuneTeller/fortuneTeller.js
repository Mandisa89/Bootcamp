// 13 January 2023
// Mandisa Macleod

// L1T03
// Variables and data types

// Compulsory Task 2

// Create A Fortune Teller

/* 
1. The user’s mother’s first name
2. The name of the street they grew up on
3. Their favourite colour as a child
4. Their current age
5. A number between 1 and 10


With this information, you can work out the following:
a. (5) is the number of years in which they will meet their best friend.
b. Their best friend’s name will be (1) + (2).
c. (4) divided by (5) (rounded off) is the number of years in which they will get married. (Hint: look up Math.round())
d. The remainder of (4) divided by (5) is how many children they will have.
e. (4) minus (5) is in how many years they will dye their hair (3).

● Output the result of the above in a multiline string. For example, the output may be:

In 7 years you are going to meet your best friend named Mary Washington.
You will get married in 4 years and have 6 children.
In 20 years you are going to dye your hair blue.

*/


// First, I created the prompts to see if they worked. 
// Then I declared variables to store the user input in and named them accordingly.

/* 1 */ let mothersName = prompt("What is your mother's first name?"); // The user’s mother’s first name
/* 2 */ let streetName = prompt("What is the name of the street you grew up on? \nLeave out 'Street' or 'Road'."); // The name of the street they grew up on
/* 3 */ let favColour  = prompt("What was your favourite colour as a child?"); // Their favourite colour as a child
/* 4 */ let currentAge = prompt("How old are you?"); // Their current age
/* 5 */ let chosenNumber = prompt("Choose a number between 1 and 10: "); // Choose a number between 1 and 10

// Cast variables to the correct data types where important, since user input is always stored as a string.
// Do not declare variables again. Just "update" them as below

currentAge = Number(currentAge); // casting to type Number
chosenNumber = Number(chosenNumber); // casting to type Number

/* a. */ let meetInYears = Number(chosenNumber); // casting not that necessary since not doing math with this one.
/* b. */ let bestFriendName = (`${mothersName} ${streetName}`);
/* c. */ let marriedInYears = Math.round(currentAge/chosenNumber); // divide currentAge by chosenNumber. Round off with Math.round()
/* d. */ let numberOfChildren = currentAge%chosenNumber;// Modulus currentAge by chosenNumber
/* e. */ let dyeHairInYears = currentAge-chosenNumber;

// The Fortune:

alert(`In ${meetInYears} years you will meet your best friend. Their name will be ${bestFriendName}.
In ${marriedInYears} years you will get married, and you will have ${numberOfChildren} beautiful child(ren).
In ${dyeHairInYears} years you will dye your hair ${favColour} - and you'll look blerry gorgeous! Don't you worry!`);




/* 
Base Source Material: 
Hyperiondev.(2021). Variables and Data Types (L1T03 reading material). 
Retrieved 13 January 2023 via shared Dropbox. 

Additional Sources: 

MDN Web Docs.(2022). Math.round(). Retrieved 13 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
*/