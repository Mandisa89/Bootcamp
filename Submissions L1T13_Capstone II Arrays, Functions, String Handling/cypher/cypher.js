// 30 January 2023
// Mandisa Macleod

// L1T13 - Capstone Project II — Arrays, Functions, and String Handling
// Compulsory Task 1 - CAESAR CIPHER

// PLEASE READ EXTRA NOTE AT THE END FOR TREATMENT OF NUMBERS


// DECLARE FUNCTION //

// declare function with parameters of string and of key
function caesarCipher (string, key) {

    // declare array of encrypted characters
    let cipherCharArray = [];

    // declare variable to store individual encrypted characters in
    let cipherValue;

    // ASCII characters //
    // define ASCII value ranges which determine what the character is (i.e. number, uppercase letter or lowercase letter)
    const numberLowerLimit = 48;
    const numberUpperLimit = 57;

    const upperCaseLowerLimit = 65;
    const upperCaseUpperLimit = 90;

    const lowerCaseLowerLimit = 97;
    const lowerCaseUpperLimit = 122;

    // in order to encrypt each character of the plaintext message, iterate over the string in its entire length
    for (let i = 0; i < plaintext.length; i++) {

        // assign ASCII value of plaintext[i] to plainAsciiValue
        let plainAsciiValue = plaintext[i].charCodeAt();

        // ASCII range//
        // will yield boolean of true or false
        const isNumberCharacter =  plainAsciiValue >= numberLowerLimit && plainAsciiValue <= numberUpperLimit // Numbers are ASCII decimal code 48 - 57
        const isUpperCaseLetter = plainAsciiValue >= upperCaseLowerLimit && plainAsciiValue <= upperCaseUpperLimit  // Capital letters are ASCII decimal code 65 - 90
        const isLowerCaseLetter = plainAsciiValue >= lowerCaseLowerLimit && plainAsciiValue <= lowerCaseUpperLimit // Lowercase letters are ASCII decimal code 97 - 122

        // According to the range the character's ASCII value falls in, execute the code
        if (isNumberCharacter) {

            // use original character found at plaintext[i]
            // do not convert number to its ASCII value
            // do convert the string of the number to a real number
            // encrypt number by adding the cipherKey value (e.g. 3 + 15)
            cipherValue = Number(plaintext[i]) + cipherKey;

            
            // add apostrophe to keep the resultant numbers discernible as one encrypted number within a row of numbers
            // note of the apostrophe will have to be made when decrypting (please read EXTRA NOTE at the end)
            // add encrypted number to the array of encrypted characters
            cipherCharArray.push(`${cipherValue}'`);  
        }
        else if (isUpperCaseLetter) {

            // use plainAsciiValue, the ASCII value of the character at plaintext[i]
            // deduct the upperCaseLowerLimit from the ASCII Value of the character to work within a range of 0 - 25
            // encrypt the character by shifting its ASCII value by the value of the cipherKey
            // use modulo of 26 (the range of the alphabet) to keep the result within the 0 - 25 range
            // then add the upperCaseLowerLimit back to place the result in the uppercase range of 65 - 90
            // store the shifted ASCII value in the variable cipherValue;

            cipherValue = plainAsciiValue - upperCaseLowerLimit; // - 65
            cipherValue = (cipherValue + cipherKey) % 26;
            cipherValue = cipherValue + upperCaseLowerLimit; // add 65 back in

            // turn the ASCII value back into a string character
            cipherValue = String.fromCharCode(cipherValue); // Reference: String.fromCharCode() [MDN Docs, 2022]

            // add encrypted character to the array of encrypted characters
            cipherCharArray.push(cipherValue);
        }
        else if (isLowerCaseLetter) {

            // use plainAsciiValue, the ASCII value of the character at plaintext[i]
            // deduct the lowerCaseLowerLimit from the ASCII Value of the character to work within a range of 0 - 25
            // encrypt the character by shifting its ASCII value by the value of the cipherKey
            // use modulo of 26 (the range of the alphabet) to keep the result within the 0 - 25 range
            // then add the lowerCaseLowerLimit back to place the result in the uppercase range of 97 - 122
            // store the shifted ASCII value in the variable cipherValue;

            cipherValue = plainAsciiValue - lowerCaseLowerLimit; // - 97
            cipherValue = (cipherValue + cipherKey) % 26;
            cipherValue = cipherValue + lowerCaseLowerLimit; // add 97 back in
            
            // turn the ASCII value back into a string character
            cipherValue = String.fromCharCode(cipherValue); // Reference: String.fromCharCode() [MDN Docs, 2022]

            // add encrypted character to the array of encrypted characters
            cipherCharArray.push(cipherValue);
        }
        else {
                // it's a special character
                // do not change ASCII value of this character
                // push to new array as is
        
                cipherCharArray.push(plaintext[i]);
        } 
    }
    // return the cipherCharArray converted to a string with .join("")
    return cipherCharArray.join("");
}


// THE PROGRAMME //


// create variable to store the key (the value of the shift)
// declared outside the function so the user can determine the key in a future version of this programme
// negative key would require additional if ele statement (please see EXTRA NOTE)
const cipherKey = 15;

// prompt user for input
let plaintext = prompt("What message would you like to encrypt:");

// output the encrypted message by calling function on user's input
alert(`Your message: ${plaintext}\nYour encrypted message: ${caesarCipher(plaintext, cipherKey)}`);
console.log(`Your message: ${plaintext}\nYour encrypted message: ${caesarCipher(plaintext, cipherKey)}`);



// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T13 - Capstone Project II — Arrays, Functions, and String Handling. (L1T13 reading material). 
// Retrieved 30 January 2023 via shared Dropbox.

// Additional Source Material:

// Wikipedia.(2022).            Caesar cipher.                                     Retrieved on 30 January 2023 at https://en.wikipedia.org/wiki/Caesar_cipher
// Wikipedia.(2023).            Cipher.                                            Retrieved on 30 January 2023 at https://en.wikipedia.org/wiki/cipher
// MDN Docs.(2022).             String.fromCharCode().                             Retrieved on 31 January 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
// Rapid Tables.(date unkown).  ASCII Table.                                       Retrieved on 31 January 2023 at https://www.rapidtables.com/code/text/ascii-table.html
// StackExchange.(2017).        Using a Caesar Cipher with a key higher than 26?   Retrieved on 31 January 2023 at https://crypto.stackexchange.com/questions/42059/using-a-caesar-cipher-with-a-key-higher-than-26
// CodeGuppy.(2022).            JAVASCRIPT MODULO AND THE CAESAR CIPHER.           Retrieved on 31 January 2023 at https://codeguppy.com/blog/javascript-modulo/index.html
// Cryptii.(2022).              Caeser cipher. Encode and decode online.           Retrieved on 31 January 2023 at https://cryptii.com/pipes/caesar-cipher
// DCode.(2023).                Caeser cipher                                      Retrieved on 1 February 2023 at https://www.dcode.fr/caesar-cipher


// EXTRA NOTE //

// CIPHERKEY
// If cipherKey is negative(ie -15), the encryption would require adding 26
// e.g cipherValue = (cipherValue + (-15) + 26) % 26

// NUMBERS
// I had initially encrypted the numbers by adding the key, and returning the values seperated by ' so the singular
// encrypted number could still be distinguished when in a row of encrypted numbers.
// E.g 33 becomes 1818, which I presented as 18'18 so it would still be clear how many numbers there were in the
// original plaintext
// Though that approach would surely pose problems when decrypting the message, I ultimately decided to keep that approach
// to demonstrate one possible way to solve it, which could be refined later. 
// Adding the key and an apostrophe to encrypt the number introduced a special character that was not present in the 
// original plaintext, and that seems less than optimal.
// But if numbers are important to encrypt (like coordinates of Caesar's army base), then this could be one way.

// Reading DCode's website gave me the idea to encrypt numbers by using roman numerals.
// I loved this idea, but the scope of this approach was greater than I initially realised.
// Converting the numbers to roman numberals with my current knowledgewould have meant creating 
// an extensive map of number combinations and their roman numeral equivalent. 
// (I started a map which can be found in romanNumerals.js)
// E.g. ("1", "I")
//      ("4", "IV")
//      ("400", "CD")
//      ("300", "CCC")
//      ("43", "XLIII")

// The way to implement it would be to create this map, or copy an exisiting one from the web, and check the encrypted
// string for matches. Checking and encrypting the numbers in the for-loop would not do, since "5" is "V",
// but if the "5" is followed by two zeros "500" is "D". But that cannot be determined when iterating over single numbers,
// therefore the resultant string would have to be checked, and the encryption applied before the function
// returns the final encrypted string.
// I did find some more refined solutions on StackOverflow but I don't fully understand them yet
// StackOverflow.(2012). Convert a number into a Roman numeral in JavaScript. Retrieved on 1 February 2023 at (https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript)

// One further thought would be to then shift the roman numeral by the key (DCode, 2023).
// The numerals could also just be left as is, since converting numbers to roman numerals could be encryption enough,
// and not encrypting the numbers further would lessen the chance of the message being easily decrypted 
// by decrypting the numbers first - by performing math on the numbers and checking
// for the most likely outcome, and so getting the key.

