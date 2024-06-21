// 6 July 2023
// Mandisa Macleod

// L1-T15 - Applied Recursion
// Compulsory Task 2

// Create a file called searchIndex.js and in this file create a function which:
// ○ will recursively search for a word in an array and
// ■ If the word is found, return the index position of that word
// ■ If the word is not found, return -1 if the word is not found.

// example array
let dataArray = ["java", "html", "javascript", "css"];

// example word
let exampleWord = "hallo Lefi";



function searchIndex(availableWords, currentIndex, word) {

    // create variable for boolean of whether match was found
    let wasMatchFound = availableWords[currentIndex] == word;
    
    // if match was found
    if (wasMatchFound == true) {

        // return index
        return currentIndex;
    }
    // if we have reached end of array without finding a match, return -1
    else if ((availableWords.length - 1) == currentIndex){

        return -1;
    }
    // otherwise run function again on the next word in the array
    else {

        return searchIndex(availableWords, currentIndex + 1, word);
    }

}

let result = searchIndex(dataArray, 0, exampleWord);

if (result < 0) {

    console.log(`The word "${exampleWord}" could not be found in the array.`);


}
else {
    console.log(`The word "${exampleWord}" is found at index ${result} of the array.`);
}


// REFERENCES

// Hyperiondev.(2018). WD L1T15 - Applied Recursion. Retrieved on 6 February 2023 via shared Dropbox Folder
// Discord.(2022). Alfie#8977 "L1T15". Retrieved on 13 February 2023 at https://discord.com/channels/577460436316717056/1006835512583135242/threads/1021743054392148078 . 
// Agarwa, Megh.(2021). JavaScript in Plain English: How to use Recursion to Reverse a String in JavaScript. Retrieved on 10 February 2023 at
