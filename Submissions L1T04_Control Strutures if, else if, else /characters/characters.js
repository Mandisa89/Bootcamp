// 13 January 2023
// Mandisa Macleod

// L1T04
// Beginner Control Structures — if, else, and else-if Statements

// Compulsory Task 1

/* 
Note: For this task you will need to create an HTML file to get input from a user. If you need a refresher on how to do this, go back to the example.js and index.html files in your Task 2 folder.
● Create a JavaScript file called characters.js in this folder.
● Ask the user to input an uppercase letter, a lowercase letter or a number.
● If the character is an uppercase letter, output their character and “is an uppercase letter.” E.g. “R is an uppercase letter.”
● If the character is a lowercase letter, output their character and “is a lowercase letter.” E.g. “g is a lowercase letter.”
● If the character is a number, output their character and “is a number.” E.g. “6 is a number.”
● If the character is none of these, output their character and “is not a letter or number”. E.g. “? is not a letter or number.”
● Hint 1 : you may want to research the functions toUpperCase(), toLowerCase() and Number.isInteger()
● Hint 2 : A Special character to upper case is equal a special character to lower case.
*/


// Ask the user to input an uppercase letter, a lowercase letter or a number.
// Store it in an appropriately named variable
let userInput = prompt("Please give me an uppercase letter, lowercase letter or number."); 

userInput = userInput[0]; /*The user could also break the rules and input multiple characters. 
This is solved by handling only userInput[0] and running that through the programm  */

if (Number(userInput)) { /* Can input, which is automatically stored as a string,
be successfully converted to type Number? 
The input is supposed to be just one character, so it can only be a singular integer, not a float */
    alert(`${userInput} is a number.`); 
} 
else if (userInput) { /* I looked up method variable?.match(/[A-Z]/) on www.Codingbeautydev.com */
    if(userInput?.match(/[A-Z]/)) {  // if userInput is a uppercase letter 
        alert(`${userInput} is an uppercase letter.`);
    } else if (userInput?.match(/[a-z]/)) {  /* userInput is a lowercase letter */
     alert(`${userInput} is a lowercase letter.`); 
    } else {
        alert(`${userInput} is a not a letter or a number.`); // it's neither lowercase nor uppercase, nor a number.
    }
} 

/* Just before I finished this approached, I used my brother as a rubber duck.
While talking through it, I realized how I could use the supplied hint of researching toUpperCase()
and === to see if a variable remained of the same value and type when converted*/

/* So here is solution 2.
Both programms will run back to back.*/

// Ask the user to input an uppercase letter, a lowercase letter or a number.
// Store it in an appropriately named variable

let userInput2 = prompt("Please give me an uppercase letter, lowercase letter or number."); 

userInput2 = userInput2[0]; /*The user can also break the rules and input multiple characters without objection. 
I suppose this could be solved by handling only userInput[0] and running that through the programm  */

if (Number(userInput2)) {
    alert(`${userInput2} is a number.`);
}
else if (userInput2.toUpperCase() === userInput2) {
    if (userInput2.toLowerCase() !== userInput2) { /* I looked up !== "not equal in value or type" at W3C Schools */
    alert(`${userInput2} is an uppercase letter.`);
    }
    else {
    alert(`${userInput2} is not a number or a letter.`);
    }
} else if (userInput2.toLowerCase() === userInput2) {
    if (userInput2.toUpperCase() !== userInput2) {
        alert(`${userInput2} is an lowercase letter.`);
    }
    else {
        alert(`${userInput2} is not a number or a letter.`);
    }
}
else {
    alert("Something has gone wrong.");
}


/* I'm sure Solution Two could have been made better by using logical operators && ||, but I decided this worked well enough for now. */



/* 
Base Source Material: 
Hyperiondev.(2021). Beginner Control Structures — if, else, and else-if Statements. (L1T04 reading material). 
Retrieved 13 January 2023 via shared Dropbox. 

Additional Sources:

MDN Developer Docs.(2022). Number.isInteger(). Retrieved 13 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Coding Beaty.(2022). How to Check if a String Contains Uppercase Letters in JavaScript. Retrieved 14 January 2023 at https://codingbeautydev.com/blog/javascript-check-if-string-contains-uppercase-letters/#:~:text=November%205%2C%202022-,To%20check%20if%20a%20string%20contains%20uppercase%20letters%20in%20JavaScript,Otherwise%2C%20it%20will%20return%20false%20.
W3C Schools.(date unknown). JavaScript Comparison and Logical Operators. Retrieved 14 January 2023 at https://www.w3schools.com/js/js_comparisons.asp
*/ 
