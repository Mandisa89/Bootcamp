separationString = (myString) => {
    // Place your code here

    /* Note from Moipati Thoobe: function is meant to take string as input and output
     each word on a new line */

    // break string into individual words by using the space character as the seperation point
    // store individual words as items in wordArray
    let wordArray = myString.split(" ");
    
    // return items as string, with each item of the array "joined together" by a newline
    return wordArray.join("\n");
}

// Reference: HyperionDev.(2021). L1T12 - String Handling. Retrieved on 31 January 2023 via shared Dropbox folder


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "Line1 Line2 Line3 Line4 Line5 Line6 Line7 Line8 Line9"
];

console.log("------------------------------------------------")

testStrings.forEach((sentence) => {
    let sep = separationString(sentence);
    console.log(sep);
    console.log("------------------------------------------------")

});
