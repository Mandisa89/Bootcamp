// 6 July 2023
// Mandisa Macleod

// L1T15 - Applied Recursion
// Compulsory Task 1


// Create a function called reverseSent that takes two arguments,
// which are the sentence and the position.
// ○ This function should use recursion to reverse a string sentence
// and output the results to the console.


position = 3;
// from the third word onwards, reverse sentence
// Let the first two words of the sentence remain "unreversed"

// Example sentence 
let sentence = "The cat lay on the mat and had a nap";
// Expected output: The cat nap a had and mat the on lay


// ---- FUNCTION ---- //

function reverseSent(sentence, position) {

    // base case
    // if the position indicated is the last word, there is nothing left to reverse the sentence from
    if (position === sentence.length) {

        return sentence;
    }
    else {

        // to index an array, index == position - 1
        let arrayIndex = position - 1;

        // turn the sentence into an array of words
        let sentenceArray = sentence.split(" ");

        // delete the last word of the array and store it in variable "word"
        let word = sentenceArray.pop();

        // insert the last word at the point indicated
        // the point from which the sentence should be reversed is defined by position
        sentenceArray.splice(arrayIndex, 0, word);

        // turn the array back into a sentence
        sentence = sentenceArray.join(" ");

        // increment position by one to carry on adding the new last word behind the former last word already added to the front
        return reverseSent(sentence, position + 1);   
    }

}
console.log(reverseSent(sentence, position));





// REFERENCES

// Hyperiondev.(2018). WD L1T15 - Applied Recursion. Retrieved on 6 February 2023 via shared Dropbox Folder
// Agarwa, Megh.(2021). JavaScript in Plain English: How to use Recursion to Reverse a String in JavaScript. Retrieved on 10 February 2023 at
// MDN Docs.(2023). Array.prototype.splice(). Retrieved on 10 February 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// MDN Docs.(2023). Array.prototype.slice(). Retrieved on 10 February 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice



