disappearString = (myString, toErase) => {
//                      \       /
//                a string     not a boolean, though the naming convention suggests it?

    // Function: erase the first instance of one of the characters included in stringToErase from myString

    // break string into individual characters using split("");
    // string "aeiou" becomes ["a", "e", "i", "o", "u"]
    let eraseArray = toErase.split("");

    // iterate through each of the elements in eraseErray [a, e, i, o, u]
    eraseArray.forEach(element => {

        // replace() only erases the first occurance of a matching string/character/number
        /* replace the first instance of a match of an element of the eraseArray 
           (i.e. "a", "e", "i", "o", "u") in myString with nothing (expressed as "") */
        
        myString = myString.replace(element, ""); 
        
        
        // To look into: perhaps using /gi regex would erase all instances, in lowercase and uppercase
        // To look into: how to call a variable inside a regular expression
        
    });

    return myString;

}

// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "the quick brown fox jumps over the lazy dog",
    "hello world",
    "software engineering is fun",
    "i like javascript",
    "clown case",
    "rhythms"
]

let stringToDisappear = "aeiou"

let correctStrings = [
    "th qck brwn fox jumps over the lzy dog",
    "hll world",
    "sftwr engneering is fn",
    " lik jvascript",
    "clwn cs",
    "rhythms"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = disappearString(test, stringToDisappear);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}


// REFERENCES //


// Base Source Material: 

// Hyperiondev.(2021). L1T12 - String Methods. (L1T12 reading material). 
// Retrieved 30 January 2023 via shared Dropbox.

// Additional Source Material:

// W3C Schools.(2023). JavaScript String split(). Retrieved 30 January 2023 at https://www.w3schools.com/jsref/jsref_split.asp