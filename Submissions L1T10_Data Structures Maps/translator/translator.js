// 25 January 2023
// Mandisa Macleod

// L1T10 - Beginner Data Structures — Arrays and Maps

// Compulsory Task 3


// ● You are going to create a map that can be used as a translator for a
// language of your choice.
// ● Create a map with 10 key-value pairs, where the English word is the key,
// and the translated word is the value.
// ● Ask the user what word they would like to translate.
// ● When the user inputs a word that is one of the keys, it should output the
// corresponding value.


// create map
let translatorMap = new Map();

// assign key value pairs (english, german)
translatorMap.set("hello", "Hallo");
translatorMap.set("pancake", "Pfannkuchen");
translatorMap.set("television", "Fernseher");
translatorMap.set("window", "Fenster");
translatorMap.set("door", "Tür");
translatorMap.set("dog", "Hund");
translatorMap.set("cat", "Katze");
translatorMap.set("bird" , "Vogel");
translatorMap.set("coffee", "Kaffee");
translatorMap.set("sun", "Sonne");




// ask the user what word they would like to translate

// loop until user inputs a word that matches with one of the keys

do {

let userWord = prompt(`Input the English word you would like to translate:`);
let doesKeyExist = translatorMap.has(userWord); // true or false

    if (doesKeyExist == true) {

        // return value paired to the inputted key
        let translatedWord = translatorMap.get(userWord);
        alert(`English  |   German\n\n"${userWord}"   |   "${translatedWord}"`);
    }
    else {

        // error message
        alert(`Sorry, "${userWord}" is not yet in our dictionary. Please try another word.`);

        // continue loop
        doesKeyExist = false;
    }

} while (false); // continue loop while doesKeyExist == false



// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T10 - Beginner Data Structures — Arrays and Maps. (L1T10 reading material). 
// Retrieved 24 January 2023 via shared Dropbox. 

