// Mandisa Macleod

// L1T30 Higher Order Functions

// create a higher order function that filters an array of strings containing 10 words,
// of which at least 3 words are 6 letters in length.

// The filter should return a new array containing only the words that are 6 letters long.

// myFilterFunction() should take two parameters  - the array and a callback function

// a higher order function is a function that takes another function as a parameter,
// and/or returns a function.

// array of strings containing 10 words
// 6-letter words: "amazed", "guitar", "peachy"
const wordArrayOG = [
  "sound",
  "amazed",
  "butterfly",
  "guitar",
  "peachy",
  "bootcamp",
  "perseverance",
  "pride",
  "streams",
  "consciousness",
];

// create arrow function that identifies words according to being exactly 6 letters long
// returns array of boolean values for each word
const isSixLetterWord = (word) => word.length == 6;

// HOF takes two parameters (the array,the callbackfunction)
function myFilterFunction(arr1, callbackFunction) {
  // new array of six-letter words
  const arrOfSixLetterWords = arr1.reduce((accumulator, element) => {
    // if true
    if (callbackFunction(element)) {
      // dot dot dot (spraed syntax) before the accumulator ensures you return the individual elements of the array, instead of the whole array
      return [...accumulator, element];
    } else {
      return [...accumulator];
    }
  }, []); // ,[] defines the starting point of the accumulator as an empty array (important)
  return arrOfSixLetterWords;
}

console.log(myFilterFunction(wordArrayOG, isSixLetterWord));

// REFERENCES //

// First I thought array.map() was the best approach - then I found array.reduce()
// Stackoverflow.2015. How to skip over an element in .map()? Retrieved on 29 May 2023 at https://stackoverflow.com/questions/24806772/how-to-skip-over-an-element-in-map
// MDN DOCS.2023. Array.prototype.reduce(). Retrieved on 29 May 2023 at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Borislav Hadzhiev.Unknown Date. map() method returns undefined in JavaScript [Solved]. Retrieved on 29 May 2023 at https://bobbyhadz.com/blog/javascript-map-returns-undefined#using-the-reduce-method-instead-of-map
// My brother showed me the existence of the spread syntax.
// Mentor Chad Probert named the dot dot dot as spread syntax and explained it further (very helpful, came prepared with examples, - I'm grateful)
// Traversy, Brad [YOUTUBE]. 2018. Javascript Higher Order Functions and Arrays. Retrieved on 30 May 2023 at https://www.youtube.com/watch?v=rRgD1yVwIvE&ab_channel=TraversyMedia
// Color Code [YOUTUBE]. 2022. Higher Order Functions - Javascript Tutorial. Retrieved on 30 May 2023 at https://www.youtube.com/watch?v=0aKZvNNf8BA&t=515s&ab_channel=ColorCode
// Quick, James Q [YOUTUBE]. 2021. JavaScript Array Filter Method Practice in 5 Minutes. Retrieved on 30 May 2023 at https://www.youtube.com/watch?v=3LOEGS4qcRM&ab_channel=JamesQQuick
// Quick, James Q [YOUTUBE]. 2021. JavaScript Array Reduce Method Practice in 5 Minutes. Retrieved on 30 May 2023 at https://www.youtube.com/watch?v=0aJ65a6LsSc&ab_channel=JamesQQuick
// Web Dev Simplified [YOUTUBE]. 2022. Learn JavaScript Array Reduce In 10 Minutes. Retrieved on 29 May 2023 at https://www.youtube.com/watch?v=s1XVfm5mIuU&ab_channel=WebDevSimplified
