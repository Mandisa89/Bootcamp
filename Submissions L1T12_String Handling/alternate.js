alternativeString = (myString) => {

    // we want to target every second letter starting from index 0

    // create variable for the interval at which characters should be converted to uppercase
    let interval = 2;

    // create new array in which to collect the characters, altered and unaltered
    let collectChars = [];

    // execute for-loop for every letter of the word
    for (let i = 0; i < myString.length; i++) {

        // if the index of the letter modulus the interval equals zero
        if ((i % interval) == 0) {

            // turn the character at that index to uppercase and push to new array
            collectChars.push(myString[i].toUpperCase());

        } 
        else {
            // turn the character at this index to lowercase and push to the new array
            collectChars.push(myString[i].toLowerCase());
        }   
    }
    // turn the array into a string
    return collectChars.join("");
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
]

let correctStrings = [
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = alternativeString(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}
