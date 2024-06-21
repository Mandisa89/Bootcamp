// 18 January 2023
// Mandisa Macleod

// L1T07 - Beginner Control Structures - While Loop

// COMPULSORY TASK 1 - IS THIS A PALINDROME?



// --------- USER INPUT: word ----------- //

let word = prompt("Let's check for palindromes!\n Please enter your word:");


// programme crashed when I spelt Anna with a capital A at the beginning...
// so I went back and converted the input to lowercase to even it all out.

word = word.toLowerCase(); // Reference: (W3C Schools, 2023)




// -------- word.length ----------------- //

let wordLength = word.length;
console.log(`${word} is ${wordLength} letters long.`); // check length of word


// ------------- WHILE LOOP ------------------//


// determine i = index[0], the first letter
let i = 0; 

// set palindrome to false
let palindrome = false;

// some intermediate checks of letters at two indices...

/* index count starts at 0. 

Example: 

word = "racecar" ;
wordLength = 7; so need to (wordLength - 1) to stay within the 7 letters, since index[7] is letter 8,
which does not exist and will return an "undefined" error.  */


console.log(`The first letter of ${word} is ${word[i]}.`);
console.log(`The second-to-last letter of ${word} is ${word[wordLength - 2]}.`); 


while (i < wordLength) {
    console.log(`index${[i]} of word ${word} = ${word[i]}`);
    

    if (word[i] ==  word[wordLength - 1 - i]) {
        
        palindrome = true;
        i ++;
    }
    else {

        palindrome = false;
        break;
    }   
}



switch (palindrome) {

    case true: 

        console.log(`${word} spelled backwards is ${word}! It's a palindrome.`);
        alert(`${word} spelled backwards is ${word}! It's a palindrome.`);
        break;

    case false: 
        console.log(`${word} spelled backwards is not ${word}. It's not a palindrome.`);
        alert(`${word} spelled backwards is not ${word}! It's not a palindrome.`);
        break;

}




// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T07 - Beginner Control Structures - While Loop . (L1T07 reading material). 
// Retrieved 17 January 2023 via shared Dropbox. 


// Additional Material :

// W3C Schools.(2023). JavaScript String toLowerCase(). Retrieved 18 January 2023 at https://www.w3schools.com/jsref/jsref_tolowercase.asp
// W3C Schools.(2023). JavaScript String length. Retrieved 18 January 2023 at https://www.w3schools.com/jsref/jsref_length_string.asp